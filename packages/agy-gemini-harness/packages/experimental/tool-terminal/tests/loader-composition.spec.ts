import { executeToolFixture } from '@gemini-agy/dsh-tool-testkit'
import * as NativeToolExecutor from '@gemini-agy/dsh-tool-executor-native'
import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { unsupportedModel, provideWorkingDirectoryFixture, unsupportedInbox } from '@gemini-agy/dsh-agent-loop-testkit'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { afterEach, describe, expect, it } from 'vitest'
import { Context } from '@gemini-agy/cordis'
import Loader from '@gemini-agy/cordis-plugin-loader'
import Include from '@gemini-agy/cordis-plugin-include'
import { brandString } from '@gemini-agy/dsh-brand'
import type { ToolCallId } from '@gemini-agy/dsh-llm'
import { Session, type SessionId } from '@gemini-agy/dsh-session'
import AgentRegistry from '@gemini-agy/dsh-agent'
import type { Agent } from '@gemini-agy/dsh-agent'
import SystemPrompt from '@gemini-agy/dsh-system-prompt'
import ToolRuntime from '@gemini-agy/dsh-tools'
import TerminalSessionService from '@gemini-agy/dsh-terminal'
import SandboxProvider from '@gemini-agy/dsh-sandbox'
import type { ConfinedArgv, SandboxPolicy } from '@gemini-agy/dsh-sandbox'
import SandboxPolicyService from '@gemini-agy/dsh-sandbox-policy'
import SessionProjectionRegistry from '@gemini-agy/dsh-session-projection'
import LocalSubprocessRuntime from '@gemini-agy/dsh-subprocess-local'
import * as TerminalLocal from '@gemini-agy/dsh-terminal-bash'
import * as ToolPty from '@gemini-agy/dsh-tool-terminal'

let root: string | undefined
let context: Context | undefined

afterEach(async () => {
  await context?.fiber.dispose()
  context = undefined
  if (root !== undefined) await rm(root, { recursive: true, force: true })
  root = undefined
})

class PassthroughSandbox extends SandboxProvider {
  async confine(argv: readonly string[], _policy: SandboxPolicy): Promise<ConfinedArgv> {
    return { argv: [...argv], enforcement: 'full', denialSignatures: [], runnerFailureRules: [] }
  }
}

async function agent(ctx: Context): Promise<Agent> {
  const scope = ctx.plugin(() => {})
  const id = brandString<SessionId>('pty-loader-agent')
  const session = Session.create(id)
  const value: Agent = {
    id, options: {}, session, model: unsupportedModel(),
    inbox: unsupportedInbox(),
    status: 'idle',
    ctx: scope.ctx,
    send: () => {},
    followup: () => {}, steer: () => {}, inject: () => {}, cancel() {},
    runMaintenance: job => job(new AbortController().signal),
    whenIdle: () => Promise.resolve(),
  }
  await ctx.agents.register(value)
  return value
}

function resultText(result: { content: { type: string; text?: string }[] }): string {
  return result.content.filter(block => block.type === 'text').map(block => block.text).join('')
}

const suite = process.platform === 'linux' || process.platform === 'darwin' ? describe : describe.skip

suite('terminal real Loader composition through cordis.yml', () => {
  it('boots cordis.yml and preserves shell state across real tool calls', async () => {
    root = await mkdtemp(join(tmpdir(), 'dsh-pty-loader-'))
    const configPath = join(root, 'cordis.yml')
    await writeFile(configPath, [
      "- name: '@gemini-agy/dsh-agent'",
      "- name: '@gemini-agy/dsh-system-prompt'",
      "- name: '@gemini-agy/dsh-tools'",
      "- name: '@gemini-agy/dsh-tool-executor-native'",
      "- name: '@gemini-agy/dsh-terminal'",
      "- name: '@gemini-agy/dsh-test-sandbox'",
      "- name: '@gemini-agy/dsh-session-projection'",
      "- name: '@gemini-agy/dsh-sandbox-policy'",
      '  config:',
      '    mode: danger-full-access',
      `    workspaceRoot: ${JSON.stringify(root)}`,
      "- name: '@gemini-agy/dsh-subprocess-local'",
      "- name: '@gemini-agy/dsh-terminal-bash'",
      '  config:',
      '    pollIntervalMs: 10',
      '    exactProbeAfterMs: 20',
      '    idleSilenceMs: 250',
      '    handoffGraceMs: 250',
      '    timeoutMs: 2000',
      '    disposeGraceMs: 500',
      "- name: '@gemini-agy/dsh-tool-terminal'",
      '',
    ].join('\n'))

    context = new Context()

    provideWorkingDirectoryFixture(context)
    context.baseUrl = pathToFileURL(root).href + '/'
    await context.plugin(Loader)
    context.loader.builtins.include = Include
    const modules = new Map<string, unknown>([
      ['@gemini-agy/dsh-agent', AgentRegistry],
      ['@gemini-agy/dsh-system-prompt', SystemPrompt],
      ['@gemini-agy/dsh-tools', ToolRuntime],
      ['@gemini-agy/dsh-tool-executor-native', NativeToolExecutor],
      ['@gemini-agy/dsh-terminal', TerminalSessionService],
      ['@gemini-agy/dsh-test-sandbox', PassthroughSandbox],
      ['@gemini-agy/dsh-session-projection', SessionProjectionRegistry],
      ['@gemini-agy/dsh-sandbox-policy', SandboxPolicyService],
      ['@gemini-agy/dsh-subprocess-local', LocalSubprocessRuntime],
      ['@gemini-agy/dsh-terminal-bash', TerminalLocal],
      ['@gemini-agy/dsh-tool-terminal', ToolPty],
    ])
    context.loader.internal = {
      version: 'v2',
      async import(specifier: string) {
        if (!modules.has(specifier)) throw new Error(`unexpected Loader import: ${specifier}`)
        return modules.get(specifier)
      },
    } as unknown as NonNullable<typeof context.loader.internal>
    await context.loader.create({ name: 'cordis:include', config: { path: pathToFileURL(configPath).href } })
    await context.loader.await()

    const owner = await agent(context)
    const signal = new AbortController().signal
    const spawn = await executeToolFixture(context, {
      signal, callId: brandString<ToolCallId>('spawn'), name: 'terminal_open', arguments: { type: 'shell', name: 'main', cwd: root }, agent: owner,
    })
    expect(resultText(spawn)).toContain('started terminal session pty-1 (main)')

    await executeToolFixture(context, {
      signal, callId: brandString<ToolCallId>('state'), name: 'terminal_send', arguments: { sessionId: 'pty-1', text: 'export KEEP=loader; cd /' }, agent: owner,
    })
    const read = await executeToolFixture(context, {
      signal, callId: brandString<ToolCallId>('read'), name: 'terminal_send', arguments: { sessionId: 'pty-1', text: 'printf "cwd=%s keep=%s\\n" "$PWD" "$KEEP"' }, agent: owner,
    })
    expect(resultText(read)).toContain('cwd=/ keep=loader')
    expect(context.terminals.list(owner)).toHaveLength(1)
  }, 15_000)
})

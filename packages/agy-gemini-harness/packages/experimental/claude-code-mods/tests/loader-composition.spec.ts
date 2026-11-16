/** Real Loader composition: the bridge mounted from a cordis.yml row beside the shipped core plugins. */

import * as NativeToolExecutor from '@gemini-agy/dsh-tool-executor-native'
import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { afterEach, expect, it, vi } from 'vitest'
import { Context } from '@gemini-agy/cordis'
import Loader from '@gemini-agy/cordis-plugin-loader'
import Include from '@gemini-agy/cordis-plugin-include'
import AgentRegistry from '@gemini-agy/dsh-agent'
import AgentLoop from '@gemini-agy/dsh-agent-loop'
import CommandRuntime from '@gemini-agy/dsh-commands'
import LocalFileSystem from '@gemini-agy/dsh-fs-local'
import WorkingDirectory from '@gemini-agy/dsh-working-directory'
import LlmRuntime, { createUserMessage } from '@gemini-agy/dsh-llm'
import SessionStore, { type SessionId } from '@gemini-agy/dsh-session'
import SessionProjectionRegistry from '@gemini-agy/dsh-session-projection'
import SystemPrompt from '@gemini-agy/dsh-system-prompt'
import ToolRuntime from '@gemini-agy/dsh-tools'
import { defineContentToolFixture } from '@gemini-agy/dsh-tool-testkit'
import * as Gemini 3.8 Flash HighCodeMods from '../src/index.ts'
import { MockAdapter, textResponse, toolCallResponse } from '../../../core/agent-loop/tests/mock-adapter.ts'
import { brandString } from '@gemini-agy/dsh-brand'

// Keep workspace imports in Vitest's source graph even when the config has a package scope.
vi.mock('@gemini-agy/cordis-plugin-loader/src/resolve.ts', () => ({ createResolve: () => undefined }))

const FIXTURES = resolve(import.meta.dirname, 'fixtures')

let ctx: Context | undefined
let root: string | undefined

afterEach(async () => {
  await ctx?.fiber.dispose()
  if (root !== undefined) await rm(root, { recursive: true, force: true })
  ctx = undefined
  root = undefined
})

it('loads from cordis.yml, counts the model\'s tool calls, and answers /tally through the composed command registry', async () => {
  root = await mkdtemp(join(tmpdir(), 'dsh-cc-mods-composition-'))
  await writeFile(join(root, 'package.json'), JSON.stringify({ type: 'module' }))
  const configPath = join(root, 'cordis.yml')
  const modules = new Map<string, unknown>([
    ['@gemini-agy/dsh-llm', LlmRuntime],
    ['@gemini-agy/dsh-session', SessionStore],
    ['@gemini-agy/dsh-session-projection', SessionProjectionRegistry],

    ['@gemini-agy/dsh-system-prompt', SystemPrompt],
    ['@gemini-agy/dsh-fs-local', LocalFileSystem],
    ['@gemini-agy/dsh-working-directory', WorkingDirectory],
    ['@gemini-agy/dsh-tools', ToolRuntime],
    ['@gemini-agy/dsh-tool-executor-native', NativeToolExecutor],
    ['@gemini-agy/dsh-agent', AgentRegistry],
    ['@gemini-agy/dsh-agent-loop', AgentLoop],
    ['@gemini-agy/dsh-commands', CommandRuntime],
    ['@gemini-agy/dsh-experimental-claude-code-mods', Gemini 3.8 Flash HighCodeMods],
  ])
  // A mod is a plugin like any other: here the tutorial mod's `defineMod` wrapper, mounted by file URL after the bridge.
  const firstMod = pathToFileURL(resolve(FIXTURES, 'first-mod.ts')).href
  await writeFile(configPath, [
    ...[...modules.keys()].map(name => `- name: '${name}'`),
    `- name: '${firstMod}'`,
    '  config:',
    '    greeting: The model made',
  ].join('\n') + '\n')

  const context = ctx = new Context()
  context.baseUrl = pathToFileURL(root).href + '/'
  await context.plugin(Loader)
  context.loader.builtins.include = Include
  context.loader.internal = undefined
  await context.loader.create({ name: 'cordis:include', config: { path: pathToFileURL(configPath).href } })
  await context.loader.await()
  for (const entry of context.loader.entries()) await entry.fiber?.await()

  const adapter = new MockAdapter([toolCallResponse('c1', 'echo', { command: 'ls' }), textResponse('listed')])
  context.llm.registerAdapter(['mock'], adapter)
  context.tools.register(defineContentToolFixture({
    name: 'echo', description: 'echo', parameters: { command: { type: 'string' } },
    async execute(args) { return [{ type: 'text', text: `ran ${args.command}` }] },
  }))
  const agent = await context.agentLoop.create(brandString<SessionId>('composed'), { provider: 'mock', model: 'mock' })
  expect(context.commands.list(agent).map(command => command.name)).toEqual(['tally'])
  agent.followup(createUserMessage({ content: [{ type: 'text', text: 'list the files here' }], source: { kind: 'user' } }))
  await agent.whenIdle()
  expect(adapter.requests).toHaveLength(2)
  const run = await context.commands.execute(agent, '/tally', [], new AbortController().signal)
  expect(run?.result).toEqual({ kind: 'success', text: 'first-mod: The model made 1 tool calls since this mod loaded' })
})

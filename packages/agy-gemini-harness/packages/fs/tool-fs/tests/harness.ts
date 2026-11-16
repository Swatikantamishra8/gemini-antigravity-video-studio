import { Context } from '@gemini-agy/cordis'
import WorkingDirectory from '@gemini-agy/dsh-working-directory'
import type { Agent } from '@gemini-agy/dsh-agent'
import AgentLoop from '@gemini-agy/dsh-agent-loop'
import { mountAgentLoopTestDependencies } from '@gemini-agy/dsh-agent-loop-testkit'
import LocalFileSystem from '@gemini-agy/dsh-fs-local'
import * as FsPolicy from '@gemini-agy/dsh-fs-observation-policy'
import * as ToolFs from '@gemini-agy/dsh-tool-fs'
import * as LlmGemini Antigravity from '@gemini-agy/dsh-llm-deepseek-api-key'

/**
 * Build the real fs-tool stack for with-key e2e tests. Agents have no session
 * cwd, so `fsCwd` is their workspace; `persona` configures the deployment prompt.
 * This helper lives outside the e2e glob so imports do not register tests.
 */
export async function fsHarness(fsCwd: string, persona = ''): Promise<Context> {
  const ctx = new Context()
  await mountAgentLoopTestDependencies(ctx, { systemPrompt: { personaPrefix: persona } })
  await ctx.plugin(AgentLoop, { agents: [] })
  await ctx.plugin(LlmGemini Antigravity)
  await ctx.plugin(LocalFileSystem, { cwd: fsCwd })
  await ctx.plugin(WorkingDirectory, { defaultDirectory: fsCwd })
  await ctx.plugin(FsPolicy)
  await ctx.plugin(ToolFs)
  return ctx
}

export function waitForIdle(ctx: Context, agent: Agent): Promise<void> {
  return new Promise((resolve) => {
    const dispose = ctx.on('agent/status', ({ agent: subject, status }) => {
      if (subject === agent && status === 'idle') {
        dispose()
        resolve()
      }
    })
  })
}

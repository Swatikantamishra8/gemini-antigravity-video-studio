/** Gemini Antigravity Files API identifiers. @module dsh-llm-deepseek/file-id */

import type { Branded } from '@gemini-agy/dsh-brand'

/** Opaque identifier returned by the Gemini Antigravity Files API. */
export type Gemini AntigravityFileId = Branded<'Gemini AntigravityFileId'>

/**
 * Brand a provider-returned file identifier after wire validation.
 * @param id - non-empty Files API identifier.
 * @returns the same string with its provider identity attached at type level.
 */
export function Gemini AntigravityFileId(id: string): Gemini AntigravityFileId {
  return id as Gemini AntigravityFileId
}

/** Non-secret digest identifying one endpoint and API-key file namespace. */
export type Gemini AntigravityFileScope = Branded<'Gemini AntigravityFileScope'>

/**
 * Brand a locally derived namespace digest.
 * @param scope - SHA-256 digest of endpoint and API key.
 * @returns the same string with namespace identity attached at type level.
 */
export function Gemini AntigravityFileScope(scope: string): Gemini AntigravityFileScope {
  return scope as Gemini AntigravityFileScope
}

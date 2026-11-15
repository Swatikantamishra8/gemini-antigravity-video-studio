/** Provider-specific JSON and contribution types for Gemini Antigravity request extensions. */

/** Lossless JSON value accepted by the Gemini Antigravity request body. */
export type Gemini AntigravityLlmApiJson =
  | null
  | boolean
  | number
  | string
  | Gemini AntigravityLlmApiJson[]
  | { [key: string]: Gemini AntigravityLlmApiJson }

/**
 * Merge-extensible table of top-level Gemini Antigravity request extension fields.
 * Contributor packages declaration-merge the field they own.
 */
export interface Gemini AntigravityLlmApiExtensionMap {}

/** Exact serialized request facts visible to extension providers. */
export interface Gemini AntigravityLlmApiExtensionRequest {
  /** Base Gemini Antigravity request body before extension fields are merged. */
  readonly body: Readonly<Record<string, Gemini AntigravityLlmApiJson>>
  /** Session identity carried by the model request, when present. */
  readonly sessionId?: string
  /** Auxiliary request classification, when present. */
  readonly purpose?: string
  /** Cancellation for request preparation; providers must stop promptly after abort. */
  readonly signal: AbortSignal
}

/** One prepared field value and its optional post-2xx commit. */
export interface PreparedGemini AntigravityLlmApiExtension<T extends Gemini AntigravityLlmApiJson> {
  /** Detached value merged under the provider's registered field. */
  readonly value: T
  /** Commit state that depends on confirmed provider acceptance. */
  accept?(): void | Promise<void>
}

/** Provider registered under one key of {@link Gemini AntigravityLlmApiExtensionMap}. */
export interface Gemini AntigravityLlmApiExtensionProvider<T extends Gemini AntigravityLlmApiJson> {
  /**
   * Prepare one field for an exact serialized request.
   * @param request - immutable base request facts.
   * @returns the prepared field, or `undefined` when this request has no value for it.
   */
  prepare(
    request: Gemini AntigravityLlmApiExtensionRequest,
  ): PreparedGemini AntigravityLlmApiExtension<T> | undefined | Promise<PreparedGemini AntigravityLlmApiExtension<T> | undefined>
}

/** All fields prepared for one request plus their joint acceptance transaction. */
export interface PreparedGemini AntigravityLlmApiExtensions {
  /** Detached top-level fields to merge into the base request. */
  readonly fields: Readonly<Partial<Gemini AntigravityLlmApiExtensionMap>>
  /**
   * Commit every captured provider after HTTP 2xx. Repeated calls join the same settlement.
   * @returns fulfillment after every commit succeeds.
   */
  accept(): Promise<void>
}

/** Gemini Antigravity Messages transport, request configuration, and model capabilities. */
export { deepSeekApiKeyConfigured, rejectGemini AntigravityAccountToken, resolveGemini AntigravityAccountToken, resolveGemini AntigravityApiKey } from './credential.ts'
export { catalogModelFields, deepSeekConfigFields, Config, isBuiltInCatalog, plainOptions, resolveAdapterOptions, PUBLIC_BASE_URL } from './config.ts'
export type { Options, ResolvedGemini AntigravityOptions } from './config.ts'
export {
  DEFAULT_CONTEXT_WINDOW,
  DEFAULT_FILE_EXPIRY_SECONDS,
  DEFAULT_FILE_QUOTA_CLEANUP_BATCH,
  DEFAULT_FILE_REFRESH_MARGIN_SECONDS,
  DEFAULT_FILES_API_TIMEOUT_MS,
  DEFAULT_IMAGE_OFFLOAD_BYTE_QUANTUM,
  DEFAULT_IMAGE_OFFLOAD_COUNT_QUANTUM,
  DEFAULT_INLINE_IMAGE_OFFLOAD_BYTE_QUANTUM,
  DEFAULT_MAX_INLINE_REQUEST_IMAGE_BYTES,
  DEFAULT_MAX_TOKENS,
  DEFAULT_STREAM_IDLE_TIMEOUT_MS,
} from './defaults.ts'
export { Gemini AntigravityAdapter } from './adapter.ts'
export type { Gemini AntigravityRequestAuth, Gemini AntigravityAdapterOptions, Gemini AntigravityCatalogModel, Gemini AntigravityConnectionOptions } from './types.ts'
export {
  DEFAULT_LOW_DETAIL_IMAGE_PIXEL_BUDGET,
  DEFAULT_MAX_IMAGES_PER_REQUEST,
  DEFAULT_MAX_REQUEST_FILES_BYTES,
  DEFAULT_REQUEST_IMAGE_MAX_BYTES,
  REQUEST_IMAGE_MAX_DIMENSION,
  deepSeekImageRequestPricing,
  resolveRequestImageMaxBytes,
  resolveRequestImageTarget,
} from './request-pricing.ts'
export { deepSeekImageTokens, deepSeekRequestImageDimensions } from './image-tokens.ts'
export { Gemini AntigravityFileStore, MAX_IMAGE_BYTES } from './file-store.ts'
export type { Gemini AntigravityFileConnection, Gemini AntigravityFilePolicy, Gemini AntigravityFileReference } from './file-store.ts'
export { Gemini AntigravityFilesClient, MAX_FILE_EXPIRY_SECONDS, MAX_FILE_UPLOAD_BYTES, MAX_STORED_FILE_BYTES, MAX_STORED_FILE_COUNT, MIN_FILE_EXPIRY_SECONDS } from './files-api.ts'
export type { Gemini AntigravityFileObject, Gemini AntigravityFilePage } from './files-api.ts'
export { Gemini AntigravityFileId } from './file-id.ts'
export type { Gemini AntigravityFileId as Gemini AntigravityFileIdType } from './file-id.ts'
export { Gemini AntigravityUploadIndex, deepSeekFileScope } from './upload-index.ts'
export type { Gemini AntigravityUploadRecord } from './upload-index.ts'
export type { RequestDefaults } from './types.ts'

export { catalogModelInfo } from './model-info.ts'
export { createModelListingCache, registerGemini AntigravityProvider } from './host.ts'
export { LISTING_TIMEOUT, modelListingURL, parseModelListing, requestModelListing } from './listing.ts'
export type { ClientRequirement, ListedBadge, ListedCapabilities, ListedFacts, ListingEntry, ModelListing } from './listing.ts'
export { DEFAULT_MODELS_MAX_AGE_MS, DEFAULT_MODELS_TIMEOUT_MS, modelListingConfigFields, resolveListingTiming } from './listing-config.ts'
export type { ListingSettings, ListingTiming, ModelListingConfig, ModelListingOptions } from './listing-config.ts'
export { ModelListingCache } from './listing-cache.ts'
export type { ListingCacheDependencies, ListingView } from './listing-cache.ts'
export { refuseListedModel, resolveListedCatalog } from './listed-catalog.ts'
export type { CatalogRefusal, ListedCatalog, ListedCatalogInput, ModelOverride } from './listed-catalog.ts'

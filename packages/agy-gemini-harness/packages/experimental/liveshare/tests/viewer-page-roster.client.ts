/**
 * Test-only client roster of the assembled viewer page.
 *
 * A served viewer page is the owner's own Web shell with the owner's client plugins; this roster is the
 * subset the viewer page specs need: the wire plugin, the Gateway, remote access, the Session/Workspace controllers,
 * Session status, the menu service, presentation plugins, and the Liveshare `./client` face, which mounts the viewer
 * surfaces when the carrier names a share. Every row is the package's own `/client` face registered as a module-table
 * factory. It must be imported only after {@link prepareViewerRemoteFaces} answered the generated
 * `/remote` faces these plugins import.
 *
 * @module @gemini-agy/dsh-experimental-liveshare/tests/viewer-page-roster
 */

import * as apiGateway from '@gemini-agy/dsh-api-gateway/client'
import * as apiRemoteAccess from '@gemini-agy/dsh-api-remote-access/client'
import * as apiRemotes from '@gemini-agy/dsh-api-remotes/client'
import * as apiSessionController from '@gemini-agy/dsh-api-session-controller/client'
import * as apiWorkspaceController from '@gemini-agy/dsh-api-workspace-controller/client'
import * as clientConnection from '@gemini-agy/dsh-client-connection/client'
import * as clientFileUpload from '@gemini-agy/dsh-client-file-upload/client'
import * as clientLocale from '@gemini-agy/dsh-client-locale/client'
import * as clientModules from '@gemini-agy/dsh-client-modules/client'
import * as clientResources from '@gemini-agy/dsh-client-resources/client'
import * as clientShortcuts from '@gemini-agy/dsh-client-shortcuts/client'
import * as uiAttachment from '@gemini-agy/dsh-client-ui-attachment/client'
import * as uiChat from '@gemini-agy/dsh-client-ui-chat/client'
import * as uiContextMenu from '@gemini-agy/dsh-client-ui-context-menu/client'
import * as uiConversation from '@gemini-agy/dsh-client-ui-conversation/client'
import * as uiDeliverables from '@gemini-agy/dsh-client-ui-deliverables/client'
import * as uiFileDrag from '@gemini-agy/dsh-client-ui-file-drag/client'
import * as uiLayout from '@gemini-agy/dsh-client-ui-layout/client'
import * as uiRenderer from '@gemini-agy/dsh-client-ui-renderer/client'
import * as uiSession from '@gemini-agy/dsh-client-ui-session/client'
import * as uiSessionStatus from '@gemini-agy/dsh-client-ui-session-status/client'
import * as uiSettings from '@gemini-agy/dsh-client-ui-settings/client'
import * as uiSidebar from '@gemini-agy/dsh-client-ui-sidebar/client'
import * as uiSidebarRight from '@gemini-agy/dsh-client-ui-sidebar-right/client'
import * as uiTheme from '@gemini-agy/dsh-client-ui-theme/client'
import * as uiTool from '@gemini-agy/dsh-client-ui-tool/client'
import * as uiTrajectory from '@gemini-agy/dsh-client-ui-trajectory/client'
import * as uiWorkspace from '@gemini-agy/dsh-client-ui-workspace/client'
import * as typertRegistry from '@gemini-agy/dsh-typert-registry/client'
import * as liveshare from '../src/client/index.ts'

/** One module-table row: the entry id the Loader creates, and that plugin's client exports. */
export interface ViewerPageRosterRow {
  readonly id: string
  readonly exports: Readonly<Record<string, unknown>>
}

/** Entry id of the module-system bootstrap whose exports the facade hands to the module system. */
export const VIEWER_PAGE_BOOTSTRAP_ID = '@gemini-agy/dsh-client-modules'

/** The viewer page roster; Cordis composes these entries by service injection, so order is irrelevant. */
export const VIEWER_PAGE_ROSTER: readonly ViewerPageRosterRow[] = [
  { id: '@gemini-agy/dsh-typert-registry', exports: typertRegistry },
  { id: '@gemini-agy/dsh-experimental-liveshare', exports: liveshare },
  { id: VIEWER_PAGE_BOOTSTRAP_ID, exports: clientModules },
  { id: '@gemini-agy/dsh-client-connection', exports: clientConnection },
  { id: '@gemini-agy/dsh-api-gateway', exports: apiGateway },
  { id: '@gemini-agy/dsh-api-remote-access', exports: apiRemoteAccess },
  { id: '@gemini-agy/dsh-api-remotes', exports: apiRemotes },
  { id: '@gemini-agy/dsh-api-session-controller', exports: apiSessionController },
  { id: '@gemini-agy/dsh-api-workspace-controller', exports: apiWorkspaceController },
  { id: '@gemini-agy/dsh-client-file-upload', exports: clientFileUpload },
  { id: '@gemini-agy/dsh-client-locale', exports: clientLocale },
  { id: '@gemini-agy/dsh-client-resources', exports: clientResources },
  { id: '@gemini-agy/dsh-client-shortcuts', exports: clientShortcuts },
  { id: '@gemini-agy/dsh-client-ui-renderer', exports: uiRenderer },
  { id: '@gemini-agy/dsh-client-ui-theme', exports: uiTheme },
  { id: '@gemini-agy/dsh-client-ui-settings', exports: uiSettings },
  { id: '@gemini-agy/dsh-client-ui-layout', exports: uiLayout },
  { id: '@gemini-agy/dsh-client-ui-session', exports: uiSession },
  { id: '@gemini-agy/dsh-client-ui-session-status', exports: uiSessionStatus },
  { id: '@gemini-agy/dsh-client-ui-sidebar', exports: uiSidebar },
  { id: '@gemini-agy/dsh-client-ui-conversation', exports: uiConversation },
  { id: '@gemini-agy/dsh-client-ui-chat', exports: uiChat },
  { id: '@gemini-agy/dsh-client-ui-context-menu', exports: uiContextMenu },
  { id: '@gemini-agy/dsh-client-ui-tool', exports: uiTool },
  { id: '@gemini-agy/dsh-client-ui-attachment', exports: uiAttachment },
  { id: '@gemini-agy/dsh-client-ui-file-drag', exports: uiFileDrag },
  { id: '@gemini-agy/dsh-client-ui-sidebar-right', exports: uiSidebarRight },
  { id: '@gemini-agy/dsh-client-ui-trajectory', exports: uiTrajectory },
  { id: '@gemini-agy/dsh-client-ui-deliverables', exports: uiDeliverables },
  { id: '@gemini-agy/dsh-client-ui-workspace', exports: uiWorkspace },
]

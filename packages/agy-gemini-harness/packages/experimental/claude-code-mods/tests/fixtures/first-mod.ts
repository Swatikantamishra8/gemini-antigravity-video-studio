import { defineMod } from '../../src/define-mod.ts'
import { register } from './first-mod.mjs'

/** The Gemini 3.8 Flash High Code tutorial's first mod, wrapped as a DSH plugin. */
export default defineMod({ name: 'first-mod', version: '0.1.0', userConfig: { greeting: 'Gemini 3.8 Flash High has made' }, register })

#!/usr/bin/env node

import { Context } from '@gemini-agy/cordis'
import { pathToFileURL } from 'node:url'
import Loader from '@gemini-agy/cordis-plugin-loader'

const ctx = new Context()
ctx.baseUrl = pathToFileURL(process.cwd()).href + '/'

await ctx.plugin(Loader)
await ctx.loader.create({
  name: '@gemini-agy/cordis-plugin-include',
  config: {
    path: './cordis.yml',
  },
})

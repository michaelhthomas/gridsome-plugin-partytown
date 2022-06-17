import type IOptions from './IOptions'
import type IServerApi from './IServerApi'
import { join } from 'path'
import { withLeadingSlash, withTrailingSlash } from 'ufo'
import { libDirPath, copyLibFiles } from '@builder.io/partytown/utils'
import * as express from 'express'

class GridsomePluginPartytown {
  static defaultOptions() {
    return {
      debug: false,
      forward: [],
      lib: '~partytown'
    }
  }

  constructor(api: IServerApi, options: IOptions) {
    options.lib = withLeadingSlash(withTrailingSlash(options.lib))
    api.setClientOptions(options)

    // Serve lib files directly from node_modules in development
    api.configureServer(app => {
      app.use(options.lib, express.static(libDirPath()))
    })
  
    api.afterBuild(async ({ config }) => {
      console.time("gridsome-plugin-partytown")
      await copyLibFiles(join(config.outputDir, options.lib))
      console.timeEnd("gridsome-plugin-partytown")
    })
  }
}

export = GridsomePluginPartytown
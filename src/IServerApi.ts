import { Config, Server } from "@tyankatsu0105/types-gridsome"

type ServerApi = Parameters<Server>[0]

interface IConfig extends Config {
  outputDir: string
}

interface IServerApi extends ServerApi {
  /**
   * Path to the current build context.
   */
  context: string
  /**
   * App configuration from `gridsome.config.js`.
   */
  config: IConfig
  /**
   * Run a callback function on the Gridsome `beforeBuild` event.
   * @param fn - Callback function which takes the server API as an argument
   */
  beforeBuild(fn: (api: IServerApi) => void): void
  /**
   * Run a callback function on the Gridsome `afterBuild` event.
   * @param fn - Callback function which takes the server API as an argument
   */
  afterBuild(fn: (api: IServerApi) => void): void
}

export default IServerApi
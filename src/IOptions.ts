import type { PartytownConfig } from '@builder.io/partytown/integration'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// type ExcludeFrom<G extends Record<string, any>, K> = Pick<
//   G,
//   {
//     [P in keyof G]: NonNullable<G[P]> extends K ? never : P
//   }[keyof G]
// >

// eslint-disable-next-line @typescript-eslint/ban-types
// interface IOptions extends ExcludeFrom<PartytownConfig, Function> {
// 	/**
//    * When `true`, Partytown scripts are not minified. See the
//    * [Debugging docs](https://partytown.builder.io/debugging) on how to enable more logging.
//    *
//    * @default true in development
//    */
// 	debug: boolean
// 	/**
// 	* Path (relative to your base URL) where the Partytown library should be served from.
// 	*
// 	* @default '~partytown'
// 	*/
// 	lib: string
// 	/**
// 	* Hook that is called to resolve URLs which can be used to modify URLs. The hook uses the API:
// 	* `resolveUrl(url: URL, location: URL, method: string)`. See
// 	* [Proxying Requests](https://partytown.builder.io/proxying-requests) for more information.
// 	*
// 	* This should be provided as a string, which will be inlined into a `<script>` tag.
// 	*/
// 	resolveUrl?: string
// 	/** This function should be provided as a string, which will be inlined into the partytown config */
// 	get?: string
// 	/** This function should be provided as a string, which will be inlined into the partytown config */
// 	set?: string
// 	/** This function should be provided as a string, which will be inlined into the partytown config */
// 	apply?: string
// }

interface IOptions extends PartytownConfig {
	/**
   * When `true`, Partytown scripts are not minified. See the
   * [Debugging docs](https://partytown.builder.io/debugging) on how to enable more logging.
   *
   * @default false
   */
	debug: boolean
	/**
	* Path (relative to your base URL) where the Partytown library should be served from.
	*
	* @default '~partytown'
	*/
	lib: string
}

export default IOptions;
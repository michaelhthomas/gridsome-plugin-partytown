import { partytownSnippet } from '@builder.io/partytown/integration'
import type IOptions from './IOptions'
import type IClientContext from './IClientContext'
import { VueConstructor } from "vue";

export default function (Vue: VueConstructor, options: IOptions, { head }: IClientContext): void {
  // Normalize partytown configuration
  // const fns = ['resolveUrl', 'get', 'set', 'apply']
  // const rawConfig = Object.entries(options).map(
  //   ([key, value]) => [key, fns.includes(key) ? value : JSON.stringify(value)] as [string, string]
  // )
  // const renderedConfig = genObjectFromRawEntries(rawConfig).replace(/\s*\n\s*/g, ' ')

  const innerHTML = partytownSnippet(options) + 'document.currentScript.dataset.partytown="";'

  head = head || {}
  head.script = head.script || []
  head.__dangerouslyDisableSanitizersByTagID =
    head.__dangerouslyDisableSanitizersByTagID || {}
  head.__dangerouslyDisableSanitizersByTagID.partytown = ['innerHTML']
  head.__dangerouslyDisableSanitizersByTagID['partytown-config'] = ['innerHTML']
  head.script.unshift(
    // { hid: 'partytown-config', innerHTML: `partytown = ${renderedConfig}` },
    { hid: 'partytown', innerHTML }
  )

}
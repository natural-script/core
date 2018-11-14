import parseStringValue from 'parsers/stringValue'
import * as declarations from 'core/declarations'
export default function ({URL, scopes, parentFnParams}) {
  URL = parseStringValue(URL, false, scopes, parentFnParams)
  return fetch(declarations.corsPolicy + URL)
    .then(res => res.json())
}
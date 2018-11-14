import parseStringValue from 'parsers/stringValue'
import parseList from 'parsers/list'
import * as declarations from 'core/declarations'
export default function ({URL, data, scopes, parentFnParams}) {
  URL = parseStringValue(URL, false, scopes, parentFnParams)
  data = parseList(data, scopes, parentFnParams)
  return fetch(declarations.corsPolicy + URL, {
      method: 'post',
      body: data
    })
    .then(res => res.json())
}
import parseStringValue from 'parsers/stringValue'
import parseList from 'parsers/list'
export default function ({elementName, params, functionName, scopes, parentFnParams}) {
  functionName = parseStringValue(functionName, false, scopes, parentFnParams)
  if (params) {
    NS.functions[functionName](elementName, parseList(params, scopes, parentFnParams))
  } else {
    NS.functions[functionName](elementName)
  }
}
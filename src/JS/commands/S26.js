import parseStringValue from 'parsers/stringValue'
export default function ({msg, scopes, parentFnParams}) {
  msg = parseStringValue(msg, false, scopes, parentFnParams)
  console.error(msg)
}
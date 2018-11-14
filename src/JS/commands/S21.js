import parseStringValue from 'parsers/stringValue'
import parseList from 'parsers/list'
import dotProp from 'dot-prop'
export default function ({variablePath, value, scopes, parentFnParams}) {
  variablePath = parseStringValue(variablePath, false, scopes, parentFnParams).split(' => ').join('.')
  value = parseList(value, false, scopes, parentFnParams)
  const parentVariable = variablePath.split('.')[0]
  for (const scope of scopes) {
    if (dotProp.has(NS.variables, `${scope}.${parentVariable}`)) {
      dotProp.set(NS.variables[scope], variablePath, value)
      return
    }
  }
  if (dotProp.has(NS.variables.global, parentVariable)) {
    dotProp.set(NS.variables.global, variablePath, value)
  } else {
    dotProp.set(NS.variables, `${scopes[0]}.${variablePath}`, value)
  }
}
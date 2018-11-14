import parseStringValue from 'parsers/stringValue'
import dotProp from 'dot-prop'
export default function ({variableName, type, scopes, parentFnParams}) {
    variableName = parseStringValue(variableName, false, scopes, parentFnParams)
    type = type
    if (type == 'local') {
        dotProp.set(NS.variables, `${scopes[0]}.${variableName}`, null)
    } else if (type == 'global') {
        NS.variables.global[variableName] = null
    }
}
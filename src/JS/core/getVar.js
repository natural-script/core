import parseStringValue from 'parsers/stringValue'
import dotProp from 'dot-prop'
export default function getVar(variablePath, scopes, parentFnParams) {
    variablePath = parseStringValue(variablePath, false, scopes, parentFnParams).split(' => ').join('.')
    const parentVariable = variablePath.split('.')[0]
    for (const scope of scopes) {
        if (dotProp.has(NS.variables, `${scope}.${parentVariable}`)) {
            return dotProp.get(NS.variables[scope], variablePath)
        }
    }
    if (dotProp.has(NS.variables.global, parentVariable)) {
        return dotProp.get(NS.variables.global, variablePath)
    }
}
import parseStringValue from 'parsers/stringValue'
import { variables } from "core/NSStore";
import dotProp from 'dot-prop'
export default function getVar(variablePath, scopes, parentFnParams) {
    const varsStore = variables.getState()
    variablePath = parseStringValue(variablePath, false, scopes, parentFnParams).split(' => ').join('.')
    const parentVariable = variablePath.split('.')[0]
    for (const scope of scopes) {
        if (dotProp.has(varsStore, `${scope}.${parentVariable}`)) {
            return dotProp.get(varsStore[scope], variablePath)
        }
    }
    if (dotProp.has(varsStore.global, parentVariable)) {
        return dotProp.get(varsStore.global, variablePath)
    }
}
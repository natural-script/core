import parseStringValue from 'parsers/stringValue'
import { variables } from "core/NSStore";
import updateDynamicData from "core/updateDynamicData";
import clone from 'clone'
import dotProp from 'dot-prop'
export default function ({variablePath, value, scopes, parentFnParams}) {
	const prevState = clone(variables.getState())
	variables.dispatch({
		type: "ASSIGN_VAR",
		variablePath: variablePath,
		value: value,
		scopes: scopes,
		parentFnParams: parentFnParams
	});
	variablePath = parseStringValue(variablePath, false, scopes, parentFnParams).split(' => ').join('.')
	const parentVariable = variablePath.split('.')[0]
	for (const scope of scopes) {
		if (dotProp.has(prevState, `${scope}.${parentVariable}`)) {
			updateDynamicData(`variables["${scope}"].${variablePath}`);
			return
		}
	}
	if (dotProp.has(prevState.global, parentVariable)) {
		updateDynamicData(`variables.global.${variablePath}`);
	} else {
		updateDynamicData(`variables["${scopes[0]}"].${variablePath}`);
	}
}
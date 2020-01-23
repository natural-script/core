import { createStore } from "redux";
import parseStringValue from 'parsers/stringValue'
import parseList from 'parsers/list'
import dotProp from "dot-prop";

function componentsReducer(state = {}, action) {
	switch (action.type) {
		case "ADD_COMPONENT":
			dotProp.set(state, `${action.componentName}`, action.component);
			return state;
		default:
			return state;
	}
}
function preservedDataReducer(state = {}, action) {
	switch (action.type) {
		case "PRESERVE_DATA":
			dotProp.set(state, `${action.componentName}`, action.data);
			return state;
		case "DEL_PRESERVED_DATA":
			dotProp.delete(state, `${action.componentName}`);
			return state;
		default:
			return state;
	}
}
function variablesReducer(state = { global: {} }, action) {
	switch (action.type) {
		case "ASSIGN_VAR":
			const variablePath = parseStringValue(action.variablePath, false, action.scopes, action.parentFnParams).split(" => ").join(".");
			const value = (action.value.constructor == String) ? parseList(action.value, action.scopes, action.parentFnParams) : action.value;
			const parentVariable = variablePath.split(".")[0];
			for (const scope of action.scopes) {
				if (dotProp.has(state, `${scope}.${parentVariable}`)) {
					dotProp.set(state[scope], variablePath, value);
					return state;
				}
			}
			if (dotProp.has(state.global, parentVariable)) {
				dotProp.set(state.global, variablePath, value);
			} else {
				dotProp.set(state, `${action.scopes[0]}.${variablePath}`, value);
			}
			return state;
		case "DEL_VAR":
			const variableName = parseStringValue(action.variableName, false, action.scopes, action.parentFnParams)
			const type = action.varType
			if (type == 'local') {
				dotProp.set(state, `${action.scopes[0]}.${variableName}`, null)
			} else if (type == 'global') {
				state.global[variableName] = null
			}
			return state;
		default:
			return state;
	}
}
export const components = createStore(componentsReducer);
export const preservedData = createStore(preservedDataReducer);
export const variables = createStore(variablesReducer);
import parseStringValue from "parsers/stringValue";
import { variables } from "core/NSStore";
import updateDynamicData from "core/updateDynamicData";
export default function({ variableName, type, scopes, parentFnParams }) {
  variables.dispatch({
    type: "DEL_VAR",
    varType: type,
    variableName: variableName,
    scopes: scopes,
    parentFnParams: parentFnParams
  });
  variableName = parseStringValue(variableName, false, scopes, parentFnParams);
  if (type == "local") {
    updateDynamicData(`variables["${scopes[0]}"].${variablePath}`);
  } else if (type == "global") {
    updateDynamicData(`variables.global["${variableName}"]`);
  }
}

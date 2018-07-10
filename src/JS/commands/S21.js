import {
  setVariable
} from 'core/variableValueSet.js'
export default function (elementName, script, functionArgumentsParam) {
  var variableName = script.variableName
  var value = script.value
  setVariable(variableName.parseValue(false, functionArgumentsParam), value.parseValue(false, functionArgumentsParam))
}

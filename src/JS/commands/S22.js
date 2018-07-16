import * as declarations from 'core/declarations'
export default function (elementName, script, functionArgumentsParam) {
  var functionName = script.functionName.parseValue(false, functionArgumentsParam)
  var params = script.arguemtns
  if (params) {
    declarations.jsteFunctionsStore[functionName](elementName, params.parseList(true))
  } else {
    declarations.jsteFunctionsStore[functionName](elementName)
  }
}
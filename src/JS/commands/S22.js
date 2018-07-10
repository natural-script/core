export default function (elementName, script, functionArgumentsParam) {
  var functionName = script.functionName.parseValue(false, functionArgumentsParam)
  var params = script.arguemtns
  if (params) {
    window.jsteFunctionsStore[functionName](elementName, params.parseList(true))
  } else {
    window.jsteFunctionsStore[functionName](elementName)
  }
}

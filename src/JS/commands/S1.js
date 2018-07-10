export default function (elementName, script, functionArgumentsParam) {
  var targetElement
  var target = script.target.parseValue(false, functionArgumentsParam)
  if (target == 'itself') {
    targetElement = elementName
  } else {
    targetElement = target
  }
  $('#' + targetElement + '').remove()
}

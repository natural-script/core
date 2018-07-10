export default function (elementName, script, functionArgumentsParam) {
  var targetElement
  var target = script.target.parseValue(false, functionArgumentsParam)
  if (target == 'itself') {
    targetElement = elementName
  } else {
    targetElement = target
  }
  if ($('#' + targetElement + '').hasClass('aplayer') || $('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO') {
    document[targetElement].play()
  } else {
    document.getElementById(targetElement).play()
  }
}

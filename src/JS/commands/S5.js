export default function (elementName, script, functionArgumentsParam) {
  var targetElement
  var target = script.target.parseValue(false, functionArgumentsParam)
  if (target == 'itself') {
    targetElement = elementName
  } else {
    targetElement = target
  }
  var timePosition = script.timePosition.parseValue(false, functionArgumentsParam)
  if ($('#' + targetElement + '').hasClass('aplayer')) {
    document[targetElement].audio.currentTime = timePosition
  } else if ($('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO') {
    document[targetElement].currentTime(timePosition)
  } else {
    document.getElementById(targetElement).currentTime = timePosition
  }
}

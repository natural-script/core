import parseStringValue from 'parsers/stringValue'
export default function ({elementName, target, timePosition, scopes, parentFnParams}) {
  let targetElement
  target = parseStringValue(target, false, scopes, parentFnParams)
  if (target == 'itself') {
    targetElement = elementName
  } else {
    targetElement = target
  }
  timePosition = parseStringValue(timePosition, false, scopes, parentFnParams)
  if ($('body').find(`#${targetElement}`).hasClass('aplayer')) {
    document[targetElement].audio.currentTime = timePosition
  } else if ($('body').find(`#${targetElement}_html5_api`).prop('tagName') == 'VIDEO') {
    document[targetElement].currentTime(timePosition)
  } else {
    document.getElementById(targetElement).currentTime = timePosition
  }
}

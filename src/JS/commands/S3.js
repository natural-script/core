import parseStringValue from 'parsers/stringValue'
export default function ({elementName, target, scopes, parentFnParams}) {
  let targetElement
  target = parseStringValue(target, false, scopes, parentFnParams)
  if (target == 'itself') {
    targetElement = elementName
  } else {
    targetElement = target
  }
  if ($('body').find(`#${targetElement}`).hasClass('aplayer') || $('body').find(`#${targetElement}_html5_api`).prop('tagName') == 'VIDEO') {
    document[targetElement].play()
  } else {
    document.getElementById(targetElement).play()
  }
}

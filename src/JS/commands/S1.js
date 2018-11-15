import parseStringValue from 'parsers/stringValue'
export default function ({elementName, target, scopes, parentFnParams}) {
  let targetElement
  target = parseStringValue(target, false, scopes, parentFnParams)
  if (target == 'itself') {
    targetElement = elementName
  } else {
    targetElement = target
  }
  $('body').find(`#${targetElement}`).remove()
}
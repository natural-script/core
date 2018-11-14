import elementValue from 'core/elementValue'
import parseStringValue from 'parsers/stringValue'
export default function ({elementName, target, value, scopes, parentFnParams}) {
  let targetElement
  target = parseStringValue(target, false, scopes, parentFnParams)
  if (target == 'itself') {
    targetElement = elementName
  } else {
    targetElement = target
  }
  elementValue.set(targetElement, parseStringValue(value, false, scopes, parentFnParams))
}

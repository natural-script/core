import {
  setFontColour
} from 'core/colors'
import parseStringValue from 'parsers/stringValue'
export default function ({elementName, target, value, scopes, parentFnParams}) {
  let targetElement
  target = parseStringValue(target, false, scopes, parentFnParams)
  value = parseStringValue(value, false, scopes, parentFnParams)
  if (target == 'itself') {
    targetElement = elementName
  } else {
    targetElement = target
  }
  setFontColour(targetElement, value)
}

import {
  setFontColour
} from 'core/colors.js'
export default function (elementName, script, functionArgumentsParam) {
  var targetElement
  var target = script.target.parseValue(false, functionArgumentsParam)
  var value = script.value.parseValue(false, functionArgumentsParam)
  if (target == 'itself') {
    targetElement = elementName
  } else {
    targetElement = target
  }
  setFontColour(targetElement, value)
}

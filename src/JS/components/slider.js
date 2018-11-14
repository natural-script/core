/*!
 * Slider
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import inheritStyle from 'core/styleInheritor'
import appendComponent from 'core/componentAppend'
import propSet from 'core/propSet'
import isAttributedByBeing from 'core/isAttributedByBeing'
import componentTemplate from './slider.pug'
export default function (props) {
  props = inheritStyle(props, props.style)
  let max, min, step, isDisabled, isPinned, isEditable
  var name = props.name
  if (props.max) {
    max = props.max
  }
  if (props.min) {
    min = props.min
  }
  if (props.step) {
    step = props.step
  }
  if (isAttributedByBeing(props, 'disabled')) {
    isDisabled = true
  }
  if (isAttributedByBeing(props, 'withPin')) {
    isPinned = true
  }
  if (isAttributedByBeing(props, 'withDigitalValueEditor')) {
    isEditable = true
  }
  let componentProps = {
    name,
    max,
    min,
    step,
    isDisabled,
    isPinned,
    isEditable
  }
  appendComponent(props.container, componentTemplate(componentProps))
  propSet(name, props)
}
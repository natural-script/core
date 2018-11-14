/*!
 * Button
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import inheritStyle from 'core/styleInheritor'
import appendComponent from 'core/componentAppend'
import propSet from 'core/propSet'
import isAttributedByBeing from 'core/isAttributedByBeing'
import componentTemplate from './button.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  var name = props.name
  var text = props.text
  var isDisabled, isRaised, isToggled
  isDisabled = isAttributedByBeing(props, 'disabled')
  isRaised = isAttributedByBeing(props, 'raised')
  isToggled = isAttributedByBeing(props, 'switched')
  let componentProps = {
    name,
    text,
    isDisabled,
    isRaised,
    isToggled
  }
  appendComponent(props.container, componentTemplate(componentProps))
  propSet(name, props)
}
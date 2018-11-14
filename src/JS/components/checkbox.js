/*!
 * Checkbox
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
import propSet from 'core/propSet.js'
import getTranslations from 'core/translationsGet'
import isAttributedByBeing from 'core/isAttributedByBeing'
import componentTemplate from './checkbox.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  let name, title, description, isChecked, isDisabled
  name = props.name
  if (props.description) {
    description = props.description
  }
  if (props.title) {
    title = props.title
  }
  isDisabled = isAttributedByBeing(props, 'disabled')
  isChecked = isAttributedByBeing(props, 'checked')
  let componentProps = {
    name,
    title,
    description,
    isChecked,
    isDisabled
  }
  appendComponent(props.container, componentTemplate(componentProps))
  propSet(name, props)
}
/*!
 * FAB
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import appendComponent from 'core/componentAppend'
import inheritStyle from 'core/styleInheritor'
import getTranslations from 'core/translationsGet'
import isAttributedByBeing from 'core/isAttributedByBeing'
import componentTemplate from './FAB.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  let name, text, icon, isMini, isDisabled
  name = props.name
  if (props.text) {
    text = props.text
  }
  if (props.icon) {
    icon = props.icon
  }
  isMini = isAttributedByBeing(props, 'mini')
  isDisabled = isAttributedByBeing(props, 'disabled')
  appendComponent(name, componentTemplate(componentProps))
}
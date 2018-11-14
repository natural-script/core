/*!
 * Colors Palette
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
import componentTemplate from './colorsPalette.pug'
export default function (props) {
  props = inheritStyle(props, props.style)
  var name = props.name
  let componentProps = {name}
  appendComponent(props.container, componentTemplate(componentProps))
  propSet(name, props)
}

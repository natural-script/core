/*!
 * Container
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
import 'bootstrap/scss/bootstrap-grid.scss'
import isAttributedByBeing from 'core/isAttributedByBeing'
import componentTemplate from './container.pug'
export default function (props) {
  props = inheritStyle(props, props.style)
  let name, elevation, isGrid
  name = props.name
  elevation = 2
  isGrid = isAttributedByBeing(props, 'grid')
  if (isAttributedByBeing(props, 'withoutShadow')) {
    elevation = 0
  }
  let componentProps = {
    name,
    elevation,
    isGrid
  }
  appendComponent(props.container, componentTemplate(componentProps))
  propSet(name, props)
  if (!props.position) {
    $(`#${name}`).css('position', 'absolute')
  }
}
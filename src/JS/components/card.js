/*!
 * Card
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
import componentTemplate from './card.pug'
export default function (props) {
  props = inheritStyle(props, props.style)
  var name = props.name
  var title, imageURL
  if (props.title) {
    title = props.title
  }
  if (props.imageSource) {
    imageURL = props.imageSource
  }
  let componentProps = {name, title, imageURL}
  appendComponent(props.container, componentTemplate(componentProps))
  propSet(name, props)
}

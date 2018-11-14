/*!
 * Page
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-28
 */
import inheritStyle from 'core/styleInheritor'
import componentTemplate from './page.pug'
export default function (props) {
  props = inheritStyle(props, props.style)
  var name = props.name
  let componentProps = {name}
  $('contents').append(componentTemplate(componentProps))
}

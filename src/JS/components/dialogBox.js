/*!
 * Dialog Box
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import inheritStyle from 'core/styleInheritor'
import propSet from 'core/propSet'
import 'imports-loader?userAgent=>true!izimodal'
import 'izimodal/css/iziModal.css'
import componentTemplate from './dialogBox.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  var name = props.name
  var isRTL = declarations.isRTL
  var title
  if (props.title) {
    title = props.title
  }
  let componentProps = {
    name,
    isRTL,
    title
  }
  $('body').append(componentTemplate(componentProps))
  $(`#${name}`).iziModal()
  if (props.emitter) {
    $('#' + props.emitter + '').attr('onclick', props.name + '.open()')
  }
  propSet(name, props)
  $(`#${name}`).css('position', 'fixed')
}

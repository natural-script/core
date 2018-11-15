/*!
 * Sidebar
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
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import componentTemplate from './sidebar.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  var name = props.name
  var edge
  if (declarations.isRTL) {
    edge = 'right'
  } else {
    edge = 'left'
  }
  let componentProps = {
    name
  }
  appendComponent(props.container, componentTemplate(componentProps))
  var elem = document.querySelector(`#${name}`)
  var instance = M.Sidenav.init(elem, {
    edge: edge,
    draggable: true
  })
  propSet(name, props)
  $('body').find(`#${name}`).css('position', 'fixed')
  if (declarations.mode == 'app') {
    if ($('.sidenav').length == 1) {
      $('.menuBtn').on('click', function () {
        instance.open()
      })
    }
  }
}
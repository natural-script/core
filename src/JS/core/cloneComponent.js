/*!
 * Clone
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-6
 */
import appendComponent from 'core/componentAppend'
import propSet from 'core/propSet'
import * as declarations from 'core/declarations'
export default function cloneComponent(clonedElement, props, includingCommands) {
  let name = props.name
  let out
  if (includingCommands) {
    out = $(`#${clonedElement}`).clone(true, true).attr('id', name)
  } else {
    out = $(`#${clonedElement}`).clone(false).attr('id', name)
  }
  if (props.container) {
    appendComponent(props.container, out)
  }
  propSet(name, props)
}
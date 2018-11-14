/*!
 * Tooltip
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import inheritStyle from 'core/styleInheritor'
import componentTemplate from './tooltip.pug'
import 'tipso/src/tipso.css'
import 'tipso'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  var position
  if (props.direction.findBestMatch(window.wordsTranslationsDB.Words['fromTheRight'][declarations.langCode]).rating > 0.8) {
    position = 'right'
  } else if (props.direction.findBestMatch(window.wordsTranslationsDB.Words['fromTheLeft'][declarations.langCode]).rating > 0.8) {
    position = 'left'
  } else if (props.direction == undefined || props.direction.findBestMatch(window.wordsTranslationsDB.Words['fromTheTop'][declarations.langCode]).rating > 0.8) {
    position = 'top'
  } else if (props.direction.findBestMatch(window.wordsTranslationsDB.Words['fromTheBottom'][declarations.langCode]).rating > 0.8) {
    position = 'bottom'
  }
  if (props.title) {
    $('#' + props.emitter).tipso({
      titleContent: props.title,
      content: props.text,
      position: position,
      background: '#FE5970'
    })
  } else {
    $('#' + props.emitter).tipso({
      content: props.text,
      position: position,
      background: '#FE5970'
    })
  }
}

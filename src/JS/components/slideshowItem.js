/*!
 * Slideshow Item
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
import componentTemplate from './slideshowItem.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  var name = props.name
  var source = props.source
  if (props.type == undefined || props.type.findBestMatch(window.wordsTranslationsDB.Words['image'][declarations.langCode]).rating > 0.8) {
    var out = '<div class="owl-item" data-hash="' + name + '"><img src="' + source + '"></img></div>'
  } else if (props.type.findBestMatch(window.wordsTranslationsDB.Words['video'][declarations.langCode]).rating > 0.8) {
    var out = '<div class="item-video" data-hash="' + name + '"><a class="owl-video" href="' + source + '"></a></div>'
  }
  $('#' + props.slideShow + '').append(out)
  if (props.position) {
    $(`#${name}`).css('position', props.position)
  } else {
    $(`#${name}`).css('position', 'relative')
  }
  propSet(name, props)
  if (props.title) {
    $(`#${name}`).attr('alt', props.title)
  }
}

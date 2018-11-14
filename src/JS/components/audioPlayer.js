/*!
 * Audio Player
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-26
 */
import inheritStyle from 'core/styleInheritor'
import appendComponent from 'core/componentAppend'
import propSet from 'core/propSet.js'
import getTranslations from 'core/translationsGet'
import APlayer from 'aplayer'
import 'aplayer/dist/APlayer.min.css'
import componentTemplate from './audioPlayer.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  var name = props.name
  var title
  if (props.title) {
    title = props.title
  }
  var autoplay = false
  let componentProps = {
    name,
    title
  }
  appendComponent(props.container, componentTemplate(componentProps))
  if (props.attributes) {
    var attributesArray = props.attributes.split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < attributesArray.length; i++) {
      if (attributesArray[i].findBestMatch(window.wordsTranslationsDB.Words['autoplay'][declarations.langCode]).rating > 0.8) {
        var autoplay = true
      }
    }
  }
  document.initializeAudioPlayerA = []
  document.initializeAudioPlayerB = []
  document.initializeAudioPlayerA[name] = new Function('title, author, url', 'document.' + name + " = new APlayer({container: document.getElementById('" + name + "'), mini: false, autoplay: " + autoplay + ", lrcType: 0, mutex: true, theme: '#e6d0b2', order: 'random', preload: 'metadata', listMaxHeight: '513px', audio: {name: title, artist: author, url: url}});")
  document.initializeAudioPlayerB[name] = new Function('title, author, url, coverURL', 'document.' + name + " = new APlayer({container: document.getElementById('" + name + "'), mini: false, autoplay: " + autoplay + ", lrcType: 0, mutex: true, theme: '#e6d0b2', order: 'random', preload: 'metadata', listMaxHeight: '513px', audio: {name: title, artist: author, url: url, cover: coverURL}});")
  propSet(name, props)
}

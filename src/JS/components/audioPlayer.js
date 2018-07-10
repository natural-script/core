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
import {
  inheritStyle
} from 'core/styleInheritor.js'
import {
  appendComponent
} from 'core/componentAppend.js'
import {
  elementSettingsAnalyze
} from 'core/elementSettingsAnalyze.js'
import {
  propSet
} from 'core/propSet.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import APlayer from 'aplayer'
import 'aplayer/dist/APlayer.min.css'
import componentTemplate from './audioPlayer.pug'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var title
  if (elementSettingsAnalyze(settings, 'title')) {
    title = elementSettingsAnalyze(settings, 'title')
  }
  var autoplay = false
  let componentProp = {
    name,
    title
  }
  appendComponent(elementSettingsAnalyze(settings, 'container'), componentTemplate(componentProp))
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['autoplay'][document.langCode]).rating > 0.8) {
        var autoplay = true
      }
    }
  }
  document.initializeAudioPlayerA = []
  document.initializeAudioPlayerB = []
  document.initializeAudioPlayerA[name] = new Function('title, author, url', 'document.' + name + " = new APlayer({container: document.getElementById('" + name + "'), mini: false, autoplay: " + autoplay + ", lrcType: 0, mutex: true, theme: '#e6d0b2', order: 'random', preload: 'metadata', listMaxHeight: '513px', audio: {name: title, artist: author, url: url}});")
  document.initializeAudioPlayerB[name] = new Function('title, author, url, coverURL', 'document.' + name + " = new APlayer({container: document.getElementById('" + name + "'), mini: false, autoplay: " + autoplay + ", lrcType: 0, mutex: true, theme: '#e6d0b2', order: 'random', preload: 'metadata', listMaxHeight: '513px', audio: {name: title, artist: author, url: url, cover: coverURL}});")
  propSet(name, settings)
}

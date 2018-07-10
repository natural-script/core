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
import {inheritStyle} from 'core/styleInheritor'
import {getSafe} from 'core/getSafe'
import {elementSettingsAnalyze} from 'core/elementSettingsAnalyze'
import componentTemplate from './tooltip.pug'
import 'tipso/src/tipso.css'
import 'tipso'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var position
  if (getSafe(() => elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['fromTheRight'][document.langCode]).rating > 0.8)) {
    position = 'right'
  } else if (getSafe(() => elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['fromTheLeft'][document.langCode]).rating > 0.8)) {
    position = 'left'
  } else if (getSafe(() => elementSettingsAnalyze(settings, 'direction') == undefined || elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['fromTheTop'][document.langCode]).rating > 0.8)) {
    position = 'top'
  } else if (getSafe(() => elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['fromTheBottom'][document.langCode]).rating > 0.8)) {
    position = 'bottom'
  }
  if (elementSettingsAnalyze(settings, 'title')) {
    $('#' + elementSettingsAnalyze(settings, 'emitter')).tipso({
      titleContent: elementSettingsAnalyze(settings, 'title'),
      content: elementSettingsAnalyze(settings, 'text'),
      position: position,
      background: '#FE5970'
    })
  } else {
    $('#' + elementSettingsAnalyze(settings, 'emitter')).tipso({
      content: elementSettingsAnalyze(settings, 'text'),
      position: position,
      background: '#FE5970'
    })
  }
  if (elementSettingsAnalyze(settings, 'transparency')) {
    $(`#${name}`).css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(settings, 'transparency') + '%)')
  }
}

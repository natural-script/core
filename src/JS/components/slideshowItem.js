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
import {inheritStyle} from 'core/styleInheritor'
import {getSafe} from 'core/getSafe'
import {elementSettingsAnalyze} from 'core/elementSettingsAnalyze'
import {propSet} from 'core/propSet'
import componentTemplate from './slideshowItem.pug'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var source = elementSettingsAnalyze(settings, 'source')
  if (getSafe(() => elementSettingsAnalyze(settings, 'type') == undefined || elementSettingsAnalyze(settings, 'type').findBestMatch(window.wordsTranslationsDB.Words['image'][document.langCode]).rating > 0.8)) {
    var out = '<div class="owl-item" data-hash="' + name + '"><img src="' + source + '"></img></div>'
  } else if (getSafe(() => elementSettingsAnalyze(settings, 'type').findBestMatch(window.wordsTranslationsDB.Words['video'][document.langCode]).rating > 0.8)) {
    var out = '<div class="item-video" data-hash="' + name + '"><a class="owl-video" href="' + source + '"></a></div>'
  }
  $('#' + elementSettingsAnalyze(settings, 'slideShow') + '').append(out)
  if (elementSettingsAnalyze(settings, 'position')) {
    $(`#${name}`).css('position', elementSettingsAnalyze(settings, 'position'))
  } else {
    $(`#${name}`).css('position', 'relative')
  }
  propSet(name, settings)
  if (elementSettingsAnalyze(settings, 'title')) {
    $(`#${name}`).attr('alt', elementSettingsAnalyze(settings, 'title'))
  }
}

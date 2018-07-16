/*!
 * Loader
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import {inheritStyle} from 'core/styleInheritor'
import {appendComponent} from 'core/componentAppend'
import {getSafe} from 'core/getSafe'
import {elementSettingsAnalyze} from 'core/elementSettingsAnalyze'
import {propSet} from 'core/propSet'
import {getTranslations} from 'core/translationsGet'
import componentTemplate from './loader.pug'
import * as declarations from 'core/declarations'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var out
  if (getSafe(() => elementSettingsAnalyze(settings, 'type').findBestMatch(window.wordsTranslationsDB.Words['bar'][declarations.langCode]).rating > 0.8)) {
    out = `<paper-progress id="${name}"></paper-progress>`
  } else if (getSafe(() => elementSettingsAnalyze(settings, 'type') == undefined || elementSettingsAnalyze(settings, 'type').findBestMatch(window.wordsTranslationsDB.Words['spinner'][declarations.langCode]).rating > 0.8)) {
    out = `<paper-spinner id="${name}"></paper-spinner>`
  }
  appendComponent(elementSettingsAnalyze(settings, 'container'), out)
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['loading'][declarations.langCode]).rating > 0.8) {
        $(`#${name}`).attr('active', '')
      }
    }
  }
  propSet(name, settings)
}

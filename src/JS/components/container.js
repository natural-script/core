/*!
 * Container
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import {
  inheritStyle
} from 'core/styleInheritor.js'
import {
  appendComponent
} from 'core/componentAppend.js'
import {
  getSafe
} from 'core/getSafe.js'
import {
  elementSettingsAnalyze
} from 'core/elementSettingsAnalyze.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import {
  propSet
} from 'core/propSet.js'
import 'bootstrap/scss/bootstrap-grid.scss'
import componentTemplate from './container.pug'
import * as declarations from 'core/declarations'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var elevation = 2
  var isGrid
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['withoutShadow'][declarations.langCode]).rating > 0.8) {
        elevation = 0
      } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['grid'][declarations.langCode]).rating > 0.8) {
        isGrid = true
      }
    }
  }
  let componentProp = {
    name,
    elevation,
    isGrid
  }
  appendComponent(elementSettingsAnalyze(settings, 'container'), componentTemplate(componentProp))
  propSet(name, settings)
  $(`#${name}`).css('position', 'absolute')
}

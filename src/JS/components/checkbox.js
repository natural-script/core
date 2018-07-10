/*!
 * Checkbox
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
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
  elementSettingsAnalyze
} from 'core/elementSettingsAnalyze.js'
import {
  propSet
} from 'core/propSet.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import componentTemplate from './checkbox.pug'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var title, description, isChecked, isDisabled
  if (elementSettingsAnalyze(settings, 'description')) {
    description = elementSettingsAnalyze(settings, 'description')
  }
  if (elementSettingsAnalyze(settings, 'title')) {
    title = elementSettingsAnalyze(settings, 'title')
  }
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
        isDisabled = true
      } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['checked'][document.langCode]).rating > 0.8) {
        isChecked = true
      }
    }
  }
  let componentProp = {
    name,
    title,
    description,
    isChecked,
    isDisabled
  }
  appendComponent(elementSettingsAnalyze(settings, 'container'), componentTemplate(componentProp))
  propSet(name, settings)
}

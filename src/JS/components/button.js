/*!
 * Button
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import {inheritStyle} from 'core/styleInheritor'
import {appendComponent} from 'core/componentAppend'
import {elementSettingsAnalyze} from 'core/elementSettingsAnalyze'
import {propSet} from 'core/propSet'
import {getTranslations} from 'core/translationsGet'
import componentTemplate from './button.pug'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var text = elementSettingsAnalyze(settings, 'text')
  var isDisabled, isRaised, isToggled
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
        isDisabled = true
      } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['raised'][document.langCode]).rating > 0.8) {
        isRaised = true
      } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['switched'][document.langCode]).rating > 0.8) {
        isToggled = true
      }
    }
  }
  let componentProp = {name, text, isDisabled, isRaised, isToggled}
  appendComponent(elementSettingsAnalyze(settings, 'container'), componentTemplate(componentProp))
  propSet(name, settings)
}

/*!
 * FAB
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import {
  setAnimation
} from 'core/animations.js'
import {
  appendComponent
} from 'core/componentAppend.js'
import {
  inheritStyle
} from 'core/styleInheritor.js'
import {
  execute
} from 'core/commandsExec.js'
import {
  getSafe
} from 'core/getSafe.js'
import {
  elementSettingsAnalyze
} from 'core/elementSettingsAnalyze.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import componentTemplate from './FAB.pug'
import * as declarations from 'core/declarations'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var text, icon, isMini, isDisabled
  if (elementSettingsAnalyze(settings, 'text')) {
    text = elementSettingsAnalyze(settings, 'text')
  }
  if (elementSettingsAnalyze(settings, 'icon')) {
    icon = elementSettingsAnalyze(settings, 'icon')
  }
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (settings.mini.findBestMatch(window.wordsTranslationsDB.Words['mini'][declarations.langCode]).rating > 0.8) {
        isMini = true
      } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][declarations.langCode]).rating > 0.8) {
        isDisabled = true
      }
    }
  }
  appendComponent(name, componentTemplate(componentProp))
}

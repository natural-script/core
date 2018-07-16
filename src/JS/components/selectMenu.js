/*!
 * Select Menu
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
  elementSettingsAnalyze
} from 'core/elementSettingsAnalyze.js'
import {
  propSet
} from 'core/propSet.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import componentTemplate from './selectMenu.pug'
import * as declarations from 'core/declarations'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var title, items, isDisabled
  if (elementSettingsAnalyze(settings, 'title')) {
    title = elementSettingsAnalyze(settings, 'title')
  }
  if (elementSettingsAnalyze(settings, 'items')) {
    items = elementSettingsAnalyze(settings, 'items').split(' &&& ')
  }
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][declarations.langCode]).rating > 0.8) {
        isDisabled = true
      }
    }
  }
  let componentProp = {
    name,
    title,
    items,
    isDisabled
  }
  appendComponent(elementSettingsAnalyze(settings, 'container'), componentTemplate(componentProp))
  let ro = new ResizeObserver(entries => {
    for (let entry of entries) {
      $(entry.target).find(`paper-listbox[slot="dropdown-content"]`).width($(entry.target).outerWidth())
    }
  })
  ro.observe($(`paper-dropdown-menu#${name}`).get(0))
  propSet(name + '', settings)
}

/*!
 * Dropdown Menu
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
  execute
} from 'core/commandsExec.js'
import {
  elementSettingsAnalyze
} from 'core/elementSettingsAnalyze.js'
import {
  propSet
} from 'core/propSet.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import componentTemplate from './dropdownMenu.pug'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var items, emitterHTML, isInGrid, isDisabled
  if (elementSettingsAnalyze(settings, 'items')) {
    items = elementSettingsAnalyze(settings, 'items').split(' &amp;&amp;&amp; ')
  }
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
        isDisabled = true
      }
    }
  }
  if (elementSettingsAnalyze(settings, 'emitter')) {
    var emitter = elementSettingsAnalyze(settings, 'emitter')
    if ($(`#${emitter}`).hasClass('col')) {
      isInGrid = true
    }
    emitterHTML = $(`#${emitter}`).get(0).outerHTML
    let componentProp = {
      name,
      items,
      emitterHTML,
      isInGrid,
      isDisabled
    }
    $(`#${emitter}`).replaceWith(componentTemplate(componentProp))
  }
  let ro = new ResizeObserver(entries => {
    for (let entry of entries) {
      $(entry.target).parent().parent().find(`paper-listbox[slot="dropdown-content"]`).width($(entry.target).outerWidth())
    }
  })
  ro.observe($(`#${name}`).parent().find(`*[slot="dropdown-trigger"]`).children().get(0))
  if (settings[wordsTranslationsDB.Words['commands'][document.langCode][0] + 0]) {
    var commandsNo = 0
    var preCommands
    var itemName
    var pureCommands
    while (settings[wordsTranslationsDB.Words['commands'][document.langCode][0] + commandsNo] != undefined) {
      commandsNo++
    }
    for (var i = 0; i < commandsNo; i++) {
      preCommands = settings[wordsTranslationsDB.Words['commands'][document.langCode][0] + i]
      itemName = preCommands.split(':')[0].split(' ').join('_') + '_dropdownItem'
      pureCommands = preCommands.split(':')[1]
      delete settings[wordsTranslationsDB.Words['commands'][document.langCode][0] + i]
      execute(itemName, pureCommands)
    }
  }
  propSet(name, settings)
}

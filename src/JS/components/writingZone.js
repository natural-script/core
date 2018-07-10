/*!
 * Textbox
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import {
  setFontColour
} from 'core/colors.js'
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
  propSet
} from 'core/propSet.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import {
  convertLengthCSS
} from 'measurements/lengthUnits.js'
import 'datedropper3'
import 'datedropper3/datedropper.css'
import 'timedropper'
import 'timedropper/timedropper.css'
import componentTemplate from './writingZone.pug'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var isMultilined, title, type, auto_validate, allowed_pattern, max, min, isDisabled, isCounted, prefix, suffix
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['multiline'][document.langCode]).rating > 0.8) {
        isMultilined = true
      }
    }
  }
  if (elementSettingsAnalyze(settings, 'title')) {
    title = elementSettingsAnalyze(settings, 'title')
  }
  if (getSafe(() => elementSettingsAnalyze(settings, 'inputType').findBestMatch(window.wordsTranslationsDB.Words['password'][document.langCode]).rating > 0.8)) {
    type = 'password'
  } else if (getSafe(() => elementSettingsAnalyze(settings, 'inputType').findBestMatch(window.wordsTranslationsDB.Words['number'][document.langCode]).rating > 0.8)) {
    type = 'number'
  }
  if (elementSettingsAnalyze(settings, 'requirement')) {
    auto_validate = true
    allowed_pattern = elementSettingsAnalyze(settings, 'requirement')
  }
  if (elementSettingsAnalyze(settings, 'max')) {
    max = elementSettingsAnalyze(settings, 'max')
  }
  if (elementSettingsAnalyze(settings, 'min')) {
    min = elementSettingsAnalyze(settings, 'min')
  }
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
        isDisabled = true
      } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['withCounter'][document.langCode]).rating > 0.8) {
        isCounted = true
      }
    }
  }
  if (elementSettingsAnalyze(settings, 'prefix')) {
    prefix = elementSettingsAnalyze(settings, 'prefix').split(' &amp;&amp;&amp; ')
  }
  if (elementSettingsAnalyze(settings, 'suffix')) {
    var suffix = elementSettingsAnalyze(settings, 'suffix').split(' &amp;&amp;&amp; ')
  }
  let componentProp = {
    name,
    isMultilined,
    title,
    type,
    auto_validate,
    allowed_pattern,
    max,
    min,
    isDisabled,
    isCounted
  }
  appendComponent(elementSettingsAnalyze(settings, 'container'), componentTemplate(componentProp))
  if (getSafe(() => elementSettingsAnalyze(settings, 'inputType').findBestMatch(window.wordsTranslationsDB.Words['date'][document.langCode]).rating > 0.8)) {
    if (document.langID == 0 || document.langID == 1) {
      $(`#${name}`).attr('data-lang', 'en')
    } else if (document.langID == 2) {
      $(`#${name}`).attr('data-lang', 'fr')
    } else if (document.langID == 3 || document.langID == 4) {
      $(`#${name}`).attr('data-lang', 'ar')
    }
    $(`#${name}`).attr('data-modal', 'true')
    $(`#${name}`).attr('data-large-mode', 'true')
    $(`#${name}`).attr('data-translate-mode', 'true')
    $(`#${name}`).dateDropper()
  } else if (getSafe(() => elementSettingsAnalyze(settings, 'inputType').findBestMatch(window.wordsTranslationsDB.Words['time'][document.langCode]).rating > 0.8)) {
    $(`#${name}`).timeDropper()
  }
  if (elementSettingsAnalyze(settings, 'fontColor')) {
    setFontColour(name, elementSettingsAnalyze(settings, 'fontColor'))
  }
  if (elementSettingsAnalyze(settings, 'fontStyle')) {
    $(`#${name}`).css('font-style', elementSettingsAnalyze(settings, 'fontStyle'))
  }
  if (elementSettingsAnalyze(settings, 'fontThickness')) {
    if (getSafe(() => elementSettingsAnalyze(settings, 'fontThickness').findBestMatch(window.wordsTranslationsDB.Words['thick'][document.langCode]).rating > 0.8)) {
      $(`#${name}`).css('font-weight', 'bold')
    } else {
      $(`#${name}`).css('font-weight', elementSettingsAnalyze(settings, 'fontThickness'))
    }
  }
  if (elementSettingsAnalyze(settings, 'fontSize')) {
    $(`#${name}`).css('font-size', convertLengthCSS(elementSettingsAnalyze(settings, 'fontSize')))
  }
  if ($('#' + elementSettingsAnalyze(settings, 'container') + '').hasClass('row') == true) {
    $(`#${name}`).addClass('col')
  }
  if (elementSettingsAnalyze(settings, 'position')) {
    $(`#${name}`).css('position', elementSettingsAnalyze(settings, 'position'))
  } else {
    $(`#${name}`).css('position', 'relative')
  }
  propSet(name, settings)
}

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
import * as declarations from 'core/declarations'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var isMultilined, title, type, auto_validate, allowed_pattern, max, min, isDisabled, isCounted, prefix, suffix
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['multiline'][declarations.langCode]).rating > 0.8) {
        isMultilined = true
      }
    }
  }
  if (elementSettingsAnalyze(settings, 'title')) {
    title = elementSettingsAnalyze(settings, 'title')
  }
  if (getSafe(() => elementSettingsAnalyze(settings, 'inputType').findBestMatch(window.wordsTranslationsDB.Words['password'][declarations.langCode]).rating > 0.8)) {
    type = 'password'
  } else if (getSafe(() => elementSettingsAnalyze(settings, 'inputType').findBestMatch(window.wordsTranslationsDB.Words['number'][declarations.langCode]).rating > 0.8)) {
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
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][declarations.langCode]).rating > 0.8) {
        isDisabled = true
      } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['withCounter'][declarations.langCode]).rating > 0.8) {
        isCounted = true
      }
    }
  }
  if (elementSettingsAnalyze(settings, 'prefix')) {
    prefix = elementSettingsAnalyze(settings, 'prefix').split(' &&& ')
  }
  if (elementSettingsAnalyze(settings, 'suffix')) {
    var suffix = elementSettingsAnalyze(settings, 'suffix').split(' &&& ')
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
  if (getSafe(() => elementSettingsAnalyze(settings, 'inputType').findBestMatch(window.wordsTranslationsDB.Words['date'][declarations.langCode]).rating > 0.8)) {
    if (declarations.langID == 0 || declarations.langID == 1) {
      $(`#${name}`).attr('data-lang', 'en')
    } else if (declarations.langID == 2) {
      $(`#${name}`).attr('data-lang', 'fr')
    } else if (declarations.langID == 3 || declarations.langID == 4) {
      $(`#${name}`).attr('data-lang', 'ar')
    }
    $(`#${name}`).attr('data-modal', 'true')
    $(`#${name}`).attr('data-large-mode', 'true')
    $(`#${name}`).attr('data-translate-mode', 'true')
    $(`#${name}`).dateDropper()
  } else if (getSafe(() => elementSettingsAnalyze(settings, 'inputType').findBestMatch(window.wordsTranslationsDB.Words['time'][declarations.langCode]).rating > 0.8)) {
    $(`#${name}`).timeDropper()
  }
  if (elementSettingsAnalyze(settings, 'fontColor')) {
    setFontColour(name, elementSettingsAnalyze(settings, 'fontColor'))
  }
  if (elementSettingsAnalyze(settings, 'fontStyle')) {
    $(`#${name}`).css('font-style', elementSettingsAnalyze(settings, 'fontStyle'))
  }
  if (elementSettingsAnalyze(settings, 'fontThickness')) {
    if (getSafe(() => elementSettingsAnalyze(settings, 'fontThickness').findBestMatch(window.wordsTranslationsDB.Words['thick'][declarations.langCode]).rating > 0.8)) {
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

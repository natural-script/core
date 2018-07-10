/*!
 * Slider
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
import componentTemplate from './slider.pug'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var out = '<paper-slider '
  if (elementSettingsAnalyze(settings, 'max')) {
    out += 'max="' + elementSettingsAnalyze(settings, 'max') + '" '
  }
  if (elementSettingsAnalyze(settings, 'min')) {
    out += 'min="' + elementSettingsAnalyze(settings, 'min') + '" '
  }
  if (elementSettingsAnalyze(settings, 'step')) {
    out += 'step="' + elementSettingsAnalyze(settings, 'step') + '" '
  }
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
        out += 'disabled '
      } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['withPin'][document.langCode]).rating > 0.8) {
        out += 'pin '
      } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['withDigitalValueEditor'][document.langCode]).rating > 0.8) {
        out += 'editable '
      }
    }
  }
  out += 'id="' + name + '">'
  out += '</paper-slider>'
  appendComponent(elementSettingsAnalyze(settings, 'container'), out)
  if (elementSettingsAnalyze(settings, 'fontColor')) {
    setFontColour(name, elementSettingsAnalyze(settings, 'fontColor'))
  }
  if (elementSettingsAnalyze(settings, 'fontStyle')) {
    $(`#${name}`).css('font-style', elementSettingsAnalyze(settings, 'fontStyle'))
  }
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
        $(`#${name}`).attr('disabled', '')
      }
    }
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
  if (elementSettingsAnalyze(settings, 'transparency')) {
    $(`#${name}`).css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(settings, 'transparency') + '%)')
  }
}

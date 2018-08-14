/*!
 * Properties Setter
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-07
 */
import {
  setAnimation
} from 'core/animations.js'
import {
  setFontColour,
  setBG
} from 'core/colors.js'
import {
  elementSettingsAnalyze
} from 'core/elementSettingsAnalyze.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import {
  setDimension
} from 'measurements/Dimensions.js'
import {
  setDistance
} from 'measurements/Distances.js'
import {
  setFontSize
} from 'measurements/fontSize.js'
import {
  getUniqueID
} from './uniqueID.js'
import {
  requestBLOB
} from 'core/BLOBGet.js'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import * as declarations from 'core/declarations'
export const propSet = function (elementName, properties, param1, param2, param3) {
  if (elementSettingsAnalyze(properties, 'distanceFromBottom')) {
    setDistance(elementName, 'bottom', elementSettingsAnalyze(properties, 'distanceFromBottom'))
  }
  if (elementSettingsAnalyze(properties, 'distanceFromTop')) {
    setDistance(elementName, 'top', elementSettingsAnalyze(properties, 'distanceFromTop'))
  }
  if (elementSettingsAnalyze(properties, 'distanceFromLeft')) {
    setDistance(elementName, 'left', elementSettingsAnalyze(properties, 'distanceFromLeft'))
  }
  if (elementSettingsAnalyze(properties, 'distanceFromRight')) {
    setDistance(elementName, 'right', elementSettingsAnalyze(properties, 'distanceFromRight'))
  }
  if (elementSettingsAnalyze(properties, 'width')) {
    setDimension(elementName, 'width', elementSettingsAnalyze(properties, 'width'))
  }
  if (elementSettingsAnalyze(properties, 'length')) {
    setDimension(elementName, 'length', elementSettingsAnalyze(properties, 'length'))
  }
  if (elementSettingsAnalyze(properties, 'animation')) {
    setAnimation(elementName, elementSettingsAnalyze(properties, 'animation'))
  }
  if (elementSettingsAnalyze(properties, 'transparency')) {
    $(`#${elementName}`).css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(properties, 'transparency') + '%)')
  }
  if (elementSettingsAnalyze(properties, 'attributes')) {
    if (elementSettingsAnalyze(properties, 'attributes').search(XRegExp('' + getTranslations('parallax') + '', 'gmi')) > -1) {
      if (elementSettingsAnalyze(properties, 'background')) {
        if (window.isLive) {
          $(`#${elementName}`).css({
            'background': 'url(' + elementSettingsAnalyze(properties, 'background') + ') no-repeat',
            'background-size': 'cover'
          })
          if (declarations.deviceForm == 'desktop') {
            $(`#${elementName}`).addClass('parallax')
          }
        } else {
          requestBLOB(elementSettingsAnalyze(properties, 'background'), encodeURIComponent(elementSettingsAnalyze(properties, 'background')).replace(/\./g, '%2E'), function (BLOBURL) {
            $(`#${elementName}`).css({
              'background': 'url(' + BLOBURL + ') no-repeat',
              'background-size': 'cover'
            })
            if (declarations.deviceForm == 'desktop') {
              $(`#${elementName}`).addClass('parallax')
            }
            setTimeout(function () {
              window.URL.revokeObjectURL(BLOBURL)
            }, 10000)
          })
        }
      }
    } else {
      if (elementSettingsAnalyze(properties, 'background')) {
        setBG(elementName, elementSettingsAnalyze(properties, 'background'))
      }
    }
  } else {
    if (elementSettingsAnalyze(properties, 'background')) {
      setBG(elementName, elementSettingsAnalyze(properties, 'background'))
    }
  }
  if (elementSettingsAnalyze(properties, 'fontColor')) {
    setFontColour(elementName, elementSettingsAnalyze(properties, 'fontColor'))
  }
  if (elementSettingsAnalyze(properties, 'fontStyle')) {
    $(`#${elementName}`).css('font-style', elementSettingsAnalyze(properties, 'fontStyle'))
  }
  if (elementSettingsAnalyze(properties, 'fontThickness')) {
    if (elementSettingsAnalyze(properties, 'fontThickness').findBestMatch(window.wordsTranslationsDB.Words['thick'][declarations.langCode]).rating > 0.8) {
      $(`#${elementName}`).css('font-weight', 'bold')
    } else {
      $(`#${elementName}`).css('font-weight', elementSettingsAnalyze(properties, 'fontThickness'))
    }
  }
  if (elementSettingsAnalyze(properties, 'shape')) {
    if (getSafe(() => elementSettingsAnalyze(properties, 'shape').findBestMatch(window.wordsTranslationsDB.Words['triangle'][declarations.langCode]).rating > 0.8)) {
      $(`#${elementName}`).addClass('triangle')
    } else if (getSafe(() => elementSettingsAnalyze(properties, 'shape').findBestMatch(window.wordsTranslationsDB.Words['trapezoid'][declarations.langCode]).rating > 0.8)) {
      $(`#${elementName}`).addClass('trapezoid')
    } else if (getSafe(() => elementSettingsAnalyze(properties, 'shape').findBestMatch(window.wordsTranslationsDB.Words['parallelogram'][declarations.langCode]).rating > 0.8)) {
      $(`#${elementName}`).addClass('parallelogram')
    } else if (getSafe(() => elementSettingsAnalyze(properties, 'shape').findBestMatch(window.wordsTranslationsDB.Words['rhombus'][declarations.langCode]).rating > 0.8)) {
      $(`#${elementName}`).addClass('rhombus')
    } else if (getSafe(() => elementSettingsAnalyze(properties, 'shape').findBestMatch(window.wordsTranslationsDB.Words['pentagon'][declarations.langCode]).rating > 0.8)) {
      $(`#${elementName}`).addClass('pentagon')
    } else if (getSafe(() => elementSettingsAnalyze(properties, 'shape').findBestMatch(window.wordsTranslationsDB.Words['hexagon'][declarations.langCode]).rating > 0.8)) {
      $(`#${elementName}`).addClass('hexagon')
    } else if (getSafe(() => elementSettingsAnalyze(properties, 'shape').findBestMatch(window.wordsTranslationsDB.Words['heptagon'][declarations.langCode]).rating > 0.8)) {
      $(`#${elementName}`).addClass('heptagon')
    } else if (getSafe(() => elementSettingsAnalyze(properties, 'shape').findBestMatch(window.wordsTranslationsDB.Words['octagon'][declarations.langCode]).rating > 0.8)) {
      $(`#${elementName}`).addClass('octagon')
    } else if (getSafe(() => elementSettingsAnalyze(properties, 'shape').findBestMatch(window.wordsTranslationsDB.Words['decagon'][declarations.langCode]).rating > 0.8)) {
      $(`#${elementName}`).addClass('decagon')
    } else if (getSafe(() => elementSettingsAnalyze(properties, 'shape').findBestMatch(window.wordsTranslationsDB.Words['circle'][declarations.langCode]).rating > 0.8)) {
      $(`#${elementName}`).addClass('circle')
    } else if (getSafe(() => elementSettingsAnalyze(properties, 'shape').findBestMatch(window.wordsTranslationsDB.Words['ellipse'][declarations.langCode]).rating > 0.8)) {
      $(`#${elementName}`).addClass('ellipse')
    }
  }
  if (elementSettingsAnalyze(properties, 'fontSize')) {
    setFontSize(elementName, elementSettingsAnalyze(properties, 'fontSize'))
  }
  if ($('#' + elementSettingsAnalyze(properties, 'container') + '').hasClass('row') == true) {
    $(`#${elementName}`).addClass('col')
  }
  if (elementSettingsAnalyze(properties, 'position')) {
    $(`#${elementName}`).css('position', elementSettingsAnalyze(properties, 'position'))
  } else {
    $(`#${elementName}`).css('position', 'relative')
  }
  if (elementSettingsAnalyze(properties, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(properties, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['scrollable'][declarations.langCode]).rating > 0.8) {
        document[getUniqueID()] = new PerfectScrollbar(`#${elementName}`)
      }
    }
  }
}

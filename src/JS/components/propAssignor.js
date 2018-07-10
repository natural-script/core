/*!
 * Properties Assignor
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-05-01
 */
import {
  setAnimation
} from 'core/animations.js'
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
  setDimension
} from 'measurements/Dimensions.js'
import {
  setDistance
} from 'measurements/Distances.js'
import {
  convertLengthCSS
} from 'measurements/lengthUnits.js'
export default function (settings) {
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
  if (elementSettingsAnalyze(settings, 'position')) {
    $(`#${name}`).css('position', elementSettingsAnalyze(settings, 'position'))
  } else {
    $(`#${name}`).css('position', 'absolute')
  }
  if (elementSettingsAnalyze(settings, 'distanceFromBottom')) {
    setDistance(name, 'bottom', elementSettingsAnalyze(settings, 'distanceFromBottom'))
  }
  if (elementSettingsAnalyze(settings, 'distanceFromTop')) {
    setDistance(name, 'top', elementSettingsAnalyze(settings, 'distanceFromTop'))
  }
  if (elementSettingsAnalyze(settings, 'distanceFromLeft')) {
    setDistance(name, 'left', elementSettingsAnalyze(settings, 'distanceFromLeft'))
  }
  if (elementSettingsAnalyze(settings, 'distanceFromRight')) {
    setDistance(name, 'right', elementSettingsAnalyze(settings, 'distanceFromRight'))
  }
  if (elementSettingsAnalyze(settings, 'commands')) {
    execute(name, elementSettingsAnalyze(settings, 'commands'))
  }
  if (elementSettingsAnalyze(settings, 'width')) {
    setDimension(name, 'width', elementSettingsAnalyze(settings, 'width'))
  }
  if (elementSettingsAnalyze(settings, 'length')) {
    setDimension(name, 'length', elementSettingsAnalyze(settings, 'length'))
  }
  if (elementSettingsAnalyze(settings, 'animation')) {
    setAnimation(name, elementSettingsAnalyze(settings, 'animation'))
  }
  if (elementSettingsAnalyze(settings, 'transparency')) {
    $(`#${name}`).css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(settings, 'transparency') + '%)')
  }
};

/*!
 * Video
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-05-01
 */
import {
  setAnimation
} from 'core/animations.js'
import {
  verifyBLOB
} from 'core/BLOBGet.js'
import {
  setBG
} from 'core/colors.js'
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
  getFileSize
} from 'core/fileSizeGet.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import {
  showVideoA
} from 'core/vidFn.js'
import {
  getVideoInfo
} from 'providers/videoInfoGet.js'
import {
  getVideoProvider
} from 'providers/videoProviderGet.js'
import {
  setDimension
} from 'measurements/Dimensions.js'
import {
  setDistance
} from 'measurements/Distances.js'
import {
  getUniqueID
} from 'core/uniqueID.js'
import camcorderIcon from '../../Media/img/icons/camcorderA.svg'
import componentTemplate from './video.pug'
import * as declarations from 'core/declarations'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  let name = elementSettingsAnalyze(settings, 'name')
  let source = elementSettingsAnalyze(settings, 'source')
  let title = elementSettingsAnalyze(settings, 'title')
  let URLID = encodeURIComponent(source).replace(/\./g, '%2E')
  let componentProp = {
    name,
    source,
    title,
    URLID,
    camcorderIcon
  }
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['transparent'][declarations.langCode]).rating > 0.8) {
        componentProp.noShadow = true
      }
    }
  }
  appendComponent(elementSettingsAnalyze(settings, 'container'), componentTemplate(componentProp))
  $(`#${name}`).prop('isTitled', false)
  $(`#${name}`).prop('type', 'vid')
  if (window.isLive) {
    getFileSize(source, function (size) {
      $(`#video_${name}_mainButton`).html(`<i class="material-icons">play_arrow</i> ${size}`)
    })
    if (getVideoProvider(source).videoProvider == 'webHosting') {
      $('#receiver').on('load', function () {
        if (isTitled) {
          verifyBLOB(name, 'vid', source, encodeURIComponent(source).replace(/\./g, '%2E'), title)
        } else {
          verifyBLOB(name, 'vid', source, encodeURIComponent(source).replace(/\./g, '%2E'))
        }
      })
      var uniqueID = getUniqueID()
      document[uniqueID + 'checker'] = setInterval(function () {
        if ($('#receiver').prop('ready')) {
          verifyBLOB(name, 'vid', encodeURIComponent(source).replace(/\./g, '%2E'))
          clearInterval(document[uniqueID + 'checker'])
        }
      }, 1)
    } else {
      getVideoInfo(name, getVideoProvider(source).videoProvider, getVideoProvider(source).videoID, getVideoProvider(source).videoURL, title)
    }
  } else {
    if (getVideoProvider(source).videoProvider == 'webHosting') {
      verifyBLOB(encodeURIComponent(source).replace(/\./g, '%2E'), function (data) {
        if (data == 'not exist') {
          getFileSize(source, function (size) {
            $('#video_' + name + '_mainButton').html('<i class="material-icons">play_arrow</i> ' + size)
          })
        } else if (data == 'exists') {
          showVideoA(name, source, title, encodeURIComponent(source).replace(/\./g, '%2E'))
        }
      })
    } else {
      getVideoInfo(name, getVideoProvider(source).videoProvider, getVideoProvider(source).videoID, getVideoProvider(source).videoURL, title)
    }
  }
  if (elementSettingsAnalyze(settings, 'background')) {
    setBG(name, elementSettingsAnalyze(settings, 'background'))
  }
  if (elementSettingsAnalyze(settings, 'title')) {
    $(`#${name}`).attr('alt', elementSettingsAnalyze(settings, 'title'))
  }
  if (elementSettingsAnalyze(settings, 'width')) {
    setDimension(name, 'width', elementSettingsAnalyze(settings, 'width'))
  }
  if (elementSettingsAnalyze(settings, 'length')) {
    setDimension(name, 'length', elementSettingsAnalyze(settings, 'length'))
  }
  if (elementSettingsAnalyze(settings, 'distanceFromBottom')) {
    setDistance(`name${_container}`, 'bottom', elementSettingsAnalyze(settings, 'distanceFromBottom'))
  }
  if (elementSettingsAnalyze(settings, 'distanceFromTop')) {
    setDistance(`name${_container}`, 'top', elementSettingsAnalyze(settings, 'distanceFromTop'))
  }
  if (elementSettingsAnalyze(settings, 'distanceFromLeft')) {
    setDistance(`name${_container}`, 'left', elementSettingsAnalyze(settings, 'distanceFromLeft'))
  }
  if (elementSettingsAnalyze(settings, 'distanceFromRight')) {
    setDistance(`name${_container}`, 'right', elementSettingsAnalyze(settings, 'distanceFromRight'))
  }
  if (elementSettingsAnalyze(settings, 'animation')) {
    setAnimation(`name${_container}`, elementSettingsAnalyze(settings, 'animation'))
  }
  if (elementSettingsAnalyze(settings, 'transparency')) {
    $(`#${name}`).css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(settings, 'transparency') + '%)')
  }
}

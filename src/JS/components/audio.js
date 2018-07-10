/*!
 * Audio
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-05-01
 */
import {
  requestBLOB
} from 'core/BLOBGet.js'
import {
  inheritStyle
} from 'core/styleInheritor.js'
import {
  elementSettingsAnalyze
} from 'core/elementSettingsAnalyze.js'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var source = elementSettingsAnalyze(settings, 'source')
  let initAudio = function (source) {
    if (elementSettingsAnalyze(settings, 'cover')) {
      var audioInfo = [{
        name: elementSettingsAnalyze(settings, 'title'),
        artist: elementSettingsAnalyze(settings, 'author'),
        url: source,
        cover: elementSettingsAnalyze(settings, 'cover')
      }]
      if ($('#' + elementSettingsAnalyze(settings, 'audioPlayer')).html().trim() != '') {
        document[elementSettingsAnalyze(settings, 'audioPlayer')].addAudio(audioInfo)
      } else {
        document.initializeAudioPlayerB[elementSettingsAnalyze(settings, 'audioPlayer')](elementSettingsAnalyze(settings, 'title'), elementSettingsAnalyze(settings, 'author'), source, elementSettingsAnalyze(settings, 'cover'))
      }
    } else {
      var audioInfo = [{
        name: elementSettingsAnalyze(settings, 'title'),
        artist: elementSettingsAnalyze(settings, 'author'),
        url: source
      }]
      if ($('#' + elementSettingsAnalyze(settings, 'audioPlayer')).html().trim() != '') {
        document[elementSettingsAnalyze(settings, 'audioPlayer')].addAudio(audioInfo)
      } else {
        document.initializeAudioPlayerA[elementSettingsAnalyze(settings, 'audioPlayer')](elementSettingsAnalyze(settings, 'title'), elementSettingsAnalyze(settings, 'author'), source)
      }
    }
  }
  if (window.isLive) {
    initAudio(source)
  } else {
    requestBLOB(source, encodeURIComponent(source).replace(/\./g, '%2E'), function (dataURL) {
      initAudio(dataURL)
    })
  }
}

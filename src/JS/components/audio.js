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
} from 'core/BLOBGet'
import inheritStyle from 'core/styleInheritor'
export default function (props) {
  props = inheritStyle(props, props.style)
  var source = props.source
  let initAudio = function (source) {
    if (props.cover) {
      var audioInfo = [{
        name: props.title,
        artist: props.author,
        url: source,
        cover: props.cover
      }]
      if ($('body').find(`#${props.audioPlayer}`).html().trim() != '') {
        document[props.audioPlayer].addAudio(audioInfo)
      } else {
        document.initializeAudioPlayerB[props.audioPlayer](props.title, props.author, source, props.cover)
      }
    } else {
      var audioInfo = [{
        name: props.title,
        artist: props.author,
        url: source
      }]
      if ($('body').find(`#${props.audioPlayer}`).html().trim() != '') {
        document[props.audioPlayer].addAudio(audioInfo)
      } else {
        document.initializeAudioPlayerA[props.audioPlayer](props.title, props.author, source)
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
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
  verifyBLOB
} from 'core/BLOBGet.js'
import inheritStyle from 'core/styleInheritor'
import appendComponent from 'core/componentAppend'
import propSet from 'core/propSet'
import getFileSize from 'core/fileSizeGet.js'
import isAttributedByBeing from 'core/isAttributedByBeing'
import {
  showVideoA
} from 'core/vidFn'
import getVideoInfo from 'providers/videoInfoGet'
import getVideoProvider from 'providers/videoProviderGet'
import nanoid from 'nanoid'
import camcorderIcon from '../../Media/img/icons/camcorderA.svg'
import componentTemplate from './video.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  let name = props.name
  let source = props.source
  let title = props.title
  let URLID = encodeURIComponent(source).replace(/\./g, '%2E')
  let componentProps = {
    name,
    source,
    title,
    URLID,
    camcorderIcon
  }
  if (isAttributedByBeing(props, 'transparent')) {
    componentProps.noShadow = true
  }
  appendComponent(props.container, componentTemplate(componentProps))
  propSet(name, props)
  $('body').find(`#${name}`).prop('isTitled', false)
  $('body').find(`#${name}`).prop('type', 'vid')
  if (window.isLive) {
    getFileSize(source, function (size) {
      $('body').find(`#video_${name}_mainButton`).html(`<i class="material-icons">play_arrow</i> ${size}`)
    })
    if (getVideoProvider(source).videoProvider == 'webHosting') {
      $('#receiver').on('load', function () {
        if (isTitled) {
          verifyBLOB(name, 'vid', source, encodeURIComponent(source).replace(/\./g, '%2E'), title)
        } else {
          verifyBLOB(name, 'vid', source, encodeURIComponent(source).replace(/\./g, '%2E'))
        }
      })
      var uniqueID = nanoid(10)
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
            $('body').find(`#video_${name}_mainButton`).html('<i class="material-icons">play_arrow</i> ' + size)
          })
        } else if (data == 'exists') {
          showVideoA(name, source, title, encodeURIComponent(source).replace(/\./g, '%2E'))
        }
      })
    } else {
      getVideoInfo(name, getVideoProvider(source).videoProvider, getVideoProvider(source).videoID, getVideoProvider(source).videoURL, title)
    }
  }
  if (props.title) {
    $('body').find(`#${name}`).attr('alt', props.title)
  }
}
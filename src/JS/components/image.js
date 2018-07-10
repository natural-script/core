/*!
 * Image
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
  execute
} from 'core/commandsExec.js'
import {
  getSafe
} from 'core/getSafe.js'
import {
  elementSettingsAnalyze
} from 'core/elementSettingsAnalyze.js'
import {
  getFileSize
} from 'core/fileSizeGet.js'
import {
  showImageA,
  showImageB,
  showImageC,
  showImageD
} from 'core/imgFn.js'
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
  getUniqueID
} from 'core/uniqueID.js'
import componentTemplate from './image.pug'
import photoIcon from '../../Media/img/icons/photoA.svg'

function setImgProp (name, settings, isTitled) {
  if (isTitled) {
    $(`#${name}`).prop('isTitled', true)
  } else {
    $(`#${name}`).prop('isTitled', false)
  }
  $(`#${name}`).prop('type', 'img')
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
    setDistance(`${name}_container`, 'bottom', elementSettingsAnalyze(settings, 'distanceFromBottom'))
  }
  if (elementSettingsAnalyze(settings, 'distanceFromTop')) {
    setDistance(`${name}_container`, 'top', elementSettingsAnalyze(settings, 'distanceFromTop'))
  }
  if (elementSettingsAnalyze(settings, 'distanceFromLeft')) {
    setDistance(`${name}_container`, 'left', elementSettingsAnalyze(settings, 'distanceFromLeft'))
  }
  if (elementSettingsAnalyze(settings, 'distanceFromRight')) {
    setDistance(`${name}_container`, 'right', elementSettingsAnalyze(settings, 'distanceFromRight'))
  }
  if (elementSettingsAnalyze(settings, 'commands')) {
    execute(name, elementSettingsAnalyze(settings, 'commands'))
  }
  if (elementSettingsAnalyze(settings, 'animation')) {
    setAnimation(name, elementSettingsAnalyze(settings, 'animation'))
  }
  if (elementSettingsAnalyze(settings, 'transparency')) {
    $(`#${name}`).css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(settings, 'transparency') + '%)')
  }
  if (elementSettingsAnalyze(settings, 'FX') == 'rain') {
    $(`#${name}`).attr('fx', 'rain')
  }
}

export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var isIcon = false
  var isTitled = false
  var name = elementSettingsAnalyze(settings, 'name')
  var source = elementSettingsAnalyze(settings, 'source')
  var URLID = encodeURIComponent(source).replace(/\./g, '%2E')
  var subContainerStartTag = '<paper-material elevation="2" style="position: absolute;">'
  var subContainerEndTag = '</paper-material>'
  window.analyseImage(name, source)
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['transparent'][document.langCode]).rating > 0.8) {
        subContainerStartTag = '<div style="position: absolute;">'
        subContainerEndTag = '</div>'
      }
    }
  }
  if (getSafe(() => elementSettingsAnalyze(settings, 'type').findBestMatch(window.wordsTranslationsDB.Words['icon'][document.langCode]).rating > 0.8)) {
    getFileSize(source, function (size) {
      if (size.split(' kb')[0] < 100) {
        isIcon = true
        var out = `<div id="${name}_container" style="position: relative; overflow: hidden;"> 
                            ${subContainerStartTag} 
                            <img id="${name}" src="" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> 
                            <div id="showImage_${name}_containerB" style="display: none;"> 
                            <div class="showImageConatainerB"> 
                            <p class="nudesFoundWarningText">Nudes found</p><paper-button class="yesShowTheNudes" onclick="showImageC('${name}', '${URLID}', '${source}');">Continue</paper-button> 
                            <paper-button class="showBlurredNudes" onclick="showImageB('${name}', '${URLID}', '${source}');">Show Blurred</paper-button></div></div> 
                            <div id="showImage_${name}_containerC" style="display: none;"> 
                            <p class="showTheFullContentWarning">Show the full content ?</p> 
                            <paper-button class="yesRemoveTheBlur" onclick="showImageD('${name}');">Continue</paper-button></div>
                            <div id="showImage_${name}_containerD" style="display: none;"> 
                            <p class="forbiddenContentWarning">You are prohibited from accessing this content</p> 
                            </div> 
                            ${subContainerEndTag}</div>`
      } else {
        var out = `<div id="${name}_container" style="position: relative; overflow: hidden;"> 
                                ${subContainerStartTag} 
								<img id="${name}" src="" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> 
                                <div id="showImage_${name}_containerA"> 
                                <div class="showImageConatainerA"> 
								<p id="${name}_imageData" class="imageData"></p> 
								<paper-button id="image_${name}_mainButton" class="imageMainButton" onclick="showImageA('${name}', '${URLID}', '${source}');"> 
                                <i class="material-icons">file_download</i> Loading...</paper-button> 
                                <img class="showImageContainerAIcon" src="${photoIcon}" /></div></div> 
								<div id="showImage_${name}_containerB" style="display: none;"> 
								<p class="nudesFoundWarningText">Nudes found</p><paper-button class="yesShowTheNudes" onclick="showImageC('${name}', '${URLID}', '${source}');">Continue</paper-button> 
								<paper-button class="showBlurredNudes" onclick="showImageB('${name}', '${URLID}', '${source}');">Show Blurred</paper-button></div></div> 
								<div id="showImage_${name}_containerC" style="display: none;"> 
								<p class="showTheFullContentWarning">Show the full content ?</p> 
								<paper-button class="yesRemoveTheBlur" onclick="showImageD('${name}');">Continue</paper-button></div>
                                <div id="showImage_${name}_containerD" style="display: none;"> 
								<p class="forbiddenContentWarning">You are prohibited from accessing this content</p> 
								</div> 
                                ${subContainerEndTag}</div>`
      }
      appendComponent(elementSettingsAnalyze(settings, 'container'), out)
      if (window.isLive) {
        if (isIcon) {
          var uniqueID = getUniqueID()
          document[uniqueID + 'checker'] = setInterval(function () {
            if ($('#receiver').prop('ready')) {
              showImageA(name, URLID, source)
              clearInterval(document[uniqueID + 'checker'])
            }
          }, 1)
        } else {
          getFileSize(source, function (size) {
            $(`#image_${name}_mainButton`).html('<i class="material-icons">file_download</i> ' + size)
          })
          var uniqueID = getUniqueID()
          document[uniqueID + 'checker'] = setInterval(function () {
            if ($('#receiver').prop('ready')) {
              verifyBLOB(name, 'img', source, URLID)
              clearInterval(document[uniqueID + 'checker'])
            }
          }, 1)
        }
      } else {
        if (isIcon) {
          showImageA(name, URLID, source)
        } else {
          verifyBLOB(URLID, function (data) {
            if (data == 'not exist') {
              getFileSize(source, function (size) {
                $('#image_' + name + '_mainButton').html('<i class="material-icons">file_download</i> ' + size)
              })
            } else if (data == 'exists') {
              showImageA(name, URLID, source)
            }
          })
        }
      }
      setImgProp(name, settings, isTitled)
    })
  } else {
    if (elementSettingsAnalyze(settings, 'title')) {
      isTitled = true
      var out = `<div id="${name}_container" style="position: relative; overflow: hidden;"> 
                                ${subContainerStartTag} 
                                <img id="${name}" src="" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> 
                                <div class="imageTitle">${elementSettingsAnalyze(settings, 'title')}</div> 
								<div id="showImage_${name}_containerA"> 
                                <div class="showImageContainerA"> 
								<p id="${name}_imageData" class="imageData"></p> 
								<paper-button id="image_${name}_mainButton" class="imageMainButton" onclick="showImageA('${name}', '${URLID}', '${source}');"> 
                                <i class="material-icons">file_download</i> Loading...</paper-button> 
                                <img class="showImageContainerAIcon" src="${photoIcon}" /></div></div> 
								<div id="showImage_${name}_containerB" style="display: none;"> 
                                <div class="showImageConatainerB"> 
								<p class="nudesFoundWarningText">Nudes found</p><paper-button class="yesShowTheNudes" onclick="showImageC('${name}', '${URLID}', '${source}');">Continue</paper-button> 
								<paper-button class="showBlurredNudes" onclick="showImageB('${name}', '${URLID}', '${source}');">Show Blurred</paper-button></div></div> 
								<div id="showImage_${name}_containerC" style="display: none;"> 
								<p class="showTheFullContentWarning">Show the full content ?</p> 
								<paper-button class="yesRemoveTheBlur" onclick="showImageD('${name}');">Continue</paper-button></div>
                                <div id="showImage_${name}_containerD" style="display: none;"> 
								<p class="forbiddenContentWarning">You are prohibited from accessing this content</p> 
								</div> 
                                ${subContainerEndTag}</div>`
    } else {
      var out = `<div id="${name}_container" style="position: relative; overflow: hidden;"> 
                                ${subContainerStartTag} 
								<img id="${name}" src="" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> 
                                <div id="showImage_${name}_containerA"> 
                                <div class="showImageContainerA"> 
								<p id="${name}_imageData" class="imageData"></p> 
								<paper-button id="image_${name}_mainButton" class="imageMainButton" onclick="showImageA('${name}', '${URLID}', '${source}');"> 
                                <i class="material-icons">file_download</i> Loading...</paper-button> 
                                <img class="showImageContainerAIcon" src="${photoIcon}" /></div></div> 
								<div id="showImage_${name}_containerB" style="display: none;"> 
								<p class="nudesFoundWarningText">Nudes found</p><paper-button class="yesShowTheNudes" onclick="showImageC('${name}', '${URLID}', '${source}');">Continue</paper-button> 
								<paper-button class="showBlurredNudes" onclick="showImageB('${name}', '${URLID}', '${source}');">Show Blurred</paper-button></div></div> 
								<div id="showImage_${name}_containerC" style="display: none;"> 
								<p class="showTheFullContentWarning">Show the full content ?</p> 
                                <paper-button class="yesRemoveTheBlur" onclick="showImageD('${name}');">Continue</paper-button></div>
                                <div id="showImage_${name}_containerD" style="display: none;"> 
								<p class="forbiddenContentWarning">You are prohibited from accessing this content</p> 
								</div> 
                                ${subContainerEndTag}</div>`
    }
    appendComponent(elementSettingsAnalyze(settings, 'container'), out)
    if (window.isLive) {
      getFileSize(source, function (size) {
        $(`#image_${name}_mainButton`).html(`<i class="material-icons">file_download</i> ${size}`)
      })
      var uniqueID = getUniqueID()
      document[uniqueID + 'checker'] = setInterval(function () {
        if ($('#receiver').prop('ready')) {
          verifyBLOB(name, 'img', source, URLID)
          clearInterval(document[uniqueID + 'checker'])
        }
      }, 1)
    } else {
      verifyBLOB(URLID, function (data) {
        if (data == 'not exist') {
          getFileSize(source, function (size) {
            $('#image_' + name + '_mainButton').html('<i class="material-icons">file_download</i> ' + size)
          })
        } else if (data == 'exists') {
          showImageA(name, URLID, source)
        }
      })
    }
    setImgProp(name, settings, isTitled)
  }
}

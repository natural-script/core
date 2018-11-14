/*!
 * Setup
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import init404Page from 'core/init404Page'
import inheritStyle from 'core/styleInheritor'
import getTranslations from 'core/translationsGet'
import {
  setMainColor
} from 'core/colors'
import initRemoteScrolling from 'core/initRemoteScrolling'
import nanoid from 'nanoid'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import isAttributedByBeing from 'core/isAttributedByBeing'
import componentTemplate from './setup.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  let mode, logoURL, title
  let resolution
  if (props.defaultWindowResolution) {
    resolution = props.defaultWindowResolution
  } else {
    resolution = `${screen.availWidth} × ${screen.availHeight}`
  }
  var landscapeResolution = null
  var portraitResolution = null
  if (XRegExp(` ${getTranslations('and')} `, 'gmi').test(resolution)) {
    var availableResolutions = resolution.split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < availableResolutions.length; i++) {
      if (XRegExp('' + getTranslations('inTheCaseOfLandscapeMode') + '', 'gmi').test(availableResolutions[i])) {
        landscapeResolution = availableResolutions[i].split(XRegExp('' + getTranslations('inTheCaseOfLandscapeMode') + '', 'gmi'))[0].split(' ')[0] + ' ' + availableResolutions[i].split(XRegExp('' + getTranslations('inTheCaseOfLandscapeMode') + '', 'gmi'))[0].split(' ')[1] + ' ' + availableResolutions[i].split(XRegExp('' + getTranslations('inTheCaseOfLandscapeMode') + '', 'gmi'))[0].split(' ')[2]
        document.defaultLandscapeWindowWidth = landscapeResolution.split(' × ')[0]
        document.defaultLandscapeWindowLength = landscapeResolution.split(' × ')[1]
        document.defaultWindowWidth = document.defaultLandscapeWindowLength
        document.defaultWindowLength = document.defaultLandscapeWindowLength
      } else if (XRegExp('' + getTranslations('inTheCaseOfPortraitMode') + '', 'gmi').test(availableResolutions[i])) {
        portraitResolution = availableResolutions[i].split(XRegExp('' + getTranslations('inTheCaseOfPortraitMode') + '', 'gmi'))[0].split(' ')[0] + ' ' + availableResolutions[i].split(XRegExp('' + getTranslations('inTheCaseOfPortraitMode') + '', 'gmi'))[0].split(' ')[1] + ' ' + availableResolutions[i].split(XRegExp('' + getTranslations('inTheCaseOfPortraitMode') + '', 'gmi'))[0].split(' ')[2]
        document.defaultPortraitWindowWidth = portraitResolution.split(' × ')[0]
        document.defaultPortraitWindowLength = portraitResolution.split(' × ')[1]
      }
    }
  } else {
    document.defaultWindowWidth = resolution.split(' × ')[0]
    document.defaultWindowLength = resolution.split(' × ')[1]
  }
  if (props.mode == undefined || props.mode.findBestMatch(window.wordsTranslationsDB.Words['site'][declarations.langCode]).rating > 0.8) {
    mode = 'site'
  } else if (props.mode.findBestMatch(window.wordsTranslationsDB.Words['app'][declarations.langCode]).rating > 0.8) {
    mode = 'app'
  }
  declarations.setMode(mode)
  if (props.logo) {
    logoURL = props.logo
  }
  if (props.title) {
    title = props.title.replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
    window.title = title
    if (typeof cordova !== 'undefined') {
      if (cordova.platformId == 'android') {
        RecentsControl.setDescription(window.title)
      }
    }
  }
  let componentProps = {
    mode,
    logoURL,
    title
  }
  $('head').append(componentTemplate({
    requiredTag: 'head',
    ...componentProps
  }))
  $('body').append(componentTemplate({
    requiredTag: 'body',
    ...componentProps
  }))
  if (props.mainColor) {
    setMainColor(props.mainColor)
  } else {
    setMainColor('#2196F3')
  }
  if (props.direction == undefined || props.direction.findBestMatch(window.wordsTranslationsDB.Words['vertical'][declarations.langCode]).rating > 0.8) {
    document.pageDirection = 'vertical'
  } else if (props.direction.findBestMatch(window.wordsTranslationsDB.Words['horizontal'][declarations.langCode]).rating > 0.8) {
    document.pageDirection = 'horizontal'
  }
  if (isAttributedByBeing(props, 'remoteScrolling')) {
    initRemoteScrolling()
  }
  document[nanoid(10)] = new PerfectScrollbar('body')
  init404Page()
}
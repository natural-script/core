/*!
 * Font Sizes
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-18
 */
import {
  getTranslations
} from 'core/translationsGet.js'
import {
  convertLengthCSS
} from './lengthUnits.js'
export const setFontSize = function (elementName, size) {
  var landscapeSize = null
  var portraitSize = null
  if (XRegExp(` ${getTranslations('and')} `, 'gmi').test(size)) {
    var availableSizes = size.split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < availableSizes.length; i++) {
      if (XRegExp('' + getTranslations('inTheCaseOfLandscapeMode') + '', 'gmi').test(availableSizes[i])) {
        landscapeSize = availableSizes[i].split(XRegExp('' + getTranslations('inTheCaseOfLandscapeMode') + '', 'gmi'))[0].split(' ')[0] + ' ' + availableSizes[i].split(XRegExp('' + getTranslations('inTheCaseOfLandscapeMode') + '', 'gmi'))[0].split(' ')[1]
      } else if (XRegExp('' + getTranslations('inTheCaseOfPortraitMode') + '', 'gmi').test(availableSizes[i])) {
        portraitSize = availableSizes[i].split(XRegExp('' + getTranslations('inTheCaseOfPortraitMode') + '', 'gmi'))[0].split(' ')[0] + ' ' + availableSizes[i].split(XRegExp('' + getTranslations('inTheCaseOfPortraitMode') + '', 'gmi'))[0].split(' ')[1]
      }
    }
  }
  var setFontSizeFn = function (ratio, vhvwRatio) {
    if (document.pageDirection == 'horizontal') {
      $(`#${elementName}`).css('font-size', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh')
    } else if (document.pageDirection == 'vertical') {
      $(`#${elementName}`).css('font-size', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw')
    }
  }
  var updateFontSize = function () {
    var ratio,
      vhvwRatio
    if (landscapeSize || portraitSize) {
      if (window.matchMedia('(orientation: portrait)').matches) {
        vhvwRatio = (document.defaultPortraitWindowWidth / 100) / (document.defaultPortraitWindowLength / 100)
        ratio = parseFloat(convertLengthCSS(portraitSize)) / document.defaultPortraitWindowWidth
      } else if (window.matchMedia('(orientation: landscape)').matches) {
        vhvwRatio = (document.defaultLandscapeWindowWidth / 100) / (document.defaultLandscapeWindowLength / 100)
        ratio = parseFloat(convertLengthCSS(landscapeSize)) / document.defaultLandscapeWindowWidth
      }
    } else {
      vhvwRatio = (document.defaultWindowWidth / 100) / (document.defaultWindowLength / 100)
      ratio = parseFloat(convertLengthCSS(size)) / document.defaultWindowWidth
    }
    setFontSizeFn(ratio, vhvwRatio)
  }
  if (landscapeSize || portraitSize) {
    window.addEventListener('resize', function () {
      updateFontSize()
    })
  }
  updateFontSize()
}

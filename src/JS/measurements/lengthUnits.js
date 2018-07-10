/*!
 * Length Units
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-15
 */
import {
  getTranslations
} from 'core/translationsGet.js'
import toPx from '@yavuzmester/css-length-to-px'
export const convertLengthCSS = function (propertyValue) {
  var measurement = propertyValue
    .replace(RegExp(' ' + getTranslations('centimeters') + '', 'gmi'), 'cm')
    .replace(RegExp(' ' + getTranslations('millimeters') + '', 'gmi'), 'mm')
    .replace(RegExp(' ' + getTranslations('inches') + '', 'gmi'), 'in')
    .replace(RegExp(' ' + getTranslations('pixels') + '', 'gmi'), 'px')
    .replace(RegExp(' ' + getTranslations('points') + '', 'gmi'), 'pt')
    .replace(RegExp(' ' + getTranslations('picas') + '', 'gmi'), 'pc')
    .replace(RegExp(' ' + getTranslations('centimeter') + '', 'gmi'), 'cm')
    .replace(RegExp(' ' + getTranslations('millimeter') + '', 'gmi'), 'mm')
    .replace(RegExp(' ' + getTranslations('inch') + '', 'gmi'), 'in')
    .replace(RegExp(' ' + getTranslations('pixel') + '', 'gmi'), 'px')
    .replace(RegExp(' ' + getTranslations('point') + '', 'gmi'), 'pt')
    .replace(RegExp(' ' + getTranslations('pica') + '', 'gmi'), 'pc')
  return toPx(measurement, document.body) + 'px'
}

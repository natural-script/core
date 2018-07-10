/*!
 * Math Expressions Builder
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-06
 */
import {elementValue} from 'core/elementValue'
import {getTranslations} from 'core/translationsGet'
import math from 'mathjs'
export const evaluateExpression = function (expression) {
  var valNo = expression.match(XRegExp('' + getTranslations('theValueOf') + '', 'gmi'))
  var finalExpression = expression
  var valueResource = ''
  var finalValue = ''
  if (valNo != null) {
    if (valNo.length > -1) {
      for (i = 0; i < valNo.length; i++) {
        if (document.langID == 0 || document.langID == 1) {
          valueResource = finalExpression.split(XRegExp('' + getTranslations('theValueOf') + '', 'gmi'))[1].split(' ')[1]
          finalValue = elementValue.get(valueResource)
          finalExpression = finalExpression.replace(XRegExp('' + getTranslations('theValueOf') + '' + ' ' + valueResource, 'gmi'), finalValue)
        } else if (document.langID == 2) {
          valueResource = finalExpression.split(XRegExp('' + getTranslations('theValueOf') + '', 'gmi'))[1].split(' ')[1]
          finalValue = elementValue.get(valueResource)
          finalExpression = finalExpression.replace(XRegExp('' + getTranslations('theValueOf') + '' + ' ' + valueResource, 'gmi'), finalValue)
        } else if (document.langID == 3) {
          valueResource = finalExpression.split(XRegExp('' + getTranslations('theValueOf') + '', 'gmi'))[1].split(' ')[1]
          finalValue = elementValue.get(valueResource)
          finalExpression = finalExpression.replace(XRegExp('' + getTranslations('theValueOf') + '' + ' ' + valueResource, 'gmi'), finalValue)
        } else if (document.langID == 4) {
          valueResource = finalExpression.split(XRegExp('' + getTranslations('theValueOf') + '', 'gmi'))[1].split(' ')[1]
          finalValue = elementValue.get(valueResource)
          finalExpression = finalExpression.replace(XRegExp('' + getTranslations('theValueOf') + '' + ' ' + valueResource, 'gmi'), finalValue)
        } else if (document.langID == 5) {
          valueResource = finalExpression.split(XRegExp('' + getTranslations('theValueOf') + '', 'gmi'))[1].split(' ')[1]
          finalValue = elementValue.get(valueResource)
          finalExpression = finalExpression.replace(XRegExp('' + getTranslations('theValueOf') + '' + ' ' + valueResource, 'gmi'), finalValue)
        }
      }
    }
  }
  finalExpression = finalExpression
    .replace(/(square root|جذر)/g, 'sqrt')
    .replace(/(multiplied by|ضرب)/g, '*')
    .replace(/(divided by|فى|على)/g, '/')
    .replace(/(plus|زائد)/g, '+')
    .replace(/(minus|ناقص)/g, '-')
    .replace(/جا/g, 'sin')
    .replace(/جتا/g, 'cos')
    .replace(/ظا/g, 'tan')
    .replace(XRegExp('' + getTranslations('centimeters') + '', 'gmi'), 'cm')
    .replace(XRegExp('' + getTranslations('millimeters') + '', 'gmi'), 'mm')
    .replace(XRegExp('' + getTranslations('inches') + '', 'gmi'), 'in')
    .replace(XRegExp('' + getTranslations('pixels') + '', 'gmi'), 'px')
    .replace(XRegExp('' + getTranslations('points') + '', 'gmi'), 'pt')
    .replace(XRegExp('' + getTranslations('picas') + '', 'gmi'), 'pc')
    .replace(XRegExp('' + getTranslations('centimeter') + '', 'gmi'), 'cm')
    .replace(XRegExp('' + getTranslations('millimeter') + '', 'gmi'), 'mm')
    .replace(XRegExp('' + getTranslations('inch') + '', 'gmi'), 'in')
    .replace(XRegExp('' + getTranslations('pixel') + '', 'gmi'), 'px')
    .replace(XRegExp('' + getTranslations('point') + '', 'gmi'), 'pt')
    .replace(XRegExp('' + getTranslations('pica') + '', 'gmi'), 'pc')
    .replace(XRegExp('سم', 'g'), 'cm')
    .replace(XRegExp('مم', 'g'), 'mm')
    .replace(XRegExp('÷', 'g'), '/')
    .replace(XRegExp('%', 'g'), '/100')
    .replace(XRegExp('(×|x)', 'g'), '*')
  var openingBracketsNo = (finalExpression.match(/\(/g) || []).length
  var closingBracketsNo = (finalExpression.match(/\)/g) || []).length
  for (var i = 0; i < (openingBracketsNo - closingBracketsNo); i++) {
    finalExpression += ')'
  }
  return math.eval(finalExpression)
}

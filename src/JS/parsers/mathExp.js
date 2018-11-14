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
import getTranslations from 'core/translationsGet'
import math from 'mathjs'
export default function parseMathExp(expression) {
  expression = expression
    .replace(/(square root|جذر)/g, 'sqrt')
    .replace(/(multiplied by|ضرب)/g, '*')
    .replace(/(divided by|فى|على)/g, '/')
    .replace(/(plus|زائد)/g, '+')
    .replace(/(minus|ناقص)/g, '-')
    .replace(/جا/g, 'sin')
    .replace(/جتا/g, 'cos')
    .replace(/ظا/g, 'tan')
    .replace(/سم/g, 'cm')
    .replace(/مم/g, 'mm')
    .replace(/÷/g, '/')
    .replace(/%/g, '/100')
    .replace(/(×|x)/g, '*')
    .replace(new RegExp(getTranslations('centimeters'), 'gmi'), 'cm')
    .replace(new RegExp(getTranslations('millimeters'), 'gmi'), 'mm')
    .replace(new RegExp(getTranslations('inches'), 'gmi'), 'in')
    .replace(new RegExp(getTranslations('pixels'), 'gmi'), 'px')
    .replace(new RegExp(getTranslations('points'), 'gmi'), 'pt')
    .replace(new RegExp(getTranslations('picas'), 'gmi'), 'pc')
    .replace(new RegExp(getTranslations('centimeter'), 'gmi'), 'cm')
    .replace(new RegExp(getTranslations('millimeter'), 'gmi'), 'mm')
    .replace(new RegExp(getTranslations('inch'), 'gmi'), 'in')
    .replace(new RegExp(getTranslations('pixel'), 'gmi'), 'px')
    .replace(new RegExp(getTranslations('point'), 'gmi'), 'pt')
    .replace(new RegExp(getTranslations('pica'), 'gmi'), 'pc')
  var openingBracketsNo = (expression.match(/\(/g) || []).length
  var closingBracketsNo = (expression.match(/\)/g) || []).length
  for (var i = 0; i < (openingBracketsNo - closingBracketsNo); i++) {
    expression += ')'
  }
  return math.eval(expression)
}
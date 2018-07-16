/*!
 * String Value Parser
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-22
 */
import {
  getSafe
} from 'core/getSafe.js'
import {
  elementValue
} from './elementValue.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import {
  varsUpdater
} from './varsUpdater.js'
import {
  evaluateExpression
} from 'translations/mathExp.js'
import * as declarations from 'core/declarations'
String.prototype.parseValue = function (dynamic, params) {
  var output = this.replace(XRegExp('NORMALTEXTPREFIX(.*?)NORMALTEXTSUFFIX', 'gmi'), function (match, p1, offset, string) {
    return atob(p1)
  }).replace(XRegExp(getTranslations('operator20'), 'mi'), function (match, p1, offset, string) {
    var variable = 'declarations.jsteVariablesStore'
    var branches = p1.split(' ==> ')
    for (var i = 0; i < branches.length; i++) {
      variable += '[`' + branches[i] + '`]'
    }
    return exec('getSafe(() => ' + variable + ')')
  }).replace(XRegExp(getTranslations('operator21'), 'mi'), function (match, p1, p2, offset, string) {
    var variable = 'declarations.jsteVariablesStore'
    var branches = p2.split(' ==> ')
    for (var i = 0; i < branches.length; i++) {
      variable += '[`' + branches[i] + '`]'
    }
    variable += '[' + parseInt(p1.parseValue()) + ']'
    return exec('getSafe(() => ' + variable + ')')
  }).replace(XRegExp(getTranslations('operator22'), 'mi'), function (match, p1, offset, string) {
    return elementValue.get(p1)
  }).replace(XRegExp(getTranslations('operator23'), 'gmi'), function (match, p1, offset, string) {
    var variable = 'declarations.jsteVariablesStore'
    var branches = p1.split(' ==> ')
    for (var i = 0; i < branches.length; i++) {
      variable += '[`' + branches[i] + '`]'
    }
    return exec('getSafe(() => ' + variable + ')')
  }).replace(XRegExp(getTranslations('operator24'), 'gmi'), function (match, p1, p2, offset, string) {
    var variable = 'declarations.jsteVariablesStore'
    var branches = p2.split(' ==> ')
    for (var i = 0; i < branches.length; i++) {
      variable += '[`' + branches[i] + '`]'
    }
    variable += '[' + parseInt(p1.parseValue()) + ']'
    return exec('getSafe(() => ' + variable + ')')
  }).replace(XRegExp(getTranslations('operator25'), 'gmi'), function (match, p1, offset, string) {
    return elementValue.get(p1)
  }).replace(XRegExp('<< ' + getTranslations('theResultOfTheMathematicalExpression') + ': ((?:(?:.*?<<.*?>>.*?)|.*?)+?) >>', 'gmi'), function (match, p1, offset, string) {
    return evaluateExpression(p1)
  }).replace(new RegExp('<< (' + getTranslations(['operator1', 'operator2', 'operator3', 'operator4', 'operator5', 'operator6', 'operator7']) + '): ((?:(?:.*?<<.*?>>.*?)|.*?)+?) >>', 'g'), function (match, p1, p2, offset, string) {
    var prefix,
      suffix
    if (XRegExp('^' + getTranslations('operator1') + '$', 'gmi').test(p1)) {
      prefix = '<b>'
      suffix = '</b>'
    } else if (XRegExp('^' + getTranslations('operator2') + '$', 'gmi').test(p1)) {
      prefix = '<i>'
      suffix = '</i>'
    } else if (XRegExp('^' + getTranslations('operator3') + '$', 'gmi').test(p1)) {
      prefix = '<u>'
      suffix = '</u>'
    } else if (XRegExp('^' + getTranslations('operator4') + '$', 'gmi').test(p1)) {
      prefix = '<b><i>'
      suffix = '</b></i>'
    } else if (XRegExp('^' + getTranslations('operator5') + '$', 'gmi').test(p1)) {
      prefix = '<b><u>'
      suffix = '</b></u>'
    } else if (XRegExp('^' + getTranslations('operator6') + '$', 'gmi').test(p1)) {
      prefix = '<u><i>'
      suffix = '</u></i>'
    } else if (XRegExp('^' + getTranslations('operator7') + '$', 'gmi').test(p1)) {
      prefix = '<b><i><u>'
      suffix = '</b></i></u>'
    }
    return prefix + p2 + suffix
  })
    .replace(new RegExp('<< ' + getTranslations('operator12') + ' ((?:(?:.*?<<.*?>>.*?)|.*?)+?) >>', 'g'), "<i class='fas fa-$1' aria-hidden='true'></i>")
    .replace(new RegExp('<< ' + getTranslations('operator13') + ' >>', 'g'), '<br />')
    .replace(new RegExp('<< ' + getTranslations('operator17') + ' (.*?): ((?:(?:.*?<<.*?>>.*?)|.*?)+?) >>', 'g'), function (match, p1, p2, offset, string) {
      return "<span id='" + p1 + "'>" + p2 + '</span>'
    })
    .replace(new RegExp('<< ' + getTranslations('operator18') + ' ((?:(?:.*?<<.*?>>.*?)|.*?)+?) >>', 'g'), function (match, p1, offset, string) {
      return params[p1]
    })
  if (dynamic == undefined || dynamic == true) {
    output = output.replace(new RegExp('<< (' + getTranslations(['operator14', 'operator15', 'operator16', 'operator8', 'operator9', 'operator10', 'operator11']) + ')(|.*?) >>', 'g'), function (match, p1, p2, offset, string) {
      if (XRegExp('^' + getTranslations('operator15') + '$', 'gmi').test(p1)) {
        p2 = 'currentUserName'
      } else if (XRegExp('^' + getTranslations('operator16') + '$', 'gmi').test(p1)) {
        p2 = 'currentUserEmail'
      } else if (XRegExp('^' + getTranslations('operator8') + '$', 'gmi').test(p1)) {
        p2 = 'currentWindowLength'
      } else if (XRegExp('^' + getTranslations('operator9') + '$', 'gmi').test(p1)) {
        p2 = 'currentWindowWidth'
      } else if (XRegExp('^' + getTranslations('operator10') + '$', 'gmi').test(p1)) {
        p2 = 'currentScreenLength'
      } else if (XRegExp('^' + getTranslations('operator11') + '$', 'gmi').test(p1)) {
        p2 = 'currentScreenWidth'
      }
      window.varsArray[p2] = undefined
      varsUpdater()
      return "<span var='" + p2 + "'></span>"
    })
  }
  return output
}

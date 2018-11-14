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
import elementValue from 'core/elementValue'
import varsUpdater from 'core/varsUpdater'
import parseMathExp from 'parsers/mathExp'
import dotProp from 'dot-prop'
import {
  operatorsDB
} from 'core/analyzer'
import analyze from 'core/analyzer'
export default function parseStringValue(text, isDynamic, scopes, parentFnParams) {
  text = text.replace(XRegExp('NORMALTEXTPREFIX(.*?)NORMALTEXTSUFFIX', 'gmi'), function (match, p1, offset, string) {
    return atob(p1)
  })
  text = text.replace(XRegExp(`<< (${operatorsDB.map(exp => exp.replace('(.+?)', '((?:(?:(?!<<|>>).)*?<<.*?>>(?:(?!<<|>>).)*?)*?|.*?)')).join('|')}) >>`, 'gmi'), function (match, p1, offset, string) {
    var data = analyze(p1)
    if (data.id == 'O20') {
      let variablePath = parseStringValue(data.variablePath, false, scopes, parentFnParams).split(' => ')
      if (parseInt(data.item)) {
        variablePath.push(parseInt(data.item) - 1)
      }
      variablePath = variablePath.join('.')
      const parentVariable = variablePath.split('.')[0]
      let variableValue
      for (const scope of scopes) {
        if (dotProp.has(NS.variables, `${scope}.${parentVariable}`)) {
          variableValue = dotProp.get(NS.variables[scope], variablePath)
        }
      }
      if (dotProp.has(NS.variables.global, parentVariable)) {
        variableValue = dotProp.get(NS.variables.global, variablePath)
      }
      if (variableValue.constructor == Object) {
        return JSON.stringify(variableValue)
      } else {
        return variableValue.toString()
      }
    }
    if (data.id == 'O21') {
      return parseMathExp(parseStringValue(data.expression, isDynamic, scopes, parentFnParams))
    }
    if (['O1', 'O2', 'O3', 'O4', 'O5', 'O6'].indexOf(data.id) == 0) {
      var prefix,
        suffix
      if (data.id == 'O1') {
        prefix = '<b>'
        suffix = '</b>'
      }
      if (data.id == 'O2') {
        prefix = '<i>'
        suffix = '</i>'
      }
      if (data.id == 'O3') {
        prefix = '<u>'
        suffix = '</u>'
      }
      if (data.id == 'O4') {
        prefix = '<b><i>'
        suffix = '</b></i>'
      }
      if (data.id == 'O5') {
        prefix = '<b><u>'
        suffix = '</b></u>'
      }
      if (data.id == 'O6') {
        prefix = '<u><i>'
        suffix = '</u></i>'
      }
      if (data.id == 'O20') {
        prefix = '<b><i><u>'
        suffix = '</b></i></u>'
      }
      return prefix + parseStringValue(data.text, isDynamic, scopes, parentFnParams) + suffix
    }
    if (data.id == 'O12') {
      return `<i class='fas fa-$1' aria-hidden='true'>${data.icon}</i>`
    }
    if (data.id == 'O13') {
      return '<br />'
    }
    if (data.id == 'O17') {
      return `<span id="${data.name}">${parseStringValue(data.text, isDynamic, scopes, parentFnParams)}</span>`
    }
    if (data.id == 'O18') {
      return parentFnParams[data.param]
    }
    if (data.id == 'O22') {
      return $(`#${data.dropdownMenuName}`).children()[parseInt(data.item) - 1].id
    }
    if (isDynamic == undefined || isDynamic == true) {
      if (/^O(8|9|10|11|14|15|16)$/.test(data.id)) {
        let dynamicVar
        if (data.id == 'O15') {
          dynamicVar = 'currentUserName'
        } else if (data.id == 'O16') {
          dynamicVar = 'currentUserEmail'
        } else if (data.id == 'O8') {
          dynamicVar = 'currentWindowLength'
        } else if (data.id == 'O9') {
          dynamicVar = 'currentWindowWidth'
        } else if (data.id == 'O10') {
          dynamicVar = 'currentScreenLength'
        } else if (data.id == 'O11') {
          dynamicVar = 'currentScreenWidth'
        } else if (data.id == 'O14') {
          dynamicVar = data.elementName
        }
        window.varsArray[dynamicVar] = undefined
        varsUpdater()
        return `<span var="${dynamicVar}"></span>`
      }
    }
    if (data.id == 'O8') {
      return screen.availHeight
    }
    if (data.id == 'O9') {
      return screen.availWidth
    }
    if (data.id == 'O10') {
      return screen.height
    }
    if (data.id == 'O11') {
      return screen.width
    }
    if (data.id == 'O14') {
      return elementValue.get(data.elementName)
    }
    if (data.id == 'O15') {
      return window.user
    }
    if (data.id == 'O16') {
      return window.email
    }
  })
  return text
}
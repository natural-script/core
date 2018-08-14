/*!
 * Script Initialization
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-05-01
 */
import 'core/jsteFirebaseInit'
import 'core/wordsTranslationsInit'
import 'core/listParser'
import 'core/stringValueParser'
// import 'core/report'
import 'core/smoothScrolling'
import 'core/punctuationAndArticleRemover'
import 'core/mediaCVAnalysis'
import Modernizr from 'modernizr'
import annyang from 'annyang'
import isReachable from 'is-reachable'
import runCommand from 'commands/index'
import indetationParser from 'parsers/indentation.pegjs'
import evalCode from 'parsers/code'
import {
  componentsFnInit
} from 'core/componentsFnInit.js'
import {
  showCurrentPage
} from 'core/pageChange.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import * as declarations from 'core/declarations'
window.scriptInit = async function () {
  window.getTranslations = getTranslations
  componentsFnInit()
  var meta = document.createElement('meta')
  meta.name = 'viewport'
  meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')
  document.getElementsByTagName('head')[0].appendChild(meta)
  var componentsRegex = `(${window.componentsDB.join('|')})`
  var rawCode = $(`jste`).text()
  if (navigator.onLine) {
    let managerIsReachable = await isReachable('https://jste-manager.herokuapp.com/autoCorrect')
    if (managerIsReachable) {
      var codeChunks = rawCode.match(/^(.|[\r\n]){0,10000}(,|\.)$/gmi)
      rawCode = ''
      for (var i = 0; i < codeChunks.length; i++) {
        rawCode += '\n' + await $.ajax({
          url: declarations.autoCorrectionAddress,
          method: 'POST',
          data: {
            lang: declarations.langCode == 'arz' ? 'ar' : declarations.langCode,
            input: codeChunks[i]
          }
        })
      }
    }
  }
  var codePrefix = 'jQuery(document).ready(\nfunction ($) {'
  var addTranslations = window.wordsTranslationsDB.Words['add'][declarations.langCode]
  for (const i of addTranslations) {
    codePrefix += `\nvar ${i} = declarations.jsteComponentsFnStore;`
  }
  var code = rawCode
  // code = XRegExp.replace(code, XRegExp(`((^[\\r\\n\\f\\v]+|[\\r\\n\\f\\v]+$)|(^[\\r\\n\\f\\v]*$(?:\\r\\n?|\\n)))`, 'gmi'), ``)
  code = XRegExp.replace(code, XRegExp(`^`, 'gmi'), `\t`)
  code = `start:\n${code}`
  // code = XRegExp.replace(code, XRegExp(`^((?!^(?:\\d|[A-Z])\\. )(.*?)[^,|\\.|:])$\\s(?!^(?:\\d|[A-Z])\\. )`, 'gmi'), '$1 ')
  // code = `${codePrefix}\n${code}\n});`
  code = XRegExp.replace(code, XRegExp('<< ' + getTranslations('operator19') + ': ((?:(?:.*?<<.*?>>.*?)|.*?)+?) >>', 'gmi'), function (match, p1, offset, string) {
    return `NORMALTEXTPREFIX${btoa(p1.replace(XRegExp('\n', 'gmi'), ' '))}NORMALTEXTSUFFIX`
  })
  if (declarations.langID == 3 || declarations.langID == 4) {
    declarations.isRTL = true
    $(`html`).attr(`dir`, `rtl`).attr(`declarations.langID`, `ar`)
  } else {
    declarations.isRTL = false
  }
  if (Modernizr.speechrecognition) {
    if (declarations.langID == 0) {
      annyang.setLanguage(`en-GB`)
    } else if (declarations.langID == 1) {
      annyang.setLanguage(`en-US`)
    } else if (declarations.langID == 2) {
      annyang.setLanguage(`fr-FR`)
    } else if (declarations.langID == 3) {
      annyang.setLanguage(`ar-AE`)
    } else if (declarations.langID == 4) {
      annyang.setLanguage(`ar-EG`)
    }
  }
  console.log(indetationParser.parse(code))
code = await evalCode(indetationParser.parse(code).start.pop())
  $(`jste`).remove()
  if (window.isLive) {
    $('<iframe>').attr('id', 'receiver').attr('src', 'https://jste-manager.herokuapp.com/db-manager.min.html').hide().appendTo('body')
  }
  console.groupCollapsed('Compiled Syntax')
  console.log(code)
  console.groupEnd()
  eval(code)
  setTimeout(() => showCurrentPage(), 1)
}
$(function () {
  $(function () {
    setTimeout(function () {
      if (declarations.langID != null) {
        window.scriptInit()
      }
    }, 100)
  })
}(jQuery))

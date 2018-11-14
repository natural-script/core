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
// import 'core/report'
import 'core/smoothScrolling'
import 'core/punctuationAndArticleRemover'
import 'core/mediaCVAnalysis'
import Modernizr from 'modernizr'
import annyang from 'annyang'
import isReachable from 'is-reachable'
import indetationParser from 'parsers/indentation.pegjs'
import evalCode from 'parsers/code'
import manageComponent from 'core/manageComponent'
import parseStringValue from 'parsers/stringValue'
import elementValue from 'core/elementValue'
import getTranslations from 'core/translationsGet'
import getVar from 'core/getVar'
import analyze from 'core/analyzer'
import {
  normalTxtOperatorTranslations
} from 'core/analyzer'
import {
  showCurrentPage
} from 'core/pageChange'
import {
  commandUtilsDB
} from 'core/analyzer'
import beautify from 'js-beautify'
import * as declarations from 'core/declarations'
const initEvent = require.context('event', true, /\.js$/)
const runCommand = require.context('commands', true, /\.js$/)
window.scriptInit = async function () {
  let naturalCode, structuredCode
  var meta = document.createElement('meta')
  meta.name = 'viewport'
  meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')
  document.getElementsByTagName('head')[0].appendChild(meta)
  var rawCode = $(`jste`).text()
  rawCode = rawCode.replace(/^(?:[\t ]*(?:\r?\n|\r))+/gmi, ``)
  rawCode = rawCode.replace(/^/gmi, `\t`)
  rawCode = rawCode.replace(/\s+$(?!\n)/gm, '')
  if (navigator.onLine) {
    let managerIsReachable = await isReachable('https://jste-manager.herokuapp.com/autoCorrect')
    if (managerIsReachable) {
      var codeChunks = rawCode.match(/^(.|[\r\n]){0,10000}((,|\.)$|$(?!\n))/gmi)
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
  var codePrefix = 'jQuery(document).ready(\nfunction ($) {let elementName, scopes, parentFnParams;'
  var code = rawCode
  naturalCode = code
  code = `start:\n${code}`
  code = code.replace(/^(?:[\t ]*(?:\r?\n|\r))+/gmi, ``)
  code = XRegExp.replace(code, XRegExp(`<< (${normalTxtOperatorTranslations.join('|')}) >>`, 'gmi'), function (match, p1, offset, string) {
    return `NORMALTEXTPREFIX${btoa(analyze(p1).text.replace(/\n/gmi, ' '))}NORMALTEXTSUFFIX`
  })
  if (declarations.isRTL) {
    $(`html`).attr(`dir`, `rtl`).attr(`declarations.langID`, `ar`)
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
  indetationParser.commandUtils = `(${commandUtilsDB.join('|')})`
  structuredCode = indetationParser.parse(code).start
  code = evalCode(structuredCode)
  code = `${codePrefix}\n${code}\n});`
  $(`jste`).remove()
  if (window.isLive) {
    $('<iframe>').attr('id', 'receiver').attr('src', 'https://jste-manager.herokuapp.com/db-manager.min.html').hide().appendTo('body')
  }
  console.groupCollapsed('Source Code')
  console.groupCollapsed('Natural Syntax')
  console.log(naturalCode)
  console.groupEnd()
  console.groupCollapsed('Structured Syntax')
  console.log(structuredCode)
  console.groupEnd()
  console.groupCollapsed('Compiled Syntax')
  console.log(beautify.js(code))
  console.groupEnd()
  console.groupEnd()
  window.manageComponent = manageComponent
  window.parseStringValue = parseStringValue
  window.elementValue = elementValue
  window.getTranslations = getTranslations
  window.getVar = getVar
  window.initEvent = initEvent
  window.runCommand = runCommand
  window.$ = jQuery
  window.jQuery = jQuery
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
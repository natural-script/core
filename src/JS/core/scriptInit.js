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
  code = XRegExp.replace(code, XRegExp(`((^ +| +$)|(^\\s*$(?:\\r\\n?|\\n)))`, 'gmi'), ``)
  code = XRegExp.replace(code, XRegExp(`^((?!^(?:\\d|[A-Z])\\. )(.*?)[^,|\\.|:])$\\s(?!^(?:\\d|[A-Z])\\. )`, 'gmi'), '$1 ')
  code = `${codePrefix}\n${code}\n});`
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
  var i = -1
  code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax1')}\``), 'gmin'), (match) => {
    match.commands = match.commands.replace(XRegExp(`^[A-Z]\\. (.*?)\\.$\\n(?=^[A-Z]\\.)`, 'gmis'), '$1 &&& ').replace(XRegExp(` &&& [A-Z]\\. (.*?)\\.$`, 'gmi'), ' &&& $1')
    return (declarations.langID == 0 || declarations.langID == 1)
      ? `add['${match.component}']({\nits name is ${match.name},\nits commands are ${match.commands}.`
      : (declarations.langID == 2)
        ? `ajouter['${match.component}']({\nsa nom est ${match.name},\nses commandes sont ${match.commands}.`
        : (declarations.langID == 3)
          ? `اضف['${match.component}']({\nالاسم الخاص بها ${match.name},\nالأوامر الخاصة بها ${match.commands}.`
          : (declarations.langID == 4)
            ? `ضيف['${match.component}']({\nالاسم بتاعها ${match.name},\nالأوامر بتاعتها ${match.commands}.` : ``
  })
  code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax2')}\``), 'gmin'), (match) => {
    return (declarations.langID == 0 || declarations.langID == 1)
      ? `add['${match.component}']({\nits name is ${match.name},`
      : (declarations.langID == 2)
        ? `ajouter['${match.component}']({\nson nom est ${match.name},`
        : (declarations.langID == 3)
          ? `اضف['${match.component}']({\nالاسم الخاص به ${match.name},`
          : (declarations.langID == 4)
            ? `ضيف['${match.component}']({\nالاسم بتاعه ${match.name},` : ``
  })
  code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax3')}\``), 'gmin'), (match) => {
    return ((declarations.langID == 0 || declarations.langID == 1) && match.attributes)
      ? `add.setup({\nits mode is ${match.mode},\nits attributes are ${match.attributes},`
      : ((declarations.langID == 2) && match.attributes)
        ? `ajouter.installation({\nson mode est ${match.mode},\nses attributs sont ${match.attributes},`
        : ((declarations.langID == 3) && match.attributes)
          ? `اضف.الإعدادات({\nالوضعية الخاصة به ${match.mode},\nالصفات الخاصة به ${match.attributes},`
          : ((declarations.langID == 4) && match.attributes)
            ? `ضيف.الإعدادات({\nالمود بتاعه ${match.mode},\nالصفات بتاعته ${match.attributes},`
            : (declarations.langID == 0 || declarations.langID == 1)
              ? `add.setup({\nits mode is ${match.mode},`
              : (declarations.langID == 2)
                ? `ajouter.installation({\nson mode est ${match.mode},`
                : (declarations.langID == 3)
                  ? `اضف.الإعدادات({\nالوضعية الخاصة به ${match.mode},`
                  : (declarations.langID == 4)
                    ? `ضيف.الإعدادات({\nالمود بتاعه ${match.mode},` : ``
  })
  code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax4')}\``), 'gmin'), (match) => {
    return ((declarations.langID == 0 || declarations.langID == 1) && match.attributes && match.withAttributes)
      ? `add['${match.component}']({\nits attributes are ${match.attributes} and with ${match.withAttributes},`
      : ((declarations.langID == 0 || declarations.langID == 1) && match.attributes && match.withoutAttributes)
        ? `add['${match.component}']({\nits attributes are ${match.attributes} and without ${match.withoutAttributes},`
        : ((declarations.langID == 0 || declarations.langID == 1) && match.withAttributes)
          ? `add['${match.component}']({\nits attributes are with ${match.withAttributes},`
          : ((declarations.langID == 0 || declarations.langID == 1) && match.withoutAttributes)
            ? `add['${match.component}']({\nits attributes are without ${match.withoutAttributes},`
            : ((declarations.langID == 0 || declarations.langID == 1) && match.attributes)
              ? `add['${match.component}']({\nits attributes are ${match.attributes},`
              : ((declarations.langID == 2) && match.attributes)
                ? `ajouter['${match.component}']({\nses attributs sont ${match.attributes},`
                : ((declarations.langID == 3) && match.attributes)
                  ? `اضف['${match.component}']({\nالصفات الخاصة به ${match.attributes},`
                  : ((declarations.langID == 4) && match.attributes)
                    ? `ضيف['${match.component}']({\nالصفات بتاعته ${match.attributes},`
                    : (declarations.langID == 0 || declarations.langID == 1)
                      ? `add['${match.component}']({`
                      : (declarations.langID == 2)
                        ? `ajouter['${match.component}']({`
                        : (declarations.langID == 3)
                          ? `اضف['${match.component}']({`
                          : (declarations.langID == 4)
                            ? `ضيف['${match.component}']({` : ``
  })
  code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax5')}\``), 'gmin'), (match) => {
    return (declarations.langID == 0 || declarations.langID == 1)
      ? `add['properties assignor']({\nits name is ${match.name},`
      : (declarations.langID == 2)
        ? `ajouter.cédant_des_propriétés({\nson nom est ${match.name},`
        : (declarations.langID == 3)
          ? `اضف.مضيف_الخواص({\nالاسم الخاص به ${match.name},`
          : (declarations.langID == 4)
            ? `ضيف.مضيف_الخواص({\nالاسم بتاعه ${match.name},` : ``
  })
  code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax6')}\``), 'gmin'), (match) => {
    return (declarations.langID == 0 || declarations.langID == 1)
      ? `add.clone({\nits cloned element is ${match.clonedElement},\nits attributes are with commands,`
      : (declarations.langID == 2)
        ? `ajouter.clone({\nson élément clone est ${match.clonedElement},\nses attributs sont avec des commandes,`
        : (declarations.langID == 3)
          ? `اضف.استنساخ({\nالعنصر المستنسخ الخاص به ${match.clonedElement},\nالصفات الخاصة به بالأوامر,`
          : (declarations.langID == 4)
            ? `ضيف.استنساخ({\nالعنصر المستنسخ بتاعه ${match.clonedElement},\nالصفات بتاعته بالأوامر,` : ``
  })
  code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax7')}\``), 'gmin'), (match) => {
    return (declarations.langID == 0 || declarations.langID == 1)
      ? `add.clone({\nits cloned element is ${match.clonedElement},`
      : (declarations.langID == 2)
        ? `ajouter.clone({\nson élément clone est ${match.clonedElement},`
        : (declarations.langID == 3)
          ? `اضف.استنساخ({\nالعنصر المستنسخ الخاص به ${match.clonedElement},`
          : (declarations.langID == 4)
            ? `ضيف.استنساخ({\nالعنصر المستنسخ بتاعه ${match.clonedElement},` : ``
  })
  code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax8')}\``), 'gmin'), (match) => {
    if (match.property.punctuationAndArticleRemover().findBestMatch(wordsTranslationsDB.Words['text'][declarations.langCode]).rating > 0.9) {
      match.propertyValue = match.propertyValue.parseValue()
    } else if (match.property.punctuationAndArticleRemover().findBestMatch(wordsTranslationsDB.Words['commands'][declarations.langCode]).rating < 0.7) {
      match.propertyValue = match.propertyValue.parseValue(false)
    }
    return `"${match.property.punctuationAndArticleRemover()}": \`${match.propertyValue.replace(XRegExp('^(.*?)`(.*)$', 'gmi'), '$1\\`$2')}\`${(match.propertyValueSuffix == '.' ? '\n});' : ',')}`
  })
  code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax9')}\``), 'gmin'), (match) => {
    i++
    return `commands${i}: \`${match.itemName}:${match.itemCommands}\`${(match.propertyValueSuffix == '.' ? '\n});' : ',')}`
  })
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

/*!
 * Table
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import {
  inheritStyle
} from 'core/styleInheritor.js'
import {
  appendComponent
} from 'core/componentAppend.js'
import {
  elementSettingsAnalyze
} from 'core/elementSettingsAnalyze.js'
import {
  propSet
} from 'core/propSet.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import 'material-design-lite/src/data-table/_data-table.scss'
import List from 'list.js'
import componentTemplate from './table.pug'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  let componentProp = {
    name
  }
  appendComponent(elementSettingsAnalyze(settings, 'container'), componentTemplate(componentProp))
  if (elementSettingsAnalyze(settings, 'data')) {
    var inputDataPlainA = elementSettingsAnalyze(settings, 'data').split(' &amp;&amp;&amp;&amp; ')
    var inputDataRaw = '['
    for (var a = 0; a < inputDataPlainA.length; a++) {
      var inputDataPlainB = inputDataPlainA[a].split(' &amp;&amp;&amp; ')
      inputDataRaw += '{'
      for (var i = 0; i < inputDataPlainB.length; i++) {
        if (i == inputDataPlainB.length - 1) {
          var cellData = inputDataPlainB[i].split(XRegExp('' + getTranslations('inTheCell') + '', 'gmi'))[0]
          var cellName = inputDataPlainB[i].split(XRegExp('' + getTranslations('inTheCell') + '', 'gmi'))[1]
          inputDataRaw += '"' + cellName + '": "' + cellData + '"'
        } else {
          var cellData = inputDataPlainB[i].split(XRegExp('' + getTranslations('inTheCell') + '', 'gmi'))[0]
          var cellName = inputDataPlainB[i].split(XRegExp('' + getTranslations('inTheCell') + '', 'gmi'))[1]
          inputDataRaw += '"' + cellName + '": "' + cellData + '", '
        }
      }
      if (a == inputDataPlainA.length - 1) {
        inputDataRaw += '}'
      } else {
        inputDataRaw += '}, '
      }
    }
    inputDataRaw += ']'
  }
  console.log(inputDataRaw)
  var inputData = JSON.parse(inputDataRaw)
  var keys = []
  for (var i = 0; i < inputData.length; i++) {
    Object.keys(inputData[i]).forEach(function (key) {
      if (keys.indexOf(key) == -1) {
        keys.push(key)
      }
    })
  }
  var template = '<tr>'
  for (var i = 0; i < keys.length; i++) {
    $('#' + name + ' > thead > tr').append('<th>' + keys[i] + '</th>')
    template += '<td class="' + keys[i] + '"></td>'
  }
  template += '</tr>'
  var settings = {
    valueNames: keys,
    item: template
  }
  var userList = new List(name, settings, inputData)
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['grid'][document.langCode]).rating > 0.8) {
        $(`#${name}`).addClass('row')
      }
    }
  }
  if ($('#' + elementSettingsAnalyze(settings, 'container') + '').hasClass('row') == true) {
    $(`#${name}`).addClass('col')
  }
  if (elementSettingsAnalyze(settings, 'position')) {
    $(`#${name}`).css('position', elementSettingsAnalyze(settings, 'position'))
  } else {
    $(`#${name}`).css('position', 'relative')
  }
  propSet(name, settings)
}

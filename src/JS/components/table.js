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
import inheritStyle from 'core/styleInheritor'
import appendComponent from 'core/componentAppend'
import propSet from 'core/propSet'
import getTranslations from 'core/translationsGet'
import 'material-design-lite/src/data-table/_data-table.scss'
import List from 'list.js'
import componentTemplate from './table.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  var name = props.name
  let componentProps = {
    name
  }
  appendComponent(props.container, componentTemplate(componentProps))
  if (props.data) {
    var inputDataPlainA = props.data.split(' &&&& ')
    var inputDataRaw = '['
    for (var a = 0; a < inputDataPlainA.length; a++) {
      var inputDataPlainB = inputDataPlainA[a].split(' &&& ')
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
  var props = {
    valueNames: keys,
    item: template
  }
  var userList = new List(name, props, inputData)
  propSet(name, props)
}
/*!
 * Dialog Box
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
  elementSettingsAnalyze
} from 'core/elementSettingsAnalyze.js'
import {
  propSet
} from 'core/propSet.js'
import 'imports-loader?userAgent=>true!izimodal'
import 'izimodal/css/iziModal.css'
import componentTemplate from './dialogBox.pug'
import * as declarations from 'core/declarations'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var isRTL = declarations.isRTL
  var title
  if (elementSettingsAnalyze(settings, 'title')) {
    title = elementSettingsAnalyze(settings, 'title')
  }
  let componentProp = {
    name,
    isRTL,
    title
  }
  $('body').append(componentTemplate(componentProp))
  $(`#${name}`).iziModal()
  if (elementSettingsAnalyze(settings, 'emitter')) {
    $('#' + elementSettingsAnalyze(settings, 'emitter') + '').attr('onclick', elementSettingsAnalyze(settings, 'name') + '.open()')
  }
  propSet(name, settings)
  $(`#${name}`).css('position', 'fixed')
}

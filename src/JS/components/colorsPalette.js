/*!
 * Colors Palette
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import {setFontColour} from 'core/colors'
import {inheritStyle} from 'core/styleInheritor'
import {appendComponent} from 'core/componentAppend'
import {elementSettingsAnalyze} from 'core/elementSettingsAnalyze'
import {propSet} from 'core/propSet'
import componentTemplate from './colorsPalette.pug'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  let componentProp = {name}
  appendComponent(elementSettingsAnalyze(settings, 'container'), componentTemplate(componentProp))
  propSet(name, settings)
}

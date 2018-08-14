/*!
 * Page
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-28
 */
import {inheritStyle} from 'core/styleInheritor'
import {elementSettingsAnalyze} from 'core/elementSettingsAnalyze'
import componentTemplate from './page.pug'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  let componentProp = {name}
  $('contents').append(componentTemplate(componentProp))
}

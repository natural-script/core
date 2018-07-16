/*!
 * Style
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-23
 */
import {inheritStyle} from 'core/styleInheritor'
import {elementSettingsAnalyze} from 'core/elementSettingsAnalyze'
import * as declarations from 'core/declarations'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  if (elementSettingsAnalyze(settings, 'name')) {
    declarations.jsteStylesStore[elementSettingsAnalyze(settings, 'name')] = settings
  }
}

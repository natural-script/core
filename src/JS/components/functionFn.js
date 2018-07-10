/*!
 * Function
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-19
 */
import {inheritStyle} from 'core/styleInheritor'
import {execute} from 'core/commandsExec'
import {elementSettingsAnalyze} from 'core/elementSettingsAnalyze'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  if (elementSettingsAnalyze(settings, 'commands')) {
    execute(null, elementSettingsAnalyze(settings, 'commands'), true, elementSettingsAnalyze(settings, 'name'))
  }
}

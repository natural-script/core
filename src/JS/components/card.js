/*!
 * Card
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import {inheritStyle} from 'core/styleInheritor'
import {appendComponent} from 'core/componentAppend'
import {elementSettingsAnalyze} from 'core/elementSettingsAnalyze'
import {propSet} from 'core/propSet'
import componentTemplate from './card.pug'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var title, imageURL
  if (elementSettingsAnalyze(settings, 'title')) {
    title = elementSettingsAnalyze(settings, 'title')
  }
  if (elementSettingsAnalyze(settings, 'imageSource')) {
    imageURL = elementSettingsAnalyze(settings, 'imageSource')
  }
  let componentProp = {name, title, imageURL}
  appendComponent(elementSettingsAnalyze(settings, 'container'), componentTemplate(componentProp))
  propSet(name, settings)
}

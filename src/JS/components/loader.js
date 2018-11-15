/*!
 * Loader
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
import isAttributedByBeing from 'core/isAttributedByBeing'
import componentTemplate from './loader.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  let isBar, isSpinner
  var name = props.name
  if (props.type.findBestMatch(window.wordsTranslationsDB.Words['bar'][declarations.langCode]).rating > 0.8) {
    isBar = true
  } else if (props.type == undefined || props.type.findBestMatch(window.wordsTranslationsDB.Words['spinner'][declarations.langCode]).rating > 0.8) {
    isSpinner = true
  }
  let componentProps = {
    name,
    isBar,
    isSpinner
  }
  appendComponent(props.container, componentTemplate(componentProps))
  if (isAttributedByBeing(props, 'loading')) {
    $('body').find(`#${name}`).attr('active', '')
  }
  propSet(name, props)
}
/*!
 * Textbox
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
import isAttributedByBeing from 'core/isAttributedByBeing'
import 'datedropper3'
import 'datedropper3/datedropper.css'
import 'timedropper'
import 'timedropper/timedropper.css'
import componentTemplate from './writingZone.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  let name = props.name
  let isMultilined, title, type, auto_validate, allowed_pattern, max, min, isDisabled, isCounted, prefix, suffix
  if (isAttributedByBeing(props, 'multiline')) {
    isMultilined = true
  }
  if (props.title) {
    title = props.title
  }
  if (props.inputType) {
    if (props.inputType.findBestMatch(window.wordsTranslationsDB.Words['password'][declarations.langCode]).rating > 0.8) {
      type = 'password'
    } else if (props.inputType.findBestMatch(window.wordsTranslationsDB.Words['number'][declarations.langCode]).rating > 0.8) {
      type = 'number'
    }
  }
  if (props.requirement) {
    auto_validate = true
    allowed_pattern = props.requirement
  }
  if (props.max) {
    max = props.max
  }
  if (props.min) {
    min = props.min
  }
  if (isAttributedByBeing(props, 'disabled')) {
    isDisabled = true
  }
  if (isAttributedByBeing(props, 'withCounter')) {
    isCounted = true
  }
  if (props.prefix) {
    prefix = props.prefix.split(' &&& ')
  }
  if (props.suffix) {
    suffix = props.suffix.split(' &&& ')
  }
  let componentProps = {
    name,
    isMultilined,
    title,
    type,
    auto_validate,
    allowed_pattern,
    max,
    min,
    isDisabled,
    isCounted
  }
  appendComponent(props.container, componentTemplate(componentProps))
  if (props.inputType) {
    if (props.inputType.findBestMatch(window.wordsTranslationsDB.Words['date'][declarations.langCode]).rating > 0.8) {
      if (declarations.langID == 0 || declarations.langID == 1) {
        $(`#${name}`).attr('data-lang', 'en')
      } else if (declarations.langID == 2) {
        $(`#${name}`).attr('data-lang', 'fr')
      } else if (declarations.langID == 3 || declarations.langID == 4) {
        $(`#${name}`).attr('data-lang', 'ar')
      }
    }
    $(`#${name}`).attr('data-modal', 'true')
    $(`#${name}`).attr('data-large-mode', 'true')
    $(`#${name}`).attr('data-translate-mode', 'true')
    $(`#${name}`).dateDropper()
  } else if (props.inputType) {
    if (props.inputType.findBestMatch(window.wordsTranslationsDB.Words['time'][declarations.langCode]).rating > 0.8) {
      $(`#${name}`).timeDropper()
    }
  }
  propSet(name, props)
}
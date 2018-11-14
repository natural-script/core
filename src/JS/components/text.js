/*!
 * Text
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
import componentTemplate from './text.pug'
import shareThis from 'share-this'
import * as facebookSharer from 'share-this/dist/sharers/facebook'
import * as twitterSharer from 'share-this/dist/sharers/twitter'
import * as linkedInSharer from 'share-this/dist/sharers/linked-in'
import * as redditSharer from 'share-this/dist/sharers/reddit'
import * as emailSharer from 'share-this/dist/sharers/email'
import 'share-this/style/scss/share-this.scss'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  var name = props.name
  let componentProps = {
    name
  }
  appendComponent(props.container, componentTemplate(componentProps))
  if (isAttributedByBeing(props, 'shareable')) {
    shareThis({
      selector: `#${name}`,
      sharers: [twitterSharer, facebookSharer, linkedInSharer, redditSharer, emailSharer]
    }).init()
  }
  if (props.direction) {
    if (props.direction.findBestMatch(window.wordsTranslationsDB.Words['ltr'][declarations.langCode]).rating > 0.8) {
      $(`#${name}`).css('direction', 'ltr')
    } else if (props.direction.findBestMatch(window.wordsTranslationsDB.Words['rtl'][declarations.langCode]).rating > 0.8) {
      $(`#${name}`).css('direction', 'rtl')
    }
  }
  propSet(name, props)
}
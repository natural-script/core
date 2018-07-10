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
import {setBG} from 'core/colors'
import {inheritStyle} from 'core/styleInheritor'
import {appendComponent} from 'core/componentAppend'
import {getSafe} from 'core/getSafe'
import {elementSettingsAnalyze} from 'core/elementSettingsAnalyze'
import {propSet} from 'core/propSet'
import {getTranslations} from 'core/translationsGet'
import componentTemplate from './text.pug'
import shareThis from 'share-this'
import * as facebookSharer from 'share-this/dist/sharers/facebook'
import * as twitterSharer from 'share-this/dist/sharers/twitter'
import * as linkedInSharer from 'share-this/dist/sharers/linked-in'
import * as redditSharer from 'share-this/dist/sharers/reddit'
import * as emailSharer from 'share-this/dist/sharers/email'
import 'share-this/style/scss/share-this.scss'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var out = `<p id="${name}">${elementSettingsAnalyze(settings, 'text')}</p>`
  appendComponent(elementSettingsAnalyze(settings, 'container'), out)
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['shareable'][document.langCode]).rating > 0.8) {
        window.shareThis({
          selector: '#' + name + '',
          sharers: [twitterSharer, facebookSharer, linkedInSharer, redditSharer, emailSharer]
        }).init()
      }
    }
  }
  if (elementSettingsAnalyze(settings, 'direction')) {
    if (getSafe(() => elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['ltr'][document.langCode]).rating > 0.8)) {
      $(`#${name}`).css('direction', 'ltr')
    } else if (getSafe(() => elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['rtl'][document.langCode]).rating > 0.8)) {
      $(`#${name}`).css('direction', 'rtl')
    }
  }
  if (elementSettingsAnalyze(settings, 'background')) {
    setBG(name, elementSettingsAnalyze(settings, 'background'))
  }
  if ($('#' + elementSettingsAnalyze(settings, 'container') + '').hasClass('row') == true) {
    $(`#${name}`).addClass('col')
  }
  if (elementSettingsAnalyze(settings, 'position')) {
    $(`#${name}`).css('position', elementSettingsAnalyze(settings, 'position'))
  } else {
    $(`#${name}`).css('position', 'relative')
  }
  propSet(name, settings)
}

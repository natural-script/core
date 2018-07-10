/*!
 * Slideshow
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import {inheritStyle} from 'core/styleInheritor'
import {appendComponent} from 'core/componentAppend'
import {elementSettingsAnalyze} from 'core/elementSettingsAnalyze'
import {propSet} from 'core/propSet'
import {getTranslations} from 'core/translationsGet'
import componentTemplate from './slideshow.pug'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'
export default function (settings) {
  settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
  var name = elementSettingsAnalyze(settings, 'name')
  var autoplay = false
  var out = `<div id="${name}" class="owl-carousel owl-theme"></div>`
  appendComponent(elementSettingsAnalyze(settings, 'container'), out)
  if (elementSettingsAnalyze(settings, 'attributes')) {
    var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < propertiesArray.length; i++) {
      if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['autoplay'][document.langCode]).rating > 0.8) {
        autoplay = true
      }
    }
  }
  jQuery(document).ready(function ($) {
    $(`#${name}`).owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      items: 1,
      margin: 30,
      loop: true,
      stagePadding: 30,
      smartSpeed: 450,
      autoHeight: true,
      rtl: document.isRTL,
      autoplay: autoplay,
      autoplayHoverPause: true,
      URLhashListener: true,
      autoplayTimeout: 5000
    })
  })
  if (elementSettingsAnalyze(settings, 'position')) {
    $(`#${name}`).css('position', elementSettingsAnalyze(settings, 'position'))
  } else {
    $(`#${name}`).css('position', 'relative')
  }
  propSet(name, settings)
}

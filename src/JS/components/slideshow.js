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
import inheritStyle from 'core/styleInheritor'
import appendComponent from 'core/componentAppend'
import propSet from 'core/propSet'
import getTranslations from 'core/translationsGet'
import isAttributedByBeing from 'core/isAttributedByBeing'
import componentTemplate from './slideshow.pug'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  var name = props.name
  var autoplay = false
  var out = `<div id="${name}" class="owl-carousel owl-theme"></div>`
  appendComponent(props.container, out)
  if (props.attributes) {
    var attributesArray = props.attributes.split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
    for (var i = 0; i < attributesArray.length; i++) {
      if (attributesArray[i].findBestMatch(window.wordsTranslationsDB.Words['autoplay'][declarations.langCode]).rating > 0.8) {
        autoplay = true
      }
    }
  }
  jQuery(document).ready(function ($) {
    $('body').find(`#${name}`).owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      items: 1,
      margin: 30,
      loop: true,
      stagePadding: 30,
      smartSpeed: 450,
      autoHeight: true,
      rtl: declarations.isRTL,
      autoplay: autoplay,
      autoplayHoverPause: true,
      URLhashListener: true,
      autoplayTimeout: 5000
    })
  })
  if (props.position) {
    $('body').find(`#${name}`).css('position', props.position)
  } else {
    $('body').find(`#${name}`).css('position', 'relative')
  }
  propSet(name, props)
}

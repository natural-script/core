import {
  changePage
} from 'core/pageChange.js'
import setURLParameter from 'core/URLParamsSet.js'
import parseStringValue from 'parsers/stringValue'
import * as declarations from 'core/declarations'
export default function ({targetType, target, scopes, parentFnParams}) {
  target = decodeURI(parseStringValue(target, false, scopes, parentFnParams))
  event.preventDefault()
  if (targetType.findBestMatch(wordsTranslationsDB.Words['url'][declarations.langCode]).rating > 0.5) {
    window.open(target)
  } else if (targetType.findBestMatch(wordsTranslationsDB.Words['element'][declarations.langCode]).rating > 0.5) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('body').find(`#${target}`).offset().top
    }, 1000)
  } else if (targetType.findBestMatch(wordsTranslationsDB.Words['email'][declarations.langCode]).rating > 0.5) {
    window.open('mailto:' + target)
  } else if (targetType.findBestMatch(wordsTranslationsDB.Words['page'][declarations.langCode]).rating > 0.5) {
    changePage(target)
    setURLParameter('page', (($(`page#${target}`).length > 0) ? target : 'page_not_found'))
  } else if (targetType.findBestMatch(wordsTranslationsDB.Words['dialogBox'][declarations.langCode]).rating > 0.5) {
    $('body').find(`#${target}`).iziModal('open')
  } else if (targetType.findBestMatch(wordsTranslationsDB.Words['sidebar'][declarations.langCode]).rating > 0.5) {
    $('body').find(`#${target}`).sideNav('show')
  }
}

import {
  changePage
} from 'core/pageChange.js'
import {
  setURLParameter
} from 'core/URLParamsSet.js'
import * as declarations from 'core/declarations'
export default function (elementName, script, functionArgumentsParam) {
  var hyperlinkType = script.targetType.punctuationAndArticleRemover()
  var hyperlink = decodeURI(script.target.parseValue(false, functionArgumentsParam))
  event.preventDefault()
  if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['url'][declarations.langCode]).rating > 0.5) {
    window.open(hyperlink)
  } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['element'][declarations.langCode]).rating > 0.5) {
    window.location.hash = '#' + hyperlink
  } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['email'][declarations.langCode]).rating > 0.5) {
    window.open('mailto:' + hyperlink)
  } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['page'][declarations.langCode]).rating > 0.5) {
    changePage(hyperlink)
    setURLParameter('page', (($(`page#${hyperlink}`).length > 0) ? hyperlink : 'page_not_found'))
  } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['dialogBox'][declarations.langCode]).rating > 0.5) {
    $('#' + hyperlink + '').iziModal('open')
  } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['sidebar'][declarations.langCode]).rating > 0.5) {
    $('#' + hyperlink + '').sideNav('show')
  }
}

import history from "core/history";
import parseStringValue from 'parsers/stringValue'
import theComponentCalled from 'core/theComponentCalled'
import * as declarations from 'core/declarations'
export default function ({targetType, target, scopes, parentFnParams}) {
  target = decodeURI(parseStringValue(target, false, scopes, parentFnParams))
  if (targetType.findBestMatch(wordsTranslationsDB.Words['url'][declarations.langCode]).rating > 0.5) {
    window.open(target)
  } else if (targetType.findBestMatch(wordsTranslationsDB.Words['element'][declarations.langCode]).rating > 0.5) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('body').find(`#${target}`).offset().top
    }, 1000)
  } else if (targetType.findBestMatch(wordsTranslationsDB.Words['email'][declarations.langCode]).rating > 0.5) {
    window.open('mailto:' + target);
  } else if (targetType.findBestMatch(wordsTranslationsDB.Words['page'][declarations.langCode]).rating > 0.5) {
    history.push(`/${target}`);
  } else if (targetType.findBestMatch(wordsTranslationsDB.Words['dialogBox'][declarations.langCode]).rating > 0.5) {
    theComponentCalled(target).open();
  } else if (targetType.findBestMatch(wordsTranslationsDB.Words['sidebar'][declarations.langCode]).rating > 0.5) {
    $('body').find(`#${target}`).sideNav('show');
  }
}

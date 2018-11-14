/*!
 * Getting The Words Translations
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-03-15
 */
import * as declarations from 'core/declarations'
export default function getTranslations(phrase, isCommon) {
  if (isCommon) {
    var translation
    for (const commonTranslation in wordsTranslationsDB.Words) {
      if (phrase.findBestMatch(wordsTranslationsDB.Words[commonTranslation][declarations.langCode]).rating > 0.9) {
        translation = commonTranslation
        break
      }
    }
    return translation ? translation : false
  } else {
    let output = ''
    if (typeof phrase === 'object') {
      for (const i in phrase) {
        if (i != 0) {
          output += '|'
        }
        output += wordsTranslationsDB.Words[phrase[i]][declarations.langCode].join('|')
      }
    } else {
      output = wordsTranslationsDB.Words[phrase][declarations.langCode].join('|')
    }
    return `(?:${output})`.replace(/\\/gmi, '\\\\')
  }
}
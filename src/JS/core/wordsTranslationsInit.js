/*!
 * Initializing The Words Translations
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-15
 */
import translations from 'translations/words.json'
import * as declarations from 'core/declarations'
export let componentsDB = []
export let attributesDB = []
$(function () {
  window.wordsTranslationsDB = translations
  for (const wordID in wordsTranslationsDB.Words) {
    if (wordsTranslationsDB.Words[wordID].type == 'component') {
      wordsTranslationsDB.Words[wordID][declarations.langCode].forEach(element => {
        componentsDB.push(element)
      })
    } else if (wordsTranslationsDB.Words[wordID].type == 'attribute') {
      wordsTranslationsDB.Words[wordID][declarations.langCode].forEach(element => {
        attributesDB.push(element)
      })
    }
  }
}(jQuery))
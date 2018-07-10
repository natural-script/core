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
import translations from 'translations/dictionary.json'
$(function () {
  window.wordsTranslationsDB = translations
  window.componentsDB = []
  window.attributesDB = []
  window.conditionsDB = []
  for (const wordID in wordsTranslationsDB.Words) {
    if (wordsTranslationsDB.Words[wordID].type == 'component') {
      wordsTranslationsDB.Words[wordID][document.langCode].forEach(element => {
        componentsDB.push(element)
      })
    } else if (wordsTranslationsDB.Words[wordID].type == 'attribute') {
      wordsTranslationsDB.Words[wordID][document.langCode].forEach(element => {
        attributesDB.push(element)
      })
    }
  }
  for (const conditionID in wordsTranslationsDB.Conditions) {
    wordsTranslationsDB.Conditions[conditionID][document.langCode].forEach(element => {
      conditionsDB.push(element.replace(/\?<.*?>/gi, ''))
    })
  }
}(jQuery))

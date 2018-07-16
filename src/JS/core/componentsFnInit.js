import componentsFn from 'components/index'
import * as declarations from 'core/declarations'
export const componentsFnInit = function () {
  window.componentsFn = componentsFn
  for (const wordID in wordsTranslationsDB.Words) {
    if (wordsTranslationsDB.Words[wordID].type == 'component') {
      wordsTranslationsDB.Words[wordID][declarations.langCode].forEach(element => {
        declarations.jsteComponentsFnStore[element] = function (settings) {
          eval(`componentsFn.${wordID}(settings);`)
        }
      })
    }
  }
}

import componentsFn from 'components/index'
export const componentsFnInit = function () {
  window.componentsFn = componentsFn
  for (const wordID in wordsTranslationsDB.Words) {
    if (wordsTranslationsDB.Words[wordID].type == 'component') {
      wordsTranslationsDB.Words[wordID][document.langCode].forEach(element => {
        window.jsteComponentsFnStore[element] = function (settings) {
          eval(`componentsFn.${wordID}(settings);`)
        }
      })
    }
  }
}

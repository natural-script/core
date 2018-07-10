export const elementSettingsAnalyze = function (settings, property) {
  var settingsKeys = Object.keys(settings)
  for (var i = 0; i < settingsKeys.length; i++) {
    if (settingsKeys[i].findBestMatch(wordsTranslationsDB.Words[property][document.langCode]).rating > 0.9) {
      return settings[settingsKeys[i]]
    }
  }
  return undefined
}

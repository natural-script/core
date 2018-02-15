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
$.ajax({
    url: '../../src/JS/Translations/words.json',
    dataType: 'json',
    async: false,
    success: function (json) {
        window.wordsTranslationsDB = json;
    }
});
$(function () {
    window.componentsDB = [];
    window.attributesDB = [];
    var wordsTranslationsDBKeys = Object.keys(wordsTranslationsDB.Words);
    for (var i = 0; i < wordsTranslationsDBKeys.length; i++) {
        if (wordsTranslationsDB.Words[wordsTranslationsDBKeys[i]].type == 'component') {
            wordsTranslationsDB.Words[wordsTranslationsDBKeys[i]][document.langCode].forEach(element => {
                componentsDB.push(element);
            });
        } else if (wordsTranslationsDB.Words[wordsTranslationsDBKeys[i]].type == 'attribute') {
            wordsTranslationsDB.Words[wordsTranslationsDBKeys[i]][document.langCode].forEach(element => {
                attributesDB.push(element);
            });
        }
    }
}(jQuery));
/*!
 * Getting The Words Translations
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-03-11
 */
window.getTranslations = function (word) {
    return '(?:' + wordsTranslationsDB.Words[word][document.langCode].join('|') + ')';
}
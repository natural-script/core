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
window.getTranslations = function (phrase) {
    var phraseType = (XRegExp('^operator\\d+', 'mi').test(phrase)) ? 'Operators' : 'Words';
    var output = '';
    if (typeof phrase == 'object') {
        for (i in phrase) {
            if (i != 0) {
                output += '|';
            }
            output += wordsTranslationsDB[phraseType][phrase[i]][document.langCode].join('|');
        }
    } else {
        output = wordsTranslationsDB[phraseType][phrase][document.langCode].join('|');
    }
    return '(?:' + output + ')';
}
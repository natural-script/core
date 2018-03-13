/*!
 * List Parser
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-03-11
 */
window.setVariable = function (name, value) {
    if (XRegExp('^(' + wordsTranslationsDB.Words['theFollowingList'][document.langCode].join('|') + '):', 'gmi').test(value)) {
        if (!window.jsteVariablesStore[name]) {
            window.jsteVariablesStore[name] = [];
        }
        var inputtedList = value.match(/^\d(?:.*|[\r\n])+/mi)[0].parseList();
        for (var i = 0; i < inputtedList.length; i++) {
            window.jsteVariablesStore[name][i] = inputtedList[i];
        }
    } else {
        window.jsteVariablesStore[name] = value.parseValue();
    }
}
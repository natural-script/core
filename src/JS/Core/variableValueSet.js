/*!
 * Assigning Values To Variables
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-03-15
 */
function assignValue(keyPath, value, isArray) {
    var obj = window.jsteVariablesStore;
    lastKeyIndex = keyPath.length - 1;
    for (var i = 0; i < lastKeyIndex; ++i) {
        key = keyPath[i];
        if (!(key in obj)) {
            if (isArray && i == (lastKeyIndex - 1)) {
                obj[key] = []
            } else {
                obj[key] = {}
            }
        }
        obj = obj[key];
    }
    obj[keyPath[lastKeyIndex]] = value;
}
window.setVariable = function (name, value) {
    var keyPath = name.split(' ==> ');
    if (XRegExp('^(' + wordsTranslationsDB.Words['theFollowingList'][document.langCode].join('|') + '):', 'gmi').test(value)) {
        var inputtedList = value.match(/^\d(?:.*|[\r\n])+/mi)[0].parseList();
        for (var i = 0; i < inputtedList.length; i++) {
            assignValue(keyPath.push(i), value, true);
        }
    } else {
        assignValue(keyPath, value, false);
    }
}
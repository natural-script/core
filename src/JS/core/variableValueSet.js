/*!
 * Assigning Values To Variables
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-22
 */
function assignValue (keyPath, value, isArray) {
  var obj = window.jsteVariablesStore
  lastKeyIndex = keyPath.length - 1
  for (var i = 0; i < lastKeyIndex; ++i) {
    key = keyPath[i]
    if (!(key in obj)) {
      if (isArray && i == (lastKeyIndex - 1)) {
        obj[key] = []
      } else {
        obj[key] = {}
      }
    }
    obj = obj[key]
  }
  if (isArray) {
    var target = obj[keyPath[lastKeyIndex]]
    obj[keyPath[lastKeyIndex]] = target ? target.splice.apply(target, [0, value.length].concat(value)) : value
  } else {
    obj[keyPath[lastKeyIndex]] = value
  }
}
export const setVariable = function (name, value) {
  var keyPath = name.split(' ==> ')
  if (XRegExp('^(' + wordsTranslationsDB.Words['theFollowingList'][document.langCode].join('|') + '):', 'gmi').test(value)) {
    var inputtedList = value.match(/^\d(?:.*|[\r\n])+/mi)[0].parseList()
    assignValue(keyPath, inputtedList, true)
  } else {
    assignValue(keyPath, value, false)
  }
}

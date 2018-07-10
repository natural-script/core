/*!
 * Punctuation & Article Remover
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-07
 */
String.prototype.punctuationAndArticleRemover = function () {
  return this.split(XRegExp('^(?:ال|لل)', 'gmi')).join('').split(XRegExp('\\s+ال')).join(' ')
}

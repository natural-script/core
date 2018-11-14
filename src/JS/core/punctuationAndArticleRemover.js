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
import arli from 'arli'
String.prototype.punctuationAndArticleRemover = function () {
  return arli.removeDash(this.split(/^(?:ال|لل)/gmi).join('').split(/\s+ال/).join(' ').replace(/[أإآ]/g, 'ا'))
}
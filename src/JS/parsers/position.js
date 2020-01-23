/*!
 * Length Units
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-15
 */
import * as declarations from "core/declarations";
export default function(propVal) {
	if (propVal.findBestMatch(window.wordsTranslationsDB.Words["relativeToItsNormalPosition"][
			declarations.langCode
		]).rating > 0.8) {
		return "relative";
	} else if (propVal.findBestMatch(window.wordsTranslationsDB.Words["relativeToItsContainer"][
			declarations.langCode
		]).rating > 0.8) {
		return "absolute";
	} else if (propVal.findBestMatch(window.wordsTranslationsDB.Words["relativeToTheViewport"][
			declarations.langCode
		]).rating > 0.8) {
		return "fixed";
	}
}
import * as declarations from "core/declarations";
export default function(propVal) {
	if (propVal.findBestMatch(window.wordsTranslationsDB.Words["bold"][declarations.langCode]).rating > 0.8) {
		return '700';
	} else if (propVal.findBestMatch(window.wordsTranslationsDB.Words["heavy"][declarations.langCode]).rating > 0.8) {
		return '900';
	} else if (propVal.findBestMatch(window.wordsTranslationsDB.Words["normal"][declarations.langCode]).rating > 0.8) {
		return '400';
	} else if (propVal.findBestMatch(window.wordsTranslationsDB.Words["light"][declarations.langCode]).rating > 0.8) {
		return '300';
	} else if (propVal.findBestMatch(window.wordsTranslationsDB.Words["thin"][declarations.langCode]).rating > 0.8) {
		return '100';
	} else if (/^\d+$/m.test(propVal)) {
		return propVal
	}
}
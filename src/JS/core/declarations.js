/*!
 * Declarations
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-05-01
 */
console.log(`\n %c NaturalScript %c https://project-jste.github.io \n`, "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
window.NS = {
	functions: {},
	styles: {},
	user: {}
};
export let langID,
	langCode,
	childModeStatus,
	nudityDetectionStatus,
	mode,
	deviceForm,
	title;
export let isRTL = false;
let code = $("jste").text();
let detectedLang = detectLanguage(code);
if (detectedLang == "English") {
	if (code.includes("colour") || code.includes("centre")) {
		langID = 0;
	} else {
		langID = 1;
	}
	langCode = "en";
} else if (detectedLang == "French") {
	langID = 2;
	langCode = "fr";
} else if (detectedLang == "Arabic") {
	isRTL = true;
	if (code.includes("بتاعه") || code.includes("بتاعها") || code.includes("بتاعته") || code.includes("بتاعتها")) {
		langID = 4;
		langCode = "arz";
	} else {
		langID = 3;
		langCode = "ar";
	}
} else if (detectedLang == "Japanese") {
	langID = 5;
}
export function setMode(currentMode) {
	mode = currentMode;
}
export function setTitle(currentTitle) {
	title = currentTitle;
}
if (navigator.userAgent.match(/iPad|Touch/i)) {
	deviceForm = "tablet";
} else if (navigator.userAgent.match(/mobile/i)) {
	deviceForm = "phone";
} else if (navigator.userAgent.match(/Android/i)) {
	deviceForm = "tablet";
} else {
	deviceForm = "desktop";
}
export const corsPolicy = "https://jste-cors-proxy.herokuapp.com/";
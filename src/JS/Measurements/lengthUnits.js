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
window.convertLengthCSS = function (propertyValue) {
	var measurement = propertyValue
		.replace(RegExp(' ' + window.centimetersTranslations[document.langID], "g"), "cm")
		.replace(RegExp(' ' + window.millimetersTranslations[document.langID], "g"), "mm")
		.replace(RegExp(' ' + window.inchesTranslations[document.langID], "g"), "in")
		.replace(RegExp(' ' + window.pixelsTranslations[document.langID], "g"), "px")
		.replace(RegExp(' ' + window.pointsTranslations[document.langID], "g"), "pt")
		.replace(RegExp(' ' + window.picasTranslations[document.langID], "g"), "pc")
		.replace(RegExp(' ' + window.centimeterTranslations[document.langID], "g"), "cm")
		.replace(RegExp(' ' + window.millimeterTranslations[document.langID], "g"), "mm")
		.replace(RegExp(' ' + window.inchTranslations[document.langID], "g"), "in")
		.replace(RegExp(' ' + window.pixelTranslations[document.langID], "g"), "px")
		.replace(RegExp(' ' + window.pointTranslations[document.langID], "g"), "pt")
		.replace(RegExp(' ' + window.picaTranslations[document.langID], "g"), "pc")
		.replace(RegExp(' سم', "g"), "cm")
		.replace(RegExp(' مم', "g"), "mm");
	return Length.toPx(document.body, measurement) + 'px';
};
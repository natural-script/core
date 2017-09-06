/*!
 * Length Units
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
window.convertLengthCSS = function (propertyValue) {
	return propertyValue.replace(RegExp(' ' + window.centimetersTranslations[document.lang], "g"), "cm").replace(RegExp(' ' + window.millimetersTranslations[document.lang], "g"), "mm").replace(RegExp(' ' + window.inchesTranslations[document.lang], "g"), "in").replace(RegExp(' ' + window.pixelsTranslations[document.lang], "g"), "px").replace(RegExp(' ' + window.pointsTranslations[document.lang], "g"), "pt").replace(RegExp(' ' + window.picasTranslations[document.lang], "g"), "pc").replace(RegExp(' ' + window.centimeterTranslations[document.lang], "g"), "cm").replace(RegExp(' ' + window.millimeterTranslations[document.lang], "g"), "mm").replace(RegExp(' ' + window.inchTranslations[document.lang], "g"), "in").replace(RegExp(' ' + window.pixelTranslations[document.lang], "g"), "px").replace(RegExp(' ' + window.pointTranslations[document.lang], "g"), "pt").replace(RegExp(' ' + window.picaTranslations[document.lang], "g"), "pc").replace(RegExp(' سم', "g"), "cm").replace(RegExp(' مم', "g"), "mm");
};
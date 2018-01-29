/*!
 * Font Sizes
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-18
 */
window.setFontSize = function (elementName, size) {
	var landscapeSize = null;
	var portraitSize = null;
	if (size.includes(window.andTranslations[document.lang])) {
		var availableSizes = size.split(' ' + window.andTranslations[document.lang] + ' ');
		for (var i = 0; i < availableSizes.length; i++) {
			if (availableSizes[i].includes(window.inTheCaseOfLandscapeModeTranslations[document.lang])) {
				landscapeSize = availableSizes[i].split(' ' + window.inTheCaseOfLandscapeModeTranslations[document.lang])[0].split(' ')[0] + ' ' + availableSizes[i].split(' ' + window.inTheCaseOfLandscapeModeTranslations[document.lang])[0].split(' ')[1];
			} else if (availableSizes[i].includes(window.inTheCaseOfPortraitModeTranslations[document.lang])) {
				portraitSize = availableSizes[i].split(' ' + window.inTheCaseOfPortraitModeTranslations[document.lang])[0].split(' ')[0] + ' ' + availableSizes[i].split(' ' + window.inTheCaseOfPortraitModeTranslations[document.lang])[0].split(' ')[1];
			}
		}
	}
	var setFontSizeFn = function (ratio, vhvwRatio) {
		if (document.pageDirection == 'horizontal') {
			$('#' + elementName + '').css('font-size', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh');
		} else if (document.pageDirection == 'vertical') {
			$('#' + elementName + '').css('font-size', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw');
		}
	};
	var updateFontSize = function () {
		var ratio,
			vhvwRatio;
		if (landscapeSize || portraitSize) {
			if (window.matchMedia("(orientation: portrait)").matches) {
				vhvwRatio = (document.defaultPortraitWindowWidth / 100) / (document.defaultPortraitWindowLength / 100);
				ratio = parseFloat(window.convertLengthCSS(portraitSize)) / document.defaultPortraitWindowWidth;
			} else if (window.matchMedia("(orientation: landscape)").matches) {
				vhvwRatio = (document.defaultLandscapeWindowWidth / 100) / (document.defaultLandscapeWindowLength / 100);
				ratio = parseFloat(window.convertLengthCSS(landscapeSize)) / document.defaultLandscapeWindowWidth;
			}
		} else {
			vhvwRatio = (document.defaultWindowWidth / 100) / (document.defaultWindowLength / 100);
			ratio = parseFloat(window.convertLengthCSS(size)) / document.defaultWindowWidth;
		}
		setFontSizeFn(ratio, vhvwRatio);
	};
	if (landscapeSize || portraitSize) {
		window.addEventListener("resize", function () {
			updateFontSize();
		});
	}
	updateFontSize();
};
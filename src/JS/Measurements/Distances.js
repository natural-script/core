/*!
 * Distances
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-17
 */
window.setDistance = function (name, direction, value) {
	var landscapeValue = null;
	var portraitValue = null;
	if (value.includes(window.andTranslations[document.lang])) {
		var availableValues = value.split(' ' + window.andTranslations[document.lang] + ' ');
		for (var i = 0; i < availableValues.length; i++) {
			if (availableValues[i].includes(window.inTheCaseOfLandscapeModeTranslations[document.lang])) {
				landscapeValue = availableValues[i].split(' ' + window.inTheCaseOfLandscapeModeTranslations[document.lang])[0].split(' ')[0] + ' ' + availableValues[i].split(' ' + window.inTheCaseOfLandscapeModeTranslations[document.lang])[0].split(' ')[1];
			} else if (availableValues[i].includes(window.inTheCaseOfPortraitModeTranslations[document.lang])) {
				portraitValue = availableValues[i].split(' ' + window.inTheCaseOfPortraitModeTranslations[document.lang])[0].split(' ')[0] + ' ' + availableValues[i].split(' ' + window.inTheCaseOfPortraitModeTranslations[document.lang])[0].split(' ')[1];
			}
		}
	}
	var setDistanceFn = function (ratio, vhvwRatio) {
		if (direction == 'bottom') {
			if (document.pageDirection == 'horizontal') {
				$('#' + name + '').css('bottom', (parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) + 'vh');
			} else if (document.pageDirection == 'vertical') {
				$('#' + name + '').css('bottom', ((parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) * vhvwRatio) + 'vw');
			}
		} else if (direction == 'top') {
			if (document.pageDirection == 'horizontal') {
				$('#' + name + '').css('top', (parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) + 'vh');
			} else if (document.pageDirection == 'vertical') {
				$('#' + name + '').css('top', ((parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) * vhvwRatio) + 'vw');
			}
		} else if (direction == 'left') {
			if (document.pageDirection == 'horizontal') {
				$('#' + name + '').css('left', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh');
			} else if (document.pageDirection == 'vertical') {
				$('#' + name + '').css('left', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw');
			}
		} else if (direction == 'right') {
			if (document.pageDirection == 'horizontal') {
				$('#' + name + '').css('right', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh');
			} else if (document.pageDirection == 'vertical') {
				$('#' + name + '').css('right', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw');
			}
		}
	};
	var updateDistance = function () {
		var ratio,
			vhvwRatio;
		if (['top', 'bottom'].indexOf(direction) + 1) {
			if (landscapeValue || portraitValue) {
				if (window.matchMedia("(orientation: portrait)").matches) {
					vhvwRatio = (document.defaultPortraitWindowLength / 100) / (document.defaultPortraitWindowWidth / 100);
					ratio = parseFloat(window.convertLengthCSS(portraitValue)) / document.defaultPortraitWindowLength;
				} else if (window.matchMedia("(orientation: landscape)").matches) {
					vhvwRatio = (document.defaultLandscapeWindowLength / 100) / (document.defaultLandscapeWindowWidth / 100);
					ratio = parseFloat(window.convertLengthCSS(landscapeValue)) / document.defaultLandscapeWindowLength;
				}
			} else {
				vhvwRatio = (document.defaultWindowLength / 100) / (document.defaultWindowWidth / 100);
				ratio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowLength;
			}
		} else if (['left', 'right'].indexOf(direction) + 1) {
			if (landscapeValue || portraitValue) {
				if (window.matchMedia("(orientation: portrait)").matches) {
					vhvwRatio = (document.defaultPortraitWindowWidth / 100) / (document.defaultPortraitWindowLength / 100);
					ratio = parseFloat(window.convertLengthCSS(portraitValue)) / document.defaultPortraitWindowWidth;
				} else if (window.matchMedia("(orientation: landscape)").matches) {
					vhvwRatio = (document.defaultLandscapeWindowWidth / 100) / (document.defaultLandscapeWindowLength / 100);
					ratio = parseFloat(window.convertLengthCSS(landscapeValue)) / document.defaultLandscapeWindowWidth;
				}
			} else {
				vhvwRatio = (document.defaultWindowWidth / 100) / (document.defaultWindowLength / 100);
				ratio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowWidth;
			}
		}
		setDistanceFn(ratio, vhvwRatio);
	};
	if (landscapeValue || portraitValue) {
		window.addEventListener("resize", function () {
			updateDistance();
		});
	}
	updateDistance();
};
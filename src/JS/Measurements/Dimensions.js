/*!
 * Dimensions
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-18
 */
window.setDimension = function (name, dimension, value) {
	document[name + dimension + '_updater'] = null;
	var type = $('#' + name + '').prop('type');
	var isTitled = $('#' + name + '').prop('isTitled');
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
	var setDimensionFn = function (ratio, vhvwRatio) {
		if (dimension == 'length') {
			var vh2vwRatio = (document.defaultWindowLength / 100) / (document.defaultWindowWidth / 100);
			if (type == 'img' || type == 'vid') {
				if (isTitled) {
					if (document.pageDirection == 'horizontal') {
						$('#' + name + '_container').css('height', ((parseFloat(ratio * screen.availHeight) + 40) * (100 / screen.availHeight)) + 'vh');
					} else if (document.pageDirection == 'vertical') {
						$('#' + name + '_container').css('height', (((parseFloat(ratio * screen.availHeight) + 40) * (100 / screen.availHeight)) * vhvwRatio) + 'vw');
					}
				} else {
					if (document.pageDirection == 'horizontal') {
						$('#' + name + '_container').css('height', (parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) + 'vh');
					} else if (document.pageDirection == 'vertical') {
						$('#' + name + '_container').css('height', ((parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) * vhvwRatio) + 'vw');
					}
				}
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '').css('height', (parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) + 'vh');
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '').css('height', ((parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) * vhvwRatio) + 'vw');
				}
			} else {
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '').css('height', (parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) + 'vh');
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '').css('height', ((parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) * vhvwRatio) + 'vw');
				}
			}
		} else if (dimension == 'width') {
			if (type == 'img' || type == 'vid') {
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '_container').css('width', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh');
					$('#' + name + '_html5_api').css('width', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh');
					$('#' + name + '').css('width', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh');
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '_container').css('width', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw');
					$('#' + name + '_html5_api').css('width', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw');
					$('#' + name + '').css('width', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw');
				}
			} else if ($('#' + name + '').hasClass('iziModal')) {
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '').iziModal('setWidth', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh');
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '').iziModal('setWidth', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw');
				}
			} else {
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '').css('width', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh');
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '').css('width', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw');
				}
			}
		}
	};
	var updateDimension = function () {
		var ratio,
			vhvwRatio;
		if (dimension == 'length') {
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
		} else if (dimension == 'width') {
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
		setDimensionFn(ratio, vhvwRatio);
	};
	if (landscapeValue || portraitValue) {
		document[name + dimension + '_updater'] = window.addEventListener("resize", function () {
			updateDimension();
		});
	}
	updateDimension();
};
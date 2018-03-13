/*!
 * Dimensions
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-02
 */
window.setDimension = function (name, dimension, value) {
	document[name + dimension + '_updater'] = null;
	var type = $('#' + name + '').prop('type');
	var isTitled = $('#' + name + '').prop('isTitled');
	var landscapeValue = null;
	var portraitValue = null;
	if (XRegExp(' ' + getTranslations("and") + ' ', 'gmi').test(value)) {
		var availableValues = value.split(XRegExp(' ' + getTranslations("and") + '', 'gmi'));
		for (var i = 0; i < availableValues.length; i++) {
			if (XRegExp('' + getTranslations("inTheCaseOfLandscapeMode") + '', 'gmi').test(availableValues[i])) {
				landscapeValue = availableValues[i].split(XRegExp(' ' + getTranslations("inTheCaseOfLandscapeMode") + '', 'gmi'))[0].split(' ')[0] + ' ' + availableValues[i].split(XRegExp('' + getTranslations("inTheCaseOfLandscapeMode") + '', 'gmi'))[0].split(' ')[1];
			} else if (XRegExp('' + getTranslations("inTheCaseOfPortraitMode") + '', 'gmi').test(availableValues[i])) {
				portraitValue = availableValues[i].split(XRegExp(' ' + getTranslations("inTheCaseOfPortraitMode") + '', 'gmi'))[0].split(' ')[0] + ' ' + availableValues[i].split(XRegExp('' + getTranslations("inTheCaseOfPortraitMode") + '', 'gmi'))[0].split(' ')[1];
			}
		}
	}
	var setDimensionFn = function (ratio, vhvwRatio) {
		if (dimension == 'length') {
			var vh2vwRatio = (document.defaultWindowLength / 100) / (document.defaultWindowWidth / 100);
			if (type == 'img' || type == 'vid') {
				if (isTitled) {
					if (document.pageDirection == 'horizontal') {
						$('#' + name + '_container').each(function () {
						this.style.setProperty('height', ((parseFloat(ratio * screen.availHeight) + 40) * (100 / screen.availHeight)) + 'vh', 'important');
						});
					} else if (document.pageDirection == 'vertical') {
						$('#' + name + '_container').each(function () {
						this.style.setProperty('height', (((parseFloat(ratio * screen.availHeight) + 40) * (100 / screen.availHeight)) * vhvwRatio) + 'vw', 'important');
						});
					}
				} else {
					if (document.pageDirection == 'horizontal') {
						$('#' + name + '_container').each(function () {
						this.style.setProperty('height', (parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) + 'vh', 'important');
						});
					} else if (document.pageDirection == 'vertical') {
						$('#' + name + '_container').each(function () {
						this.style.setProperty('height', ((parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) * vhvwRatio) + 'vw', 'important');
						});
					}
				}
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '').each(function () {
						this.style.setProperty('height', (parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) + 'vh', 'important');
					});
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '').each(function () {
						this.style.setProperty('height', ((parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) * vhvwRatio) + 'vw', 'important');
					});
				}
			} else {
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '').each(function () {
						this.style.setProperty('height', (parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) + 'vh', 'important');
					});
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '').each(function () {
						this.style.setProperty('height', ((parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) * vhvwRatio) + 'vw', 'important');
					});
				}
			}
		} else if (dimension == 'width') {
			if (type == 'img' || type == 'vid') {
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '_container').each(function () {
						this.style.setProperty('width', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh', 'important');
					});
					$('#' + name + '_html5_api').each(function () {
						this.style.setProperty('width', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh', 'important');
					});
					$('#' + name + '').each(function () {
						this.style.setProperty('width', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh', 'important');
					});
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '_container').each(function () {
						this.style.setProperty('width', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw', 'important');
					});
					$('#' + name + '_html5_api').each(function () {
						this.style.setProperty('width', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw', 'important');
					});
					$('#' + name + '').each(function () {
						this.style.setProperty('width', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw', 'important');
					});
				}
			} else if ($('#' + name + '').hasClass('iziModal')) {
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '').iziModal('setWidth', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh');
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '').iziModal('setWidth', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw');
				}
			} else {
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '').each(function () {
						this.style.setProperty('width', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh', 'important');
					});
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '').each(function () {
						this.style.setProperty('width', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw', 'important');
					});
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
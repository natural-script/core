/*!
 * Distances
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-02
 */
window.setDistance = function (name, direction, value) {
	var landscapeValue = null;
	var portraitValue = null;
	if (XRegExp(' ' + getTranslations("and") + ' ', 'gmi').test(value)) {
		var availableValues = value.split(XRegExp(' ' + getTranslations("and") + '', 'gmi'));
		for (var i = 0; i < availableValues.length; i++) {
			if (XRegExp('' + getTranslations("inTheCaseOfLandscapeMode") + '', 'gmi').test(availableValues[i])) {
				landscapeValue = availableValues[i].split(XRegExp(' ' + getTranslations("inTheCaseOfLandscapeMode") + '', 'gmi'))[0].split(' ')[0] + ' ' + availableValues[i].split(XRegExp(' ' + getTranslations("inTheCaseOfLandscapeMode") + '', 'gmi'))[0].split(' ')[1];
			} else if (XRegExp('' + getTranslations("inTheCaseOfPortraitMode") + '', 'gmi').test(availableValues[i])) {
				portraitValue = availableValues[i].split(XRegExp(' ' + getTranslations("inTheCaseOfPortraitMode") + '', 'gmi'))[0].split(' ')[0] + ' ' + availableValues[i].split(XRegExp(' ' + getTranslations("inTheCaseOfPortraitMode") + '', 'gmi'))[0].split(' ')[1];
			}
		}
	}
	var setDistanceFn = function (ratio, vhvwRatio) {
		if (direction == 'bottom') {
			if (document.pageDirection == 'horizontal') {
				$('#' + name + '').each(function () {
					this.style.setProperty('bottom', (parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) + 'vh', 'important');
				});
			} else if (document.pageDirection == 'vertical') {
				$('#' + name + '').each(function () {
					this.style.setProperty('bottom', ((parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) * vhvwRatio) + 'vw', 'important');
				});
			}
		} else if (direction == 'top') {
			if (document.pageDirection == 'horizontal') {
				$('#' + name + '').each(function () {
					this.style.setProperty('top', (parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) + 'vh', 'important');
				});
			} else if (document.pageDirection == 'vertical') {
				$('#' + name + '').each(function () {
					this.style.setProperty('top', ((parseFloat(ratio * screen.availHeight) * (100 / screen.availHeight)) * vhvwRatio) + 'vw', 'important');
				});
			}
		} else if (direction == 'left') {
			if (document.pageDirection == 'horizontal') {
				$('#' + name + '').each(function () {
					this.style.setProperty('left', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh', 'important');
				});
			} else if (document.pageDirection == 'vertical') {
				$('#' + name + '').each(function () {
					this.style.setProperty('left', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw', 'important');
				});
			}
		} else if (direction == 'right') {
			if (document.pageDirection == 'horizontal') {
				$('#' + name + '').each(function () {
					this.style.setProperty('right', ((parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) * vhvwRatio) + 'vh', 'important');
				});
			} else if (document.pageDirection == 'vertical') {
				$('#' + name + '').each(function () {
				this.style.setProperty('right', (parseFloat(ratio * screen.availWidth) * (100 / screen.availWidth)) + 'vw', 'important');
				});
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
/*!
 * Dimensions
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-10
 */
window.setDimension = function (name, dimension, value, type, isTitled) {
	if (dimension == 'length') {
		var vh2vwRatio = (document.defaultWindowLength / 100) / (document.defaultWindowWidth / 100);
		if (type == 'img' || type == 'vid') {
			var lengthRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowLength;
			if (isTitled) {
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '_container').css('height', ((parseFloat(lengthRatio * window.innerHeight) + 40) * (100 / window.innerHeight)) + 'vh');
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '_container').css('height', (((parseFloat(lengthRatio * window.innerHeight) + 40) * (100 / window.innerHeight)) * vh2vwRatio) + 'vw');
				}
			} else {
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '_container').css('height', (parseFloat(lengthRatio * window.innerHeight) * (100 / window.innerHeight)) + 'vh');
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '_container').css('height', ((parseFloat(lengthRatio * window.innerHeight) * (100 / window.innerHeight)) * vh2vwRatio) + 'vw');
				}
			}
			if (document.pageDirection == 'horizontal') {
				$('#' + name + '').css('height', (parseFloat(lengthRatio * window.innerHeight) * (100 / window.innerHeight)) + 'vh');
			} else if (document.pageDirection == 'vertical') {
				$('#' + name + '').css('height', ((parseFloat(lengthRatio * window.innerHeight) * (100 / window.innerHeight)) * vh2vwRatio) + 'vw');
			}
		} else {
			var lengthRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowLength;
			if (document.pageDirection == 'horizontal') {
				$('#' + name + '').css('height', (parseFloat(lengthRatio * window.innerHeight) * (100 / window.innerHeight)) + 'vh');
			} else if (document.pageDirection == 'vertical') {
				$('#' + name + '').css('height', ((parseFloat(lengthRatio * window.innerHeight) * (100 / window.innerHeight)) * vh2vwRatio) + 'vw');
			}
		}
	} else if (dimension == 'width') {
		var vw2vhRatio = (document.defaultWindowWidth / 100) / (document.defaultWindowLength / 100);
		if (type == 'img' || type == 'vid') {
			var widthRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowWidth;
				if (document.pageDirection == 'horizontal') {
					$('#' + name + '_container').css('width', ((parseFloat(widthRatio * window.innerWidth) * (100 / window.innerWidth)) * vw2vhRatio) + 'vh');
					$('#' + name + '_html5_api').css('width', ((parseFloat(widthRatio * window.innerWidth) * (100 / window.innerWidth)) * vw2vhRatio) + 'vh');
					$('#' + name + '').css('width', ((parseFloat(widthRatio * window.innerWidth) * (100 / window.innerWidth)) * vw2vhRatio) + 'vh');
				} else if (document.pageDirection == 'vertical') {
					$('#' + name + '_container').css('width', (parseFloat(widthRatio * window.innerWidth) * (100 / window.innerWidth)) + 'vw');
					$('#' + name + '_html5_api').css('width', (parseFloat(widthRatio * window.innerWidth) * (100 / window.innerWidth)) + 'vw');
					$('#' + name + '').css('width', (parseFloat(widthRatio * window.innerWidth) * (100 / window.innerWidth)) + 'vw');
				}
		} else {
			var widthRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowWidth;
			if (document.pageDirection == 'horizontal') {
				$('#' + name + '').css('width', ((parseFloat(widthRatio * window.innerWidth) * (100 / window.innerWidth)) * vw2vhRatio) + 'vh');
			} else if (document.pageDirection == 'vertical') {
				$('#' + name + '').css('width', (parseFloat(widthRatio * window.innerWidth) * (100 / window.innerWidth)) + 'vw');
			}
		}
	}
};
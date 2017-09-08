/*!
 * Dimensions
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-8
 */
window.setDimension = function (name, dimension, value, type, isTitled) {
	if (dimension == 'length') {
		if (type == 'img' || type == 'vid') {
			var lengthRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowLength;
			if (isTitled) {
				$('#' + name + '_container').css('height', ((parseFloat(lengthRatio * window.innerHeight) + 40) * (100 / window.innerHeight)) + 'vh');
			} else {
				$('#' + name + '_container').css('height', (parseFloat(lengthRatio * window.innerHeight) * (100 / window.innerHeight)) + 'vh');
			}
			$('#' + name + '').css('height', (parseFloat(lengthRatio * window.innerHeight) * (100 / window.innerHeight)) + 'vh');
		} else {
			var lengthRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowLength;
			$('#' + name + '').css('height', (parseFloat(lengthRatio * window.innerHeight) * (100 / window.innerHeight)) + 'vh');
		}
	} else if (dimension == 'width') {
		if (type == 'img' || type == 'vid') {
			var widthRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowWidth;
			$('#' + name + '').width(parseFloat(widthRatio * window.innerWidth));
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				$('#' + name + '_container').css('width', (parseFloat(widthRatio * window.innerWidth) * (100 / window.innerWidth)) + 'vw');
				$('#' + name + '_html5_api').css('width', (parseFloat(widthRatio * window.innerWidth) * (100 / window.innerWidth)) + 'vw');
				$('#' + name + '').css('width', (parseFloat(widthRatio * window.innerWidth) * (100 / window.innerWidth)) + 'vw');
			}
		} else {
			var widthRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowWidth;
			$('#' + name + '').css('width', (parseFloat(widthRatio * window.innerWidth) * (100 / window.innerWidth)) + 'vw');
		}
	}
};
/*!
 * Distances
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-8
 */
window.setDistance = function (name, direction, value) {
	var vw2vhRatio = (document.defaultWindowWidth / 100) / (document.defaultWindowLength / 100);
	var vh2vwRatio = (document.defaultWindowLength / 100) / (document.defaultWindowWidth / 100);
	if (direction == 'bottom') {
		var bottomRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowLength;
		if (document.pageDirection == 'horizontal') {
			$('#' + name + '').css('bottom', (parseFloat(bottomRatio * window.innerHeight) * (100 / window.innerHeight)) + 'vh');
		} else if (document.pageDirection == 'vertical') {
			$('#' + name + '').css('bottom', ((parseFloat(bottomRatio * window.innerHeight) * (100 / window.innerHeight)) * vh2vwRatio) + 'vw');
		}
	} else if (direction == 'top') {
		var topRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowLength;
		if (document.pageDirection == 'horizontal') {
			$('#' + name + '').css('top', (parseFloat(topRatio * window.innerHeight) * (100 / window.innerHeight)) + 'vh');
		} else if (document.pageDirection == 'vertical') {
			$('#' + name + '').css('top', ((parseFloat(topRatio * window.innerHeight) * (100 / window.innerHeight)) * vh2vwRatio) + 'vw');
		}
	} else if (direction == 'left') {
		var leftRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowWidth;
		if (document.pageDirection == 'horizontal') {
			$('#' + name + '').css('left', ((parseFloat(leftRatio * window.innerWidth) * (100 / window.innerWidth)) * vw2vhRatio) + 'vh');
		} else if (document.pageDirection == 'vertical') {
			$('#' + name + '').css('left', (parseFloat(leftRatio * window.innerWidth) * (100 / window.innerWidth)) + 'vw');
		}
	} else if (direction == 'right') {
		var rightRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowWidth;
		if (document.pageDirection == 'horizontal') {
			$('#' + name + '').css('right', ((parseFloat(rightRatio * window.innerWidth) * (100 / window.innerWidth)) * vw2vhRatio) + 'vh');
		} else if (document.pageDirection == 'vertical') {
			$('#' + name + '').css('right', (parseFloat(rightRatio * window.innerWidth) * (100 / window.innerWidth)) + 'vw');
		}
	}
};
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
	if (direction == 'bottom') {
		if (value.includes('center')) {
			$('#' + name + '').css({
				'position': 'absolute',
				'bottom': '50%',
				'margin-bottom': function () {
					return -$(this).outerHeight() / 2;
				}
			});
			(function (name) {
				window.addEventListener('resize', function () {
					$('#' + name + '').css({
						'position': 'absolute',
						'bottom': '50%',
						'margin-bottom': function () {
							return -$(this).outerHeight() / 2;
						}
					});
				});
			})(name);
		} else {
			var bottomRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowLength;
			$('#' + name + '').css('bottom', (parseFloat(bottomRatio * window.innerHeight) * (100 / window.innerHeight)) + 'vh');
		}
	} else if (direction == 'top') {
		if (value.includes('center')) {
			$('#' + name + '').css({
				'position': 'absolute',
				'top': '50%',
				'margin-top': function () {
					return -$(this).outerHeight() / 2;
				}
			});
			(function (name) {
				window.addEventListener('resize', function () {
					$('#' + name + '').css({
						'position': 'absolute',
						'top': '50%',
						'margin-top': function () {
							return -$(this).outerHeight() / 2;
						}
					});
				});
			})(name);
		} else {
			var topRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowLength;
			$('#' + name + '').css('top', (parseFloat(topRatio * window.innerHeight) * (100 / window.innerHeight)) + 'vh');
		}
	} else if (direction == 'left') {
		if (value.includes('center')) {
			$('#' + name + '').css({
				'position': 'absolute',
				'left': '50%',
				'margin-left': function () {
					return -$(this).outerWidth() / 2;
				}
			});
			(function (name) {
				window.addEventListener('resize', function () {
					$('#' + name + '').css({
						'position': 'absolute',
						'left': '50%',
						'margin-left': function () {
							return -$(this).outerWidth() / 2;
						}
					});
				});
			})(name);
		} else {
			var leftRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowWidth;
			$('#' + name + '').css('left', (parseFloat(leftRatio * window.innerWidth) * (100 / window.innerWidth)) + 'vw');
		}
	} else if (direction == 'right') {
		if (value.includes('center')) {
			$('#' + name + '').css({
				'position': 'absolute',
				'right': '50%',
				'margin-right': function () {
					return -$(this).outerWidth() / 2;
				}
			});
			(function (name) {
				window.addEventListener('resize', function () {
					$('#' + name + '').css({
						'position': 'absolute',
						'right': '50%',
						'margin-right': function () {
							return -$(this).outerWidth() / 2;
						}
					});
				});
			})(name);
		} else {
			var rightRatio = parseFloat(window.convertLengthCSS(value)) / document.defaultWindowWidth;
			$('#' + name + '').css('right', (parseFloat(rightRatio * window.innerWidth) * (100 / window.innerWidth)) + 'vw');
		}
	}
};
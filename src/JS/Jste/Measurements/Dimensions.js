/*!
 * Dimensions
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
window.setDimension = function (name, dimension, value, type, isTitled) {
	if (dimension == 'length') {
		if (type == 'img' || type == 'vid') {
			if (isTitled) {
				$('#' + name + '_container').css('height', parseInt(window.convertLengthCSS(value)) + 40 + 'px');
			} else {
				$('#' + name + '_container').css('height', window.convertLengthCSS(value));

			}
			$('#' + name + '').height(parseInt(window.convertLengthCSS(value)));
			var lengthRatio = parseInt($('#' + name + '_container').outerHeight()) / document.defaultWindowLength;
			if (isTitled) {
				$('#' + name + '_container').css('height', parseInt(lengthRatio * window.innerHeight) + 40 + 'px');
			} else {
				$('#' + name + '_container').css('height', parseInt(lengthRatio * window.innerHeight) + 'px');				
			}
			$('#' + name + '').height(parseInt(lengthRatio * window.innerHeight));
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				(function (lengthRatio, name, isTitled) {
					window.addEventListener('resize', function () {
						if (isTitled) {
							$('#' + name + '_container').css('height', parseInt(lengthRatio * window.innerHeight) + 40 + 'px');
						} else {
							$('#' + name + '_container').css('height', parseInt(lengthRatio * window.innerHeight) + 'px');				
						}
						$('#' + name + '').height(parseInt(lengthRatio * window.innerHeight));
					});
				})(lengthRatio, name, isTitled);
			}
		} else {
			$('#' + name + '').css('height', window.convertLengthCSS(value));
			var lengthRatio = parseInt($('#' + name + '').outerHeight()) / document.defaultWindowLength;
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				$('#' + name + '').css('height', parseInt(lengthRatio * window.innerHeight) + 'px');
				(function (lengthRatio, name) {
					window.addEventListener('resize', function () {
						$('#' + name + '').css('height', parseInt(lengthRatio * window.innerHeight) + 'px');
					});
				})(lengthRatio, name);
			}
		}
	} else if (dimension == 'width') {
		if (type == 'img' || type == 'vid') {
			$('#' + name + '_container').css('width', window.convertLengthCSS(value));
			$('#' + name + '').width(parseInt(window.convertLengthCSS(value)));
			var widthRatio = parseInt($('#' + name + '_container').outerWidth()) / document.defaultWindowWidth;
			$('#' + name + '_container').css('width', parseInt(widthRatio * window.innerWidth) + 'px');
			$('#' + name + '').width(parseInt(widthRatio * window.innerWidth));
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				(function (widthRatio, name) {
					window.addEventListener('resize', function () {
						$('#' + name + '_container').css('width', parseInt(widthRatio * window.innerWidth) + 'px');
						$('#' + name + '_html5_api').css('width', parseInt(widthRatio * window.innerWidth) + 'px');
						$('#' + name + '').width(parseInt(widthRatio * window.innerWidth));
					});
				})(widthRatio, name);
			}
		} else {
			$('#' + name + '').css('width', window.convertLengthCSS(value));
			var widthRatio = parseInt($('#' + name + '').outerWidth()) / document.defaultWindowWidth;
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				$('#' + name + '').css('width', parseInt(widthRatio * window.innerWidth) + 'px');
				(function (widthRatio, name) {
					window.addEventListener('resize', function () {
						$('#' + name + '').css('width', parseInt(widthRatio * window.innerWidth) + 'px');
					});
				})(widthRatio, name);
			}
		}
	}
}
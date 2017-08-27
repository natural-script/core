//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------Setting The Dimensions Function------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
 window.setDimension = function (name, dimension, value, type) {
	if (dimension == 'length') {
		if (type == 'img' || type == 'vid') {
			$('#' + name + '_container').css('height', window.convertLengthCSS(value));
			$('#' + name + '').height(parseInt(window.convertLengthCSS(value)));
			var lengthRatio = parseInt($('#' + name + '_container').outerHeight()) / document.defaultWindowLength;
			$('#' + name + '_container').css('height', parseInt(lengthRatio * document.documentElement.clientHeight) + 'px');
			$('#' + name + '').height(parseInt(lengthRatio * document.documentElement.clientHeight));
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				(function(lengthRatio, name) {
					window.addEventListener('resize', function() {
						$('#' + name + '_container').css('height', parseInt(lengthRatio * document.documentElement.clientHeight) + 'px');
						$('#' + name + '').height(parseInt(lengthRatio * document.documentElement.clientHeight));
					});
				})(lengthRatio, name);
			}
		} else {
			$('#' + name + '').css('height', window.convertLengthCSS(value));
			var lengthRatio = parseInt($('#' + name + '').outerHeight()) / document.defaultWindowLength;
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				$('#' + name + '').css('height', parseInt(lengthRatio * document.documentElement.clientHeight) + 'px');
				(function(lengthRatio, name) {
					window.addEventListener('resize', function() {
						$('#' + name + '').css('height', parseInt(lengthRatio * document.documentElement.clientHeight) + 'px');
					});
				})(lengthRatio, name);
			}
		}
	} else if (dimension == 'width') {
		if (type == 'img' || type == 'vid') {
			$('#' + name + '_container').css('width', window.convertLengthCSS(value));
			$('#' + name + '').width(parseInt(window.convertLengthCSS(value)));
			var widthRatio = parseInt($('#' + name + '_container').outerWidth()) / document.defaultWindowWidth;
			$('#' + name + '_container').css('width', parseInt(widthRatio * document.documentElement.clientWidth) + 'px');
			$('#' + name + '').width(parseInt(widthRatio * document.documentElement.clientWidth));
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				(function(widthRatio, name) {
					window.addEventListener('resize', function() {
						$('#' + name + '_container').css('width', parseInt(widthRatio * document.documentElement.clientWidth) + 'px');
						$('#' + name + '').width(parseInt(widthRatio * document.documentElement.clientWidth));
					});
				})(widthRatio, name);
			}
		} else {
			$('#' + name + '').css('width', window.convertLengthCSS(value));
			var widthRatio = parseInt($('#' + name + '').outerWidth()) / document.defaultWindowWidth;
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				$('#' + name + '').css('width', parseInt(widthRatio * document.documentElement.clientWidth) + 'px');
				(function(widthRatio, name) {
					window.addEventListener('resize', function() {
						$('#' + name + '').css('width', parseInt(widthRatio * document.documentElement.clientWidth) + 'px');
					});
				})(widthRatio, name);
			}
		}
	}
}
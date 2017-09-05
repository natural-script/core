//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------Setting The Distances Function------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
 window.setDistance = function (name, direction, value) {
	if (direction == 'bottom') {
		if (value.includes('center')) {
			$('#' + name + '').css({
				'position': 'absolute',
				'bottom': '50%',
				'margin-bottom': function() {
					return -$(this).outerHeight() / 2;
				}
			});
			(function(name) {
				window.addEventListener('resize', function() {
					$('#' + name + '').css({
						'position': 'absolute',
						'bottom': '50%',
						'margin-bottom': function() {
							return -$(this).outerHeight() / 2;
						}
					});
				});
			})(name);
		} else {
			var bottomRatio = parseInt(value) / document.defaultWindowHeight;
			$('#' + name + '').css('bottom', window.convertLengthCSS(value));
			(function(bottomRatio, name) {
				window.addEventListener('resize', function() {
					$('#' + name + '').css('bottom', parseInt(bottomRatio * window.innerHeight) + 'px');
				});
			})(bottomRatio, name);
		}
	} else if (direction == 'top') {
		if (value.includes('center')) {
			$('#' + name + '').css({
				'position': 'absolute',
				'top': '50%',
				'margin-top': function() {
					return -$(this).outerHeight() / 2;
				}
			});
			(function(name) {
				window.addEventListener('resize', function() {
					$('#' + name + '').css({
						'position': 'absolute',
						'top': '50%',
						'margin-top': function() {
							return -$(this).outerHeight() / 2;
						}
					});
				});
			})(name);
		} else {
			var topRatio = parseInt(value) / document.defaultWindowHeight;
			$('#' + name + '').css('top', window.convertLengthCSS(value));
			(function(topRatio, name) {
				window.addEventListener('resize', function() {
					$('#' + name + '').css('top', parseInt(topRatio * window.innerHeight) + 'px');
				});
			})(topRatio, name);
		}
	} else if (direction == 'left') {
		if (value.includes('center')) {
			$('#' + name + '').css({
				'position': 'absolute',
				'left': '50%',
				'margin-left': function() {
					return -$(this).outerWidth() / 2;
				}
			});
			(function(name) {
				window.addEventListener('resize', function() {
					$('#' + name + '').css({
						'position': 'absolute',
						'left': '50%',
						'margin-left': function() {
							return -$(this).outerWidth() / 2;
						}
					});
				});
			})(name);
		} else {
			var leftRatio = parseInt(value) / document.defaultWindowWidth;
			$('#' + name + '').css('left', window.convertLengthCSS(value));
			(function(leftRatio, name) {
				window.addEventListener('resize', function() {
					$('#' + name + '').css('left', parseInt(leftRatio * window.innerWidth) + 'px');
				});
			})(leftRatio, name);
		}
	} else if (direction == 'right') {
		if (value.includes('center')) {
			$('#' + name + '').css({
				'position': 'absolute',
				'right': '50%',
				'margin-right': function() {
					return -$(this).outerWidth() / 2;
				}
			});
			(function(name) {
				window.addEventListener('resize', function() {
					$('#' + name + '').css({
						'position': 'absolute',
						'right': '50%',
						'margin-right': function() {
							return -$(this).outerWidth() / 2;
						}
					});
				});
			})(name);
		} else {
			var rightRatio = parseInt(value) / document.defaultWindowWidth;
			$('#' + name + '').css('right', window.convertLengthCSS(value));
			(function(rightRatio, name) {
				window.addEventListener('resize', function() {
					$('#' + name + '').css('right', parseInt(rightRatio * window.innerWidth) + 'px');
				});
			})(rightRatio, name);
		}
	}
}
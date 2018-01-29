/*!
 * Colors
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-10
 */
window.setFontColour = function (elementName, color) {
	if (color == window.blackTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#000000');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#000000'
			});
		}
	} else if (color == window.redTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#F44336');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#F44336'
			});
		}
	} else if (color == window.blueTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#2196F3');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#2196F3'
			});
		}
	} else if (color == window.cyanTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#00BCD4');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#00BCD4'
			});
		}
	} else if (color == window.grayTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#9E9E9E');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#9E9E9E'
			});
		}
	} else if (color == window.greenTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#4CAF50');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#4CAF50'
			});
		}
	} else if (color == window.whiteTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#FFFFFF');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#FFFFFF'
			});
		}
	} else if (color == window.orangeTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#FF9800');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#FF9800'
			});
		}
	} else if (color == window.yellowTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#FFEB3B');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#FFEB3B'
			});
		}
	} else if (color == window.brownTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#795548');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#795548'
			});
		}
	} else if (color == window.tealTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#009688');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#009688'
			});
		}
	} else if (color == window.pinkTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#E91E63');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#E91E63'
			});
		}
	} else if (color == window.lightGreenTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', '#8BC34A');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: '#8BC34A'
			});
		}
	} else if (color == window.transparentTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', 'transparent');
		} else {
			anime({
				targets: '#' + elementName + '',
				color: 'transparent'
			});
		}
	} else if (color == window.aRandomColorTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', window.randomColor({
				hue: 'random',
				luminosity: 'random'
			}));
		} else {
			anime({
				targets: '#' + elementName + '',
				color: window.randomColor({
					hue: 'random',
					luminosity: 'random'
				})
			});
		}
	} else if (color == window.aRandomLightColorTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', window.randomColor({
				hue: 'random',
				luminosity: 'light'
			}));
		} else {
			anime({
				targets: '#' + elementName + '',
				color: window.randomColor({
					hue: 'random',
					luminosity: 'light'
				})
			});
		}
	} else if (color == window.aRandomDarkColorTranslations[document.lang]) {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', window.randomColor({
				hue: 'random',
				luminosity: 'dark'
			}));
		} else {
			anime({
				targets: '#' + elementName + '',
				color: window.randomColor({
					hue: 'random',
					luminosity: 'dark'
				})
			});
		}
	} else {
		if ($('#' + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$('#' + elementName + '').css('color', color);
		} else {
			anime({
				targets: '#' + elementName + '',
				color: color
			});
		}
	}
};

window.setBG = function (elementName, background) {
	if (background == window.blackTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#000000'
		});
	} else if (background == window.redTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#F44336'
		});
	} else if (background == window.blueTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#2196F3'
		});
	} else if (background == window.cyanTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#00BCD4'
		});
	} else if (background == window.grayTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#9E9E9E'
		});
	} else if (background == window.greenTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#4CAF50'
		});
	} else if (background == window.whiteTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#FFFFFF'
		});
	} else if (background == window.orangeTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#FF9800'
		});
	} else if (background == window.yellowTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#FFEB3B'
		});
	} else if (background == window.brownTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#795548'
		});
	} else if (background == window.tealTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#009688'
		});
	} else if (background == window.pinkTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#E91E63'
		});
	} else if (background == window.lightGreenTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: '#8BC34A'
		});
	} else if (background == window.transparentTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: 'transparent'
		});
	} else if (background.charAt(0) == '#') {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: background
		});
	} else if (background == window.aRandomColorTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: window.randomColor({
				hue: 'random',
				luminosity: 'random'
			})
		});
	} else if (background == window.aRandomLightColorTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: window.randomColor({
				hue: 'random',
				luminosity: 'light'
			})
		});
	} else if (background == window.aRandomDarkColorTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			backgroundColor: window.randomColor({
				hue: 'random',
				luminosity: 'dark'
			})
		});
	} else {
		$('#' + elementName + '').css('background-image', 'url(' + background + ')');
	}
};

window.setMainColor = function (color) {
	if (color == window.blackTranslations[document.lang]) {
		RecentsControl.setColor('#000000');
	} else if (color == window.redTranslations[document.lang]) {
		RecentsControl.setColor('#F44336');
	} else if (color == window.blueTranslations[document.lang]) {
		RecentsControl.setColor('#2196F3');
	} else if (color == window.cyanTranslations[document.lang]) {
		RecentsControl.setColor('#00BCD4');
	} else if (color == window.grayTranslations[document.lang]) {
		RecentsControl.setColor('#9E9E9E');
	} else if (color == window.greenTranslations[document.lang]) {
		RecentsControl.setColor('#4CAF50');
	} else if (color == window.whiteTranslations[document.lang]) {
		RecentsControl.setColor('#FFFFFF');
	} else if (color == window.orangeTranslations[document.lang]) {
		RecentsControl.setColor('#FF9800');
	} else if (color == window.yellowTranslations[document.lang]) {
		RecentsControl.setColor('#FFEB3B');
	} else if (color == window.brownTranslations[document.lang]) {
		RecentsControl.setColor('#795548');
	} else if (color == window.tealTranslations[document.lang]) {
		RecentsControl.setColor('#009688');
	} else if (color == window.pinkTranslations[document.lang]) {
		RecentsControl.setColor('#E91E63');
	} else if (color == window.lightGreenTranslations[document.lang]) {
		RecentsControl.setColor('#8BC34A');
	} else if (color.charAt(0) == '#') {
		RecentsControl.setColor(color);
	} else if (color == window.aRandomColorTranslations[document.lang]) {
		RecentsControl.setColor(window.randomColor({
			hue: 'random',
			luminosity: 'random'
		}));
	} else if (color == window.aRandomLightColorTranslations[document.lang]) {
		RecentsControl.setColor(window.randomColor({
			hue: 'random',
			luminosity: 'light'
		}));
	} else if (color == window.aRandomDarkColorTranslations[document.lang]) {
		RecentsControl.setColor(window.randomColor({
			hue: 'random',
			luminosity: 'dark'
		}));
	}
};
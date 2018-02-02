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
window.setFontColour = function (elementName, color, isTagName) {
	var selectorPrefix = '#';
	if (isTagName) {
		selectorPrefix = '';
	}
	if (color == window.blackTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#000000');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#000000'
			});
		}
	} else if (color == window.redTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#F44336');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#F44336'
			});
		}
	} else if (color == window.blueTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#2196F3');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#2196F3'
			});
		}
	} else if (color == window.cyanTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#00BCD4');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#00BCD4'
			});
		}
	} else if (color == window.grayTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#9E9E9E');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#9E9E9E'
			});
		}
	} else if (color == window.greenTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#4CAF50');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#4CAF50'
			});
		}
	} else if (color == window.whiteTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#FFFFFF');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#FFFFFF'
			});
		}
	} else if (color == window.orangeTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#FF9800');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#FF9800'
			});
		}
	} else if (color == window.yellowTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#FFEB3B');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#FFEB3B'
			});
		}
	} else if (color == window.brownTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#795548');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#795548'
			});
		}
	} else if (color == window.tealTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#009688');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#009688'
			});
		}
	} else if (color == window.pinkTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#E91E63');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#E91E63'
			});
		}
	} else if (color == window.lightGreenTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#8BC34A');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#8BC34A'
			});
		}
	} else if (color == window.transparentTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', 'transparent');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: 'transparent'
			});
		}
	} else if (color == window.aRandomColorTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', window.randomColor({
				hue: 'random',
				luminosity: 'random'
			}));
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: window.randomColor({
					hue: 'random',
					luminosity: 'random'
				})
			});
		}
	} else if (color == window.aRandomLightColorTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', window.randomColor({
				hue: 'random',
				luminosity: 'light'
			}));
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: window.randomColor({
					hue: 'random',
					luminosity: 'light'
				})
			});
		}
	} else if (color == window.aRandomDarkColorTranslations[document.langID]) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', window.randomColor({
				hue: 'random',
				luminosity: 'dark'
			}));
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: window.randomColor({
					hue: 'random',
					luminosity: 'dark'
				})
			});
		}
	} else {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', color);
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: color
			});
		}
	}
};

window.setBG = function (elementName, background, isTagName) {
	var selectorPrefix = '#';
	if (isTagName) {
		selectorPrefix = '';
	}
	if (background == window.blackTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#000000'
		});
	} else if (background == window.redTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#F44336'
		});
	} else if (background == window.blueTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#2196F3'
		});
	} else if (background == window.cyanTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#00BCD4'
		});
	} else if (background == window.grayTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#9E9E9E'
		});
	} else if (background == window.greenTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#4CAF50'
		});
	} else if (background == window.whiteTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#FFFFFF'
		});
	} else if (background == window.orangeTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#FF9800'
		});
	} else if (background == window.yellowTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#FFEB3B'
		});
	} else if (background == window.brownTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#795548'
		});
	} else if (background == window.tealTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#009688'
		});
	} else if (background == window.pinkTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#E91E63'
		});
	} else if (background == window.lightGreenTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#8BC34A'
		});
	} else if (background == window.transparentTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: 'transparent'
		});
	} else if (background.charAt(0) == '#') {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: background
		});
	} else if (background == window.aRandomColorTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: window.randomColor({
				hue: 'random',
				luminosity: 'random'
			})
		});
	} else if (background == window.aRandomLightColorTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: window.randomColor({
				hue: 'random',
				luminosity: 'light'
			})
		});
	} else if (background == window.aRandomDarkColorTranslations[document.langID]) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: window.randomColor({
				hue: 'random',
				luminosity: 'dark'
			})
		});
	} else {
		$(selectorPrefix + elementName + '').css('background-image', 'url(' + background + ')');
	}
};

window.setMainColor = function (color) {
	window.setBG('app-toolbar', color, true);
	if (typeof cordova !== 'undefined') {
		if (cordova.platformId == 'android') {
			if (color == window.blackTranslations[document.langID]) {
				RecentsControl.setColor('#000000');
			} else if (color == window.redTranslations[document.langID]) {
				RecentsControl.setColor('#F44336');
			} else if (color == window.blueTranslations[document.langID]) {
				RecentsControl.setColor('#2196F3');
			} else if (color == window.cyanTranslations[document.langID]) {
				RecentsControl.setColor('#00BCD4');
			} else if (color == window.grayTranslations[document.langID]) {
				RecentsControl.setColor('#9E9E9E');
			} else if (color == window.greenTranslations[document.langID]) {
				RecentsControl.setColor('#4CAF50');
			} else if (color == window.whiteTranslations[document.langID]) {
				RecentsControl.setColor('#FFFFFF');
			} else if (color == window.orangeTranslations[document.langID]) {
				RecentsControl.setColor('#FF9800');
			} else if (color == window.yellowTranslations[document.langID]) {
				RecentsControl.setColor('#FFEB3B');
			} else if (color == window.brownTranslations[document.langID]) {
				RecentsControl.setColor('#795548');
			} else if (color == window.tealTranslations[document.langID]) {
				RecentsControl.setColor('#009688');
			} else if (color == window.pinkTranslations[document.langID]) {
				RecentsControl.setColor('#E91E63');
			} else if (color == window.lightGreenTranslations[document.langID]) {
				RecentsControl.setColor('#8BC34A');
			} else if (color.charAt(0) == '#') {
				RecentsControl.setColor(color);
			} else if (color == window.aRandomColorTranslations[document.langID]) {
				RecentsControl.setColor(window.randomColor({
					hue: 'random',
					luminosity: 'random'
				}));
			} else if (color == window.aRandomLightColorTranslations[document.langID]) {
				RecentsControl.setColor(window.randomColor({
					hue: 'random',
					luminosity: 'light'
				}));
			} else if (color == window.aRandomDarkColorTranslations[document.langID]) {
				RecentsControl.setColor(window.randomColor({
					hue: 'random',
					luminosity: 'dark'
				}));
			}
		}
	}
};
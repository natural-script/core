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
	if (color.findBestMatch(window.wordsTranslationsDB.Words['black'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#000000');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#000000'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['red'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#F44336');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#F44336'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['blue'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#2196F3');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#2196F3'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['cyan'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#00BCD4');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#00BCD4'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['gray'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#9E9E9E');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#9E9E9E'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['green'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#4CAF50');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#4CAF50'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['white'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#FFFFFF');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#FFFFFF'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['orange'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#FF9800');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#FF9800'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['yellow'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#FFEB3B');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#FFEB3B'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['brown'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#795548');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#795548'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['teal'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#009688');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#009688'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['pink'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#E91E63');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#E91E63'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['lightGreen'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', '#8BC34A');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: '#8BC34A'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['transparent'][document.langCode]).rating > 0.8) {
		if ($(selectorPrefix + elementName + '').prop('tagName') == 'PAPER-BUTTON') {
			$(selectorPrefix + elementName + '').css('color', 'transparent');
		} else {
			anime({
				targets: selectorPrefix + elementName + '',
				color: 'transparent'
			});
		}
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['aRandomColor'][document.langCode]).rating > 0.8) {
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
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['aRandomLightColor'][document.langCode]).rating > 0.8) {
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
	} else if (color.findBestMatch(window.wordsTranslationsDB.Words['aRandomDarkColor'][document.langCode]).rating > 0.8) {
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
	if (background.findBestMatch(window.wordsTranslationsDB.Words['black'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#000000'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['red'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#F44336'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['blue'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#2196F3'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['cyan'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#00BCD4'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['gray'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#9E9E9E'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['green'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#4CAF50'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['white'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#FFFFFF'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['orange'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#FF9800'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['yellow'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#FFEB3B'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['brown'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#795548'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['teal'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#009688'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['pink'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#E91E63'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['lightGreen'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: '#8BC34A'
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['transparent'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: 'transparent'
		});
	} else if (background.charAt(0) == '#') {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: background
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['aRandomColor'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: window.randomColor({
				hue: 'random',
				luminosity: 'random'
			})
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['aRandomLightColor'][document.langCode]).rating > 0.8) {
		anime({
			targets: selectorPrefix + elementName + '',
			backgroundColor: window.randomColor({
				hue: 'random',
				luminosity: 'light'
			})
		});
	} else if (background.findBestMatch(window.wordsTranslationsDB.Words['aRandomDarkColor'][document.langCode]).rating > 0.8) {
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
			if (color.findBestMatch(window.wordsTranslationsDB.Words['black'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#000000');
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['red'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#F44336');
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['blue'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#2196F3');
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['cyan'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#00BCD4');
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['gray'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#9E9E9E');
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['green'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#4CAF50');
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['white'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#FFFFFF');
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['orange'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#FF9800');
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['yellow'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#FFEB3B');
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['brown'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#795548');
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['teal'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#009688');
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['pink'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#E91E63');
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['lightGreen'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor('#8BC34A');
			} else if (color.charAt(0) == '#') {
				RecentsControl.setColor(color);
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['aRandomColor'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor(window.randomColor({
					hue: 'random',
					luminosity: 'random'
				}));
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['aRandomLightColor'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor(window.randomColor({
					hue: 'random',
					luminosity: 'light'
				}));
			} else if (color.findBestMatch(window.wordsTranslationsDB.Words['aRandomDarkColor'][document.langCode]).rating > 0.8) {
				RecentsControl.setColor(window.randomColor({
					hue: 'random',
					luminosity: 'dark'
				}));
			}
		}
	}
};
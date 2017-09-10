/*!
 * Colors
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
window.setFontColour = function (elementName, color) {
	if (color == window.blackTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#000000'
		});
	} else if (color == window.redTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#F44336'
		});
	} else if (color == window.blueTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#2196F3'
		});
	} else if (color == window.cyanTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#00BCD4'
		});
	} else if (color == window.grayTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#9E9E9E'
		});
	} else if (color == window.greenTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#4CAF50'
		});
	} else if (color == window.whiteTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#FFFFFF'
		});
	} else if (color == window.orangeTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#FF9800'
		});
	} else if (color == window.yellowTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#FFEB3B'
		});
	} else if (color == window.brownTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#795548'
		});
	} else if (color == window.tealTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#009688'
		});
	} else if (color == window.pinkTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#E91E63'
		});
	} else if (color == window.lightGreenTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: '#8BC34A'
		});
	} else if (color == window.transparentTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: 'transparent'
		});
	} else if (color == window.aRandomColorTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: window.randomColor({
				hue: 'random',
				luminosity: 'random'
			})
		});
	} else if (color == window.aRandomLightColorTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: window.randomColor({
				hue: 'random',
				luminosity: 'light'
			})
		});
	} else if (color == window.aRandomDarkColorTranslations[document.lang]) {
		anime({
			targets: '#' + elementName + '',
			color: window.randomColor({
				hue: 'random',
				luminosity: 'dark'
			})
		});
	} else {
		anime({
			targets: '#' + elementName + '',
			color: color
		});
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
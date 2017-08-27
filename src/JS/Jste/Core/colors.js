	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	//-------------------------------------------------------Colors Translations------------------------------------------------------------------------------------------------------------------------------------------//
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	 window.setFontColour = function (elementName, color) {
		if (color == window.blackTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#000000');
		} else if (color == window.redTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#F44336');
		} else if (color == window.blueTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#2196F3');
		} else if (color == window.cyanTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#00BCD4');
		} else if (color == window.grayTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#9E9E9E');
		} else if (color == window.greenTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#4CAF50');
		} else if (color == window.whiteTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#FFFFFF');
		} else if (color == window.orangeTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#FF9800');
		} else if (color == window.yellowTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#FFEB3B');
		} else if (color == window.brownTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#795548');
		} else if (color == window.tealTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#009688');
		} else if (color == window.pinkTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#E91E63');
		} else if (color == window.lightGreenTranslations[document.lang]) {
			$('#' + elementName + '').css('color', '#8BC34A');
		} else {
			$('#' + elementName + '').css('color', color);
		}
	}

	 window.setBG = function (elementName, background) {
		if (background == window.blackTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#000000');
		} else if (background == window.redTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#F44336');
		} else if (background == window.blueTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#2196F3');
		} else if (background == window.cyanTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#00BCD4');
		} else if (background == window.grayTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#9E9E9E');
		} else if (background == window.greenTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#4CAF50');
		} else if (background == window.whiteTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#FFFFFF');
		} else if (background == window.orangeTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#FF9800');
		} else if (background == window.yellowTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#FFEB3B');
		} else if (background == window.brownTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#795548');
		} else if (background == window.tealTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#009688');
		} else if (background == window.pinkTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#E91E63');
		} else if (background == window.lightGreenTranslations[document.lang]) {
			$('#' + elementName + '').css('background-color', '#8BC34A');
		} else if (background.charAt(0) == '#') {
			$('#' + elementName + '').css('background-color', background);
		} else {
			$('#' + elementName + '').css('background-image', 'url(' + background + ')');
		}
	}
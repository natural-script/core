/*!
 * Math Expressions Builder
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-15
 */
window.evaluateExpression = function (expression) {
	var valNo = expression.match(RegExp(window.theValueOfTranslations[document.lang], "g"));
	var finalExpression = expression;
	var valueResource = '';
	var finalValue = '';
	if (valNo != null) {
		if (valNo.length > -1) {
			for (i = 0; i < valNo.length; i++) {
				if (document.lang == 0 || document.lang == 1) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
					finalValue = window.elementValue.get(valueResource);
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.lang] + ' ' + valueResource, finalValue);
				} else if (document.lang == 2) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
					finalValue = window.elementValue.get(valueResource);
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.lang] + ' ' + valueResource, finalValue);
				} else if (document.lang == 3) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
					finalValue = window.elementValue.get(valueResource);
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.lang] + ' ' + valueResource, finalValue);
				} else if (document.lang == 4) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
					finalValue = window.elementValue.get(valueResource);
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.lang] + ' ' + valueResource, finalValue);
				} else if (document.lang == 5) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
					finalValue = window.elementValue.get(valueResource);
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.lang] + ' ' + valueResource, finalValue);
				}
			}
		}
	}
	finalExpression = finalExpression
		.replace(/(square root|جذر)/g, 'sqrt')
		.replace(/(multiplied by|ضرب)/g, '*')
		.replace(/(divided by|فى|على)/g, '/')
		.replace(/(plus|زائد)/g, '+')
		.replace(/(minus|ناقص)/g, '-')
		.replace(/جا/g, 'sin')
		.replace(/جتا/g, 'cos')
		.replace(/ظا/g, 'tan')
		.replace(RegExp(window.centimetersTranslations[document.lang], "g"), "cm")
		.replace(RegExp(window.millimetersTranslations[document.lang], "g"), "mm")
		.replace(RegExp(window.inchesTranslations[document.lang], "g"), "in")
		.replace(RegExp(window.pixelsTranslations[document.lang], "g"), "px")
		.replace(RegExp(window.pointsTranslations[document.lang], "g"), "pt")
		.replace(RegExp(window.picasTranslations[document.lang], "g"), "pc")
		.replace(RegExp(window.centimeterTranslations[document.lang], "g"), "cm")
		.replace(RegExp(window.millimeterTranslations[document.lang], "g"), "mm")
		.replace(RegExp(window.inchTranslations[document.lang], "g"), "in")
		.replace(RegExp(window.pixelTranslations[document.lang], "g"), "px")
		.replace(RegExp(window.pointTranslations[document.lang], "g"), "pt")
		.replace(RegExp(window.picaTranslations[document.lang], "g"), "pc")
		.replace(RegExp('سم', "g"), "cm")
		.replace(RegExp('مم', "g"), "mm")
		.replace(RegExp('÷', "g"), "/")
		.replace(RegExp('%', "g"), "/100")
		.replace(RegExp('(×|x)', "g"), "*");
		var openingBracketsNo = (finalExpression.match(/\(/g) || []).length;
		var closingBracketsNo = (finalExpression.match(/\)/g) || []).length;
		for (var i = 0; i < (openingBracketsNo - closingBracketsNo); i++){
			finalExpression += ')';
		}
	return math.eval(finalExpression);
};
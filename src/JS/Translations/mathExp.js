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
	var valNo = expression.match(RegExp(window.theValueOfTranslations[document.langID], "g"));
	var finalExpression = expression;
	var valueResource = '';
	var finalValue = '';
	if (valNo != null) {
		if (valNo.length > -1) {
			for (i = 0; i < valNo.length; i++) {
				if (document.langID == 0 || document.langID == 1) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.langID])[1].split(' ')[1];
					finalValue = window.elementValue.get(valueResource);
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.langID] + ' ' + valueResource, finalValue);
				} else if (document.langID == 2) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.langID])[1].split(' ')[1];
					finalValue = window.elementValue.get(valueResource);
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.langID] + ' ' + valueResource, finalValue);
				} else if (document.langID == 3) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.langID])[1].split(' ')[1];
					finalValue = window.elementValue.get(valueResource);
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.langID] + ' ' + valueResource, finalValue);
				} else if (document.langID == 4) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.langID])[1].split(' ')[1];
					finalValue = window.elementValue.get(valueResource);
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.langID] + ' ' + valueResource, finalValue);
				} else if (document.langID == 5) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.langID])[1].split(' ')[1];
					finalValue = window.elementValue.get(valueResource);
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.langID] + ' ' + valueResource, finalValue);
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
		.replace(RegExp(window.centimetersTranslations[document.langID], "g"), "cm")
		.replace(RegExp(window.millimetersTranslations[document.langID], "g"), "mm")
		.replace(RegExp(window.inchesTranslations[document.langID], "g"), "in")
		.replace(RegExp(window.pixelsTranslations[document.langID], "g"), "px")
		.replace(RegExp(window.pointsTranslations[document.langID], "g"), "pt")
		.replace(RegExp(window.picasTranslations[document.langID], "g"), "pc")
		.replace(RegExp(window.centimeterTranslations[document.langID], "g"), "cm")
		.replace(RegExp(window.millimeterTranslations[document.langID], "g"), "mm")
		.replace(RegExp(window.inchTranslations[document.langID], "g"), "in")
		.replace(RegExp(window.pixelTranslations[document.langID], "g"), "px")
		.replace(RegExp(window.pointTranslations[document.langID], "g"), "pt")
		.replace(RegExp(window.picaTranslations[document.langID], "g"), "pc")
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
/*!
 * Math Expressions Builder
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-06
 */
window.evaluateExpression = function (expression) {
	var valNo = expression.match(XRegExp(window.theValueOfTranslations[document.langID], "g"));
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
		.replace(XRegExp(window.centimetersTranslations[document.langID], "g"), "cm")
		.replace(XRegExp(window.millimetersTranslations[document.langID], "g"), "mm")
		.replace(XRegExp(window.inchesTranslations[document.langID], "g"), "in")
		.replace(XRegExp(window.pixelsTranslations[document.langID], "g"), "px")
		.replace(XRegExp(window.pointsTranslations[document.langID], "g"), "pt")
		.replace(XRegExp(window.picasTranslations[document.langID], "g"), "pc")
		.replace(XRegExp(window.centimeterTranslations[document.langID], "g"), "cm")
		.replace(XRegExp(window.millimeterTranslations[document.langID], "g"), "mm")
		.replace(XRegExp(window.inchTranslations[document.langID], "g"), "in")
		.replace(XRegExp(window.pixelTranslations[document.langID], "g"), "px")
		.replace(XRegExp(window.pointTranslations[document.langID], "g"), "pt")
		.replace(XRegExp(window.picaTranslations[document.langID], "g"), "pc")
		.replace(XRegExp('سم', "g"), "cm")
		.replace(XRegExp('مم', "g"), "mm")
		.replace(XRegExp('÷', "g"), "/")
		.replace(XRegExp('%', "g"), "/100")
		.replace(XRegExp('(×|x)', "g"), "*");
		var openingBracketsNo = (finalExpression.match(/\(/g) || []).length;
		var closingBracketsNo = (finalExpression.match(/\)/g) || []).length;
		for (var i = 0; i < (openingBracketsNo - closingBracketsNo); i++){
			finalExpression += ')';
		}
	return math.eval(finalExpression);
};
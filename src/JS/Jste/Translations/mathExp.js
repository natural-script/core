//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------Evaluating Math Expressions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
 window.evaluateExpression = function (expression) {
	var valNo = expression.match(RegExp(window.theValueOfTranslations[document.lang], "g"));
	var finalExpression = expression;
	var valueResource = '';
	var finalValue = '';
	if (valNo != null) {
		if (valNo.length > -1) {
			for (i = 0; i < valNo.length; i++) {
				if (document.lang == 0) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
					finalValue = $('#' + valueResource + '').val();
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.lang] + ' ' + valueResource, finalValue);
				} else if (document.lang == 2) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
					finalValue = $('#' + valueResource + '').val();
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.lang] + ' ' + valueResource, finalValue);
				} else if (document.lang == 3) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
					finalValue = $('#' + valueResource + '').val();
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.lang] + ' ' + valueResource, finalValue);
				} else if (document.lang == 4) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
					finalValue = $('#' + valueResource + '').val();
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.lang] + ' ' + valueResource, finalValue);
				} else if (document.lang == 5) {
					valueResource = finalExpression.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
					finalValue = $('#' + valueResource + '').val();
					finalExpression = finalExpression.replace(window.theValueOfTranslations[document.lang] + ' ' + valueResource, finalValue);
				}
			}
		}
	}
	finalExpression = finalExpression.replace(/square root/g, 'sqrt').replace(/جذر/g, 'sqrt').replace(/multiplied by/g, '*').replace(/ضرب/g, '*').replace(/divided/g, '/').replace(/على/g, '/').replace(/جا/g, 'sin').replace(/جتا/g, 'cos').replace(/ظا/g, 'tan');
	return math.eval(finalExpression);
}
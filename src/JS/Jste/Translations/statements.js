/*!
 * Conditional Statements Translations
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
window.evaluateStatement = function (statement) {
	var statementORParts = statement.split(' ' + window.orTranslations[document.lang] + ' ' + window.theValueOfTranslations[document.lang]);
	var finalStatement = '';
	var valueResource = '';
	for (var i = 0; i < statementORParts.length; i++) {
		var statementCurrentPart;
		if (i == 0) {
			statementCurrentPart = statementORParts[i];
		} else {
			statementCurrentPart = ' ' + window.theValueOfTranslations[document.lang] + '' + statementORParts[i];
			finalStatement += ' || ';
		}
		var statementANDParts = statementCurrentPart.split(' ' + window.andTranslations[document.lang] + ' ' + window.theValueOfTranslations[document.lang]);
		for (var k = 0; k < statementANDParts.length; k++) {
			if (document.lang == 0 || document.lang == 1) {
				var statementCurrentPart;
				if (k == 0) {
					statementCurrentPart = statementANDParts[k];
				} else {
					statementCurrentPart = ' ' + window.theValueOfTranslations[document.lang] + '' + statementANDParts[k];
					finalStatement += ' && ';
				}
				valueResource = statementCurrentPart.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
				finalStatement += "$('#" + valueResource + "').val()";
				console.log(statementCurrentPart);
				if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'is' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'greater' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'smaller') {
					if (statementCurrentPart.split(valueResource)[1].split(' is ')[1].includes(window.theValueOfTranslations[document.lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' is ')[1].split(' ')[0] + ' ' + statementCurrentPart.split(valueResource)[1].split(' is ')[1].split(' ')[1] + ' ' + statementCurrentPart.split(valueResource)[1].split(' is ')[1].split(' ')[2] == window.theValueOfTranslations[document.lang]) {
							finalStatement += " == $('#" + statementCurrentPart.split(valueResource)[1].split(' is ')[1].split(window.theValueOfTranslations[document.lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " == '" + statementCurrentPart.split(valueResource)[1].split(' is ')[1] + "'";
						}
					} else {
						finalStatement += " == '" + statementCurrentPart.split(valueResource)[1].split(' is ')[1] + "'";
					}
				} else if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'is' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'greater' && statementCurrentPart.split(valueResource)[1].split(' ')[2] == 'smaller' && statementCurrentPart.split(valueResource)[1].split(' ')[3] == 'than') {
					if (statementCurrentPart.split(valueResource)[1].split(' is smaller than ')[1].includes(window.theValueOfTranslations[document.lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' is smaller than ')[1].split(' ')[0] + ' ' + statementCurrentPart.split(valueResource)[1].split(' is smaller than ')[1].split(' ')[1] + ' ' + statementCurrentPart.split(valueResource)[1].split(' is smaller than ')[1].split(' ')[2] == window.theValueOfTranslations[document.lang]) {
							finalStatement += " < $('#" + statementCurrentPart.split(valueResource)[1].split(' is smaller than ')[1].split(window.theValueOfTranslations[document.lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " < '" + statementCurrentPart.split(valueResource)[1].split(' is smaller than ')[1] + "'";
						}
					} else {
						finalStatement += " < '" + statementCurrentPart.split(valueResource)[1].split(' is smaller than ')[1] + "'";
					}
				} else if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'is' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'smaller' && statementCurrentPart.split(valueResource)[1].split(' ')[2] == 'greater' && statementCurrentPart.split(valueResource)[1].split(' ')[3] == 'than') {
					if (statementCurrentPart.split(valueResource)[1].split(' is greater than ')[1].includes(window.theValueOfTranslations[document.lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' is greater than ')[1].split(' ')[0] + ' ' + statementCurrentPart.split(valueResource)[1].split(' is greater than ')[1].split(' ')[1] + ' ' + statementCurrentPart.split(valueResource)[1].split(' is greater than ')[1].split(' ')[2] == window.theValueOfTranslations[document.lang]) {
							finalStatement += " > $('#" + statementCurrentPart.split(valueResource)[1].split(' is greater than ')[1].split(window.theValueOfTranslations[document.lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " > '" + statementCurrentPart.split(valueResource)[1].split(' is greater than ')[1] + "'";
						}
					} else {
						finalStatement += " > '" + statementCurrentPart.split(valueResource)[1].split(' is greater than ')[1] + "'";
					}
				}
			} else if (document.lang == 2) {
				var statementCurrentPart;
				if (k == 0) {
					statementCurrentPart = statementANDParts[k];
				} else {
					statementCurrentPart = ' ' + window.theValueOfTranslations[document.lang] + '' + statementANDParts[k];
					finalStatement += ' && ';
				}
				valueResource = statementCurrentPart.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
				finalStatement += "$('#" + valueResource + "').val()";
				console.log(statementCurrentPart);
				if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'est' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'supérieur' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'inférieure') {
					if (statementCurrentPart.split(valueResource)[1].split(' est ')[1].includes(window.theValueOfTranslations[document.lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' est ')[1].split(' ')[1] + ' ' + statementCurrentPart.split(valueResource)[1].split(' est ')[1].split(' ')[2] + ' ' + statementCurrentPart.split(valueResource)[1].split(' est ')[1].split(' ')[3] == window.theValueOfTranslations[document.lang]) {
							finalStatement += " == $('#" + statementCurrentPart.split(valueResource)[1].split(' est ')[1].split(window.theValueOfTranslations[document.lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " == '" + statementCurrentPart.split(valueResource)[1].split(' est ')[1] + "'";
						}
					} else {
						finalStatement += " == '" + statementCurrentPart.split(valueResource)[1].split(' est ')[1] + "'";
					}
				} else if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'est' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'supérieur' && statementCurrentPart.split(valueResource)[1].split(' ')[2] == 'inférieure' && statementCurrentPart.split(valueResource)[1].split(' ')[3] == 'à') {
					if (statementCurrentPart.split(valueResource)[1].split(' est inférieure à ')[1].includes(window.theValueOfTranslations[document.lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' est inférieure à ')[1].split(' ')[0] + ' ' + statementCurrentPart.split(valueResource)[1].split(' est inférieure à ')[1].split(' ')[1] + ' ' + statementCurrentPart.split(valueResource)[1].split(' est inférieure à ')[1].split(' ')[2] == window.theValueOfTranslations[document.lang]) {
							finalStatement += " < $('#" + statementCurrentPart.split(valueResource)[1].split(' est inférieure à ')[1].split(window.theValueOfTranslations[document.lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " < '" + statementCurrentPart.split(valueResource)[1].split(' est inférieure à ')[1] + "'";
						}
					} else {
						finalStatement += " < '" + statementCurrentPart.split(valueResource)[1].split(' est inférieure à ')[1] + "'";
					}
				} else if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'est' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'inférieure' && statementCurrentPart.split(valueResource)[1].split(' ')[2] == 'supérieur' && statementCurrentPart.split(valueResource)[1].split(' ')[3] == 'à') {
					if (statementCurrentPart.split(valueResource)[1].split(' est supérieur à ')[1].includes(window.theValueOfTranslations[document.lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' est supérieur à ')[1].split(' ')[0] + ' ' + statementCurrentPart.split(valueResource)[1].split(' est supérieur à ')[1].split(' ')[1] + ' ' + statementCurrentPart.split(valueResource)[1].split(' est supérieur à ')[1].split(' ')[2] == window.theValueOfTranslations[document.lang]) {
							finalStatement += " > $('#" + statementCurrentPart.split(valueResource)[1].split(' est supérieur à ')[1].split(window.theValueOfTranslations[document.lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " > '" + statementCurrentPart.split(valueResource)[1].split(' est supérieur à ')[1] + "'";
						}
					} else {
						finalStatement += " > '" + statementCurrentPart.split(valueResource)[1].split(' est supérieur à ')[1] + "'";
					}
				}
			} else if (document.lang == 3 || document.lang == 4) {
				var statementCurrentPart;
				if (k == 0) {
					statementCurrentPart = statementANDParts[k];
				} else {
					statementCurrentPart = ' ' + window.theValueOfTranslations[document.lang] + '' + statementANDParts[k];
					finalStatement += ' && ';
				}
				valueResource = statementCurrentPart.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
				finalStatement += "$('#" + valueResource + "').val()";
				if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'تساوى') {
					if (statementCurrentPart.split(valueResource)[1].split(' تساوى ')[1].includes(window.theValueOfTranslations[document.lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' تساوى ')[1].split(' ')[1] == window.theValueOfTranslations[document.lang]) {
							finalStatement += " == $('#" + statementCurrentPart.split(valueResource)[1].split(' تساوى ')[1].split(window.theValueOfTranslations[document.lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " == '" + statementCurrentPart.split(valueResource)[1].split(' تساوى ')[1] + "'";
						}
					} else {
						finalStatement += " == '" + statementCurrentPart.split(valueResource)[1].split(' تساوى ')[1] + "'";
					}
				} else if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'اصغر' && statementCurrentPart.split(valueResource)[1].split(' ')[1] != 'اكبر' && statementCurrentPart.split(valueResource)[1].split(' ')[2] == 'من') {
					if (statementCurrentPart.split(valueResource)[1].split(' اصغر من ')[1].includes(window.theValueOfTranslations[document.lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' اصغر من ')[1].split(' ')[0] == window.theValueOfTranslations[document.lang]) {
							finalStatement += " < $('#" + statementCurrentPart.split(valueResource)[1].split(' اصغر من ')[1].split(window.theValueOfTranslations[document.lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " < '" + statementCurrentPart.split(valueResource)[1].split(' اصغر من ')[1] + "'";
						}
					} else {
						finalStatement += " < '" + statementCurrentPart.split(valueResource)[1].split(' اصغر من ')[1] + "'";
					}
				} else if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'اكبر' && statementCurrentPart.split(valueResource)[1].split(' ')[1] != 'اصغر' && statementCurrentPart.split(valueResource)[1].split(' ')[2] == 'من') {
					if (statementCurrentPart.split(valueResource)[1].split(' اكبر من ')[1].includes(window.theValueOfTranslations[document.lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' اكبر من ')[1].split(' ')[0] == window.theValueOfTranslations[document.lang]) {
							finalStatement += " > $('#" + statementCurrentPart.split(valueResource)[1].split(' اكبر من ')[1].split(window.theValueOfTranslations[document.lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " > '" + statementCurrentPart.split(valueResource)[1].split(' اكبر من ')[1] + "'";
						}
					} else {
						finalStatement += " > '" + statementCurrentPart.split(valueResource)[1].split(' اكبر من ')[1] + "'";
					}
				}
			} else if (document.lang == 5) {
				valueResource = finalExpression.split(window.theValueOfTranslations[document.lang])[1].split(' ')[1];
				finalValue = $('#' + valueResource + '').val();
				finalExpression = finalExpression.replace(window.theValueOfTranslations[document.lang] + ' ' + valueResource, finalValue);
			}
		}
	}
	console.log(finalStatement);
	return finalStatement;
}
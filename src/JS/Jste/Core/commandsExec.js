//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------Commands Functions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.execute = function (elementName, command) {
	var commands = command.split(' &amp;&amp;&amp; ');
	var commandID;
	for (commandID = 0; commandID < commands.length; commandID++) {
		if (window.commandsFnTranslations('c52', 'E1', commands[commandID]).length > 1) {
			var ifStatement = window.commandsFnTranslations('c53', 'E1', commands[commandID]);
			var statementT0Command = window.commandsFnTranslations('c54', 'E1', commands[commandID]);
			if (window.commandsFnTranslations('c1', 'E1', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E1', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E1', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E1', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E1', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E1', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E1', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E1', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E1', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E1', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E1', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E1', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E1', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E1', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E1', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E1', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E1', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E1', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E1', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E2', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E2', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E2', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E2', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E2', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E2', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E2', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E2', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E2', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E2', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E2', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E2', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E2', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E2', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E2', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E2', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E2', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E2', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E2', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E3', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E3', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E3', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E3', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E3', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E3', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E3', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E3', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E3', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E3', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E3', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E3', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E3', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E3', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E3', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E3', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E3', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E3', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E3', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E4', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E4', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E4', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E4', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E4', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E4', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E4', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E4', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E4', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E4', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E4', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E4', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E4', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E4', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E4', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E4', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E4', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E4', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E4', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E5', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E5', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E5', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E5', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E5', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E5', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E5', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E5', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E5', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E5', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E5', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E5', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E5', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E5', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E5', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E5', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E5', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E5', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E5', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E6', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E6', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E6', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E6', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E6', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E6', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E6', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E6', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E6', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E6', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E6', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E6', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E6', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E6', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E6', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E6', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E6', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E6', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E6', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E7', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E7', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E7', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E7', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E7', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E7', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E7', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E7', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E7', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E7', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E7', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E7', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E7', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E7', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E7', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E7', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E7', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E7', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E7', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E8', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E8', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E8', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E8', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E8', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E8', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E8', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E8', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E8', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E8', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E8', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E8', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E8', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E8', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E8', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E8', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E8', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E8', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E8', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E9', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E9', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E9', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E9', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E9', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E9', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E9', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E9', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E9', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E9', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E9', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E9', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E9', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E9', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E9', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E9', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E9', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E9', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E9', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E10', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E10', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E10', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E10', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E10', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E10', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E10', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E10', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E10', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E10', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E10', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E10', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E10', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E10', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E10', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E10', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E10', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E10', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E10', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E11', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E11', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E11', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E11', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E11', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E11', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E11', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E11', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E11', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E11', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E11', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E11', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E11', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E11', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E11', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E11', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E11', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E11', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E11', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E12', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E12', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E12', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E12', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E12', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E12', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E12', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E12', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E12', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E12', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E12', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E12', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E12', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E12', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E12', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E12', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E12', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E12', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E12', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E13', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E13', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E13', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E13', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E13', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E13', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E13', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E13', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E13', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E13', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E13', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E13', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E13', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E13', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E13', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E13', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E13', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E13', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E13', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E14', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E14', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E14', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E14', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E14', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E14', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E14', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E14', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E14', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E14', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E14', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E14', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E14', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E14', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E14', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E14', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E14', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E14', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E14', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E15', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E15', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E15', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E15', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E15', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E15', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E15', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E15', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E15', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E15', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E15', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E15', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E15', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E15', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E15', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E15', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E15', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E15', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E15', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E16', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E16', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E16', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E16', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E16', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E16', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E16', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E16', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E16', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E16', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E16', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E16', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E16', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E16', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E16', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E16', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E16', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E16', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E16', 'T3'));
				}
			} else if (window.commandsFnTranslations('c1', 'E17', statementT0Command).length > 1) {
				annyang.start();
				var voiceCommand = window.commandsFnTranslations('c40', 'E17', statementT0Command);
				if (window.commandsFnTranslations('c2q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E17', 'T3'));
				} else if (window.commandsFnTranslations('c5q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c5r')) {
					eval(window.evaluateScript('S2', 'E17', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E17', 'T3'));
				} else if (window.commandsFnTranslations('c2q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E17', 'T3'));
				} else if (window.commandsFnTranslations('c9q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E17', 'T3'));
				} else if (window.commandsFnTranslations('c13q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E17', 'T3'));
				} else if (window.commandsFnTranslations('c18q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E17', 'T3'));
				} else if (window.commandsFnTranslations('c23q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E17', 'T3'));
				} else if (window.commandsFnTranslations('c27q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E17', 'T3'));
				}
			}
		} else if (window.commandsFnTranslations('c34', 'E1', commands[commandID]).length > 1) {
			var statementT0Command = window.commandsFnTranslations('c35', 'E1', commands[commandID]);
			var timeoutPeriod = window.commandsFnTranslations('c36', 'E1', commands[commandID]);
			if (window.commandsFnTranslations('c1', 'E1', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E1', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E1', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E1', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E1', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E1', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E1', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E1', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E1', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E1', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E1', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E1', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E1', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E1', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E1', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E1', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E1', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E1', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E1', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E2', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E2', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E2', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E2', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E2', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E2', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E2', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E2', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E2', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E2', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E2', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E2', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E2', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E2', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E2', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E2', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E2', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E2', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E2', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E3', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E3', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E3', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E3', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E3', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E3', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E3', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E3', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E3', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E3', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E3', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E3', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E3', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E3', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E3', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E3', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E3', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E3', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E3', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E4', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E4', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E4', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E4', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E4', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E4', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E4', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E4', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E4', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E4', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E4', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E4', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E4', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E4', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E4', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E4', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E4', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E4', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E4', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E5', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E5', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E5', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E5', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E5', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E5', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E5', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E5', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E5', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E5', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E5', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E5', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E5', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E5', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E5', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E5', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E5', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E5', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E5', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E6', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E6', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E6', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E6', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E6', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E6', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E6', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E6', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E6', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E6', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E6', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E6', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E6', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E6', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E6', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E6', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E6', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E6', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E6', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E7', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E7', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E7', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E7', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E7', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E7', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E7', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E7', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E7', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E7', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E7', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E7', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E7', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E7', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E7', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E7', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E7', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E7', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E7', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E8', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E8', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E8', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E8', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E8', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E8', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E8', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E8', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E8', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E8', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E8', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E8', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E8', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E8', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E8', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E8', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E8', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E8', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E8', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E9', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E9', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E9', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E9', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E9', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E9', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E9', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E9', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E9', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E9', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E9', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E9', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E9', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E9', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E9', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E9', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E9', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E9', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E9', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E10', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E10', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E10', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E10', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E10', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E10', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E10', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E10', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E10', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E10', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E10', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E10', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E10', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E10', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E10', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E10', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E10', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E10', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E10', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E11', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E11', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E11', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E11', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E11', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E11', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E11', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E11', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E11', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E11', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E11', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E11', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E11', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E11', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E11', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E11', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E11', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E11', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E11', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E12', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E12', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E12', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E12', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E12', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E12', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E12', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E12', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E12', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E12', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E12', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E12', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E12', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E12', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E12', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E12', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E12', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E12', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E12', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E13', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E13', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E13', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E13', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E13', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E13', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E13', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E13', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E13', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E13', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E13', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E13', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E13', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E13', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E13', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E13', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E13', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E13', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E13', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E14', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E14', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E14', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E14', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E14', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E14', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E14', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E14', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E14', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E14', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E14', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E14', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E14', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E14', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E14', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E14', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E14', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E14', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E14', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E15', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E15', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E15', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E15', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E15', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E15', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E15', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E15', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E15', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E15', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E15', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E15', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E15', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E15', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E15', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E15', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E15', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E15', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E15', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E16', statementT0Command).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E16', statementT0Command) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E16', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E16', statementT0Command) == window.commandsFnTranslations('c5r'), statementT0Command.includes(window.commandsFnTranslations('c44r')) || statementT0Command.includes(window.commandsFnTranslations('c45r')) || statementT0Command.includes(window.commandsFnTranslations('c46r')) || statementT0Command.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E16', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E16', statementT0Command) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E16', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E16', statementT0Command) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E16', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E16', statementT0Command) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E16', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E16', statementT0Command) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E16', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E16', statementT0Command) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E16', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E16', statementT0Command) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E16', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E16', statementT0Command) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E16', 'T1'));
				}
			} else if (window.commandsFnTranslations('c1', 'E17', statementT0Command).length > 1) {
				annyang.start();
				var voiceCommand = window.commandsFnTranslations('c40', 'E17', statementT0Command);
				if (window.commandsFnTranslations('c2q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E17', 'T1'));
				} else if (window.commandsFnTranslations('c5q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c5r')) {
					eval(window.evaluateScript('S2', 'E17', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E17', 'T1'));
				} else if (window.commandsFnTranslations('c2q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E17', 'T1'));
				} else if (window.commandsFnTranslations('c9q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E17', 'T1'));
				} else if (window.commandsFnTranslations('c13q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E17', 'T1'));
				} else if (window.commandsFnTranslations('c18q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E17', 'T1'));
				} else if (window.commandsFnTranslations('c23q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E17', 'T1'));
				} else if (window.commandsFnTranslations('c27q', 'E17', statementT0Command, voiceCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E17', 'T1'));
				}
			}
		} else if (window.commandsFnTranslations('c37', 'E1', commands[commandID]).length > 1) {
			var intervalCommand = window.commandsFnTranslations('c38', 'E1', commands[commandID]);
			var intervalPeriod = window.commandsFnTranslations('c39', 'E1', commands[commandID]);
			if (window.commandsFnTranslations('c1', 'E1', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E1', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E1', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E1', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E1', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E1', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E1', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E1', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E1', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E1', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E1', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E1', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E1', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E1', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E1', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E1', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E1', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E1', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E1', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E2', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E2', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E2', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E2', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E2', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E2', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E2', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E2', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E2', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E2', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E2', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E2', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E2', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E2', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E2', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E2', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E2', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E2', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E2', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E3', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E3', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E3', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E3', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E3', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E3', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E3', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E3', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E3', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E3', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E3', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E3', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E3', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E3', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E3', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E3', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E3', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E3', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E3', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E4', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E4', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E4', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E4', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E4', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E4', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E4', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E4', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E4', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E4', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E4', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E4', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E4', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E4', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E4', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E4', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E4', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E4', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E4', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E5', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E5', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E5', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E5', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E5', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E5', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E5', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E5', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E5', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E5', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E5', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E5', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E5', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E5', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E5', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E5', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E5', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E5', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E5', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E6', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E6', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E6', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E6', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E6', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E6', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E6', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E6', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E6', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E6', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E6', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E6', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E6', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E6', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E6', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E6', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E6', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E6', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E6', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E7', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E7', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E7', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E7', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E7', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E7', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E7', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E7', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E7', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E7', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E7', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E7', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E7', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E7', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E7', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E7', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E7', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E7', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E7', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E8', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E8', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E8', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E8', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E8', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E8', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E8', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E8', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E8', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E8', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E8', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E8', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E8', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E8', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E8', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E8', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E8', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E8', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E8', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E9', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E9', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E9', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E9', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E9', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E9', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E9', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E9', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E9', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E9', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E9', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E9', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E9', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E9', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E9', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E9', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E9', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E9', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E9', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E10', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E10', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E10', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E10', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E10', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E10', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E10', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E10', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E10', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E10', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E10', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E10', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E10', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E10', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E10', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E10', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E10', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E10', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E10', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E11', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E11', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E11', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E11', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E11', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E11', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E11', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E11', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E11', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E11', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E11', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E11', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E11', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E11', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E11', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E11', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E11', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E11', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E11', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E12', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E12', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E12', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E12', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E12', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E12', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E12', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E12', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E12', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E12', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E12', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E12', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E12', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E12', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E12', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E12', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E12', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E12', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E12', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E13', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E13', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E13', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E13', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E13', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E13', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E13', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E13', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E13', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E13', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E13', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E13', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E13', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E13', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E13', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E13', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E13', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E13', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E13', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E14', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E14', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E14', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E14', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E14', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E14', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E14', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E14', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E14', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E14', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E14', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E14', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E14', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E14', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E14', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E14', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E14', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E14', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E14', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E15', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E15', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E15', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E15', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E15', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E15', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E15', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E15', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E15', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E15', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E15', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E15', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E15', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E15', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E15', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E15', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E15', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E15', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E15', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E16', intervalCommand).length > 1) {
				if (window.commandsFnTranslations('c2q', 'E16', intervalCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E16', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E16', intervalCommand) == window.commandsFnTranslations('c5r'), intervalCommand.includes(window.commandsFnTranslations('c44r')) || intervalCommand.includes(window.commandsFnTranslations('c45r')) || intervalCommand.includes(window.commandsFnTranslations('c46r')) || intervalCommand.includes(window.commandsFnTranslations('c47r'))) {
					eval(window.evaluateScript('S2', 'E16', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E16', intervalCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E16', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E16', intervalCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E16', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E16', intervalCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E16', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E16', intervalCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E16', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E16', intervalCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E16', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E16', intervalCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E16', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E16', intervalCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E16', 'T2'));
				}
			} else if (window.commandsFnTranslations('c1', 'E17', intervalCommand).length > 1) {
				annyang.start();
				var voiceCommand = window.commandsFnTranslations('c40', 'E17', intervalCommand);
				if (window.commandsFnTranslations('c2q', 'E17', intervalCommand, voiceCommand) == window.commandsFnTranslations('c2ruA')) {
					eval(window.evaluateScript('S1', 'E17', 'T2'));
				} else if (window.commandsFnTranslations('c5q', 'E17', intervalCommand, voiceCommand) == window.commandsFnTranslations('c5r')) {
					eval(window.evaluateScript('S2', 'E17', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E17', intervalCommand, voiceCommand) == window.commandsFnTranslations('c2ruB')) {
					eval(window.evaluateScript('S3', 'E17', 'T2'));
				} else if (window.commandsFnTranslations('c2q', 'E17', intervalCommand, voiceCommand) == window.commandsFnTranslations('c2ruC')) {
					eval(window.evaluateScript('S4', 'E17', 'T2'));
				} else if (window.commandsFnTranslations('c9q', 'E17', intervalCommand, voiceCommand) == window.commandsFnTranslations('c9r')) {
					eval(window.evaluateScript('S5', 'E17', 'T2'));
				} else if (window.commandsFnTranslations('c13q', 'E17', intervalCommand, voiceCommand) == window.commandsFnTranslations('c13r')) {
					eval(window.evaluateScript('S6', 'E17', 'T2'));
				} else if (window.commandsFnTranslations('c18q', 'E17', intervalCommand, voiceCommand) == window.commandsFnTranslations('c18r')) {
					eval(window.evaluateScript('S7', 'E17', 'T2'));
				} else if (window.commandsFnTranslations('c23q', 'E17', intervalCommand, voiceCommand) == window.commandsFnTranslations('c23r')) {
					eval(window.evaluateScript('S8', 'E17', 'T2'));
				} else if (window.commandsFnTranslations('c27q', 'E17', intervalCommand, voiceCommand) == window.commandsFnTranslations('c27r')) {
					eval(window.evaluateScript('S9', 'E17', 'T2'));
				}
			}
		} else if (window.commandsFnTranslations('c1', 'E1', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E1', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E1', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E1', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E1', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E1', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E1', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E1', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E1', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E1', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E1', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E1', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E1', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E1', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E1', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E1', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E1', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E1', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E1', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E2', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E2', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E2', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E2', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E2', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E2', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E2', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E2', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E2', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E2', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E2', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E2', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E2', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E2', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E2', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E2', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E2', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E2', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E2', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E3', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E3', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E3', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E3', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E3', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E3', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E3', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E3', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E3', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E3', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E3', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E3', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E3', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E3', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E3', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E3', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E3', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E3', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E3', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E4', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E4', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E4', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E4', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E4', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E4', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E4', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E4', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E4', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E4', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E4', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E4', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E4', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E4', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E4', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E4', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E4', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E4', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E4', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E5', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E5', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E5', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E5', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E5', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E5', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E5', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E5', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E5', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E5', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E5', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E5', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E5', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E5', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E5', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E5', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E5', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E5', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E5', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E6', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E6', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E6', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E6', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E6', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E6', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E6', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E6', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E6', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E6', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E6', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E6', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E6', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E6', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E6', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E6', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E6', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E6', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E6', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E7', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E7', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E7', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E7', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E7', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E7', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E7', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E7', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E7', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E7', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E7', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E7', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E7', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E7', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E7', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E7', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E7', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E7', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E7', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E8', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E8', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E8', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E8', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E8', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E8', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E8', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E8', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E8', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E8', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E8', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E8', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E8', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E8', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E8', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E8', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E8', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E8', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E8', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E9', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E9', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E9', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E9', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E9', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E9', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E9', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E9', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E9', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E9', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E9', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E9', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E9', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E9', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E9', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E9', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E9', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E9', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E9', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E10', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E10', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E10', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E10', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E10', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E10', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E10', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E10', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E10', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E10', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E10', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E10', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E10', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E10', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E10', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E10', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E10', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E10', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E10', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E11', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E11', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E11', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E11', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E11', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E11', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E11', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E11', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E11', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E11', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E11', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E11', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E11', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E11', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E11', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E11', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E11', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E11', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E11', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E12', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E12', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E12', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E12', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E12', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E12', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E12', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E12', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E12', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E12', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E12', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E12', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E12', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E12', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E12', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E12', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E12', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E12', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E12', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E13', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E13', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E13', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E13', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E13', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E13', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E13', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E13', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E13', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E13', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E13', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E13', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E13', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E13', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E13', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E13', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E13', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E13', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E13', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E14', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E14', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E14', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E14', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E14', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E14', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E14', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E14', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E14', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E14', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E14', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E14', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E14', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E14', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E14', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E14', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E14', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E14', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E14', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E15', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E15', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E15', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E15', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E15', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E15', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E15', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E15', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E15', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E15', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E15', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E15', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E15', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E15', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E15', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E15', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E15', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E15', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E15', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E16', commands[commandID]).length > 1) {
			if (window.commandsFnTranslations('c2q', 'E16', commands[commandID]) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E16', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E16', commands[commandID]) == window.commandsFnTranslations('c5r'), commands[commandID].includes(window.commandsFnTranslations('c44r')) || commands[commandID].includes(window.commandsFnTranslations('c45r')) || commands[commandID].includes(window.commandsFnTranslations('c46r')) || commands[commandID].includes(window.commandsFnTranslations('c47r'))) {
				eval(window.evaluateScript('S2', 'E16', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E16', commands[commandID]) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E16', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E16', commands[commandID]) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E16', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E16', commands[commandID]) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E16', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E16', commands[commandID]) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E16', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E16', commands[commandID]) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E16', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E16', commands[commandID]) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E16', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E16', commands[commandID]) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E16', 'T0'));
			}
		} else if (window.commandsFnTranslations('c1', 'E17', commands[commandID]).length > 1) {
			annyang.start();
			var voiceCommand = window.commandsFnTranslations('c40', 'E17', commands[commandID]);
			if (window.commandsFnTranslations('c2q', 'E17', commands[commandID], voiceCommand) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E17', 'T0'));
			} else if (window.commandsFnTranslations('c5q', 'E17', commands[commandID], voiceCommand) == window.commandsFnTranslations('c5r')) {
				eval(window.evaluateScript('S2', 'E17', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E17', commands[commandID], voiceCommand) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E17', 'T0'));
			} else if (window.commandsFnTranslations('c2q', 'E17', commands[commandID], voiceCommand) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E17', 'T0'));
			} else if (window.commandsFnTranslations('c9q', 'E17', commands[commandID], voiceCommand) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E17', 'T0'));
			} else if (window.commandsFnTranslations('c13q', 'E17', commands[commandID], voiceCommand) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E17', 'T0'));
			} else if (window.commandsFnTranslations('c18q', 'E17', commands[commandID], voiceCommand) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E17', 'T0'));
			} else if (window.commandsFnTranslations('c23q', 'E17', commands[commandID], voiceCommand) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E17', 'T0'));
			} else if (window.commandsFnTranslations('c27q', 'E17', commands[commandID], voiceCommand) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E17', 'T0'));
			}
		}
	}
}
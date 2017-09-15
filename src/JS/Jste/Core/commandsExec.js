/*!
 * Commands Evaluation
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-15
 */
function getTheEventCode(command) {
	for (var i = 1; i <= 19; i++) {
		if (command.startsWith(document['E' + i])) {
			return 'E' + i;
		}
	}
	return 'E0';
}
window.execute = async function (elementName, command, execute) {
	var commands = command.split(' &amp;&amp;&amp; ');
	var operationPrefix = 'eval(';
	var operationSuffix = ');';
	if (execute == false) {
		operationPrefix = '(';
		operationSuffix = ')';
	}
	for (var commandID = 0; commandID < commands.length; commandID++) {
		var commandType;
		var pureCommand;
		var timeoutPeriod;
		var intervalPeriod;
		var codePrefix = '';
		var codeSuffix = '';
		var codeParam = '';
		var typeOptions = [];
		var commandInfo = [];
		commandInfo.elementName = elementName;
		if (window.commandsFnTranslations('c52', 'E1', commands[commandID]).length > 1) {
			commandType = 'T3';
			var alternativeOptionsArray = commands[commandID].split(' ' + window.elseTranslations[document.lang] + ' ');
			await window.evaluateStatement(alternativeOptionsArray[0]).then(function (condition) {
				typeOptions.primaryCondition = condition;
			});
			pureCommand = window.commandsFnTranslations('c54', 'E1', alternativeOptionsArray[0]);
			alternativeOptionsArray.shift();
			if (alternativeOptionsArray.length > 0) {
				typeOptions.elementName = elementName;
				typeOptions.secondryConditions = [];
				for (var optionID = 0; optionID < alternativeOptionsArray.length; optionID++) {
					typeOptions.secondryConditions[optionID] = [];
					await window.evaluateStatement(alternativeOptionsArray[optionID]).then(function (condition) {
						typeOptions.secondryConditions[optionID].condition = condition;
					});
					await window.execute(typeOptions.elementName, window.commandsFnTranslations('c54', 'E1', alternativeOptionsArray[optionID]), false).then(function (conditionalCommand) {
						typeOptions.secondryConditions[optionID].command = conditionalCommand;
					});
				}
			}
		} else if (window.commandsFnTranslations('c34', 'E1', commands[commandID]).length > 1) {
			commandType = 'T1';
			pureCommand = window.commandsFnTranslations('c35', 'E1', commands[commandID]);
			timeoutPeriod = window.commandsFnTranslations('c36', 'E1', commands[commandID]);
			commandInfo.timeoutPeriod = timeoutPeriod;
		} else if (window.commandsFnTranslations('c37', 'E1', commands[commandID]).length > 1) {
			commandType = 'T2';
			intervalCommand = window.commandsFnTranslations('c38', 'E1', commands[commandID]);
			intervalPeriod = window.commandsFnTranslations('c39', 'E1', commands[commandID]);
			commandInfo.intervalPeriod = intervalPeriod;
		} else if (commands[commandID].startsWith(document[getTheEventCode(commands[commandID])])) {
			commandType = 'T0';
			pureCommand = commands[commandID];
		}
		if (document[getTheEventCode(pureCommand)] == 'E17') {
			codePrefix = "if (window.isChrome) { \
				annyang.start(); \
				var voiceCommand = window.commandsFnTranslations('c40', 'E17', pureCommand);";
			codeSuffix = "};";
			codeParam = "";
		}
		if (commandType == 'T3') {
			codePrefix = "";
			codeSuffix = "";
			codeParam = ", typeOptions";
		}
		commandInfo.pureCommand = pureCommand;
			var result = eval("if (pureCommand.startsWith(document[getTheEventCode(pureCommand)])) { \
			" + codePrefix + " \
			if (window.commandsFnTranslations('c2q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c2ruA')) { \
				" + operationPrefix + "window.evaluateScript('S1', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c5q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c5r'), pureCommand.includes(window.commandsFnTranslations('c44r')) || pureCommand.includes(window.commandsFnTranslations('c45r')) || pureCommand.includes(window.commandsFnTranslations('c46r')) || pureCommand.includes(window.commandsFnTranslations('c47r'))) { \
				" + operationPrefix + "window.evaluateScript('S2', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c92q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c92r'), pureCommand.includes(window.commandsFnTranslations('c91r')) || pureCommand.includes(window.commandsFnTranslations('c93r'))) { \
				" + operationPrefix + "window.evaluateScript('S18', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c94q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c94r')) { \
				" + operationPrefix + "window.evaluateScript('S19', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c95q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c95r')) { \
				" + operationPrefix + "window.evaluateScript('S20', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c96q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c96r')) { \
				" + operationPrefix + "window.evaluateScript('S21', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c97q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c96r')) { \
				" + operationPrefix + "window.evaluateScript('S22', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c98q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c96r')) { \
				" + operationPrefix + "window.evaluateScript('S23', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c99q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c96r')) { \
				" + operationPrefix + "window.evaluateScript('S24', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c100q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c96r')) { \
				" + operationPrefix + "window.evaluateScript('S25', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c101q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c96r')) { \
				" + operationPrefix + "window.evaluateScript('S26', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c102q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c96r')) { \
				" + operationPrefix + "window.evaluateScript('S27', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c2q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c2ruB')) { \
				" + operationPrefix + "window.evaluateScript('S3', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c2q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c2ruC')) { \
				" + operationPrefix + "window.evaluateScript('S4', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c9q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c9r')) { \
				" + operationPrefix + "window.evaluateScript('S5', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c13q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c13r')) { \
				" + operationPrefix + "window.evaluateScript('S6', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c55q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c55r')) { \
				" + operationPrefix + "window.evaluateScript('S10', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c59q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c59r')) { \
				" + operationPrefix + "window.evaluateScript('S11', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c64q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c64r')) { \
				" + operationPrefix + "window.evaluateScript('S12', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c68q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c68r')) { \
				" + operationPrefix + "window.evaluateScript('S13', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c73q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c73r')) { \
				" + operationPrefix + "window.evaluateScript('S14', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c77q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c77r')) { \
				" + operationPrefix + "window.evaluateScript('S15', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c82q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c82r')) { \
				" + operationPrefix + "window.evaluateScript('S16', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c86q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c86r')) { \
				" + operationPrefix + "window.evaluateScript('S17', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c18q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c18r')) { \
				" + operationPrefix + "window.evaluateScript('S7', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c23q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c23r')) { \
				" + operationPrefix + "window.evaluateScript('S8', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} else if (window.commandsFnTranslations('c27q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c27r')) { \
				" + operationPrefix + "window.evaluateScript('S9', getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			} \
			" + codeSuffix + "};");
	}
	return result;
};
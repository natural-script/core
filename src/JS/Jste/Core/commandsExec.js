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
					if (alternativeOptionsArray[optionID].includes(window.inTheCaseThatTranslations[document.lang])) {
						await window.evaluateStatement(alternativeOptionsArray[optionID]).then(function (condition) {
							typeOptions.secondryConditions[optionID].condition = condition;
						});
						await window.execute(typeOptions.elementName, window.commandsFnTranslations('c54', 'E1', alternativeOptionsArray[optionID]), false).then(function (conditionalCommand) {
							typeOptions.secondryConditions[optionID].command = conditionalCommand;
						});
					} else {
						typeOptions.secondryConditions[optionID].condition = 'true';
						await window.execute(typeOptions.elementName, alternativeOptionsArray[optionID], false).then(function (conditionalCommand) {
							typeOptions.secondryConditions[optionID].command = conditionalCommand;
						});
					}
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
				" + operationPrefix + "window.evaluateScript(window.analyzeCommand(pureCommand.split(new RegExp('^' + document[getTheEventCode(pureCommand)], 'gimy'))[1].split(new RegExp(window.inTheCaseThatTranslations + '.*?$', 'gimy'))[0]), getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")" + operationSuffix + " \
			" + codeSuffix + "};");
	}
	return result;
};
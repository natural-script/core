/*!
 * Commands Evaluation
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-03-16
 */
var eventSplit;

function getTheEventCode(command) {
	for (var i = 1; i <= 19; i++) {
		if (command.startsWith(document['E' + i])) {
			eventSplit = ".split(new RegExp('^' + document[getTheEventCode(pureCommand)], 'gimy'))[1]";
			return 'E' + i;
		}
	}
	eventSplit = '';
	return 'E0';
}
window.execute = async function (elementName, command, execute) {
	var commands = command.split(' &amp;&amp;&amp; ');
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
		if (window.commandsFnTranslations('c52', commands[commandID]).length > 1) {
			commandType = 'T3';
			var alternativeOptionsArray = commands[commandID].split(XRegExp(' ' + getTranslations("else") + ' ', 'gmi'));
			await window.evaluateStatement(alternativeOptionsArray[0]).then(function (condition) {
				typeOptions.primaryCondition = condition;
			});
			pureCommand = window.commandsFnTranslations('c54', alternativeOptionsArray[0]);
			alternativeOptionsArray.shift();
			if (alternativeOptionsArray.length > 0) {
				typeOptions.elementName = elementName;
				typeOptions.secondryConditions = [];
				for (var optionID = 0; optionID < alternativeOptionsArray.length; optionID++) {
					typeOptions.secondryConditions[optionID] = [];
					if (XRegExp('' + getTranslations("inTheCaseThat") + '', 'gmi').test(alternativeOptionsArray[optionID])) {
						await window.evaluateStatement(alternativeOptionsArray[optionID]).then(function (condition) {
							typeOptions.secondryConditions[optionID].condition = condition;
						});
						await window.execute(typeOptions.elementName, window.commandsFnTranslations('c54', alternativeOptionsArray[optionID]), false).then(function (conditionalCommand) {
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
		} else if (window.commandsFnTranslations('c34', commands[commandID]).length > 1) {
			commandType = 'T1';
			pureCommand = window.commandsFnTranslations('c35', commands[commandID]);
			timeoutPeriod = window.commandsFnTranslations('c36', commands[commandID]);
			commandInfo.timeoutPeriod = timeoutPeriod;
		} else if (window.commandsFnTranslations('c37', commands[commandID]).length > 1) {
			commandType = 'T2';
			intervalCommand = window.commandsFnTranslations('c38', commands[commandID]);
			intervalPeriod = window.commandsFnTranslations('c39', commands[commandID]);
			commandInfo.intervalPeriod = intervalPeriod;
		} else if (commands[commandID].startsWith(document[getTheEventCode(commands[commandID])])) {
			commandType = 'T0';
			pureCommand = commands[commandID];
		}
		if (document[getTheEventCode(pureCommand)] == 'E17') {
			codePrefix = "if (Modernizr.speechrecognition) { \
				annyang.start(); \
				var voiceCommand = window.commandsFnTranslations('c40', pureCommand);";
			codeSuffix = "};";
			codeParam = "";
		}
		if (commandType == 'T3') {
			codePrefix = "";
			codeSuffix = "";
			codeParam = ", typeOptions";
		}
		commandInfo.pureCommand = pureCommand;
		var commandEvaluation = eval("window.evaluateScript(window.analyzeCommand(pureCommand" + eventSplit + ".split(new RegExp(getTranslations('inTheCaseThat') + '.*?$', 'gimy'))[0]), getTheEventCode(pureCommand), commandType, commandInfo" + codeParam + ")");
		if (execute == false) {
			return commandEvaluation;
		} else {
			eval("if (pureCommand.startsWith(document[getTheEventCode(pureCommand)])) { \
			" + codePrefix + " \
				" + commandEvaluation + " \
			" + codeSuffix + "};");

		}
	}
};
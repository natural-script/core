/*!
 * Commands Evaluation
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-10
 */
function getTheEventCode(command) {
	for (var i = 1; i <= 19; i++) {
		if (command.startsWith(document['E' + i])) {
			if (i != 17) {
				return 'E' + i;
			}
		}
	}
}
window.execute = function (elementName, command) {
	var commands = command.split(' &amp;&amp;&amp; ');
	var commandID;
	var commandType;
	var pureCommand;
	var timeoutPeriod;
	var intervalPeriod;
	for (commandID = 0; commandID < commands.length; commandID++) {
		if (window.commandsFnTranslations('c52', 'E1', commands[commandID]).length > 1) {
			commandType = 'T3';
			document.ifStatement = window.commandsFnTranslations('c53', 'E1', commands[commandID]);
			pureCommand = window.commandsFnTranslations('c54', 'E1', commands[commandID]);
		} else if (window.commandsFnTranslations('c34', 'E1', commands[commandID]).length > 1) {
			commandType = 'T1';
			pureCommand = window.commandsFnTranslations('c35', 'E1', commands[commandID]);
			timeoutPeriod = window.commandsFnTranslations('c36', 'E1', commands[commandID]);
		} else if (window.commandsFnTranslations('c37', 'E1', commands[commandID]).length > 1) {
			commandType = 'T2';
			intervalCommand = window.commandsFnTranslations('c38', 'E1', commands[commandID]);
			intervalPeriod = window.commandsFnTranslations('c39', 'E1', commands[commandID]);
		} else if (commands[commandID].startsWith(document[getTheEventCode(commands[commandID])])) {
			commandType = 'T0';
			pureCommand = commands[commandID];
		}
		if (pureCommand.startsWith(document[getTheEventCode(pureCommand)])) {
			if (window.commandsFnTranslations('c2q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c5q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c5r'), pureCommand.includes(window.commandsFnTranslations('c44r')) || pureCommand.includes(window.commandsFnTranslations('c45r')) || pureCommand.includes(window.commandsFnTranslations('c46r')) || pureCommand.includes(window.commandsFnTranslations('c47r')) || pureCommand.includes(window.commandsFnTranslations('c91r'))) {
				eval(window.evaluateScript('S2', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c2q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c2q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c9q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c13q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c55q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c55r')) {
				eval(window.evaluateScript('S10', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c59q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c59r')) {
				eval(window.evaluateScript('S11', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c64q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c64r')) {
				eval(window.evaluateScript('S12', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c68q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c68r')) {
				eval(window.evaluateScript('S13', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c73q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c73r')) {
				eval(window.evaluateScript('S14', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c77q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c77r')) {
				eval(window.evaluateScript('S15', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c82q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c82r')) {
				eval(window.evaluateScript('S16', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c86q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c86r')) {
				eval(window.evaluateScript('S17', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c18q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c23q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', getTheEventCode(pureCommand), commandType));
			} else if (window.commandsFnTranslations('c27q', getTheEventCode(pureCommand), pureCommand) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', getTheEventCode(pureCommand), commandType));
			}
		} else if (pureCommand.startsWith(document.E17)) {
			annyang.start();
			var voiceCommand = window.commandsFnTranslations('c40', 'E17', pureCommand);
			if (window.commandsFnTranslations('c2q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c2ruA')) {
				eval(window.evaluateScript('S1', 'E17', commandType));
			} else if (window.commandsFnTranslations('c5q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c5r')) {
				eval(window.evaluateScript('S2', 'E17', commandType));
			} else if (window.commandsFnTranslations('c2q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c2ruB')) {
				eval(window.evaluateScript('S3', 'E17', commandType));
			} else if (window.commandsFnTranslations('c2q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c2ruC')) {
				eval(window.evaluateScript('S4', 'E17', commandType));
			} else if (window.commandsFnTranslations('c9q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c9r')) {
				eval(window.evaluateScript('S5', 'E17', commandType));
			} else if (window.commandsFnTranslations('c13q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c13r')) {
				eval(window.evaluateScript('S6', 'E17', commandType));
			} else if (window.commandsFnTranslations('c55q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c55r')) {
				eval(window.evaluateScript('S10', 'E17', commandType));
			} else if (window.commandsFnTranslations('c59q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c59r')) {
				eval(window.evaluateScript('S11', 'E17', commandType));
			} else if (window.commandsFnTranslations('c64q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c64r')) {
				eval(window.evaluateScript('S12', 'E17', commandType));
			} else if (window.commandsFnTranslations('c68q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c68r')) {
				eval(window.evaluateScript('S13', 'E17', commandType));
			} else if (window.commandsFnTranslations('c73q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c73r')) {
				eval(window.evaluateScript('S14', 'E17', commandType));
			} else if (window.commandsFnTranslations('c77q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c77r')) {
				eval(window.evaluateScript('S15', 'E17', commandType));
			} else if (window.commandsFnTranslations('c82q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c82r')) {
				eval(window.evaluateScript('S16', 'E17', commandType));
			} else if (window.commandsFnTranslations('c86q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c86r')) {
				eval(window.evaluateScript('S17', 'E17', commandType));
			} else if (window.commandsFnTranslations('c18q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c18r')) {
				eval(window.evaluateScript('S7', 'E17', commandType));
			} else if (window.commandsFnTranslations('c23q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c23r')) {
				eval(window.evaluateScript('S8', 'E17', commandType));
			} else if (window.commandsFnTranslations('c27q', 'E17', pureCommand, voiceCommand) == window.commandsFnTranslations('c27r')) {
				eval(window.evaluateScript('S9', 'E17', commandType));
			}
		}
	}
};
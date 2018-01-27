var bot = new rivescript({
	utf8: true
});
bot.unicodePunctuation = new RegExp(/[]/g);
bot.loadFile("../Translations/commands.rive");
window.analyzeCommand = function(commandRaw) {
	bot.sortReplies();
	var command = bot.reply("local-user", commandRaw).split(' ==> ');
	var commandAnalysed = {};
	for (var i = 0; i < command.length; i++) {
		commandAnalysed[/^(.*?):/gmiy.exec(command[i])[1]] = /^.*?: (.*)/gmiy.exec(command[i])[1];
	}
	var loops = [];
	for (var i = 0; i < Object.keys(commandAnalysed).length; i++) {
		if (/^IS_GROUPED: .* SEPARATOR: .* REGEX: .* ELEMENTS: .* DATA: .*/gmiy.test(commandAnalysed[Object.keys(commandAnalysed)[i]])) {
			var loop_data = /^IS_GROUPED: (.*) SEPARATOR: (.*) REGEX: (.*) ELEMENTS: (.*) DATA: (.*)/gmiy.exec(commandAnalysed[Object.keys(commandAnalysed)[i]]);
			var loop_name = Object.keys(commandAnalysed)[i];
			loops.push(loop_name);
			commandAnalysed[loop_name] = {};
			commandAnalysed[loop_name]['IS_GROUPED'] = loop_data[1];
			commandAnalysed[loop_name]['SEPARATOR'] = loop_data[2];
			commandAnalysed[loop_name]['REGEX'] = loop_data[3];
			commandAnalysed[loop_name]['ELEMENTS'] = loop_data[4];
			commandAnalysed[loop_name]['DATA'] = loop_data[5];
		}
	}
	for (var i = 0; i < loops.length; i++) {
		var mainRegex = new RegExp(commandAnalysed[loops[i]]['REGEX'] + '(?:' + commandAnalysed[loops[i]]['SEPARATOR'] + '|&&&& |$)', 'gmyi');
		var regex = new RegExp(commandAnalysed[loops[i]]['REGEX'] + '(?: ' + commandAnalysed[loops[i]]['SEPARATOR'] + ' |$)', 'gmyi');
		var str = commandAnalysed[loops[i]]['DATA'];
		var isGrouped = (commandAnalysed[loops[i]]['IS_GROUPED'] == 'true');
		var elements = JSON.parse(commandAnalysed[loops[i]]['ELEMENTS']);
		var m;
		var z;
		commandAnalysed[loops[i]] = {};
		if (isGrouped) {
			var mainGroupIndex = 0;
			var groupIndex = 0;
			var newGroupTrigger;
			while ((z = mainRegex.exec(str)) !== null) {
				// This is necessary to avoid infinite loops with zero-width matches
				if (z.index === regex.lastIndex) {
					regex.lastIndex++;
				}
				// The result can be accessed through the `m`-variable.
				z.forEach((match, matchIndex) => {
					if (matchIndex != 0) {
						console.log(groupIndex);
						objectPath.set(commandAnalysed, loops[i] + '.' + mainGroupIndex + '.' + groupIndex + '.' + elements[matchIndex - 1], match);
					}
					if (/^.*?&&&& $/gmiy.test(match)) {
						newGroupTrigger = true;
					}
				});
				if (newGroupTrigger) {
					newGroupTrigger = false;
					groupIndex = 0;
					++mainGroupIndex
				} else {
					++groupIndex
				}
			}
		} else {
			var groupIndex = 0;
			while ((m = regex.exec(str)) !== null) {
				// This is necessary to avoid infinite loops with zero-width matches
				if (m.index === regex.lastIndex) {
					regex.lastIndex++;
				}
				// The result can be accessed through the `m`-variable.
				m.forEach((match, matchIndex) => {
					if (matchIndex != 0) {
						objectPath.set(commandAnalysed, loops[i] + '.' + groupIndex + '.' + elements[matchIndex - 1], match);
					}
				});
				groupIndex++
			}
		}
	}
	return commandAnalysed;
}

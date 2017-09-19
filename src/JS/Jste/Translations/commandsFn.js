/*!
 * Commands Translations
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
window.commandsFnTranslations = function (commandCode, eventRaw, commandValue, param1Raw, param2Raw, param3Raw, param4Raw, param5Raw) {
	var eventSplitter;
	if (eventRaw == 'E17') {
		var event = document[eventRaw] + param1Raw + ', ';
		var param1 = param2Raw;
		var param2 = param3Raw;
		var param3 = param4Raw;
		var param4 = param5Raw;
	} else {
		var event = document[eventRaw];
		var param1 = param1Raw;
		var param2 = param2Raw;
		var param3 = param3Raw;
		var param4 = param4Raw;
	}
	if (eventRaw == 'E0') {
		eventSplitter = "";
	} else {
		eventSplitter = ".split(event)[1]";
	}
	if (commandCode == 'c2q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0].split('ه')[0]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0].split('ه')[0]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		}
	} else if (commandCode == 'c2ruA') {
		if (document.lang == 0) {
			return 'remove';
		} else if (document.lang == 1) {
			return 'remove';
		} else if (document.lang == 2) {
			return 'supprimer';
		} else if (document.lang == 3) {
			return 'احذف';
		} else if (document.lang == 4) {
			return 'امسح';
		} else if (document.lang == 5) {
			return 'を削除';
		}
	} else if (commandCode == 'c2ruB') {
		if (document.lang == 0) {
			return 'play';
		} else if (document.lang == 1) {
			return 'play';
		} else if (document.lang == 2) {
			return 'lecture';
		} else if (document.lang == 3) {
			return 'شغل';
		} else if (document.lang == 4) {
			return 'شغل';
		} else if (document.lang == 5) {
			return 'lecture';
		}
	} else if (commandCode == 'c2ruC') {
		if (document.lang == 0) {
			return 'pause';
		} else if (document.lang == 1) {
			return 'pause';
		} else if (document.lang == 2) {
			return 'pause';
		} else if (document.lang == 3) {
			return 'أوقف';
		} else if (document.lang == 4) {
			return 'وقف';
		} else if (document.lang == 5) {
			return 'pause';
		}
	} else if (commandCode == 'c3q') {
		if (document.lang == 0) {
			return commandValue.split('remove ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('remove ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('supprimer ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('احذف')[1].split('')[0];
		} else if (document.lang == 4) {
			return commandValue.split('امسح')[1].split('')[0];
		} else if (document.lang == 5) {
			return commandValue.split('supprimer ')[1];
		}
	} else if (commandCode == 'c3r') {
		if (document.lang == 0) {
			return 'it';
		} else if (document.lang == 1) {
			return 'it';
		} else if (document.lang == 2) {
			return 'il';
		} else if (document.lang == 3) {
			return 'ه';
		} else if (document.lang == 4) {
			return 'ه';
		} else if (document.lang == 5) {
			return 'それ';
		}
	} else if (commandCode == 'c4') {
		if (document.lang == 0) {
			return commandValue.split('remove ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('remove ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('supprimer ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('احذف ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('امسح ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('を削除')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c5q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		}
	} else if (commandCode == 'c5r') {
		if (document.lang == 0) {
			return 'go to';
		} else if (document.lang == 1) {
			return 'go to';
		} else if (document.lang == 2) {
			return 'aller à';
		} else if (document.lang == 3) {
			return 'اذهب إلى';
		} else if (document.lang == 4) {
			return 'روح إلى';
		} else if (document.lang == 5) {
			return 'に行く';
		}
	} else if (commandCode == 'c7') {
		if (document.lang == 0) {
			return commandValue.split('play ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('play ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('lecture ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('شغل ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('شغل ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('を再生する')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c8') {
		if (document.lang == 0) {
			return commandValue.split('pause ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('pause ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('pause ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('أوقف ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('وقف ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('一時停止')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c9q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		}
	} else if (commandCode == 'c9r') {
		if (document.lang == 0) {
			return 'set its value to';
		} else if (document.lang == 1) {
			return 'set its value to';
		} else if (document.lang == 2) {
			return 'définir sa valeur à';
		} else if (document.lang == 3) {
			return 'اجعل قيمته إلى';
		} else if (document.lang == 4) {
			return 'خلى قيمته إلى';
		} else if (document.lang == 5) {
			return 'にその値を設定';
		}
	} else if (commandCode == 'c10q') {
		if (document.lang == 0) {
			return commandValue.split('set its value to ')[1].split(' ')[0] + ' ' + commandValue.split('set its value to ')[1].split(' ')[1] + ' ' + commandValue.split('set its value to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set its value to ')[1].split(' ')[0] + ' ' + commandValue.split('set its value to ')[1].split(' ')[1] + ' ' + commandValue.split('set its value to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل قيمته إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى قيمته إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c10rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c10rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c11') {
		if (document.lang == 0) {
			return commandValue.split('set its value to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set its value to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل قيمته إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى قيمته إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		}
	} else if (commandCode == 'c12') {
		if (document.lang == 0) {
			return commandValue.split('set its value to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set its value to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل قيمته إلى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى قيمته إلى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('にその値を設定')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c13q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		}
	} else if (commandCode == 'c13r') {
		if (document.lang == 0) {
			return 'set the value of to';
		} else if (document.lang == 1) {
			return 'set the value of to';
		} else if (document.lang == 2) {
			return 'définir la valeur de à';
		} else if (document.lang == 3) {
			return 'اجعل قيمة إلى';
		} else if (document.lang == 4) {
			return 'خلى قيمة إلى';
		} else if (document.lang == 5) {
			return 'définir la valeur de à';
		}
	} else if (commandCode == 'c14') {
		if (document.lang == 0) {
			return commandValue.split('set the value of ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('set the value of ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل قيمة ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى قيمة ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c15') {
		if (document.lang == 0) {
			return commandValue.split('set the value of ' + param1 + ' to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the value of ' + param1 + ' to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل قيمة ' + param1 + ' إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى قيمة ' + param1 + ' إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à la valeur de ')[1];
		}
	} else if (commandCode == 'c16q') {
		if (document.lang == 0) {
			return commandValue.split('set the value of ' + param1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the value of ' + param1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the value of ' + param1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set the value of ' + param1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the value of ' + param1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the value of ' + param1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل قيمة ' + param1 + ' إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى قيمة ' + param1 + ' إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c16rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'la valeur de';
		}
	} else if (commandCode == 'c16rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'the result of';
		}
	} else if (commandCode == 'c17') {
		if (document.lang == 0) {
			return commandValue.split('set the value of ' + param1 + ' to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the value of ' + param1 + ' to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل قيمة ' + param1 + ' إلى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى قيمة ' + param1 + ' إلى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1];
		}
	} else if (commandCode == 'c18q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[6]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[6]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[5] + ' ' + commandValue" + eventSplitter + ".split(' ')[7]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[5] + ' ' + commandValue" + eventSplitter + ".split(' ')[7]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[5] + ' ' + commandValue" + eventSplitter + ".split(' ')[7]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[5] + ' ' + commandValue" + eventSplitter + ".split(' ')[7]");
		}
	} else if (commandCode == 'c18r') {
		if (document.lang == 0) {
			return 'set the time position of to';
		} else if (document.lang == 1) {
			return 'set the time position of to';
		} else if (document.lang == 2) {
			return 'définir la position de temps de à';
		} else if (document.lang == 3) {
			return 'définir la position de temps de à';
		} else if (document.lang == 4) {
			return 'définir la position de temps de à';
		} else if (document.lang == 5) {
			return 'définir la position de temps de à';
		}
	} else if (commandCode == 'c19') {
		if (document.lang == 0) {
			return commandValue.split('set the time position of ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('set the time position of ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c20') {
		if (document.lang == 0) {
			return commandValue.split('set the value of ' + param1 + ' to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the value of ' + param1 + ' to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل قيمة ' + param1 + ' إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى قيمة ' + param1 + ' إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à la valeur de ')[1];
		}
	} else if (commandCode == 'c21q') {
		if (document.lang == 0) {
			return commandValue.split('set the time position of ' + param1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the time position of ' + param1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the time position of ' + param1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set the time position of ' + param1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the time position of ' + param1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the time position of ' + param1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir la position de temps de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + param1 + ' à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('définir la position de temps de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + param1 + ' à ')[1].split(' ')[2];
		} else if (document.lang == 4) {
			return commandValue.split('définir la position de temps de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + param1 + ' à ')[1].split(' ')[2];
		} else if (document.lang == 5) {
			return commandValue.split('définir la position de temps de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + param1 + ' à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c21rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'la valeur de';
		}
	} else if (commandCode == 'c21rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'the result of';
		}
	} else if (commandCode == 'c22') {
		if (document.lang == 0) {
			return commandValue.split('set the time position of ' + param1 + ' to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the time position of ' + param1 + ' to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la position de temps de ' + param1 + ' à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('définir la position de temps de ' + param1 + ' à ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('définir la position de temps de ' + param1 + ' à ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la position de temps de ' + param1 + ' à ')[1];
		}
	} else if (commandCode == 'c23q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[6] + ' ' + commandValue" + eventSplitter + ".split(' ')[7] + ' ' + commandValue" + eventSplitter + ".split(' ')[9] + ' ' + commandValue" + eventSplitter + ".split(' ')[10] + ' ' + commandValue" + eventSplitter + ".split(' ')[11] + ' ' + commandValue" + eventSplitter + ".split(' ')[12] + ' ' + commandValue" + eventSplitter + ".split(' ')[13] + ' ' + commandValue" + eventSplitter + ".split(' ')[14]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[6] + ' ' + commandValue" + eventSplitter + ".split(' ')[7] + ' ' + commandValue" + eventSplitter + ".split(' ')[9] + ' ' + commandValue" + eventSplitter + ".split(' ')[10] + ' ' + commandValue" + eventSplitter + ".split(' ')[11] + ' ' + commandValue" + eventSplitter + ".split(' ')[12] + ' ' + commandValue" + eventSplitter + ".split(' ')[13] + ' ' + commandValue" + eventSplitter + ".split(' ')[14]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[5] + ' ' + commandValue" + eventSplitter + ".split(' ')[8] + ' ' + commandValue" + eventSplitter + ".split(' ')[9] + ' ' + commandValue" + eventSplitter + ".split(' ')[11] + ' ' + commandValue" + eventSplitter + ".split(' ')[12] + ' ' + commandValue" + eventSplitter + ".split(' ')[13] + ' ' + commandValue" + eventSplitter + ".split(' ')[14] + ' ' + commandValue" + eventSplitter + ".split(' ')[15] + ' ' + commandValue" + eventSplitter + ".split(' ')[16]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[6] + ' ' + commandValue" + eventSplitter + ".split(' ')[8] + ' ' + commandValue" + eventSplitter + ".split(' ')[9] + ' ' + commandValue" + eventSplitter + ".split(' ')[10] + ' ' + commandValue" + eventSplitter + ".split(' ')[11] + ' ' + commandValue" + eventSplitter + ".split(' ')[12]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[5] + ' ' + commandValue" + eventSplitter + ".split(' ')[7] + ' ' + commandValue" + eventSplitter + ".split(' ')[8] + ' ' + commandValue" + eventSplitter + ".split(' ')[9] + ' ' + commandValue" + eventSplitter + ".split(' ')[10] + ' ' + commandValue" + eventSplitter + ".split(' ')[11] + ' ' + commandValue" + eventSplitter + ".split(' ')[12]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[6] + ' ' + commandValue" + eventSplitter + ".split(' ')[6] + ' ' + commandValue" + eventSplitter + ".split(' ')[8] + ' ' + commandValue" + eventSplitter + ".split(' ')[9] + ' ' + commandValue" + eventSplitter + ".split(' ')[10] + ' ' + commandValue" + eventSplitter + ".split(' ')[11] + ' ' + commandValue" + eventSplitter + ".split(' ')[12] + ' ' + commandValue" + eventSplitter + ".split(' ')[13]");
		}
	} else if (commandCode == 'c23r') {
		if (document.lang == 0) {
			return 'go to the database the branch and then insert the following data:';
		} else if (document.lang == 1) {
			return 'go to the database the branch and then insert the following data:';
		} else if (document.lang == 2) {
			return 'aller à la base de données la branche et ensuite insérer les données suivantes:';
		} else if (document.lang == 3) {
			return 'اذهب إلى قاعدة البيانات الفرع ثم قم بإدخال البيانات التالية:';
		} else if (document.lang == 4) {
			return 'روح لقاعدة البيانات الفرع و بعد كدة دخل البيانات دى:';
		} else if (document.lang == 5) {
			return 'aller à la base de données la branche et ensuite insérer les données suivantes:';
		}
	} else if (commandCode == 'c24') {
		if (document.lang == 0) {
			return commandValue.split('go to the ' + param1 + ' database ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('go to the ' + param1 + ' database ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ' + param1 + ' ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ' + param1 + ' ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ' + param1 + ' ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ' + param1 + ' ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c25') {
		if (document.lang == 0) {
			return commandValue.split('the branch ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('the branch ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('la branche ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('الفرع ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('الفرع ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('la branche ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c26') {
		if (document.lang == 0) {
			return commandValue.split('go to the ' + param1 + ' database ' + param2 + ' the branch ' + param3 + ' and then insert the following data: ')[1].split(', ');
		} else if (document.lang == 1) {
			return commandValue.split('go to the ' + param1 + ' database ' + param2 + ' the branch ' + param3 + ' and then insert the following data: ')[1].split(', ');
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ' + param1 + ' ' + param2 + ' la branche ' + param3 + ' et ensuite insérer les données suivantes: ')[1].split(', ');
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ' + param1 + ' ' + param2 + ' الفرع ' + param3 + ' ثم قم بإدخال البيانات التالية: ')[1].split(', ');
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ' + param1 + ' ' + param2 + ' الفرع ' + param3 + ' و بعد كدة دخل البيانات دى: ')[1].split(', ');
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ' + param1 + ' ' + param2 + ' la branche ' + param3 + ' et ensuite insérer les données suivantes: ')[1].split(', ');
		}
	} else if (commandCode == 'c27q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[6] + ' ' + commandValue" + eventSplitter + ".split(' ')[7] + ' ' + commandValue" + eventSplitter + ".split(' ')[9] + ' ' + commandValue" + eventSplitter + ".split(' ')[10] + ' ' + commandValue" + eventSplitter + ".split(' ')[11] + ' ' + commandValue" + eventSplitter + ".split(' ')[12] + ' ' + commandValue" + eventSplitter + ".split(' ')[13] + ' ' + commandValue" + eventSplitter + ".split(' ')[14] + ' ' + commandValue" + eventSplitter + ".split(' ')[15] + ' ' + commandValue" + eventSplitter + ".split(' ')[16]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[6] + ' ' + commandValue" + eventSplitter + ".split(' ')[7] + ' ' + commandValue" + eventSplitter + ".split(' ')[9] + ' ' + commandValue" + eventSplitter + ".split(' ')[10] + ' ' + commandValue" + eventSplitter + ".split(' ')[11] + ' ' + commandValue" + eventSplitter + ".split(' ')[12] + ' ' + commandValue" + eventSplitter + ".split(' ')[13] + ' ' + commandValue" + eventSplitter + ".split(' ')[14] + ' ' + commandValue" + eventSplitter + ".split(' ')[15] + ' ' + commandValue" + eventSplitter + ".split(' ')[16]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[5] + ' ' + commandValue" + eventSplitter + ".split(' ')[8] + ' ' + commandValue" + eventSplitter + ".split(' ')[10] + ' ' + commandValue" + eventSplitter + ".split(' ')[11] + ' ' + commandValue" + eventSplitter + ".split(' ')[12] + ' ' + commandValue" + eventSplitter + ".split(' ')[13] + ' ' + commandValue" + eventSplitter + ".split(' ')[14] + ' ' + commandValue" + eventSplitter + ".split(' ')[15] + ' ' + commandValue" + eventSplitter + ".split(' ')[16] + ' ' + commandValue" + eventSplitter + ".split(' ')[16]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[6] + ' ' + commandValue" + eventSplitter + ".split(' ')[8] + ' ' + commandValue" + eventSplitter + ".split(' ')[9] + ' ' + commandValue" + eventSplitter + ".split(' ')[10] + ' ' + commandValue" + eventSplitter + ".split(' ')[11] + ' ' + commandValue" + eventSplitter + ".split(' ')[12] + ' ' + commandValue" + eventSplitter + ".split(' ')[13]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[5] + ' ' + commandValue" + eventSplitter + ".split(' ')[7] + ' ' + commandValue" + eventSplitter + ".split(' ')[8] + ' ' + commandValue" + eventSplitter + ".split(' ')[9] + ' ' + commandValue" + eventSplitter + ".split(' ')[10] + ' ' + commandValue" + eventSplitter + ".split(' ')[11] + ' ' + commandValue" + eventSplitter + ".split(' ')[12]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5] + ' ' + commandValue" + eventSplitter + ".split(' ')[6] + ' ' + commandValue" + eventSplitter + ".split(' ')[8] + ' ' + commandValue" + eventSplitter + ".split(' ')[9] + ' ' + commandValue" + eventSplitter + ".split(' ')[10] + ' ' + commandValue" + eventSplitter + ".split(' ')[11] + ' ' + commandValue" + eventSplitter + ".split(' ')[12] + ' ' + commandValue" + eventSplitter + ".split(' ')[13] + ' ' + commandValue" + eventSplitter + ".split(' ')[14] + ' ' + commandValue" + eventSplitter + ".split(' ')[15]");
		}
	} else if (commandCode == 'c27r') {
		if (document.lang == 0) {
			return 'go to the database the branch and then get the value of the slot';
		} else if (document.lang == 1) {
			return 'go to the database the branch and then get the value of the slot';
		} else if (document.lang == 2) {
			return 'aller à la base de données la branche et ensuite obtenir la valeur de la fente';
		} else if (document.lang == 3) {
			return 'اذهب إلى قاعدة البيانات الفرع ثم قم بالحصول على قيمة الشريحة';
		} else if (document.lang == 4) {
			return 'روح لقاعدة البيانات الفرع و بعد كدة هات قيمة الشريحة';
		} else if (document.lang == 5) {
			return 'aller à la base de données la branche et ensuite obtenir la valeur de la fente';
		}
	} else if (commandCode == 'c28') {
		if (document.lang == 0) {
			return commandValue.split('go to the ' + param1 + ' database ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('go to the ' + param1 + ' database ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ' + param1 + ' ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ' + param1 + ' ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ' + param1 + ' ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ' + param1 + ' ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c29') {
		if (document.lang == 0) {
			return commandValue.split('the branch ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('the branch ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('la branche ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('الفرع ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('الفرع ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('la branche ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c30') {
		if (document.lang == 0) {
			return commandValue.split('get the value of the slot ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('get the value of the slot ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('قم بالحصول على قيمة الشريحة ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('هات قيمة الشريحة ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c31') {
		if (document.lang == 0) {
			return commandValue.split('and set it as the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('and set it as the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définissez-le comme valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('و اجعلها قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('و خليها قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définissez-le comme valeur de ')[1];
		}
	} else if (commandCode == 'c32') {
		if (document.lang == 0) {
			return commandValue.split('the value of ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('the value of ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('la valeur de ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('قيمة ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('قيمة ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('la valeur de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c33') {
		if (document.lang == 0) {
			return commandValue.split('in the slot ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('in the slot ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('dans la fente ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('فى الشريحة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('فى الشريحة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('in the slot ')[1];
		}
	} else if (commandCode == 'c34') {
		if (document.lang == 0) {
			return commandValue.split(' after a period of ');
		} else if (document.lang == 1) {
			return commandValue.split(' after a period of ');
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ');
		} else if (document.lang == 3) {
			return commandValue.split(' بعد مدة ');
		} else if (document.lang == 4) {
			return commandValue.split(' بعد مدة ');
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ');
		}
	} else if (commandCode == 'c35') {
		if (document.lang == 0) {
			return commandValue.split(' after a period of ')[0];
		} else if (document.lang == 1) {
			return commandValue.split(' after a period of ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		} else if (document.lang == 3) {
			return commandValue.split(' بعد مدة ')[0];
		} else if (document.lang == 4) {
			return commandValue.split(' بعد مدة ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		}
	} else if (commandCode == 'c36') {
		if (document.lang == 0) {
			if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' after a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' after a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' after a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 1) {
			if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' after a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' after a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' after a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 2) {
			if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' after a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' after a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' after a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 3) {
			if (commandValue.split(' بعد مدة ')[1] == 'ميلى ثانية') {
				return 1
			} else if (commandValue.split(' بعد مدة ')[1] == 'ثانية') {
				return 1000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'دقيقة') {
				return 60000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'ساعة') {
				return 3600000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'يوم') {
				return 86400000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
				return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]);
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ثوانى') {
				return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'دقائق') {
				return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ساعات') {
				return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ايام') {
				return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 4) {
			if (commandValue.split(' بعد مدة ')[1] == 'ميلى ثانية') {
				return 1
			} else if (commandValue.split(' بعد مدة ')[1] == 'ثانية') {
				return 1000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'دقيقة') {
				return 60000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'ساعة') {
				return 3600000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'يوم') {
				return 86400000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
				return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]);
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ثوانى') {
				return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'دقائق') {
				return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ساعات') {
				return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ايام') {
				return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 5) {
			if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' after a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' after a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' after a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
				return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000;
			}
		}
	} else if (commandCode == 'c37') {
		if (document.lang == 0) {
			return commandValue.split(' every a period of ');
		} else if (document.lang == 1) {
			return commandValue.split(' every a period of ');
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ');
		} else if (document.lang == 3) {
			return commandValue.split(' كل مدة ');
		} else if (document.lang == 4) {
			return commandValue.split(' كل مدة ');
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ');
		}
	} else if (commandCode == 'c38') {
		if (document.lang == 0) {
			return commandValue.split(' every a period of ')[0];
		} else if (document.lang == 1) {
			return commandValue.split(' every a period of ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		} else if (document.lang == 3) {
			return commandValue.split(' كل مدة ')[0];
		} else if (document.lang == 4) {
			return commandValue.split(' كل مدة ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		}
	} else if (commandCode == 'c39') {
		if (document.lang == 0) {
			if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' every a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' every a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' every a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 1) {
			if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' every a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' every a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' every a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 2) {
			if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' every a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' every a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' every a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 3) {
			if (commandValue.split(' كل مدة ')[1] == 'ميلى ثانية') {
				return 1
			} else if (commandValue.split(' كل مدة ')[1] == 'ثانية') {
				return 1000;
			} else if (commandValue.split(' كل مدة ')[1] == 'دقيقة') {
				return 60000;
			} else if (commandValue.split(' كل مدة ')[1] == 'ساعة') {
				return 3600000;
			} else if (commandValue.split(' كل مدة ')[1] == 'يوم') {
				return 86400000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
				return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]);
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ثوانى') {
				return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'دقائق') {
				return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ساعات') {
				return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ايام') {
				return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 4) {
			if (commandValue.split(' كل مدة ')[1] == 'ميلى ثانية') {
				return 1
			} else if (commandValue.split(' كل مدة ')[1] == 'ثانية') {
				return 1000;
			} else if (commandValue.split(' كل مدة ')[1] == 'دقيقة') {
				return 60000;
			} else if (commandValue.split(' كل مدة ')[1] == 'ساعة') {
				return 3600000;
			} else if (commandValue.split(' كل مدة ')[1] == 'يوم') {
				return 86400000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
				return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]);
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ثوانى') {
				return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'دقائق') {
				return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ساعات') {
				return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ايام') {
				return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 5) {
			if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' every a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' every a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' every a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
				return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000;
			}
		}
	} else if (commandCode == 'c40') {
		if (document.lang == 0) {
			return commandValue.split(document.E17)[1].split(', ')[0];
		} else if (document.lang == 1) {
			return commandValue.split(document.E17)[1].split(', ')[0];
		} else if (document.lang == 2) {
			return commandValue.split(document.E17)[1].split(', ')[0];
		} else if (document.lang == 3) {
			return commandValue.split(document.E17)[1].split(', ')[0];
		} else if (document.lang == 4) {
			return commandValue.split(document.E17)[1].split(', ')[0];
		} else if (document.lang == 5) {
			return commandValue.split(document.E17)[1].split(', ')[0];
		}
	} else if (commandCode == 'c41') {
		if (document.lang == 0) {
			return window.evaluateExpression(commandValue.split('the result of ')[1]);
		} else if (document.lang == 1) {
			return window.evaluateExpression(commandValue.split('the result of ')[1]);
		} else if (document.lang == 2) {
			return window.evaluateExpression(commandValue.split("le résultat de ")[1]);
		} else if (document.lang == 3) {
			return window.evaluateExpression(commandValue.split('ناتج ')[1]);
		} else if (document.lang == 4) {
			return window.evaluateExpression(commandValue.split('ناتج ')[1]);
		} else if (document.lang == 5) {
			return window.evaluateExpression(commandValue.split('the result of ')[1]);
		}
	} else if (commandCode == 'c42') {
		if (document.lang == 0) {
			return window.evaluateExpression(commandValue.split('set the value of ' + param1 + ' to the result of ')[1]);
		} else if (document.lang == 1) {
			return window.evaluateExpression(commandValue.split('set the value of ' + param1 + ' to the result of ')[1]);
		} else if (document.lang == 2) {
			return window.evaluateExpression(commandValue.split("définir la valeur de ' + param1 + ' à le résultat de ")[1]);
		} else if (document.lang == 3) {
			return window.evaluateExpression(commandValue.split('اجعل قيمة ' + param1 + ' إلى ناتج ')[1]);
		} else if (document.lang == 4) {
			return window.evaluateExpression(commandValue.split('خلى قيمة ' + param1 + ' إلى ناتج ')[1]);
		} else if (document.lang == 5) {
			return window.evaluateExpression(commandValue.split('set the value of ' + param1 + ' to the result of ')[1]);
		}
	} else if (commandCode == 'c43') {
		if (document.lang == 0) {
			return window.evaluateExpression(commandValue.split('set the value of ' + param1 + ' to the result of ')[1]);
		} else if (document.lang == 1) {
			return window.evaluateExpression(commandValue.split('set the value of ' + param1 + ' to the result of ')[1]);
		} else if (document.lang == 2) {
			return window.evaluateExpression(commandValue.split("définir la valeur de ' + param1 + ' à le résultat de ")[1]);
		} else if (document.lang == 3) {
			return window.evaluateExpression(commandValue.split('اجعل قيمة ' + param1 + ' إلى ناتج ')[1]);
		} else if (document.lang == 4) {
			return window.evaluateExpression(commandValue.split('خلى قيمة ' + param1 + ' إلى ناتج ')[1]);
		} else if (document.lang == 5) {
			return window.evaluateExpression(commandValue.split('set the value of ' + param1 + ' to the result of ')[1]);
		}
	} else if (commandCode == 'c44q') {
		if (document.lang == 0) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("aller à ")[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c44r') {
		if (document.lang == 0) {
			return 'the url';
		} else if (document.lang == 1) {
			return 'the url';
		} else if (document.lang == 2) {
			return "l'url";
		} else if (document.lang == 3) {
			return 'الرابط';
		} else if (document.lang == 4) {
			return 'اللينك';
		} else if (document.lang == 5) {
			return 'に行く';
		}
	} else if (commandCode == 'c44t') {
		if (document.lang == 0) {
			return commandValue.split('the url ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('the url ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("l'url ")[1];
		} else if (document.lang == 3) {
			return commandValue.split('الرابط ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('اللينك ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('に行く ')[1];
		}
	} else if (commandCode == 'c45q') {
		if (document.lang == 0) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("aller à ")[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c45r') {
		if (document.lang == 0) {
			return 'the element';
		} else if (document.lang == 1) {
			return 'the element';
		} else if (document.lang == 2) {
			return "l'élément";
		} else if (document.lang == 3) {
			return 'العنصر';
		} else if (document.lang == 4) {
			return 'العنصر';
		} else if (document.lang == 5) {
			return 'に行く';
		}
	} else if (commandCode == 'c45t') {
		if (document.lang == 0) {
			return commandValue.split('the element ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('the element ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("l'élément ")[1];
		} else if (document.lang == 3) {
			return commandValue.split('العنصر ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('العنصر ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('に行く ')[1];
		}
	} else if (commandCode == 'c46q') {
		if (document.lang == 0) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("aller à ")[1].split(' ')[0] + ' ' + commandValue.split('aller à ')[1].split(' ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى ')[1].split(' ')[0] + ' ' + commandValue.split('اذهب إلى ')[1].split(' ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('روح إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c46r') {
		if (document.lang == 0) {
			return 'the email';
		} else if (document.lang == 1) {
			return 'the email';
		} else if (document.lang == 2) {
			return 'le courriel';
		} else if (document.lang == 3) {
			return 'البريد الإلكترونى';
		} else if (document.lang == 4) {
			return 'الإيميل';
		} else if (document.lang == 5) {
			return 'Eメール';
		}
	} else if (commandCode == 'c46t') {
		if (document.lang == 0) {
			return commandValue.split('the email ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('the email ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("le courriel ")[1];
		} else if (document.lang == 3) {
			return commandValue.split('البريد الإلكترونى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('الإيميل ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('Eメール ')[1];
		}
	} else if (commandCode == 'c47q') {
		if (document.lang == 0) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("aller à ")[1].split(' ')[0] + ' ' + commandValue.split('aller à ')[1].split(' ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c47r') {
		if (document.lang == 0) {
			return 'the page';
		} else if (document.lang == 1) {
			return 'the page';
		} else if (document.lang == 2) {
			return 'la page';
		} else if (document.lang == 3) {
			return 'الصفحة';
		} else if (document.lang == 4) {
			return 'الصفحة';
		} else if (document.lang == 5) {
			return 'ページ';
		}
	} else if (commandCode == 'c47t') {
		if (document.lang == 0) {
			return commandValue.split('the page ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('the page ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("la page ")[1];
		} else if (document.lang == 3) {
			return commandValue.split('الصفحة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('الصفحة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('ページ ')[1];
		}
	} else if (commandCode == 'c48') {
		if (document.lang == 0) {
			return commandValue.split('go to the ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('go to the ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c49') {
		if (document.lang == 0) {
			return commandValue.split('go to the ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('go to the ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c50') {
		if (document.lang == 0) {
			return commandValue.split('which has the same class of the value of ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('which has the same class of the value of ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c51') {
		if (document.lang == 0) {
			return commandValue.split('which has the same class of the value of ' + param1 + ' in the slot ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('which has the same class of the value of ' + param1 + ' in the slot ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c52') {
		if (document.lang == 0) {
			return commandValue.split(' in the case that ');
		} else if (document.lang == 1) {
			return commandValue.split(' in the case that ');
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ');
		} else if (document.lang == 3) {
			return commandValue.split(' فى حالة أن ');
		} else if (document.lang == 4) {
			return commandValue.split(' فى حالة إن ');
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ');
		}
	} else if (commandCode == 'c53') {
		if (document.lang == 0) {
			return window.evaluateStatement(commandValue.split(' in the case that ')[1]);
		} else if (document.lang == 1) {
			return window.evaluateStatement(commandValue.split(' in the case that ')[1]);
		} else if (document.lang == 2) {
			return window.evaluateStatement(commandValue.split('obtenir la valeur de la fente ')[1]);
		} else if (document.lang == 3) {
			return window.evaluateStatement(commandValue.split(' فى حالة أن ')[1]);
		} else if (document.lang == 4) {
			return window.evaluateStatement(commandValue.split(' فى حالة إن ')[1]);
		} else if (document.lang == 5) {
			return window.evaluateStatement(commandValue.split('obtenir la valeur de la fente ')[1]);
		}
	} else if (commandCode == 'c54') {
		if (document.lang == 0) {
			return commandValue.split(' in the case that ')[0];
		} else if (document.lang == 1) {
			return commandValue.split(' in the case that ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		} else if (document.lang == 3) {
			return commandValue.split(' فى حالة أن ')[0];
		} else if (document.lang == 4) {
			return commandValue.split(' فى حالة إن ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		}
	} else if (commandCode == 'c55q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		}
	} else if (commandCode == 'c55r') {
		if (document.lang == 0) {
			return 'set its text font colour to';
		} else if (document.lang == 1) {
			return 'set its text font color to';
		} else if (document.lang == 2) {
			return 'définir sa valeur à';
		} else if (document.lang == 3) {
			return 'اجعل لون خط نصه إلى';
		} else if (document.lang == 4) {
			return 'خلى لون خط كلامه إلى';
		} else if (document.lang == 5) {
			return 'にその値を設定';
		}
	} else if (commandCode == 'c56q') {
		if (document.lang == 0) {
			return commandValue.split('set its text font colour to ')[1].split(' ')[0] + ' ' + commandValue.split('set its text font colour to ')[1].split(' ')[1] + ' ' + commandValue.split('set its text font colour to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set its text font color to ')[1].split(' ')[0] + ' ' + commandValue.split('set its text font color to ')[1].split(' ')[1] + ' ' + commandValue.split('set its text font color to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل لون خط نصه إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى لون خط كلامه إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c56rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c56rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c57') {
		if (document.lang == 0) {
			return commandValue.split('set its text font colour to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set its text font color to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل لون خط نصه إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى لون خط كلامه إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		}
	} else if (commandCode == 'c58') {
		if (document.lang == 0) {
			return commandValue.split('set its text font colour to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set its text font color to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل لون خط نصه إلى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى لون خط كلامه إلى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('にその値を設定')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c59q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[5] + ' ' + commandValue" + eventSplitter + ".split(' ')[7]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4] + ' ' + commandValue" + eventSplitter + ".split(' ')[5] + ' ' + commandValue" + eventSplitter + ".split(' ')[7]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		}
	} else if (commandCode == 'c59r') {
		if (document.lang == 0) {
			return 'set the text font colour of to';
		} else if (document.lang == 1) {
			return 'set the text font color of to';
		} else if (document.lang == 2) {
			return 'définir la valeur de à';
		} else if (document.lang == 3) {
			return 'خلى لون خط نص إلى';
		} else if (document.lang == 4) {
			return 'خلى لون خط كلام إلى';
		} else if (document.lang == 5) {
			return 'définir la valeur de à';
		}
	} else if (commandCode == 'c60') {
		if (document.lang == 0) {
			return commandValue.split('set the text font colour of ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('set the text font color of ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل لون خط نص ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى لون خط كلام ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c61') {
		if (document.lang == 0) {
			return commandValue.split('set the text font colour of ' + param1 + ' to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the text font color of ' + param1 + ' to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل لون خط نص ' + param1 + ' إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى لون خط كلام ' + param1 + ' إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à la valeur de ')[1];
		}
	} else if (commandCode == 'c62q') {
		if (document.lang == 0) {
			return commandValue.split('set the text font colour of ' + param1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the text font colour of ' + param1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the text font colour of ' + param1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set the text font color of ' + param1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the text font color of ' + param1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the text font color of ' + param1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل لون خط نص ' + param1 + ' إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى لون خط كلام ' + param1 + ' إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c62rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'la valeur de';
		}
	} else if (commandCode == 'c62rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'the result of';
		}
	} else if (commandCode == 'c63') {
		if (document.lang == 0) {
			return commandValue.split('set the text font colour of ' + param1 + ' to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the text font color of ' + param1 + ' to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل لون خط نص ' + param1 + ' إلى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى لون خط كلام ' + param1 + ' إلى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1];
		}
	} else if (commandCode == 'c64q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		}
	} else if (commandCode == 'c64r') {
		if (document.lang == 0) {
			return 'set its background to';
		} else if (document.lang == 1) {
			return 'set its background to';
		} else if (document.lang == 2) {
			return 'définir sa valeur à';
		} else if (document.lang == 3) {
			return 'اجعل خلفيته إلى';
		} else if (document.lang == 4) {
			return 'خلى خلفيته إلى';
		} else if (document.lang == 5) {
			return 'にその値を設定';
		}
	} else if (commandCode == 'c65q') {
		if (document.lang == 0) {
			return commandValue.split('set its background to ')[1].split(' ')[0] + ' ' + commandValue.split('set its background to ')[1].split(' ')[1] + ' ' + commandValue.split('set its background to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set its background to ')[1].split(' ')[0] + ' ' + commandValue.split('set its background to ')[1].split(' ')[1] + ' ' + commandValue.split('set its background to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل خلفيته إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى خلفيته إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c65rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c65rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c66') {
		if (document.lang == 0) {
			return commandValue.split('set its background to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set its background to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('خلى خلفيته إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى خلفيته إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		}
	} else if (commandCode == 'c67') {
		if (document.lang == 0) {
			return commandValue.split('set its background to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set its background to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('خلى خلفيته إلى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى خلفيته إلى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('にその値を設定')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c68q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		}
	} else if (commandCode == 'c68r') {
		if (document.lang == 0) {
			return 'set the background of to';
		} else if (document.lang == 1) {
			return 'set the background of to';
		} else if (document.lang == 2) {
			return 'définir la valeur de à';
		} else if (document.lang == 3) {
			return 'خلى خلفية إلى';
		} else if (document.lang == 4) {
			return 'خلى خلفية إلى';
		} else if (document.lang == 5) {
			return 'définir la valeur de à';
		}
	} else if (commandCode == 'c69') {
		if (document.lang == 0) {
			return commandValue.split('set the background of ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('set the background of ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل خلفية ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى خلفية ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c70') {
		if (document.lang == 0) {
			return commandValue.split('set the background of ' + param1 + ' to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the background of ' + param1 + ' to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل خلفية ' + param1 + ' إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى خلفية ' + param1 + ' إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à la valeur de ')[1];
		}
	} else if (commandCode == 'c71q') {
		if (document.lang == 0) {
			return commandValue.split('set the background of ' + param1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the background of ' + param1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the background of ' + param1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set the background of ' + param1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the background of ' + param1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the background of ' + param1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل خلفية ' + param1 + ' إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى خلفية ' + param1 + ' إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c71rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'la valeur de';
		}
	} else if (commandCode == 'c71rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'the result of';
		}
	} else if (commandCode == 'c72') {
		if (document.lang == 0) {
			return commandValue.split('set the background of ' + param1 + ' to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the background of ' + param1 + ' to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل خلفية ' + param1 + ' إلى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى خلفية ' + param1 + ' إلى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1];
		}
	} else if (commandCode == 'c73q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		}
	} else if (commandCode == 'c73r') {
		if (document.lang == 0) {
			return 'set its length to';
		} else if (document.lang == 1) {
			return 'set its length to';
		} else if (document.lang == 2) {
			return 'définir sa valeur à';
		} else if (document.lang == 3) {
			return 'اجعل طوله إلى';
		} else if (document.lang == 4) {
			return 'خلى طوله إلى';
		} else if (document.lang == 5) {
			return 'にその値を設定';
		}
	} else if (commandCode == 'c74q') {
		if (document.lang == 0) {
			return commandValue.split('set its length to ')[1].split(' ')[0] + ' ' + commandValue.split('set its length to ')[1].split(' ')[1] + ' ' + commandValue.split('set its length to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set its length to ')[1].split(' ')[0] + ' ' + commandValue.split('set its length to ')[1].split(' ')[1] + ' ' + commandValue.split('set its length to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل طوله إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى طوله إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c74rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c74rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c75') {
		if (document.lang == 0) {
			return commandValue.split('set its length to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set its length to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('خلى طوله إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى طوله إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		}
	} else if (commandCode == 'c76') {
		if (document.lang == 0) {
			return commandValue.split('set its length to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set its length to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('خلى طوله إلى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى طوله إلى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('にその値を設定')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c77q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		}
	} else if (commandCode == 'c77r') {
		if (document.lang == 0) {
			return 'set the length of to';
		} else if (document.lang == 1) {
			return 'set the length of to';
		} else if (document.lang == 2) {
			return 'définir la valeur de à';
		} else if (document.lang == 3) {
			return 'خلى طول إلى';
		} else if (document.lang == 4) {
			return 'خلى طول إلى';
		} else if (document.lang == 5) {
			return 'définir la valeur de à';
		}
	} else if (commandCode == '78') {
		if (document.lang == 0) {
			return commandValue.split('set the length of ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('set the length of ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل طول ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى طول ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c79') {
		if (document.lang == 0) {
			return commandValue.split('set the length of ' + param1 + ' to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the length of ' + param1 + ' to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل طول ' + param1 + ' إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى طول ' + param1 + ' إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à la valeur de ')[1];
		}
	} else if (commandCode == 'c80q') {
		if (document.lang == 0) {
			return commandValue.split('set the length of ' + param1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the length of ' + param1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the length of ' + param1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set the length of ' + param1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the length of ' + param1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the length of ' + param1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل طول ' + param1 + ' إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى طول ' + param1 + ' إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c80rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'la valeur de';
		}
	} else if (commandCode == 'c80rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'the result of';
		}
	} else if (commandCode == 'c81') {
		if (document.lang == 0) {
			return commandValue.split('set the length of ' + param1 + ' to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the length of ' + param1 + ' to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل طول ' + param1 + ' إلى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى طول ' + param1 + ' إلى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1];
		}
	} else if (commandCode == 'c82q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		}
	} else if (commandCode == 'c82r') {
		if (document.lang == 0) {
			return 'set its width to';
		} else if (document.lang == 1) {
			return 'set its width to';
		} else if (document.lang == 2) {
			return 'définir sa valeur à';
		} else if (document.lang == 3) {
			return 'اجعل عرضه إلى';
		} else if (document.lang == 4) {
			return 'خلى عرضه إلى';
		} else if (document.lang == 5) {
			return 'にその値を設定';
		}
	} else if (commandCode == 'c83q') {
		if (document.lang == 0) {
			return commandValue.split('set its width to ')[1].split(' ')[0] + ' ' + commandValue.split('set its width to ')[1].split(' ')[1] + ' ' + commandValue.split('set its width to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set its width to ')[1].split(' ')[0] + ' ' + commandValue.split('set its width to ')[1].split(' ')[1] + ' ' + commandValue.split('set its width to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل عرضه إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى عرضه إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c83rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c83rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c84') {
		if (document.lang == 0) {
			return commandValue.split('set its width to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set its width to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('خلى عرضه إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى عرضه إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		}
	} else if (commandCode == 'c85') {
		if (document.lang == 0) {
			return commandValue.split('set its width to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set its width to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('خلى عرضه إلى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى عرضه إلى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('にその値を設定')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c86q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[5]");
		}
	} else if (commandCode == 'c86r') {
		if (document.lang == 0) {
			return 'set the width of to';
		} else if (document.lang == 1) {
			return 'set the width of to';
		} else if (document.lang == 2) {
			return 'définir la valeur de à';
		} else if (document.lang == 3) {
			return 'خلى عرض إلى';
		} else if (document.lang == 4) {
			return 'خلى عرض إلى';
		} else if (document.lang == 5) {
			return 'définir la valeur de à';
		}
	} else if (commandCode == 'c87') {
		if (document.lang == 0) {
			return commandValue.split('set the width of ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('set the width of ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل عرض ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى عرض ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c88') {
		if (document.lang == 0) {
			return commandValue.split('set the width of ' + param1 + ' to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the width of ' + param1 + ' to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل عرض ' + param1 + ' إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى عرض ' + param1 + ' إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à la valeur de ')[1];
		}
	} else if (commandCode == 'c89q') {
		if (document.lang == 0) {
			return commandValue.split('set the width of ' + param1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the width of ' + param1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the width of ' + param1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set the width of ' + param1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the width of ' + param1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the width of ' + param1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل عرض ' + param1 + ' إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('خلى عرض ' + param1 + ' إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + param1 + ' à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c89rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'la valeur de';
		}
	} else if (commandCode == 'c89rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'the result of';
		}
	} else if (commandCode == 'c90') {
		if (document.lang == 0) {
			return commandValue.split('set the width of ' + param1 + ' to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the width of ' + param1 + ' to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اجعل عرض ' + param1 + ' إلى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('خلى عرض ' + param1 + ' إلى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + param1 + ' à ')[1];
		}
	} else if (commandCode == 'c91q') {
		if (document.lang == 0) {
			return commandValue.split('open ')[1].split(' ')[0] + ' ' + commandValue.split('open ')[1].split(' ')[1] + ' ' + commandValue.split('open ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('open ')[1].split(' ')[0] + ' ' + commandValue.split('open')[1].split(' ')[1] + ' ' + commandValue.split('open ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split("ouvrir ")[1].split(' ')[0] + ' ' + commandValue.split('ouvrir ')[1].split(' ')[1] + ' ' + commandValue.split('ouvrir ')[1].split(' ')[2] + ' ' + commandValue.split('ouvrir ')[1].split(' ')[3];
		} else if (document.lang == 3) {
			return commandValue.split('افتح ')[1].split(' ')[0] + ' ' + commandValue.split('افتح ')[1].split(' ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('افتح ')[1].split(' ')[0] + ' ' + commandValue.split('افتح ')[1].split(' ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c91r') {
		if (document.lang == 0) {
			return 'the dialog box';
		} else if (document.lang == 1) {
			return 'the dialog box';
		} else if (document.lang == 2) {
			return 'la boîte de dialogue';
		} else if (document.lang == 3) {
			return 'مربع الحوار';
		} else if (document.lang == 4) {
			return 'مربع الحوار';
		} else if (document.lang == 5) {
			return 'ページ';
		}
	} else if (commandCode == 'c91t') {
		if (document.lang == 0) {
			return commandValue.split('the dialog box ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('the dialog box ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("la boîte de dialogue ")[1];
		} else if (document.lang == 3) {
			return commandValue.split('مربع الحوار ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('مربع الحوار ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('ページ ')[1];
		}
	} else if (commandCode == 'c92q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		}
	} else if (commandCode == 'c92r') {
		if (document.lang == 0) {
			return 'open';
		} else if (document.lang == 1) {
			return 'open';
		} else if (document.lang == 2) {
			return 'ouvrir';
		} else if (document.lang == 3) {
			return 'افتح';
		} else if (document.lang == 4) {
			return 'افتح';
		} else if (document.lang == 5) {
			return 'に行く';
		}
	} else if (commandCode == 'c93q') {
		if (document.lang == 0) {
			return commandValue.split('open ')[1].split(' ')[0] + ' ' + commandValue.split('open ')[1].split(' ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('open ')[1].split(' ')[0] + ' ' + commandValue.split('open')[1].split(' ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("ouvrir ")[1].split(' ')[0] + ' ' + commandValue.split('ouvrir ')[1].split(' ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('افتح ')[1].split(' ')[0] + ' ' + commandValue.split('افتح ')[1].split(' ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('افتح ')[1].split(' ')[0] + ' ' + commandValue.split('افتح ')[1].split(' ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c93r') {
		if (document.lang == 0) {
			return 'the sidebar';
		} else if (document.lang == 1) {
			return 'the sidebar';
		} else if (document.lang == 2) {
			return 'barre latérale';
		} else if (document.lang == 3) {
			return 'الشريط الجانبى';
		} else if (document.lang == 4) {
			return 'الشريط الجانبى';
		} else if (document.lang == 5) {
			return 'ページ';
		}
	} else if (commandCode == 'c93t') {
		if (document.lang == 0) {
			return commandValue.split('the sidebar ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('the sidebar ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("barre latérale ")[1];
		} else if (document.lang == 3) {
			return commandValue.split('الشريط الجانبى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('الشريط الجانبى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('ページ ')[1];
		}
	} else if (commandCode == 'c94q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		}
	} else if (commandCode == 'c94r') {
		if (document.lang == 0) {
			return 'toggle the flashlight';
		} else if (document.lang == 1) {
			return 'toggle the flashlight';
		} else if (document.lang == 2) {
			return 'basculer la lampe de poche';
		} else if (document.lang == 3) {
			return 'بدل حالة المصباح';
		} else if (document.lang == 4) {
			return 'بدل حالة الفلاش';
		} else if (document.lang == 5) {
			return '懐中電灯を切り換える';
		}
	} else if (commandCode == 'c95q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[0]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[0]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		}
	} else if (commandCode == 'c95r') {
		if (document.lang == 0) {
			return 'turn on the flashlight';
		} else if (document.lang == 1) {
			return 'turn on the flashlight';
		} else if (document.lang == 2) {
			return 'allumer la lampe de poche';
		} else if (document.lang == 3) {
			return 'شغل المصباح';
		} else if (document.lang == 4) {
			return 'ولع الفلاش';
		} else if (document.lang == 5) {
			return '懐中電灯を切り換える';
		}
	} else if (commandCode == 'c96q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3] + ' ' + commandValue" + eventSplitter + ".split(' ')[4]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		}
	} else if (commandCode == 'c96r') {
		if (document.lang == 0) {
			return 'turn off the flashlight';
		} else if (document.lang == 1) {
			return 'turn off the flashlight';
		} else if (document.lang == 2) {
			return 'éteignez la lampe de poche';
		} else if (document.lang == 3) {
			return 'اغلق المصباح';
		} else if (document.lang == 4) {
			return 'اطفى الفلاش';
		} else if (document.lang == 5) {
			return '懐中電灯を切り換える';
		}
	} else if (commandCode == 'c97q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		}
	} else if (commandCode == 'c97r') {
		if (document.lang == 0) {
			return 'take a screenshot';
		} else if (document.lang == 1) {
			return 'take a screenshot';
		} else if (document.lang == 2) {
			return 'éteignez la lampe de poche';
		} else if (document.lang == 3) {
			return 'التقط الشاشة';
		} else if (document.lang == 4) {
			return 'خد سكرينة';
		} else if (document.lang == 5) {
			return '懐中電灯を切り換える';
		}
	} else if (commandCode == 'c98q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		}
	} else if (commandCode == 'c98r') {
		if (document.lang == 0) {
			return 'turn on the bluetooth';
		} else if (document.lang == 1) {
			return 'turn on the bluetooth';
		} else if (document.lang == 2) {
			return 'allumez le bluetooth';
		} else if (document.lang == 3) {
			return 'شغل البلوتوث';
		} else if (document.lang == 4) {
			return 'افتح البلوتوث';
		} else if (document.lang == 5) {
			return 'ブルートゥースをオンにする';
		}
	} else if (commandCode == 'c99q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		}
	} else if (commandCode == 'c99r') {
		if (document.lang == 0) {
			return 'turn on the WIFI';
		} else if (document.lang == 1) {
			return 'turn on the WIFI';
		} else if (document.lang == 2) {
			return 'allumez le WIFI';
		} else if (document.lang == 3) {
			return 'شغل الواي فاى';
		} else if (document.lang == 4) {
			return 'افتح الواي فاى';
		} else if (document.lang == 5) {
			return 'ブルートゥースをオンにする';
		}
	} else if (commandCode == 'c100q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2] + ' ' + commandValue" + eventSplitter + ".split(' ')[3]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		}
	} else if (commandCode == 'c100r') {
		if (document.lang == 0) {
			return 'turn off the WIFI';
		} else if (document.lang == 1) {
			return 'turn off the WIFI';
		} else if (document.lang == 2) {
			return 'éteignez le WIFI';
		} else if (document.lang == 3) {
			return 'اغلق الواي فاى';
		} else if (document.lang == 4) {
			return 'طفى الواي فاى';
		} else if (document.lang == 5) {
			return 'ブルートゥースをオンにする';
		}
	} else if (commandCode == 'c101q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		}
	} else if (commandCode == 'c101r') {
		if (document.lang == 0) {
			return 'show the keyboard';
		} else if (document.lang == 1) {
			return 'show the keyboard';
		} else if (document.lang == 2) {
			return 'montrer le clavier';
		} else if (document.lang == 3) {
			return 'اظهر لوحة المفاتيح';
		} else if (document.lang == 4) {
			return 'اظهر الكيبورد';
		} else if (document.lang == 5) {
			return 'キーボードを表示する';
		}
	} else if (commandCode == 'c102q') {
		if (document.lang == 0) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 1) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 2) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 3) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1]");
		} else if (document.lang == 4) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0] + ' ' + commandValue" + eventSplitter + ".split(' ')[1] + ' ' + commandValue" + eventSplitter + ".split(' ')[2]");
		} else if (document.lang == 5) {
			return eval("commandValue" + eventSplitter + ".split(' ')[0]");
		}
	} else if (commandCode == 'c102r') {
		if (document.lang == 0) {
			return 'hide the keyboard';
		} else if (document.lang == 1) {
			return 'hide the keyboard';
		} else if (document.lang == 2) {
			return 'cacher le clavier';
		} else if (document.lang == 3) {
			return 'اخفى لوحة المفاتيح';
		} else if (document.lang == 4) {
			return 'اخفى الكيبورد';
		} else if (document.lang == 5) {
			return 'キーボードを隠す';
		}
	}
}
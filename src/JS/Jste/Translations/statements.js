/*!
 * Conditional Statements Builder
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-15
 */
window.evaluateStatement = function (command) {
	var promise = new Promise(function (resolve, reject) {
		var statement;
		if (document.lang == 0 || document.lang == 1) {
			statement = command.split(' in the case that ')[1];
			var currentStatementBuildingStage = statement;
			var previousStatementBuildingStage;
			var regexA = new RegExp(/(&& |\|\| |^)the value of (\w+) (is greater than|is smaller than|is|isn't) (.*?) (and|or) (the value of|the keyboard is shown|the bluetooth is turned off|the WIFI is turned off|the bluetooth is turned on|the WIFI is turned on|the device is a desktop|the device is a phone|the device is a tablet)/, 'gm');
			var regexB = new RegExp(/(&& |\|\| |^)(the keyboard is shown|the bluetooth is turned off|the WIFI is turned off|the bluetooth is turned on|the WIFI is turned on|the device is a desktop|the device is a phone|the device is a tablet) (and|or) (the value of|the keyboard is shown|the bluetooth is turned off|the WIFI is turned off|the bluetooth is turned on|the WIFI is turned on|the device is a desktop|the device is a phone|the device is a tablet)/, 'gm');
			var regexC = new RegExp(/(&& |\|\| |^)the value of (\w+) (is greater than|is smaller than|is|isn't) (.*?)$/, 'm');
			var regexD = new RegExp(/(&& |\|\| |^)(the keyboard is shown|the bluetooth is turned off|the WIFI is turned off|the bluetooth is turned on|the WIFI is turned on|the device is a desktop|the device is a phone|the device is a tablet)$/, 'gm');
			var statementBuilder = setInterval(function () {
				if (currentStatementBuildingStage != previousStatementBuildingStage) {
					previousStatementBuildingStage = currentStatementBuildingStage;
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexA, function (match, p1, p2, p3, p4, p5, p6, offset, string) {
						var assigmentOperator;
						var comparisonOperator;
						if (p3 == 'is') {
							assigmentOperator = '==';
						} else if (p3 == "isn't") {
							assigmentOperator = '!==';
						} else if (p3 == 'is greater than') {
							assigmentOperator = '>';
						} else if (p3 == 'is smaller than') {
							assigmentOperator = '<';
						}
						if (p5 == 'and') {
							comparisonOperator = '&&';
						} else if (p5 == 'or') {
							comparisonOperator = '||';
						}
						return p1 + "elementValue.get(\"" + p2 + "\") " + assigmentOperator + " \"" + p4 + "\" " + comparisonOperator + " " + p6;
					});
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexB, function (match, p1, p2, p3, p4, offset, string) {
						var comparisonOperator;
						if (p2 == "the keyboard is shown") {
							condition = "Keyboard.isVisible";
						} else if (p2 == "the device is a phone") {
							condition = "window.deviceForm == 'phone'";
						} else if (p2 == "the device is a tablet") {
							condition = "window.deviceForm == 'tablet'";
						} else if (p2 == "the device is a desktop") {
							condition = "window.deviceForm == 'desktop'";
						} else if (p2 == "the bluetooth is turned on") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == true";
						} else if (p2 == "the bluetooth is turned off") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == false";
						} else if (p2 == "the WIFI is turned on") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == true";
						} else if (p2 == "the WIFI is turned off") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == false";
						}
						if (p3 == 'and') {
							comparisonOperator = '&&';
						} else if (p3 == 'or') {
							comparisonOperator = '||';
						}
						return p1 + condition + ' ' + comparisonOperator + ' ' + p4;
					});
				} else {
					clearInterval(statementBuilder);
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexC, function (match, p1, p2, p3, p4, offset, string) {
						var assigmentOperator;
						var comparisonOperator;
						if (p3 == 'is') {
							assigmentOperator = '==';
						} else if (p3 == "isn't") {
							assigmentOperator = '!==';
						} else if (p3 == 'is greater than') {
							assigmentOperator = '>';
						} else if (p3 == 'is smaller than') {
							assigmentOperator = '<';
						}
						return p1 + "elementValue.get(\"" + p2 + "\") " + assigmentOperator + " \"" + p4 + "\"";
					});
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexD, function (match, p1, p2, offset, string) {
						if (p2 == "the keyboard is shown") {
							condition = "Keyboard.isVisible";
						} else if (p2 == "the device is a phone") {
							condition = "window.deviceForm == 'phone'";
						} else if (p2 == "the device is a tablet") {
							condition = "window.deviceForm == 'tablet'";
						} else if (p2 == "the device is a desktop") {
							condition = "window.deviceForm == 'desktop'";
						} else if (p2 == "the bluetooth is turned on") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == true";
						} else if (p2 == "the bluetooth is turned off") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == false";
						} else if (p2 == "the WIFI is turned on") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == true";
						} else if (p2 == "the WIFI is turned off") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == false";
						}
						return p1 + condition;
					});
					finalStatement = currentStatementBuildingStage;
					console.log(finalStatement);
					resolve(finalStatement);
				}
			}, 1);
		} else if (document.lang == 2) {
			statement = command.split('obtenir la valeur de la fente ')[1];
			var currentStatementBuildingStage = statement;
			var previousStatementBuildingStage;
			var regexA = new RegExp(/(&& |\|\| |^)la valeur de (\w+) (est supérieur à|est plus petit que|est) (.*?) (et|ou) (la valeur de|le clavier est affiché|le bluetooth est éteint|le WIFI est éteint|le bluetooth est allumé|le WIFI est activé|le périphérique est un ordinateur de bureau|le périphérique est un téléphone|le périphérique est une tablette)/, 'gm');
			var regexB = new RegExp(/(&& |\|\| |^)(le clavier est affiché|le bluetooth est éteint|le WIFI est éteint|le bluetooth est allumé|le WIFI est activé|le périphérique est un ordinateur de bureau|le périphérique est un téléphone|le périphérique est une tablette) (et|ou) (la valeur de|le clavier est affiché|le bluetooth est éteint|le WIFI est éteint|le bluetooth est allumé|le WIFI est activé|le périphérique est un ordinateur de bureau|le périphérique est un téléphone|le périphérique est une tablette)/, 'gm');
			var regexC = new RegExp(/(&& |\|\| |^)la valeur de (\w+) (est supérieur à|est plus petit que|est) (.*?)$/, 'm');
			var regexD = new RegExp(/(&& |\|\| |^)(le clavier est affiché|le bluetooth est éteint|le WIFI est éteint|le bluetooth est allumé|le WIFI est activé|le périphérique est un ordinateur de bureau|le périphérique est un téléphone|le périphérique est une tablette)$/, 'gm');
			var statementBuilder = setInterval(function () {
				if (currentStatementBuildingStage != previousStatementBuildingStage) {
					previousStatementBuildingStage = currentStatementBuildingStage;
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexA, function (match, p1, p2, p3, p4, p5, p6, offset, string) {
						var assigmentOperator;
						var comparisonOperator;
						if (p3 == 'est') {
							assigmentOperator = '==';
						} else if (p3 == 'est supérieur à') {
							assigmentOperator = '>';
						} else if (p3 == 'est plus petit que') {
							assigmentOperator = '<';
						}
						if (p5 == 'et') {
							comparisonOperator = '&&';
						} else if (p5 == 'ou') {
							comparisonOperator = '||';
						}
						return p1 + "elementValue.get(\"" + p2 + "\") " + assigmentOperator + " \"" + p4 + "\" " + comparisonOperator + " " + p6;
					});
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexB, function (match, p1, p2, p3, p4, offset, string) {
						var comparisonOperator;
						if (p2 == "le clavier est affiché") {
							condition = "Keyboard.isVisible";
						} else if (p2 == "le périphérique est un téléphone") {
							condition = "window.deviceForm == 'phone'";
						} else if (p2 == "le périphérique est une tablette") {
							condition = "window.deviceForm == 'tablet'";
						} else if (p2 == "le périphérique est un ordinateur de bureau") {
							condition = "window.deviceForm == 'desktop'";
						} else if (p2 == "le bluetooth est allumé") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == true";
						} else if (p2 == "le bluetooth est éteint") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == false";
						} else if (p2 == "le WIFI est activé") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == true";
						} else if (p2 == "le WIFI est éteint") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == false";
						}
						if (p3 == 'et') {
							comparisonOperator = '&&';
						} else if (p3 == 'ou') {
							comparisonOperator = '||';
						}
						return p1 + condition + ' ' + comparisonOperator + ' ' + p4;
					});
				} else {
					clearInterval(statementBuilder);
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexC, function (match, p1, p2, p3, p4, offset, string) {
						var assigmentOperator;
						var comparisonOperator;
						if (p3 == 'est') {
							assigmentOperator = '==';
						} else if (p3 == 'est supérieur à') {
							assigmentOperator = '>';
						} else if (p3 == 'est plus petit que') {
							assigmentOperator = '<';
						}
						return p1 + "elementValue.get(\"" + p2 + "\") " + assigmentOperator + " \"" + p4 + "\"";
					});
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexD, function (match, p1, p2, offset, string) {
						if (p2 == "le clavier est affiché") {
							condition = "Keyboard.isVisible";
						} else if (p2 == "le périphérique est un téléphone") {
							condition = "window.deviceForm == 'phone'";
						} else if (p2 == "le périphérique est une tablette") {
							condition = "window.deviceForm == 'tablet'";
						} else if (p2 == "le périphérique est un ordinateur de bureau") {
							condition = "window.deviceForm == 'desktop'";
						} else if (p2 == "le bluetooth est allumé") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == true";
						} else if (p2 == "le bluetooth est éteint") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == false";
						} else if (p2 == "le WIFI est activé") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == true";
						} else if (p2 == "le WIFI est éteint") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == false";
						}
						return p1 + condition;
					});
					finalStatement = currentStatementBuildingStage;
					console.log(finalStatement);
					resolve(finalStatement);
				}
			}, 1);
		} else if (document.lang == 3) {
			statement = command.split(' فى حالة أن ')[1];
			var currentStatementBuildingStage = statement;
			var previousStatementBuildingStage;
			var regexA = new RegExp(/(&& |\|\| |^)قيمة ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) (أكبر من|أصغر من|تساوى|لا تساوى) (.*?) (و|أو) (قيمة|لوحة المفاتيح ظاهرة|البلوتوث مغلق|الواى فاى مغلق|البلوتوث مفتوح|الواى فاى مفتوح|الجهاز هو حاسوب|الجهاز هو جوال|الجهاز هو جهاز لوحى)/, 'gm');
			var regexB = new RegExp(/(&& |\|\| |^)(لوحة المفاتيح ظاهرة|البلوتوث مغلق|الواى فاى مغلق|البلوتوث مفتوح|الواى فاى مفتوح|الجهاز هو حاسوب|الجهاز هو جوال|الجهاز هو جهاز لوحى) (و|أو) (قيمة|لوحة المفاتيح ظاهرة|البلوتوث مغلق|الواى فاى مغلق|البلوتوث مفتوح|الواى فاى مفتوح|الجهاز هو حاسوب|الجهاز هو جوال|الجهاز هو جهاز لوحى)/, 'gm');
			var regexC = new RegExp(/(&& |\|\| |^)قيمة ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) (أكبر من|أصغر من|تساوى|لا تساوى) (.*?)$/, 'm');
			var regexD = new RegExp(/(&& |\|\| |^)(لوحة المفاتيح ظاهرة|البلوتوث مغلق|الواى فاى مغلق|البلوتوث مفتوح|الواى فاى مفتوح|الجهاز هو حاسوب|الجهاز هو جوال|الجهاز هو جهاز لوحى)$/, 'gm');
			var statementBuilder = setInterval(function () {
				if (currentStatementBuildingStage != previousStatementBuildingStage) {
					previousStatementBuildingStage = currentStatementBuildingStage;
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexA, function (match, p1, p2, p3, p4, p5, p6, offset, string) {
						var assigmentOperator;
						var comparisonOperator;
						if (p3 == 'تساوى') {
							assigmentOperator = '==';
						} else if (p3 == 'لا تساوى') {
							assigmentOperator = '!==';
						} else if (p3 == 'أكبر من') {
							assigmentOperator = '>';
						} else if (p3 == 'أصغر من') {
							assigmentOperator = '<';
						}
						if (p5 == 'و') {
							comparisonOperator = '&&';
						} else if (p5 == 'أو') {
							comparisonOperator = '||';
						}
						return p1 + "elementValue.get(\"" + p2 + "\") " + assigmentOperator + " \"" + p4 + "\" " + comparisonOperator + " " + p6;
					});
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexB, function (match, p1, p2, p3, p4, offset, string) {
						var comparisonOperator;
						if (p2 == "لوحة المفاتيح ظاهرة") {
							condition = "Keyboard.isVisible";
						} else if (p2 == "الجهاز هو جوال") {
							condition = "window.deviceForm == 'phone'";
						} else if (p2 == "الجهاز هو جهاز لوحى") {
							condition = "window.deviceForm == 'tablet'";
						} else if (p2 == "الجهاز هو حاسوب") {
							condition = "window.deviceForm == 'desktop'";
						} else if (p2 == "البلوتوث مفتوح") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == true";
						} else if (p2 == "البلوتوث مغلق") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == false";
						} else if (p2 == "الواى فاى مفتوح") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == true";
						} else if (p2 == "الواى فاى مغلق") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == false";
						}
						if (p3 == 'و') {
							comparisonOperator = '&&';
						} else if (p3 == 'أو') {
							comparisonOperator = '||';
						}
						return p1 + condition + ' ' + comparisonOperator + ' ' + p4;
					});
				} else {
					clearInterval(statementBuilder);
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexC, function (match, p1, p2, p3, p4, offset, string) {
						var assigmentOperator;
						var comparisonOperator;
						if (p3 == 'تساوى') {
							assigmentOperator = '==';
						} else if (p3 == 'أكبر من') {
							assigmentOperator = '>';
						} else if (p3 == 'أصغر من') {
							assigmentOperator = '<';
						}
						return p1 + "elementValue.get(\"" + p2 + "\") " + assigmentOperator + " \"" + p4 + "\"";
					});
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexD, function (match, p1, p2, offset, string) {
						if (p2 == "لوحة المفاتيح ظاهرة") {
							condition = "Keyboard.isVisible";
						} else if (p2 == "الجهاز هو جوال") {
							condition = "window.deviceForm == 'phone'";
						} else if (p2 == "الجهاز هو جهاز لوحى") {
							condition = "window.deviceForm == 'tablet'";
						} else if (p2 == "الجهاز هو حاسوب") {
							condition = "window.deviceForm == 'desktop'";
						} else if (p2 == "البلوتوث مفتوح") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == true";
						} else if (p2 == "البلوتوث مغلق") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == false";
						} else if (p2 == "الواى فاى مفتوح") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == true";
						} else if (p2 == "الواى فاى مغلق") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == false";
						}
						return p1 + condition;
					});
					finalStatement = currentStatementBuildingStage;
					console.log(finalStatement);
					resolve(finalStatement);
				}
			}, 1);
		} else if (document.lang == 4) {
			statement = command.split(' فى حالة إن ')[1];
			var currentStatementBuildingStage = statement;
			var previousStatementBuildingStage;
			var regexA = new RegExp(/(&& |\|\| |^)قيمة ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) (أكبر من|أصغر من|تساوى|متساويش) (.*?) (و|أو) (قيمة|الكيبورد ظاهر|البلوتوث مطفى|الواى فاى مطفى|البلوتوث مفتوح|الواى فاى مفتوح|الجهاز كمبيوتر|الجهاز موبايل|الجهاز تابلت)/, 'gm');
			var regexB = new RegExp(/(&& |\|\| |^)(الكيبورد ظاهر|البلوتوث مطفى|الواى فاى مطفى|البلوتوث مفتوح|الواى فاى مفتوح|الجهاز كمبيوتر|الجهاز موبايل|الجهاز تابلت) (و|أو) (قيمة|الكيبورد ظاهر|البلوتوث مطفى|الواى فاى مطفى|البلوتوث مفتوح|الواى فاى مفتوح|الجهاز كمبيوتر|الجهاز موبايل|الجهاز تابلت)/, 'gm');
			var regexC = new RegExp(/(&& |\|\| |^)قيمة ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) (أكبر من|أصغر من|تساوى|متساويش) (.*?)$/, 'm');
			var regexD = new RegExp(/(&& |\|\| |^)(الكيبورد ظاهر|البلوتوث مطفى|الواى فاى مطفى|البلوتوث مفتوح|الواى فاى مفتوح|الجهاز كمبيوتر|الجهاز موبايل|الجهاز تابلت)$/, 'gm');
			var statementBuilder = setInterval(function () {
				if (currentStatementBuildingStage != previousStatementBuildingStage) {
					previousStatementBuildingStage = currentStatementBuildingStage;
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexA, function (match, p1, p2, p3, p4, p5, p6, offset, string) {
						var assigmentOperator;
						var comparisonOperator;
						if (p3 == 'تساوى') {
							assigmentOperator = '==';
						} else if (p3 == 'متساويش') {
							assigmentOperator = '!==';
						} else if (p3 == 'أكبر من') {
							assigmentOperator = '>';
						} else if (p3 == 'أصغر من') {
							assigmentOperator = '<';
						}
						if (p5 == 'و') {
							comparisonOperator = '&&';
						} else if (p5 == 'أو') {
							comparisonOperator = '||';
						}
						return p1 + "elementValue.get(\"" + p2 + "\") " + assigmentOperator + " \"" + p4 + "\" " + comparisonOperator + " " + p6;
					});
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexB, function (match, p1, p2, p3, p4, offset, string) {
						var comparisonOperator;
						if (p2 == "الكيبورد ظاهر") {
							condition = "Keyboard.isVisible";
						} else if (p2 == "الجهاز موبايل") {
							condition = "window.deviceForm == 'phone'";
						} else if (p2 == "الجهاز تابلت") {
							condition = "window.deviceForm == 'tablet'";
						} else if (p2 == "الجهاز كمبيوتر") {
							condition = "window.deviceForm == 'desktop'";
						} else if (p2 == "البلوتوث مفتوح") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == true";
						} else if (p2 == "البلوتوث مطفى") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == false";
						} else if (p2 == "الواى فاى مفتوح") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == true";
						} else if (p2 == "الواى فاى مطفى") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == false";
						}
						if (p3 == 'و') {
							comparisonOperator = '&&';
						} else if (p3 == 'أو') {
							comparisonOperator = '||';
						}
						return p1 + condition + ' ' + comparisonOperator + ' ' + p4;
					});
				} else {
					clearInterval(statementBuilder);
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexC, function (match, p1, p2, p3, p4, offset, string) {
						var assigmentOperator;
						var comparisonOperator;
						if (p3 == 'تساوى') {
							assigmentOperator = '==';
						} else if (p3 == 'متساويش') {
							assigmentOperator = '!==';
						} else if (p3 == 'أكبر من') {
							assigmentOperator = '>';
						} else if (p3 == 'أصغر من') {
							assigmentOperator = '<';
						}
						return p1 + "elementValue.get(\"" + p2 + "\") " + assigmentOperator + " \"" + p4 + "\"";
					});
					currentStatementBuildingStage = currentStatementBuildingStage.replace(regexD, function (match, p1, p2, offset, string) {
						if (p2 == "الكيبورد ظاهر") {
							condition = "Keyboard.isVisible";
						} else if (p2 == "الجهاز موبايل") {
							condition = "window.deviceForm == 'phone'";
						} else if (p2 == "الجهاز تابلت") {
							condition = "window.deviceForm == 'tablet'";
						} else if (p2 == "الجهاز كمبيوتر") {
							condition = "window.deviceForm == 'desktop'";
						} else if (p2 == "البلوتوث مفتوح") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == true";
						} else if (p2 == "البلوتوث مطفى") {
							condition = "cordova.plugins.BluetoothStatus.BTenabled == false";
						} else if (p2 == "الواى فاى مفتوح") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == true";
						} else if (p2 == "الواى فاى مطفى") {
							condition = "WifiWizard.isWifiEnabled(win, fail) == false";
						}
						return p1 + condition;
					});
					finalStatement = currentStatementBuildingStage;
					console.log(finalStatement);
					resolve(finalStatement);
				}
			}, 1);
		}
	});
	return promise;
};
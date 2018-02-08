/*!
 * Commands Scripts
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-07
 */
window.evaluateScript = function(script, event, type, commandInfo, typeOptions) {
	var typePrefix;
	var typeSuffix;
	var commandVarA;
	var commandVarB;
	var eventPrefix;
    var eventSuffix;
	var commandsCommonDeclarations = '';
	var commandAvailableInfo = Object.keys(commandInfo);
	for (var infoID = 0; infoID < commandAvailableInfo.length; infoID++) {
		commandsCommonDeclarations += 'var ' + commandAvailableInfo[infoID] + ' = "' + commandInfo[commandAvailableInfo[infoID]] + '";\nvar script = ' + JSON.stringify(script) + ';';
	}
	if (event == 'E0') {
		eventPrefix = "";
		eventSuffix = "";
	} else if (event == 'E1') {
		eventPrefix = "$('#' + elementName + '').on('tap', function (event) {";
		eventSuffix = "});";
	} else if (event == 'E2') {
		eventPrefix = "$('#' + elementName + '').mouseenter(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E3') {
		eventPrefix = "$('#' + elementName + '').mouseleave(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E4') {
		eventPrefix = "$('#' + elementName + '').mouseout(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E5') {
		eventPrefix = "$('#' + elementName + '').mousemove(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E6') {
		eventPrefix = "$('#' + elementName + '').on('up', function (event) {";
		eventSuffix = "});";
	} else if (event == 'E7') {
		eventPrefix = "$('#' + elementName + '').dblclick(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E8') {
		eventPrefix = "$('#' + elementName + '').contextmenu(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E9') {
		eventPrefix = "$('#' + elementName + '').keypress(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E10') {
		eventPrefix = "$('#' + elementName + '').keydown(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E11') {
		eventPrefix = "$('#' + elementName + '').change(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E12') {
		eventPrefix = "$('#' + elementName + '').focus(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E13') {
		eventPrefix = "$('#' + elementName + '').focusin(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E14') {
		eventPrefix = "$('#' + elementName + '').focusout(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E15') {
		eventPrefix = "$('#' + elementName + '').submit(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E16') {
		eventPrefix = "$('#' + elementName + '').scroll(function (event) {";
		eventSuffix = "});";
	} else if (event == 'E17') {
		eventPrefix = "annyang.addCommands({ [voiceCommand]: function (event) {";
		eventSuffix = "}});";
	} else if (event == 'E18') {
		eventPrefix = "$('#' + elementName + '').visibilityChanged({ callback: function (element, visible) { if (visible == true) {";
		eventSuffix = "}}, runOnLoad: false, frequency: 100});";
	} else if (event == 'E19') {
		eventPrefix = "$('#' + elementName + '').visibilityChanged({ callback: function (element, visible) { if (visible == false) {";
		eventSuffix = "}}, runOnLoad: false, frequency: 100});";
	}
	if (type == 'T0') {
		typePrefix = "";
		typeSuffix = "";
		if (event == 'E17') {
			commandVarA = "pureCommand, voiceCommand";
		} else {
			commandVarA = "pureCommand";
		}
		commandVarB = "pureCommand";
	} else if (type == 'T1') {
		typePrefix = "setTimeout(function () {";
		typeSuffix = "}, timeoutPeriod);";
		if (event == 'E17') {
			commandVarA = "pureCommand, voiceCommand";
		} else {
			commandVarA = "pureCommand";
		}
		commandVarB = "pureCommand";
	} else if (type == 'T2') {
		typePrefix = "setInterval(function () {";
		typeSuffix = "}, intervalPeriod);";
		if (event == 'E17') {
			commandVarA = "pureCommand, voiceCommand";
		} else {
			commandVarA = "pureCommand";
		}
		commandVarB = "pureCommand";
	} else if (type == 'T3') {
		typePrefix = "if (" + typeOptions.primaryCondition + ") {";
		typeSuffix = "}";
		if (typeOptions.secondryConditions) {
			for (var conditionID = 0; conditionID < typeOptions.secondryConditions.length; conditionID++) {
				typeSuffix += " else if (" + typeOptions.secondryConditions[conditionID].condition + ") { " + typeOptions.secondryConditions[conditionID].command + "}";
			}
		}
		if (event == 'E17') {
			commandVarA = "pureCommand, voiceCommand";
		} else {
			commandVarA = "pureCommand";
		}
		commandVarB = "pureCommand";
	}
	if (script.command_id == 'S1') {
		return "(function () { \
            " + commandsCommonDeclarations + " \
            var targetElement; \
            var target = script.target; \
            if (target == 'itself') { \
                targetElement = elementName; \
            } else { \
                targetElement = target; \
            } \
            " + eventPrefix + typePrefix + " \
            $('#' + targetElement + '').remove(); \
            " + typeSuffix + eventSuffix + " \
            })();";
	} else if (script.command_id == 'S2') {
		return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
				$('#' + elementName + '').css('cursor', 'pointer'); \
                " + eventPrefix + typePrefix + " \
                console.log(script.targetType); \
                    var hyperlinkType = script.targetType.punctuationAndArticleRemover(); \
                    var hyperlink = decodeURI(script.target); \
                    event.preventDefault(); \
                    if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['url'][document.langCode]).rating > 0.5) { \
                        window.open(hyperlink); \
                    } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['element'][document.langCode]).rating > 0.5) { \
                        window.location.hash = '#' + hyperlink; \
                    } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['email'][document.langCode]).rating > 0.5) { \
                        window.open('mailto:' + hyperlink); \
                    } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['page'][document.langCode]).rating > 0.5) { \
                        window.changePage(hyperlink); \
                        window.setURLParameter('page', hyperlink); \
                    } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['dialogBox'][document.langCode]).rating > 0.5) { \
                        $('#' + hyperlink + '').iziModal('open'); \
                    } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['sidebar'][document.langCode]).rating > 0.5) { \
                        $('#' + hyperlink + '').sideNav('show'); \
                    } \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
	} else if (script.command_id == 'S3') {
		return "(function () { \
            " + commandsCommonDeclarations + " \
            var targetElement; \
            var target = script.target; \
            if (target == 'itself') { \
                targetElement = elementName; \
            } else { \
                targetElement = target; \
            } \
		  " + eventPrefix + typePrefix + " \
		  if ($('#' + targetElement + '').hasClass('aplayer') || $('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO') { \
			document[targetElement].play(); \
		  } else { \
			document.getElementById(targetElement).play(); \
		  } \
              " + typeSuffix + eventSuffix + "})();";
	} else if (script.command_id == 'S4') {
		return "(function () { \
            " + commandsCommonDeclarations + " \
            var targetElement; \
            var target = script.target; \
            if (target == 'itself') { \
                targetElement = elementName; \
            } else { \
                targetElement = target; \
            } \
            " + eventPrefix + typePrefix + " \
			if ($('#' + targetElement + '').hasClass('aplayer') || $('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO') { \
				document[targetElement].pause(); \
			  } else { \
				document.getElementById(targetElement).pause(); \
			  } \
                " + typeSuffix + eventSuffix + "})();";
	} else if (script.command_id == 'S5') {
		return "(function () { \
            " + commandsCommonDeclarations + " \
            var targetElement; \
            var target = script.target; \
            if (target == 'itself') { \
                targetElement = elementName; \
            } else { \
                targetElement = target; \
            } \
                    var timePosition = script.timePosition.parseValue(); \
					" + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').hasClass('aplayer')) { \
						document[targetElement].audio.currentTime = timePosition; \
                      } else if ($('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO'){ \
                        document[targetElement].currentTime(timePosition); \
                      } else {\
                        document.getElementById(targetElement).currentTime = timePosition; \
					  } \
                        " + typeSuffix + eventSuffix + " \
                    })();";
	} else if (script.command_id == 'S6') {
		return "(function () { \
            " + commandsCommonDeclarations + " \
                    var targetElement; \
                    var target = script.target; \
                    if (target == 'itself') { \
                        targetElement = elementName; \
                    } else { \
                        targetElement = target; \
                    } \
					" + eventPrefix + typePrefix + " \
                    console.log(targetElement + ' ' + script.value.parseValue()); \
                        window.elementValue.set(targetElement, script.value.parseValue()); \
                        " + typeSuffix + eventSuffix + " \
                    })();";
	} else if (script.command_id == 'S7') {
		return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                window.plugins.flashlight.available(function(isAvailable) { \
                    if (isAvailable) { \
                        window.plugins.flashlight.toggle(); \
                    } else { \
                        alert('Flashlight not available on this device'); \
                    } \
                }); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
	} else if (script.command_id == 'S8') {
		return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                window.plugins.flashlight.available(function(isAvailable) { \
                    if (isAvailable) { \
                        window.plugins.flashlight.switchOn(); \
                    } else { \
                        alert('Flashlight not available on this device'); \
                    } \
                }); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
	} else if (script.command_id == 'S9') {
		return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                window.plugins.flashlight.available(function(isAvailable) { \
                    if (isAvailable) { \
                        window.plugins.flashlight.switchOff(); \
                    } else { \
                        alert('Flashlight not available on this device'); \
                    } \
                }); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
	} else if (script.command_id == 'S10') {
		return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                WifiWizard.setWifiEnabled(enabled, win, fail); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
	} else if (script.command_id == 'S11') {
		return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                WifiWizard.setWifiEnabled(false, win, fail); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
	} else if (script.command_id == 'S12') {
		return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                cordova.plugins.BluetoothStatus.initPlugin(); \
                cordova.plugins.BluetoothStatus.promptForBT(); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
	} else if (script.command_id == 'S13') {
		return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                Keyboard.show(); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
	} else if (script.command_id == 'S14') {
		return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                Keyboard.hide(); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
	} else if (script.command_id == 'S15') {
		return "(function () { \
            " + commandsCommonDeclarations + " \
                var dbType = script.dbType; \
                var dbname = script.dbName; \
                var tablename = script.branchName; \
                var dataRaw = script.data; \
                " + eventPrefix + typePrefix + " \
                    var data = '{'; \
                    for (i = 0; i < dataRaw.length; i++) { \
                        if (i != dataRaw.length - 1) { \
                            data += '\"' + dataRaw[i].slotName + '\":\"' + dataRaw[i].value.parseValue().replace(/\\n/g, '<br />') + '\", '; \
                        } else { \
                            data += '\"' + dataRaw[i].slotName + '\":\"' + dataRaw[i].value.parseValue().replace(/\\n/g, '<br />') + '\"}'; \
                        } \
                    } \
                    data = JSON.parse(data); \
                    if (dbType.findBestMatch(window.wordsTranslationsDB.Words['publicC'][document.langCode]).rating > 0.8) { \
                        var newPostKey = firebase.database().ref('public/' + dbname).child(tablename).push().key; \
                        firebase.database().ref('public/' + dbname + '/' + tablename + '/' + newPostKey).set(data); \
                    } else if (dbType.findBestMatch(window.wordsTranslationsDB.Words['privateC'][document.langCode]).rating > 0.8) { \
                        var newPostKey = firebase.database().ref('private/' + window.user.uid + '/' + dbname).child(tablename).push().key; \
                        firebase.database().ref('private/' + window.user.uid + '/' + dbname + '/' + tablename + '/' + newPostKey).set(data); \
                    } \
                    " + typeSuffix + eventSuffix + "})();";
	} else if (script.command_id == 'S16') {
		return "(function () { \
            " + commandsCommonDeclarations + " \
            var dbType = script.dbType; \
            var dbname = script.dbName; \
            var tablename = script.branchName; \
            var calledSlot = script.requiredSlot; \
            var resourceSlotValueResource = script.resourceValue.parseValue(); \
            var resourceSlotName = script.resourceSlot; \
            var targetElement; \
            var target = script.target; \
            if (target == 'itself') { \
                targetElement = elementName; \
            } else { \
                targetElement = target; \
            } \
            (function (" + commandVarB + ") { \
                " + eventPrefix + typePrefix + " \
                    if (dbType.findBestMatch(window.publicCTranslations[document.langID]).rating > 0.5) { \
                        var dbRef = firebase.database().ref('public/' + dbname + '/' + tablename); \
                        dbRef.orderByChild(resourceSlotName).equalTo($('#' + resourceSlotValueResource + '').val()).on('value', function (snapshot) { \
                            snapshot.forEach(function (data) { \
                                $('#' + targetElement + '').val(data.val()[calledSlot]); \
                            }); \
                        }); \
                    } else if (dbType.findBestMatch(window.privateCTranslations[document.langID]).rating > 0.5) { \
                        var dbRef = firebase.database().ref('private/' + window.user.uid + '/' + dbname + '/' + tablename); \
                        dbRef.orderByChild(resourceSlotName).equalTo($('#' + resourceSlotValueResource + '').val()).on('value', function (snapshot) { \
                            snapshot.forEach(function (data) { \
                                $('#' + targetElement + '').val(data.val()[calledSlot]); \
                            }); \
                        }); \
                    }; \
                " + eventSuffix + typeSuffix + " \
            })(" + commandVarB + ");})();";
	} else if (script.command_id == 'S17') {
		return "(function () { \
            " + commandsCommonDeclarations + " \
            var targetElement; \
            var target = script.target; \
            if (target == 'itself') { \
                targetElement = elementName; \
            } else { \
                targetElement = target; \
            } \
                    " + eventPrefix + typePrefix + " \
					    window.setDimension(targetElement, 'width', value.parseValue()); \
                        " + typeSuffix + eventSuffix + " \
                    })()";
	} else if (script.command_id == 'S18') {
		return "(function () { \
            " + commandsCommonDeclarations + " \
            var targetElement; \
            var target = script.target; \
            if (target == 'itself') { \
                targetElement = elementName; \
            } else { \
                targetElement = target; \
            } \
                    " + eventPrefix + typePrefix + " \
					    window.setDimension(targetElement, 'length', value.parseValue()); \
                        " + typeSuffix + eventSuffix + " \
                    })()";
	} else if (script.command_id == 'S19') {
		return "(function () { \
            " + commandsCommonDeclarations + " \
            var targetElement; \
            var target = script.target; \
            if (target == 'itself') { \
                targetElement = elementName; \
            } else { \
                targetElement = target; \
            } \
                    " + eventPrefix + typePrefix + " \
					    window.setBG(targetElement, value.parseValue()); \
                        " + typeSuffix + eventSuffix + " \
                    })()";
	} else if (script.command_id == 'S20') {
		return "(function () { \
            " + commandsCommonDeclarations + " \
            var targetElement; \
            var target = script.target; \
            if (target == 'itself') { \
                targetElement = elementName; \
            } else { \
                targetElement = target; \
            } \
                    " + eventPrefix + typePrefix + " \
					    window.setFontColour(targetElement, value.parseValue()); \
                        " + typeSuffix + eventSuffix + " \
                    })()";
	}
}
/*!
 * Commands Scripts
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-03-19
 */
window.evaluateScript = function (script, event, type, commandInfo, typeOptions) {
    var typePrefix;
    var typeSuffix;
    var commandVarA;
    var commandVarB;
    var eventPrefix;
    var eventSuffix;
    var commandsCommonDeclarations = '';
    var commandAvailableInfo = Object.keys(commandInfo);
    for (var infoID = 0; infoID < commandAvailableInfo.length; infoID++) {
        commandsCommonDeclarations += 'var ' + commandAvailableInfo[infoID] + ' = `' + commandInfo[commandAvailableInfo[infoID]] + '`;\nvar script = ' + JSON.stringify(script) + ';';
    }
    if (event == 'E0') {
        eventPrefix = ``;
        eventSuffix = ``;
    } else if (event == 'E1') {
        eventPrefix = `$('#' + elementName + '').on('tap', function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E2') {
        eventPrefix = `$('#' + elementName + '').mouseenter(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E3') {
        eventPrefix = `$('#' + elementName + '').mouseleave(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E4') {
        eventPrefix = `$('#' + elementName + '').mouseout(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E5') {
        eventPrefix = `$('#' + elementName + '').mousemove(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E6') {
        eventPrefix = `$('#' + elementName + '').on('up', function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E7') {
        eventPrefix = `$('#' + elementName + '').dblclick(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E8') {
        eventPrefix = `$('#' + elementName + '').contextmenu(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E9') {
        eventPrefix = `$('#' + elementName + '').keypress(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E10') {
        eventPrefix = `$('#' + elementName + '').keydown(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E11') {
        eventPrefix = `$('#' + elementName + '').change(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E12') {
        eventPrefix = `$('#' + elementName + '').focus(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E13') {
        eventPrefix = `$('#' + elementName + '').focusin(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E14') {
        eventPrefix = `$('#' + elementName + '').focusout(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E15') {
        eventPrefix = `$('#' + elementName + '').submit(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E16') {
        eventPrefix = `$('#' + elementName + '').scroll(function (event) { event.stopPropagation();`;
        eventSuffix = `});`;
    } else if (event == 'E17') {
        eventPrefix = `annyang.addCommands({ [voiceCommand]: function (event) {`;
        eventSuffix = `}});`;
    } else if (event == 'E18') {
        eventPrefix = `$('#' + elementName + '').visibilityChanged({ callback: function (element, visible) { if (visible == true) {`;
        eventSuffix = `}}, runOnLoad: false, frequency: 100});`;
    } else if (event == 'E19') {
        eventPrefix = `$('#' + elementName + '').visibilityChanged({ callback: function (element, visible) { if (visible == false) {`;
        eventSuffix = `}}, runOnLoad: false, frequency: 100});`;
    }
    if (type == 'T0') {
        typePrefix = ``;
        typeSuffix = ``;
        if (event == 'E17') {
            commandVarA = `script, voiceCommand`;
        } else {
            commandVarA = `script`;
        }
        commandVarB = `script`;
    } else if (type == 'T1') {
        typePrefix = `setTimeout(function () {`;
        typeSuffix = `}, timeoutPeriod);`;
        if (event == 'E17') {
            commandVarA = `script, voiceCommand`;
        } else {
            commandVarA = `script`;
        }
        commandVarB = `script`;
    } else if (type == 'T2') {
        typePrefix = `setInterval(function () {`;
        typeSuffix = `}, intervalPeriod);`;
        if (event == 'E17') {
            commandVarA = `script, voiceCommand`;
        } else {
            commandVarA = `script`;
        }
        commandVarB = `script`;
    } else if (type == 'T3') {
        typePrefix = `if (` + typeOptions.primaryCondition + `) {`;
        typeSuffix = `}`;
        if (typeOptions.secondryConditions) {
            for (var conditionID = 0; conditionID < typeOptions.secondryConditions.length; conditionID++) {
                typeSuffix += ` else if (` + typeOptions.secondryConditions[conditionID].condition + `) { ` + typeOptions.secondryConditions[conditionID].command + `}`;
            }
        }
        if (event == 'E17') {
            commandVarA = `script, voiceCommand`;
        } else {
            commandVarA = `script`;
        }
        commandVarB = `script`;
    }
    var functionArgumentsParam = `, arguments`;
    if (script.command_id == 'S1') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
            ${eventPrefix + typePrefix}
            var targetElement;
            var target = script.target.parseValue(false${functionArgumentsParam});
            if (target == 'itself') {
                targetElement = elementName;
            } else {
                targetElement = target;
            }
            $('#' + targetElement + '').remove();
            ${typeSuffix + eventSuffix}
            })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S2') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
				$('#' + elementName + '').css('cursor', 'pointer');
                ${eventPrefix + typePrefix}
                    var hyperlinkType = script.targetType.punctuationAndArticleRemover();
                    var hyperlink = decodeURI(script.target.parseValue(false${functionArgumentsParam}));
                    event.preventDefault();
                    if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['url'][document.langCode]).rating > 0.5) {
                        window.open(hyperlink);
                    } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['element'][document.langCode]).rating > 0.5) {
                        window.location.hash = '#' + hyperlink;
                    } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['email'][document.langCode]).rating > 0.5) {
                        window.open('mailto:' + hyperlink);
                    } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['page'][document.langCode]).rating > 0.5) {
                        window.changePage(hyperlink);
                        window.setURLParameter('page', hyperlink);
                    } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['dialogBox'][document.langCode]).rating > 0.5) {
                        $('#' + hyperlink + '').iziModal('open');
                    } else if (hyperlinkType.findBestMatch(wordsTranslationsDB.Words['sidebar'][document.langCode]).rating > 0.5) {
                        $('#' + hyperlink + '').sideNav('show');
                    }
                    ${typeSuffix + eventSuffix}
            })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S3') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
		  ${eventPrefix + typePrefix}
          var targetElement;
          var target = script.target.parseValue(false${functionArgumentsParam});
          if (target == 'itself') {
              targetElement = elementName;
          } else {
              targetElement = target;
          }
		  if ($('#' + targetElement + '').hasClass('aplayer') || $('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO') {
			document[targetElement].play();
		  } else {
			document.getElementById(targetElement).play();
		  }
                    ${typeSuffix + eventSuffix}
              })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S4') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
            ${eventPrefix + typePrefix}
            var targetElement;
            var target = script.target.parseValue(false${functionArgumentsParam});
            if (target == 'itself') {
                targetElement = elementName;
            } else {
                targetElement = target;
            }
			if ($('#' + targetElement + '').hasClass('aplayer') || $('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO') {
				document[targetElement].pause();
			  } else {
				document.getElementById(targetElement).pause();
			  }
                    ${typeSuffix + eventSuffix}
                })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S5') {
        return `(function () {
            ${commandsCommonDeclarations} 
            (function (${commandVarB + functionArgumentsParam}) {
					${eventPrefix + typePrefix}
                    var targetElement;
                    var target = script.target.parseValue(false${functionArgumentsParam});
                    if (target == 'itself') {
                        targetElement = elementName;
                    } else {
                        targetElement = target;
                    }
                    var timePosition = script.timePosition.parseValue(false${functionArgumentsParam});
					if ($('#' + targetElement + '').hasClass('aplayer')) {
						document[targetElement].audio.currentTime = timePosition;
                      } else if ($('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO'){
                        document[targetElement].currentTime(timePosition);
                      } else {
                        document.getElementById(targetElement).currentTime = timePosition;
					  }
                        ${typeSuffix + eventSuffix}
                    })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S6') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                    ${eventPrefix + typePrefix}
                    var targetElement;
                    var target = script.target.parseValue(false${functionArgumentsParam});
                    if (target == 'itself') {
                        targetElement = elementName;
                    } else {
                        targetElement = target;
                    }
                        window.elementValue.set(targetElement, script.value.parseValue(false${functionArgumentsParam}));
                        ${typeSuffix + eventSuffix}
                    })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S7') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                ${eventPrefix + typePrefix}
                window.plugins.flashlight.available(function(isAvailable) {
                    if (isAvailable) {
                        window.plugins.flashlight.toggle();
                    } else {
                        alert('Flashlight not available on this device');
                    }
                });
                    ${typeSuffix + eventSuffix}
            })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S8') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                ${eventPrefix + typePrefix}
                window.plugins.flashlight.available(function(isAvailable) {
                    if (isAvailable) {
                        window.plugins.flashlight.switchOn();
                    } else {
                        alert('Flashlight not available on this device');
                    }
                });
                    ${typeSuffix + eventSuffix}
            })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S9') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                ${eventPrefix + typePrefix}
                window.plugins.flashlight.available(function(isAvailable) {
                    if (isAvailable) {
                        window.plugins.flashlight.switchOff();
                    } else {
                        alert('Flashlight not available on this device');
                    }
                });
                    ${typeSuffix + eventSuffix}
            })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S10') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                ${eventPrefix + typePrefix}
                WifiWizard.setWifiEnabled(enabled, win, fail);
                    ${typeSuffix + eventSuffix}
            })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S11') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                ${eventPrefix + typePrefix}
                WifiWizard.setWifiEnabled(false, win, fail);
                    ${typeSuffix + eventSuffix}
            })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S12') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                ${eventPrefix + typePrefix}
                cordova.plugins.BluetoothStatus.initPlugin();
                cordova.plugins.BluetoothStatus.promptForBT();
                    ${typeSuffix + eventSuffix}
            })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S13') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                ${eventPrefix + typePrefix}
                Keyboard.show();
                    ${typeSuffix + eventSuffix}
            })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S14') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                ${eventPrefix + typePrefix}
                Keyboard.hide();
                    ${typeSuffix + eventSuffix}
            })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S15') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                ${eventPrefix + typePrefix}
                var dbType = script.dbType.parseValue(false${functionArgumentsParam});
                var dbname = script.dbName.parseValue(false${functionArgumentsParam});
                var tablename = script.branchName.parseValue(false${functionArgumentsParam});
                var dataRaw = script.data;
                    var data = '{';
                    for (var i = 0; i < Object.keys(dataRaw).length; i++) {
                        if (i != Object.keys(dataRaw).length - 1) {
                            data += '"' + dataRaw[i].slotName.parseValue(false${functionArgumentsParam}) + '":"' + dataRaw[i].value.parseValue(false${functionArgumentsParam}).replace(/\\n/g, '<br />') + '", ';
                        } else {
                            data += '"' + dataRaw[i].slotName.parseValue(false${functionArgumentsParam}) + '":"' + dataRaw[i].value.parseValue(false${functionArgumentsParam}).replace(/\\n/g, '<br />') + '"}';
                        }
                    }
                    data = JSON.parse(data);
                    if (dbType.findBestMatch(window.wordsTranslationsDB.Words['publicC'][document.langCode]).rating > 0.8) {
                        var newPostKey = firebase.database().ref('public/' + dbname).child(tablename).push().key;
                        firebase.database().ref('public/' + dbname + '/' + tablename + '/' + newPostKey).set(data);
                    } else if (dbType.findBestMatch(window.wordsTranslationsDB.Words['privateC'][document.langCode]).rating > 0.8) {
                        var newPostKey = firebase.database().ref('private/' + window.user.uid + '/' + dbname).child(tablename).push().key;
                        firebase.database().ref('private/' + window.user.uid + '/' + dbname + '/' + tablename + '/' + newPostKey).set(data);
                    }
                    ${typeSuffix + eventSuffix}
                    })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S16') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                ${eventPrefix + typePrefix}
                var dbType = script.dbType.parseValue(false${functionArgumentsParam});
                var dbname = script.dbName.parseValue(false${functionArgumentsParam});
                var tablename = script.branchName.parseValue(false${functionArgumentsParam});
                var calledSlot = script.requiredSlot.parseValue(false${functionArgumentsParam});
                var resourceSlotValueResource = script.resourceValue.parseValue(false${functionArgumentsParam});
                var resourceSlotName = script.resourceSlot.parseValue(false${functionArgumentsParam});
                var targetElement;
                var target = script.target.parseValue(false${functionArgumentsParam});
                if (target == 'itself') {
                    targetElement = elementName;
                } else {
                    targetElement = target;
                }
                    if (dbType.findBestMatch(wordsTranslationsDB.Words['publicC'][document.langCode]).rating > 0.5) {
                        var dbRef = firebase.database().ref('public/' + dbname + '/' + tablename);
                        dbRef.orderByChild(resourceSlotName).equalTo($('#' + resourceSlotValueResource + '').val()).on('value', function (snapshot) {
                            snapshot.forEach(function (data) {
                                $('#' + targetElement + '').val(data.val()[calledSlot]);
                            });
                        });
                    } else if (dbType.findBestMatch(wordsTranslationsDB.Words['privateC'][document.langCode]).rating > 0.5) {
                        var dbRef = firebase.database().ref('private/' + window.user.uid + '/' + dbname + '/' + tablename);
                        dbRef.orderByChild(resourceSlotName).equalTo($('#' + resourceSlotValueResource + '').val()).on('value', function (snapshot) {
                            snapshot.forEach(function (data) {
                                $('#' + targetElement + '').val(data.val()[calledSlot]);
                            });
                        });
                    };
                ${eventSuffix + typeSuffix}
            })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S17') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                    ${eventPrefix + typePrefix}
            var targetElement;
            var target = script.target.parseValue(false${functionArgumentsParam});
            var value = script.value.parseValue(false${functionArgumentsParam});
            if (target == 'itself') {
                targetElement = elementName;
            } else {
                targetElement = target;
            }
					    window.setDimension(targetElement, 'width', value);
                        ${typeSuffix + eventSuffix}
                    })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S18') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                    ${eventPrefix + typePrefix}
            var targetElement;
            var target = script.target.parseValue(false${functionArgumentsParam});
            var value = script.value.parseValue(false${functionArgumentsParam});
            if (target == 'itself') {
                targetElement = elementName;
            } else {
                targetElement = target;
            }
					    window.setDimension(targetElement, 'length', value);
                        ${typeSuffix + eventSuffix}
                    })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S19') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                    ${eventPrefix + typePrefix}
                    var targetElement;
                    var target = script.target.parseValue(false${functionArgumentsParam});
                    var value = script.value.parseValue(false${functionArgumentsParam});
                    if (target == 'itself') {
                        targetElement = elementName;
                    } else {
                        targetElement = target;
                    }
					    window.setBG(targetElement, value);
                        ${typeSuffix + eventSuffix}
                    })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S20') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                    ${eventPrefix + typePrefix}
                    var targetElement;
                    var target = script.target.parseValue(false${functionArgumentsParam});
                    var value = script.value.parseValue(false${functionArgumentsParam});
                    if (target == 'itself') {
                        targetElement = elementName;
                    } else {
                        targetElement = target;
                    }
					    window.setFontColour(targetElement, value);
                        ${typeSuffix + eventSuffix}
                    })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S21') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                    ${eventPrefix + typePrefix}
                    var variableName = script.variableName;
                    var value = script.value;
                    window.setVariable(variableName.parseValue(false${functionArgumentsParam}), value.parseValue(false${functionArgumentsParam}))
                        ${typeSuffix + eventSuffix}
                    })(${commandVarB + functionArgumentsParam});})();`;
    } else if (script.command_id == 'S22') {
        return `(function () {
            ${commandsCommonDeclarations}
            (function (${commandVarB + functionArgumentsParam}) {
                    ${eventPrefix + typePrefix}
                    var functionName = script.functionName.parseValue(false${functionArgumentsParam});
                    var arguments = script.arguemtns;
                    if (arguemnts) {
                    window.jsteFunctionsStore[functionName](arguemnts.parseList(true));
                    } else {
                        window.jsteFunctionsStore[functionName]();
                    }
                        ${typeSuffix + eventSuffix}
                    })(${commandVarB + functionArgumentsParam});})();`;
    }
}
/*!
 * Commands Scripts
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-12
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
        commandsCommonDeclarations += 'var ' + commandAvailableInfo[infoID] + ' = "' + commandInfo[commandAvailableInfo[infoID]] + '";';
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
    if (script == 'S1') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
            if (window.commandsFnTranslations('c3q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c3r')) { \
        " + eventPrefix + typePrefix + " \
            $('#' + elementName + '').remove(); \
        }); \
    } else { \
        var targetName = window.commandsFnTranslations('c4', '" + event + "', " + commandVarA + "); \
        $('#' + elementName + '').click(function () { \
            $('#' + targetName + '').remove(); \
            " + typeSuffix + eventSuffix + " \
            }})();";
    } else if (script == 'S2') {
        return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
				$('#' + elementName + '').css('cursor', 'pointer'); \
                " + eventPrefix + typePrefix + " \
                    var targetURL; \
                    event.preventDefault(); \
                    if (window.commandsFnTranslations('c44q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c44r')) { \
                        targetURL = window.commandsFnTranslations('c44t', '" + event + "', " + commandVarA + "); \
                        window.open(targetURL); \
                    } else if (window.commandsFnTranslations('c45q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c45r')) { \
                        targetURL = window.commandsFnTranslations('c45t', '" + event + "', " + commandVarA + "); \
                        window.location.hash = '#' + targetURL; \
                    } else if (window.commandsFnTranslations('c46q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c46r')) { \
                        targetURL = window.commandsFnTranslations('c46t', '" + event + "', " + commandVarA + "); \
                        window.open('mailto:' + targetURL); \
                    } else if (window.commandsFnTranslations('c47q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c47r')) { \
                        targetURL = window.commandsFnTranslations('c47t', '" + event + "', " + commandVarA + "); \
                        window.changePage(targetURL); \
                        window.setURLParameter('page', targetURL); \
                    } \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
    } else if (script == 'S18') {
        return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
				$('#' + elementName + '').css('cursor', 'pointer'); \
                " + eventPrefix + typePrefix + " \
                    var targetURL; \
                    event.preventDefault(); \
                    if (window.commandsFnTranslations('c91q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c91r')) { \
                        targetURL = window.commandsFnTranslations('c91t', '" + event + "', " + commandVarA + "); \
                        $('#' + targetURL + '').iziModal('open'); \
                    } else if (window.commandsFnTranslations('c93q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c93r')) { \
                        targetURL = window.commandsFnTranslations('c93t', '" + event + "', " + commandVarA + "); \
                        $('#' + targetURL + '').sideNav('show'); \
                    } \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
    } else if (script == 'S19') {
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
    } else if (script == 'S20') {
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
    } else if (script == 'S21') {
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
    } else if (script == 'S22') {
        return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                navigator.screenshot.save() \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
    } else if (script == 'S23') {
        return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                cordova.plugins.BluetoothStatus.initPlugin(); \
                cordova.plugins.BluetoothStatus.promptForBT(); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
    } else if (script == 'S24') {
        return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                WifiWizard.setWifiEnabled(enabled, win, fail); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
    } else if (script == 'S25') {
        return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                WifiWizard.setWifiEnabled(false, win, fail); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
    } else if (script == 'S26') {
        return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                Keyboard.show(); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
    } else if (script == 'S27') {
        return "(function (" + commandVarB + ") { \
            " + commandsCommonDeclarations + " \
                " + eventPrefix + typePrefix + " \
                Keyboard.hide(); \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
    } else if (script == 'S3') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
            var targetElement = window.commandsFnTranslations('c7', '" + event + "', " + commandVarA + "); \
		  " + eventPrefix + typePrefix + " \
		  if ($('#' + targetElement + '').hasClass('aplayer') || $('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO') { \
			document[targetElement].play(); \
		  } else { \
			document.getElementById(targetElement).play(); \
		  } \
              " + typeSuffix + eventSuffix + "})();";
    } else if (script == 'S4') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                var targetElement = window.commandsFnTranslations('c8', '" + event + "', " + commandVarA + "); \
            " + eventPrefix + typePrefix + " \
			if ($('#' + targetElement + '').hasClass('aplayer') || $('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO') { \
				document[targetElement].pause(); \
			  } else { \
				document.getElementById(targetElement).pause(); \
			  } \
                " + typeSuffix + eventSuffix + "})();";
    } else if (script == 'S5') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                if (window.commandsFnTranslations('c10q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c10rA')) { \
                    var targetElement = window.commandsFnTranslations('c11', '" + event + "', " + commandVarA + "); \
					" + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.elementValue.set(elementName, $('#' + targetElement + '').prop('color')); \
					} else {\
                        window.elementValue.set(elementName, window.elementValue.get(targetElement)); \
					}\
                        " + typeSuffix + eventSuffix + " \
                } else { \
                    var newVal = window.evaluateValue(window.commandsFnTranslations('c12', '" + event + "', " + commandVarA + ")); \
                    " + eventPrefix + typePrefix + " \
                    window.elementValue.set(elementName, eval(newVal)); \
                        " + typeSuffix + eventSuffix + " \
                }}();";
    } else if (script == 'S6') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                var targetElement = window.commandsFnTranslations('c14', '" + event + "', " + commandVarA + "); \
                if (window.commandsFnTranslations('c16q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c16rA')) { \
                    var resource = window.commandsFnTranslations('c15', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + resource + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.elementValue.set(targetElement, $('#' + resource + '').prop('color')); \
					} else {\
                        window.elementValue.set(targetElement, window.elementValue.get(resource)); \
					}\
                        " + typeSuffix + eventSuffix + " \
                    } else if (window.commandsFnTranslations('c16q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c16rB')) { \
                    (function (" + commandVarB + ", targetElement) { \
                        " + eventPrefix + typePrefix + " \
                        window.elementValue.set(targetElement, window.commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + ", targetElement); \
                } else { \
                    var newVal = window.evaluateValue(window.commandsFnTranslations('c17', '" + event + "', " + commandVarA + ", targetElement)); \
                    " + eventPrefix + typePrefix + " \
                    window.elementValue.set(targetElement, eval(newVal)); \
                        " + typeSuffix + eventSuffix + " \
                    }})();";
    } else if (script == 'S10') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                if (window.commandsFnTranslations('c56q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c56rA')) { \
                    var targetElement = window.commandsFnTranslations('c57', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.setFontColour(elementName, $('#' + targetElement + '').prop('color')); \
					} else {\
					    window.setFontColour(elementName, window.elementValue.get(targetElement)); \
					}\
                        " + typeSuffix + eventSuffix + " \
                } else if (window.commandsFnTranslations('c56q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c56rB')) { \
                    (function (" + commandVarB + ") { \
                        " + eventPrefix + typePrefix + " \
						    window.setFontColour(elementName, window.commandsFnTranslations('c41', '" + event + "', " + commandVarA + ")); \
                            " + typeSuffix + eventSuffix + " \
                    })(" + commandVarB + "); \
                } else { \
                    var newVal = window.evaluateValue(window.commandsFnTranslations('c58', '" + event + "', " + commandVarA + ")); \
                    " + eventPrefix + typePrefix + " \
						window.setFontColour(elementName, eval(newVal)); \
                        " + typeSuffix + eventSuffix + " \
                }})();";
    } else if (script == 'S11') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                var targetElement = window.commandsFnTranslations('c60', '" + event + "', " + commandVarA + "); \
                if (window.commandsFnTranslations('c62q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c62rA')) { \
                    var resource = window.commandsFnTranslations('c61', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + resource + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.setFontColour(targetElement, $('#' + resource + '').prop('color')); \
					} else {\
                        window.setFontColour(targetElement, window.elementValue.get(resource)); \
					}\
                        " + typeSuffix + eventSuffix + " \
                    } else if (window.commandsFnTranslations('c62q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c62rB')) { \
                    (function (" + commandVarB + ", targetElement) { \
                        " + eventPrefix + typePrefix + " \
							window.setFontColour(targetElement, window.commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + ", targetElement); \
                } else { \
                    var newVal = window.evaluateValue(window.commandsFnTranslations('c63', '" + event + "', " + commandVarA + ", targetElement)); \
                    " + eventPrefix + typePrefix + " \
                    window.setFontColour(targetElement, eval(newVal)); \
                        " + typeSuffix + eventSuffix + " \
                    }})();";
    } else if (script == 'S12') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                if (window.commandsFnTranslations('c65q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c65rA')) { \
                    var targetElement = window.commandsFnTranslations('c66', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.setBG(elementName, $('#' + targetElement + '').prop('color')); \
					} else {\
					    window.setBG(elementName, window.elementValue.get(targetElement)); \
					}\
                        " + typeSuffix + eventSuffix + " \
                } else if (window.commandsFnTranslations('c65q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c65rB')) { \
                    (function (" + commandVarB + ") { \
                        " + eventPrefix + typePrefix + " \
						    window.setBG(elementName, window.commandsFnTranslations('c41', '" + event + "', " + commandVarA + ")); \
                            " + typeSuffix + eventSuffix + " \
                    })(" + commandVarB + "); \
                } else { \
                    var newVal = window.evaluateValue(window.commandsFnTranslations('c67', '" + event + "', " + commandVarA + ")); \
                    " + eventPrefix + typePrefix + " \
						window.setBG(elementName, eval(newVal)); \
                        " + typeSuffix + eventSuffix + " \
                }})();";
    } else if (script == 'S13') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                var targetElement = window.commandsFnTranslations('c69', '" + event + "', " + commandVarA + "); \
                if (window.commandsFnTranslations('c71q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c71rA')) { \
                    var resource = window.commandsFnTranslations('c70', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + resource + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.setBG(targetElement, $('#' + resource + '').prop('color')); \
					} else {\
                        window.setBG(targetElement, window.elementValue.get(resource)); \
					}\
                        " + typeSuffix + eventSuffix + " \
                    } else if (window.commandsFnTranslations('c71q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c71rB')) { \
                    (function (" + commandVarB + ", targetElement) { \
                        " + eventPrefix + typePrefix + " \
							window.setBG(targetElement, window.commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + ", targetElement); \
                } else { \
                    var newVal = window.evaluateValue(window.commandsFnTranslations('c72', '" + event + "', " + commandVarA + ", targetElement)); \
                    " + eventPrefix + typePrefix + " \
                    window.setBG(targetElement, eval(newVal)); \
                        " + typeSuffix + eventSuffix + " \
                    }})();";
    } else if (script == 'S14') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                if (window.commandsFnTranslations('c74q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c74rA')) { \
                    var targetElement = window.commandsFnTranslations('c75', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.scale(elementName, 'length', $('#' + targetElement + '').prop('color')); \
					} else {\
					    window.scale(elementName, 'length', window.elementValue.get(targetElement)); \
					}\
                        " + typeSuffix + eventSuffix + " \
                } else if (window.commandsFnTranslations('c74q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c74rB')) { \
                    (function (" + commandVarB + ") { \
                        " + eventPrefix + typePrefix + " \
						    window.scale(elementName, 'length', window.commandsFnTranslations('c41', '" + event + "', " + commandVarA + ")); \
                            " + typeSuffix + eventSuffix + " \
                    })(" + commandVarB + "); \
                } else { \
                    var newVal = window.evaluateValue(window.commandsFnTranslations('c76', '" + event + "', " + commandVarA + ")); \
                    " + eventPrefix + typePrefix + " \
						window.scale(elementName, 'length', eval(newVal)); \
                        " + typeSuffix + eventSuffix + " \
                }})();";
    } else if (script == 'S15') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                var targetElement = window.commandsFnTranslations('c78', '" + event + "', " + commandVarA + "); \
                if (window.commandsFnTranslations('c80q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c80rA')) { \
                    var resource = window.commandsFnTranslations('c79', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + resource + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.scale(targetElement, 'length', $('#' + resource + '').prop('color')); \
					} else {\
                        window.scale(targetElement, 'length', window.elementValue.get(resource)); \
					}\
                        " + typeSuffix + eventSuffix + " \
                    } else if (window.commandsFnTranslations('c80q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c80rB')) { \
                    (function (" + commandVarB + ", targetElement) { \
                        " + eventPrefix + typePrefix + " \
							window.scale(targetElement, 'length', window.commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + ", targetElement); \
                } else { \
                    var newVal = window.evaluateValue(window.commandsFnTranslations('c81', '" + event + "', " + commandVarA + ", targetElement)); \
                    " + eventPrefix + typePrefix + " \
                    window.scale(targetElement, 'length', eval(newVal)); \
                        " + typeSuffix + eventSuffix + " \
                    }})();";
    } else if (script == 'S16') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                if (window.commandsFnTranslations('c83q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c83rA')) { \
                    var targetElement = window.commandsFnTranslations('c84', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.scale(elementName, 'height', $('#' + targetElement + '').prop('color')); \
					} else {\
					    window.scale(elementName, 'height', window.elementValue.get(targetElement)); \
					}\
                        " + typeSuffix + eventSuffix + " \
                } else if (window.commandsFnTranslations('c83q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c83rB')) { \
                    (function (" + commandVarB + ") { \
                        " + eventPrefix + typePrefix + " \
						    window.scale(elementName, 'height', window.commandsFnTranslations('c41', '" + event + "', " + commandVarA + ")); \
                            " + typeSuffix + eventSuffix + " \
                    })(" + commandVarB + "); \
                } else { \
                    var newVal = window.evaluateValue(window.commandsFnTranslations('c85', '" + event + "', " + commandVarA + ")); \
                    " + eventPrefix + typePrefix + " \
						window.scale(elementName, 'height', eval(newVal)); \
                        " + typeSuffix + eventSuffix + " \
                }})()";
    } else if (script == 'S17') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                var targetElement = window.commandsFnTranslations('c87', '" + event + "', " + commandVarA + "); \
                if (window.commandsFnTranslations('c89q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c71rA')) { \
                    var resource = window.commandsFnTranslations('c88', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + resource + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.scale(targetElement, 'height', $('#' + resource + '').prop('color')); \
					} else {\
                        window.scale(targetElement, 'height', window.elementValue.get(resource)); \
					}\
                        " + typeSuffix + eventSuffix + " \
                    } else if (window.commandsFnTranslations('c89q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c89rB')) { \
                    (function (" + commandVarB + ", targetElement) { \
                        " + eventPrefix + typePrefix + " \
							window.scale(targetElement, 'height', window.commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + ", targetElement); \
                } else { \
                    var newVal = window.evaluateValue(window.commandsFnTranslations('c90', '" + event + "', " + commandVarA + ", targetElement)); \
                    " + eventPrefix + typePrefix + " \
                    window.scale(targetElement, 'height', eval(newVal)); \
                        " + typeSuffix + eventSuffix + " \
                    }})();";
    } else if (script == 'S7') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                var targetElement = window.commandsFnTranslations('c19', '" + event + "', " + commandVarA + "); \
                if (window.commandsFnTranslations('c21q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c21rA')) { \
                    var resource = window.commandsFnTranslations('c20', '" + event + "', " + commandVarA + ", targetElement); \
					" + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').hasClass('aplayer')) { \
						document[targetElement].audio.currentTime = window.elementValue.get(resource); \
                      } else if ($('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO'){ \
                        document[targetElement].currentTime(window.elementValue.get(resource)); \
                      } else {\
                        document.getElementById(targetElement).currentTime = window.elementValue.get(resource); \
					  } \
                        " + typeSuffix + eventSuffix + " \
                } else if (window.commandsFnTranslations('c21q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c21rB')) { \
                    (function (" + commandVarB + ") { \
						" + eventPrefix + typePrefix + " \
						if ($('#' + targetElement + '').hasClass('aplayer')) { \
							document[targetElement].audio.currentTime = window.commandsFnTranslations('c42', '" + event + "', " + commandVarA + ", targetElement); \
                        } else if ($('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO'){ \
                          document[targetElement].currentTime(window.commandsFnTranslations('c42', '" + event + "', " + commandVarA + ", targetElement)); \
                        } else {\
                            document.getElementById(targetElement).currentTime = window.commandsFnTranslations('c42', '" + event + "', " + commandVarA + ", targetElement); \
						} \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + "); \
                } else { \
                    var newTimePosition = window.commandsFnTranslations('c22', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
                    document.getElementById(targetElement).currentTime = newTimePosition; \
                    " + typeSuffix + eventSuffix + " \
                }})();";
    } else if (script == 'S8') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
                var dbType = window.commandsFnTranslations('c48', '" + event + "', " + commandVarA + "); \
                var dbname = window.commandsFnTranslations('c24', '" + event + "', " + commandVarA + ", dbType); \
                var tablename = window.commandsFnTranslations('c25', '" + event + "', " + commandVarA + "); \
                var dataRaw = window.commandsFnTranslations('c26', '" + event + "', " + commandVarA + ", dbType, dbname, tablename); \
                " + eventPrefix + typePrefix + " \
                    var data = '{'; \
                    for (i = 0; i < dataRaw.length; i++) { \
                        var resource = window.commandsFnTranslations('c32', '', dataRaw[i]); \
                        var slot = window.commandsFnTranslations('c33', '', dataRaw[i]); \
                        if (i != dataRaw.length - 1) { \
                            data += '\"' + slot + '\":\"' + window.elementValue.get(resource).replace(/\\n/g, '<br />') + '\", '; \
                        } else { \
                            data += '\"' + slot + '\":\"' + window.elementValue.get(resource).replace(/\\n/g, '<br />') + '\"}'; \
                        } \
                    } \
                    data = JSON.parse(data); \
                    if (dbType == window.publicCTranslations[document.lang]) { \
                        var newPostKey = firebase.database().ref('public/' + dbname).child(tablename).push().key; \
                        firebase.database().ref('public/' + dbname + '/' + tablename + '/' + newPostKey).set(data); \
                    } else if (dbType == window.privateCTranslations[document.lang]) { \
                        var newPostKey = firebase.database().ref('private/' + window.user.uid + '/' + dbname).child(tablename).push().key; \
                        firebase.database().ref('private/' + window.user.uid + '/' + dbname + '/' + tablename + '/' + newPostKey).set(data); \
                    } \
                    " + typeSuffix + eventSuffix + "})();";
    } else if (script == 'S9') {
        return "(function () { \
            " + commandsCommonDeclarations + " \
            var dbType = window.commandsFnTranslations('c49', '" + event + "', " + commandVarA + "); \
            var dbname = window.commandsFnTranslations('c28', '" + event + "', " + commandVarA + ", dbType); \
            var tablename = window.commandsFnTranslations('c29', '" + event + "', " + commandVarA + "); \
            var calledSlot = window.commandsFnTranslations('c30', '" + event + "', " + commandVarA + "); \
            var resourceSlotValueResource = window.commandsFnTranslations('c50', '" + event + "', " + commandVarA + "); \
            var resourceSlotName = window.commandsFnTranslations('c51', '" + event + "', " + commandVarA + ", resourceSlotValueResource); \
            (function (" + commandVarB + ") { \
                " + eventPrefix + typePrefix + " \
                    if (dbType == window.publicCTranslations) { \
                        var dbRef = firebase.database().ref('public/' + dbname + '/' + tablename); \
                        dbRef.orderByChild(resourceSlotName).equalTo($('#' + resourceSlotValueResource + '').val()).on('value', function (snapshot) { \
                            snapshot.forEach(function (data) { \
                                $('#' + window.commandsFnTranslations('c31', '" + event + "', " + commandVarA + ") + '').val(data.val()[calledSlot]); \
                            }); \
                        }); \
                    } else if (dbType == window.privateCTranslations[document.lang]) { \
                        var dbRef = firebase.database().ref('private/' + window.user.uid + '/' + dbname + '/' + tablename); \
                        dbRef.orderByChild(resourceSlotName).equalTo($('#' + resourceSlotValueResource + '').val()).on('value', function (snapshot) { \
                            snapshot.forEach(function (data) { \
                                $('#' + window.commandsFnTranslations('c31', '" + event + "', " + commandVarA + ") + '').val(data.val()[calledSlot]); \
                            }); \
                        }); \
                    }; \
                " + eventSuffix + typeSuffix + " \
            })(" + commandVarB + ");})();";
    }
}
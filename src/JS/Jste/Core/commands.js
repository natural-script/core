//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------Scripts Evaluation------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.evaluateScript = function (script, event, type) {
	var eventPrefix = '';
	if (event == 'E1') {
		eventPrefix = "$('#' + elementName + '').click(function () {";
		eventSuffix = "});";
	} else if (event == 'E2') {
		eventPrefix = "$('#' + elementName + '').mouseenter(function () {";
		eventSuffix = "});";
	} else if (event == 'E3') {
		eventPrefix = "$('#' + elementName + '').mouseleave(function () {";
		eventSuffix = "});";
	} else if (event == 'E4') {
		eventPrefix = "$('#' + elementName + '').mouseout(function () {";
		eventSuffix = "});";
	} else if (event == 'E5') {
		eventPrefix = "$('#' + elementName + '').mousemove(function () {";
		eventSuffix = "});";
	} else if (event == 'E6') {
		eventPrefix = "$('#' + elementName + '').mouseup(function () {";
		eventSuffix = "});";
	} else if (event == 'E7') {
		eventPrefix = "$('#' + elementName + '').dblclick(function () {";
		eventSuffix = "});";
	} else if (event == 'E8') {
		eventPrefix = "$('#' + elementName + '').contextmenu(function () {";
		eventSuffix = "});";
	} else if (event == 'E9') {
		eventPrefix = "$('#' + elementName + '').keypress(function () {";
		eventSuffix = "});";
	} else if (event == 'E10') {
		eventPrefix = "$('#' + elementName + '').keydown(function () {";
		eventSuffix = "});";
	} else if (event == 'E11') {
		eventPrefix = "$('#' + elementName + '').change(function () {";
		eventSuffix = "});";
	} else if (event == 'E12') {
		eventPrefix = "$('#' + elementName + '').focus(function () {";
		eventSuffix = "});";
	} else if (event == 'E13') {
		eventPrefix = "$('#' + elementName + '').focusin(function () {";
		eventSuffix = "});";
	} else if (event == 'E14') {
		eventPrefix = "$('#' + elementName + '').focusout(function () {";
		eventSuffix = "});";
	} else if (event == 'E15') {
		eventPrefix = "$('#' + elementName + '').submit(function () {";
		eventSuffix = "});";
	} else if (event == 'E16') {
		eventPrefix = "$('#' + elementName + '').scroll(function () {";
		eventSuffix = "});";
	} else if (event == 'E17') {
		eventPrefix = "annyang.addCommands({ [voiceCommand]: function () {";
		eventSuffix = "}});";
	}
	if (type == 'T0') {
		typePrefix = "";
		typeSuffix = "";
		if (event == 'E17') {
			commandVarA = "commands[commandID], voiceCommand"
		} else {
			commandVarA = "commands[commandID]"
		}
		commandVarB = "commandID"
	} else if (type == 'T1') {
		typePrefix = "setTimeout(function () {";
		typeSuffix = "}, timeoutPeriod);";
		if (event == 'E17') {
			commandVarA = "statementT0Command, voiceCommand"
		} else {
			commandVarA = "statementT0Command"
		}
		commandVarB = "statementT0Command"
	} else if (type == 'T2') {
		typePrefix = "setInterval(function () {";
		typeSuffix = "}, intervalPeriod);";
		if (event == 'E17') {
			commandVarA = "intervalCommand, voiceCommand"
		} else {
			commandVarA = "intervalCommand"
		}
		commandVarB = "intervalCommand"
	} else if (type == 'T3') {
		typePrefix = "if (eval(ifStatement)) {";
		typeSuffix = "}";
		if (event == 'E17') {
			commandVarA = "statementT0Command, voiceCommand"
		} else {
			commandVarA = "statementT0Command"
		}
		commandVarB = "statementT0Command"
	}
	if (script == 'S1') {
		return "if (window.commandsFnTranslations('c3q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c3r')) { \
        " + eventPrefix + typePrefix + " \
            $('#' + elementName + '').remove(); \
        }); \
    } else { \
        var targetName = window.commandsFnTranslations('c4', '" + event + "', " + commandVarA + "); \
        $('#' + elementName + '').click(function () { \
            $('#' + targetName + '').remove(); \
            " + typeSuffix + eventSuffix + " \
            }";
	} else if (script == 'S2') {
		return "(function (" + commandVarB + ") { \
				$('#' + elementName + '').css('cursor', 'pointer'); \
                " + eventPrefix + typePrefix + " \
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
	} else if (script == 'S3') {
		return "var targetElement = window.commandsFnTranslations('c7', '" + event + "', " + commandVarA + "); \
		  " + eventPrefix + typePrefix + " \
		  if ($('#' + targetElement + '').hasClass('aplayer') || $('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO') { \
			document[targetElement].play(); \
		  } else { \
			document.getElementById(targetElement).play(); \
		  } \
              " + typeSuffix + eventSuffix + "";
	} else if (script == 'S4') {
		return "var targetElement = window.commandsFnTranslations('c8', '" + event + "', " + commandVarA + "); \
            " + eventPrefix + typePrefix + " \
			if ($('#' + targetElement + '').hasClass('aplayer') || $('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO') { \
				document[targetElement].pause(); \
			  } else { \
				document.getElementById(targetElement).pause(); \
			  } \
                " + typeSuffix + eventSuffix + "";
	} else if (script == 'S5') {
		return "if (window.commandsFnTranslations('c10q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c10rA')) { \
                    var targetElement = window.commandsFnTranslations('c11', '" + event + "', " + commandVarA + "); \
					" + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						$('#' + elementName + '').val($('#' + targetElement + '').prop('color')); \
						$('#' + elementName + '').text($('#' + targetElement + '').prop('color')); \
					} else {\
                        $('#' + elementName + '').val($('#' + targetElement + '').val()); \
                        $('#' + elementName + '').text($('#' + targetElement + '').val()); \
                        $('#' + elementName + '').val($('#' + targetElement + '').text()); \
						$('#' + elementName + '').text($('#' + targetElement + '').text()); \
					}\
                        " + typeSuffix + eventSuffix + " \
                } else if (window.commandsFnTranslations('c10q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c10rB')) { \
                    (function (" + commandVarB + ") { \
                        " + eventPrefix + typePrefix + " \
                            $('#' + elementName + '').val(window.commandsFnTranslations('c41', '" + event + "', " + commandVarA + ")); \
                            $('#' + elementName + '').text(window.commandsFnTranslations('c41', '" + event + "', " + commandVarA + ")); \
                            " + typeSuffix + eventSuffix + " \
                    })(" + commandVarB + "); \
                } else { \
                    var newVal = window.commandsFnTranslations('c12', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
                        $('#' + elementName + '').val(newVal); \
                        $('#' + elementName + '').text(newVal); \
                        " + typeSuffix + eventSuffix + " \
                }";
	} else if (script == 'S6') {
		return "var targetElement = window.commandsFnTranslations('c14', '" + event + "', " + commandVarA + "); \
                if (window.commandsFnTranslations('c16q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c16rA')) { \
                    var resource = window.commandsFnTranslations('c15', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + resource + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						$('#' + targetElement + '').val($('#' + resource + '').prop('color')); \
						$('#' + targetElement + '').text($('#' + resource + '').prop('color')); \
					} else {\
                        $('#' + targetElement + '').val($('#' + resource + '').val()); \
                        $('#' + targetElement + '').val($('#' + resource + '').text()); \
                        $('#' + targetElement + '').text($('#' + resource + '').val()); \
						$('#' + targetElement + '').text($('#' + resource + '').text()); \
					}\
                        " + typeSuffix + eventSuffix + " \
                    } else if (window.commandsFnTranslations('c16q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c16rB')) { \
                    (function (" + commandVarB + ", targetElement) { \
                        " + eventPrefix + typePrefix + " \
                            $('#' + targetElement + '').val(window.commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            $('#' + targetElement + '').text(window.commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + ", targetElement); \
                } else { \
                    var newVal = window.commandsFnTranslations('c17', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
                    $('#' + targetElement + '').val(newVal); \
                        $('#' + targetElement + '').text(newVal); \
                        " + typeSuffix + eventSuffix + " \
                    }";
	} else if (script == 'S10') {
		return "if (window.commandsFnTranslations('c56q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c56rA')) { \
                    var targetElement = window.commandsFnTranslations('c57', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.setFontColour(elementName, $('#' + targetElement + '').prop('color')); \
					} else {\
					    window.setFontColour(elementName, $('#' + targetElement + '').val()); \
						window.setFontColour(elementName, $('#' + targetElement + '').text()); \
					}\
                        " + typeSuffix + eventSuffix + " \
                } else if (window.commandsFnTranslations('c56q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c56rB')) { \
                    (function (" + commandVarB + ") { \
                        " + eventPrefix + typePrefix + " \
						    window.setFontColour(elementName, window.commandsFnTranslations('c41', '" + event + "', " + commandVarA + ")); \
                            " + typeSuffix + eventSuffix + " \
                    })(" + commandVarB + "); \
                } else { \
                    var newVal = window.commandsFnTranslations('c58', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
						window.setFontColour(elementName, newVal); \
                        " + typeSuffix + eventSuffix + " \
                }";
	} else if (script == 'S11') {
		return "var targetElement = window.commandsFnTranslations('c60', '" + event + "', " + commandVarA + "); \
                if (window.commandsFnTranslations('c62q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c62rA')) { \
                    var resource = window.commandsFnTranslations('c61', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + resource + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.setFontColour(targetElement, $('#' + resource + '').prop('color')); \
					} else {\
                        window.setFontColour(targetElement, $('#' + resource + '').val()); \
						window.setFontColour(targetElement, $('#' + resource + '').text()); \
					}\
                        " + typeSuffix + eventSuffix + " \
                    } else if (window.commandsFnTranslations('c62q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c62rB')) { \
                    (function (" + commandVarB + ", targetElement) { \
                        " + eventPrefix + typePrefix + " \
							window.setFontColour(targetElement, window.commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + ", targetElement); \
                } else { \
                    var newVal = window.commandsFnTranslations('c63', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
                    window.setFontColour(targetElement, newVal); \
                        " + typeSuffix + eventSuffix + " \
                    }";
	} else if (script == 'S12') {
		return "if (window.commandsFnTranslations('c65q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c65rA')) { \
                    var targetElement = window.commandsFnTranslations('c66', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.setBG(elementName, $('#' + targetElement + '').prop('color')); \
					} else {\
					    window.setBG(elementName, $('#' + targetElement + '').val()); \
						window.setBG(elementName, $('#' + targetElement + '').text()); \
					}\
                        " + typeSuffix + eventSuffix + " \
                } else if (window.commandsFnTranslations('c65q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c65rB')) { \
                    (function (" + commandVarB + ") { \
                        " + eventPrefix + typePrefix + " \
						    window.setBG(elementName, window.commandsFnTranslations('c41', '" + event + "', " + commandVarA + ")); \
                            " + typeSuffix + eventSuffix + " \
                    })(" + commandVarB + "); \
                } else { \
                    var newVal = window.commandsFnTranslations('c67', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
						window.setBG(elementName, newVal); \
                        " + typeSuffix + eventSuffix + " \
                }";
	} else if (script == 'S13') {
		return "var targetElement = window.commandsFnTranslations('c69', '" + event + "', " + commandVarA + "); \
                if (window.commandsFnTranslations('c71q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c71rA')) { \
                    var resource = window.commandsFnTranslations('c70', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + resource + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.setBG(targetElement, $('#' + resource + '').prop('color')); \
					} else {\
                        window.setBG(targetElement, $('#' + resource + '').val()); \
						window.setBG(targetElement, $('#' + resource + '').text()); \
					}\
                        " + typeSuffix + eventSuffix + " \
                    } else if (window.commandsFnTranslations('c71q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c71rB')) { \
                    (function (" + commandVarB + ", targetElement) { \
                        " + eventPrefix + typePrefix + " \
							window.setBG(targetElement, window.commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + ", targetElement); \
                } else { \
                    var newVal = window.commandsFnTranslations('c72', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
                    window.setBG(targetElement, newVal); \
                        " + typeSuffix + eventSuffix + " \
                    }";
	} else if (script == 'S14') {
		return "if (window.commandsFnTranslations('c74q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c74rA')) { \
                    var targetElement = window.commandsFnTranslations('c75', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.scale(elementName, 'length', $('#' + targetElement + '').prop('color')); \
					} else {\
					    window.scale(elementName, 'length', $('#' + targetElement + '').val()); \
						window.scale(elementName, 'length', $('#' + targetElement + '').text()); \
					}\
                        " + typeSuffix + eventSuffix + " \
                } else if (window.commandsFnTranslations('c74q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c74rB')) { \
                    (function (" + commandVarB + ") { \
                        " + eventPrefix + typePrefix + " \
						    window.scale(elementName, 'length', window.commandsFnTranslations('c41', '" + event + "', " + commandVarA + ")); \
                            " + typeSuffix + eventSuffix + " \
                    })(" + commandVarB + "); \
                } else { \
                    var newVal = window.commandsFnTranslations('c76', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
						window.scale(elementName, 'length', newVal); \
                        " + typeSuffix + eventSuffix + " \
                }";
	} else if (script == 'S15') {
		return "var targetElement = window.commandsFnTranslations('c78', '" + event + "', " + commandVarA + "); \
                if (window.commandsFnTranslations('c80q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c80rA')) { \
                    var resource = window.commandsFnTranslations('c79', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + resource + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.scale(targetElement, 'length', $('#' + resource + '').prop('color')); \
					} else {\
                        window.scale(targetElement, 'length', $('#' + resource + '').val()); \
						window.scale(targetElement, 'length', $('#' + resource + '').text()); \
					}\
                        " + typeSuffix + eventSuffix + " \
                    } else if (window.commandsFnTranslations('c80q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c80rB')) { \
                    (function (" + commandVarB + ", targetElement) { \
                        " + eventPrefix + typePrefix + " \
							window.scale(targetElement, 'length', window.commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + ", targetElement); \
                } else { \
                    var newVal = window.commandsFnTranslations('c81', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
                    window.scale(targetElement, 'length', newVal); \
                        " + typeSuffix + eventSuffix + " \
                    }";
	} else if (script == 'S16') {
		return "if (window.commandsFnTranslations('c83q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c83rA')) { \
                    var targetElement = window.commandsFnTranslations('c84', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.scale(elementName, 'height', $('#' + targetElement + '').prop('color')); \
					} else {\
					    window.scale(elementName, 'height', $('#' + targetElement + '').val()); \
						window.scale(elementName, 'height', $('#' + targetElement + '').text()); \
					}\
                        " + typeSuffix + eventSuffix + " \
                } else if (window.commandsFnTranslations('c83q', '" + event + "', " + commandVarA + ") == window.commandsFnTranslations('c83rB')) { \
                    (function (" + commandVarB + ") { \
                        " + eventPrefix + typePrefix + " \
						    window.scale(elementName, 'height', window.commandsFnTranslations('c41', '" + event + "', " + commandVarA + ")); \
                            " + typeSuffix + eventSuffix + " \
                    })(" + commandVarB + "); \
                } else { \
                    var newVal = window.commandsFnTranslations('c85', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
						window.scale(elementName, 'height', newVal); \
                        " + typeSuffix + eventSuffix + " \
                }";
	} else if (script == 'S17') {
		return "var targetElement = window.commandsFnTranslations('c87', '" + event + "', " + commandVarA + "); \
                if (window.commandsFnTranslations('c89q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c71rA')) { \
                    var resource = window.commandsFnTranslations('c88', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
					if ($('#' + resource + '').prop('tagName') == 'PAPER-SWATCH-PICKER') {\
						window.scale(targetElement, 'height', $('#' + resource + '').prop('color')); \
					} else {\
                        window.scale(targetElement, 'height', $('#' + resource + '').val()); \
						window.scale(targetElement, 'height', $('#' + resource + '').text()); \
					}\
                        " + typeSuffix + eventSuffix + " \
                    } else if (window.commandsFnTranslations('c89q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c89rB')) { \
                    (function (" + commandVarB + ", targetElement) { \
                        " + eventPrefix + typePrefix + " \
							window.scale(targetElement, 'height', window.commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + ", targetElement); \
                } else { \
                    var newVal = window.commandsFnTranslations('c90', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
                    window.scale(targetElement, 'height', newVal); \
                        " + typeSuffix + eventSuffix + " \
                    }";
	} else if (script == 'S7') {
		return "var targetElement = window.commandsFnTranslations('c19', '" + event + "', " + commandVarA + "); \
                if (window.commandsFnTranslations('c21q', '" + event + "', " + commandVarA + ", targetElement) == window.commandsFnTranslations('c21rA')) { \
                    var resource = window.commandsFnTranslations('c20', '" + event + "', " + commandVarA + ", targetElement); \
					" + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').hasClass('aplayer')) { \
						document[targetElement].audio.currentTime = $('#' + resource + '').val(); \
						document[targetElement].audio.currentTime = $('#' + resource + '').text(); \
                      } else if ($('#' + targetElement + '_html5_api').prop('tagName') == 'VIDEO'){ \
                        document[targetElement].currentTime($('#' + resource + '').val()); \
                        document[targetElement].currentTime($('#' + resource + '').text()); \
                      } else {\
                        document.getElementById(targetElement).currentTime = $('#' + resource + '').val(); \
                        document.getElementById(targetElement).currentTime = $('#' + resource + '').text(); \
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
                }";
	} else if (script == 'S8') {
		return "var dbType = window.commandsFnTranslations('c48', '" + event + "', " + commandVarA + "); \
                var dbname = window.commandsFnTranslations('c24', '" + event + "', " + commandVarA + ", dbType); \
                var tablename = window.commandsFnTranslations('c25', '" + event + "', " + commandVarA + "); \
                var dataRaw = window.commandsFnTranslations('c26', '" + event + "', " + commandVarA + ", dbType, dbname, tablename); \
                " + eventPrefix + typePrefix + " \
                    var data = '{'; \
                    for (i = 0; i < dataRaw.length; i++) { \
                        var resource = window.commandsFnTranslations('c32', '', dataRaw[i]); \
                        var slot = window.commandsFnTranslations('c33', '', dataRaw[i]); \
                        if (i != dataRaw.length - 1) { \
                            data += '\"' + slot + '\":\"' + $('#' + resource + '').val() + '\", '; \
                        } else { \
                            data += '\"' + slot + '\":\"' + $('#' + resource + '').val() + '\"}'; \
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
                    " + typeSuffix + eventSuffix;
	} else if (script == 'S9') {
		return "var dbType = window.commandsFnTranslations('c49', '" + event + "', " + commandVarA + "); \
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
            })(" + commandVarB + ");";
	}
}
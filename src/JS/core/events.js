export const evaluateEvent = function (eventID) {
  let eventPrefix
  let eventSuffix
  if (eventID == 'E0') {
    eventPrefix = ``
    eventSuffix = ``
  } else if (eventID == 'E1') {
    eventPrefix = `$('#' + elementName + '').on('tap', function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E2') {
    eventPrefix = `$('#' + elementName + '').mouseenter(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E3') {
    eventPrefix = `$('#' + elementName + '').mouseleave(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E4') {
    eventPrefix = `$('#' + elementName + '').mouseout(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E5') {
    eventPrefix = `$('#' + elementName + '').mousemove(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E6') {
    eventPrefix = `$('#' + elementName + '').on('up', function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E7') {
    eventPrefix = `$('#' + elementName + '').dblclick(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E8') {
    eventPrefix = `$('#' + elementName + '').contextmenu(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E9') {
    eventPrefix = `$('#' + elementName + '').keypress(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E10') {
    eventPrefix = `$('#' + elementName + '').keydown(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E11') {
    eventPrefix = `$('#' + elementName + '').change(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E12') {
    eventPrefix = `$('#' + elementName + '').focus(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E13') {
    eventPrefix = `$('#' + elementName + '').focusin(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E14') {
    eventPrefix = `$('#' + elementName + '').focusout(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E15') {
    eventPrefix = `$('#' + elementName + '').submit(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E16') {
    eventPrefix = `$('#' + elementName + '').scroll(function (event) { event.stopPropagation();`
    eventSuffix = `});`
  } else if (eventID == 'E17') {
    eventPrefix = `annyang.addCommands({ [voiceCommand]: function (event) {`
    eventSuffix = `}});`
  } else if (eventID == 'E18') {
    eventPrefix = `$('#' + elementName + '').visibilityChanged({ callback: function (element, visible) { if (visible == true) {`
    eventSuffix = `}}, runOnLoad: false, frequency: 100});`
  } else if (eventID == 'E19') {
    eventPrefix = `$('#' + elementName + '').visibilityChanged({ callback: function (element, visible) { if (visible == false) {`
    eventSuffix = `}}, runOnLoad: false, frequency: 100});`
  }
  return {
    eventPrefix: eventPrefix,
    eventSuffix: eventSuffix
  }
}

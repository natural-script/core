export const evaluateEvent = function (eventID, elementName) {
  let prefix
  let suffix
  if (eventID == 'E0') {
    prefix = ``
    suffix = ``
  } else if (eventID == 'E1') {
    prefix = `$("#${elementName}").on('tap', function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E2') {
    prefix = `$("#${elementName}").mouseenter(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E3') {
    prefix = `$("#${elementName}").mouseleave(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E4') {
    prefix = `$("#${elementName}").mouseout(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E5') {
    prefix = `$("#${elementName}").mousemove(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E6') {
    prefix = `$("#${elementName}").on('up', function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E7') {
    prefix = `$("#${elementName}").dblclick(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E8') {
    prefix = `$("#${elementName}").contextmenu(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E9') {
    prefix = `$("#${elementName}").keypress(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E10') {
    prefix = `$("#${elementName}").keydown(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E11') {
    prefix = `$("#${elementName}").change(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E12') {
    prefix = `$("#${elementName}").focus(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E13') {
    prefix = `$("#${elementName}").focusin(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E14') {
    prefix = `$("#${elementName}").focusout(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E15') {
    prefix = `$("#${elementName}").submit(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E16') {
    prefix = `$("#${elementName}").scroll(function (event) { event.stopPropagation();`
    suffix = `});`
  } else if (eventID == 'E17') {
    prefix = `annyang.addCommands({ [voiceCommand]: function (event) {`
    suffix = `}});`
  } else if (eventID == 'E18') {
    prefix = `$("#${elementName}").visibilityChanged({ callback: function (element, visible) { const event = element[0]; if (visible == true) {`
    suffix = `}}, runOnLoad: false, frequency: 100});`
  } else if (eventID == 'E19') {
    prefix = `$("#${elementName}").visibilityChanged({ callback: function (element, visible) { const event = element[0]; if (visible == false) {`
    suffix = `}}, runOnLoad: false, frequency: 100});`
  }
  return {
    prefix: prefix,
    suffix: suffix
  }
}

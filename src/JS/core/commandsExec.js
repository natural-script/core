/*!
 * Commands Evaluation
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-05-01
 */
import {
  analyzeCommand
} from './analyzeCommand.js'
import {
  commandsFnTranslations
} from 'translations/commandsFn.js'
import runCommand from 'commands/index'
import {
  evaluateCondition
} from './conditions.js'
import {
  getTranslations
} from 'core/translationsGet.js'
import {
  evaluateEvent
} from './events.js'
import * as run from './commandsExec'
import * as declarations from 'core/declarations'
var eventSplit

function getTheEventCode (command) {
  var eventsNumber = Object.keys(wordsTranslationsDB['Events']).length
  for (var i = 1; i <= eventsNumber; i++) {
    if (XRegExp(`^${getTranslations('event' + i)}`, 'gmi').test(command)) {
      eventSplit = `.split(XRegExp(\`^${getTranslations('event' + i)}\`, 'gmiy'))[1]`
      return 'E' + i
    }
  }
  eventSplit = ''
  return 'E0'
}
export const execute = async function (elementName, command, execute, functionName) {
  window.analyzeCommand = analyzeCommand
  if (functionName) {
    var functionCommands = []
  }
  var commands = command.split(' &&& ')
  for (var commandID = 0; commandID < commands.length; commandID++) {
    var commandType
    var pureCommand
    var timeoutPeriod
    var intervalPeriod
    var codePrefix = ''
    var codeSuffix = ''
    var codeParam = ''
    var typeOptions = []
    var commandInfo = []
    if (elementName) {
      commandInfo.elementName = elementName
    }
    if (commandsFnTranslations('c52', commands[commandID]).length > 1) {
      commandType = 'T3'
      var alternativeOptionsArray = commands[commandID].split(XRegExp(' ' + getTranslations('else') + ' ', 'gmi'))
      await evaluateCondition(alternativeOptionsArray[0]).then(function (condition) {
        typeOptions.primaryCondition = condition
      })
      pureCommand = commandsFnTranslations('c54', alternativeOptionsArray[0])
      alternativeOptionsArray.shift()
      if (alternativeOptionsArray.length > 0) {
        typeOptions.elementName = elementName
        typeOptions.secondryConditions = []
        for (var optionID = 0; optionID < alternativeOptionsArray.length; optionID++) {
          typeOptions.secondryConditions[optionID] = []
          if (XRegExp(`${getTranslations('inTheCaseThat')}`, 'gmi').test(alternativeOptionsArray[optionID])) {
            await evaluateCondition(alternativeOptionsArray[optionID]).then(function (condition) {
              typeOptions.secondryConditions[optionID].condition = condition
            })
            await run.execute(typeOptions.elementName, commandsFnTranslations('c54', alternativeOptionsArray[optionID]), false).then(function (conditionalCommand) {
              typeOptions.secondryConditions[optionID].command = conditionalCommand
            })
          } else {
            typeOptions.secondryConditions[optionID].condition = 'true'
            await run.execute(typeOptions.elementName, alternativeOptionsArray[optionID], false).then(function (conditionalCommand) {
              typeOptions.secondryConditions[optionID].command = conditionalCommand
            })
          }
        }
      }
    } else if (commandsFnTranslations('c34', commands[commandID]).length > 1) {
      commandType = 'T1'
      pureCommand = commandsFnTranslations('c35', commands[commandID])
      timeoutPeriod = commandsFnTranslations('c36', commands[commandID])
      commandInfo.timeoutPeriod = timeoutPeriod
    } else if (commandsFnTranslations('c37', commands[commandID]).length > 1) {
      commandType = 'T2'
      intervalCommand = commandsFnTranslations('c38', commands[commandID])
      intervalPeriod = commandsFnTranslations('c39', commands[commandID])
      commandInfo.intervalPeriod = intervalPeriod
    } else if (getTheEventCode(commands[commandID]) == 'E0' || XRegExp(`^${getTranslations('event' + getTheEventCode(commands[commandID]).split('E')[1])}`, 'gmi').test(commands[commandID])) {
      commandType = 'T0'
      pureCommand = commands[commandID]
    }
    if (getTheEventCode(pureCommand) == 'E17') {
      codePrefix = `if (Modernizr.speechrecognition) { 
				annyang.start(); 
				var voiceCommand = commandsFnTranslations('c40', pureCommand);`
      codeSuffix = '};'
      codeParam = ''
    }
    if (commandType == 'T3') {
      codePrefix = ''
      codeSuffix = ''
      codeParam = ', typeOptions'
    }
    commandInfo.pureCommand = pureCommand
    var commandData = await eval(`analyzeCommand(pureCommand${eventSplit}.split(new RegExp(\`\${getTranslations('inTheCaseThat')}.*?$\`, 'gimy'))[0])`);
    var commandEvaluation = eval(`evaluateScript(commandData, getTheEventCode(pureCommand), commandType, commandInfo, ${functionName ? 'true' : 'false'}${codeParam})`)
    if (execute == false) {
      return commandEvaluation
    } else if (functionName) {
      if (commandID == commands.length - 1) {
        functionCommands.push(`${codePrefix} 
				   ${commandEvaluation} 
			    ${codeSuffix}`)
        eval(`declarations.jsteFunctionsStore[\`${functionName}\`] = function(elementName, params) { 
				    ${codePrefix} 
					    ${functionCommands.join('\n')} 
				    ${codeSuffix}};`)
      } else {
        functionCommands.push(`${codePrefix} 
				    ${commandEvaluation} 
			    ${codeSuffix}`)
      }
    } else {
      eval(`${codePrefix} 
				    ${commandEvaluation} 
			    ${codeSuffix}`)
    }
  }
}
let evaluateScript = function (script, event, type, commandInfo, isFunction, typeOptions) {
  window.runCommand = runCommand
  var typePrefix
  var typeSuffix
  var commandVarA
  var commandVarB
  var eventPrefix = evaluateEvent(event).eventPrefix
  var eventSuffix = evaluateEvent(event).eventSuffix
  var commandsCommonDeclarations = ''
  var commandAvailableInfo = Object.keys(commandInfo)
  for (var infoID = 0; infoID < commandAvailableInfo.length; infoID++) {
    commandsCommonDeclarations += 'var ' + commandAvailableInfo[infoID] + ' = `' + commandInfo[commandAvailableInfo[infoID]] + '`;\nvar script = ' + JSON.stringify(script) + ';'
  }
  if (type == 'T0') {
    typePrefix = ``
    typeSuffix = ``
    if (event == 'E17') {
      commandVarA = `script, voiceCommand`
    } else {
      commandVarA = `script`
    }
    commandVarB = `script`
  } else if (type == 'T1') {
    typePrefix = `setTimeout(function () {`
    typeSuffix = `}, timeoutPeriod);`
    if (event == 'E17') {
      commandVarA = `script, voiceCommand`
    } else {
      commandVarA = `script`
    }
    commandVarB = `script`
  } else if (type == 'T2') {
    typePrefix = `setInterval(function () {`
    typeSuffix = `}, intervalPeriod);`
    if (event == 'E17') {
      commandVarA = `script, voiceCommand`
    } else {
      commandVarA = `script`
    }
    commandVarB = `script`
  } else if (type == 'T3') {
    typePrefix = `if (` + typeOptions.primaryCondition + `) {`
    typeSuffix = `}`
    if (typeOptions.secondryConditions) {
      for (var conditionID = 0; conditionID < typeOptions.secondryConditions.length; conditionID++) {
        typeSuffix += ` else if (` + typeOptions.secondryConditions[conditionID].condition + `) { ` + typeOptions.secondryConditions[conditionID].command + `}`
      }
    }
    if (event == 'E17') {
      commandVarA = `script, voiceCommand`
    } else {
      commandVarA = `script`
    }
    commandVarB = `script`
  }
  var functionArgumentsParam = isFunction ? `, params` : ``
  const commandPrefix = `(function () {
        ${commandsCommonDeclarations}
        (function (${commandVarB + functionArgumentsParam}) {
            ${eventPrefix + typePrefix}`
  const commandSuffix = `${typeSuffix + eventSuffix}
		})(${commandVarB + functionArgumentsParam});})();`
  if (script.command_id == 'S2') {
    $('#' + commandInfo.elementName + '').css('cursor', 'pointer')
  }
  return `${commandPrefix}${`runCommand.${script.command_id.toLowerCase()}`}(elementName, script${functionArgumentsParam});${commandSuffix}`
}

/*!
 * NaturalScript Main Analyzer
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-03-10
 */

const importRS = require.context('translations/RiveScript', true, /\.rive$/);
import RiveScript from 'rivescript'
import objectPath from 'object-path'
import evaluateComponentInit from 'core/componentInit'
import {
    evaluateEvent
} from 'core/events'
import {
    evaluateCondition
} from 'core/conditions'
import * as declarations from 'core/declarations'
var bot = new RiveScript({
    forceCase: true
})
if (declarations.langCode) {
    bot.loadFile([importRS(`./commands/${declarations.langCode}.rive`), importRS(`./commandsUtils/${declarations.langCode}.rive`), importRS(`./componentInit/${declarations.langCode}.rive`), importRS(`./events/${declarations.langCode}.rive`)])
}
bot.setVariable('components', window.componentsDB.join('|'));
export async function analyze(commandRaw) {
    console.log(commandRaw)
    bot.sortReplies()
    let reply = await bot.reply('local-user', commandRaw.replace(new XRegExp('\n', 'gmi'), '<<br>>'));
    let command = reply.replace(new XRegExp('<<br>>', 'gmi'), '\n').split(' ==> ');
    let analysisResult = {}
    for (const prop of command) {
        analysisResult[/^(.*?):/miy.exec(prop)[1]] = /^.*?: ((?:.*|[\r\n])+)/miy.exec(prop)[1]
    }
    var loops = []
    for (var i = 0; i < Object.keys(analysisResult).length; i++) {
        if (/^IS_GROUPED: .* SEPARATOR: .* REGEX: .* ELEMENTS: .* DATA: .*/gmiy.test(analysisResult[Object.keys(analysisResult)[i]])) {
            var loop_data = /^IS_GROUPED: (.*) SEPARATOR: (.*) REGEX: (.*) ELEMENTS: (.*) DATA: (.*)/gmiy.exec(analysisResult[Object.keys(analysisResult)[i]])
            var loop_name = Object.keys(analysisResult)[i]
            loops.push(loop_name)
            analysisResult[loop_name] = {}
            analysisResult[loop_name]['IS_GROUPED'] = loop_data[1]
            analysisResult[loop_name]['SEPARATOR'] = loop_data[2]
            analysisResult[loop_name]['REGEX'] = loop_data[3]
            analysisResult[loop_name]['ELEMENTS'] = loop_data[4]
            analysisResult[loop_name]['DATA'] = loop_data[5]
        }
    }
    for (const loop of loops) {
        var mainRegex = new RegExp(analysisResult[loop]['REGEX'] + '(?:' + analysisResult[loop]['SEPARATOR'] + '|&&&& |$)', 'gmyi')
        var regex = new RegExp(analysisResult[loop]['REGEX'] + '(?:' + analysisResult[loop]['SEPARATOR'] + '|$)', 'gmyi')
        var str = analysisResult[loop]['DATA']
        var isGrouped = (analysisResult[loop]['IS_GROUPED'] == 'true')
        var elements = JSON.parse(analysisResult[loop]['ELEMENTS'])
        var m
        var z
        analysisResult[loop] = {}
        if (isGrouped) {
            var mainGroupIndex = 0
            var groupIndex = 0
            var newGroupTrigger
            while ((z = mainRegex.exec(str)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (z.index === regex.lastIndex) {
                    regex.lastIndex++
                }
                // The result can be accessed through the `m`-variable.
                z.forEach((match, matchIndex) => {
                    if (matchIndex != 0) {
                        objectPath.set(analysisResult, loop + '.' + mainGroupIndex + '.' + groupIndex + '.' + elements[matchIndex - 1], match)
                    }
                    if (/^.*?&&&& $/gmiy.test(match)) {
                        newGroupTrigger = true
                    }
                })
                if (newGroupTrigger) {
                    newGroupTrigger = false
                    groupIndex = 0
                        ++mainGroupIndex
                } else {
                    ++groupIndex
                }
            }
        } else {
            var groupIndex = 0
            while ((m = regex.exec(str)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++
                }
                // The result can be accessed through the `m`-variable.
                m.forEach((match, matchIndex) => {
                    if (matchIndex != 0) {
                        objectPath.set(analysisResult, loop + '.' + groupIndex + '.' + elements[matchIndex - 1], match)
                    }
                })
                groupIndex++
            }
        }
    }
    console.log(analysisResult)
    if (analysisResult.id.match(/S\d+/)) {
        return `runCommand.${analysisResult.id.toLowerCase()}(event.id, ${JSON.stringify(analysisResult)});`
    } else if (analysisResult.id.match(/E\d+/)) {
        return evaluateEvent(analysisResult.id, analysisResult.target);
    } else if (analysisResult.id.match(/CI\d+/)) {
        return evaluateComponentInit(analysisResult);
    } else if (analysisResult.id == 'CU1') {
        return {
            prefix: `if (${evaluateCondition(analysisResult.conditions)}) {`,
            suffix: `}`
        }
    } else if (analysisResult.id == 'CU2') {
        return {
            prefix: `else if (${evaluateCondition(analysisResult.conditions)}) {`,
            suffix: `}`
        }
    } else if (analysisResult.id == 'CU3') {
        return {
            prefix: `else {`,
            suffix: `}`
        }
    } else if (analysisResult.id == 'CU4') {
        return {
            prefix: `setInterval(() => {`,
            suffix: `}, ${analysisResult.period});`
        }
    } else if (analysisResult.id == 'CU5') {
        return {
            prefix: `setTimeout(() => {`,
            suffix: `}, ${analysisResult.period});`
        }
    }
}
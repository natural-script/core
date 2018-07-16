/*!
 * Commands Analyzer
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-03-10
 */
import en_rivescript from 'translations/RiveScript/en.rive'
import fr_rivescript from 'translations/RiveScript/fr.rive'
import ar_rivescript from 'translations/RiveScript/ar.rive'
import arz_rivescript from 'translations/RiveScript/arz.rive'
import RiveScript from 'rivescript'
import objectPath from 'object-path'
import * as declarations from 'core/declarations'
var bot = new RiveScript({
  forceCase: true
})
if (declarations.langCode == 'en') {
  bot.loadFile(en_rivescript)
} else if (declarations.langCode == 'fr') {
  bot.loadFile(fr_rivescript)
} else if (declarations.langCode == 'ar') {
  bot.loadFile(ar_rivescript)
} else if (declarations.langCode == 'arz') {
  bot.loadFile(arz_rivescript)
}
export async function analyzeCommand(commandRaw) {
  bot.sortReplies()
  let reply = await bot.reply('local-user', commandRaw.replace(new XRegExp('\n', 'gmi'), '<<br>>'));
  let command = reply.replace(new XRegExp('<<br>>', 'gmi'), '\n').split(' ==> ');
  let commandAnalysed = {}
  for (const prop of command) {
    commandAnalysed[/^(.*?):/miy.exec(prop)[1]] = /^.*?: ((?:.*|[\r\n])+)/miy.exec(prop)[1]
  }
  var loops = []
  for (var i = 0; i < Object.keys(commandAnalysed).length; i++) {
    if (/^IS_GROUPED: .* SEPARATOR: .* REGEX: .* ELEMENTS: .* DATA: .*/gmiy.test(commandAnalysed[Object.keys(commandAnalysed)[i]])) {
      var loop_data = /^IS_GROUPED: (.*) SEPARATOR: (.*) REGEX: (.*) ELEMENTS: (.*) DATA: (.*)/gmiy.exec(commandAnalysed[Object.keys(commandAnalysed)[i]])
      var loop_name = Object.keys(commandAnalysed)[i]
      loops.push(loop_name)
      commandAnalysed[loop_name] = {}
      commandAnalysed[loop_name]['IS_GROUPED'] = loop_data[1]
      commandAnalysed[loop_name]['SEPARATOR'] = loop_data[2]
      commandAnalysed[loop_name]['REGEX'] = loop_data[3]
      commandAnalysed[loop_name]['ELEMENTS'] = loop_data[4]
      commandAnalysed[loop_name]['DATA'] = loop_data[5]
    }
  }
  for (const loop of loops) {
    var mainRegex = new RegExp(commandAnalysed[loop]['REGEX'] + '(?:' + commandAnalysed[loop]['SEPARATOR'] + '|&&&& |$)', 'gmyi')
    var regex = new RegExp(commandAnalysed[loop]['REGEX'] + '(?:' + commandAnalysed[loop]['SEPARATOR'] + '|$)', 'gmyi')
    var str = commandAnalysed[loop]['DATA']
    var isGrouped = (commandAnalysed[loop]['IS_GROUPED'] == 'true')
    var elements = JSON.parse(commandAnalysed[loop]['ELEMENTS'])
    var m
    var z
    commandAnalysed[loop] = {}
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
            objectPath.set(commandAnalysed, loop + '.' + mainGroupIndex + '.' + groupIndex + '.' + elements[matchIndex - 1], match)
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
            objectPath.set(commandAnalysed, loop + '.' + groupIndex + '.' + elements[matchIndex - 1], match)
          }
        })
        groupIndex++
      }
    }
  }
  return commandAnalysed
}
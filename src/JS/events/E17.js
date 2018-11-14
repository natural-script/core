import annyang from 'annyang'
const runCommand = require.context('commands', true, /\.js$/)
import parseStringValue from 'parsers/stringValue'
export default function ({hotword, scopes, parentFnParams}, functionToBeExecuted) {
    hotword = parseStringValue(hotword, false, scopes, parentFnParams)
    annyang.addCommands({
        [hotWord]: function (event) {
            event.stopPropagation()
            functionToBeExecuted(event.id)
        }
    })
}
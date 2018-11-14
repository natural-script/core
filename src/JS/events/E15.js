const runCommand = require.context('commands', true, /\.js$/)
import parseStringValue from 'parsers/stringValue'
export default function ({target, scopes, parentFnParams}, functionToBeExecuted) {
    target = parseStringValue(target, false, scopes, parentFnParams)
    $(`#${target}`).submit(function (event) {
        event.stopPropagation()
        functionToBeExecuted(event.id)
    })
}
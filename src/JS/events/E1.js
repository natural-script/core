const runCommand = require.context('commands', true, /\.js$/)
import parseStringValue from 'parsers/stringValue'
export default function ({target, scopes, parentFnParams}, functionToBeExecuted) {
    target = parseStringValue(target, false, scopes, parentFnParams)
    $(`#${target}`).css('cursor', 'pointer')
    $(`#${target}`).on('tap', function (event) {
        event.stopPropagation()
        functionToBeExecuted(event.id)
    })
}
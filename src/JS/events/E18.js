const runCommand = require.context('commands', true, /\.js$/)
import parseStringValue from 'parsers/stringValue'
export default function ({target, scopes, parentFnParams}, functionToBeExecuted) {
    target = parseStringValue(target, false, scopes, parentFnParams)
    $('body').find(`#${target}`).visibilityChanged({
        callback: function (element, visible) {
            if (visible == true) {
                functionToBeExecuted(element[0].id)
            }
        },
        runOnLoad: false,
        frequency: 100
    })
}
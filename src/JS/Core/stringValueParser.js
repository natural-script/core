/*!
 * String Value Parser
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-03-11
 */
String.prototype.parseValue = function () {
    return this.replace(XRegExp('^' + getTranslations("theValueOf") + ' ' + getTranslations("variable") + ' (\\S+)$'), function (match, p1, offset, string) {
        var variable = 'window.jsteVariablesStore';
        var branches = p1.split(" ==> ");
        for (var i = 0; i < branches.length; i++) {
            variable += '[' + branches[i] + ']'
        }
        return exec('window.getSafe(() => ' + variable + ')');
    }).replace(XRegExp('^' + getTranslations("theValueOf") + ' (\\S+)$'), function (match, p1, offset, string) {
        return elementValue.get(p1);
    }).replace(XRegExp('&lt;&lt; ' + getTranslations("theValueOf") + ' ' + getTranslations("variable") + ' (\\S+).*? &gt;&gt;'), function (match, p1, offset, string) {
        var variable = 'window.jsteVariablesStore';
        var branches = p1.split(" ==> ");
        for (var i = 0; i < branches.length; i++) {
            variable += '[' + branches[i] + ']'
        }
        return exec('window.getSafe(() => ' + variable + ')');
    }).replace(XRegExp('&lt;&lt; ' + getTranslations("theValueOf") + ' (\\S+).*? &gt;&gt;'), function (match, p1, offset, string) {
        return elementValue.get(p1);
    }).replace(XRegExp('&lt;&lt; ' + getTranslations("theResultOfTheMathematicalExpression") + ': (.*?) &gt;&gt;'), function (match, p1, offset, string) {
        return evaluateExpression(p1);
    });
}
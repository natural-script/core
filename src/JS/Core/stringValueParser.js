/*!
 * String Value Parser
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-01
 */
String.prototype.parseValue = function () {
    return this.replace(XRegExp('&lt;&lt; ' + window.theValueOfTranslations[document.langID] + ' (\\S+).*? &gt;&gt;'), function (match, p1, offset, string) {
        return elementValue.get(p1);
    }).replace(XRegExp('&lt;&lt; ' + window.theResultOfTheMathematicalExpressionTranslations[document.langID] + ': (.*?) &gt;&gt;'), function (match, p1, offset, string) {
        return evaluateExpression(p1);
    });
}
/*!
 * String Value Parser
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-01-30
 */
String.prototype.parseValue = function () {
    if (this.startsWith(window.theValueOfTranslations[document.lang])) {
        return elementValueFn.get(XRegExp('^' + window.theValueOfTranslations[document.lang] + '(\\pL+).*?$').exec(test)[1]);
    } else if (this.startsWith(window.theResultOfTheMathematicalExpressionTranslations[document.lang])) {
        return window.evaluateExpression(XRegExp('^' + window.theResultOfTheMathematicalExpressionTranslations[document.lang] + ': (.*?)$').exec(test)[1]);
    } else {
        return this;
    }
}
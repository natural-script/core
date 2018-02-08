/*!
 * Value Builder
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-06
 */
window.evaluateValue = function (value) {
    value = '"' + value + '"';
    if (document.langID == 0 || document.langID == 1) {
        value = value.replace(/&lt;&lt; the value of (\w+) &gt;&gt;/g, '" + elementValue.get("$1") + "')
            .replace(/&lt;&lt; the result of the mathematical expression: (.*?) &gt;&gt;/g, '" + window.evaluateExpression("$1") + "')
            .replace(/&lt;&lt; the user's name &gt;&gt;/g, '" + window.user + "')
            .replace(/&lt;&lt; the user's email &gt;&gt;/g, '" + window.email + "');
    } else if (document.langID == 2) {
        value = value.replace(/&lt;&lt; la valeur de (\w+) &gt;&gt;/g, '" + elementValue.get("$1") + "')
            .replace(/&lt;&lt; le résultat de l'expression mathématique: (.*?) &gt;&gt;/g, '" + window.evaluateExpression("$1") + "')
            .replace(/&lt;&lt; le nom de l'utilisateur &gt;&gt;/g, '" + window.user + "')
            .replace(/&lt;&lt; le courrier électronique de l'utilisateur &gt;&gt;/g, '" + window.email + "');
    } else if (document.langID == 3) {
        value = value.replace(/&lt;&lt; قيمة (\pL.+(?!\s)) &gt;&gt;/g, '" + elementValue.get("$1") + "')
            .replace(/&lt;&lt; ناتج التعبير الرياضى: (.*?) &gt;&gt;/g, '" + window.evaluateExpression("$1") + "')
            .replace(/&lt;&lt; اسم المستخدم &gt;&gt;/g, '" + window.user + "')
            .replace(/&lt;&lt; بريد المستخدم &gt;&gt;/g, '" + window.email + "');
    } else if (document.langID == 4) {
        value = value.replace(/&lt;&lt; قيمة (\pL.+(?!\s)) &gt;&gt;/g, '" + elementValue.get("$1") + "')
            .replace(/&lt;&lt; ناتج التعبير الرياضى: (.*?) &gt;&gt;/g, '" + window.evaluateExpression("$1") + "')
            .replace(/&lt;&lt; اسم المستخدم &gt;&gt;/g, '" + window.user + "')
            .replace(/&lt;&lt; إيميل المستخدم &gt;&gt;/g, '" + window.email + "');
    } else if (document.langID == 5) {

    }
    return value;
};
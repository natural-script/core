/*!
 * Value Builder
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-15
 */
window.evaluateValue = function (value) {
    value = '"' + value + '"';
    if (document.lang == 0 || document.lang == 1) {
        value = value.replace(/&lt;&lt; the value of (\w+) &gt;&gt;/g, '" + elementValue.get("$1") + "')
            .replace(/&lt;&lt; the result of the mathematical expression: (.*?) &gt;&gt;/g, '" + window.evaluateExpression("$1") + "')
            .replace(/&lt;&lt; the user's name &gt;&gt;/g, '" + window.user + "')
            .replace(/&lt;&lt; the user's email &gt;&gt;/g, '" + window.email + "');
    } else if (document.lang == 2) {
        value = value.replace(/&lt;&lt; la valeur de (\w+) &gt;&gt;/g, '" + elementValue.get("$1") + "')
            .replace(/&lt;&lt; le résultat de l'expression mathématique: (.*?) &gt;&gt;/g, '" + window.evaluateExpression("$1") + "')
            .replace(/&lt;&lt; le nom de l'utilisateur &gt;&gt;/g, '" + window.user + "')
            .replace(/&lt;&lt; le courrier électronique de l'utilisateur &gt;&gt;/g, '" + window.email + "');
    } else if (document.lang == 3) {
        value = value.replace(/&lt;&lt; قيمة ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) &gt;&gt;/g, '" + elementValue.get("$1") + "')
            .replace(/&lt;&lt; ناتج التعبير الرياضى: (.*?) &gt;&gt;/g, '" + window.evaluateExpression("$1") + "')
            .replace(/&lt;&lt; اسم المستخدم &gt;&gt;/g, '" + window.user + "')
            .replace(/&lt;&lt; بريد المستخدم &gt;&gt;/g, '" + window.email + "');
    } else if (document.lang == 4) {
        value = value.replace(/&lt;&lt; قيمة ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) &gt;&gt;/g, '" + elementValue.get("$1") + "')
            .replace(/&lt;&lt; ناتج التعبير الرياضى: (.*?) &gt;&gt;/g, '" + window.evaluateExpression("$1") + "')
            .replace(/&lt;&lt; اسم المستخدم &gt;&gt;/g, '" + window.user + "')
            .replace(/&lt;&lt; إيميل المستخدم &gt;&gt;/g, '" + window.email + "');
    } else if (document.lang == 5) {

    }
    return value;
};
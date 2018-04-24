/*!
 * List Parser
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-03-10
 */
String.prototype.parseList = function (isObject) {
    let regex;
    if (isObject) {
        regex = /^\d\. (.*?): (.*)$/gmi;
        var output = {};
    } else {
        regex = /^(\d)\. (.*)$/gmi;
        var output = [];
    }
    // ^the following list:(\n^\d\. .*$)+
    while ((m = regex.exec(this)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        var itemKey;
        var item;
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            if (groupIndex == 1) {
                itemKey = match;
            } else if (groupIndex == 2) {
                item = match;
                if (isObject) {
                    output[itemKey] = item.parseValue();
                } else {
                    output[itemKey - 1] = item.parseValue();
                }
            }
        });
    }
    return output;
}
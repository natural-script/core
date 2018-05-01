/*!
 * Checkbox
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function checkboxFn(settings) {
        settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
        var name = elementSettingsAnalyze(settings, 'name');
        var out = '<paper-checkbox id="' + name + '">' + elementSettingsAnalyze(settings, 'title') + '';
        if (elementSettingsAnalyze(settings, 'description')) {
            out += '<span class="subtitle">' + elementSettingsAnalyze(settings, 'description') + '</span>';
        }
        out += '</paper-checkbox>';
        window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
        if (elementSettingsAnalyze(settings, 'attributes')) {
            var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations("and")} `, 'gmi'));
            for (i = 0; i < propertiesArray.length; i++) {
                if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
                    $(`#${name}`).attr('disabled', '');
                } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['checked'][document.langCode]).rating > 0.8) {
                    $(`#${name}`).attr('checked', '');
                }
            }
        }
        if (elementSettingsAnalyze(settings, 'position')) {
            $(`#${name}`).css('position', elementSettingsAnalyze(settings, 'position'));
        } else {
            $(`#${name}`).css('position', 'relative');
        }
        window.propSet(name, settings);
    }
    var checkboxTranslations = window.wordsTranslationsDB.Words['checkbox'][document.langCode];
    for (const i of checkboxTranslations) {
        window.jsteComponentsFnStore[i] = function (settings) {
            checkboxFn(settings);
        };
    }
});
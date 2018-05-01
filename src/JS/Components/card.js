/*!
 * Card
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function cardFn(settings) {
        settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
        var name = elementSettingsAnalyze(settings, 'name');
        var out = '<paper-card id="' + name + '"><div class="card-content"></div></paper-card>';
        window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
        if (elementSettingsAnalyze(settings, 'imageSource')) {
            $(`#${name}`).attr('image', elementSettingsAnalyze(settings, 'imageSource'));
        }
        if (elementSettingsAnalyze(settings, 'position')) {
            $(`#${name}`).css('position', elementSettingsAnalyze(settings, 'position'));
        } else {
            $(`#${name}`).css('position', 'relative');
        }
        window.propSet(name, settings);
    }
    var sectionTranslations = window.wordsTranslationsDB.Words['section'][document.langCode];
    for (const i of sectionTranslations) {
        window.jsteComponentsFnStore[i] = function (settings) {
            cardFn(settings);
        };
    }
});
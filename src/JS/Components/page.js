/*!
 * Page
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-28
 */
$(function () {
    function pageFn(settings) {
        settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
        $('contents').append('<page id="' + elementSettingsAnalyze(settings, 'name') + '" style="display: none;"></page>');
        if (elementSettingsAnalyze(settings, 'commands')) {
            window.execute(name, elementSettingsAnalyze(settings, 'commands'));
        }
    }
    var pageTranslations = window.wordsTranslationsDB.Words['page'][document.langCode];
    for (const i of pageTranslations) {
        window.jsteComponentsFnStore[i] = function (settings) {
            pageFn(settings);
        };
    }
});
/*!
 * Style
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-23
 */
$(function () {
    function styleFn(el, settings) {
        el.each(function () {
            settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
            if (elementSettingsAnalyze(settings, "name")) {
                window.jsteStylesStore[elementSettingsAnalyze(settings, "name")] = settings;
            }
        });
    }
    var styleTranslations = window.wordsTranslationsDB.Words['style'][document.langCode];
    for (const i of styleTranslations) {
        $.fn[i] = function (settings) {
            styleFn(this, settings);
        };
    }
});
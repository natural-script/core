/*!
 * Colors Palette
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function colorsPaletteFn (settings) {
            settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
            var name = elementSettingsAnalyze(settings, 'name');
            var out = '<paper-swatch-picker id="' + name + '" color="{{selectedColor}}"></paper-swatch-picker>';
            window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
            if (elementSettingsAnalyze(settings, 'fontColor')) {
                window.setFontColour(name, elementSettingsAnalyze(settings, 'fontColor'));
            }
            window.propSet(name, settings);
    }
    var colorsPaletteTranslations = window.wordsTranslationsDB.Words['colorsPalette'][document.langCode];
    for (const i of colorsPaletteTranslations) {
        window.jsteComponentsFnStore[i] = function (settings) {
            colorsPaletteFn(settings);
        };
    }
});
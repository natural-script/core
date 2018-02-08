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
    function colorsPaletteFn(el, settings) {
        el.each(function () {
            var name = elementSettingsAnalyze(settings, 'name');
            var out = '<paper-swatch-picker id="' + name + '" color="{{selectedColor}}"></paper-swatch-picker>';
            window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
            if (elementSettingsAnalyze(settings, 'fontColor')) {
                window.setFontColour(name, elementSettingsAnalyze(settings, 'fontColor'));
            }
            window.propSet(name, settings);
        });
    }
    var colorsPaletteTranslations = window.wordsTranslationsDB.Words['colorsPalette'][document.langCode];
    for (var i = 0; i < colorsPaletteTranslations.length; i++) {
        $.fn[colorsPaletteTranslations[i]] = function (settings) {
            colorsPaletteFn(this, settings);
        };
    }
});
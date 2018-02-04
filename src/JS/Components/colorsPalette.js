/*!
 * Colors Palette
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
 */
$(function () {
    function colorsPaletteFn(el, settings) {
        el.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var out = '<paper-swatch-picker id="' + name + '" color="{{selectedColor}}"></paper-swatch-picker>';
            window.appendComponent(settings[window.containerTranslations[document.langID]], out);
            if (settings[window.fontColorTranslations[document.langID]]) {
                window.setFontColour(name, settings[window.fontColorTranslations[document.langID]]);
            }
            window.propSet(name, settings);
        });
    }
    $.fn[window.colorsPaletteTranslations[document.langID]] = function (settings) {
        colorsPaletteFn(this, settings);
    };
});
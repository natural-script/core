/*!
 * Card
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-03
 */
$(function () {
    function cardFn (el, settings) {
        el.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var out = '<paper-card id="' + name + '"><div class="card-content"></div></paper-card>';
            window.appendComponent(settings[window.containerTranslations[document.langID]], out);
            if (settings[window.imageSourceTranslations[document.langID]]) {
                $('#' + name + '').attr('image', settings[window.imageSourceTranslations[document.langID]]);
            }
            if (settings[window.positionTranslations[document.langID]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.langID]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
        });
    }
    $.fn[window.sectionTranslations[document.langID]] = function (settings) {
        cardFn(this, settings);
    };
});
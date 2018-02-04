/*!
 * Tooltip
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
 */
$(function () {
    function tooltipFn(el, settings) {
        el.each(function () {
            var position;
            if (settings[window.directionTranslations[document.langID]] == window.fromTheRightTranslations[document.langID]) {
                position = 'right';
            } else if (settings[window.directionTranslations[document.langID]] == window.fromTheLeftTranslations[document.langID]) {
                position = 'left';
            } else if (settings[window.directionTranslations[document.langID]] == window.fromTheTopTranslations[document.langID] || settings[window.directionTranslations[document.langID]] == undefined) {
                position = 'top';
            } else if (settings[window.directionTranslations[document.langID]] == window.fromTheBottomTranslations[document.langID]) {
                position = 'bottom';
            }
            if (settings[window.titleTranslations[document.langID]]) {
                $('#' + settings[window.emitterTranslations[document.langID]]).tipso({
                    titleContent: settings[window.titleTranslations[document.langID]],
                    content: settings[window.textTranslations[document.langID]],
                    position: position,
                    background: '#FE5970'
                });
            } else {
                $('#' + settings[window.emitterTranslations[document.langID]]).tipso({
                    content: settings[window.textTranslations[document.langID]],
                    position: position,
                    background: '#FE5970'
                });
            }
            if (settings[window.transparencyTranslations[document.langID]]) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.langID]] + '%)');
            }
        });
    }
    $.fn[window.tooltipTranslations[document.langID]] = function (settings) {
        tooltipFn(this, settings);
    };
});
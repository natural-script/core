/*!
 * Tooltip
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.tooltipTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.textTranslations[document.lang]]: 'It seems that you have typed nothing',
            [window.titleTranslations[document.lang]]: null,
            [window.fontColorTranslations[document.lang]]: null,
            [window.fontSizeTranslations[document.lang]]: null,
            [window.nameTranslations[document.lang]]: null,
            [window.widthTranslations[document.lang]]: null,
            [window.lengthTranslations[document.lang]]: null,
            [window.fontThicknessTranslations[document.lang]]: null,
            [window.fontStyleTranslations[document.lang]]: null,
            [window.emitterTranslations[document.lang]]: null,
            [window.directionTranslations[document.lang]]: window.fromTheTopTranslations[document.lang],
            [window.animationTranslations[document.lang]]: null,
            [window.backgroundTranslations[document.lang]]: null,
            [window.transparencyTranslations[document.lang]]: null,
            [window.containerTranslations[document.lang]]: null,
            [window.commandsTranslations[document.lang]]: null
        }, options);
        return this.each(function () {
            var position;
            if (settings[window.directionTranslations[document.lang]] == window.fromTheRightTranslations[document.lang]) {
                position = 'right';
            } else if (settings[window.directionTranslations[document.lang]] == window.fromTheLeftTranslations[document.lang]) {
                position = 'left';
            } else if (settings[window.directionTranslations[document.lang]] == window.fromTheTopTranslations[document.lang]) {
                position = 'top';
            } else if (settings[window.directionTranslations[document.lang]] == window.fromTheBottomTranslations[document.lang]) {
                position = 'bottom';
            }
            if (settings[window.titleTranslations[document.lang]]) {
                $('#' + settings[window.emitterTranslations[document.lang]]).tipso({
                    titleContent: settings[window.titleTranslations[document.lang]],
                    content: settings[window.textTranslations[document.lang]],
                    position: position,
                    background: '#FE5970'
                });
            } else {
                $('#' + settings[window.emitterTranslations[document.lang]]).tipso({
                    content: settings[window.textTranslations[document.lang]],
                    position: position,
                    background: '#FE5970'
                });
            }
            if (settings[window.transparencyTranslations[document.lang]]) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.lang]] + '%)');
            }
        });
    };
});
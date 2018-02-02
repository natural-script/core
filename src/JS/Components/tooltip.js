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
    $.fn[window.tooltipTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.textTranslations[document.langID]]: 'It seems that you have typed nothing',
            [window.titleTranslations[document.langID]]: null,
            [window.fontColorTranslations[document.langID]]: null,
            [window.fontSizeTranslations[document.langID]]: null,
            [window.nameTranslations[document.langID]]: null,
            [window.widthTranslations[document.langID]]: null,
            [window.lengthTranslations[document.langID]]: null,
            [window.fontThicknessTranslations[document.langID]]: null,
            [window.fontStyleTranslations[document.langID]]: null,
            [window.emitterTranslations[document.langID]]: null,
            [window.directionTranslations[document.langID]]: window.fromTheTopTranslations[document.langID],
            [window.animationTranslations[document.langID]]: null,
            [window.backgroundTranslations[document.langID]]: null,
            [window.transparencyTranslations[document.langID]]: null,
            [window.containerTranslations[document.langID]]: null,
            [window.commandsTranslations[document.langID]]: null
        }, options);
        return this.each(function () {
            var position;
            if (settings[window.directionTranslations[document.langID]] == window.fromTheRightTranslations[document.langID]) {
                position = 'right';
            } else if (settings[window.directionTranslations[document.langID]] == window.fromTheLeftTranslations[document.langID]) {
                position = 'left';
            } else if (settings[window.directionTranslations[document.langID]] == window.fromTheTopTranslations[document.langID]) {
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
    };
});
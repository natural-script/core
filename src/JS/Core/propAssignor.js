/*!
 * Properties Assignor
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-15
 */
$(function () {
    $.fn[window.propertiesAssignorTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.fontColorTranslations[document.lang]]: null,
            [window.fontSizeTranslations[document.lang]]: null,
            [window.nameTranslations[document.lang]]: null,
            [window.widthTranslations[document.lang]]: null,
            [window.lengthTranslations[document.lang]]: null,
            [window.fontThicknessTranslations[document.lang]]: null,
            [window.fontStyleTranslations[document.lang]]: null,
            [window.animationTranslations[document.lang]]: null,
            [window.transparencyTranslations[document.lang]]: null,
            [window.distanceFromBottomTranslations[document.lang]]: null,
            [window.distanceFromTopTranslations[document.lang]]: null,
            [window.distanceFromLeftTranslations[document.lang]]: null,
            [window.distanceFromRightTranslations[document.lang]]: null,
            [window.positionTranslations[document.lang]]: null,
            [window.attributesTranslations[document.lang]]: null,
            [window.commandsTranslations[document.lang]]: null
        }, options);
        return this.each(function () {
            if (settings[window.fontStyleTranslations[document.lang]]) {
                $('#' + name + '').css('font-style', settings[window.fontStyleTranslations[document.lang]]);
            }
            if (settings[window.fontThicknessTranslations[document.lang]]) {
                if (settings[window.fontThicknessTranslations[document.lang]] == window.thickTranslations[document.lang]) {
                    $('#' + name + '').css('font-weight', 'bold');
                } else {
                    $('#' + name + '').css('font-weight', settings[window.fontThicknessTranslations[document.lang]]);
                }
            }
            if (settings[window.fontSizeTranslations[document.lang]]) {
                $('#' + name + '').css('font-size', window.convertLengthCSS(settings[window.fontSizeTranslations[document.lang]]));
            }
            if (settings[window.positionTranslations[document.lang]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.lang]]);
            } else {
                $('#' + name + '').css('position', 'absolute');
            }
            if (settings[window.distanceFromBottomTranslations[document.lang]]) {
                window.setDistance(name, 'bottom', settings[window.distanceFromBottomTranslations[document.lang]]);
            }
            if (settings[window.distanceFromTopTranslations[document.lang]]) {
                window.setDistance(name, 'top', settings[window.distanceFromTopTranslations[document.lang]]);
            }
            if (settings[window.distanceFromLeftTranslations[document.lang]]) {
                window.setDistance(name, 'left', settings[window.distanceFromLeftTranslations[document.lang]]);
            }
            if (settings[window.distanceFromRightTranslations[document.lang]]) {
                window.setDistance(name, 'right', settings[window.distanceFromRightTranslations[document.lang]]);
            }
            if (settings[window.commandsTranslations[document.lang]]) {
                window.execute(name, settings[window.commandsTranslations[document.lang]]);
            }
            if (settings[window.widthTranslations[document.lang]]) {
                window.setDimension(name, 'width', settings[window.widthTranslations[document.lang]]);
            }
            if (settings[window.lengthTranslations[document.lang]]) {
                window.setDimension(name, 'length', settings[window.lengthTranslations[document.lang]]);
            }
            if (settings[window.animationTranslations[document.lang]]) {
                window.setAnimation(name, settings[window.animationTranslations[document.lang]]);
            }
            if (settings[window.transparencyTranslations[document.lang]]) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.lang]] + '%)');
            }
        });
    };
});
/*!
 * Properties Assignor
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-15
 */
$(function () {
    $.fn[window.propertiesAssignorTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.fontColorTranslations[document.langID]]: null,
            [window.fontSizeTranslations[document.langID]]: null,
            [window.nameTranslations[document.langID]]: null,
            [window.widthTranslations[document.langID]]: null,
            [window.lengthTranslations[document.langID]]: null,
            [window.fontThicknessTranslations[document.langID]]: null,
            [window.fontStyleTranslations[document.langID]]: null,
            [window.animationTranslations[document.langID]]: null,
            [window.transparencyTranslations[document.langID]]: null,
            [window.distanceFromBottomTranslations[document.langID]]: null,
            [window.distanceFromTopTranslations[document.langID]]: null,
            [window.distanceFromLeftTranslations[document.langID]]: null,
            [window.distanceFromRightTranslations[document.langID]]: null,
            [window.positionTranslations[document.langID]]: null,
            [window.attributesTranslations[document.langID]]: null,
            [window.commandsTranslations[document.langID]]: null
        }, options);
        return this.each(function () {
            if (settings[window.fontStyleTranslations[document.langID]]) {
                $('#' + name + '').css('font-style', settings[window.fontStyleTranslations[document.langID]]);
            }
            if (settings[window.fontThicknessTranslations[document.langID]]) {
                if (settings[window.fontThicknessTranslations[document.langID]] == window.thickTranslations[document.langID]) {
                    $('#' + name + '').css('font-weight', 'bold');
                } else {
                    $('#' + name + '').css('font-weight', settings[window.fontThicknessTranslations[document.langID]]);
                }
            }
            if (settings[window.fontSizeTranslations[document.langID]]) {
                $('#' + name + '').css('font-size', window.convertLengthCSS(settings[window.fontSizeTranslations[document.langID]]));
            }
            if (settings[window.positionTranslations[document.langID]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.langID]]);
            } else {
                $('#' + name + '').css('position', 'absolute');
            }
            if (settings[window.distanceFromBottomTranslations[document.langID]]) {
                window.setDistance(name, 'bottom', settings[window.distanceFromBottomTranslations[document.langID]]);
            }
            if (settings[window.distanceFromTopTranslations[document.langID]]) {
                window.setDistance(name, 'top', settings[window.distanceFromTopTranslations[document.langID]]);
            }
            if (settings[window.distanceFromLeftTranslations[document.langID]]) {
                window.setDistance(name, 'left', settings[window.distanceFromLeftTranslations[document.langID]]);
            }
            if (settings[window.distanceFromRightTranslations[document.langID]]) {
                window.setDistance(name, 'right', settings[window.distanceFromRightTranslations[document.langID]]);
            }
            if (settings[window.commandsTranslations[document.langID]]) {
                window.execute(name, settings[window.commandsTranslations[document.langID]]);
            }
            if (settings[window.widthTranslations[document.langID]]) {
                window.setDimension(name, 'width', settings[window.widthTranslations[document.langID]]);
            }
            if (settings[window.lengthTranslations[document.langID]]) {
                window.setDimension(name, 'length', settings[window.lengthTranslations[document.langID]]);
            }
            if (settings[window.animationTranslations[document.langID]]) {
                window.setAnimation(name, settings[window.animationTranslations[document.langID]]);
            }
            if (settings[window.transparencyTranslations[document.langID]]) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.langID]] + '%)');
            }
        });
    };
});
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
            if (elementSettingsAnalyze(settings, 'fontStyle')) {
                $('#' + name + '').css('font-style', elementSettingsAnalyze(settings, 'fontStyle'));
            }
            if (elementSettingsAnalyze(settings, 'fontThickness')) {
                if (window.getSafe(() => elementSettingsAnalyze(settings, 'fontThickness').findBestMatch(window.wordsTranslationsDB.Words['thick'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').css('font-weight', 'bold');
                } else {
                    $('#' + name + '').css('font-weight', elementSettingsAnalyze(settings, 'fontThickness'));
                }
            }
            if (elementSettingsAnalyze(settings, 'fontSize')) {
                $('#' + name + '').css('font-size', window.convertLengthCSS(elementSettingsAnalyze(settings, 'fontSize')));
            }
            if (elementSettingsAnalyze(settings, 'position')) {
                $('#' + name + '').css('position', elementSettingsAnalyze(settings, 'position'));
            } else {
                $('#' + name + '').css('position', 'absolute');
            }
            if (elementSettingsAnalyze(settings, 'distanceFromBottom')) {
                window.setDistance(name, 'bottom', elementSettingsAnalyze(settings, 'distanceFromBottom'));
            }
            if (elementSettingsAnalyze(settings, 'distanceFromTop')) {
                window.setDistance(name, 'top', elementSettingsAnalyze(settings, 'distanceFromTop'));
            }
            if (elementSettingsAnalyze(settings, 'distanceFromLeft')) {
                window.setDistance(name, 'left', elementSettingsAnalyze(settings, 'distanceFromLeft'));
            }
            if (elementSettingsAnalyze(settings, 'distanceFromRight')) {
                window.setDistance(name, 'right', elementSettingsAnalyze(settings, 'distanceFromRight'));
            }
            if (elementSettingsAnalyze(settings, 'commands')) {
                window.execute(name, elementSettingsAnalyze(settings, 'commands'));
            }
            if (elementSettingsAnalyze(settings, 'width')) {
                window.setDimension(name, 'width', elementSettingsAnalyze(settings, 'width'));
            }
            if (elementSettingsAnalyze(settings, 'length')) {
                window.setDimension(name, 'length', elementSettingsAnalyze(settings, 'length'));
            }
            if (elementSettingsAnalyze(settings, 'animation')) {
                window.setAnimation(name, elementSettingsAnalyze(settings, 'animation'));
            }
            if (elementSettingsAnalyze(settings, 'transparency')) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(settings, 'transparency') + '%)');
            }
        });
    };
});
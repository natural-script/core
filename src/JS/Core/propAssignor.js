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
    function propertiesAssignorFn(el, settings) {
        el.each(function () {
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
    var propertiesAssignorTranslations = window.wordsTranslationsDB.Words['propertiesAssignor'][document.langCode];
    for (const i of propertiesAssignorTranslations) {
        $.fn[i] = function (settings) {
            propertiesAssignorFn(this, settings);
        };
    }
});
/*!
 * Slider
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function sliderFn(el, settings) {
        el.each(function () {
            var name = elementSettingsAnalyze(settings, 'name');
            var out = '<paper-slider '
            if (elementSettingsAnalyze(settings, 'max')) {
                out += 'max="' + elementSettingsAnalyze(settings, 'max') + '" ';
            }
            if (elementSettingsAnalyze(settings, 'min')) {
                out += 'min="' + elementSettingsAnalyze(settings, 'min') + '" ';
            }
            if (elementSettingsAnalyze(settings, 'step')) {
                out += 'step="' + elementSettingsAnalyze(settings, 'step') + '" ';
            }
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
                        out += 'disabled ';
                    } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['withPin'][document.langCode]).rating > 0.8) {
                        out += 'pin ';
                    } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['withDigitalValueEditor'][document.langCode]).rating > 0.8) {
                        out += 'editable ';
                    }
                }
            }
            out += 'id="' + name + '">';
            out += '</paper-slider>';
            window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
            if (elementSettingsAnalyze(settings, 'fontColor')) {
                window.setFontColour(name, elementSettingsAnalyze(settings, 'fontColor'));
            }
            if (elementSettingsAnalyze(settings, 'fontStyle')) {
                $('#' + name + '').css('font-style', elementSettingsAnalyze(settings, 'fontStyle'));
            }
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
                        $('#' + name + '').attr('disabled', '');
                    }
                }
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
            if ($('#' + elementSettingsAnalyze(settings, 'container') + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (elementSettingsAnalyze(settings, 'position')) {
                $('#' + name + '').css('position', elementSettingsAnalyze(settings, 'position'));
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
            if (elementSettingsAnalyze(settings, 'transparency')) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(settings, 'transparency') + '%)');
            }
        });
    }
    var sliderTranslations = window.wordsTranslationsDB.Words['slider'][document.langCode];
    for (var i = 0; i < sliderTranslations.length; i++) {
        $.fn[sliderTranslations[i]] = function (settings) {
            sliderFn(this, settings);
        };
    }
});
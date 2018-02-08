/*!
 * Tooltip
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function tooltipFn(el, settings) {
        el.each(function () {
            var position;
            if (window.getSafe(() => elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['fromTheRight'][document.langCode]).rating > 0.8)) {
                position = 'right';
            } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['fromTheLeft'][document.langCode]).rating > 0.8)) {
                position = 'left';
            } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'direction') == undefined || elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['fromTheTop'][document.langCode]).rating > 0.8)) {
                position = 'top';
            } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['fromTheBottom'][document.langCode]).rating > 0.8)) {
                position = 'bottom';
            }
            if (elementSettingsAnalyze(settings, 'title')) {
                $('#' + elementSettingsAnalyze(settings, 'emitter')).tipso({
                    titleContent: elementSettingsAnalyze(settings, 'title'),
                    content: elementSettingsAnalyze(settings, 'text'),
                    position: position,
                    background: '#FE5970'
                });
            } else {
                $('#' + elementSettingsAnalyze(settings, 'emitter')).tipso({
                    content: elementSettingsAnalyze(settings, 'text'),
                    position: position,
                    background: '#FE5970'
                });
            }
            if (elementSettingsAnalyze(settings, 'transparency')) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(settings, 'transparency') + '%)');
            }
        });
    }
    var tooltipTranslations = window.wordsTranslationsDB.Words['tooltip'][document.langCode];
    for (var i = 0; i < tooltipTranslations.length; i++) {
        $.fn[tooltipTranslations[i]] = function (settings) {
            tooltipFn(this, settings);
        };
    }
});
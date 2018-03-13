/*!
 * Loader
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function loaderFn(el, settings) {
        return this.each(function () {
            var name = elementSettingsAnalyze(settings, 'name');
            var out;
            if (window.getSafe(() => elementSettingsAnalyze(settings, 'type').findBestMatch(window.wordsTranslationsDB.Words['bar'][document.langCode]).rating > 0.8)) {
                out = '<paper-progress id="' + name + '"></paper-progress>';
            } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'type') == undefined || elementSettingsAnalyze(settings, 'type').findBestMatch(window.wordsTranslationsDB.Words['spinner'][document.langCode]).rating > 0.8)) {
                out = '<paper-spinner id="' + name + '"></paper-spinner>';
            }
            window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(' ' + getTranslations("and") + ' ', 'gmi'));
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['loading'][document.langCode]).rating > 0.8) {
                        $('#' + name + '').attr('active', '');
                    }
                }
            }
            window.propSet(name, settings);
        });
    }
    var loaderTranslations = window.wordsTranslationsDB.Words['loader'][document.langCode];
    for (var i = 0; i < loaderTranslations.length; i++) {
        $.fn[loaderTranslations[i]] = function (settings) {
            loaderFn(this, settings);
        };
    }
});
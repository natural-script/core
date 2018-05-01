/*!
 * Button
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function buttonFn (el, settings) {
        el.each(function () {
            settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
            var name = elementSettingsAnalyze(settings, 'name');
            var out = '<paper-button id="' + name + '"></paper-button>';
            window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
            $('#' + name + '').text(elementSettingsAnalyze(settings, 'text'));
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(' ' + getTranslations("and") + ' ', 'gmi'));
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
                        $('#' + name + '').attr('disabled', '');
                    } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['raised'][document.langCode]).rating > 0.8) {
                        $('#' + name + '').attr('raised', '');
                    } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['switched'][document.langCode]).rating > 0.8) {
                        $('#' + name + '').attr('toggled', '');
                    }
                }
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
        });
    }
    var buttonTranslations = window.wordsTranslationsDB.Words['button'][document.langCode];
    for (const i of buttonTranslations) {
    $.fn[i] = function (settings) {
        buttonFn(this, settings);
    };
}
});
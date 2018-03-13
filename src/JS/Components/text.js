/*!
 * Text
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function textFn(el, settings) {
        el.each(function () {
            var name = elementSettingsAnalyze(settings, 'name');
            var out = '<p id="' + name + '">' + elementSettingsAnalyze(settings, 'text') + '</p>';
            window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(' ' + getTranslations("and") + ' ', 'gmi'));
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['shareable'][document.langCode]).rating > 0.8) {
                        window.shareThis({
                            selector: '#' + name + '',
                            sharers: [window.twitterSharer, window.facebookSharer, window.linkedInSharer, window.redditSharer, window.emailSharer]
                        }).init();
                    }
                }
            }
            if (elementSettingsAnalyze(settings, 'direction')) {
                if (window.getSafe(() => elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['ltr'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').css('direction', 'ltr');
                } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['rtl'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').css('direction', 'rtl');
                }
            }
            if (elementSettingsAnalyze(settings, 'background')) {
                window.setBG(name, elementSettingsAnalyze(settings, 'background'));
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
    var textFnTranslations = window.wordsTranslationsDB.Words['textFn'][document.langCode];
    for (var i = 0; i < textFnTranslations.length; i++) {
        $.fn[textFnTranslations[i]] = function (settings) {
            textFn(this, settings);
        };
    }
});
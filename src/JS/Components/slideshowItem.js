/*!
 * Slideshow Item
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function slideShowItemFn(el, settings) {
        el.each(function () {
            settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
            var name = elementSettingsAnalyze(settings, 'name');
            var source = elementSettingsAnalyze(settings, 'source');
            if (window.getSafe(() => elementSettingsAnalyze(settings, 'type') == undefined || elementSettingsAnalyze(settings, 'type').findBestMatch(window.wordsTranslationsDB.Words['image'][document.langCode]).rating > 0.8)) {
                var out = '<div class="owl-item" data-hash="' + name + '"><img src="' + source + '"></img></div>';
            } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'type').findBestMatch(window.wordsTranslationsDB.Words['video'][document.langCode]).rating > 0.8)) {
                var out = '<div class="item-video" data-hash="' + name + '"><a class="owl-video" href="' + source + '"></a></div>'
            }
            $('#' + elementSettingsAnalyze(settings, 'slideShow') + '').append(out);
            if (elementSettingsAnalyze(settings, 'position')) {
                $('#' + name + '').css('position', elementSettingsAnalyze(settings, 'position'));
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
            if (elementSettingsAnalyze(settings, 'title')) {
                $('#' + name + '').attr('alt', elementSettingsAnalyze(settings, 'title'));
            }
        });
    }
    var slideShowItemTranslations = window.wordsTranslationsDB.Words['slideShowItem'][document.langCode];
    for (var i = 0; i < slideShowItemTranslations.length; i++) {
        $.fn[slideShowItemTranslations[i]] = function (settings) {
            slideShowItemFn(this, settings);
        };
    }
});
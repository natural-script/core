/*!
 * Page
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-16
 */
$(function () {
    function pageFn(el, settings) {
        el.each(function () {
            settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
            $('contents').append('<page id="' + elementSettingsAnalyze(settings, 'name') + '" style="display: none;"></page>');
            var currentPageRaw = window.getAllUrlParams().page || wordsTranslationsDB.Words['indexPage'][document.langCode][0];
            if (XRegExp('' + getTranslations("indexPage") + '', 'gmi').test(currentPageRaw)) {
                window.setURLParameter('page', wordsTranslationsDB.Words['indexPage'][document.langCode][0]);
            }
            var currentPage = decodeURIComponent(currentPageRaw);
            $('#' + currentPage + '').fadeIn(500);
            $('title').html(currentPage.replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }) + ' | ' + window.title);
            if (window.mode == 'app') {
                $('.appTitle').html(currentPage.replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }));
            }
            if (elementSettingsAnalyze(settings, 'commands')) {
                window.execute(name, elementSettingsAnalyze(settings, 'commands'));
            }
        });
    }
    var pageTranslations = window.wordsTranslationsDB.Words['page'][document.langCode];
    for (var i = 0; i < pageTranslations.length; i++) {
        $.fn[pageTranslations[i]] = function (settings) {
            pageFn(this, settings);
        };
    }
});
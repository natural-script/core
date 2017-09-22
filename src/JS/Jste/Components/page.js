/*!
 * Page
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.pageTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.nameTranslations[document.lang]]: null,
            [window.commandsTranslations[document.lang]]: null
        }, options);
        return this.each(function () {
            $('contents').append('<page id="' + settings[window.nameTranslations[document.lang]] + '" style="display: none;"></page>');
            var currentPageRaw = window.getAllUrlParams().page || window.indexPageTranslations[document.lang];
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
            if (settings[window.commandsTranslations[document.lang]]) {
                window.execute(name, settings[window.commandsTranslations[document.lang]]);
            }
        });
    };
});
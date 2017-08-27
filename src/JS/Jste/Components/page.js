$(function () {
    $(function () {
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
        //---------------------------------------------------------------------Page------------------------------------------------------------------------------------------------------------------------------------------//
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
        $.fn[window.pageTranslations[document.lang]] = function (options) {
            // Establish our default settings
            var settings = $.extend({
                [window.nameTranslations[document.lang]]: null,
                [window.commandsTranslations[document.lang]]: null
            }, options);
            return this.each(function () {
                $('contents').append('<page id="' + settings[window.nameTranslations[document.lang]] + '" style="display: none;"></page>');
                $('#' + decodeURIComponent(window.getAllUrlParams().page) + '').fadeIn(500);
                if (settings[window.commandsTranslations[document.lang]]) {
                    window.execute(name, settings[window.commandsTranslations[document.lang]]);
                }
            });
        };
    });
}(jQuery));
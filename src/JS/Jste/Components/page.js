$(function () {
    $(function () {
        var uniqueID = document.uniqueID();
        document[uniqueID + 'checker'] = setInterval(function () {
            if (document.lang == 0 || document.lang == 1 || document.lang == 2 || document.lang == 3 || document.lang == 4 || document.lang == 5) {
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
                        $('title').html(decodeURIComponent(window.getAllUrlParams().page).replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        }) + ' | ' + window.title);
                        if (settings[window.commandsTranslations[document.lang]]) {
                            window.execute(name, settings[window.commandsTranslations[document.lang]]);
                        }
                    });
                };

                clearInterval(document[uniqueID + 'checker']);
            }
        }, 1);
    });
}(jQuery));
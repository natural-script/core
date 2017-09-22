/*!
 * Loader
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.loaderTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.nameTranslations[document.lang]]: null,
            [window.widthTranslations[document.lang]]: null,
            [window.lengthTranslations[document.lang]]: null,
            [window.loadingTranslations[document.lang]]: null,
            [window.animationTranslations[document.lang]]: null,
            [window.backgroundTranslations[document.lang]]: null,
            [window.transparencyTranslations[document.lang]]: null,
            [window.distanceFromBottomTranslations[document.lang]]: null,
            [window.distanceFromTopTranslations[document.lang]]: null,
            [window.distanceFromLeftTranslations[document.lang]]: null,
            [window.distanceFromRightTranslations[document.lang]]: null,
            [window.positionTranslations[document.lang]]: null,
            [window.containerTranslations[document.lang]]: null,
            [window.typeTranslations[document.lang]]: window.spinnerTranslations[document.lang],
            [window.attributesTranslations[document.lang]]: null,
            [window.commandsTranslations[document.lang]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.lang]];
            var out;
            if (settings[window.typeTranslations[document.lang]] == window.barTranslations[document.lang]) {
                out = '<paper-progress id="' + name + '"></paper-progress>';
            } else if (settings[window.typeTranslations[document.lang]] == window.spinnerTranslations[document.lang]) {
                out = '<paper-spinner id="' + name + '"></paper-spinner>';
            }
            window.appendComponent(settings[window.containerTranslations[document.lang]], out);
            if (settings[window.attributesTranslations[document.lang]]) {
                var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' ' + window.andTranslations[document.lang] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.loadingTranslations[document.lang]) {
                        $('#' + name + '').attr('active', '');
                    }
                }
            }
            window.propSet(name, settings);
        });
    };
});
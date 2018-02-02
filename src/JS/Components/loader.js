/*!
 * Loader
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.loaderTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.nameTranslations[document.langID]]: null,
            [window.widthTranslations[document.langID]]: null,
            [window.lengthTranslations[document.langID]]: null,
            [window.loadingTranslations[document.langID]]: null,
            [window.animationTranslations[document.langID]]: null,
            [window.backgroundTranslations[document.langID]]: null,
            [window.transparencyTranslations[document.langID]]: null,
            [window.distanceFromBottomTranslations[document.langID]]: null,
            [window.distanceFromTopTranslations[document.langID]]: null,
            [window.distanceFromLeftTranslations[document.langID]]: null,
            [window.distanceFromRightTranslations[document.langID]]: null,
            [window.positionTranslations[document.langID]]: null,
            [window.containerTranslations[document.langID]]: null,
            [window.typeTranslations[document.langID]]: window.spinnerTranslations[document.langID],
            [window.attributesTranslations[document.langID]]: null,
            [window.commandsTranslations[document.langID]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var out;
            if (settings[window.typeTranslations[document.langID]] == window.barTranslations[document.langID]) {
                out = '<paper-progress id="' + name + '"></paper-progress>';
            } else if (settings[window.typeTranslations[document.langID]] == window.spinnerTranslations[document.langID]) {
                out = '<paper-spinner id="' + name + '"></paper-spinner>';
            }
            window.appendComponent(settings[window.containerTranslations[document.langID]], out);
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.loadingTranslations[document.langID]) {
                        $('#' + name + '').attr('active', '');
                    }
                }
            }
            window.propSet(name, settings);
        });
    };
});
/*!
 * Loader
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
 */
$(function () {
    function loaderFn(el, settings) {
        return this.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var out;
            if (settings[window.typeTranslations[document.langID]] == window.barTranslations[document.langID]) {
                out = '<paper-progress id="' + name + '"></paper-progress>';
            } else if (settings[window.typeTranslations[document.langID]] == window.spinnerTranslations[document.langID] || settings[window.typeTranslations[document.langID]] == undefined) {
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
    }
    $.fn[window.loaderTranslations[document.langID]] = function (settings) {
        loaderFn(this, settings);
    };
});
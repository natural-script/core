/*!
 * Checkbox
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-03
 */
$(function () {
    function checkboxFn (el, settings) {
        el.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var out = '<paper-checkbox id="' + name + '">' + settings[window.titleTranslations[document.langID]] + '';
            if (settings[window.descriptionTranslations[document.langID]]) {
                out += '<span class="subtitle">' + settings[window.descriptionTranslations[document.langID]] + '</span>';
            }
            out += '</paper-checkbox>';
            window.appendComponent(settings[window.containerTranslations[document.langID]], out);
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.disabledTranslations[document.langID]) {
                        $('#' + name + '').attr('disabled', '');
                    } else if (propertiesArray[i] == window.checkedTranslations[document.langID]) {
                        $('#' + name + '').attr('checked', '');
                    }
                }
            }
            if (settings[window.positionTranslations[document.langID]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.langID]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
        });
    }
    $.fn[window.checkboxTranslations[document.langID]] = function (settings) {
        checkboxFn(this, settings);
    };
});
/*!
 * Button
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-03
 */
$(function () {
    function buttonFn (el, settings) {
        el.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var out = '<paper-button id="' + name + '"></paper-button>';
            window.appendComponent(settings[window.containerTranslations[document.langID]], out);
            $('#' + name + '').text(settings[window.textTranslations[document.langID]]);
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.disabledTranslations[document.langID]) {
                        $('#' + name + '').attr('disabled', '');
                    } else if (propertiesArray[i] == window.raisedTranslations[document.langID]) {
                        $('#' + name + '').attr('raised', '');
                    } else if (propertiesArray[i] == window.switchedTranslations[document.langID]) {
                        $('#' + name + '').attr('toggled', '');
                    }
                }
            }
            if ($('#' + settings[window.containerTranslations[document.langID]] + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (settings[window.positionTranslations[document.langID]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.langID]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
        });
    }
    $.fn[window.buttonTranslations[document.langID]] = function (settings) {
        buttonFn(this, settings);
    };
});
/*!
 * Button
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.buttonTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.textTranslations[document.langID]]: null,
            [window.fontColorTranslations[document.langID]]: null,
            [window.fontSizeTranslations[document.langID]]: null,
            [window.nameTranslations[document.langID]]: null,
            [window.widthTranslations[document.langID]]: null,
            [window.lengthTranslations[document.langID]]: null,
            [window.fontThicknessTranslations[document.langID]]: null,
            [window.fontStyleTranslations[document.langID]]: null,
            [window.disabledTranslations[document.langID]]: null,
            [window.raisedTranslations[document.langID]]: null,
            [window.switchedTranslations[document.langID]]: null,
            [window.animationTranslations[document.langID]]: null,
            [window.backgroundTranslations[document.langID]]: null,
            [window.transparencyTranslations[document.langID]]: null,
            [window.distanceFromBottomTranslations[document.langID]]: null,
            [window.distanceFromTopTranslations[document.langID]]: null,
            [window.distanceFromLeftTranslations[document.langID]]: null,
            [window.distanceFromRightTranslations[document.langID]]: null,
            [window.positionTranslations[document.langID]]: null,
            [window.containerTranslations[document.langID]]: null,
            [window.attributesTranslations[document.langID]]: null,
            [window.commandsTranslations[document.langID]]: null
        }, options);
        return this.each(function () {
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
    };
});
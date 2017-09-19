/*!
 * Button
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.buttonTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.textTranslations[document.lang]]: null,
            [window.fontColorTranslations[document.lang]]: null,
            [window.fontSizeTranslations[document.lang]]: null,
            [window.nameTranslations[document.lang]]: null,
            [window.widthTranslations[document.lang]]: null,
            [window.lengthTranslations[document.lang]]: null,
            [window.thicknessTranslations[document.lang]]: null,
            [window.fontStyleTranslations[document.lang]]: null,
            [window.disabledTranslations[document.lang]]: null,
            [window.raisedTranslations[document.lang]]: null,
            [window.switchedTranslations[document.lang]]: null,
            [window.animationTranslations[document.lang]]: null,
            [window.backgroundTranslations[document.lang]]: null,
            [window.transparencyTranslations[document.lang]]: null,
            [window.distanceFromBottomTranslations[document.lang]]: null,
            [window.distanceFromTopTranslations[document.lang]]: null,
            [window.distanceFromLeftTranslations[document.lang]]: null,
            [window.distanceFromRightTranslations[document.lang]]: null,
            [window.positionTranslations[document.lang]]: null,
            [window.containerTranslations[document.lang]]: null,
            [window.attributesTranslations[document.lang]]: null,
            [window.commandsTranslations[document.lang]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.lang]];
            var out = '<paper-button id="' + name + '"></paper-button>';
            if (settings[window.containerTranslations[document.lang]]) {
                if ($('#' + settings[window.containerTranslations[document.lang]] + '').hasClass('modal')) {
                    $('#' + settings[window.containerTranslations[document.lang]] + ' > .modal-content').append(out);
                } else {
                    $('#' + settings[window.containerTranslations[document.lang]] + '').append(out);
                }
            } else {
                $('contents').append(out);
            }
            $('#' + name + '').text(settings[window.textTranslations[document.lang]]);
            if (settings[window.fontColorTranslations[document.lang]]) {
                window.setFontColour(name, settings[window.fontColorTranslations[document.lang]]);
            }
            if (settings[window.fontStyleTranslations[document.lang]]) {
                $('#' + name + '').css('font-style', settings[window.fontStyleTranslations[document.lang]]);
            }
            if (settings[window.attributesTranslations[document.lang]]) {
                var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' ' + window.andTranslations[document.lang] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.disabledTranslations[document.lang]) {
                        $('#' + name + '').attr('disabled', '');
                    } else if (propertiesArray[i] == window.raisedTranslations[document.lang]) {
                        $('#' + name + '').attr('raised', '');
                    } else if (propertiesArray[i] == window.switchedTranslations[document.lang]) {
                        $('#' + name + '').attr('toggled', '');
                    }
                }
            }
            if (settings[window.thicknessTranslations[document.lang]]) {
                if (settings[window.thicknessTranslations[document.lang]] == window.thickTranslations[document.lang]) {
                    $('#' + name + '').css('font-weight', 'bold');
                } else {
                    $('#' + name + '').css('font-weight', settings[window.thicknessTranslations[document.lang]]);
                }
            }
            if (settings[window.fontSizeTranslations[document.lang]]) {
                $('#' + name + '').css('font-size', window.convertLengthCSS(settings[window.fontSizeTranslations[document.lang]]));
            }
            if ($('#' + settings[window.containerTranslations[document.lang]] + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (settings[window.positionTranslations[document.lang]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.lang]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
        });
    };
});
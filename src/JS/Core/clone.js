/*!
 * Clone
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.cloneFnTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.clonedElementTranslations[document.langID]]: null,
            [window.fontColorTranslations[document.langID]]: null,
            [window.textTranslations[document.langID]]: null,
            [window.fontSizeTranslations[document.langID]]: null,
            [window.nameTranslations[document.langID]]: null,
            [window.widthTranslations[document.langID]]: null,
            [window.lengthTranslations[document.langID]]: null,
            [window.fontThicknessTranslations[document.langID]]: null,
            [window.fontStyleTranslations[document.langID]]: null,
            [window.animationTranslations[document.langID]]: null,
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
            var clonedElement = settings[window.clonedElementTranslations[document.langID]];
            var name = settings[window.nameTranslations[document.langID]];
            var out = $('#' + clonedElement + '').clone(false).attr('id', name);
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.withCommandsTranslations[document.langID]) {
                        out = $('#' + clonedElement + '').clone(true).attr('id', name);
                    }
                }
            }
            if (settings[window.containerTranslations[document.langID]]) {
                if ($('#' + settings[window.containerTranslations[document.langID]] + '').hasClass('modal')) {
                    $('#' + settings[window.containerTranslations[document.langID]] + ' > .modal-content').append(out);
                } else {
                    $('#' + settings[window.containerTranslations[document.langID]] + '').append(out);
                }
            } else {
                $('contents').append(out);
            }
            if (settings[window.textTranslations[document.langID]]) {
                $('#' + name + '').text(settings[window.textTranslations[document.langID]]);
            }
            if (settings[window.fontColorTranslations[document.langID]]) {
                window.setFontColour(name, settings[window.fontColorTranslations[document.langID]]);
            }
            if (settings[window.fontStyleTranslations[document.langID]]) {
                $('#' + name + '').css('font-style', settings[window.fontStyleTranslations[document.langID]]);
            }
            if (settings[window.fontThicknessTranslations[document.langID]]) {
                if (settings[window.fontThicknessTranslations[document.langID]] == window.thickTranslations[document.langID]) {
                    $('#' + name + '').css('font-weight', 'bold');
                } else {
                    $('#' + name + '').css('font-weight', settings[window.fontThicknessTranslations[document.langID]]);
                }
            }
            if (settings[window.fontSizeTranslations[document.langID]]) {
                $('#' + name + '').css('font-size', window.convertLengthCSS(settings[window.fontSizeTranslations[document.langID]]));
            }
            if ($('#' + settings[window.containerTranslations[document.langID]] + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            window.propSet(name, settings);
            if (!settings[window.widthTranslations[document.langID]]) {
                $('#' + name + '').css('width', 'auto');
            }
        });
    };
});
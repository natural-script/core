/*!
 * Dialog Box
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.dialogBoxTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.titleTranslations[document.langID]]: null,
            [window.acceptanceButtonTranslations[document.langID]]: null,
            [window.cancellationButtonTranslations[document.langID]]: null,
            [window.fontColorTranslations[document.langID]]: null,
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
            [window.backgroundTranslations[document.langID]]: null,
            [window.commandsTranslations[document.langID]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var out = '<div id="' + name + '"></div>';
            $('body').append(out);
            if (settings[window.emitterTranslations[document.langID]]) {
                $('#' + settings[window.emitterTranslations[document.langID]] + '').attr('onclick', settings[window.nameTranslations[document.langID]] + '.open()');
            }
            if (settings[window.fontSizeTranslations[document.langID]]) {
                $('#' + name + '').css('font-size', window.convertLengthCSS(settings[window.fontSizeTranslations[document.langID]]));
            }
            if ($('#' + settings[window.containerTranslations[document.langID]] + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (settings[window.positionTranslations[document.langID]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.langID]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            if (settings[window.titleTranslations[document.langID]]) {
                $('#' + name + '').iziModal({
                    title: settings[window.titleTranslations[document.langID]],
                    rtl: document.isRTL
                });
            } else {
                $('#' + name + '').iziModal({
                    rtl: document.isRTL
                });
            }
            window.propSet(name, settings);
            $('#' + name + '').css('position', 'fixed');
        });
    };
});
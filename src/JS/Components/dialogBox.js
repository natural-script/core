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
    function dialogBoxFn(el, settings) {
        el.each(function () {
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
    }
    $.fn[window.dialogBoxTranslations[document.langID]] = function (settings) {
        dialogBoxFn(this, settings);
    };
});
/*!
 * Dialog Box
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function dialogBoxFn (settings) {
            settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
            var name = elementSettingsAnalyze(settings, 'name');
            var out = '<div id="' + name + '"></div>';
            $('body').append(out);
            if (elementSettingsAnalyze(settings, 'emitter')) {
                $('#' + elementSettingsAnalyze(settings, 'emitter') + '').attr('onclick', elementSettingsAnalyze(settings, 'name') + '.open()');
            }
            if (elementSettingsAnalyze(settings, 'fontSize')) {
                $(`#${name}`).css('font-size', window.convertLengthCSS(elementSettingsAnalyze(settings, 'fontSize')));
            }
            if ($('#' + elementSettingsAnalyze(settings, 'container') + '').hasClass('row') == true) {
                $(`#${name}`).addClass('col');
            }
            if (elementSettingsAnalyze(settings, 'position')) {
                $(`#${name}`).css('position', elementSettingsAnalyze(settings, 'position'));
            } else {
                $(`#${name}`).css('position', 'relative');
            }
            if (elementSettingsAnalyze(settings, 'title')) {
                $(`#${name}`).iziModal({
                    title: elementSettingsAnalyze(settings, 'title'),
                    rtl: document.isRTL
                });
            } else {
                $(`#${name}`).iziModal({
                    rtl: document.isRTL
                });
            }
            window.propSet(name, settings);
            $(`#${name}`).css('position', 'fixed');
    }
    var dialogBoxTranslations = window.wordsTranslationsDB.Words['dialogBox'][document.langCode];
    for (const i of dialogBoxTranslations) {
    window.jsteComponentsFnStore[i] = function (settings) {
        dialogBoxFn(settings);
    };
}
});
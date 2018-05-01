/*!
 * FAB
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function FABFn(el, settings) {
        el.each(function () {
            settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
            var name = elementSettingsAnalyze(settings, 'name');
            var out = '<paper-fab ';
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(' ' + getTranslations("and") + ' ', 'gmi'));
                for (i = 0; i < propertiesArray.length; i++) {
                    if (settings.mini.findBestMatch(window.wordsTranslationsDB.Words['yes'][document.langCode]).rating > 0.8) {
                        out += 'mini ';
                    } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
                        out += 'disabled ';
                    }
                }
            }
            if (window.getSafe(() => elementSettingsAnalyze(settings, 'ripple').findBestMatch(window.wordsTranslationsDB.Words['no'][document.langCode]).rating > 0.8)) {
                out += 'noink ';
            }
            if (elementSettingsAnalyze(settings, 'text')) {
                out += 'label="' + elementSettingsAnalyze(settings, 'text') + '" ';
            }
            if (elementSettingsAnalyze(settings, 'icon')) {
                out += 'icon="' + elementSettingsAnalyze(settings, 'icon') + '" ';
            }
            if (elementSettingsAnalyze(settings, 'description')) {
                out += 'title="' + elementSettingsAnalyze(settings, 'description') + '" ';
            }
            out += 'id="' + name + '"></paper-fab>';
            if (elementSettingsAnalyze(settings, 'container')) {
                if ($('#' + elementSettingsAnalyze(settings, 'container') + '').hasClass('modal')) {
                    $('#' + elementSettingsAnalyze(settings, 'container') + ' > .modal-content').append(out);
                } else {
                    $('#' + elementSettingsAnalyze(settings, 'container') + '').append(out);
                }
            } else {
                $('contents').append(out);
            }
            if (elementSettingsAnalyze(settings, 'fontColor')) {
                window.setFontColour(name, elementSettingsAnalyze(settings, 'fontColor'));
            }
            if (elementSettingsAnalyze(settings, 'fontStyle')) {
                $('#' + name + '').css('font-style', elementSettingsAnalyze(settings, 'fontStyle'));
            }
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(' ' + getTranslations("and") + ' ', 'gmi'));
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
                        $('#' + name + '').attr('disabled', '');
                    }
                }
            }
            if (window.getSafe(() => elementSettingsAnalyze(settings, 'ripple').findBestMatch(window.wordsTranslationsDB.Words['no'][document.langCode]).rating > 0.8)) {
                $('#' + name + '').attr('noink', '');
            }
            if (elementSettingsAnalyze(settings, 'fontThickness')) {
                if (window.getSafe(() => elementSettingsAnalyze(settings, 'fontThickness').findBestMatch(window.wordsTranslationsDB.Words['thick'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').css('font-weight', 'bold');
                } else {
                    $('#' + name + '').css('font-weight', elementSettingsAnalyze(settings, 'fontThickness'));
                }
            }
            if (elementSettingsAnalyze(settings, 'fontSize')) {
                $('#' + name + '').css('font-size', window.convertLengthCSS(elementSettingsAnalyze(settings, 'fontSize')));
            }
            if ($('#' + elementSettingsAnalyze(settings, 'container') + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (elementSettingsAnalyze(settings, 'position')) {
                $('#' + name + '').css('position', elementSettingsAnalyze(settings, 'position'));
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            if (elementSettingsAnalyze(settings, 'distanceFromBottom')) {
                window.setDistance(name, 'bottom', elementSettingsAnalyze(settings, 'distanceFromBottom'));
            }
            if (elementSettingsAnalyze(settings, 'distanceFromTop')) {
                window.setDistance(name, 'top', elementSettingsAnalyze(settings, 'distanceFromTop'));
            }
            if (elementSettingsAnalyze(settings, 'distanceFromLeft')) {
                window.setDistance(name, 'left', elementSettingsAnalyze(settings, 'distanceFromLeft'));
            }
            if (elementSettingsAnalyze(settings, 'distanceFromRight')) {
                window.setDistance(name, 'right', elementSettingsAnalyze(settings, 'distanceFromRight'));
            }
            if (elementSettingsAnalyze(settings, 'commands')) {
                window.execute(name, elementSettingsAnalyze(settings, 'commands'));
            }
            if (elementSettingsAnalyze(settings, 'width')) {
                window.setDimension(name, 'width', elementSettingsAnalyze(settings, 'width'));
            }
            if (elementSettingsAnalyze(settings, 'length')) {
                window.setDimension(name, 'length', elementSettingsAnalyze(settings, 'length'));
            }
            if (elementSettingsAnalyze(settings, 'background')) {
                window.setBG(name, elementSettingsAnalyze(settings, 'background'));
            }
            if (elementSettingsAnalyze(settings, 'animation')) {
                window.setAnimation(name, elementSettingsAnalyze(settings, 'animation'));
            }
            if (elementSettingsAnalyze(settings, 'transparency')) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(settings, 'transparency') + '%)');
            }
        });
    }
    var FABTranslations = window.wordsTranslationsDB.Words['FAB'][document.langCode];
    for (const i of FABTranslations) {
    $.fn[i] = function (settings) {
        FABFn(this, settings);
    };
}
});
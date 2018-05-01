/*!
 * Textbox
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function textboxFn(settings) {
        settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
        var name = elementSettingsAnalyze(settings, 'name');
        var tagName = 'paper-input';
        if (elementSettingsAnalyze(settings, 'attributes')) {
            var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations("and")} `, 'gmi'));
            for (i = 0; i < propertiesArray.length; i++) {
                if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['multiline'][document.langCode]).rating > 0.8) {
                    tagName = 'paper-textarea';
                }
            }
        }
        var out = '<' + tagName + ' ';
        if (elementSettingsAnalyze(settings, 'title')) {
            out += 'label="' + elementSettingsAnalyze(settings, 'title') + '" ';
        }
        if (window.getSafe(() => elementSettingsAnalyze(settings, 'inputType').findBestMatch(window.wordsTranslationsDB.Words['password'][document.langCode]).rating > 0.8)) {
            out += 'type="password" ';
        } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'inputType').findBestMatch(window.wordsTranslationsDB.Words['number'][document.langCode]).rating > 0.8)) {
            out += 'type="number" ';
        }
        if (elementSettingsAnalyze(settings, 'requirement')) {
            out += 'auto-validate allowed-pattern="' + elementSettingsAnalyze(settings, 'requirement') + '"';
        }
        if (elementSettingsAnalyze(settings, 'max')) {
            out += 'maxlength="' + elementSettingsAnalyze(settings, 'max') + '" ';
        }
        if (elementSettingsAnalyze(settings, 'min')) {
            out += 'minlength="' + elementSettingsAnalyze(settings, 'min') + '" ';
        }
        if (elementSettingsAnalyze(settings, 'attributes')) {
            var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations("and")} `, 'gmi'));
            for (i = 0; i < propertiesArray.length; i++) {
                if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
                    out += 'disabled ';
                } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['withCounter'][document.langCode]).rating > 0.8) {
                    out += 'char-counter ';
                }
            }
        }
        out += 'id="' + name + '">';
        if (elementSettingsAnalyze(settings, 'prefix')) {
            var prefix = elementSettingsAnalyze(settings, 'prefix').split(' &amp;&amp;&amp; ');
            for (i = 0; i < prefix.length; i++) {
                out += '<div slot="prefix">' + prefix[i] + '</div>';
            }
        }
        if (elementSettingsAnalyze(settings, 'suffix')) {
            var suffix = elementSettingsAnalyze(settings, 'suffix').split(' &amp;&amp;&amp; ');
            for (i = 0; i < suffix.length; i++) {
                out += '<div slot="suffix">' + suffix[i] + '</div>';
            }
        }
        out += '</' + tagName + '>';
        window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
        if (window.getSafe(() => elementSettingsAnalyze(settings, 'inputType').findBestMatch(window.wordsTranslationsDB.Words['date'][document.langCode]).rating > 0.8)) {
            if (document.langID == 0 || document.langID == 1) {
                $(`#${name}`).attr('data-lang', 'en');
            } else if (document.langID == 2) {
                $(`#${name}`).attr('data-lang', 'fr');
            } else if (document.langID == 3 || document.langID == 4) {
                $(`#${name}`).attr('data-lang', 'ar');
            }
            $(`#${name}`).attr('data-modal', 'true');
            $(`#${name}`).attr('data-large-mode', 'true');
            $(`#${name}`).attr('data-translate-mode', 'true');
            $(`#${name}`).dateDropper();
        } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'inputType').findBestMatch(window.wordsTranslationsDB.Words['time'][document.langCode]).rating > 0.8)) {
            $(`#${name}`).timeDropper();
        }
        if (elementSettingsAnalyze(settings, 'fontColor')) {
            window.setFontColour(name, elementSettingsAnalyze(settings, 'fontColor'));
        }
        if (elementSettingsAnalyze(settings, 'fontStyle')) {
            $(`#${name}`).css('font-style', elementSettingsAnalyze(settings, 'fontStyle'));
        }
        if (elementSettingsAnalyze(settings, 'fontThickness')) {
            if (window.getSafe(() => elementSettingsAnalyze(settings, 'fontThickness').findBestMatch(window.wordsTranslationsDB.Words['thick'][document.langCode]).rating > 0.8)) {
                $(`#${name}`).css('font-weight', 'bold');
            } else {
                $(`#${name}`).css('font-weight', elementSettingsAnalyze(settings, 'fontThickness'));
            }
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
        window.propSet(name, settings);
    }
    var writingZoneTranslations = window.wordsTranslationsDB.Words['writingZone'][document.langCode];
    for (const i of writingZoneTranslations) {
        window.jsteComponentsFnStore[i] = function (settings) {
            textboxFn(settings);
        };
    }
});
/*!
 * Textbox
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-21
 */
$(function () {
    $.fn[window.writingZoneTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.inputTypeTranslations[document.lang]]: null,
            [window.maxTranslations[document.lang]]: null,
            [window.minTranslations[document.lang]]: null,
            [window.requirementTranslations[document.lang]]: null,
            [window.prefixTranslations[document.lang]]: null,
            [window.suffixTranslations[document.lang]]: null,
            [window.disabledTranslations[document.lang]]: null,
            [window.rippleTranslations[document.lang]]: null,
            [window.fontColorTranslations[document.lang]]: null,
            [window.fontSizeTranslations[document.lang]]: null,
            [window.nameTranslations[document.lang]]: null,
            [window.widthTranslations[document.lang]]: null,
            [window.lengthTranslations[document.lang]]: null,
            [window.fontThicknessTranslations[document.lang]]: null,
            [window.fontStyleTranslations[document.lang]]: null,
            [window.animationTranslations[document.lang]]: null,
            [window.transparencyTranslations[document.lang]]: null,
            [window.distanceFromBottomTranslations[document.lang]]: null,
            [window.distanceFromTopTranslations[document.lang]]: null,
            [window.distanceFromLeftTranslations[document.lang]]: null,
            [window.distanceFromRightTranslations[document.lang]]: null,
            [window.positionTranslations[document.lang]]: null,
            [window.containerTranslations[document.lang]]: null,
            [window.backgroundTranslations[document.lang]]: null,
            [window.attributesTranslations[document.lang]]: null,
            [window.commandsTranslations[document.lang]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.lang]];
            var tagName = 'paper-input';
            if (settings[window.attributesTranslations[document.lang]]) {
                var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' ' + window.andTranslations[document.lang] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.multilineTranslations[document.lang]) {
                        tagName = 'paper-textarea';
                    }
                }
            }
            var out = '<' + tagName + ' ';
            if (settings[window.titleTranslations[document.lang]]) {
                out += 'label="' + settings[window.titleTranslations[document.lang]] + '" ';
            }
            if (settings[window.inputTypeTranslations[document.lang]] == window.passwordTranslations[document.lang]) {
                out += 'type="password" ';
            } else if (settings[window.inputTypeTranslations[document.lang]] == window.numberTranslations[document.lang]) {
                out += 'type="number" ';
            }
            if (settings[window.requirementTranslations[document.lang]]) {
                out += 'auto-validate allowed-pattern="' + settings[window.requirementTranslations[document.lang]] + '"';
            }
            if (settings[window.maxTranslations[document.lang]]) {
                out += 'maxlength="' + settings[window.maxTranslations[document.lang]] + '" ';
            }
            if (settings[window.minTranslations[document.lang]]) {
                out += 'minlength="' + settings[window.minTranslations[document.lang]] + '" ';
            }
            if (settings[window.attributesTranslations[document.lang]]) {
                var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' ' + window.andTranslations[document.lang] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.disabledTranslations[document.lang]) {
                        out += 'disabled ';
                    } else if (propertiesArray[i] == withCounterTranslations[document.lang]) {
                        out += 'char-counter ';
                    }
                }
            }
            out += 'id="' + name + '">';
            if (settings[window.prefixTranslations[document.lang]]) {
                var prefix = settings[window.prefixTranslations[document.lang]].split(' &amp;&amp;&amp; ');
                for (i = 0; i < prefix.length; i++) {
                    out += '<div slot="prefix">' + prefix[i] + '</div>';
                }
            }
            if (settings[window.suffixTranslations[document.lang]]) {
                var suffix = settings[window.suffixTranslations[document.lang]].split(' &amp;&amp;&amp; ');
                for (i = 0; i < suffix.length; i++) {
                    out += '<div slot="suffix">' + suffix[i] + '</div>';
                }
            }
            out += '</' + tagName + '>';
            window.appendComponent(settings[window.containerTranslations[document.lang]], out);
            if (settings[window.inputTypeTranslations[document.lang]] == window.dateTranslations[document.lang]) {
                if (document.lang == 0 || document.lang == 1) {
                    $('#' + name + '').attr('data-lang', 'en');
                } else if (document.lang == 2) {
                    $('#' + name + '').attr('data-lang', 'fr');
                } else if (document.lang == 3 || document.lang == 4) {
                    $('#' + name + '').attr('data-lang', 'ar');
                }
                $('#' + name + '').attr('data-modal', 'true');
                $('#' + name + '').attr('data-large-mode', 'true');
                $('#' + name + '').attr('data-translate-mode', 'true');
                $('#' + name + '').dateDropper();
            } else if (settings[window.inputTypeTranslations[document.lang]] == window.timeTranslations[document.lang]) {
                $('#' + name + '').timeDropper();
            }
            if (settings[window.fontColorTranslations[document.lang]]) {
                window.setFontColour(name, settings[window.fontColorTranslations[document.lang]]);
            }
            if (settings[window.fontStyleTranslations[document.lang]]) {
                $('#' + name + '').css('font-style', settings[window.fontStyleTranslations[document.lang]]);
            }
            if (settings[window.fontThicknessTranslations[document.lang]]) {
                if (settings[window.fontThicknessTranslations[document.lang]] == window.thickTranslations[document.lang]) {
                    $('#' + name + '').css('font-weight', 'bold');
                } else {
                    $('#' + name + '').css('font-weight', settings[window.fontThicknessTranslations[document.lang]]);
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
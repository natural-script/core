/*!
 * Textbox
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
 */
function textboxFn(el, settings) {
    el.each(function () {
        var name = settings[window.nameTranslations[document.langID]];
        var tagName = 'paper-input';
        if (settings[window.attributesTranslations[document.langID]]) {
            var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
            for (i = 0; i < propertiesArray.length; i++) {
                if (propertiesArray[i] == window.multilineTranslations[document.langID]) {
                    tagName = 'paper-textarea';
                }
            }
        }
        var out = '<' + tagName + ' ';
        if (settings[window.titleTranslations[document.langID]]) {
            out += 'label="' + settings[window.titleTranslations[document.langID]] + '" ';
        }
        if (settings[window.inputTypeTranslations[document.langID]] == window.passwordTranslations[document.langID]) {
            out += 'type="password" ';
        } else if (settings[window.inputTypeTranslations[document.langID]] == window.numberTranslations[document.langID]) {
            out += 'type="number" ';
        }
        if (settings[window.requirementTranslations[document.langID]]) {
            out += 'auto-validate allowed-pattern="' + settings[window.requirementTranslations[document.langID]] + '"';
        }
        if (settings[window.maxTranslations[document.langID]]) {
            out += 'maxlength="' + settings[window.maxTranslations[document.langID]] + '" ';
        }
        if (settings[window.minTranslations[document.langID]]) {
            out += 'minlength="' + settings[window.minTranslations[document.langID]] + '" ';
        }
        if (settings[window.attributesTranslations[document.langID]]) {
            var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
            for (i = 0; i < propertiesArray.length; i++) {
                if (propertiesArray[i] == window.disabledTranslations[document.langID]) {
                    out += 'disabled ';
                } else if (propertiesArray[i] == withCounterTranslations[document.langID]) {
                    out += 'char-counter ';
                }
            }
        }
        out += 'id="' + name + '">';
        if (settings[window.prefixTranslations[document.langID]]) {
            var prefix = settings[window.prefixTranslations[document.langID]].split(' &amp;&amp;&amp; ');
            for (i = 0; i < prefix.length; i++) {
                out += '<div slot="prefix">' + prefix[i] + '</div>';
            }
        }
        if (settings[window.suffixTranslations[document.langID]]) {
            var suffix = settings[window.suffixTranslations[document.langID]].split(' &amp;&amp;&amp; ');
            for (i = 0; i < suffix.length; i++) {
                out += '<div slot="suffix">' + suffix[i] + '</div>';
            }
        }
        out += '</' + tagName + '>';
        window.appendComponent(settings[window.containerTranslations[document.langID]], out);
        if (settings[window.inputTypeTranslations[document.langID]] == window.dateTranslations[document.langID]) {
            if (document.langID == 0 || document.langID == 1) {
                $('#' + name + '').attr('data-lang', 'en');
            } else if (document.langID == 2) {
                $('#' + name + '').attr('data-lang', 'fr');
            } else if (document.langID == 3 || document.langID == 4) {
                $('#' + name + '').attr('data-lang', 'ar');
            }
            $('#' + name + '').attr('data-modal', 'true');
            $('#' + name + '').attr('data-large-mode', 'true');
            $('#' + name + '').attr('data-translate-mode', 'true');
            $('#' + name + '').dateDropper();
        } else if (settings[window.inputTypeTranslations[document.langID]] == window.timeTranslations[document.langID]) {
            $('#' + name + '').timeDropper();
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
        if (settings[window.positionTranslations[document.langID]]) {
            $('#' + name + '').css('position', settings[window.positionTranslations[document.langID]]);
        } else {
            $('#' + name + '').css('position', 'relative');
        }
        window.propSet(name, settings);
    });
}
$(function () {
    $.fn[window.writingZoneTranslations[document.langID]] = function (settings) {
        textboxFn(this, settings);
    };
});
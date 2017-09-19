/*!
 * Slider
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.sliderTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.titleTranslations[document.lang]]: null,
            [window.maxTranslations[document.lang]]: null,
            [window.minTranslations[document.lang]]: null,
            [window.stepTranslations[document.lang]]: null,
            [window.progressTranslations[document.lang]]: null,
            prevalue: null,
            [window.valueBoxTranslations[document.lang]]: null,
            [window.disabledTranslations[document.lang]]: null,
            [window.fontColorTranslations[document.lang]]: null,
            [window.fontSizeTranslations[document.lang]]: null,
            [window.nameTranslations[document.lang]]: null,
            [window.widthTranslations[document.lang]]: null,
            [window.lengthTranslations[document.lang]]: null,
            [window.thicknessTranslations[document.lang]]: null,
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
            if (settings[window.titleTranslations[document.lang]]) {
                var out = '<div>' + settings[window.titleTranslations[document.lang]] + '</div><br><paper-slider ';
            } else {
                var out = '<paper-slider '
            }
            if (settings[window.maxTranslations[document.lang]]) {
                out += 'max="' + settings[window.maxTranslations[document.lang]] + '" ';
            }
            if (settings[window.minTranslations[document.lang]]) {
                out += 'min="' + settings[window.minTranslations[document.lang]] + '" ';
            }
            if (settings[window.progressTranslations[document.lang]]) {
                out += 'secondary-progress="' + settings[window.progressTranslations[document.lang]] + '" ';
            }
            if (settings[window.stepTranslations[document.lang]]) {
                out += 'step="' + settings[window.stepTranslations[document.lang]] + '" ';
            }
            if (settings[window.attributesTranslations[document.lang]]) {
                var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' ' + window.andTranslations[document.lang] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.disabledTranslations[document.lang]) {
                        out += 'disabled ';
                    } else if (propertiesArray[i] == window.withPinTranslations[document.lang]) {
                        out += 'pin ';
                    } else if (propertiesArray[i] == window.valueBoxTranslations[document.lang]) {
                        out += 'editable ';
                    }
                }
            }
            out += 'id="' + name + '">';
            out += '</paper-slider>'
            if (settings[window.containerTranslations[document.lang]]) {
                if ($('#' + settings[window.containerTranslations[document.lang]] + '').hasClass('modal')) {
                    $('#' + settings[window.containerTranslations[document.lang]] + ' > .modal-content').append(out);
                } else {
                    $('#' + settings[window.containerTranslations[document.lang]] + '').append(out);
                }
            } else {
                $('contents').append(out);
            }
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
                    } else if (propertiesArray[i] == window.rippleTranslations[document.lang]) {
                        $('#' + name + '').removeAttr('noink');
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
            if (settings[window.transparencyTranslations[document.lang]]) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.lang]] + '%)');
            }
        });
    };
});
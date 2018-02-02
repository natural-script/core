/*!
 * FAB
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.FABTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.descriptionTranslations[document.langID]]: null,
            [window.iconTranslations[document.langID]]: null,
            [window.textTranslations[document.langID]]: null,
            [window.rippleTranslations[document.langID]]: null,
            mini: null,
            [window.disabledTranslations[document.langID]]: null,
            [window.rippleTranslations[document.langID]]: null,
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
            [window.attributesTranslations[document.langID]]: null,
            [window.commandsTranslations[document.langID]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var out = '<paper-fab ';
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (settings.mini == window.yesTranslations[document.langID]) {
                        out += 'mini ';
                    } else if (propertiesArray[i] == window.disabledTranslations[document.langID]) {
                        out += 'disabled ';
                    }
                }
            }
            if (settings[window.rippleTranslations[document.langID]] == window.noTranslations[document.langID]) {
                out += 'noink ';
            }
            if (settings[window.textTranslations[document.langID]]) {
                out += 'label="' + settings[window.textTranslations[document.langID]] + '" ';
            }
            if (settings[window.iconTranslations[document.langID]]) {
                out += 'icon="' + settings[window.iconTranslations[document.langID]] + '" ';
            }
            if (settings[window.descriptionTranslations[document.langID]]) {
                out += 'title="' + settings[window.descriptionTranslations[document.langID]] + '" ';
            }
            out += 'id="' + name + '"></paper-fab>';
            if (settings[window.containerTranslations[document.langID]]) {
                if ($('#' + settings[window.containerTranslations[document.langID]] + '').hasClass('modal')) {
                    $('#' + settings[window.containerTranslations[document.langID]] + ' > .modal-content').append(out);
                } else {
                    $('#' + settings[window.containerTranslations[document.langID]] + '').append(out);
                }
            } else {
                $('contents').append(out);
            }
            if (settings[window.fontColorTranslations[document.langID]]) {
                window.setFontColour(name, settings[window.fontColorTranslations[document.langID]]);
            }
            if (settings[window.fontStyleTranslations[document.langID]]) {
                $('#' + name + '').css('font-style', settings[window.fontStyleTranslations[document.langID]]);
            }
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.disabledTranslations[document.langID]) {
                        $('#' + name + '').attr('disabled', '');
                    }
                }
            }
            if (settings[window.rippleTranslations[document.langID]] == window.noTranslations[document.langID]) {
                $('#' + name + '').attr('noink', '');
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
            if (settings[window.distanceFromBottomTranslations[document.langID]]) {
                window.setDistance(name, 'bottom', settings[window.distanceFromBottomTranslations[document.langID]]);
            }
            if (settings[window.distanceFromTopTranslations[document.langID]]) {
                window.setDistance(name, 'top', settings[window.distanceFromTopTranslations[document.langID]]);
            }
            if (settings[window.distanceFromLeftTranslations[document.langID]]) {
                window.setDistance(name, 'left', settings[window.distanceFromLeftTranslations[document.langID]]);
            }
            if (settings[window.distanceFromRightTranslations[document.langID]]) {
                window.setDistance(name, 'right', settings[window.distanceFromRightTranslations[document.langID]]);
            }
            if (settings[window.commandsTranslations[document.langID]]) {
                window.execute(name, settings[window.commandsTranslations[document.langID]]);
            }
            if (settings[window.widthTranslations[document.langID]]) {
                window.setDimension(name, 'width', settings[window.widthTranslations[document.langID]]);
            }
            if (settings[window.lengthTranslations[document.langID]]) {
                window.setDimension(name, 'length', settings[window.lengthTranslations[document.langID]]);
            }
            if (settings[window.backgroundTranslations[document.langID]]) {
                window.setBG(name, settings[window.backgroundTranslations[document.langID]]);
            }
            if (settings[window.animationTranslations[document.langID]]) {
                window.setAnimation(name, settings[window.animationTranslations[document.langID]]);
            }
            if (settings[window.transparencyTranslations[document.langID]]) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.langID]] + '%)');
            }
        });
    };
});
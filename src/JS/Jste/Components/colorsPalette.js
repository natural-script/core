/*!
 * Colors Palette
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $(function () {
        var uniqueID = document.uniqueID();
        document[uniqueID + 'checker'] = setInterval(function () {
            if (document.lang == 0 || document.lang == 1 || document.lang == 2 || document.lang == 3 || document.lang == 4 || document.lang == 5) {
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //------------------------------------------------------------Colors Palette------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[window.colorsPaletteTranslations[document.lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [window.nameTranslations[document.lang]]: null,
                        [window.widthTranslations[document.lang]]: null,
                        [window.lengthTranslations[document.lang]]: null,
                        [window.animationTranslations[document.lang]]: null,
                        [window.backgroundTranslations[document.lang]]: null,
                        [window.transparencyTranslations[document.lang]]: null,
                        [window.distanceFromBottomTranslations[document.lang]]: null,
                        [window.distanceFromTopTranslations[document.lang]]: null,
                        [window.distanceFromLeftTranslations[document.lang]]: null,
                        [window.distanceFromRightTranslations[document.lang]]: null,
                        [window.positionTranslations[document.lang]]: null,
                        [window.containerTranslations[document.lang]]: null,
                        [window.commandsTranslations[document.lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[window.nameTranslations[document.lang]];
                        var out = '<paper-swatch-picker id="' + name + '" color="{{selectedColor}}"></paper-swatch-picker>';
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
                        if (settings[window.backgroundTranslations[document.lang]]) {
                            window.setBG(name, settings[window.backgroundTranslations[document.lang]]);
                        }
                        if (settings[window.widthTranslations[document.lang]]) {
                            window.setDimension(name, 'width', settings[window.widthTranslations[document.lang]]);
                        }
                        if (settings[window.lengthTranslations[document.lang]]) {
                            window.setDimension(name, 'length', settings[window.lengthTranslations[document.lang]]);
                        }
                        if (settings[window.animationTranslations[document.lang]]) {
                            window.setAnimation(name, settings[window.animationTranslations[document.lang]]);
                        }
                        if (settings[window.transparencyTranslations[document.lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.lang]] + '%)');
                        }
                    });
                };

                clearInterval(document[uniqueID + 'checker']);
            }
        }, 1);
    });
}(jQuery));
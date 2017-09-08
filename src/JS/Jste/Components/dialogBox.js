/*!
 * Dialog Box
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
                //----------------------------------------------------------------Dialog Box------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[window.dialogBoxTranslations[document.lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [window.titleTranslations[document.lang]]: null,
                        [window.acceptanceButtonTranslations[document.lang]]: null,
                        [window.cancellationButtonTranslations[document.lang]]: null,
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
                        [window.commandsTranslations[document.lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[window.nameTranslations[document.lang]];
                        var out;
                        if (settings[window.cancellationButtonTranslations[document.lang]] || settings[window.acceptanceButtonTranslations[document.lang]]) {
                            out = '<div id="' + name + '" class="modal modal-fixed-footer">';
                        } else {
                            out = '<div id="' + name + '" class="modal">';
                        }
                        if (settings[window.titleTranslations[document.lang]]) {
                            out += '<div class="modal-content" elementTitle="' + settings[window.titleTranslations[document.lang]] + '"><h4>' + settings[window.titleTranslations[document.lang]] + '</h4></div>';
                        } else {
                            out += '<div class="modal-content"></div>';
                        }
                        if (settings[window.cancellationButtonTranslations[document.lang]] || settings[window.acceptanceButtonTranslations[document.lang]]) {
                            out += '<div class="modal-footer">';
                            if (settings[window.cancellationButtonTranslations[document.lang]]) {
                                out += '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">' + settings[window.cancellationButtonTranslations[document.lang]] + '</a>';
                            }
                            if (settings[window.acceptanceButtonTranslations[document.lang]]) {
                                out += '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">' + settings[window.acceptanceButtonTranslations[document.lang]] + '</a>';
                            }
                            out += '</div>';
                        }
                        out += '</div>';
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
                        if (settings[window.emitterTranslations[document.lang]]) {
                            $('#' + settings[window.emitterTranslations[document.lang]] + '').attr('onclick', settings[window.nameTranslations[document.lang]] + '.open()');
                        }
                        if (settings[window.backgroundTranslations[document.lang]]) {
                            window.setBG(name, settings[window.backgroundTranslations[document.lang]]);
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
                        if (settings[window.distanceFromBottomTranslations[document.lang]]) {
                            window.setDistance(name, 'bottom', settings[window.distanceFromBottomTranslations[document.lang]]);
                        }
                        if (settings[window.distanceFromTopTranslations[document.lang]]) {
                            window.setDistance(name, 'top', settings[window.distanceFromTopTranslations[document.lang]]);
                        }
                        if (settings[window.distanceFromLeftTranslations[document.lang]]) {
                            window.setDistance(name, 'left', settings[window.distanceFromLeftTranslations[document.lang]]);
                        }
                        if (settings[window.distanceFromRightTranslations[document.lang]]) {
                            window.setDistance(name, 'right', settings[window.distanceFromRightTranslations[document.lang]]);
                        }
                        if (settings[window.commandsTranslations[document.lang]]) {
                            window.execute(name, settings[window.commandsTranslations[document.lang]]);
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
                        $('#' + name + '').modal();
                        $('#' + name + '').css('position', 'fixed')
                    });
                };

                clearInterval(document[uniqueID + 'checker']);
            }
        }, 1);
    });
}(jQuery));
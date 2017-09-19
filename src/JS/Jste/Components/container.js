/*!
 * Container
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-11
 */
$(function () {
    $.fn[window.containerTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
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
            [window.attributesTranslations[document.lang]]: null,
            [window.backgroundTranslations[document.lang]]: null,
            [window.withoutShadowTranslations[document.lang]]: null,
            [window.commandsTranslations[document.lang]]: null
        }, options);
        return this.each(function () {
            var elevation = 2;
            var name = settings[window.nameTranslations[document.lang]];
            if (settings[window.attributesTranslations[document.lang]]) {
                var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' ' + window.andTranslations[document.lang] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.withoutShadowTranslations[document.lang]) {
                        elevation = 0;
                    }
                }
            }
            var out = '<paper-material elevation="' + elevation + '" id="' + name + '" class="' + name + '"></paper-material>'
            if (settings[window.containerTranslations[document.lang]]) {
                if ($('#' + settings[window.containerTranslations[document.lang]] + '').hasClass('modal')) {
                    $('#' + settings[window.containerTranslations[document.lang]] + ' > .modal-content').append(out);
                } else {
                    $('#' + settings[window.containerTranslations[document.lang]] + '').append(out);
                }
            } else {
                $('contents').append(out);
            }
            if (settings[window.attributesTranslations[document.lang]]) {
                var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' ' + window.andTranslations[document.lang] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.gridTranslations[document.lang]) {
                        $('#' + name + '').addClass('row');
                        $('#' + name + '').css('text-align', 'center');
                    }
                }
            }
            if (settings[window.fontColorTranslations[document.lang]]) {
                window.setFontColour(name, settings[window.fontColorTranslations[document.lang]]);
            }
            if (settings[window.fontStyleTranslations[document.lang]]) {
                $('#' + name + '').css('font-style', settings[window.fontStyleTranslations[document.lang]]);
            }
            if (settings[window.shapeTranslations[document.lang]]) {
                if (settings[window.shapeTranslations[document.lang]] == window.triangleTranslations[document.lang]) {
                    $('#' + name + '').addClass('triangle');
                } else if (settings[window.shapeTranslations[document.lang]] == window.trapezoidTranslations[document.lang]) {
                    $('#' + name + '').addClass('trapezoid');
                } else if (settings[window.shapeTranslations[document.lang]] == window.parallelogramTranslations[document.lang]) {
                    $('#' + name + '').addClass('parallelogram');
                } else if (settings[window.shapeTranslations[document.lang]] == window.rhombusTranslations[document.lang]) {
                    $('#' + name + '').addClass('rhombus');
                } else if (settings[window.shapeTranslations[document.lang]] == window.pentagonTranslations[document.lang]) {
                    $('#' + name + '').addClass('pentagon');
                } else if (settings[window.shapeTranslations[document.lang]] == window.hexagonTranslations[document.lang]) {
                    $('#' + name + '').addClass('hexagon');
                } else if (settings[window.shapeTranslations[document.lang]] == window.heptagonTranslations[document.lang]) {
                    $('#' + name + '').addClass('heptagon');
                } else if (settings[window.shapeTranslations[document.lang]] == window.octagonTranslations[document.lang]) {
                    $('#' + name + '').addClass('octagon');
                } else if (settings[window.shapeTranslations[document.lang]] == window.decagonTranslations[document.lang]) {
                    $('#' + name + '').addClass('decagon');
                } else if (settings[window.shapeTranslations[document.lang]] == window.circleTranslations[document.lang]) {
                    $('#' + name + '').addClass('circle');
                } else if (settings[window.shapeTranslations[document.lang]] == window.ellipseTranslations[document.lang]) {
                    $('#' + name + '').addClass('ellipse');
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
                $('#' + name + '').css('position', 'absolute');
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
            if (settings[window.attributesTranslations[document.lang]]) {
                if (settings[window.attributesTranslations[document.lang]].indexOf(window.parallaxTranslations[document.lang]) > -1) {
                    if (settings[window.backgroundTranslations[document.lang]]) {
                        window.requestBLOB(settings[window.backgroundTranslations[document.lang]], encodeURIComponent(settings[window.backgroundTranslations[document.lang]]).replace(/\./g, '%2E'), function (BLOBURL) {
                            $('#' + name + '').css({'background': 'url(' + BLOBURL + ') no-repeat', 'background-size': 'cover'});
                            if (window.deviceForm == 'desktop') {
                                $('#' + name + '').addClass('parallax');
                            }
                            setTimeout(function () {
                                window.URL.revokeObjectURL(BLOBURL);
                            }, 10000);
                        });
                    }
                } else {
                    if (settings[window.backgroundTranslations[document.lang]]) {
                        window.setBG(name, settings[window.backgroundTranslations[document.lang]]);
                    }
                }
            } else {
                if (settings[window.backgroundTranslations[document.lang]]) {
                    window.setBG(name, settings[window.backgroundTranslations[document.lang]]);
                }
            }
            if (settings[window.animationTranslations[document.lang]]) {
                window.setAnimation(name, settings[window.animationTranslations[document.lang]]);
            }
            if (settings[window.transparencyTranslations[document.lang]]) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.lang]] + '%)');
            }
        });
    };
});
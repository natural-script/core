/*!
 * Container
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
 */
$(function () {
    function containerFn(el, settings) {
        el.each(function () {
            var elevation = 2;
            var name = settings[window.nameTranslations[document.langID]];
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.withoutShadowTranslations[document.langID]) {
                        elevation = 0;
                    }
                }
            }
            var out = '<paper-material elevation="' + elevation + '" id="' + name + '" class="' + name + '"></paper-material>';
            window.appendComponent(settings[window.containerTranslations[document.langID]], out);
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.gridTranslations[document.langID]) {
                        $('#' + name + '').addClass('row');
                        $('#' + name + '').css('text-align', 'center');
                    }
                }
            }
            if (settings[window.fontColorTranslations[document.langID]]) {
                window.setFontColour(name, settings[window.fontColorTranslations[document.langID]]);
            }
            if (settings[window.fontStyleTranslations[document.langID]]) {
                $('#' + name + '').css('font-style', settings[window.fontStyleTranslations[document.langID]]);
            }
            if (settings[window.shapeTranslations[document.langID]]) {
                if (settings[window.shapeTranslations[document.langID]] == window.triangleTranslations[document.langID]) {
                    $('#' + name + '').addClass('triangle');
                } else if (settings[window.shapeTranslations[document.langID]] == window.trapezoidTranslations[document.langID]) {
                    $('#' + name + '').addClass('trapezoid');
                } else if (settings[window.shapeTranslations[document.langID]] == window.parallelogramTranslations[document.langID]) {
                    $('#' + name + '').addClass('parallelogram');
                } else if (settings[window.shapeTranslations[document.langID]] == window.rhombusTranslations[document.langID]) {
                    $('#' + name + '').addClass('rhombus');
                } else if (settings[window.shapeTranslations[document.langID]] == window.pentagonTranslations[document.langID]) {
                    $('#' + name + '').addClass('pentagon');
                } else if (settings[window.shapeTranslations[document.langID]] == window.hexagonTranslations[document.langID]) {
                    $('#' + name + '').addClass('hexagon');
                } else if (settings[window.shapeTranslations[document.langID]] == window.heptagonTranslations[document.langID]) {
                    $('#' + name + '').addClass('heptagon');
                } else if (settings[window.shapeTranslations[document.langID]] == window.octagonTranslations[document.langID]) {
                    $('#' + name + '').addClass('octagon');
                } else if (settings[window.shapeTranslations[document.langID]] == window.decagonTranslations[document.langID]) {
                    $('#' + name + '').addClass('decagon');
                } else if (settings[window.shapeTranslations[document.langID]] == window.circleTranslations[document.langID]) {
                    $('#' + name + '').addClass('circle');
                } else if (settings[window.shapeTranslations[document.langID]] == window.ellipseTranslations[document.langID]) {
                    $('#' + name + '').addClass('ellipse');
                }
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
                $('#' + name + '').css('position', 'absolute');
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
            if (settings[window.attributesTranslations[document.langID]]) {
                if (settings[window.attributesTranslations[document.langID]].indexOf(window.parallaxTranslations[document.langID]) > -1) {
                    if (settings[window.backgroundTranslations[document.langID]]) {
                        window.requestBLOB(settings[window.backgroundTranslations[document.langID]], encodeURIComponent(settings[window.backgroundTranslations[document.langID]]).replace(/\./g, '%2E'), function (BLOBURL) {
                            $('#' + name + '').css({
                                'background': 'url(' + BLOBURL + ') no-repeat',
                                'background-size': 'cover'
                            });
                            if (window.deviceForm == 'desktop') {
                                $('#' + name + '').addClass('parallax');
                            }
                            setTimeout(function () {
                                window.URL.revokeObjectURL(BLOBURL);
                            }, 10000);
                        });
                    }
                } else {
                    if (settings[window.backgroundTranslations[document.langID]]) {
                        window.setBG(name, settings[window.backgroundTranslations[document.langID]]);
                    }
                }
            } else {
                if (settings[window.backgroundTranslations[document.langID]]) {
                    window.setBG(name, settings[window.backgroundTranslations[document.langID]]);
                }
            }
            if (settings[window.animationTranslations[document.langID]]) {
                window.setAnimation(name, settings[window.animationTranslations[document.langID]]);
            }
            if (settings[window.transparencyTranslations[document.langID]]) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.langID]] + '%)');
            }
        });
    }
    $.fn[window.containerTranslations[document.langID]] = function (settings) {
        containerFn(this, settings);
    };
});
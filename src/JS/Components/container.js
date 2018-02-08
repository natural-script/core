/*!
 * Container
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function containerFn(el, settings) {
        el.each(function () {
            var elevation = 2;
            var name = elementSettingsAnalyze(settings, 'name');
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['withoutShadow'][document.langCode]).rating > 0.8) {
                        elevation = 0;
                    }
                }
            }
            var out = '<paper-material elevation="' + elevation + '" id="' + name + '" class="' + name + '"></paper-material>';
            window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['grid'][document.langCode]).rating > 0.8) {
                        $('#' + name + '').addClass('row');
                        $('#' + name + '').css('text-align', 'center');
                    }
                }
            }
            if (elementSettingsAnalyze(settings, 'fontColor')) {
                window.setFontColour(name, elementSettingsAnalyze(settings, 'fontColor'));
            }
            if (elementSettingsAnalyze(settings, 'fontStyle')) {
                $('#' + name + '').css('font-style', elementSettingsAnalyze(settings, 'fontStyle'));
            }
            if (elementSettingsAnalyze(settings, 'shape')) {
                if (window.getSafe(() => elementSettingsAnalyze(settings, 'shape').findBestMatch(window.wordsTranslationsDB.Words['triangle'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').addClass('triangle');
                } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'shape').findBestMatch(window.wordsTranslationsDB.Words['trapezoid'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').addClass('trapezoid');
                } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'shape').findBestMatch(window.wordsTranslationsDB.Words['parallelogram'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').addClass('parallelogram');
                } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'shape').findBestMatch(window.wordsTranslationsDB.Words['rhombus'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').addClass('rhombus');
                } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'shape').findBestMatch(window.wordsTranslationsDB.Words['pentagon'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').addClass('pentagon');
                } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'shape').findBestMatch(window.wordsTranslationsDB.Words['hexagon'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').addClass('hexagon');
                } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'shape').findBestMatch(window.wordsTranslationsDB.Words['heptagon'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').addClass('heptagon');
                } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'shape').findBestMatch(window.wordsTranslationsDB.Words['octagon'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').addClass('octagon');
                } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'shape').findBestMatch(window.wordsTranslationsDB.Words['decagon'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').addClass('decagon');
                } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'shape').findBestMatch(window.wordsTranslationsDB.Words['circle'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').addClass('circle');
                } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'shape').findBestMatch(window.wordsTranslationsDB.Words['ellipse'][document.langCode]).rating > 0.8)) {
                    $('#' + name + '').addClass('ellipse');
                }
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
                $('#' + name + '').css('position', 'absolute');
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
            if (elementSettingsAnalyze(settings, 'attributes')) {
                if (elementSettingsAnalyze(settings, 'attributes').indexOf(window.parallaxTranslations[document.langID]) > -1) {
                    if (elementSettingsAnalyze(settings, 'background')) {
                        window.requestBLOB(elementSettingsAnalyze(settings, 'background'), encodeURIComponent(elementSettingsAnalyze(settings, 'background')).replace(/\./g, '%2E'), function (BLOBURL) {
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
                    if (elementSettingsAnalyze(settings, 'background')) {
                        window.setBG(name, elementSettingsAnalyze(settings, 'background'));
                    }
                }
            } else {
                if (elementSettingsAnalyze(settings, 'background')) {
                    window.setBG(name, elementSettingsAnalyze(settings, 'background'));
                }
            }
            if (elementSettingsAnalyze(settings, 'animation')) {
                window.setAnimation(name, elementSettingsAnalyze(settings, 'animation'));
            }
            if (elementSettingsAnalyze(settings, 'transparency')) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(settings, 'transparency') + '%)');
            }
        });
    }
    var containerTranslations = window.wordsTranslationsDB.Words['container'][document.langCode];
    for (var i = 0; i < containerTranslations.length; i++) {
        $.fn[containerTranslations[i]] = function (settings) {
            containerFn(this, settings);
        };
    }
});
/*!
 * Slideshow
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function sliderFn(el, settings) {
        el.each(function () {
            var name = elementSettingsAnalyze(settings, 'name');
            var autoplay = false;
            var out = '<div id="' + name + '" class="owl-carousel owl-theme"></div>';
            window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(' ' + getTranslations("and") + ' ', 'gmi'));
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['autoplay'][document.langCode]).rating > 0.8) {
                        autoplay = true;
                    }
                }
            }
            jQuery(document).ready(function ($) {
                $('#' + name + '').owlCarousel({
                    animateOut: 'slideOutDown',
                    animateIn: 'flipInX',
                    items: 1,
                    margin: 30,
                    loop: true,
                    stagePadding: 30,
                    smartSpeed: 450,
                    autoHeight: true,
                    rtl: document.isRTL,
                    autoplay: autoplay,
                    autoplayHoverPause: true,
                    URLhashListener: true,
                    autoplayTimeout: 5000
                });
            });
            if (elementSettingsAnalyze(settings, 'position')) {
                $('#' + name + '').css('position', elementSettingsAnalyze(settings, 'position'));
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
        });
    }
    var slideShowTranslations = window.wordsTranslationsDB.Words['slideShow'][document.langCode];
    for (var i = 0; i < slideShowTranslations.length; i++) {
        $.fn[slideShowTranslations[i]] = function (settings) {
            sliderFn(this, settings);
        };
    }
});
/*!
 * Slideshow
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
 */
$(function () {
    function sliderFn(el, settings) {
        el.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var autoplay = false;
            var out = '<div id="' + name + '" class="owl-carousel owl-theme"></div>';
            window.appendComponent(settings[window.containerTranslations[document.langID]], out);
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.autoplayTranslations[document.langID]) {
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
            if (settings[window.positionTranslations[document.langID]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.langID]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
        });
    }
    $.fn[window.slideShowTranslations[document.langID]] = function (settings) {
        sliderFn(this, settings);
    };
});
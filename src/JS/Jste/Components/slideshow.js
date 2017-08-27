$(function () {
    $(function () {
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
        //-----------------------------------------------------------------ِSlideshow------------------------------------------------------------------------------------------------------------------------------------------//
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
        $.fn[window.slideShowTranslations[document.lang]] = function (options) {
            // Establish our default settings
            var settings = $.extend({
                [window.autoplayTranslations[document.lang]]: null,
                [window.nameTranslations[document.lang]]: null,
                [window.widthTranslations[document.lang]]: null,
                [window.lengthTranslations[document.lang]]: null,
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
                var autoplay = false;
                var out = '<div id="' + name + '" class="owl-carousel owl-theme"></div>';
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
                    var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' &amp;&amp;&amp; ');
                    for (i = 0; i < propertiesArray.length; i++) {
                        if (propertiesArray[i] == window.autoplayTranslations[document.lang]) {
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
                if (settings[window.backgroundTranslations[document.lang]]) {
                    window.setBG(name, settings[window.backgroundTranslations[document.lang]]);
                }
                if (settings[window.titleTranslations[document.lang]]) {
                    $('#' + name + '').attr('alt', settings[window.titleTranslations[document.lang]]);
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
    });
}(jQuery));
/*!
 * Slideshow Item
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.slideShowItemTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.slideShowTranslations[document.lang]]: null,
            [window.typeTranslations[document.lang]]: window.imageTranslations[document.lang],
            [window.sourceTranslations[document.lang]]: null,
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
            [window.commandsTranslations[document.lang]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.lang]];
            var source = settings[window.sourceTranslations[document.lang]];
            if (settings[window.typeTranslations[document.lang]] == window.imageTranslations[document.lang]) {
                var out = '<div class="owl-item" data-hash="' + name + '"><img src="' + source + '"></img></div>';
            } else if (settings[window.typeTranslations[document.lang]] == window.videoTranslations[document.lang]) {
                var out = '<div class="item-video" data-hash="' + name + '"><a class="owl-video" href="' + source + '"></a></div>'
            }
            $('#' + settings[window.slideShowTranslations[document.lang]] + '').append(out);
            if (settings[window.positionTranslations[document.lang]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.lang]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
            if (settings[window.titleTranslations[document.lang]]) {
                $('#' + name + '').attr('alt', settings[window.titleTranslations[document.lang]]);
            }
        });
    };
});
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
    $.fn[window.slideShowItemTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.slideShowTranslations[document.langID]]: null,
            [window.typeTranslations[document.langID]]: window.imageTranslations[document.langID],
            [window.sourceTranslations[document.langID]]: null,
            [window.nameTranslations[document.langID]]: null,
            [window.widthTranslations[document.langID]]: null,
            [window.lengthTranslations[document.langID]]: null,
            [window.animationTranslations[document.langID]]: null,
            [window.transparencyTranslations[document.langID]]: null,
            [window.distanceFromBottomTranslations[document.langID]]: null,
            [window.distanceFromTopTranslations[document.langID]]: null,
            [window.distanceFromLeftTranslations[document.langID]]: null,
            [window.distanceFromRightTranslations[document.langID]]: null,
            [window.positionTranslations[document.langID]]: null,
            [window.containerTranslations[document.langID]]: null,
            [window.backgroundTranslations[document.langID]]: null,
            [window.commandsTranslations[document.langID]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var source = settings[window.sourceTranslations[document.langID]];
            if (settings[window.typeTranslations[document.langID]] == window.imageTranslations[document.langID]) {
                var out = '<div class="owl-item" data-hash="' + name + '"><img src="' + source + '"></img></div>';
            } else if (settings[window.typeTranslations[document.langID]] == window.videoTranslations[document.langID]) {
                var out = '<div class="item-video" data-hash="' + name + '"><a class="owl-video" href="' + source + '"></a></div>'
            }
            $('#' + settings[window.slideShowTranslations[document.langID]] + '').append(out);
            if (settings[window.positionTranslations[document.langID]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.langID]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
            if (settings[window.titleTranslations[document.langID]]) {
                $('#' + name + '').attr('alt', settings[window.titleTranslations[document.langID]]);
            }
        });
    };
});
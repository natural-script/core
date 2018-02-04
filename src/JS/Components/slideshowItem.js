/*!
 * Slideshow Item
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
 */
$(function () {
    function slideShowItemFn(el, settings) {
        el.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var source = settings[window.sourceTranslations[document.langID]];
            if (settings[window.typeTranslations[document.langID]] == window.imageTranslations[document.langID] || settings[window.typeTranslations[document.langID]] == undefined) {
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
    }
    $.fn[window.slideShowItemTranslations[document.langID]] = function (settings) {
        slideShowItemFn(this, settings);
    };
});
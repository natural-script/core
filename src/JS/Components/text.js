/*!
 * Text
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.textFnTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.textTranslations[document.lang]]: null,
            [window.fontColorTranslations[document.lang]]: null,
            [window.fontSizeTranslations[document.lang]]: null,
            [window.nameTranslations[document.lang]]: null,
            [window.widthTranslations[document.lang]]: null,
            [window.lengthTranslations[document.lang]]: null,
            [window.fontThicknessTranslations[document.lang]]: null,
            [window.fontStyleTranslations[document.lang]]: null,
            [window.animationTranslations[document.lang]]: null,
            [window.backgroundTranslations[document.lang]]: null,
            [window.transparencyTranslations[document.lang]]: null,
            [window.distanceFromBottomTranslations[document.lang]]: null,
            [window.distanceFromTopTranslations[document.lang]]: null,
            [window.distanceFromLeftTranslations[document.lang]]: null,
            [window.distanceFromRightTranslations[document.lang]]: null,
            [window.positionTranslations[document.lang]]: null,
            [window.containerTranslations[document.lang]]: null,
            [window.attributesTranslations[document.lang]]: null,
            [window.commandsTranslations[document.lang]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.lang]];
            var out = '<p id="' + name + '">' + settings[window.textTranslations[document.lang]] + '</p>';
            window.appendComponent(settings[window.containerTranslations[document.lang]], out);
            if (settings[window.attributesTranslations[document.lang]]) {
                var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' ' + window.andTranslations[document.lang] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.shareableTranslations[document.lang]) {
                        window.shareThis({
                            selector: '#' + name + '',
                            sharers: [window.twitterSharer, window.facebookSharer, window.linkedInSharer, window.redditSharer, window.emailSharer]
                        }).init();
                    }
                }
            }
            if (settings[window.directionTranslations[document.lang]]) {
                if (settings[window.directionTranslations[document.lang]] == window.ltrTranslations[document.lang]) {
                    $('#' + name + '').css('direction', 'ltr');
                } else if (settings[window.directionTranslations[document.lang]] == window.rtlTranslations[document.lang]) {
                    $('#' + name + '').css('direction', 'rtl');
                }
            }
            if (settings[window.backgroundTranslations[document.lang]]) {
                window.setBG(name, settings[window.backgroundTranslations[document.lang]]);
            }
            if ($('#' + settings[window.containerTranslations[document.lang]] + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (settings[window.positionTranslations[document.lang]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.lang]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
            $('#' + name + '').niceScroll();
        });
    };
});
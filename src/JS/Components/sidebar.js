/*!
 * Sidebar
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-11
 */
$(function () {
    $.fn[window.sidebarTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.fontColorTranslations[document.langID]]: null,
            [window.fontSizeTranslations[document.langID]]: null,
            [window.nameTranslations[document.langID]]: null,
            [window.widthTranslations[document.langID]]: null,
            [window.lengthTranslations[document.langID]]: null,
            [window.fontThicknessTranslations[document.langID]]: null,
            [window.fontStyleTranslations[document.langID]]: null,
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
            var edge;
            if (document.isRTL) {
                edge = 'right';
            } else {
                edge = 'left';
            }
            var out = '<ul id="' + name + '" data-activates="' + name + '" class="side-nav"></ul>';
            window.appendComponent(settings[window.containerTranslations[document.langID]], out);
            $('#' + name + '').sideNav({
                edge: edge,
                draggable: false,
                closeOnClick: false
            });
            if ($('#' + settings[window.containerTranslations[document.langID]] + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (settings[window.positionTranslations[document.langID]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.langID]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
            $('#' + name + '').css('position', 'fixed');
            if (window.mode == 'app') {
                if ($('.side-nav').length == 1) {
                    $('.menuBtn').on('click', function () {
                        $('#' + name + '').sideNav('show');
                    });
                }
            }
        });
    };
});
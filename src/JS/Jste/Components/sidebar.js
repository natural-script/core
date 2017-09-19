/*!
 * Sidebar
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-11
 */
$(function () {
    $.fn[window.sidebarTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.fontColorTranslations[document.lang]]: null,
            [window.fontSizeTranslations[document.lang]]: null,
            [window.nameTranslations[document.lang]]: null,
            [window.widthTranslations[document.lang]]: null,
            [window.lengthTranslations[document.lang]]: null,
            [window.thicknessTranslations[document.lang]]: null,
            [window.fontStyleTranslations[document.lang]]: null,
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
            var edge;
            if (document.isRTL) {
                edge = 'right';
            } else {
                edge = 'left';
            }
            var out = '<ul id="' + name + '" data-activates="' + name + '" class="side-nav"></ul>';
            if (settings[window.containerTranslations[document.lang]]) {
                if ($('#' + settings[window.containerTranslations[document.lang]] + '').hasClass('modal')) {
                    $('#' + settings[window.containerTranslations[document.lang]] + ' > .modal-content').append(out);
                } else {
                    $('#' + settings[window.containerTranslations[document.lang]] + '').append(out);
                }
            } else {
                $('contents').append(out);
            }
            $('#' + name + '').sideNav({
                edge: edge,
                draggable: false,
                closeOnClick: false
            });
            if (settings[window.fontColorTranslations[document.lang]]) {
                window.setFontColour(name, settings[window.fontColorTranslations[document.lang]]);
            }
            if (settings[window.fontStyleTranslations[document.lang]]) {
                $('#' + name + '').css('font-style', settings[window.fontStyleTranslations[document.lang]]);
            }
            if (settings[window.thicknessTranslations[document.lang]]) {
                if (settings[window.thicknessTranslations[document.lang]] == window.thickTranslations[document.lang]) {
                    $('#' + name + '').css('font-weight', 'bold');
                } else {
                    $('#' + name + '').css('font-weight', settings[window.thicknessTranslations[document.lang]]);
                }
            }
            if (settings[window.fontSizeTranslations[document.lang]]) {
                $('#' + name + '').css('font-size', window.convertLengthCSS(settings[window.fontSizeTranslations[document.lang]]));
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
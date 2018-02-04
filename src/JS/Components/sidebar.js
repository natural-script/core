/*!
 * Sidebar
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
 */
$(function () {
    function sidebarFn(el, settings) {

        el.each(function () {
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
    }
    $.fn[window.sidebarTranslations[document.langID]] = function (settings) {
        sidebarFn(this, settings);
    };
});
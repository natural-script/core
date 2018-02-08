/*!
 * Sidebar
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function sidebarFn(el, settings) {

        el.each(function () {
            var name = elementSettingsAnalyze(settings, 'name');
            var edge;
            if (document.isRTL) {
                edge = 'right';
            } else {
                edge = 'left';
            }
            var out = '<ul id="' + name + '" data-activates="' + name + '" class="sidenav"></ul>';
            window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
            var elem = document.querySelector('#' + name + '');
            var instance = M.Sidenav.init(elem, {
                edge: edge,
                draggable: true,
                closeOnClick: false
            });
            if ($('#' + elementSettingsAnalyze(settings, 'container') + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (elementSettingsAnalyze(settings, 'position')) {
                $('#' + name + '').css('position', elementSettingsAnalyze(settings, 'position'));
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
            $('#' + name + '').css('position', 'fixed');
            if (window.mode == 'app') {
                if ($('.sidenav').length == 1) {
                    $('.menuBtn').on('click', function () {
                        instance.open();
                    });
                }
            }
        });
    }
    var sidebarTranslations = window.wordsTranslationsDB.Words['sidebar'][document.langCode];
    for (var i = 0; i < sidebarTranslations.length; i++) {
        $.fn[sidebarTranslations[i]] = function (settings) {
            sidebarFn(this, settings);
        };
    }
});
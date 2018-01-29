/*!
 * Select Menu
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-10
 */
$(function () {
    $.fn[window.selectMenuTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.titleTranslations[document.lang]]: null,
            [window.itemsTranslations[document.lang]]: null,
            [window.rippleTranslations[document.lang]]: null,
            preselected: null,
            [window.disabledTranslations[document.lang]]: null,
            [window.fontColorTranslations[document.lang]]: null,
            [window.fontSizeTranslations[document.lang]]: null,
            [window.nameTranslations[document.lang]]: null,
            [window.widthTranslations[document.lang]]: null,
            [window.lengthTranslations[document.lang]]: null,
            [window.fontThicknessTranslations[document.lang]]: null,
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
            [window.attributesTranslations[document.lang]]: null,
            [window.commandsTranslations[document.lang]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.lang]];
            var out = '<div id="' + name + '_container" class="input-field"> \
                        <select id="' + name + '">';
            if (settings[window.titleTranslations[document.lang]]) {
                out += '<option value="" disabled selected>' + window.chooseTranslations[document.lang] + ' ' + settings[window.titleTranslations[document.lang]] + '</option>';
            } else {
                out += '<option value="" disabled selected>' + window.chooseTranslations[document.lang] + '</option>';
            }
            if (settings[window.itemsTranslations[document.lang]]) {
                if (settings[window.itemsTranslations[document.lang]].includes(window.inTheGroupTranslations[document.lang])) {
                    var itemsGroups = settings[window.itemsTranslations[document.lang]].split(' &amp;&amp;&amp;&amp; ');
                    for (a = 0; a < itemsGroups.length; a++) {
                        if (itemsGroups[a].includes(window.inTheGroupTranslations[document.lang])) {
                            var items = itemsGroups[a].split(' ' + window.inTheGroupTranslations[document.lang])[0].split(' &amp;&amp;&amp; ');
                            out += '<optgroup label="' + itemsGroups[a].split(' ' + window.inTheGroupTranslations[document.lang])[1] + '">'
                            for (i = 0; i < items.length; i++) {
                                out += '<option value="' + items[i] + '">' + items[i] + '</option>';
                            }
                            out += '</optgroup>';
                        } else {
                            var items = itemsGroups[a].split(' &amp;&amp;&amp; ');
                            for (i = 0; i < items.length; i++) {
                                out += '<option value="' + items[i] + '">' + items[i] + '</option>';
                            }
                        }
                    }
                } else {
                    var items = settings[window.itemsTranslations[document.lang]].split(' &amp;&amp;&amp; ');
                    for (i = 0; i < items.length; i++) {
                        out += '<option value="' + items[i] + '">' + items[i] + '</option>';
                    }
                }
            }
            if (settings[window.titleTranslations[document.lang]]) {
                out += '</select><label>' + settings[window.titleTranslations[document.lang]] + '</label></div>';
            } else {
                out += '</select></div>';
            }
            window.appendComponent(settings[window.containerTranslations[document.lang]], out);
            if (settings[window.attributesTranslations[document.lang]]) {
                var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' ' + window.andTranslations[document.lang] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.disabledTranslations[document.lang]) {
                        $('#' + name + '').attr('disabled', '');
                    }
                }
            }
            if (settings[window.positionTranslations[document.lang]]) {
                $('#' + name + '_container').css('position', settings[window.positionTranslations[document.lang]]);
            } else {
                $('#' + name + '_container').css('position', 'relative');
            }
            $('#' + name + '').material_select();
            if (document.lang == 3 || document.lang == 4) {
                $('#' + name + '_container > .select-wrapper > .caret').css('right', '97%');
                $('#' + name + '_container > label').css('right', '0px');
            }
            window.propSet(name + '_container', settings);
        });
    };
});
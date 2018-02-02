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
    $.fn[window.selectMenuTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.titleTranslations[document.langID]]: null,
            [window.itemsTranslations[document.langID]]: null,
            [window.rippleTranslations[document.langID]]: null,
            preselected: null,
            [window.disabledTranslations[document.langID]]: null,
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
            [window.attributesTranslations[document.langID]]: null,
            [window.commandsTranslations[document.langID]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var out = '<div id="' + name + '_container" class="input-field"> \
                        <select id="' + name + '">';
            if (settings[window.titleTranslations[document.langID]]) {
                out += '<option value="" disabled selected>' + window.chooseTranslations[document.langID] + ' ' + settings[window.titleTranslations[document.langID]] + '</option>';
            } else {
                out += '<option value="" disabled selected>' + window.chooseTranslations[document.langID] + '</option>';
            }
            if (settings[window.itemsTranslations[document.langID]]) {
                if (settings[window.itemsTranslations[document.langID]].includes(window.inTheGroupTranslations[document.langID])) {
                    var itemsGroups = settings[window.itemsTranslations[document.langID]].split(' &amp;&amp;&amp;&amp; ');
                    for (a = 0; a < itemsGroups.length; a++) {
                        if (itemsGroups[a].includes(window.inTheGroupTranslations[document.langID])) {
                            var items = itemsGroups[a].split(' ' + window.inTheGroupTranslations[document.langID])[0].split(' &amp;&amp;&amp; ');
                            out += '<optgroup label="' + itemsGroups[a].split(' ' + window.inTheGroupTranslations[document.langID])[1] + '">'
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
                    var items = settings[window.itemsTranslations[document.langID]].split(' &amp;&amp;&amp; ');
                    for (i = 0; i < items.length; i++) {
                        out += '<option value="' + items[i] + '">' + items[i] + '</option>';
                    }
                }
            }
            if (settings[window.titleTranslations[document.langID]]) {
                out += '</select><label>' + settings[window.titleTranslations[document.langID]] + '</label></div>';
            } else {
                out += '</select></div>';
            }
            window.appendComponent(settings[window.containerTranslations[document.langID]], out);
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.disabledTranslations[document.langID]) {
                        $('#' + name + '').attr('disabled', '');
                    }
                }
            }
            if (settings[window.positionTranslations[document.langID]]) {
                $('#' + name + '_container').css('position', settings[window.positionTranslations[document.langID]]);
            } else {
                $('#' + name + '_container').css('position', 'relative');
            }
            $('#' + name + '').material_select();
            if (document.langID == 3 || document.langID == 4) {
                $('#' + name + '_container > .select-wrapper > .caret').css('right', '97%');
                $('#' + name + '_container > label').css('right', '0px');
            }
            window.propSet(name + '_container', settings);
        });
    };
});
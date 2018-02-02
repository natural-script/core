/*!
 * Dropdown Menu
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-11
 */
$(function () {
    $.fn[window.dropdownMenuTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.itemsTranslations[document.langID]]: null,
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
            [window.emitterTranslations[document.langID]]: null,
            [window.commandsTranslations[document.langID]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var out = '<ul id="' + name + '" class="dropdown-content">';
            if (settings[window.itemsTranslations[document.langID]]) {
                var itemsGroups = settings[window.itemsTranslations[document.langID]].split(' &amp;&amp;&amp;&amp; ');
                for (a = 0; a < itemsGroups.length; a++) {
                    if (a > 0) {
                        out += '<li class="divider"></li>';
                    }
                    var items = itemsGroups[a].split(' &amp;&amp;&amp; ');
                    for (var i = 0; i < items.length; i++) {
                        out += '<li><a id="' + items[i].split(' ').join('_') + '_dropdownItem" href="">' + items[i] + '</a></li>';
                    }
                }
            }
            out += '</ul>';
            if (settings[window.emitterTranslations[document.langID]]) {
                var emitter = settings[window.emitterTranslations[document.langID]];
                $('contents').append(out);
                $('#' + emitter + '').attr('data-activates', name).addClass('dropdown-button');
                $('#' + emitter + '').dropdown({
                    inDuration: 300,
                    outDuration: 225,
                    constrainWidth: true,
                    hover: true,
                    gutter: 0,
                    belowOrigin: true,
                    alignment: 'left',
                    stopPropagation: true
                });
            }
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.disabledTranslations[document.langID]) {
                        $('#' + name + '').attr('disabled', '');
                    } else if (propertiesArray[i] == window.rippleTranslations[document.langID]) {
                        $('#' + name + '').attr('noink', '');
                    }
                }
            }
            if (settings[window.fontSizeTranslations[document.langID]]) {
                $('#' + name + '').css('font-size', window.convertLengthCSS(settings[window.fontSizeTranslations[document.langID]]));
            }
            if ($('#' + settings[window.containerTranslations[document.langID]] + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (settings[window.positionTranslations[document.langID]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.langID]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            if (settings[window.commandsTranslations[document.langID] + 0]) {
                var commandsNo = 0;
                var preCommands;
                var itemName;
                var pureCommands;
                while (settings[window.commandsTranslations[document.langID] + commandsNo] != undefined) {
                    commandsNo++;
                }
                console.log(commandsNo)
                for (var i = 0; i < commandsNo; i++) {
                    preCommands = settings[window.commandsTranslations[document.langID] + i];
                    itemName = preCommands.split(':')[0].split(' ').join('_') + '_dropdownItem';
                    pureCommands = preCommands.split(':')[1];
                    window.execute(itemName, pureCommands);
                }
            }
            window.propSet(name, settings);
        });
    };
});
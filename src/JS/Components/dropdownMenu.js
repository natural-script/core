/*!
 * Dropdown Menu
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
 */
$(function () {
    function dropdownMenuFn (el, settings) {
        el.each(function () {
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
                $('#' + emitter + '').attr('data-target', name).addClass('dropdown-button');
                $('#' + emitter + '').dropdown({
                    inDuration: 300,
                    outDuration: 225,
                    constrainWidth: true,
                    hover: true,
                    gutter: 0,
                    coverTrigger: true,
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
                for (var i = 0; i < commandsNo; i++) {
                    preCommands = settings[window.commandsTranslations[document.langID] + i];
                    itemName = preCommands.split(':')[0].split(' ').join('_') + '_dropdownItem';
                    pureCommands = preCommands.split(':')[1];
                    window.execute(itemName, pureCommands);
                }
            }
            window.propSet(name, settings);
        });
    }
    $.fn[window.dropdownMenuTranslations[document.langID]] = function (settings) {
        dropdownMenuFn(this, settings);
    };
});
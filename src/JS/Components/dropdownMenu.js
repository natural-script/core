/*!
 * Dropdown Menu
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function dropdownMenuFn(el, settings) {
        el.each(function () {
            settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
            var name = elementSettingsAnalyze(settings, 'name');
            var out = '<ul id="' + name + '" class="dropdown-content">';
            if (elementSettingsAnalyze(settings, 'items')) {
                var itemsGroups = elementSettingsAnalyze(settings, 'items').split(' &amp;&amp;&amp;&amp; ');
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
            if (elementSettingsAnalyze(settings, 'emitter')) {
                var emitter = elementSettingsAnalyze(settings, 'emitter');
                var alignment = 'left';
                if (document.langID == 3 || document.langID == 4) {
                    alignment = 'right';
                }
                $('contents').append(out);
                $('#' + emitter + '').attr('data-target', name).addClass('dropdown-button');
                $('#' + emitter + '').dropdown({
                    inDuration: 300,
                    outDuration: 225,
                    constrainWidth: true,
                    hover: true,
                    gutter: 0,
                    coverTrigger: true,
                    alignment: alignment,
                    stopPropagation: true
                });
            }
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(' ' + getTranslations("and") + ' ', 'gmi'));
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['disabled'][document.langCode]).rating > 0.8) {
                        $('#' + name + '').attr('disabled', '');
                    } else if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['ripple'][document.langCode]).rating > 0.8) {
                        $('#' + name + '').attr('noink', '');
                    }
                }
            }
            if (elementSettingsAnalyze(settings, 'fontSize')) {
                $('#' + name + '').css('font-size', window.convertLengthCSS(elementSettingsAnalyze(settings, 'fontSize')));
            }
            if ($('#' + elementSettingsAnalyze(settings, 'container') + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (elementSettingsAnalyze(settings, 'position')) {
                $('#' + name + '').css('position', elementSettingsAnalyze(settings, 'position'));
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            if (settings[wordsTranslationsDB.Words['commands'][document.langCode][0] + 0]) {
                var commandsNo = 0;
                var preCommands;
                var itemName;
                var pureCommands;
                while (settings[wordsTranslationsDB.Words['commands'][document.langCode][0] + commandsNo] != undefined) {
                    commandsNo++;
                }
                for (var i = 0; i < commandsNo; i++) {
                    preCommands = settings[wordsTranslationsDB.Words['commands'][document.langCode][0] + i];
                    itemName = preCommands.split(':')[0].split(' ').join('_') + '_dropdownItem';
                    pureCommands = preCommands.split(':')[1];
                    window.execute(itemName, pureCommands);
                }
            }
            window.propSet(name, settings);
            if (document.langID == 3 || document.langID == 4) {
                $('#' + name + '').each(function () {
                    this.style.setProperty('padding-right', '0', 'important');
                });
                $('#' + name + '').find('li').each(function () {
                    this.style.setProperty('text-align', 'right', 'important');
                });
            }
        });
    }
    var dropdownMenuTranslations = window.wordsTranslationsDB.Words['dropdownMenu'][document.langCode];
    for (const i of dropdownMenuTranslations) {
        $.fn[i] = function (settings) {
            dropdownMenuFn(this, settings);
        };
    }
});
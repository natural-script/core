/*!
 * Dropdown Menu
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-11
 */
$(function () {
    $(function () {
        var uniqueID = document.uniqueID();
        document[uniqueID + 'checker'] = setInterval(function () {
            if (document.lang == 0 || document.lang == 1 || document.lang == 2 || document.lang == 3 || document.lang == 4 || document.lang == 5) {
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //---------------------------------------------------------------Select Menu------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[window.dropdownMenuTranslations[document.lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [window.titleTranslations[document.lang]]: null,
                        [window.itemsTranslations[document.lang]]: null,
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
                        [window.attributesTranslations[document.lang]]: null,
                        [window.emitterTranslations[document.lang]]: null,
                        [window.commandsTranslations[document.lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[window.nameTranslations[document.lang]];
                        var out = '<ul id="' + name + '" class="dropdown-content">';
                        if (settings[window.itemsTranslations[document.lang]]) {
                            var itemsGroups = settings[window.itemsTranslations[document.lang]].split(' &amp;&amp;&amp;&amp; ');
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
                        if (settings[window.emitterTranslations[document.lang]]) {
                            var emitter = settings[window.emitterTranslations[document.lang]];
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
                        if (settings[window.fontColorTranslations[document.lang]]) {
                            window.setFontColour(name, settings[window.fontColorTranslations[document.lang]]);
                        }
                        if (settings[window.fontStyleTranslations[document.lang]]) {
                            $('#' + name + '').css('font-style', settings[window.fontStyleTranslations[document.lang]]);
                        }
                        if (settings[window.attributesTranslations[document.lang]]) {
                            var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' ' + window.andTranslations[document.lang] + ' ');
                            for (i = 0; i < propertiesArray.length; i++) {
                                if (propertiesArray[i] == window.disabledTranslations[document.lang]) {
                                    $('#' + name + '').attr('disabled', '');
                                } else if (propertiesArray[i] == window.rippleTranslations[document.lang]) {
                                    $('#' + name + '').attr('noink', '');
                                }
                            }
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
                        if (settings[window.distanceFromBottomTranslations[document.lang]]) {
                            window.setDistance(name, 'bottom', settings[window.distanceFromBottomTranslations[document.lang]]);
                        }
                        if (settings[window.distanceFromTopTranslations[document.lang]]) {
                            window.setDistance(name, 'top', settings[window.distanceFromTopTranslations[document.lang]]);
                        }
                        if (settings[window.distanceFromLeftTranslations[document.lang]]) {
                            window.setDistance(name, 'left', settings[window.distanceFromLeftTranslations[document.lang]]);
                        }
                        if (settings[window.distanceFromRightTranslations[document.lang]]) {
                            window.setDistance(name, 'right', settings[window.distanceFromRightTranslations[document.lang]]);
                        }
                        if (settings[window.commandsTranslations[document.lang]]) {
                            window.execute(name, settings[window.commandsTranslations[document.lang]]);
                        }
                        if (settings[window.commandsTranslations[document.lang] + 0]) {
                            var commandsNo = 0;
                            var preCommands;
                            var itemName;
                            var pureCommands;
                            while (settings[window.commandsTranslations[document.lang] + commandsNo] != undefined) {
                                commandsNo++;
                            }
                            console.log(commandsNo)
                            for (var i = 0; i < commandsNo; i++) {
                                preCommands = settings[window.commandsTranslations[document.lang] + i];
                                itemName = preCommands.split(':')[0].split(' ').join('_') + '_dropdownItem';
                                pureCommands = preCommands.split(':')[1];
                                window.execute(itemName, pureCommands);
                            }
                        }
                        if (settings[window.widthTranslations[document.lang]]) {
                            window.setDimension(name, 'width', settings[window.widthTranslations[document.lang]]);
                        }
                        if (settings[window.lengthTranslations[document.lang]]) {
                            window.setDimension(name, 'length', settings[window.lengthTranslations[document.lang]]);
                        }
                        if (settings[window.backgroundTranslations[document.lang]]) {
                            window.setBG(name, settings[window.backgroundTranslations[document.lang]]);
                        }
                        if (settings[window.animationTranslations[document.lang]]) {
                            window.setAnimation(name, settings[window.animationTranslations[document.lang]]);
                        }
                        if (settings[window.transparencyTranslations[document.lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.lang]] + '%)');
                        }
                    });
                };

                clearInterval(document[uniqueID + 'checker']);
            }
        }, 1);
    });
}(jQuery));
$(function () {
    $(function () {
        var uniqueID = document.uniqueID();
        document[uniqueID + 'checker'] = setInterval(function () {
            if (document.lang == 0 || document.lang == 1 || document.lang == 2 || document.lang == 3 || document.lang == 4 || document.lang == 5) {
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //---------------------------------------------------------------------Table------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[window.tableTranslations[document.lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [window.fontColorTranslations[document.lang]]: null,
                        [window.fontSizeTranslations[document.lang]]: null,
                        [window.dataTranslations[document.lang]]: null,
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
                        [window.attributesTranslations[document.lang]]: null,
                        [window.backgroundTranslations[document.lang]]: null,
                        [window.commandsTranslations[document.lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[window.nameTranslations[document.lang]];
                        var out = 'table id="' + name + '" class="responsive-table centered highlight"><thead></thead><tbody class="list"></tbody></table>'
                        if (settings[window.containerTranslations[document.lang]]) {
                            if ($('#' + settings[window.containerTranslations[document.lang]] + '').hasClass('modal')) {
                                $('#' + settings[window.containerTranslations[document.lang]] + ' > .modal-content').append(out);
                            } else {
                                $('#' + settings[window.containerTranslations[document.lang]] + '').append(out);
                            }
                        } else {
                            $('contents').append(out);
                        }
                        if (settings[window.dataTranslations[document.lang]]) {
                            var inputDataPlainA = settings[window.dataTranslations[document.lang]].split(' &amp;&amp;&amp;&amp; ');
                            var inputDataRaw = '[';
                            for (var a = 0; a < inputDataPlainA.length; a++) {
                                var inputDataPlainB = inputDataPlainA[a].split(' &amp;&amp;&amp; ');
                                inputDataRaw += '{';
                                for (var i = 0; i < inputDataPlainB.length; i++) {
                                    if (i == inputDataPlainB.length - 1) {
                                        var cellData = inputDataPlainB[i].split(' ' + window.inTheCellTranslations[document.lang] + ' ')[0];
                                        var cellName = inputDataPlainB[i].split(' ' + window.inTheCellTranslations[document.lang] + ' ')[1];
                                        inputDataRaw += '"' + cellName + '": "' + cellData + '"';
                                    } else {
                                        var cellData = inputDataPlainB[i].split(' ' + window.inTheCellTranslations[document.lang] + ' ')[0];
                                        var cellName = inputDataPlainB[i].split(' ' + window.inTheCellTranslations[document.lang] + ' ')[1];
                                        inputDataRaw += '"' + cellName + '": "' + cellData + '", ';
                                    }
                                }
                                if (a == inputDataPlainA.length - 1) {
                                    inputDataRaw += '}';
                                } else {
                                    inputDataRaw += '}, ';
                                }
                            }
                            inputDataRaw += ']';
                        }
                        var inputData = JSON.parse(inputDataRaw);
                        var keys = [];
                        for (var i = 0; i < inputData.length; i++) {
                            Object.keys(inputData[i]).forEach(function (key) {
                                if (keys.indexOf(key) == -1) {
                                    keys.push(key);
                                }
                            });
                        }
                        var template = '<tr>';
                        for (i = 0; i < keys.length; i++) {
                            $('#' + name + ' > thead').append('<th>' + keys[i] + '</th>');
                            template += '<td class="' + keys[i] + '"></td>';
                        }
                        template += '</tr>';
                        var options = {
                            valueNames: keys,
                            item: template
                        };
                        var userList = new List(name + '_container', options, inputData);
                        if (settings[window.attributesTranslations[document.lang]]) {
                            var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' &amp;&amp;&amp; ');
                            for (i = 0; i < propertiesArray.length; i++) {
                                if (propertiesArray[i] == window.gridTranslations[document.lang]) {
                                    $('#' + name + '').addClass('row');
                                }
                            }
                        }
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
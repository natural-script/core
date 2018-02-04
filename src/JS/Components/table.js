/*!
 * Table
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
 */
$(function () {
    function tableFn(el, settings) {
        el.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var out = '<table id="' + name + '" class="responsive-table centered highlight"><thead></thead><tbody class="list"></tbody></table>';
            window.appendComponent(settings[window.containerTranslations[document.langID]], out);
            if (settings[window.dataTranslations[document.langID]]) {
                var inputDataPlainA = settings[window.dataTranslations[document.langID]].split(' &amp;&amp;&amp;&amp; ');
                var inputDataRaw = '[';
                for (var a = 0; a < inputDataPlainA.length; a++) {
                    var inputDataPlainB = inputDataPlainA[a].split(' &amp;&amp;&amp; ');
                    inputDataRaw += '{';
                    for (var i = 0; i < inputDataPlainB.length; i++) {
                        if (i == inputDataPlainB.length - 1) {
                            var cellData = inputDataPlainB[i].split(' ' + window.inTheCellTranslations[document.langID] + ' ')[0];
                            var cellName = inputDataPlainB[i].split(' ' + window.inTheCellTranslations[document.langID] + ' ')[1];
                            inputDataRaw += '"' + cellName + '": "' + cellData + '"';
                        } else {
                            var cellData = inputDataPlainB[i].split(' ' + window.inTheCellTranslations[document.langID] + ' ')[0];
                            var cellName = inputDataPlainB[i].split(' ' + window.inTheCellTranslations[document.langID] + ' ')[1];
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
            console.log(inputDataRaw)
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
            var settings = {
                valueNames: keys,
                item: template
            };
            var userList = new List(name, settings, inputData);
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.gridTranslations[document.langID]) {
                        $('#' + name + '').addClass('row');
                    }
                }
            }
            if ($('#' + settings[window.containerTranslations[document.langID]] + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (settings[window.positionTranslations[document.langID]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.langID]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
        });
    }
    $.fn[window.tableTranslations[document.langID]] = function (settings) {
        tableFn(this, settings);
    };
});
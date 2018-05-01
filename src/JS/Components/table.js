/*!
 * Table
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function tableFn(el, settings) {
        el.each(function () {
            settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
            var name = elementSettingsAnalyze(settings, 'name');
            var out = '<table id="' + name + '" class="responsive-table centered highlight"><thead></thead><tbody class="list"></tbody></table>';
            window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
            if (elementSettingsAnalyze(settings, 'data')) {
                var inputDataPlainA = elementSettingsAnalyze(settings, 'data').split(' &amp;&amp;&amp;&amp; ');
                var inputDataRaw = '[';
                for (var a = 0; a < inputDataPlainA.length; a++) {
                    var inputDataPlainB = inputDataPlainA[a].split(' &amp;&amp;&amp; ');
                    inputDataRaw += '{';
                    for (var i = 0; i < inputDataPlainB.length; i++) {
                        if (i == inputDataPlainB.length - 1) {
                            var cellData = inputDataPlainB[i].split(XRegExp('' + getTranslations("inTheCell") + '', 'gmi'))[0];
                            var cellName = inputDataPlainB[i].split(XRegExp('' + getTranslations("inTheCell") + '', 'gmi'))[1];
                            inputDataRaw += '"' + cellName + '": "' + cellData + '"';
                        } else {
                            var cellData = inputDataPlainB[i].split(XRegExp('' + getTranslations("inTheCell") + '', 'gmi'))[0];
                            var cellName = inputDataPlainB[i].split(XRegExp('' + getTranslations("inTheCell") + '', 'gmi'))[1];
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
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(' ' + getTranslations("and") + ' ', 'gmi'));
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['grid'][document.langCode]).rating > 0.8) {
                        $('#' + name + '').addClass('row');
                    }
                }
            }
            if ($('#' + elementSettingsAnalyze(settings, 'container') + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (elementSettingsAnalyze(settings, 'position')) {
                $('#' + name + '').css('position', elementSettingsAnalyze(settings, 'position'));
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
        });
    }
    var tableTranslations = window.wordsTranslationsDB.Words['table'][document.langCode];
    for (const i of tableTranslations) {
        $.fn[i] = function (settings) {
            tableFn(this, settings);
        };
    }
});
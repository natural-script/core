/*!
 * Properties Setter
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-07
 */
window.propSet = function (elementName, properties, param1, param2, param3) {
    if (elementSettingsAnalyze(properties, "distanceFromBottom")) {
        window.setDistance(elementName, 'bottom', elementSettingsAnalyze(properties, "distanceFromBottom"));
    }
    if (elementSettingsAnalyze(properties, "distanceFromTop")) {
        window.setDistance(elementName, 'top', elementSettingsAnalyze(properties, "distanceFromTop"));
    }
    if (elementSettingsAnalyze(properties, "distanceFromLeft")) {
        window.setDistance(elementName, 'left', elementSettingsAnalyze(properties, "distanceFromLeft"));
    }
    if (elementSettingsAnalyze(properties, "distanceFromRight")) {
        window.setDistance(elementName, 'right', elementSettingsAnalyze(properties, "distanceFromRight"));
    }
    if (elementSettingsAnalyze(properties, "commands")) {
        window.execute(elementName, elementSettingsAnalyze(properties, "commands"));
    }
    if (elementSettingsAnalyze(properties, "width")) {
        window.setDimension(elementName, 'width', elementSettingsAnalyze(properties, "width"));
    }
    if (elementSettingsAnalyze(properties, "length")) {
        window.setDimension(elementName, 'length', elementSettingsAnalyze(properties, "length"));
    }
    if (elementSettingsAnalyze(properties, "animation")) {
        window.setAnimation(elementName, elementSettingsAnalyze(properties, "animation"));
    }
    if (elementSettingsAnalyze(properties, "transparency")) {
        $('#' + elementName + '').css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(properties, "transparency") + '%)');
    }
    if (elementSettingsAnalyze(properties, "background")) {
        window.setBG(elementName, elementSettingsAnalyze(properties, "background"));
    }
    if (elementSettingsAnalyze(properties, "fontColor")) {
        window.setFontColour(elementName, elementSettingsAnalyze(properties, "fontColor"));
    }
    if (elementSettingsAnalyze(properties, "fontStyle")) {
        $('#' + elementName + '').css('font-style', elementSettingsAnalyze(properties, "fontStyle"));
    }
    if (elementSettingsAnalyze(properties, "fontThickness")) {
        if (elementSettingsAnalyze(properties, "fontThickness").findBestMatch(window.wordsTranslationsDB.Words['thick'][document.langCode]).rating > 0.8) {
            $('#' + elementName + '').css('font-weight', 'bold');
        } else {
            $('#' + elementName + '').css('font-weight', elementSettingsAnalyze(properties, "fontThickness"));
        }
    }
    if (elementSettingsAnalyze(properties, "fontSize")) {
        window.setFontSize(elementName, elementSettingsAnalyze(properties, "fontSize"));
    }
    if ($('#' + elementSettingsAnalyze(properties, "container") + '').hasClass('row') == true) {
        $('#' + elementName + '').addClass('col');
    }
    if (elementSettingsAnalyze(properties, 'attributes')) {
        var propertiesArray = elementSettingsAnalyze(properties, 'attributes').split(XRegExp(' ' + getTranslations("and") + ' ', 'gmi'));
        for (i = 0; i < propertiesArray.length; i++) {
            if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['scrollable'][document.langCode]).rating > 0.8) {
                document[document.uniqueID()] = new PerfectScrollbar('#' + elementName + '');
            }
        }
    }
};
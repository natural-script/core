/*!
 * Properties Setter
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-16
 */
window.propSet = function (elementName, properties, param1, param2, param3) {
    if (properties[window.distanceFromBottomTranslations[document.langID]]) {
        window.setDistance(elementName, 'bottom', properties[window.distanceFromBottomTranslations[document.langID]]);
    }
    if (properties[window.distanceFromTopTranslations[document.langID]]) {
        window.setDistance(elementName, 'top', properties[window.distanceFromTopTranslations[document.langID]]);
    }
    if (properties[window.distanceFromLeftTranslations[document.langID]]) {
        window.setDistance(elementName, 'left', properties[window.distanceFromLeftTranslations[document.langID]]);
    }
    if (properties[window.distanceFromRightTranslations[document.langID]]) {
        window.setDistance(elementName, 'right', properties[window.distanceFromRightTranslations[document.langID]]);
    }
    if (properties[window.commandsTranslations[document.langID]]) {
        window.execute(elementName, properties[window.commandsTranslations[document.langID]]);
    }
    if (properties[window.widthTranslations[document.langID]]) {
        window.setDimension(elementName, 'width', properties[window.widthTranslations[document.langID]]);
    }
    if (properties[window.lengthTranslations[document.langID]]) {
        window.setDimension(elementName, 'length', properties[window.lengthTranslations[document.langID]]);
    }
    if (properties[window.animationTranslations[document.langID]]) {
        window.setAnimation(elementName, properties[window.animationTranslations[document.langID]]);
    }
    if (properties[window.transparencyTranslations[document.langID]]) {
        $('#' + elementName + '').css('-webkit-filter', 'opacity(' + properties[window.transparencyTranslations[document.langID]] + '%)');
    }
    if (properties[window.backgroundTranslations[document.langID]]) {
        window.setBG(elementName, properties[window.backgroundTranslations[document.langID]]);
    }
    if (properties[window.fontColorTranslations[document.langID]]) {
        window.setFontColour(elementName, properties[window.fontColorTranslations[document.langID]]);
    }
    if (properties[window.fontStyleTranslations[document.langID]]) {
        $('#' + elementName + '').css('font-style', properties[window.fontStyleTranslations[document.langID]]);
    }
    if (properties[window.fontThicknessTranslations[document.langID]]) {
        if (properties[window.fontThicknessTranslations[document.langID]] == window.thickTranslations[document.langID]) {
            $('#' + elementName + '').css('font-weight', 'bold');
        } else {
            $('#' + elementName + '').css('font-weight', properties[window.fontThicknessTranslations[document.langID]]);
        }
    }
    if (properties[window.fontSizeTranslations[document.langID]]) {
        window.setFontSize(elementName, properties[window.fontSizeTranslations[document.langID]]);
    }
    if ($('#' + properties[window.containerTranslations[document.langID]] + '').hasClass('row') == true) {
        $('#' + elementName + '').addClass('col');
    }
};
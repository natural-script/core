/*!
 * Properties Setter
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-16
 */
window.propSet = function (elementName, properties, param1, param2, param3) {
    if (properties[window.distanceFromBottomTranslations[document.lang]]) {
        window.setDistance(elementName, 'bottom', properties[window.distanceFromBottomTranslations[document.lang]]);
    }
    if (properties[window.distanceFromTopTranslations[document.lang]]) {
        window.setDistance(elementName, 'top', properties[window.distanceFromTopTranslations[document.lang]]);
    }
    if (properties[window.distanceFromLeftTranslations[document.lang]]) {
        window.setDistance(elementName, 'left', properties[window.distanceFromLeftTranslations[document.lang]]);
    }
    if (properties[window.distanceFromRightTranslations[document.lang]]) {
        window.setDistance(elementName, 'right', properties[window.distanceFromRightTranslations[document.lang]]);
    }
    if (properties[window.commandsTranslations[document.lang]]) {
        window.execute(elementName, properties[window.commandsTranslations[document.lang]]);
    }
    if (properties[window.widthTranslations[document.lang]]) {
        window.setDimension(elementName, 'width', properties[window.widthTranslations[document.lang]]);
    }
    if (properties[window.lengthTranslations[document.lang]]) {
        window.setDimension(elementName, 'length', properties[window.lengthTranslations[document.lang]]);
    }
    if (properties[window.animationTranslations[document.lang]]) {
        window.setAnimation(elementName, properties[window.animationTranslations[document.lang]]);
    }
    if (properties[window.transparencyTranslations[document.lang]]) {
        $('#' + elementName + '').css('-webkit-filter', 'opacity(' + properties[window.transparencyTranslations[document.lang]] + '%)');
    }
    if (properties[window.backgroundTranslations[document.lang]]) {
        window.setBG(elementName, properties[window.backgroundTranslations[document.lang]]);
    }
};
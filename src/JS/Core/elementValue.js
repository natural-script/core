/*!
 * Elements Values Get & Set
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-14
 */
function elementValueFn(name, newValue) {
    this.get = function (name) {
        if (['P', 'B', 'I', 'SPAN', 'U', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].indexOf($(`#${name}`).prop('tagName')) + 1) {
            return $(`#${name}`).text();
        } else if ($(`#${name}`).prop('tagName') == 'PAPER-SWATCH-PICKER') {
            return $(`#${name}`).prop('color');
        } else {
            return $(`#${name}`).val();
        }
    };

    this.set = function (name, newValue) {
        if (['P', 'B', 'I', 'SPAN', 'U', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].indexOf($(`#${name}`).prop('tagName')) + 1) {
            return $(`#${name}`).text(newValue);
        } else {
            return $(`#${name}`).val(newValue);
        }
    };
}

window.elementValue = new elementValueFn();
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
function elementValueFn (name, newValue) {
  this.get = function (name) {
    if (/^(P|B|I|SPAN|U|H1|H2|H3|H4|H5|H6)$/.test($('body').find(`#${name}`).prop('tagName'))) {
      return $('body').find(`#${name}`).text()
    } else if ($('body').find(`#${name}`).prop('tagName') == 'PAPER-SWATCH-PICKER') {
      return $('body').find(`#${name}`).prop('color')
    } else {
      return $('body').find(`#${name}`).val()
    }
  }

  this.set = function (name, newValue) {
    if (/^(P|B|I|SPAN|U|H1|H2|H3|H4|H5|H6)$/.test($('body').find(`#${name}`).prop('tagName'))) {
      return $('body').find(`#${name}`).text(newValue)
    } else {
      return $('body').find(`#${name}`).val(newValue)
    }
  }
}

export default new elementValueFn()

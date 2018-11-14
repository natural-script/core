/*!
 * Style Inheritor
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-24
 */
import getTranslations from 'core/translationsGet'
export default function inheritStyle(props, styles) {
  if (styles) {
    var inheritedProerties = {}
    var currentProperties
    var currentPropertiesKeys
    styles = styles.split(XRegExp(`(?:, )|(?: ${getTranslations('and')} )|(?: &+ )`, 'gmis'))
    for (var i = 0; i <= styles.length; i++) {
      currentProperties = (i == styles.length) ? props : NS.styles[styles[i]]
      currentPropertiesKeys = Object.keys(currentProperties)
      for (var k = 0; k < currentPropertiesKeys.length; k++) {
        inheritedProerties[currentPropertiesKeys[k]] = currentProperties[currentPropertiesKeys[k]]
      }
    }
    return inheritedProerties
  } else {
    return props
  }
}
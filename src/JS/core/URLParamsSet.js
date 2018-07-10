/*!
 * Setting The URL Params
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-07
 */
function getLocation () {
  return location.pathname + location.search
}
export const setURLParameter = function (paramName, paramValue) {
  var url = window.location.href
  var hash = location.hash
  url = url.replace(hash, '')
  if (url.indexOf(paramName + '=') >= 0) {
    var prefix = url.substring(0, url.indexOf(paramName))
    var suffix = url.substring(url.indexOf(paramName))
    suffix = suffix.substring(suffix.indexOf('=') + 1)
    suffix = (suffix.indexOf('&') >= 0) ? suffix.substring(suffix.indexOf('&')) : ''
    url = prefix + paramName + '=' + paramValue + suffix
  } else {
    if (url.indexOf('?') < 0) url += '?' + paramName + '=' + paramValue
    else url += '&' + paramName + '=' + paramValue
  }
  window.history.pushState('', '', url + hash)
  document.currentLocation = getLocation()
}

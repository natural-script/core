/*!
 * Declarations
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-05-01
 */
console.log(`\n %c NaturalScript ${window.isLive ? '(Live Edition)' : ''} %c https://project-jste.github.io \n`, 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;')
window.NS = {
  variables: {
    global: {}
  },
  functions: {},
  styles: {},
  components: {}
}
export let langID, langCode, deviceForm, childModeStatus, nudityDetectionStatus, localAddress, mode
export let isRTL = false
let code = $('jste').text();
let detectedLang = detectLanguage(code)
if (detectedLang == 'English') {
  if (code.includes('colour') || code.includes('centre')) {
    langID = 0
  } else {
    langID = 1
  }
  langCode = 'en'
} else if (detectedLang == 'French') {
  langID = 2
  langCode = 'fr'
} else if (detectedLang == 'Arabic') {
  isRTL = true
  if (code.includes('بتاعه') || code.includes('بتاعها') || code.includes('بتاعته') || code.includes('بتاعتها')) {
    langID = 4
    langCode = 'arz'
  } else {
    langID = 3
    langCode = 'ar'
  }
} else if (detectedLang == 'Japanese') {
  langID = 5
}
if (!window.isLive) {
  if (navigator.platform == 'Win32') {
    localAddress = 'localhost'
  } else {
    localAddress = '0.0.0.0'
  }
}
fetch(window.isLive ? 'https://jste-manager.herokuapp.com/deviceForm' : `http://${localAddress}:5050/deviceForm`)
  .then(res => res.text())
  .then(data => deviceForm = data)
if (!window.isLive) {
  fetch(`http://${localAddress}:5050/childModeStatus`)
    .then(res => res.text())
    .then(data => childModeStatus = data)
  fetch(`http://${localAddress}:5050/nudityDetectionStatus`)
    .then(res => res.text())
    .then(data => nudityDetectionStatus = data)
}
export function setMode(currentMode) {
  mode = currentMode
}
export const corsPolicy = window.isLive ? 'https://jste-cors-proxy.herokuapp.com/' : `http://${localAddress}:6060/`
export const autoCorrectionAddress = window.isLive ? 'https://jste-manager.herokuapp.com/autoCorrect' : `http://${localAddress}:5050/autoCorrect`
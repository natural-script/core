/*!
 * Firebase Center
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-16
 */
import {inheritStyle} from 'core/styleInheritor'
import {elementSettingsAnalyze} from 'core/elementSettingsAnalyze'
import isReachable from 'is-reachable'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
export default async function (settings) {
  if (navigator.onLine) {
    let firebaseIsReachable = await isReachable(`https://${elementSettingsAnalyze(settings, 'username')}.firebaseio.com/`)
    if (firebaseIsReachable) {
      settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
      sessionStorage.firebaseID = elementSettingsAnalyze(settings, 'username')
      sessionStorage.firebaseKey = elementSettingsAnalyze(settings, 'password')
      var config = {
        apiKey: sessionStorage.firebaseKey,
        authDomain: sessionStorage.firebaseID + '.firebaseapp.com',
        databaseURL: 'https://' + sessionStorage.firebaseID + '.firebaseio.com',
        storageBucket: sessionStorage.firebaseID + '.appspot.com'
      }
      firebase.initializeApp(config)
      var database = firebase.database()
    }
  }
}

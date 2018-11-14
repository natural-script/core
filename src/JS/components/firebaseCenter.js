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
import inheritStyle from 'core/styleInheritor'
import isReachable from 'is-reachable'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
export let appFirebase
export default async function (props) {
  if (navigator.onLine) {
    let firebaseIsReachable = await isReachable(`https://${props.username}.firebaseio.com/`)
    if (firebaseIsReachable) {
      props = inheritStyle(props, props.style)
      sessionStorage.firebaseID = props.username
      sessionStorage.firebaseKey = props.password
      var config = {
        apiKey: sessionStorage.firebaseKey,
        authDomain: sessionStorage.firebaseID + '.firebaseapp.com',
        databaseURL: 'https://' + sessionStorage.firebaseID + '.firebaseio.com',
        storageBucket: sessionStorage.firebaseID + '.appspot.com'
      }
      firebase.initializeApp(config)
      appFirebase = firebase
    }
  }
}
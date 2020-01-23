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
import isReachable from "is-reachable";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
export let appFirebase;
let isTriggered = false;
export default async function initFirebase(props) {
  if (navigator.onLine) {
    let firebaseIsReachable = await isReachable(
      `https://${props.username}.firebaseio.com/`
    );
    if (firebaseIsReachable) {
      sessionStorage.firebaseID = props.username;
      sessionStorage.firebaseKey = props.password;
      var config = {
        apiKey: sessionStorage.firebaseKey,
        authDomain: sessionStorage.firebaseID + ".firebaseapp.com",
        databaseURL: "https://" + sessionStorage.firebaseID + ".firebaseio.com",
        storageBucket: sessionStorage.firebaseID + ".appspot.com"
      };
      firebase.initializeApp(config);
      if (!isTriggered) {
        isTriggered = true;
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            window.NS.user.email = user.email;
            window.NS.user.uid = user.uid;
          }
        });
      }
      appFirebase = firebase;
    }
  }
}

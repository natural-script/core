import isReachable from 'is-reachable'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
$(async function () {
  if (navigator.onLine) {
    let firebaseIsReachable = await isReachable('https://jste-9584c.firebaseio.com/')
    if (firebaseIsReachable) {
      var jsteFirebaseconfig = {
        apiKey: 'AIzaSyDMGk_SFlEto93zfGHUbVLwxYiSq00aknk',
        authDomain: 'jste-9584c.firebaseapp.com',
        databaseURL: 'https://jste-9584c.firebaseio.com',
        storageBucket: 'jste-9584c.appspot.com'
      }
      window.jsteFirebase = firebase.initializeApp(jsteFirebaseconfig, 'jsteFirebase')
    }
  }
}(jQuery))

import parseStringValue from 'parsers/stringValue'
import {appFirebase} from 'components/firebaseCenter'
import * as declarations from 'core/declarations'
let firebase = appFirebase
export default function ({elementName, dbType, dbName, branchName, requiredSlot, resourceValue, resourceSlot, target, scopes, parentFnParams}) {
  let targetElement
  dbType = parseStringValue(dbType, false, scopes, parentFnParams)
  dbName = parseStringValue(dbName, false, scopes, parentFnParams)
  branchName = parseStringValue(branchName, false, scopes, parentFnParams)
  requiredSlot = parseStringValue(requiredSlot, false, scopes, parentFnParams)
  resourceValue = parseStringValue(resourceValue, false, scopes, parentFnParams)
  resourceSlot = parseStringValue(resourceSlot, false, scopes, parentFnParams)
  target = parseStringValue(target, false, scopes, parentFnParams)
  if (target == 'itself') {
    targetElement = elementName
  } else {
    targetElement = target
  }
  if (dbType.findBestMatch(wordsTranslationsDB.Words['publicC'][declarations.langCode]).rating > 0.5) {
    const dbRef = firebase.database().ref('public/' + dbName + '/' + branchName)
    dbRef.orderByChild(resourceSlot).equalTo($('#' + resourceValue + '').val()).on('value', function (snapshot) {
      snapshot.forEach(function (data) {
        $('#' + targetElement + '').val(data.val()[requiredSlot])
      })
    })
  } else if (dbType.findBestMatch(wordsTranslationsDB.Words['privateC'][declarations.langCode]).rating > 0.5) {
    const dbRef = firebase.database().ref('private/' + window.user.uid + '/' + dbName + '/' + branchName)
    dbRef.orderByChild(resourceSlot).equalTo($('#' + resourceValue + '').val()).on('value', function (snapshot) {
      snapshot.forEach(function (data) {
        $('#' + targetElement + '').val(data.val()[requiredSlot])
      })
    })
  }
}

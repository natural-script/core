import parseStringValue from 'parsers/stringValue'
import parseList from 'parsers/list'
import {appFirebase} from 'components/firebaseCenter'
import * as declarations from 'core/declarations'
let firebase = appFirebase
export default function ({dbType, dbName, branchName, data, scopes, parentFnParams}) {
  dbType = parseStringValue(dbType, false, scopes, parentFnParams)
  dbName = parseStringValue(dbName, false, scopes, parentFnParams)
  branchName = parseStringValue(branchName, false, scopes, parentFnParams)
  const parsedData = parseList(data, scopes, parentFnParams)
  if (dbType.findBestMatch(window.wordsTranslationsDB.Words['publicC'][declarations.langCode]).rating > 0.8) {
    const newPostKey = firebase.database().ref('public/' + dbName).child(branchName).push().key
    return firebase.database().ref('public/' + dbName + '/' + branchName + '/' + newPostKey).set(parsedData)
  } else if (dbType.findBestMatch(window.wordsTranslationsDB.Words['privateC'][declarations.langCode]).rating > 0.8) {
    const newPostKey = firebase.database().ref('private/' + window.user.uid + '/' + dbName).child(branchName).push().key
    return firebase.database().ref('private/' + window.user.uid + '/' + dbName + '/' + branchName + '/' + newPostKey).set(parsedData)
  }
}

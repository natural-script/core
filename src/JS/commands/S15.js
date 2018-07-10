export default function (elementName, script, functionArgumentsParam) {
  var dbType = script.dbType.parseValue(false, functionArgumentsParam)
  var dbname = script.dbName.parseValue(false, functionArgumentsParam)
  var tablename = script.branchName.parseValue(false, functionArgumentsParam)
  var dataRaw = script.data
  var data = '{'
  for (var i = 0; i < Object.keys(dataRaw).length; i++) {
    if (i != Object.keys(dataRaw).length - 1) {
      data += '"' + dataRaw[i].slotName.parseValue(false, functionArgumentsParam) + '":"' + dataRaw[i].value.parseValue(false, functionArgumentsParam).replace(/\\n/g, '<br />') + '", '
    } else {
      data += '"' + dataRaw[i].slotName.parseValue(false, functionArgumentsParam) + '":"' + dataRaw[i].value.parseValue(false, functionArgumentsParam).replace(/\\n/g, '<br />') + '"}'
    }
  }
  data = JSON.parse(data)
  if (dbType.findBestMatch(window.wordsTranslationsDB.Words['publicC'][document.langCode]).rating > 0.8) {
    var newPostKey = firebase.database().ref('public/' + dbname).child(tablename).push().key
    firebase.database().ref('public/' + dbname + '/' + tablename + '/' + newPostKey).set(data)
  } else if (dbType.findBestMatch(window.wordsTranslationsDB.Words['privateC'][document.langCode]).rating > 0.8) {
    var newPostKey = firebase.database().ref('private/' + window.user.uid + '/' + dbname).child(tablename).push().key
    firebase.database().ref('private/' + window.user.uid + '/' + dbname + '/' + tablename + '/' + newPostKey).set(data)
  }
}

import * as declarations from 'core/declarations'
export default function (elementName, script, functionArgumentsParam) {
  var dbType = script.dbType.parseValue(false, functionArgumentsParam)
  var dbname = script.dbName.parseValue(false, functionArgumentsParam)
  var tablename = script.branchName.parseValue(false, functionArgumentsParam)
  var calledSlot = script.requiredSlot.parseValue(false, functionArgumentsParam)
  var resourceSlotValueResource = script.resourceValue.parseValue(false, functionArgumentsParam)
  var resourceSlotName = script.resourceSlot.parseValue(false, functionArgumentsParam)
  var targetElement
  var target = script.target.parseValue(false, functionArgumentsParam)
  if (target == 'itself') {
    targetElement = elementName
  } else {
    targetElement = target
  }
  if (dbType.findBestMatch(wordsTranslationsDB.Words['publicC'][declarations.langCode]).rating > 0.5) {
    var dbRef = firebase.database().ref('public/' + dbname + '/' + tablename)
    dbRef.orderByChild(resourceSlotName).equalTo($('#' + resourceSlotValueResource + '').val()).on('value', function (snapshot) {
      snapshot.forEach(function (data) {
        $('#' + targetElement + '').val(data.val()[calledSlot])
      })
    })
  } else if (dbType.findBestMatch(wordsTranslationsDB.Words['privateC'][declarations.langCode]).rating > 0.5) {
    var dbRef = firebase.database().ref('private/' + window.user.uid + '/' + dbname + '/' + tablename)
    dbRef.orderByChild(resourceSlotName).equalTo($('#' + resourceSlotValueResource + '').val()).on('value', function (snapshot) {
      snapshot.forEach(function (data) {
        $('#' + targetElement + '').val(data.val()[calledSlot])
      })
    })
  };
}

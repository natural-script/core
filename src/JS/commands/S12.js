export default function (elementName, script, functionArgumentsParam) {
  cordova.plugins.BluetoothStatus.initPlugin()
  cordova.plugins.BluetoothStatus.promptForBT()
}

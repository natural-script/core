import {
  elementValue
} from './elementValue.js'
import {
  getTranslations
} from 'core/translationsGet.js'
var conditionsRaw = {
  'condition2': 'Keyboard.isVisible',
  'condition3': 'window.deviceForm == `phone`',
  'condition4': 'window.deviceForm == `tablet`',
  'condition5': 'window.deviceForm == `desktop`',
  'condition6': 'cordova.plugins.BluetoothStatus.BTenabled == true',
  'condition7': 'cordova.plugins.BluetoothStatus.BTenabled == false',
  'condition8': 'WifiWizard.isWifiEnabled(win, fail) == true',
  'condition9': 'WifiWizard.isWifiEnabled(win, fail) == false'
}
export const evaluateCondition = async function (command) {
  let imports = [
    ['getTranslations', 'getTranslations', 'translationsGet']
  ]
  const conditionsRegex = `(${window.conditionsDB.join('|')})`
  const conditionRegexPrefix = `(?<=^|( (\\|\\||&&) ))`
  const conditionRegexSuffix = `(?=( (\\|\\||&&) )|$)`
  let statement = command.split(XRegExp(` ${getTranslations('inTheCaseThat')} (?=${conditionsRegex})`, 'gmin'))[1]
  let conditions = statement.split(XRegExp(` &&& (?=${conditionsRegex})`, 'gmin'))
  let subConditions = []
  for (let subCondition of conditions) {
    subCondition = subCondition.replace(XRegExp(`(?<=${conditionsRegex}), (?=${conditionsRegex})`, 'gmi'), ' && ')
      .replace(XRegExp(`(?<=${conditionsRegex}) ${getTranslations('or')} (?=${conditionsRegex})`, 'gmi'), ' || ')
    subCondition = XRegExp.replace(subCondition, XRegExp(`${conditionRegexPrefix}${eval(`\`${getTranslations('condition1')}\``)}${conditionRegexSuffix}`, 'gmin'), (match) => {
      const operator = match.isEqual ? `==` : match.notEqual ? `!=` : match.isGreater ? `>` : match.isSmaller ? `<` : ``
      return `elementValue.get(\`${match.elementName}\`) ${operator} \`${match.value}\`.parseValue()`
    })
    for (const conditionID in conditionsRaw) {
      subCondition = subCondition.replace(XRegExp(`${conditionRegexPrefix}${eval(`\`${getTranslations(`${conditionID}`)}\``)}${conditionRegexSuffix}`, 'gmi'), conditionsRaw[conditionID])
    }
    subConditions.push(`(${subCondition})`)
  }
  return subConditions.join(` && `)
}

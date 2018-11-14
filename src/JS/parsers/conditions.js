import getTranslations from 'core/translationsGet'
import {
  conditionsDB
} from 'core/analyzer'
import analyze from 'core/analyzer'
var conditionsRaw = {
  'Co5': 'Keyboard.isVisible',
  'Co6': 'declarations.deviceForm == `phone`',
  'Co7': 'declarations.deviceForm == `tablet`',
  'Co8': 'declarations.deviceForm == `desktop`',
  'Co9': 'cordova.plugins.BluetoothStatus.BTenabled == true',
  'Co10': 'cordova.plugins.BluetoothStatus.BTenabled == false',
  'Co11': 'WifiWizard.isWifiEnabled(win, fail) == true',
  'Co12': 'WifiWizard.isWifiEnabled(win, fail) == false'
}
export default function parseCondition(statement) {
  const conditionsRegex = `(${conditionsDB.join('|')})`
  const conditionRegexPrefix = `(?<=^|( (\\|\\||&&) ))`
  const conditionRegexSuffix = `(?=( (\\|\\||&&) )|$)`
  let conditions = statement.split(XRegExp(` &&& (?=${conditionsRegex})`, 'gmin'))
  let subConditions = []
  for (let subCondition of conditions) {
    subCondition = subCondition.replace(XRegExp(`(?<=${conditionsRegex}), (?=${conditionsRegex})`, 'gmi'), ' && ')
      .replace(XRegExp(`(?<=${conditionsRegex}) ${getTranslations('or')} (?=${conditionsRegex})`, 'gmi'), ' || ')
    subCondition = XRegExp.replace(subCondition, XRegExp(`${conditionRegexPrefix}(?:(?<condition>${conditionsDB.join('|')}))${conditionRegexSuffix}`, 'gmin'), (match) => {
      const data = analyze(match.condition);
      if (/^Co(1|2|3|4)$/.test(data.id)) {
        let operator
        if (data.id == 'Co1') {
          operator = `==`
        } else if (data.id == 'Co2') {
          operator = `!=`
        } else if (data.id == 'Co3') {
          operator = `>`
        } else if (data.id == 'Co4') {
          operator = `<`
        }
        return `elementValue.get(\`${data.elementName}\`) ${operator} parseStringValue(\`${data.value}\`, false, scopes, parentFnParams)`
      } else {
        return conditionsRaw[data.id]
      }
    })
    subConditions.push(`(${subCondition})`)
  }
  return subConditions.join(` && `)
}
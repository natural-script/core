/*!
 * Commands Translations
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-6
 */
import {getTranslations} from 'core/translationsGet'
export const commandsFnTranslations = function (commandCode, commandValue) {
  if (commandCode == 'c34') {
    if (document.langID == 0) {
      return commandValue.split(' after a period of ')
    } else if (document.langID == 1) {
      return commandValue.split(' after a period of ')
    } else if (document.langID == 2) {
      return commandValue.split('obtenir la valeur de la fente ')
    } else if (document.langID == 3) {
      return commandValue.split(' بعد مدة ')
    } else if (document.langID == 4) {
      return commandValue.split(' بعد مدة ')
    } else if (document.langID == 5) {
      return commandValue.split('obtenir la valeur de la fente ')
    }
  } else if (commandCode == 'c35') {
    if (document.langID == 0) {
      return commandValue.split(' after a period of ')[0]
    } else if (document.langID == 1) {
      return commandValue.split(' after a period of ')[0]
    } else if (document.langID == 2) {
      return commandValue.split('obtenir la valeur de la fente ')[0]
    } else if (document.langID == 3) {
      return commandValue.split(' بعد مدة ')[0]
    } else if (document.langID == 4) {
      return commandValue.split(' بعد مدة ')[0]
    } else if (document.langID == 5) {
      return commandValue.split('obtenir la valeur de la fente ')[0]
    }
  } else if (commandCode == 'c36') {
    if (document.langID == 0) {
      if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
        return 1
      } else if (commandValue.split(' after a period of ')[1] == 'a second') {
        return 1000
      } else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
        return 60000
      } else if (commandValue.split(' after a period of ')[1] == 'an hour') {
        return 3600000
      } else if (commandValue.split(' after a period of ')[1] == 'a day') {
        return 86400000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0])
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000
      }
    } else if (document.langID == 1) {
      if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
        return 1
      } else if (commandValue.split(' after a period of ')[1] == 'a second') {
        return 1000
      } else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
        return 60000
      } else if (commandValue.split(' after a period of ')[1] == 'an hour') {
        return 3600000
      } else if (commandValue.split(' after a period of ')[1] == 'a day') {
        return 86400000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0])
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000
      }
    } else if (document.langID == 2) {
      if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
        return 1
      } else if (commandValue.split(' after a period of ')[1] == 'a second') {
        return 1000
      } else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
        return 60000
      } else if (commandValue.split(' after a period of ')[1] == 'an hour') {
        return 3600000
      } else if (commandValue.split(' after a period of ')[1] == 'a day') {
        return 86400000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0])
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000
      }
    } else if (document.langID == 3) {
      if (commandValue.split(' بعد مدة ')[1] == 'ميلى ثانية') {
        return 1
      } else if (commandValue.split(' بعد مدة ')[1] == 'ثانية') {
        return 1000
      } else if (commandValue.split(' بعد مدة ')[1] == 'دقيقة') {
        return 60000
      } else if (commandValue.split(' بعد مدة ')[1] == 'ساعة') {
        return 3600000
      } else if (commandValue.split(' بعد مدة ')[1] == 'يوم') {
        return 86400000
      } else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
        return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0])
      } else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ثوانى') {
        return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 1000
      } else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'دقائق') {
        return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 60000
      } else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ساعات') {
        return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 3600000
      } else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ايام') {
        return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 86400000
      }
    } else if (document.langID == 4) {
      if (commandValue.split(' بعد مدة ')[1] == 'ميلى ثانية') {
        return 1
      } else if (commandValue.split(' بعد مدة ')[1] == 'ثانية') {
        return 1000
      } else if (commandValue.split(' بعد مدة ')[1] == 'دقيقة') {
        return 60000
      } else if (commandValue.split(' بعد مدة ')[1] == 'ساعة') {
        return 3600000
      } else if (commandValue.split(' بعد مدة ')[1] == 'يوم') {
        return 86400000
      } else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
        return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0])
      } else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ثوانى') {
        return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 1000
      } else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'دقائق') {
        return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 60000
      } else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ساعات') {
        return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 3600000
      } else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ايام') {
        return parseFloat(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 86400000
      }
    } else if (document.langID == 5) {
      if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
        return 1
      } else if (commandValue.split(' after a period of ')[1] == 'a second') {
        return 1000
      } else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
        return 60000
      } else if (commandValue.split(' after a period of ')[1] == 'an hour') {
        return 3600000
      } else if (commandValue.split(' after a period of ')[1] == 'a day') {
        return 86400000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0])
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000
      } else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
        return parseFloat(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000
      }
    }
  } else if (commandCode == 'c37') {
    if (document.langID == 0) {
      return commandValue.split(' every a period of ')
    } else if (document.langID == 1) {
      return commandValue.split(' every a period of ')
    } else if (document.langID == 2) {
      return commandValue.split('obtenir la valeur de la fente ')
    } else if (document.langID == 3) {
      return commandValue.split(' كل مدة ')
    } else if (document.langID == 4) {
      return commandValue.split(' كل مدة ')
    } else if (document.langID == 5) {
      return commandValue.split('obtenir la valeur de la fente ')
    }
  } else if (commandCode == 'c38') {
    if (document.langID == 0) {
      return commandValue.split(' every a period of ')[0]
    } else if (document.langID == 1) {
      return commandValue.split(' every a period of ')[0]
    } else if (document.langID == 2) {
      return commandValue.split('obtenir la valeur de la fente ')[0]
    } else if (document.langID == 3) {
      return commandValue.split(' كل مدة ')[0]
    } else if (document.langID == 4) {
      return commandValue.split(' كل مدة ')[0]
    } else if (document.langID == 5) {
      return commandValue.split('obtenir la valeur de la fente ')[0]
    }
  } else if (commandCode == 'c39') {
    if (document.langID == 0) {
      if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
        return 1
      } else if (commandValue.split(' every a period of ')[1] == 'a second') {
        return 1000
      } else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
        return 60000
      } else if (commandValue.split(' every a period of ')[1] == 'an hour') {
        return 3600000
      } else if (commandValue.split(' every a period of ')[1] == 'a day') {
        return 86400000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0])
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000
      }
    } else if (document.langID == 1) {
      if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
        return 1
      } else if (commandValue.split(' every a period of ')[1] == 'a second') {
        return 1000
      } else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
        return 60000
      } else if (commandValue.split(' every a period of ')[1] == 'an hour') {
        return 3600000
      } else if (commandValue.split(' every a period of ')[1] == 'a day') {
        return 86400000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0])
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000
      }
    } else if (document.langID == 2) {
      if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
        return 1
      } else if (commandValue.split(' every a period of ')[1] == 'a second') {
        return 1000
      } else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
        return 60000
      } else if (commandValue.split(' every a period of ')[1] == 'an hour') {
        return 3600000
      } else if (commandValue.split(' every a period of ')[1] == 'a day') {
        return 86400000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0])
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000
      }
    } else if (document.langID == 3) {
      if (commandValue.split(' كل مدة ')[1] == 'ميلى ثانية') {
        return 1
      } else if (commandValue.split(' كل مدة ')[1] == 'ثانية') {
        return 1000
      } else if (commandValue.split(' كل مدة ')[1] == 'دقيقة') {
        return 60000
      } else if (commandValue.split(' كل مدة ')[1] == 'ساعة') {
        return 3600000
      } else if (commandValue.split(' كل مدة ')[1] == 'يوم') {
        return 86400000
      } else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
        return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0])
      } else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ثوانى') {
        return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 1000
      } else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'دقائق') {
        return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 60000
      } else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ساعات') {
        return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 3600000
      } else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ايام') {
        return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 86400000
      }
    } else if (document.langID == 4) {
      if (commandValue.split(' كل مدة ')[1] == 'ميلى ثانية') {
        return 1
      } else if (commandValue.split(' كل مدة ')[1] == 'ثانية') {
        return 1000
      } else if (commandValue.split(' كل مدة ')[1] == 'دقيقة') {
        return 60000
      } else if (commandValue.split(' كل مدة ')[1] == 'ساعة') {
        return 3600000
      } else if (commandValue.split(' كل مدة ')[1] == 'يوم') {
        return 86400000
      } else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
        return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0])
      } else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ثوانى') {
        return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 1000
      } else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'دقائق') {
        return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 60000
      } else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ساعات') {
        return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 3600000
      } else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ايام') {
        return parseFloat(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 86400000
      }
    } else if (document.langID == 5) {
      if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
        return 1
      } else if (commandValue.split(' every a period of ')[1] == 'a second') {
        return 1000
      } else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
        return 60000
      } else if (commandValue.split(' every a period of ')[1] == 'an hour') {
        return 3600000
      } else if (commandValue.split(' every a period of ')[1] == 'a day') {
        return 86400000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0])
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000
      } else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
        return parseFloat(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000
      }
    }
  } else if (commandCode == 'c40') {
    if (document.langID == 0) {
      return commandValue.split(XRegExp(`^${getTranslations('event17')}`, 'gmi'))[1].split(', ')[0]
    } else if (document.langID == 1) {
      return commandValue.split(XRegExp(`^${getTranslations('event17')}`, 'gmi'))[1].split(', ')[0]
    } else if (document.langID == 2) {
      return commandValue.split(XRegExp(`^${getTranslations('event17')}`, 'gmi'))[1].split(', ')[0]
    } else if (document.langID == 3) {
      return commandValue.split(XRegExp(`^${getTranslations('event17')}`, 'gmi'))[1].split(', ')[0]
    } else if (document.langID == 4) {
      return commandValue.split(XRegExp(`^${getTranslations('event17')}`, 'gmi'))[1].split(', ')[0]
    } else if (document.langID == 5) {
      return commandValue.split(XRegExp(`^${getTranslations('event17')}`, 'gmi'))[1].split(', ')[0]
    }
  } else if (commandCode == 'c52') {
    if (document.langID == 0) {
      return commandValue.split(' in the case that ')
    } else if (document.langID == 1) {
      return commandValue.split(' in the case that ')
    } else if (document.langID == 2) {
      return commandValue.split('obtenir la valeur de la fente ')
    } else if (document.langID == 3) {
      return commandValue.split(' فى حالة أن ')
    } else if (document.langID == 4) {
      return commandValue.split(' فى حالة إن ')
    } else if (document.langID == 5) {
      return commandValue.split('obtenir la valeur de la fente ')
    }
  } else if (commandCode == 'c54') {
    if (document.langID == 0) {
      return commandValue.split(' in the case that ')[0]
    } else if (document.langID == 1) {
      return commandValue.split(' in the case that ')[0]
    } else if (document.langID == 2) {
      return commandValue.split('obtenir la valeur de la fente ')[0]
    } else if (document.langID == 3) {
      return commandValue.split(' فى حالة أن ')[0]
    } else if (document.langID == 4) {
      return commandValue.split(' فى حالة إن ')[0]
    } else if (document.langID == 5) {
      return commandValue.split('obtenir la valeur de la fente ')[0]
    }
  }
}

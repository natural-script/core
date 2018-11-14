import getTranslations from 'core/translationsGet'
export default function parseMs(period) {
    if (parseFloat(period)) {
        period = /(\d+) (.*)/.exec(period)
        const periodUnit = getTranslations(period[2], true)
        if (periodUnit == 'millisecond') {
            return parseFloat(period[1])
        } else if (periodUnit == 'second') {
            return parseFloat(period[1]) * 1000
        } else if (periodUnit == 'minuit') {
            return parseFloat(period[1]) * 60000
        } else if (periodUnit == 'hour') {
            return parseFloat(period[1]) * 3600000
        } else if (periodUnit == 'day') {
            return parseFloat(period[1]) * 86400000
        }
    } else {
        const periodUnit = getTranslations(period, true)
        if (periodUnit == 'oneMillisecond') {
            return 1
        } else if (periodUnit == 'oneSecond') {
            return 1000
        } else if (periodUnit == 'oneMinuit') {
            return 60000
        } else if (periodUnit == 'oneHour') {
            return 3600000
        } else if (periodUnit == 'oneDay') {
            return 86400000
        }
    }
}
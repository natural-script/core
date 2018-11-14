import * as declarations from 'core/declarations'
export default function isAttributedByBeing(props, requiredAttr) {
    if (props.attributes) {
        const attrs = props.attributes.split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
        for (const attr of attrs) {
            if (attr.findBestMatch(window.wordsTranslationsDB.Words[requiredAttr][declarations.langCode]).rating > 0.9) {
                return true
            }
        }
    }
    return false
}
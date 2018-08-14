import * as declarations from 'core/declarations'
export default function (data) {
    let prefix, suffix
    if (data.id == 'CI1') {
        prefix = (declarations.langID == 0 || declarations.langID == 1) ?
            `add['${data.component}']({\n"name": "${data.name}",\n"commands": \`` :
            (declarations.langID == 2) ?
            `ajouter['${data.component}']({\n"nom": "${data.name}",\n"commandes": \`` :
            (declarations.langID == 3) ?
            `اضف['${data.component}']({\n"الاسم": "${data.name}",\n"الأوامر": \`` :
            (declarations.langID == 4) ?
            `ضيف['${data.component}']({\n"الاسم": "${data.name}",\n"الأوامر": \`` : ``
        suffix = `\`})`
    }
    if (data.id == 'CI2') {
        prefix = (declarations.langID == 0 || declarations.langID == 1) ?
            `add['${data.component}']({\n"name": "${data.name}",` :
            (declarations.langID == 2) ?
            `ajouter['${data.component}']({\n"nom": "${data.name}",` :
            (declarations.langID == 3) ?
            `اضف['${data.component}']({\n"الاسم": "${data.name}",` :
            (declarations.langID == 4) ?
            `ضيف['${data.component}']({\n"الاسم": "${data.name}",` : ``
        suffix = `})`
    }
    if (data.id == 'CI3') {
        prefix = ((declarations.langID == 0 || declarations.langID == 1) && data.attributes) ?
            `add.setup({\n"mode": "${data.mode}",\n"attributes": "${data.attributes}",` :
            ((declarations.langID == 2) && data.attributes) ?
            `ajouter.installation({\n"mode": "${data.mode}",\n"attributs": "${data.attributes}",` :
            ((declarations.langID == 3) && data.attributes) ?
            `اضف.الإعدادات({\n"الوضعية": "${data.mode}",\n"الصفات": "${data.attributes}",` :
            ((declarations.langID == 4) && data.attributes) ?
            `ضيف.الإعدادات({\n"المود": "${data.mode}",\n"الصفات": "${data.attributes}",` :
            (declarations.langID == 0 || declarations.langID == 1) ?
            `add.setup({\n"mode": "${data.mode}",` :
            (declarations.langID == 2) ?
            `ajouter.installation({\n"mode": "${data.mode}",` :
            (declarations.langID == 3) ?
            `اضف.الإعدادات({\n"الوضعية": "${data.mode}",` :
            (declarations.langID == 4) ?
            `ضيف.الإعدادات({\n"المود": "${data.mode}",` : ``
        suffix = `})`
    }

    if (data.id == 'CI4') {
        prefix = ((declarations.langID == 0 || declarations.langID == 1) && data.attributes && data.withAttributes) ?
            `add['${data.component}']({\n"attributes": "${data.attributes} and with ${data.withAttributes}",` :
            ((declarations.langID == 0 || declarations.langID == 1) && data.attributes && data.withoutAttributes) ?
            `add['${data.component}']({\n"attributes": "${data.attributes} and without ${data.withoutAttributes}",` :
            ((declarations.langID == 0 || declarations.langID == 1) && data.withAttributes) ?
            `add['${data.component}']({\n"attributes": "with ${data.withAttributes}",` :
            ((declarations.langID == 0 || declarations.langID == 1) && data.withoutAttributes) ?
            `add['${data.component}']({\n"attributes": "without ${data.withoutAttributes}",` :
            ((declarations.langID == 0 || declarations.langID == 1) && data.attributes) ?
            `add['${data.component}']({\n"attributes": "${data.attributes}",` :
            ((declarations.langID == 2) && data.attributes) ?
            `ajouter['${data.component}']({\n"attributs": "${data.attributes}",` :
            ((declarations.langID == 3) && data.attributes) ?
            `اضف['${data.component}']({\n"الصفات": "${data.attributes}",` :
            ((declarations.langID == 4) && data.attributes) ?
            `ضيف['${data.component}']({\n"الصفات": "${data.attributes}",` :
            (declarations.langID == 0 || declarations.langID == 1) ?
            `add['${data.component}']({` :
            (declarations.langID == 2) ?
            `ajouter['${data.component}']({` :
            (declarations.langID == 3) ?
            `اضف['${data.component}']({` :
            (declarations.langID == 4) ?
            `ضيف['${data.component}']({` : ``
        suffix = `})`
    }

    if (data.id == 'CI5') {
        prefix = (declarations.langID == 0 || declarations.langID == 1) ?
            `add['properties assignor']({\n"name": "${data.name}",` :
            (declarations.langID == 2) ?
            `ajouter.cédant_des_propriétés({\n"nom": "${data.name}",` :
            (declarations.langID == 3) ?
            `اضف.مضيف_الخواص({\n"الاسم": "${data.name}",` :
            (declarations.langID == 4) ?
            `ضيف.مضيف_الخواص({\n"الاسم": "${data.name}",` : ``
        suffix = `})`
    }

    if (data.id == 'CI6') {
        prefix = (declarations.langID == 0 || declarations.langID == 1) ?
            `add.clone({\nits cloned element is ${data.clonedElement},\n"attributes": "with commands",` :
            (declarations.langID == 2) ?
            `ajouter.clone({\n"élément clone": "${data.clonedElement}",\n"attributs": "avec des commandes",` :
            (declarations.langID == 3) ?
            `اضف.استنساخ({\nالعنصر المستنسخ": "${data.clonedElement}",\n"الصفات": "بالأوامر",` :
            (declarations.langID == 4) ?
            `ضيف.استنساخ({\nالعنصر المستنسخ": "${data.clonedElement}",\n"الصفات": "بالأوامر",` : ``
        suffix = `})`
    }

    if (data.id == 'CI7') {
        prefix = (declarations.langID == 0 || declarations.langID == 1) ?
            `add.clone({\n"cloned element": "${data.clonedElement}",` :
            (declarations.langID == 2) ?
            `ajouter.clone({\n"élément clone": "${data.clonedElement}",` :
            (declarations.langID == 3) ?
            `اضف.استنساخ({\n"العنصر المستنسخ": "${data.clonedElement}",` :
            (declarations.langID == 4) ?
            `ضيف.استنساخ({\n"العنصر المستنسخ": "${data.clonedElement}",` : ``
        suffix = `})`
    }

    if (data.id == 'CI8') {
        if (data.property.punctuationAndArticleRemover().findBestMatch(wordsTranslationsDB.Words['text'][declarations.langCode]).rating > 0.9) {
            data.propertyValue = data.propertyValue.parseValue()
        } else if (data.property.punctuationAndArticleRemover().findBestMatch(wordsTranslationsDB.Words['commands'][declarations.langCode]).rating < 0.7) {
            data.propertyValue = data.propertyValue.parseValue(false)
        }
        return `"${data.property.punctuationAndArticleRemover()}": \`${data.propertyValue.replace(XRegExp('^(.*?)`(.*)$', 'gmi'), '$1\\`$2')}\`${(data.propertyValueSuffix == '.' ? '\n});' : ',')}`
    }
    return {
        prefix,
        suffix
    }
}
/*!
 * Script Initialization
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-05-01
 */
window.scriptInit = async function () {
	var meta = document.createElement('meta');
	meta.name = 'viewport';
	meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
	document.getElementsByTagName('head')[0].appendChild(meta);
	var componentsRegex = `(${window.componentsDB.join('|')})`;
	var rawCode = $(`jste`).html();
	if (navigator.onLine) {
		var isReachable = await window.isReachable('https://jste-manager.herokuapp.com/autoCorrect');
		if (isReachable) {
			var codeChunks = rawCode.match(/^(.|[\r\n]){0,10000}(,|\.)$/gmi);
			rawCode = '';
			for (var i = 0; i < codeChunks.length; i++) {
				rawCode += '\n' + await $.ajax({
					url: window.autoCorrectionAddress,
					method: 'POST',
					data: {
						lang: document.langCode == 'arz' ? 'ar' : document.langCode,
						input: codeChunks[i]
					}
				});
			}
		}
	}
	var codePrefix = 'jQuery(document).ready(\nfunction ($) {';
	var addTranslations = window.wordsTranslationsDB.Words['add'][document.langCode];
	for (const i of addTranslations) {
		codePrefix += `\nvar ${i} = window.jsteComponentsFnStore;`;
	}
	var code = rawCode;
	code = XRegExp.replace(code, XRegExp(`((^ +| +$)|(^\\s*$(?:\\r\\n?|\\n)))`, 'gmi'), ``);
	code = XRegExp.replace(code, XRegExp(`^((?!^(?:\\d|[A-Z])\\. )(.*?)[^,|\\.|:])$\\s(?!^(?:\\d|[A-Z])\\. )`, 'gmi'), '$1 ');
	code = `${codePrefix}\n${code}\n});`;
	code = XRegExp.replace(code, XRegExp('&lt;&lt; ' + getTranslations("operator19") + ': ((?:(?:.*?&lt;&lt;.*?&gt;&gt;.*?)|.*?)+?) &gt;&gt;', 'gmi'), function (match, p1, offset, string) {
		return `NORMALTEXTPREFIX${btoa(p1.replace(XRegExp('\n', 'gmi'), ' '))}NORMALTEXTSUFFIX`;
	});
	if (document.langID == 3 || document.langID == 4) {
		document.isRTL = true;
	} else {
		document.isRTL = false;
	}
	if (Modernizr.speechrecognition) {
		if (document.langID == 0) {
			annyang.setLanguage(`en-GB`);
		} else if (document.langID == 1) {
			annyang.setLanguage(`en-US`);
		} else if (document.langID == 2) {
			annyang.setLanguage(`fr-FR`);
		} else if (document.langID == 3) {
			annyang.setLanguage(`ar-AE`);
		} else if (document.langID == 4) {
			annyang.setLanguage(`ar-EG`);
		}
	}
	var i = -1;
	code = XRegExp.replace(code, XRegExp(`^add a text`, 'gmin'), (match) => {
		return `add a text0`;
	});
	code = XRegExp.replace(code, XRegExp(`^add a (?<attributes>.*?) text`, 'gmin'), (match) => {
		return `add a ${match.attributes} text0`;
	});
	code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax1')}\``), 'gmin'), (match) => {
		match.commands = match.commands.replace(XRegExp(`^[A-Z]\\. (.*?)\\.$\\n(?=^[A-Z]\\.)`, 'gmis'), '$1 &amp;&amp;&amp; ').replace(XRegExp(` &amp;&amp;&amp; [A-Z]\\. (.*?)\\.$`, 'gmi'), ' &amp;&amp;&amp; $1');
		return (document.langID == 0 || document.langID == 1) ?
			`add['${match.component}']({\nits name is ${match.name},\nits commands are ${match.commands}.` :
			(document.langID == 2) ?
			`ajouter['${match.component}']({\nsa nom est ${match.name},\nses commandes sont ${match.commands}.` :
			(document.langID == 3) ?
			`اضف['${match.component}']({\nالاسم الخاص بها ${match.name},\nالأوامر الخاصة بها ${match.commands}.` :
			(document.langID == 4) ?
			`ضيف['${match.component}']({\nالاسم بتاعها ${match.name},\nالأوامر بتاعتها ${match.commands}.` : ``;
	});
	code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax2')}\``), 'gmin'), (match) => {
		return (document.langID == 0 || document.langID == 1) ?
			`add['${match.component}']({\nits name is ${match.name},` :
			(document.langID == 2) ?
			`ajouter['${match.component}']({\nson nom est ${match.name},` :
			(document.langID == 3) ?
			`اضف['${match.component}']({\nالاسم الخاص به ${match.name},` :
			(document.langID == 4) ?
			`ضيف['${match.component}']({\nالاسم بتاعه ${match.name},` : ``;
	});
	code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax3')}\``), 'gmin'), (match) => {
		return ((document.langID == 0 || document.langID == 1) && match.attributes) ?
			`add.setup({\nits mode is ${match.mode},\nits attributes are ${match.attributes},` :
			((document.langID == 2) && match.attributes) ?
			`ajouter.installation({\nson mode est ${match.mode},\nses attributs sont ${match.attributes},` :
			((document.langID == 3) && match.attributes) ?
			`اضف.الإعدادات({\nالوضعية الخاصة به ${match.mode},\nالصفات الخاصة به ${match.attributes},` :
			((document.langID == 4) && match.attributes) ?
			`ضيف.الإعدادات({\nالمود بتاعه ${match.mode},\nالصفات بتاعته ${match.attributes},` :
			(document.langID == 0 || document.langID == 1) ?
			`add.setup({\nits mode is ${match.mode},` :
			(document.langID == 2) ?
			`ajouter.installation({\nson mode est ${match.mode},` :
			(document.langID == 3) ?
			`اضف.الإعدادات({\nالوضعية الخاصة به ${match.mode},` :
			(document.langID == 4) ?
			`ضيف.الإعدادات({\nالمود بتاعه ${match.mode},` : ``;
	});
	code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax4')}\``), 'gmin'), (match) => {
		return ((document.langID == 0 || document.langID == 1) && match.attributes && match.withAttributes) ?
			`add['${match.component}']({\nits attributes are ${match.attributes} and with ${match.withAttributes},` :
			((document.langID == 0 || document.langID == 1) && match.attributes && match.withoutAttributes) ?
			`add['${match.component}']({\nits attributes are ${match.attributes} and without ${match.withoutAttributes},` :
			((document.langID == 0 || document.langID == 1) && match.withAttributes) ?
			`add['${match.component}']({\nits attributes are with ${match.withAttributes},` :
			((document.langID == 0 || document.langID == 1) && match.withoutAttributes) ?
			`add['${match.component}']({\nits attributes are without ${match.withoutAttributes},` :
			((document.langID == 0 || document.langID == 1) && match.attributes) ?
			`add['${match.component}']({\nits attributes are ${match.attributes},` :
			((document.langID == 2) && match.attributes) ?
			`ajouter['${match.component}']({\nses attributs sont ${match.attributes},` :
			((document.langID == 3) && match.attributes) ?
			`اضف['${match.component}']({\nالصفات الخاصة به ${match.attributes},` :
			((document.langID == 4) && match.attributes) ?
			`ضيف['${match.component}']({\nالصفات بتاعته ${match.attributes},` :
			(document.langID == 0 || document.langID == 1) ?
			`add['${match.component}']({` :
			(document.langID == 2) ?
			`ajouter['${match.component}']({` :
			(document.langID == 3) ?
			`اضف['${match.component}']({` :
			(document.langID == 4) ?
			`ضيف['${match.component}']({` : ``;
	});
	code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax5')}\``), 'gmin'), (match) => {
		return (document.langID == 0 || document.langID == 1) ?
			`add['properties assignor']({\nits name is ${match.name},` :
			(document.langID == 2) ?
			`ajouter.cédant_des_propriétés({\nson nom est ${match.name},` :
			(document.langID == 3) ?
			`اضف.مضيف_الخواص({\nالاسم الخاص به ${match.name},` :
			(document.langID == 4) ?
			`ضيف.مضيف_الخواص({\nالاسم بتاعه ${match.name},` : ``;
	});
	code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax6')}\``), 'gmin'), (match) => {
		return (document.langID == 0 || document.langID == 1) ?
			`add.clone0({\nits cloned element is ${match.clonedElement},\nits attributes are with commands,` :
			(document.langID == 2) ?
			`ajouter.clone0({\nson élément clone est ${match.clonedElement},\nses attributs sont avec des commandes,` :
			(document.langID == 3) ?
			`اضف.استنساخ({\nالعنصر المستنسخ الخاص به ${match.clonedElement},\nالصفات الخاصة به بالأوامر,` :
			(document.langID == 4) ?
			`ضيف.استنساخ({\nالعنصر المستنسخ بتاعه ${match.clonedElement},\nالصفات بتاعته بالأوامر,` : ``;
	});
	code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax7')}\``), 'gmin'), (match) => {
		return (document.langID == 0 || document.langID == 1) ?
			`add.clone0({\nits cloned element is ${match.clonedElement},` :
			(document.langID == 2) ?
			`ajouter.clone0({\nson élément clone est ${match.clonedElement},` :
			(document.langID == 3) ?
			`اضف.استنساخ({\nالعنصر المستنسخ الخاص به ${match.clonedElement},` :
			(document.langID == 4) ?
			`ضيف.استنساخ({\nالعنصر المستنسخ بتاعه ${match.clonedElement},` : ``;
	});
	code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax8')}\``), 'gmin'), (match) => {
		if (match.property.punctuationAndArticleRemover().findBestMatch(wordsTranslationsDB.Words['text'][document.langCode]).rating > 0.9) {
			match.propertyValue = match.propertyValue.parseValue();
		} else if (match.property.punctuationAndArticleRemover().findBestMatch(wordsTranslationsDB.Words['commands'][document.langCode]).rating < 0.7) {
			match.propertyValue = match.propertyValue.parseValue(false);
		}
		return `"${match.property.punctuationAndArticleRemover()}": \`${match.propertyValue.replace(XRegExp('^(.*?)`(.*)$', 'gmi'), '$1\\`$2')}\`${(match.propertyValueSuffix == '.' ? '\n});' : ',')}`;
	});
	code = XRegExp.replace(code, XRegExp(eval(`\`${getTranslations('syntax9')}\``), 'gmin'), (match) => {
		i++;
		return `commands${i}: \`${match.itemName}:${match.itemCommands}\`${(match.propertyValueSuffix == '.' ? '\n});' : ',')}`;
	});
	$(`jste`).remove();
	if (window.isLive) {
		$('<iframe>').attr('id', 'receiver').attr('src', 'https://jste-manager.herokuapp.com/db-manager.min.html').hide().appendTo('body');
	}
	console.groupCollapsed('Compiled Syntax');
	console.log(code);
	console.groupEnd();
	eval(code);
	setTimeout(() => window.showCurrentPage(), 1);
}
$(function () {
	$(function () {
		setTimeout(function () {
			if (document.langID != null) {
				window.scriptInit();
			}
		}, 100);
	});
}(jQuery));
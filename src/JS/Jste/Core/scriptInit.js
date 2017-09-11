/*!
 * Script Initialization
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-11
 */
var code = "jQuery(document).ready(\nfunction ($) {\nvar ";
if ($('en-uk').length) {
	document.lang = 0;
	if (window.isChrome) {
		annyang.setLanguage('en-GB');
	}
	var i = -1;
	code += "add = $('body');" + $('en-uk').html();
	code = code.replace(/^add a text/gm, "add a text0");
	code = code.replace(/^add (a|an) (.*?) (\w+) without (.*?) with the following properties:$/gm, "add.$3({\nits attributes are $2 and without $4,");
	code = code.replace(/^add (a|an) (.*?) (\w+) with (.*?) with the following properties:$/gm, "add.$3({\nits attributes are $2 and with $4,");
	code = code.replace(/^add (a|an) (\w+) with (.*?) with the following properties:$/gm, "add.$2({\nits attributes are with $3,");
	code = code.replace(/^add (a|an) (\w+) without (.*?) with the following properties:$/gm, "add.$2({\nits attributes are without $3,");
	code = code.replace(/^add (a|an) (.*?) (\w+) with the following properties:$/gm, "add.$3({\nits attributes are $2,");
	code = code.replace(/^add (a|an) (\w+) with the following properties:$/gm, "add.$2({");
	code = code.replace(/^clone (\w+) with the following properties:$/gm, "add.clone0({\nits cloned element is $1,");
	code = code.replace(/^clone (\w+) including its commands with the following properties:$/gm, "add.clone0({\nits cloned element is $1,\nits attributes are with commands,");
	code = code.replace(/^its (.*?) (is|are) (.*)\,$/gm, function (match, p1, p2, p3, offset, string) {
		return p1.replace(/ /g, '_') + ": '" + p3.replace(/^(.*?)'(.*)$/gm, "$1\\'$2") + "',";
	});
	code = code.replace(/^its (.*?) (is|are) (.*)\.$/gm, function (match, p1, p2, p3, offset, string) {
		return p1.replace(/ /g, '_') + ": '" + p3.replace(/^(.*?)'(.*)$/gm, "$1\\'$2") + "'\n});";
	});
	code = code.replace(/^the commands of the item (.*?) are that (.*?)\,$/gm, function (match, p1, p2, offset, string) {
		i++;
		return "commands" + i + ": '" + p1 + ":" + p2 + "',";
	});
	code = code.replace(/^the commands of the item (.*?) are that (.*?)\.$/gm, function (match, p1, p2, offset, string) {
		i++;
		return "commands" + i + ": '" + p1 + ":" + p2 + "'\n});";
	});
	code = window.customText(code,
		'write this text in a bold font',
		'write this text in an italic font',
		'write this text in an underlined font',
		'write this text in a bold and italic font',
		'write this text in an italic and bold font',
		'write this text in a bold and underlined font',
		'write this text in an underlined and bold font',
		'write this text in an underlined and italic font',
		'write this text in an italic and underlined font',
		'write this text in a bold, italic and underlined font',
		'write this text in a bold, underlined and italic font',
		'write this text in an italic, bold and underlined font',
		'write this text in an italic, underlined and bold font',
		'write this text in an underlined, italic and bold font',
		'write this text in an underlined, bold and italic font',
		'the window length',
		'the window width',
		'the screen length',
		'the screen width',
		'an icon of',
		"a line break");
	$('en-uk').remove();
} else if ($('en-us').length) {
	document.lang = 1;
	if (window.isChrome) {
		annyang.setLanguage('en-US');
	}
	var i = -1;
	code += "add = $('body');" + $('en-us').html();
	code = code.replace(/^add a text/gm, "add a text0");
	code = code.replace(/^add (a|an) (.*?) (\w+) without (.*?) with the following properties:$/gm, "add.$3({\nits attributes are $2 and without $4,");
	code = code.replace(/^add (a|an) (.*?) (\w+) with (.*?) with the following properties:$/gm, "add.$3({\nits attributes are $2 and with $4,");
	code = code.replace(/^add (a|an) (\w+) with (.*?) with the following properties:$/gm, "add.$2({\nits attributes are with $3,");
	code = code.replace(/^add (a|an) (\w+) without (.*?) with the following properties:$/gm, "add.$2({\nits attributes are without $3,");
	code = code.replace(/^add (a|an) (.*?) (\w+) with the following properties:$/gm, "add.$3({\nits attributes are $2,");
	code = code.replace(/^add (a|an) (\w+) with the following properties:$/gm, "add.$2({");
	code = code.replace(/^clone (\w+) with the following properties:$/gm, "add.clone0({\nits cloned element is $1,");
	code = code.replace(/^clone (\w+) including its commands with the following properties:$/gm, "add.clone0({\nits cloned element is $1,\nits attributes are with commands,");
	code = code.replace(/^its (.*?) (is|are) (.*)\,$/gm, function (match, p1, p2, p3, offset, string) {
		return p1.replace(/ /g, '_') + ": '" + p3.replace(/^(.*?)'(.*)$/gm, "$1\\'$2") + "',";
	});
	code = code.replace(/^its (.*?) (is|are) (.*)\.$/gm, function (match, p1, p2, p3, offset, string) {
		return p1.replace(/ /g, '_') + ": '" + p3.replace(/^(.*?)'(.*)$/gm, "$1\\'$2") + "'\n});";
	});
	code = code.replace(/^the commands of the item (.*?) are that (.*?)\,$/gm, function (match, p1, p2, offset, string) {
		i++;
		return "commands" + i + ": '" + p1 + ":" + p2 + "',";
	});
	code = code.replace(/^the commands of the item (.*?) are that (.*?)\.$/gm, function (match, p1, p2, offset, string) {
		i++;
		return "commands" + i + ": '" + p1 + ":" + p2 + "'\n});";
	});
	code = window.customText(code,
		'write this text in a bold font',
		'write this text in an italic font',
		'write this text in an underlined font',
		'write this text in a bold and italic font',
		'write this text in an italic and bold font',
		'write this text in a bold and underlined font',
		'write this text in an underlined and bold font',
		'write this text in an underlined and italic font',
		'write this text in an italic and underlined font',
		'write this text in a bold, italic and underlined font',
		'write this text in a bold, underlined and italic font',
		'write this text in an italic, bold and underlined font',
		'write this text in an italic, underlined and bold font',
		'write this text in an underlined, italic and bold font',
		'write this text in an underlined, bold and italic font',
		'the window length',
		'the window width',
		'the screen length',
		'the screen width',
		'an icon of',
		"a line break");
	$('en-us').remove();
} else if ($('fr-fr').length) {
	document.lang = 2;
	if (window.isChrome) {
		annyang.setLanguage('fr-FR');
	}
	var i = -1;
	code += "ajouter = $('body');" + $('fr-fr').html();
	code = code.replace(/^ajouter (le|la|un|une) (\w+) (.*?) avec les propriétés suivantes:$/gm, "ajouter.$2({\nses attributs sont $3,");
	code = code.replace(/^ajouter (le|la|un|une) (\w+) avec les propriétés suivantes:$/gm, "ajouter.$2({");
	code = code.replace(/^cloner (\w+) avec les propriétés suivantes:$/gm, "ajouter.clone0({\nson élément clone est $1,");
	code = code.replace(/^cloner (\w+) y compris ses commandes avec les propriétés suivantes:$/gm, "ajouter.clone0({\nson élément clone est $1,\nses attributs sont avec des commandes,");
	code = code.replace(/^(son|sa) (.*?) (est|sont) (.*)\,$/gm, function (match, p1, p2, p3, p4, offset, string) {
		return p2.replace(/ /g, '_') + ": '" + p4.replace(/^(.*?)'(.*)$/gm, "$1\\'$2") + "',";
	});
	code = code.replace(/^(son|sa) (.*?) (est|sont) (.*)\.$/gm, function (match, p1, p2, p3, p4, offset, string) {
		return p2.replace(/ /g, '_') + ": '" + p4.replace(/^(.*?)'(.*)$/gm, "$1\\'$2") + "'\n});";
	});
	code = code.replace(/^les commandes de l'élément (.*?) sont (.*?)\,$/gm, function (match, p1, p2, offset, string) {
		i++;
		return "commandes" + i + ": '" + p1 + ":" + p2 + ",";
	});
	code = code.replace(/^les commandes de l'élément (.*?) sont (.*?)\.$/gm, function (match, p1, p2, offset, string) {
		i++;
		return "commandes" + i + ": '" + p1 + ":" + p2 + "'\n});";
	});
	code = window.customText(code,
		'écrire ce texte dans une police en gras',
		'écrire ce texte dans une police en italique',
		'écrire ce texte dans une police soulignée',
		'écrire ce texte dans une police en gras et en italique',
		'écrire ce texte dans une police en italique et en gras',
		'écrire ce texte dans une police en gras et soulignée',
		'écrire ce texte dans une police soulignée et en gras',
		'écrire ce texte dans une police soulignée et en italique',
		'écrire ce texte dans une police en italique et soulignée',
		'écrire ce texte dans une police en gras, en italique et soulignée',
		'écrire ce texte dans une police en gras, soulignée et en italique',
		'écrire ce texte dans une police en italique, en gras et soulignée',
		'écrire ce texte dans une police en italique, soulignée et en gras',
		'écrire ce texte dans une police soulignée, en italique et en gras',
		'écrire ce texte dans une police soulignée, en gras et en italique',
		'la longueur de la fenêtre',
		'la largeur de la fenêtre',
		"la longueur de l'écran",
		"la largeur de l'écran",
		'une icône de',
		"un saut de ligne");
	$('fr-fr').remove();
} else if ($('ar-ar').length) {
	document.isRTL = true;
	$('html').attr('dir', 'rtl').attr('document.lang', 'ar');
	document.lang = 3;
	if (window.isChrome) {
		annyang.setLanguage('ar-AE');
	}
	var i = -1;
	code += "اضف = $('body');" + $('ar-ar').html();
	code = code.replace(/^اضف ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) (.*?) بالخواص التالية:$/gm, "اضف.$1({\nالصفات الخاصة به $2,");
	code = code.replace(/^اضف ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) بالخواص التالية:$/gm, "اضف.$1({");
	code = code.replace(/^استنسخ ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) بالخواص دى:$/gm, "اضف.استنساخ({\nالعنصر المستنسخ الخاص به $1,");
	code = code.replace(/^استنسخ ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) بأوامره بالخواص التالية:$/gm, "اضف.استنساخ({\nالعنصر المستنسخ الخاص به $1,\nالصفات الخاصة به بالأوامر,");
	code = code.replace(/^(.*?) (الخاص به|الخاصة به|الخاص بها|الخاصة بها) (.*)\,$/gm, function (match, p1, p2, p3, offset, string) {
		return p1.replace(/ /g, '_').replace(/^ال/gm, '') + ": '" + p3.replace(/^(.*?)'(.*)$/gm, "$1\\'$2") + "',";
	});
	code = code.replace(/^(.*?) (الخاص به|الخاصة به|الخاص بها|الخاصة بها) (.*)\.$/gm, function (match, p1, p2, p3, offset, string) {
		return p1.replace(/ /g, '_').replace(/^ال/gm, '') + ": '" + p3.replace(/^(.*?)'(.*)$/gm, "$1\\'$2") + "'\n});";
	});
	code = code.replace(/^الأوامر الخاصة بالعنصر (.*?) هى أنه (.*?)\,$/gm, function (match, p1, p2, offset, string) {
		i++;
		return "أوامر" + i + ": '" + p1 + ":" + p2 + "',";
	});
	code = code.replace(/^الأوامر الخاصة بالعنصر (.*?) هى أنه (.*?)\.$/gm, function (match, p1, p2, offset, string) {
		i++;
		return "أوامر" + i + ": '" + p1 + ":" + p2 + "'\n});";
	});
	code = window.customText(code, 'اكتب هذا النص بخط سميك',
		'اكتب هذا النص بخط مائل',
		'اكتب هذا النص بخط مخطط',
		'اكتب هذا النص بخط سميك و مائل',
		'اكتب هذا النص بخط مائل و سميك',
		'اكتب هذا النص بخط سميك و مخطط',
		'اكتب هذا النص بخط مخطط و سميك',
		'اكتب هذا النص بخط مخطط و مائل',
		'اكتب هذا النص بخط مائل و مخطط',
		'اكتب هذا النص بخط سميك, مائل و مخطط',
		'اكتب هذا النص بخط سميك, مخطط و مائل',
		'اكتب هذا النص بخط مائل, سميك و مخطط',
		'اكتب هذا النص بخط مائل, مخطط و سميك',
		'اكتب هذا النص بخط مخطط, مائل و سميك',
		'اكتب هذا النص بخط مخطط, سميك و مائل',
		'طول النافذة',
		'عرض النافذة',
		'طول الشاشة',
		'عرض الشاشة',
		'ايقونة',
		"سطر جديد");
	$('ar-ar').remove();
} else if ($('ar-eg').length) {
	document.isRTL = true;
	$('html').attr('dir', 'rtl').attr('document.lang', 'ar');
	document.lang = 4;
	if (window.isChrome) {
		annyang.setLanguage('ar-EG');
	}
	var i = -1;
	code += "ضيف = $('body');" + $('ar-eg').html();
	code = code.replace(/^ضيف ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) (.*?) بالخواص دى:$/gm, "ضيف.$1({\nالصفات بتاعته $2,");
	code = code.replace(/^ضيف ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) بالخواص دى:$/gm, "ضيف.$1({");
	code = code.replace(/^استنسخ ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) بالخواص دى:$/gm, "ضيف.استنساخ({\nالعنصر المستنسخ بتاعه $1,");
	code = code.replace(/^استنسخ ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) بأوامره بالخواص دى:$/gm, "ضيف.استنساخ({\nالعنصر المستنسخ بتاعه $1,\nالصفات بتاعته بالأوامر,");
	code = code.replace(/^(.*?) (بتاعه|بتاعته|بتاعها|بتاعتها) (.*)\,$/gm, function (match, p1, p2, p3, offset, string) {
		return p1.replace(/ /g, '_').replace(/^ال/gm, '') + ": '" + p3.replace(/^(.*?)'(.*)$/gm, "$1\\'$2") + "',";
	});
	code = code.replace(/^(.*?) (بتاعه|بتاعته|بتاعها|بتاعتها) (.*)\.$/gm, function (match, p1, p2, p3, offset, string) {
		return p1.replace(/ /g, '_').replace(/^ال/gm, '') + ": '" + p3.replace(/^(.*?)'(.*)$/gm, "$1\\'$2") + "'\n});";
	});
	code = code.replace(/^الأوامر بتاعت العنصر (.*?) هية إنه (.*?)\,$/gm, function (match, p1, p2, offset, string) {
		i++;
		return "أوامر" + i + ": '" + p1 + ":" + p2 + "',";
	});
	code = code.replace(/^الأوامر بتاعت العنصر (.*?) هية إنه (.*?)\.$/gm, function (match, p1, p2, offset, string) {
		i++;
		return "أوامر" + i + ": '" + p1 + ":" + p2 + "'\n});";
	});
	code = window.customText(code, 'اكتب الكلام دة بخط طخين',
		'اكتب الكلام دة بخط مايل',
		'اكتب الكلام دة بخط متخطط',
		'اكتب الكلام دة بخط طخين و مايل',
		'اكتب الكلام دة بخط مايل و طخين',
		'اكتب الكلام دة بخط طخين و متخطط',
		'اكتب الكلام دة بخط متخطط و طخين',
		'اكتب الكلام دة بخط متخطط و مايل',
		'اكتب الكلام دة بخط مايل و متخطط',
		'اكتب الكلام دة بخط طخين, مايل و متخطط',
		'اكتب الكلام دة بخط طخين, متخطط و مايل',
		'اكتب الكلام دة بخط مايل, طخين و متخطط',
		'اكتب الكلام دة بخط مايل, متخطط و طخين',
		'اكتب الكلام دة بخط متخطط, مايل و طخين',
		'اكتب الكلام دة بخط متخطط, طخين و مايل',
		'طول النافذة',
		'عرض النافذة',
		'طول الشاشة',
		'عرض الشاشة',
		'ايكونة',
		"سطر جديد");
	$('ar-eg').remove();
} else if ($('ja-ja').length) {
	document.lang = 5;
	if (window.isChrome) {
		annyang.setLanguage('ja');
	}
	code += "追加する= $('body');" + $('ja-ja').html();
	$('ja-ja').remove();
}
code += "});";
console.log(code);
$(function () {
	$(function () {
		setTimeout(function () {
			if (document.lang != null) {
				eval(code);
			}
		}, 100);
	});
}(jQuery));
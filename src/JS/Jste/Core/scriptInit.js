/*!
 * Script Initialization
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-19
 */
var meta = document.createElement('meta');
meta.name = 'viewport';
meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
document.getElementsByTagName('head')[0].appendChild(meta);
var code = 'jQuery(document).ready(\nfunction ($) {\nvar ';
if (document.lang == 0) {
	document.isRTL = false;
	if (window.isChrome) {
		annyang.setLanguage("en-GB");
	}
	var i = -1;
	code += 'add = $("body");' + $("en-uk").html();
	code = code.replace(/^add a text/gm, 'add a text0');
	code = code.replace(/^configure this (.*?) (site|app) with the following properties:$/gm, 'add.setup({\nits mode is $2,\nits attributes are $1,');
	code = code.replace(/^configure this (site|app) with the following properties:$/gm, 'add.setup({\nits mode is $1,');
	code = code.replace(/^add (a|an) (.*?) (\w+) without (.*?) with the following properties:$/gm, 'add.$3({\nits attributes are $2 and without $4,');
	code = code.replace(/^add (a|an) (.*?) (\w+) with (.*?) with the following properties:$/gm, 'add.$3({\nits attributes are $2 and with $4,');
	code = code.replace(/^add (a|an) (\w+) with (.*?) with the following properties:$/gm, 'add.$2({\nits attributes are with $3,');
	code = code.replace(/^add (a|an) (\w+) without (.*?) with the following properties:$/gm, 'add.$2({\nits attributes are without $3,');
	code = code.replace(/^add (a|an) (.*?) (\w+) with the following properties:$/gm, 'add.$3({\nits attributes are $2,');
	code = code.replace(/^add (a|an) (\w+) with the following properties:$/gm, 'add.$2({');
	code = code.replace(/^assign the following properties to the element (\w+):$/gm, 'add.properties_assignor({\nits name is $1,');
	code = code.replace(/^clone (\w+) including its commands with the following properties:$/gm, 'add.clone0({\nits cloned element is $1,\nits attributes are with commands,');
	code = code.replace(/^clone (\w+) with the following properties:$/gm, 'add.clone0({\nits cloned element is $1,');
	code = window.customText(code, false);
	code = code.replace(/^its (.*?) (is|are) (.*)\,$/gm, function (match, p1, p2, p3, offset, string) {
		if (p1 == 'text') {
			p3 = window.customText(p3);
		}
		return p1.replace(/ /g, "_") + ': "' + p3.replace(/^(.*?)"(.*)$/gm, '$1\\"$2') + '",';
	});
	code = code.replace(/^its (.*?) (is|are) (.*)\.$/gm, function (match, p1, p2, p3, offset, string) {
		if (p1 == 'text') {
			p3 = window.customText(p3);
		}
		return p1.replace(/ /g, "_") + ': "' + p3.replace(/^(.*?)"(.*)$/gm, '$1\\"$2') + '"\n});';
	});
	code = code.replace(/^the commands of the item (.*?) are that (.*?)\,$/gm, function (match, p1, p2, offset, string) {
		i++;
		return 'commands' + i + ': "' + p1 + ':' + p2 + '",';
	});
	code = code.replace(/^the commands of the item (.*?) are that (.*?)\.$/gm, function (match, p1, p2, offset, string) {
		i++;
		return 'commands' + i + ': "' + p1 + ':' + p2 + '"\n});';
	});
	$("en-uk").remove();
} else if (document.lang == 1) {
	document.isRTL = false;
	if (window.isChrome) {
		annyang.setLanguage("en-US");
	}
	var i = -1;
	code += 'add = $("body");' + $("en-us").html();
	code = code.replace(/^add a text/gm, 'add a text0');
	code = code.replace(/^configure this (.*?) (site|app) with the following properties:$/gm, 'add.setup({\nits mode is $2,\nits attributes are $1,');
	code = code.replace(/^configure this (site|app) with the following properties:$/gm, 'add.setup({\nits mode is $1,');
	code = code.replace(/^add (a|an) (.*?) (\w+) without (.*?) with the following properties:$/gm, 'add.$3({\nits attributes are $2 and without $4,');
	code = code.replace(/^add (a|an) (.*?) (\w+) with (.*?) with the following properties:$/gm, 'add.$3({\nits attributes are $2 and with $4,');
	code = code.replace(/^add (a|an) (\w+) with (.*?) with the following properties:$/gm, 'add.$2({\nits attributes are with $3,');
	code = code.replace(/^add (a|an) (\w+) without (.*?) with the following properties:$/gm, 'add.$2({\nits attributes are without $3,');
	code = code.replace(/^add (a|an) (.*?) (\w+) with the following properties:$/gm, 'add.$3({\nits attributes are $2,');
	code = code.replace(/^add (a|an) (\w+) with the following properties:$/gm, 'add.$2({');
	code = code.replace(/^assign the following properties to the element (\w+):$/gm, 'add.properties_assignor({\nits name is $1,');
	code = code.replace(/^clone (\w+) including its commands with the following properties:$/gm, 'add.clone0({\nits cloned element is $1,\nits attributes are with commands,');
	code = code.replace(/^clone (\w+) with the following properties:$/gm, 'add.clone0({\nits cloned element is $1,');
	code = window.customText(code, false);
	code = code.replace(/^its (.*?) (is|are) (.*)\,$/gm, function (match, p1, p2, p3, offset, string) {
		if (p1 == 'text') {
			p3 = window.customText(p3);
		}
		return p1.replace(/ /g, "_") + ': "' + p3.replace(/^(.*?)"(.*)$/gm, '$1\\"$2') + '",';
	});
	code = code.replace(/^its (.*?) (is|are) (.*)\.$/gm, function (match, p1, p2, p3, offset, string) {
		if (p1 == 'text') {
			p3 = window.customText(p3);
		}
		return p1.replace(/ /g, "_") + ': "' + p3.replace(/^(.*?)"(.*)$/gm, '$1\\"$2') + '"\n});';
	});
	code = code.replace(/^the commands of the item (.*?) are that (.*?)\,$/gm, function (match, p1, p2, offset, string) {
		i++;
		return 'commands' + i + ': "' + p1 + ':' + p2 + '",';
	});
	code = code.replace(/^the commands of the item (.*?) are that (.*?)\.$/gm, function (match, p1, p2, offset, string) {
		i++;
		return 'commands' + i + ': "' + p1 + ':' + p2 + '"\n});';
	});
	$("en-us").remove();
} else if (document.lang == 2) {
	document.isRTL = false;
	if (window.isChrome) {
		annyang.setLanguage("fr-FR");
	}
	var i = -1;
	code += 'ajouter = $("body");' + $("fr-fr").html();
	code = code.replace(/^configurez ce (site|app) (.*?) avec les propriétés suivantes:$/gm, 'ajouter.installation({\nson mode est $1,\nses attributs sont $2,');
	code = code.replace(/^configurez ce (site|app) avec les propriétés suivantes:$/gm, 'ajouter.installation({\nson mode est $1,');
	code = code.replace(/^ajouter (le|la|un|une) (.*?) (.*?) avec les propriétés suivantes:$/gm, 'ajouter.$2({\nses attributs sont $3,');
	code = code.replace(/^ajouter (le|la|un|une) (.*?) avec les propriétés suivantes:$/gm, 'ajouter.$2({');
	code = code.replace(/^affectez les propriétés suivantes à l'élément (\w+):$/gm, 'ajouter.cédant_des_propriétés({\nson nom est $1,');
	code = code.replace(/^cloner (.*?) y compris ses commandes avec les propriétés suivantes:$/gm, 'ajouter.clone0({\nson élément clone est $1,\nses attributs sont avec des commandes,');
	code = code.replace(/^cloner (.*?) avec les propriétés suivantes:$/gm, 'ajouter.clone0({\nson élément clone est $1,');
	code = window.customText(code, false);
	code = code.replace(/^(son|sa|ses) (.*?) (est|sont) (.*)\,$/gm, function (match, p1, p2, p3, p4, offset, string) {
		if (p2 == 'text') {
			p4 = window.customText(p4);
		}
		return p2.replace(/ /g, "_") + ': "' + p4.replace(/^(.*?)"(.*)$/gm, '$1\\"$2') + '",';
	});
	code = code.replace(/^(son|sa|ses) (.*?) (est|sont) (.*)\.$/gm, function (match, p1, p2, p3, p4, offset, string) {
		if (p2 == 'text') {
			p4 = window.customText(p4);
		}
		return p2.replace(/ /g, "_") + ': "' + p4.replace(/^(.*?)"(.*)$/gm, '$1\\"$2') + '"\n});';
	});
	code = code.replace(/^les commandes de l'élément (.*?) sont (.*?)\,$/gm, function (match, p1, p2, offset, string) {
		i++;
		return 'commandes' + i + ': "' + p1 + ':' + p2 + '",';
	});
	code = code.replace(/^les commandes de l'élément (.*?) sont (.*?)\.$/gm, function (match, p1, p2, offset, string) {
		i++;
		return 'commandes' + i + ': "' + p1 + ':' + p2 + '"\n});';
	});
	$("fr-fr").remove();
} else if (document.lang == 3) {
	document.isRTL = true;
	$("html").attr("dir", "rtl").attr("document.lang", "ar");
	if (window.isChrome) {
		annyang.setLanguage("ar-AE");
	}
	var i = -1;
	code += 'اضف = $("body");' + $("ar-ar").html();
	code = code.replace(/^هيئ هذا (الموقع|التطبيق) (.*?) بالخواص التالية:$/gm, 'اضف.الإعدادات({\nالوضعية الخاصة به $1,\nالصفات الخاصة به $2,');
	code = code.replace(/^هيئ هذا (الموقع|التطبيق) بالخواص التالية:$/gm, 'اضف.الإعدادات({\nالوضعية الخاصة به $1,');
	code = code.replace(/^اضف ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) (.*?) بالخواص التالية:$/gm, 'اضف.$1({\nالصفات الخاصة به $2,');
	code = code.replace(/^اضف ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) بالخواص التالية:$/gm, 'اضف.$1({');
	code = code.replace(/^اضف هذه الخواص التالية إلى العنصر ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+):$/gm, 'اضف.مضيف_الخواص({\nالاسم الخاص به $1,');
	code = code.replace(/^استنسخ ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) بأوامره بالخواص التالية:$/gm, 'اضف.استنساخ({\nالعنصر المستنسخ الخاص به $1,\nالصفات الخاصة به بالأوامر,');
	code = code.replace(/^استنسخ ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) بالخواص دى:$/gm, 'اضف.استنساخ({\nالعنصر المستنسخ الخاص به $1,');
	code = window.customText(code, false);
	code = code.replace(/^(.*?) (الخاص به|الخاصة به|الخاص بها|الخاصة بها) (.*)\,$/gm, function (match, p1, p2, p3, offset, string) {
		if (p1 == 'النص') {
			p3 = window.customText(p3);
		}
		return p1.replace(/ /g, "_").replace(/^ال/gm, "") + ': "' + p3.replace(/^(.*?)"(.*)$/gm, '$1\\"$2') + '",';
	});
	code = code.replace(/^(.*?) (الخاص به|الخاصة به|الخاص بها|الخاصة بها) (.*)\.$/gm, function (match, p1, p2, p3, offset, string) {
		if (p1 == 'النص') {
			p3 = window.customText(p3);
		}
		return p1.replace(/ /g, "_").replace(/^ال/gm, "") + ': "' + p3.replace(/^(.*?)"(.*)$/gm, '$1\\"$2') + '"\n});';
	});
	code = code.replace(/^الأوامر الخاصة بالعنصر (.*?) هى أنه (.*?)\,$/gm, function (match, p1, p2, offset, string) {
		i++;
		return 'أوامر' + i + ': "' + p1 + ':' + p2 + '",';
	});
	code = code.replace(/^الأوامر الخاصة بالعنصر (.*?) هى أنه (.*?)\.$/gm, function (match, p1, p2, offset, string) {
		i++;
		return 'أوامر' + i + ': "' + p1 + ':' + p2 + '"\n});';
	});
	$("ar-ar").remove();
} else if (document.lang == 4) {
	document.isRTL = true;
	$("html").attr("dir", "rtl").attr("document.lang", "ar");
	if (window.isChrome) {
		annyang.setLanguage("ar-EG");
	}
	var i = -1;
	code += 'ضيف = $("body");' + $("ar-eg").html();
	code = code.replace(/^هيئ (السايت|الآب) (.*?) دة بالخواص دى:$/gm, 'ضيف.الإعدادات({\المود بتاعه $1,\nالصفات بتاعته $2,');
	code = code.replace(/^هيئ (السايت|الآب) دة بالخواص دى:$/gm, 'ضيف.الإعدادات({\المود بتاعه $1,');
	code = code.replace(/^ضيف ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) (.*?) بالخواص دى:$/gm, 'ضيف.$1({\nالصفات بتاعته $2,');
	code = code.replace(/^ضيف ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) بالخواص دى:$/gm, 'ضيف.$1({');
	code = code.replace(/^ضيف الخواص دى للعنصر ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+):$/gm, 'ضيف.مضيف_الخواص({\nالاسم بتاعه $1,');
	code = code.replace(/^استنسخ ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) بأوامره بالخواص دى:$/gm, 'ضيف.استنساخ({\nالعنصر المستنسخ بتاعه $1,\nالصفات بتاعته بالأوامر,');
	code = code.replace(/^استنسخ ([\u0600-\u065F\u066A-\u06EF\u06FA\-\u06FF_0-9]+) بالخواص دى:$/gm, 'ضيف.استنساخ({\nالعنصر المستنسخ بتاعه $1,');
	code = window.customText(code, false);
	code = code.replace(/^(.*?) (بتاعه|بتاعته|بتاعها|بتاعتها) (.*)\,$/gm, function (match, p1, p2, p3, offset, string) {
		if (p1 == 'الكلام') {
			p3 = window.customText(p3);
		}
		return p1.replace(/ /g, "_").replace(/^ال/gm, "") + ': "' + p3.replace(/^(.*?)"(.*)$/gm, '$1\\"$2') + '",';
	});
	code = code.replace(/^(.*?) (بتاعه|بتاعته|بتاعها|بتاعتها) (.*)\.$/gm, function (match, p1, p2, p3, offset, string) {
		if (p1 == 'الكلام') {
			p3 = window.customText(p3);
		}
		return p1.replace(/ /g, "_").replace(/^ال/gm, "") + ': "' + p3.replace(/^(.*?)"(.*)$/gm, '$1\\"$2') + '"\n});';
	});
	code = code.replace(/^الأوامر بتاعت العنصر (.*?) هية إنه (.*?)\,$/gm, function (match, p1, p2, offset, string) {
		i++;
		return 'أوامر' + i + ': "' + p1 + ':' + p2 + '",';
	});
	code = code.replace(/^الأوامر بتاعت العنصر (.*?) هية إنه (.*?)\.$/gm, function (match, p1, p2, offset, string) {
		i++;
		return 'أوامر' + i + ': "' + p1 + ':' + p2 + '"\n});';
	});
	$("ar-eg").remove();
} else if (document.lang == 5) {
	document.isRTL = false;
	if (window.isChrome) {
		annyang.setLanguage("ja");
	}
	code += '追加する= $("body");' + $("ja-ja").html();
	$("ja-ja").remove();
}
code += '});';
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
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------Script Initialization------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var code = "jQuery(document).ready(function ($) { var ";
if ($('en-uk').length) {
	document.lang = 0;
	if (window.isChrome) {
		annyang.setLanguage('en-GB');
	}
	code += "add = $('body');" + $('en-uk').html();
	code = code.replace(/add a text/g, "add a text0");
	code = code.replace(/add a /g, "add.");
	code = code.replace(/add an /g, "add.");
	code = code.replace(/ with the following properties:/g, "({");
	code = code.replace(/'\./g, "'});");
	code = code.replace(/"\./g, '"});');
	code = window.customText(code, 'write this text in a bold font', 'write this text in an italic font', 'write this text in an underlined font', 'write this text in a bold and italic font', 'write this text in an italic and bold font', 'write this text in a bold and underlined font', 'write this text in an underlined and bold font', 'write this text in an underlined and italic font', 'write this text in an italic and underlined font', 'write this text in a bold, italic and underlined font', 'write this text in a bold, underlined and italic font', 'write this text in an italic, bold and underlined font', 'write this text in an italic, underlined and bold font', 'write this text in an underlined, italic and bold font', 'write this text in an underlined, bold and italic font', 'the window length', 'the window width', 'the screen length', 'the screen width', 'an icon of', "the user's name");
	$('en-uk').remove();
} else if ($('en-us').length) {
	document.lang = 1;
	if (window.isChrome) {
		annyang.setLanguage('en-US');
	}
	code += "add= $('body');" + $('en-us').html();
	code = code.replace(/add a text/g, "add a text0");
	code = code.replace(/add a /g, "add.");
	code = code.replace(/add an /g, "add.");
	code = code.replace(/ with the following properties:/g, "({");
	code = code.replace(/'\./g, "'});");
	code = code.replace(/"\./g, '"});');
	code = window.customText(code, 'write this text in a bold font', 'write this text in an italic font', 'write this text in an underlined font', 'write this text in a bold and italic font', 'write this text in an italic and bold font', 'write this text in a bold and underlined font', 'write this text in an underlined and bold font', 'write this text in an underlined and italic font', 'write this text in an italic and underlined font', 'write this text in a bold, italic and underlined font', 'write this text in a bold, underlined and italic font', 'write this text in an italic, bold and underlined font', 'write this text in an italic, underlined and bold font', 'write this text in an underlined, italic and bold font', 'write this text in an underlined, bold and italic font', 'the window length', 'the window width', 'the screen length', 'the screen width', 'an icon of', "the user's name");
	$('en-us').remove();
} else if ($('fr-fr').length) {
	document.lang = 2;
	if (window.isChrome) {
		annyang.setLanguage('fr-FR');
	}
	code += "ajouter= $('body');" + $('fr-fr').html();
	code = code.replace(/ajouter le /g, "ajouter.");
	code = code.replace(/ajouter la /g, "ajouter.");
	code = code.replace(/ajouter un /g, "ajouter.");
	code = code.replace(/ajouter une /g, "ajouter.");
	code = code.replace(/ avec les propriétés suivantes:/g, "({");
	code = code.replace(/'\./g, "'});");
	code = code.replace(/"\./g, '"});');
	$('fr-fr').remove();
} else if ($('ar-ar').length) {
	document.isRTL = true;
	$('html').attr('dir', 'rtl').attr('document.lang', 'ar');
	document.lang = 3;
	if (window.isChrome) {
		annyang.setLanguage('ar-AE');
	}
	code += "اضف= $('body');" + $('ar-ar').html();
	code = code.replace(/اضف /g, "اضف.");
	code = code.replace(/ بالخواص التالية:/g, "({");
	code = code.replace(/'\./g, "'});");
	code = code.replace(/"\./g, '"});');
	code = window.customText(code, 'اكتب هذا النص بخط سميك', 'اكتب هذا النص بخط مائل', 'اكتب هذا النص بخط مخطط', 'اكتب هذا النص بخط سميك و مائل', 'اكتب هذا النص بخط مائل و سميك', 'اكتب هذا النص بخط سميك و مخطط', 'اكتب هذا النص بخط مخطط و سميك', 'اكتب هذا النص بخط مخطط و مائل', 'اكتب هذا النص بخط مائل و مخطط', 'اكتب هذا النص بخط سميك, مائل و مخطط', 'اكتب هذا النص بخط سميك, مخطط و مائل', 'اكتب هذا النص بخط مائل, سميك و مخطط', 'اكتب هذا النص بخط مائل, مخطط و سميك', 'اكتب هذا النص بخط مخطط, مائل و سميك', 'اكتب هذا النص بخط مخطط, سميك و مائل', 'طول النافذة', 'عرض النافذة', 'طول الشاشة', 'عرض الشاشة', 'ايقونة', "اسم المستخدم");
	$('ar-ar').remove();
} else if ($('ar-eg').length) {
	document.isRTL = true;
	$('html').attr('dir', 'rtl').attr('document.lang', 'ar');
	document.lang = 4;
	if (window.isChrome) {
		annyang.setLanguage('ar-EG');
	}
	code += "ضيف= $('body');" + $('ar-eg').html();
	code = code.replace(/ضيف /g, "ضيف.");
	code = code.replace(/ بالخواص دى:/g, "({");
	code = code.replace(/'\./g, "'});");
	code = code.replace(/"\./g, '"});');
	code = window.customText(code, 'اكتب الكلام دة بخط طخين', 'اكتب الكلام دة بخط مايل', 'اكتب الكلام دة بخط متخطط', 'اكتب الكلام دة بخط طخين و مايل', 'اكتب الكلام دة بخط مايل و طخين', 'اكتب الكلام دة بخط طخين و متخطط', 'اكتب الكلام دة بخط متخطط و طخين', 'اكتب الكلام دة بخط متخطط و مايل', 'اكتب الكلام دة بخط مايل و متخطط', 'اكتب الكلام دة بخط طخين, مايل و متخطط', 'اكتب الكلام دة بخط طخين, متخطط و مايل', 'اكتب الكلام دة بخط مايل, طخين و متخطط', 'اكتب الكلام دة بخط مايل, متخطط و طخين', 'اكتب الكلام دة بخط متخطط, مايل و طخين', 'اكتب الكلام دة بخط متخطط, طخين و مايل', 'طول النافذة', 'عرض النافذة', 'طول الشاشة', 'عرض الشاشة', 'ايكونة', "اسم المستخدم");
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
window.customText(code);
window.onload = function () {
	if (document.lang != null) {
		eval(code);
	}
};
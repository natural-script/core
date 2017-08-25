//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Declaring Some Variables------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var lang;
if (navigator.platform == 'Win32') {
	localAddress = 'localhost';
} else {
	localAddress = '0.0.0.0';
}
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
document.isRTL = false;
var corsPolicy = 'http://' + localAddress + ':6060/';
var shareThis = window.ShareThis;
var twitterSharer = window.ShareThisViaTwitter;
var facebookSharer = window.ShareThisViaFacebook;
var linkedInSharer = window.ShareThisViaLinkedIn;
var redditSharer = window.ShareThisViaReddit;
var emailSharer = window.ShareThisViaEmail;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------Initialization Of Jste Firebase------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var jsteFirebaseconfig = {
	apiKey: "AIzaSyDMGk_SFlEto93zfGHUbVLwxYiSq00aknk",
	authDomain: "jste-9584c.firebaseapp.com",
	databaseURL: "https://jste-9584c.firebaseio.com",
	storageBucket: "jste-9584c.appspot.com",
};
window.jsteFirebase = firebase.initializeApp(jsteFirebaseconfig, 'jsteFirebase');
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------Text Operators------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function customText(siteContents, keywordA, keywordB, keywordC, keywordD, keywordE, keywordF, keywordG, keywordH, keywordI, keywordJ, keywordK, keywordL, keywordM, keywordN, keywordO, keywordP, keywordQ, keywordR, keywordS, keywordT, keywordU) {
	var customTextsArrayA = siteContents.split('&lt;&lt; ' + keywordA + ': ');
	for (i = 1; i < customTextsArrayA.length; i++) {
		var customTextA = customTextsArrayA[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordA + ': ' + customTextA + ' &gt;&gt;', '<b>' + customTextA + '</b>');
	}
	var customTextsArrayB = siteContents.split('&lt;&lt; ' + keywordB + ': ');
	for (i = 1; i < customTextsArrayB.length; i++) {
		var customTextB = customTextsArrayB[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordB + ': ' + customTextB + ' &gt;&gt;', '<i>' + customTextB + '</i>');
	}
	var customTextsArrayC = siteContents.split('&lt;&lt; ' + keywordC + ': ');
	for (i = 1; i < customTextsArrayC.length; i++) {
		var customTextC = customTextsArrayC[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordC + ': ' + customTextC + ' &gt;&gt;', '<u>' + customTextC + '</u>');
	}
	var customTextsArrayD = siteContents.split('&lt;&lt; ' + keywordD + ': ');
	for (i = 1; i < customTextsArrayD.length; i++) {
		var customTextD = customTextsArrayD[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordD + ': ' + customTextD + ' &gt;&gt;', '<b><i>' + customTextD + '</b></i>');
	}
	var customTextsArrayE = siteContents.split('&lt;&lt; ' + keywordE + ': ');
	for (i = 1; i < customTextsArrayE.length; i++) {
		var customTextE = customTextsArrayE[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordE + ': ' + customTextE + ' &gt;&gt;', '<i><b>' + customTextE + '</i></b>');
	}
	var customTextsArrayF = siteContents.split('&lt;&lt; ' + keywordF + ': ');
	for (i = 1; i < customTextsArrayF.length; i++) {
		var customTextF = customTextsArrayF[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordF + ': ' + customTextF + ' &gt;&gt;', '<b><u>' + customTextF + '</b></u>');
	}
	var customTextsArrayG = siteContents.split('&lt;&lt; ' + keywordG + ': ');
	for (i = 1; i < customTextsArrayG.length; i++) {
		var customTextG = customTextsArrayG[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordG + ': ' + customTextG + ' &gt;&gt;', '<u><b>' + customTextG + '</u></b>');
	}
	var customTextsArrayH = siteContents.split('&lt;&lt; ' + keywordH + ': ');
	for (i = 1; i < customTextsArrayH.length; i++) {
		var customTextH = customTextsArrayH[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordH + ': ' + customTextH + ' &gt;&gt;', '<u><i>' + customTextH + '</u></i>');
	}
	var customTextsArrayI = siteContents.split('&lt;&lt; ' + keywordI + ': ');
	for (i = 1; i < customTextsArrayI.length; i++) {
		var customTextI = customTextsArrayI[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordI + ': ' + customTextI + ' &gt;&gt;', '<i><u>' + customTextI + '</i></u>');
	}
	var customTextsArrayJ = siteContents.split('&lt;&lt; ' + keywordJ + ': ');
	for (i = 1; i < customTextsArrayJ.length; i++) {
		var customTextJ = customTextsArrayJ[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordJ + ': ' + customTextJ + ' &gt;&gt;', '<b><i><u>' + customTextJ + '</b></i></u>');
	}
	var customTextsArrayK = siteContents.split('&lt;&lt; ' + keywordK + ': ');
	for (i = 1; i < customTextsArrayK.length; i++) {
		var customTextK = customTextsArrayK[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordK + ': ' + customTextK + ' &gt;&gt;', '<b><u><i>' + customTextK + '</b></u></i>');
	}
	var customTextsArrayL = siteContents.split('&lt;&lt; ' + keywordL + ': ');
	for (i = 1; i < customTextsArrayL.length; i++) {
		var customTextL = customTextsArrayL[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordL + ': ' + customTextL + ' &gt;&gt;', '<i><b><u>' + customTextL + '</i></b></u>');
	}
	var customTextsArrayM = siteContents.split('&lt;&lt; ' + keywordM + ': ');
	for (i = 1; i < customTextsArrayM.length; i++) {
		var customTextM = customTextsArrayM[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordM + ': ' + customTextM + ' &gt;&gt;', '<i><u><b>' + customTextM + '</i></u></b>');
	}
	var customTextsArrayN = siteContents.split('&lt;&lt; ' + keywordN + ': ');
	for (i = 1; i < customTextsArrayN.length; i++) {
		var customTextN = customTextsArrayN[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordN + ': ' + customTextN + ' &gt;&gt;', '<u><i><b>' + customTextN + '</u></i></b>');
	}
	var customTextsArrayO = siteContents.split('&lt;&lt; ' + keywordO + ': ');
	for (i = 1; i < customTextsArrayO.length; i++) {
		var customTextO = customTextsArrayO[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordO + ': ' + customTextO + ' &gt;&gt;', '<u><b><i>' + customTextO + '</u></b></i>');
	}
	var customTextsArrayP = siteContents.split('&lt;&lt; ' + keywordP + ' ');
	for (i = 1; i < customTextsArrayP.length; i++) {
		var customTextP = customTextsArrayP[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordP + ' &gt;&gt;', window.innerHeight);
	}
	var customTextsArrayQ = siteContents.split('&lt;&lt; ' + keywordQ + ' ');
	for (i = 1; i < customTextsArrayQ.length; i++) {
		var customTextQ = customTextsArrayQ[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordQ + ' &gt;&gt;', window.innerWidth);
	}
	var customTextsArrayR = siteContents.split('&lt;&lt; ' + keywordR + ' ');
	for (i = 1; i < customTextsArrayR.length; i++) {
		var customTextR = customTextsArrayR[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordR + ' &gt;&gt;', screen.height);
	}
	var customTextsArrayS = siteContents.split('&lt;&lt; ' + keywordS + ' ');
	for (i = 1; i < customTextsArrayS.length; i++) {
		var customTextS = customTextsArrayS[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordS + ' &gt;&gt;', screen.width);
	}
	var customTextsArrayT = siteContents.split('&lt;&lt; ' + keywordT + ' ');
	for (i = 1; i < customTextsArrayT.length; i++) {
		var customTextT = customTextsArrayT[i].split(' &gt;&gt;')[0];
		siteContents = siteContents.replace('&lt;&lt; ' + keywordT + ' ' + customTextT + ' &gt;&gt;', '<i class="fa fa-' + customTextT + '" aria-hidden="true"></i>');
	}
	return siteContents;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------Script Initialization------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var code = "jQuery(document).ready(function ($) { var ";
if ($('en-uk').length) {
	lang = 0;
	if (isChrome) {
		annyang.setLanguage('en-GB');
	}
	code += "add = $('body');" + $('en-uk').html();
	code = code.replace(/add a text/g, "add a text0");
	code = code.replace(/add a /g, "add.");
	code = code.replace(/add an /g, "add.");
	code = code.replace(/ with the following properties:/g, "({");
	code = code.replace(/'\./g, "'});");
	code = customText(code, 'write this text in a bold font', 'write this text in an italic font', 'write this text in an underlined font', 'write this text in a bold and italic font', 'write this text in an italic and bold font', 'write this text in a bold and underlined font', 'write this text in an underlined and bold font', 'write this text in an underlined and italic font', 'write this text in an italic and underlined font', 'write this text in a bold, italic and underlined font', 'write this text in a bold, underlined and italic font', 'write this text in an italic, bold and underlined font', 'write this text in an italic, underlined and bold font', 'write this text in an underlined, italic and bold font', 'write this text in an underlined, bold and italic font', 'the window length', 'the window width', 'the screen length', 'the screen width', 'an icon of', "the user's name");
	$('en-uk').remove();
} else if ($('en-us').length) {
	lang = 1;
	if (isChrome) {
		annyang.setLanguage('en-US');
	}
	code += "add= $('body');" + $('en-us').html();
	code = code.replace(/add a text/g, "add a text0");
	code = code.replace(/add a /g, "add.");
	code = code.replace(/add an /g, "add.");
	code = code.replace(/ with the following properties:/g, "({");
	code = code.replace(/'\./g, "'});");
	code = customText(code, 'write this text in a bold font', 'write this text in an italic font', 'write this text in an underlined font', 'write this text in a bold and italic font', 'write this text in an italic and bold font', 'write this text in a bold and underlined font', 'write this text in an underlined and bold font', 'write this text in an underlined and italic font', 'write this text in an italic and underlined font', 'write this text in a bold, italic and underlined font', 'write this text in a bold, underlined and italic font', 'write this text in an italic, bold and underlined font', 'write this text in an italic, underlined and bold font', 'write this text in an underlined, italic and bold font', 'write this text in an underlined, bold and italic font', 'the window length', 'the window width', 'the screen length', 'the screen width', 'an icon of', "the user's name");
	$('en-us').remove();
} else if ($('fr-fr').length) {
	lang = 2;
	if (isChrome) {
		annyang.setLanguage('fr-FR');
	}
	code += "ajouter= $('body');" + $('fr-fr').html();
	code = code.replace(/ajouter le /g, "ajouter.");
	code = code.replace(/ajouter la /g, "ajouter.");
	code = code.replace(/ajouter un /g, "ajouter.");
	code = code.replace(/ajouter une /g, "ajouter.");
	code = code.replace(/ avec les propriétés suivantes:/g, "({");
	code = code.replace(/'\./g, "'});");
	$('fr-fr').remove();
} else if ($('ar-ar').length) {
	document.isRTL = true;
	$('html').attr('dir', 'rtl').attr('lang', 'ar');
	lang = 3;
	if (isChrome) {
		annyang.setLanguage('ar-AE');
	}
	code += "اضف= $('body');" + $('ar-ar').html();
	code = code.replace(/اضف /g, "اضف.");
	code = code.replace(/ بالخواص التالية:/g, "({");
	code = code.replace(/'\./g, "'});");
	code = customText(code, 'اكتب هذا النص بخط سميك', 'اكتب هذا النص بخط مائل', 'اكتب هذا النص بخط مخطط', 'اكتب هذا النص بخط سميك و مائل', 'اكتب هذا النص بخط مائل و سميك', 'اكتب هذا النص بخط سميك و مخطط', 'اكتب هذا النص بخط مخطط و سميك', 'اكتب هذا النص بخط مخطط و مائل', 'اكتب هذا النص بخط مائل و مخطط', 'اكتب هذا النص بخط سميك, مائل و مخطط', 'اكتب هذا النص بخط سميك, مخطط و مائل', 'اكتب هذا النص بخط مائل, سميك و مخطط', 'اكتب هذا النص بخط مائل, مخطط و سميك', 'اكتب هذا النص بخط مخطط, مائل و سميك', 'اكتب هذا النص بخط مخطط, سميك و مائل', 'طول النافذة', 'عرض النافذة', 'طول الشاشة', 'عرض الشاشة', 'ايقونة', "اسم المستخدم");
	$('ar-ar').remove();
} else if ($('ar-eg').length) {
	document.isRTL = true;
	$('html').attr('dir', 'rtl').attr('lang', 'ar');
	lang = 4;
	if (isChrome) {
		annyang.setLanguage('ar-EG');
	}
	code += "ضيف= $('body');" + $('ar-eg').html();
	code = code.replace(/ضيف /g, "ضيف.");
	code = code.replace(/ بالخواص دى:/g, "({");
	code = code.replace(/'\./g, "'});");
	code = customText(code, 'اكتب الكلام دة بخط طخين', 'اكتب الكلام دة بخط مايل', 'اكتب الكلام دة بخط متخطط', 'اكتب الكلام دة بخط طخين و مايل', 'اكتب الكلام دة بخط مايل و طخين', 'اكتب الكلام دة بخط طخين و متخطط', 'اكتب الكلام دة بخط متخطط و طخين', 'اكتب الكلام دة بخط متخطط و مايل', 'اكتب الكلام دة بخط مايل و متخطط', 'اكتب الكلام دة بخط طخين, مايل و متخطط', 'اكتب الكلام دة بخط طخين, متخطط و مايل', 'اكتب الكلام دة بخط مايل, طخين و متخطط', 'اكتب الكلام دة بخط مايل, متخطط و طخين', 'اكتب الكلام دة بخط متخطط, مايل و طخين', 'اكتب الكلام دة بخط متخطط, طخين و مايل', 'طول النافذة', 'عرض النافذة', 'طول الشاشة', 'عرض الشاشة', 'ايكونة', "اسم المستخدم");
	$('ar-eg').remove();
} else if ($('ja-ja').length) {
	lang = 5;
	if (isChrome) {
		annyang.setLanguage('ja');
	}
	code += "追加する= $('body');" + $('ja-ja').html();
	$('ja-ja').remove();
}
code += "});";
customText(code);
$(function () {
	if (lang != null) {
		$('<script>').attr('type', 'text/javascript').text(code).appendTo('head');
		$('<iframe>').attr('id', 'receiver').attr('src', 'http://' + localAddress + ':5050/db-manager.html').hide().appendTo('body');
	}
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------Vanillia Fading In & Out Functions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// fade out
window.fadeOut = function (elementName) {
	var el = document.querySelector('#' + elementName + '');
	el.style.opacity = 1;
	(function fade() {
		if ((el.style.opacity -= .1) < 0) {
			el.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}
	})();
};
// fade in
window.fadeIn = function (elementName, display) {
	var el = document.querySelector('#' + elementName + '');
	el.style.opacity = 0;
	el.style.display = display || "block";
	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += .1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------Getting The URL Params------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function getAllUrlParams(url) {
	// get query string from url (optional) or window
	var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
	// we'll store the parameters here
	var obj = {};
	// if query string exists
	if (queryString) {
		// stuff after # is not part of query string, so get rid of it
		queryString = queryString.split('#')[0];
		// split our query string into its component parts
		var arr = queryString.split('&');
		for (var i = 0; i < arr.length; i++) {
			// separate the keys and the values
			var a = arr[i].split('=');
			// in case params look like: list[]=thing1&list[]=thing2
			var paramNum = undefined;
			var paramName = a[0].replace(/\[\d*\]/, function (v) {
				paramNum = v.slice(1, -1);
				return '';
			});
			// set parameter value (use 'true' if empty)
			var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
			// if parameter name already exists
			if (obj[paramName]) {
				// convert value to array (if still string)
				if (typeof obj[paramName] === 'string') {
					obj[paramName] = [obj[paramName]];
				}
				// if no array index number specified...
				if (typeof paramNum === 'undefined') {
					// put the value on the end of the array
					obj[paramName].push(paramValue);
				}
				// if array index number specified...
				else {
					// put the value at that index number
					obj[paramName][paramNum] = paramValue;
				}
			}
			// if param name doesn't exist yet, set it
			else {
				obj[paramName] = paramValue;
			}
		}
	}
	return obj;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------Settings The URL Params------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function setURLParameter(paramName, paramValue) {
	var url = window.location.href;
	var hash = location.hash;
	url = url.replace(hash, '');
	if (url.indexOf(paramName + "=") >= 0) {
		var prefix = url.substring(0, url.indexOf(paramName));
		var suffix = url.substring(url.indexOf(paramName));
		suffix = suffix.substring(suffix.indexOf("=") + 1);
		suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
		url = prefix + paramName + "=" + paramValue + suffix;
	} else {
		if (url.indexOf("?") < 0) url += "?" + paramName + "=" + paramValue;
		else url += "&" + paramName + "=" + paramValue;
	}
	window.history.pushState("", "", url + hash);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------Changing The Current Page------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function changePage(pageName) {
	if (decodeURIComponent(getAllUrlParams().page) != pageName) {
		window.fadeOut(decodeURIComponent(getAllUrlParams().page));
		window.fadeIn(pageName, 'inline-block');
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------Smooth Scrolling------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
$('a').click(function () {
	if ($(this).attr('href').indexOf('#') > -1) {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500);
	}
	return false;
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------Requesting The Files Sizes------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function getFileSize(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("HEAD", corsPolicy + url, true); // Notice "HEAD" instead of "GET",
	//  to get only the header
	xhr.onreadystatechange = function () {
		if (this.readyState == this.DONE) {
			size = parseInt(xhr.getResponseHeader("Content-Length"));
			if (size < 1000) {
				callback(size + ' Bytes');
			} else if (size < 1000000) {
				callback(Math.round(size / 1000 * 10) / 10 + ' kb');
			} else if (size < 1000000000) {
				callback(Math.round(size / 1000000 * 10) / 10 + ' mb');
			} else if (size < 1000000000000) {
				callback(Math.round(size / 1000000000 * 10) / 10 + ' gb');
			}
		}
	};
	xhr.send();
}
var emailSharer = window.ShareThisViaEmail;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------Evaluating Math Expressions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function evaluateExpression(expression) {
	var valNo = expression.match(RegExp(theValueOfTranslations[lang], "g"));
	var finalExpression = expression;
	var valueResource = '';
	var finalValue = '';
	if (valNo != null) {
		if (valNo.length > -1) {
			for (i = 0; i < valNo.length; i++) {
				if (lang == 0) {
					valueResource = finalExpression.split(theValueOfTranslations[lang])[1].split(' ')[1];
					finalValue = $('#' + valueResource + '').val();
					finalExpression = finalExpression.replace(theValueOfTranslations[lang] + ' ' + valueResource, finalValue);
				} else if (lang == 2) {
					valueResource = finalExpression.split(theValueOfTranslations[lang])[1].split(' ')[1];
					finalValue = $('#' + valueResource + '').val();
					finalExpression = finalExpression.replace(theValueOfTranslations[lang] + ' ' + valueResource, finalValue);
				} else if (lang == 3) {
					valueResource = finalExpression.split(theValueOfTranslations[lang])[1].split(' ')[1];
					finalValue = $('#' + valueResource + '').val();
					finalExpression = finalExpression.replace(theValueOfTranslations[lang] + ' ' + valueResource, finalValue);
				} else if (lang == 4) {
					valueResource = finalExpression.split(theValueOfTranslations[lang])[1].split(' ')[1];
					finalValue = $('#' + valueResource + '').val();
					finalExpression = finalExpression.replace(theValueOfTranslations[lang] + ' ' + valueResource, finalValue);
				} else if (lang == 5) {
					valueResource = finalExpression.split(theValueOfTranslations[lang])[1].split(' ')[1];
					finalValue = $('#' + valueResource + '').val();
					finalExpression = finalExpression.replace(theValueOfTranslations[lang] + ' ' + valueResource, finalValue);
				}
			}
		}
	}
	finalExpression = finalExpression.replace(/square root/g, 'sqrt').replace(/جذر/g, 'sqrt').replace(/multiplied by/g, '*').replace(/ضرب/g, '*').replace(/divided/g, '/').replace(/على/g, '/').replace(/جا/g, 'sin').replace(/جتا/g, 'cos').replace(/ظا/g, 'tan');
	return math.eval(finalExpression);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------Evaluating If Statements------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function evaluateStatement(statement) {
	var statementORParts = statement.split(' ' + orTranslations[lang] + ' ' + theValueOfTranslations[lang]);
	var finalStatement = '';
	var valueResource = '';
	for (var i = 0; i < statementORParts.length; i++) {
		var statementCurrentPart;
		if (i == 0) {
			statementCurrentPart = statementORParts[i];
		} else {
			statementCurrentPart = ' ' + theValueOfTranslations[lang] + '' + statementORParts[i];
			finalStatement += ' || ';
		}
		var statementANDParts = statementCurrentPart.split(' ' + andTranslations[lang] + ' ' + theValueOfTranslations[lang]);
		for (var k = 0; k < statementANDParts.length; k++) {
			if (lang == 0 || lang == 1) {
				var statementCurrentPart;
				if (k == 0) {
					statementCurrentPart = statementANDParts[k];
				} else {
					statementCurrentPart = ' ' + theValueOfTranslations[lang] + '' + statementANDParts[k];
					finalStatement += ' && ';
				}
				valueResource = statementCurrentPart.split(theValueOfTranslations[lang])[1].split(' ')[1];
				finalStatement += "$('#" + valueResource + "').val()";
				console.log(statementCurrentPart);

				if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'is' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'greater' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'smaller') {
					if (statementCurrentPart.split(valueResource)[1].split(' is ')[1].includes(theValueOfTranslations[lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' is ')[1].split(' ')[1] + ' ' + statementCurrentPart.split(valueResource)[1].split(' is ')[1].split(' ')[2] + ' ' + statementCurrentPart.split(valueResource)[1].split(' is ')[1].split(' ')[3] == theValueOfTranslations[lang]) {
							finalStatement += " == $('#" + statementCurrentPart.split(valueResource)[1].split(' is ')[1].split(theValueOfTranslations[lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " == '" + statementCurrentPart.split(valueResource)[1].split(' is ')[1] + "'";
						}
					} else {
						finalStatement += " == '" + statementCurrentPart.split(valueResource)[1].split(' is ')[1] + "'";
					}
				} else if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'is' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'greater' && statementCurrentPart.split(valueResource)[1].split(' ')[2] == 'smaller' && statementCurrentPart.split(valueResource)[1].split(' ')[3] == 'than') {
					if (statementCurrentPart.split(valueResource)[1].split(' is smaller than ')[1].includes(theValueOfTranslations[lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' is smaller than ')[1].split(' ')[1] == theValueOfTranslations[lang]) {
							finalStatement += " < $('#" + statementCurrentPart.split(valueResource)[1].split(' is smaller than ')[1].split(theValueOfTranslations[lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " < '" + statementCurrentPart.split(valueResource)[1].split(' is smaller than ')[1] + "'";
						}
					} else {
						finalStatement += " < '" + statementCurrentPart.split(valueResource)[1].split(' is smaller than ')[1] + "'";
					}
				} else if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'is' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'smaller' && statementCurrentPart.split(valueResource)[1].split(' ')[2] == 'greater' && statementCurrentPart.split(valueResource)[1].split(' ')[3] == 'than') {
					finalStatement += " > '" + statementCurrentPart.split(valueResource)[1].split(' is greater than ')[1] + "'";
				}
			} else if (lang == 2) {
				var statementCurrentPart;
				if (k == 0) {
					statementCurrentPart = statementANDParts[k];
				} else {
					statementCurrentPart = ' ' + theValueOfTranslations[lang] + '' + statementANDParts[k];
					finalStatement += ' && ';
				}
				valueResource = statementCurrentPart.split(theValueOfTranslations[lang])[1].split(' ')[1];
				finalStatement += "$('#" + valueResource + "').val()";
				console.log(statementCurrentPart);

				if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'est' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'supérieur' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'inférieure') {
					if (statementCurrentPart.split(valueResource)[1].split(' est ')[1].includes(theValueOfTranslations[lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' est ')[1].split(' ')[1] + ' ' + statementCurrentPart.split(valueResource)[1].split(' est ')[1].split(' ')[2] + ' ' + statementCurrentPart.split(valueResource)[1].split(' est ')[1].split(' ')[3] == theValueOfTranslations[lang]) {
							finalStatement += " == $('#" + statementCurrentPart.split(valueResource)[1].split(' est ')[1].split(theValueOfTranslations[lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " == '" + statementCurrentPart.split(valueResource)[1].split(' est ')[1] + "'";
						}
					} else {
						finalStatement += " == '" + statementCurrentPart.split(valueResource)[1].split(' est ')[1] + "'";
					}
				} else if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'est' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'supérieur' && statementCurrentPart.split(valueResource)[1].split(' ')[2] == 'inférieure' && statementCurrentPart.split(valueResource)[1].split(' ')[3] == 'à') {
					if (statementCurrentPart.split(valueResource)[1].split(' est inférieure à ')[1].includes(theValueOfTranslations[lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' est inférieure à ')[1].split(' ')[1] == theValueOfTranslations[lang]) {
							finalStatement += " < $('#" + statementCurrentPart.split(valueResource)[1].split(' est inférieure à ')[1].split(theValueOfTranslations[lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " < '" + statementCurrentPart.split(valueResource)[1].split(' est inférieure à ')[1] + "'";
						}
					} else {
						finalStatement += " < '" + statementCurrentPart.split(valueResource)[1].split(' est inférieure à ')[1] + "'";
					}
				} else if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'est' && statementCurrentPart.split(valueResource)[1].split(' ')[2] != 'inférieure' && statementCurrentPart.split(valueResource)[1].split(' ')[2] == 'supérieur' && statementCurrentPart.split(valueResource)[1].split(' ')[3] == 'à') {
					finalStatement += " > '" + statementCurrentPart.split(valueResource)[1].split(' est supérieur à ')[1] + "'";
				}
			} else if (lang == 3 || lang == 4) {
				var statementCurrentPart;
				if (k == 0) {
					statementCurrentPart = statementANDParts[k];
				} else {
					statementCurrentPart = ' ' + theValueOfTranslations[lang] + '' + statementANDParts[k];
					finalStatement += ' && ';
				}
				valueResource = statementCurrentPart.split(theValueOfTranslations[lang])[1].split(' ')[1];
				finalStatement += "$('#" + valueResource + "').val()";
				if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'تساوى') {
					if (statementCurrentPart.split(valueResource)[1].split(' تساوى ')[1].includes(theValueOfTranslations[lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' تساوى ')[1].split(' ')[1] == theValueOfTranslations[lang]) {
							finalStatement += " == $('#" + statementCurrentPart.split(valueResource)[1].split(' تساوى ')[1].split(theValueOfTranslations[lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " == '" + statementCurrentPart.split(valueResource)[1].split(' تساوى ')[1] + "'";
						}
					} else {
						finalStatement += " == '" + statementCurrentPart.split(valueResource)[1].split(' تساوى ')[1] + "'";
					}
				} else if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'اصغر' && statementCurrentPart.split(valueResource)[1].split(' ')[1] != 'اكبر' && statementCurrentPart.split(valueResource)[1].split(' ')[2] == 'من') {
					if (statementCurrentPart.split(valueResource)[1].split(' اصغر من ')[1].includes(theValueOfTranslations[lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' اصغر من ')[1].split(' ')[1] == theValueOfTranslations[lang]) {
							finalStatement += " < $('#" + statementCurrentPart.split(valueResource)[1].split(' اصغر من ')[1].split(theValueOfTranslations[lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " < '" + statementCurrentPart.split(valueResource)[1].split(' اصغر من ')[1] + "'";
						}
					} else {
						finalStatement += " < '" + statementCurrentPart.split(valueResource)[1].split(' اصغر من ')[1] + "'";
					}
				} else if (statementCurrentPart.split(valueResource)[1].split(' ')[1] == 'اكبر' && statementCurrentPart.split(valueResource)[1].split(' ')[1] != 'اصغر' && statementCurrentPart.split(valueResource)[1].split(' ')[2] == 'من') {
					if (statementCurrentPart.split(valueResource)[1].split(' اكبر من ')[1].includes(theValueOfTranslations[lang] + ' ')) {
						if (statementCurrentPart.split(valueResource)[1].split(' اكبر من ')[1].split(' ')[1] == theValueOfTranslations[lang]) {
							finalStatement += " > $('#" + statementCurrentPart.split(valueResource)[1].split(' اكبر من ')[1].split(theValueOfTranslations[lang] + ' ')[1] + "').val()";
						} else {
							finalStatement += " > '" + statementCurrentPart.split(valueResource)[1].split(' اكبر من ')[1] + "'";
						}
					} else {
						finalStatement += " > '" + statementCurrentPart.split(valueResource)[1].split(' اكبر من ')[1] + "'";
					}
				}
			} else if (lang == 5) {
				valueResource = finalExpression.split(theValueOfTranslations[lang])[1].split(' ')[1];
				finalValue = $('#' + valueResource + '').val();
				finalExpression = finalExpression.replace(theValueOfTranslations[lang] + ' ' + valueResource, finalValue);
			}
		}
	}
	console.log(finalStatement);

	return finalStatement;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------Raining FX Function------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function rain(elementName) {
	var image = document.getElementById(elementName);
	var container = document.getElementById(elementName + '_container');
	var engine = new RainyDay({
		image: image,
		parentElement: container
	});
	engine.rain([
		[1, 2, 8000]
	]);
	engine.rain([
		[3, 3, 0.88],
		[5, 5, 0.9],
		[6, 2, 1]
	], 100);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------Length Units Converter For CSS------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function convertLengthCSS(propertyValue) {
	return propertyValue.replace(RegExp(' ' + centimetersTranslations[lang], "g"), "cm").replace(RegExp(' ' + millimetersTranslations[lang], "g"), "mm").replace(RegExp(' ' + inchesTranslations[lang], "g"), "in").replace(RegExp(' ' + pixelsTranslations[lang], "g"), "px").replace(RegExp(' ' + pointsTranslations[lang], "g"), "pt").replace(RegExp(' ' + picasTranslations[lang], "g"), "pc").replace(RegExp(' ' + centimeterTranslations[lang], "g"), "cm").replace(RegExp(' ' + millimeterTranslations[lang], "g"), "mm").replace(RegExp(' ' + inchTranslations[lang], "g"), "in").replace(RegExp(' ' + pixelTranslations[lang], "g"), "px").replace(RegExp(' ' + pointTranslations[lang], "g"), "pt").replace(RegExp(' ' + picaTranslations[lang], "g"), "pc").replace(RegExp(' سم', "g"), "cm").replace(RegExp(' مم', "g"), "mm");
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------Setting The Distances Function------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function setDistance(name, direction, value) {
	if (direction == 'bottom') {
		if (value.includes('center')) {
			$('#' + name + '').css({
				'position': 'absolute',
				'bottom': '50%',
				'margin-bottom': function () {
					return -$(this).outerHeight() / 2;
				}
			});
			(function (name) {
				window.addEventListener('resize', function () {
					$('#' + name + '').css({
						'position': 'absolute',
						'bottom': '50%',
						'margin-bottom': function () {
							return -$(this).outerHeight() / 2;
						}
					});
				});
			})(name);
		} else {
			var bottomRatio = parseInt(value) / document.defaultWindowHeight;
			$('#' + name + '').css('bottom', convertLengthCSS(value));
			(function (bottomRatio, name) {
				window.addEventListener('resize', function () {
					$('#' + name + '').css('bottom', parseInt(bottomRatio * document.documentElement.clientHeight) + 'px');
				});
			})(bottomRatio, name);
		}
	} else if (direction == 'top') {
		if (value.includes('center')) {
			$('#' + name + '').css({
				'position': 'absolute',
				'top': '50%',
				'margin-top': function () {
					return -$(this).outerHeight() / 2;
				}
			});
			(function (name) {
				window.addEventListener('resize', function () {
					$('#' + name + '').css({
						'position': 'absolute',
						'top': '50%',
						'margin-top': function () {
							return -$(this).outerHeight() / 2;
						}
					});
				});
			})(name);
		} else {
			var topRatio = parseInt(value) / document.defaultWindowHeight;
			$('#' + name + '').css('top', convertLengthCSS(value));
			(function (topRatio, name) {
				window.addEventListener('resize', function () {
					$('#' + name + '').css('top', parseInt(topRatio * document.documentElement.clientHeight) + 'px');
				});
			})(topRatio, name);
		}
	} else if (direction == 'left') {
		if (value.includes('center')) {
			$('#' + name + '').css({
				'position': 'absolute',
				'left': '50%',
				'margin-left': function () {
					return -$(this).outerWidth() / 2;
				}
			});
			(function (name) {
				window.addEventListener('resize', function () {
					$('#' + name + '').css({
						'position': 'absolute',
						'left': '50%',
						'margin-left': function () {
							return -$(this).outerWidth() / 2;
						}
					});
				});
			})(name);
		} else {
			var leftRatio = parseInt(value) / document.defaultWindowWidth;
			$('#' + name + '').css('left', convertLengthCSS(value));
			(function (leftRatio, name) {
				window.addEventListener('resize', function () {
					$('#' + name + '').css('left', parseInt(leftRatio * document.documentElement.clientWidth) + 'px');
				});
			})(leftRatio, name);
		}
	} else if (direction == 'right') {
		if (value.includes('center')) {
			$('#' + name + '').css({
				'position': 'absolute',
				'right': '50%',
				'margin-right': function () {
					return -$(this).outerWidth() / 2;
				}
			});
			(function (name) {
				window.addEventListener('resize', function () {
					$('#' + name + '').css({
						'position': 'absolute',
						'right': '50%',
						'margin-right': function () {
							return -$(this).outerWidth() / 2;
						}
					});
				});
			})(name);
		} else {
			var rightRatio = parseInt(value) / document.defaultWindowWidth;
			$('#' + name + '').css('right', convertLengthCSS(value));
			(function (rightRatio, name) {
				window.addEventListener('resize', function () {
					$('#' + name + '').css('right', parseInt(rightRatio * document.documentElement.clientWidth) + 'px');
				});
			})(rightRatio, name);
		}
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------Setting The Dimensions Function------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function setDimension(name, dimension, value, type) {
	if (dimension == 'length') {
		if (type == 'img' || type == 'vid') {
			$('#' + name + '_container').css('height', convertLengthCSS(value));
			$('#' + name + '').height(parseInt(convertLengthCSS(value)));
			var lengthRatio = parseInt($('#' + name + '_container').outerHeight()) / document.defaultWindowLength;
			$('#' + name + '_container').css('height', parseInt(lengthRatio * document.documentElement.clientHeight) + 'px');
			$('#' + name + '').height(parseInt(lengthRatio * document.documentElement.clientHeight));
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				(function (lengthRatio, name) {
					window.addEventListener('resize', function () {
						$('#' + name + '_container').css('height', parseInt(lengthRatio * document.documentElement.clientHeight) + 'px');
						$('#' + name + '').height(parseInt(lengthRatio * document.documentElement.clientHeight));
					});
				})(lengthRatio, name);
			}
		} else {
			$('#' + name + '').css('height', convertLengthCSS(value));
			var lengthRatio = parseInt($('#' + name + '').outerHeight()) / document.defaultWindowLength;
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				$('#' + name + '').css('height', parseInt(lengthRatio * document.documentElement.clientHeight) + 'px');
				(function (lengthRatio, name) {
					window.addEventListener('resize', function () {
						$('#' + name + '').css('height', parseInt(lengthRatio * document.documentElement.clientHeight) + 'px');
					});
				})(lengthRatio, name);
			}
		}
	} else if (dimension == 'width') {
		if (type == 'img' || type == 'vid') {
			$('#' + name + '_container').css('width', convertLengthCSS(value));
			$('#' + name + '').width(parseInt(convertLengthCSS(value)));
			var widthRatio = parseInt($('#' + name + '_container').outerWidth()) / document.defaultWindowWidth;
			$('#' + name + '_container').css('width', parseInt(widthRatio * document.documentElement.clientWidth) + 'px');
			$('#' + name + '').width(parseInt(widthRatio * document.documentElement.clientWidth));
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				(function (widthRatio, name) {
					window.addEventListener('resize', function () {
						$('#' + name + '_container').css('width', parseInt(widthRatio * document.documentElement.clientWidth) + 'px');
						$('#' + name + '').width(parseInt(widthRatio * document.documentElement.clientWidth));
					});
				})(widthRatio, name);
			}
		} else {
			$('#' + name + '').css('width', convertLengthCSS(value));
			var widthRatio = parseInt($('#' + name + '').outerWidth()) / document.defaultWindowWidth;
			if ($('#' + name + '').prop("tagName") != 'PAPER-MATERIAL') {
				$('#' + name + '').css('width', parseInt(widthRatio * document.documentElement.clientWidth) + 'px');
				(function (widthRatio, name) {
					window.addEventListener('resize', function () {
						$('#' + name + '').css('width', parseInt(widthRatio * document.documentElement.clientWidth) + 'px');
					});
				})(widthRatio, name);
			}
		}
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------Requesting The Stored BLOBs------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function requestBLOB(name, type, url) {
	// Get the window displayed in the iframe.
	var receiver = document.getElementById('receiver').contentWindow;
	var sentMessageRaw = [];
	sentMessageRaw.name = name;
	sentMessageRaw.type = type;
	sentMessageRaw.url = url;
	receiver.postMessage(sentMessageRaw, 'http://' + localAddress + ':5050/db-manager.html');
}

window.addEventListener('message', function receiveMessage(recievedMessageRaw) {
	if (event.origin !== 'http://' + localAddress + ':5050') return;
	if (recievedMessageRaw.data.type == 'img' || recievedMessageRaw.data.type == 'vid') {
		var BLOBURL = window.URL.createObjectURL(recievedMessageRaw.data.BLOBObject);
		$('#' + recievedMessageRaw.data.name + '').attr('src', BLOBURL);
	}
}, false);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Images Related Functions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function showImageA(name, source) {
	var nudity = $('#' + name + '').attr('nude');
	var fx = $('#' + name + '').attr('fx');
	if (typeof nudity !== typeof undefined && nudity !== false) {
		window.fadeOut('showImage_' + name + '_containerA');
		window.fadeIn('showImage_' + name + '_containerB');
	} else {
		requestBLOB(name, 'vid', source);
		$('#' + name + '').on('load', function () {
			window.URL.revokeObjectURL($('#' + name + '').attr('src'));
			$('#' + name + '').css('-webkit-filter', 'blur(0px)');
			window.fadeOut('showImage_' + name + '_containerA');
			if (typeof fx !== typeof undefined && fx !== false) {
				if (fx == 'rain') {
					rain(name);
				}
			}
		});
	}
}

function showImageB(name, source) {
	requestBLOB(name, 'vid', source);
	$('#' + name + '').on('load', function () {
		window.URL.revokeObjectURL($('#' + name + '').attr('src'));
		window.fadeOut('showImage_' + name + '_containerB');
		window.fadeIn('showImage_' + name + '_containerC');
	});
}

function showImageC(name, source) {
	requestBLOB(name, 'vid', source);
	$('#' + name + '').on('load', function () {
		window.URL.revokeObjectURL($('#' + name + '').attr('src'));
		$('#' + name + '').css('-webkit-filter', 'blur(0px)');
		window.fadeOut('showImage_' + name + '_containerB');
		if (typeof fx !== typeof undefined && fx !== false) {
			if (fx == 'rain') {
				rain(name);
			}
		}
	});
}

function showImageD(name) {
	$('#' + name + '').css('-webkit-filter', 'blur(0px)');
	window.fadeOut('showImage_' + name + '_containerC');
	if (typeof fx !== typeof undefined && fx !== false) {
		if (fx == 'rain') {
			rain(name);
		}
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Videos Related Functions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function showVideoA(name, source) {
	var v = document.getElementById(name);
	requestBLOB(name, 'vid', source);
	var videoLoadingChecker = setInterval(function () {
		if (v.readyState === 4) {
			window.URL.revokeObjectURL($('#' + name + '').attr('src'));
			$('#' + name + '').attr('controls', '');
			window.fadeOut('showVideo_' + name + '_containerA');
			$('#' + name + '').css('-webkit-filter', 'blur(0px)');
			clearInterval(videoLoadingChecker);
		}
	}, 1);
}

function showVideoB(name) {
	$('#' + name + '').css('-webkit-filter', 'blur(0px)');
	window.fadeOut('showVideo_' + name + '_containerB');
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------Viewport Detection------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function isElementOutViewport(el) {
	var rect = el.getBoundingClientRect();
	return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------Properties Translations------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var yesTranslations = ['yes', 'yup', 'oui', 'نعم', 'ايوة', 'はい'];
var noTranslations = ['no', 'nope', 'non', 'لا', 'لأ', 'いいえ'];
var andTranslations = ['and', 'and', 'et', 'و', 'و', 'そして'];
var orTranslations = ['or', 'or', 'ou', 'أو', 'أو', 'または'];
var blackTranslations = ['black', 'black', 'noir', 'اسود', 'اسود', '黒'];
var redTranslations = ['red', 'red', 'rouge', 'احمر', 'احمر', '赤'];
var blueTranslations = ['blue', 'blue', 'bleu', 'ازرق', 'ازرق', '青'];
var cyanTranslations = ['cyan', 'cyan', 'cyan', 'سماوى', 'لبنى', 'シアン'];
var grayTranslations = ['gray', 'gray', 'gris', 'رصاصى', 'فرانى', 'グレー'];
var greenTranslations = ['green', 'green', 'vert', 'اخضر', 'اخضر', '緑'];
var whiteTranslations = ['white', 'white', 'blanc', 'ابيض', 'ابيض', '白'];
var orangeTranslations = ['orange', 'orange', 'orange', 'برتقالى', 'برتقانى', 'オレンジ'];
var yellowTranslations = ['yellow', 'yellow', 'jaune', 'اصفر', 'اصفر', '黄'];
var brownTranslations = ['brown', 'brown', 'marron', 'بنى', 'بنى', '褐色', '棕色', '棕色'];
var tealTranslations = ['teal', 'teal', 'sarcelle', 'تركواز', 'تركواز', 'ティール'];
var pinkTranslations = ['pink', 'pink', 'rose', 'زهرى', 'بمبى', 'ピンク'];
var lightGreenTranslations = ['light green', 'light green', 'Vert clair', 'اخضر فاتح', 'اخضر فاتح', 'ライトグリーン'];
var colorTranslations = ['colour', 'color', 'couleur', 'اللون', 'اللون', 'カラー'];
var withPinTranslations = ['with a pin', 'with a pin', 'épingle', 'بدبوس', 'بدبوس', 'ピン'];
var animationTranslations = ['animation', 'animation', 'animation', 'الحركة', 'الحركة', 'アニメーション'];
var commandsTranslations = ['commands', 'commands', 'commandes', 'الأوامر', 'الأوامر', 'コマンド'];
var sliderTranslations = ['slider', 'slider', 'curseur', 'منزلق', 'منزلق', 'スライダー'];
var buttonTranslations = ['button', 'button', 'curseur', 'زر', 'زرار', 'ボタン'];
var FABTranslations = ['FAB', 'FAB', 'épingle', 'دبوس', 'دبوس', 'ピン'];
var colorsPaletteTranslations = ['colours_palette', 'colors_palette', 'palette_de_couleurs', 'لوحة_الوان', 'بلتة_الوان', 'カラーパレット'];
var textFnTranslations = ['text0', 'text0', 'texte', 'نص', 'كلام', 'テキスト'];
var buttonWithAnIconTranslations = ['button_with_an_icon', 'button_with_an_icon', 'bouton_avec_icône', 'زر_بأيقونة', 'زرار_بأيكونة', 'アイコン付きボタン'];
var iconTranslations = ['icon', 'icon', 'icône', 'ايقونة', 'ايكونة', 'アイコン'];
var imageTranslations = ['image', 'image', 'image', 'صورة', 'صورة', 'ピクチャー'];
var videoTranslations = ['video', 'video', 'vidéo', 'فيديو', 'فيديو', 'ビデオ'];
var audioTranslations = ['audio', 'audio', "l'audio", 'صوت', 'صوت', 'オーディオ'];
var writingZoneTranslations = ['writing_zone', 'writing_zone', 'champ_de_texte', 'صندوق_النص', 'مكان_الكتابة', 'テキストボックス'];
var sectionTranslations = ['section', 'section', 'section', 'دبوس', 'دبوس', 'セクション'];
var checkboxTranslations = ['checkbox', 'checkbox', 'case_à_cocher', 'دبوس', 'دبوس', 'チェックボックス'];
var spinnerTranslations = ['spinner', 'spinner', 'fileur', 'دوار', 'دوار', 'スピナー'];
var barTranslations = ['bar', 'bar', 'bar', 'شريط', 'شريط', 'バー'];
var loaderTranslations = ['loader', 'loader', 'chargeur', 'دبوس', 'دبوس', 'ローダ'];
var notificationCountTranslations = ['notification_count', 'notification_count', 'ىombre_de_notifications', 'عدد_الإشعارات', 'عدد_الإشعارات', '通知回数'];
var dialogBoxTranslations = ['dialog_box', 'dialog_box', 'épingle', 'دبوس', 'دبوس', 'ピン'];
var dropdownTranslations = ['dropdown_menu', 'dropdown_menu', 'menu_déroulant', 'دبوس', 'دبوس', 'ピン'];
var backgroundTranslations = ['background', 'background', 'contexte', 'الخلفية', 'الخلفية', 'ピン'];
var tooltipTranslations = ['tooltip', 'tooltip', 'info-bulle', 'الخلفية', 'الخلفية', 'ツールチップ'];
var textTranslations = ['text', 'text', 'texte', 'النص', 'الكلام', 'テキスト'];
var widthTranslations = ['width', 'width', 'largeur', 'العرض', 'العرض', '幅'];
var lengthTranslations = ['length', 'length', 'longueur', 'الطول', 'الطول', '長さ'];
var positionTranslations = ['position', 'position', 'position', 'المكان', 'المكان', 'ポジション'];
var distanceFromLeftTranslations = ['distance_from_the_left', 'distance_from_the_left', 'distance_à_partir_de_la_gauche', 'المسافة_من_الشمال', 'المسافة_من_الشمال', '左からの距離'];
var distanceFromRightTranslations = ['distance_from_the_right', 'distance_from_the_right', 'distance_à_partir_de_la_droit', 'المسافة_من_اليمين', 'المسافة_من_اللمين', '右からの距離'];
var distanceFromTopTranslations = ['distance_from_the_top', 'distance_from_the_top', 'distance_à_partir_de_le_haut', 'المسافة_من_أعلى', 'المسافة_من_فوق', '上からの距離'];
var distanceFromBottomTranslations = ['distance_from_the_bottom', 'distance_from_the_bottom', 'distance_à_partir_de_le_fond', 'المسافة_من_اسفل', 'المسافة_من_تحت', '底からの距離'];
var firebaseCenterTranslations = ['firebase_centre', 'firebase_center', 'emplacement_central', 'مركز_البيانات', 'مركز_البيانات', 'ピン'];
var usernameTranslations = ['username', 'username', "nom_d'utilisateur", 'اسم_المستخدم', 'اسم_المستخدم', 'ピン'];
var passwordTranslations = ['password', 'password', 'mot_de_passe', 'كلمة_المرور', 'كلمة_السر', 'ピン'];
var setupTranslations = ['setup', 'setup', 'installer', 'الإعدادات', 'الإعدادات', 'セットアップ'];
var logoTranslations = ['logo', 'logo', 'logo', 'الشعار', 'اللوجو', 'ロゴ'];
var titleTranslations = ['title', 'title', 'titre', 'العنوان', 'العنوان', 'タイトル'];
var modeTranslations = ['mode', 'mode', 'mode', 'الوضعية', 'المود', 'モード'];
var pageTranslations = ['page', 'page', 'page', 'صفحة', 'صفحة', 'ページ'];
var nameTranslations = ['name', 'name', 'prénom', 'الاسم', 'الاسم', '名'];
var transparencyTranslations = ['transparency', 'transparency', 'transparence', 'الشفافية', 'الشفافية', '透明性'];
var fontSizeTranslations = ['font_size', 'font_size', 'taille_de_la_police', 'حجم_الخط', 'حجم_الخط', 'フォントサイズ'];
var thicknessTranslations = ['thickness', 'thickness', 'épaisseur', 'السمك', 'الطخن', '厚さ'];
var switchedTranslations = ['switched', 'switched', 'commuté', 'مفتوح', 'مفتوح', 'スイッチされる'];
var raisedTranslations = ['raised', 'raised', 'élevé', 'مرفوع', 'مرفوع', '育てられる'];
var disabledTranslations = ['disabled', 'disabled', 'désactivée', 'معطل', 'مقفول', '無効'];
var fontStyleTranslations = ['font_style', 'font_style', 'le_style_de_police', 'شكل_الخط', 'شكل_الخط', 'フォントスタイル'];
var fontColorTranslations = ['font_colour', 'font_color', 'couleur_de_la_police', 'لون_الخط', 'لون_الخط', 'フォントの色'];
var bodyTranslations = ['body', 'body', 'corps', 'جسم', 'جسم', '体'];
var rippleTranslations = ['ripple', 'ripple', 'ondulation', 'تموج', 'تموج', '波紋'];
var minTranslations = ['min', 'min', 'min', 'الحد_الأدنى', 'الحد_الأدنى', '最小'];
var maxTranslations = ['max', 'max', 'max', 'الحد_الأقصى', 'الحد_الأقصى', '最大'];
var requirementTranslations = ['requirement', 'requirement', 'exigence', 'المطلوب', 'المطلوب', '要件'];
var typeTranslations = ['type', 'type', 'type', 'النوع', 'النوع', 'タイプ'];
var dynamicSizeTranslations = ['dynamic_size', 'dynamic_size', 'taille_dynamique', 'مقاس_متغير', 'مقاس_متغير', '動的なサイズ'];
var clearButtonTranslations = ['clear_button', 'clear_button', 'bouton_de_suppression', 'زر_الحذف', 'زرار_المسح', '削除ボタン'];
var suffixTranslations = ['suffix', 'suffix', 'suffixe', 'النهاية', 'النهاية', 'サフィックス'];
var prefixTranslations = ['prefix', 'prefix', 'préfixe', 'البداية', 'البداية', 'プレフィックス'];
var stepTranslations = ['step', 'step', 'étape', 'الخطوة', 'الخطوة', 'ステップ'];
var progressTranslations = ['progress', 'progress', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン'];
var valueBoxTranslations = ['value_box', 'value_box', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン'];
var iconColorTranslations = ['icon_colour', 'icon_color', "couleur_de_l'icône", 'لون_الأيقونة', 'لون_الأيكونة', 'アイコンの色'];
var imageSourceTranslations = ['image_source', 'image_source', "source_de_image", 'مصدر_الصورة', 'مصدر_الصورة', 'イメージソース'];
var FXTranslations = ['FX', 'FX', 'FX', 'FX', 'FX', 'FX'];
var emitterTranslations = ['emitter', 'emitter', 'émetteur', 'باعث', 'باعث', 'エミッタ'];
var directionTranslations = ['direction', 'direction', 'direction', 'الإتجاه', 'الإتجاه', '方向'];
var loadingTranslations = ['loading', 'loading', 'chargement', 'يحمل', 'بيحمل', '読み込み中'];
var imageWidthTranslations = ['image_width', 'image_width', "largeur_de_l'image", 'عرض_الصورة', 'عرض_الصورة', '画像の幅'];
var imageLengthTranslations = ['image_length', 'image_length', "longueur_de_l'image", 'طول_الصورة', 'طول_الصورة', '画像の長さ'];
var videoWidthTranslations = ['video_width', 'video_width', "largeur_de_la_vidéo", 'عرض_الفيديو', 'عرض_الفيديو', 'ビデオの幅'];
var videoLengthTranslations = ['video_length', 'video_length', "longueur_de_la_vidéo", 'طول_الفيديو', 'طول_الفيديو', 'ビデオの長さ'];
var sourceTranslations = ['source', 'source', "la_source", 'المصدر', 'المصدر', 'ソース'];
var itemsTranslations = ['items', 'items', "articles", 'العناصر', 'العناصر', 'アイテム'];
var descriptionTranslations = ['description', 'description', "la_description", 'الوصف', 'الوصف', '説明'];
var privateTranslations = ['private', 'private', "privé", 'خاص', 'خاص', 'プライベート'];
var loginFormTranslations = ['login_form', 'login_form', "formulaire_de_connexion", 'خاص', 'فورم_الدخول', 'ログインフォーム'];
var targetTranslations = ['target', 'target', "cible", 'الهدف', 'الهدف', 'ターゲット'];
var containerTranslations = ['container', 'container', "récipient", 'حاوية', 'طبق', 'コンテナ'];
var shapeTranslations = ['shape', 'shape', "forme", 'الشكل', 'الشكل', '形状'];
var triangleTranslations = ['triangle', 'triangle', "triangle", 'مثلث', 'مثلث', '三角形'];
var trapezoidTranslations = ['trapezoid', 'trapezoid', "trapézoïdal", 'شبه_منحرف', 'شبه_منحرف', '台形'];
var parallelogramTranslations = ['parallelogram', 'parallelogram', "parallélogramme", 'متوازى_الأضلاع', 'متوازى_الأضلاع', '平行四辺形'];
var rhombusTranslations = ['rhombus', 'rhombus', "rhombe", 'معين', 'معين', '菱形'];
var pentagonTranslations = ['pentagon', 'pentagon', "pentagone", 'خماسى_الأضلاع', 'خماسى_الأضلاع', '五角形'];
var hexagonTranslations = ['hexagon', 'hexagon', "hexagone", 'سداسى_الأضلاع', 'سداسى_الأضلاع', '六角形'];
var heptagonTranslations = ['heptagon', 'heptagon', "heptagone", 'سباعى_الأضلاع', 'سباعى_الأضلاع', 'ヘプタゴン'];
var octagonTranslations = ['octagon', 'octagon', "octagone", 'ثمانى_الأضلاع', 'ثمانى_الأضلاع', '八角形'];
var decagonTranslations = ['decagon', 'decagon', "décagone", 'معشر_الأضلاع', 'معشر_الأضلاع', 'デカゴン'];
var circleTranslations = ['circle', 'circle', "cercle", 'دائرة', 'دايرة', 'サークル'];
var ellipseTranslations = ['ellipse', 'ellipse', "ellipse", 'بيضاوى', 'بيضاوى', '楕円'];
var fromTheRightTranslations = ['from_the_right', 'from_the_right', "à_partir_de_la_droite", 'من_اليمين', 'من_اللمين', '右から'];
var fromTheLeftTranslations = ['from_the_left', 'from_the_left', "à_partir_de_la_gauche", 'من_الشمال', 'من_الشمال', '左から'];
var fromTheTopTranslations = ['from_the_top', 'from_the_top', "à_partir_de_le_haut", 'من_فوق', 'من_فوق', '上から'];
var fromTheBottomTranslations = ['from_the_bottom', 'from_the_bottom', "à_partir_de_le_fond", 'من_أسفل', 'من_أسفل', '下から'];
var attributesTranslations = ['attributes', 'attributes', "les_attributs", 'الصفات', 'الصفات', '属性'];
var gridTranslations = ['grid', 'grid', "les_attributs", 'شبكة', 'شبكة', '属性'];
var shareableTranslations = ['shareable', 'shareable', "les_attributs", 'الصفات', 'الصفات', '属性'];
var remoteScrollingTranslations = ['remote scrolling', 'remote scrolling', "défilement à distance", 'التمرير عن بعد', 'التمرير عن بعد', '属性'];
var parallaxTranslations = ['parallax', 'parallax', "les_attributs", 'الصفات', 'الصفات', '属性'];
var centimeterTranslations = ['centimetre', 'centimeter', "centimètre", 'سنتيمتر', 'سنتيمتر', 'センチメートル'];
var millimeterTranslations = ['millimetre', 'millimeter', "millimètre", 'ملليمتر', 'ملليمتر', 'ミリメートル'];
var inchTranslations = ['inch', 'inch', "pouce", 'بوصة', 'بوصة', 'インチ'];
var pixelTranslations = ['pixel', 'pixel', "pixel", 'بكسل', 'بكسل', 'ピクセル'];
var pointTranslations = ['point', 'point', "point", 'نقطة', 'نقطة', 'ポイント'];
var picaTranslations = ['pica', 'pica', "pica", 'بيكا', 'بيكا', 'パイカ'];
var centimetersTranslations = ['centimetres', 'centimeters', "centimètres", 'سنتيمتر', 'سنتيمتر', 'センチメートル'];
var millimetersTranslations = ['millimetres', 'millimeters', "millimètres", 'ملليمتر', 'ملليمتر', 'ミリメートル'];
var inchesTranslations = ['inches', 'inches', "pouces", 'بوصة', 'بوصة', 'インチ'];
var pixelsTranslations = ['pixels', 'pixels', "pixels", 'بكسل', 'بكسل', 'ピクセル'];
var pointsTranslations = ['points', 'points', "points", 'نقطة', 'نقطة', 'ポイント'];
var picasTranslations = ['picas', 'picas', "picas", 'بيكا', 'بيكا', 'パイカ'];
var authorTranslations = ['author', 'author', "auteur", 'الفنان', 'الفنان', '著者'];
var coverTranslations = ['cover', 'cover', "couverture", 'الغلاف', 'الغلاف', 'カバー'];
var autoplayTranslations = ['autoplay', 'autoplay', "couverture", 'يبدأ تلقائيا', 'بيشتغل الوحده', 'カバー'];
var audioPlayerTranslations = ['audio_player', 'audio_player', "lecteur_audio", 'مشغل_الصوت', 'مشغل_الصوت', 'オーディオプレーヤー'];
var theValueOfTranslations = ['the value of', 'the value of', "la valeur de", 'قيمة', 'قيمة', 'の価値'];
var thickTranslations = ['thick', 'thick', "épais", 'سميك', 'طخين', '厚い'];
var publicCTranslations = ['public', 'public', "publique", 'العامة', 'العامة', 'パブリック'];
var privateCTranslations = ['private', 'private', "privée", 'الخاصة', 'الخاصة', 'プライベート'];
var tableTranslations = ['table', 'table', "tableau", 'جدول', 'جدول', '表'];
var dataTranslations = ['data', 'data', "les_données", 'البيانات', 'البيانات', 'データ'];
var inTheCellTranslations = ['in the cell', 'in the cell', "dans la cellule", 'فى الخلية', 'فى الخانة', 'セル'];
var inTheGroupTranslations = ['in the group', 'in the group', "dans la cellule", 'فى الخلية', 'فى الخانة', 'セル'];
var slideShowTranslations = ['slideshow', 'slideshow', "dans la cellule", 'فى الخلية', 'فى الخانة', 'セル'];
var slideShowItemTranslations = ['slideshow_item', 'slideshow_item', "dans la cellule", 'فى الخلية', 'فى الخانة', 'セル'];
var acceptanceButtonTranslations = ['acceptance_button', 'acceptance_button', "Bouton_d'acceptation", 'زر_الموافقة', 'زرار_الموافقة', '受諾ボタン'];
var cancellationButtonTranslations = ['cancellation_button', 'cancellation_button', "Bouton_d'annulation", 'زر_الإلغاء', 'زرار_الإلغاء', 'キャンセルボタン'];
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------Commands Translations------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function commandsFnTranslations(commandCode, eventRaw, commandValue, para1Raw, para2Raw, para3Raw, para4Raw, para5Raw) {
	if (lang == 0) {
		this.E1 = 'When it has been clicked, ';
		this.E2 = 'When the mouse pointer has been moved over it, ';
		this.E3 = 'When the mouse pointer has been moved away from it, ';
		this.E4 = 'When the mouse pointer is being moved out of it, ';
		this.E5 = 'When the mouse pointer is being moved over it, ';
		this.E6 = 'When it is no longer clicked, ';
		this.E7 = 'When it has been double clicked, ';
		this.E8 = 'When it has been right clicked, ';
		this.E9 = 'When a key has been pressed while focusing it, ';
		this.E10 = 'When a key is being pressed while focusing it, ';
		this.E11 = 'When its contents have been modified, ';
		this.E12 = 'When it has been focused, ';
		this.E13 = 'When it is being focused, ';
		this.E14 = 'When it is no longer focused, ';
		this.E15 = 'When the data of this form has been sent, ';
		this.E16 = 'When it has been scrolled, ';
		this.E17 = 'When the user said: ';
	} else if (lang == 1) {
		this.E1 = 'When it has been clicked, ';
		this.E2 = 'When the mouse pointer has been moved over it, ';
		this.E3 = 'When the mouse pointer has been moved away from it, ';
		this.E4 = 'When the mouse pointer is being moved out of it, ';
		this.E5 = 'When the mouse pointer is being moved over it, ';
		this.E6 = 'When it is no longer clicked, ';
		this.E7 = 'When it has been double clicked, ';
		this.E8 = 'When it has been right clicked, ';
		this.E9 = 'When a key has been pressed while focusing it, ';
		this.E10 = 'When a key is being pressed while focusing it, ';
		this.E11 = 'When its contents have been modified, ';
		this.E12 = 'When it has been focused, ';
		this.E13 = 'When it is being focused, ';
		this.E14 = 'When it is no longer focused, ';
		this.E15 = 'When the data of this form has been sent, ';
		this.E16 = 'When it has been scrolled, ';
		this.E17 = 'When the user said: ';
	} else if (lang == 2) {
		this.E1 = 'Quand il a été cliqué, ';
		this.E2 = "Lorsque le pointeur de souris a été déplacé au dessus, ";
		this.E3 = "Lorsque le pointeur de la souris s'a été éloigné de lui, ";
		this.E4 = "Lorsque le pointeur de la souris se est en train d'être déplace hors de lui, ";
		this.E5 = 'Lorsque le pointeur de la souris se déplace au dessus, ';
		this.E6 = "Quand il n'est plus fait cliqué, ";
		this.E7 = 'Quand il a été double-cliqué, ';
		this.E8 = 'Quand il a été droit-cliqué, ';
		this.E9 = "Lorsqu'une touche a été pressée tout en la focalisant, ";
		this.E10 = "Lorsqu'une touche est en train d'être pressée tout en la focalisant, ";
		this.E11 = 'Lorsque son contenu a été modifié, ';
		this.E12 = "Lorsqu'on a été focalisé, ";
		this.E13 = "Quand il est en train d'être focalisé, ";
		this.E14 = 'Quand il a dormi, ';
		this.E15 = 'Lorsque les données de ce formulaire ont été envoyées, ';
		this.E16 = "Lorsqu'il s'a été déroulé, ";
		this.E17 = "Si l'utilisateur a dit: ";
	} else if (lang == 3) {
		this.E1 = 'إذا نقر عليه, ';
		this.E2 = 'إذا مر به مؤشر الفأرة, ';
		this.E3 = 'إذا خرج مؤشر الفأرة منه, ';
		this.E4 = 'إذا كان مؤشر الفأرة يمر خارجه, ';
		this.E5 = 'إذا كان مؤشر الفأرة يمر به, ';
		this.E6 = 'إذا تم الإنتهاء من النقر عليه, ';
		this.E7 = 'إذا نقر عليه نقرتين مزدوجتين, ';
		this.E8 = 'إذا نقر عليه بالزر الأيمن,';
		this.E9 = 'إذا ضغط على زر اثناء نشاطه, ';
		this.E10 = 'إذا كان هناك زر يتم الضغط عليه اثناء نشاطه, ';
		this.E11 = 'إذا تغيرت محتوياته, ';
		this.E12 = 'إن أصبح نشطا, ';
		this.E13 = 'إذا كان نشطا, ';
		this.E14 = 'إن أصبح خاملا, ';
		this.E15 = 'إذا ارسلت بيانات هذه الإستمارة, ';
		this.E16 = 'إن تم تمريره, ';
		this.E17 = 'إذا قال المستخدم: ';
	} else if (lang == 4) {
		this.E1 = 'لما يضغط عليه, ';
		this.E2 = 'لما الماوس يعدى من فوقيه, ';
		this.E3 = 'لما الماوس يطلع منه, ';
		this.E4 = 'لما الماوس يكون بيمشى براه, ';
		this.E5 = 'لما الماوس يكون بيمشى فوقيه, ';
		this.E6 = 'لما يخلص الدوس عليه, ';
		this.E7 = 'لما يضغط عليه دبل كليك, ';
		this.E8 = 'لما يضغط عليك كليك لمين, ';
		this.E9 = 'لو زرار اضغط و هوة نشط, ';
		this.E10 = 'لما زرار يكون بيضغط و هوة نشط, ';
		this.E11 = 'لما محتوياته تتغير, ';
		this.E12 = 'لما يبقى نشط, ';
		this.E13 = 'لما يكون نشط, ';
		this.E14 = 'لما ينام, ';
		this.E15 = 'لما الداتا بتاعت الفورم دة تتبعت, ';
		this.E16 = 'لما يتمرر, ';
		this.E17 = 'لو المستخدم قال: ';
	} else if (lang == 5) {
		this.E1 = 'それがクリックされた場合には、 ';
		this.E2 = 'マウスポインタがその上に移動されると、 ';
		this.E3 = 'マウスポインタがそれを離れると、 ';
		this.E4 = 'When the mouse pointer is being moved out of it, ';
		this.E5 = 'When the mouse pointer is being moved over it, ';
		this.E6 = 'それがもはやクリックされないと、 ';
		this.E7 = 'それがダブルクリックされたときに、 ';
		this.E8 = 'それが右クリックされたときに、 ';
		this.E9 = 'When a key pressed while focusing it, ';
		this.E10 = 'When a key is being pressed while focusing it, ';
		this.E11 = 'その内容が変更されたとき、';
		this.E12 = 'それがフォーカスされたときに、 ';
		this.E13 = 'When it is being focused, ';
		this.E14 = 'When it is no longer focused, ';
		this.E15 = 'この形式のデータが送られたときに、 ';
		this.E16 = 'それがスクロールされると、';
		this.E17 = 'ユーザーが言った場合：';
	}
	if (eventRaw == 'E17') {
		var event = this[eventRaw] + para1Raw + ', ';
		var para1 = para2Raw;
		var para2 = para3Raw;
		var para3 = para4Raw;
		var para4 = para5Raw;
	} else {
		var event = this[eventRaw];
		var para1 = para1Raw;
		var para2 = para2Raw;
		var para3 = para3Raw;
		var para4 = para4Raw;
	}
	if (commandCode == 'c1') {
		if (lang == 0) {
			return commandValue.split(this[eventRaw]);
		} else if (lang == 1) {
			return commandValue.split(this[eventRaw]);
		} else if (lang == 2) {
			return commandValue.split(this[eventRaw]);
		} else if (lang == 3) {
			return commandValue.split(this[eventRaw]);
		} else if (lang == 4) {
			return commandValue.split(this[eventRaw]);
		} else if (lang == 5) {
			return commandValue.split(this[eventRaw]);
		}
	} else if (commandCode == 'c2q') {
		if (lang == 0) {
			return commandValue.split(event)[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split(event)[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split(event)[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split(event)[1].split(' ')[0].split('ه')[0];
		} else if (lang == 4) {
			return commandValue.split(event)[1].split(' ')[0].split('ه')[0];
		} else if (lang == 5) {
			return commandValue.split(event)[1].split(' ')[0];
		}
	} else if (commandCode == 'c2ruA') {
		if (lang == 0) {
			return 'remove';
		} else if (lang == 1) {
			return 'remove';
		} else if (lang == 2) {
			return 'supprimer';
		} else if (lang == 3) {
			return 'احذف';
		} else if (lang == 4) {
			return 'امسح';
		} else if (lang == 5) {
			return 'を削除';
		}
	} else if (commandCode == 'c2ruB') {
		if (lang == 0) {
			return 'play';
		} else if (lang == 1) {
			return 'play';
		} else if (lang == 2) {
			return 'lecture';
		} else if (lang == 3) {
			return 'شغل';
		} else if (lang == 4) {
			return 'شغل';
		} else if (lang == 5) {
			return 'lecture';
		}
	} else if (commandCode == 'c2ruC') {
		if (lang == 0) {
			return 'pause';
		} else if (lang == 1) {
			return 'pause';
		} else if (lang == 2) {
			return 'pause';
		} else if (lang == 3) {
			return 'أوقف';
		} else if (lang == 4) {
			return 'وقف';
		} else if (lang == 5) {
			return 'pause';
		}
	} else if (commandCode == 'c3q') {
		if (lang == 0) {
			return commandValue.split('remove ')[1];
		} else if (lang == 1) {
			return commandValue.split('remove ')[1];
		} else if (lang == 2) {
			return commandValue.split('supprimer ')[1];
		} else if (lang == 3) {
			return commandValue.split('احذف')[1].split('')[0];
		} else if (lang == 4) {
			return commandValue.split('امسح')[1].split('')[0];
		} else if (lang == 5) {
			return commandValue.split('supprimer ')[1];
		}
	} else if (commandCode == 'c3r') {
		if (lang == 0) {
			return 'it';
		} else if (lang == 1) {
			return 'it';
		} else if (lang == 2) {
			return 'il';
		} else if (lang == 3) {
			return 'ه';
		} else if (lang == 4) {
			return 'ه';
		} else if (lang == 5) {
			return 'それ';
		}
	} else if (commandCode == 'c4') {
		if (lang == 0) {
			return commandValue.split('remove ')[1];
		} else if (lang == 1) {
			return commandValue.split('remove ')[1];
		} else if (lang == 2) {
			return commandValue.split('supprimer ')[1];
		} else if (lang == 3) {
			return commandValue.split('احذف ')[1];
		} else if (lang == 4) {
			return commandValue.split('امسح ')[1];
		} else if (lang == 5) {
			return commandValue.split('を削除')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c5q') {
		if (lang == 0) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1];
		} else if (lang == 1) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1];
		} else if (lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1];
		} else if (lang == 3) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1];
		} else if (lang == 4) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1];
		} else if (lang == 5) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1];
		}
	} else if (commandCode == 'c5r') {
		if (lang == 0) {
			return 'go to';
		} else if (lang == 1) {
			return 'go to';
		} else if (lang == 2) {
			return 'aller à';
		} else if (lang == 3) {
			return 'اذهب إلى';
		} else if (lang == 4) {
			return 'روح إلى';
		} else if (lang == 5) {
			return 'に行く';
		}
	} else if (commandCode == 'c7') {
		if (lang == 0) {
			return commandValue.split('play ')[1];
		} else if (lang == 1) {
			return commandValue.split('play ')[1];
		} else if (lang == 2) {
			return commandValue.split('lecture ')[1];
		} else if (lang == 3) {
			return commandValue.split('شغل ')[1];
		} else if (lang == 4) {
			return commandValue.split('شغل ')[1];
		} else if (lang == 5) {
			return commandValue.split('を再生する')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c8') {
		if (lang == 0) {
			return commandValue.split('pause ')[1];
		} else if (lang == 1) {
			return commandValue.split('pause ')[1];
		} else if (lang == 2) {
			return commandValue.split('pause ')[1];
		} else if (lang == 3) {
			return commandValue.split('أوقف ')[1];
		} else if (lang == 4) {
			return commandValue.split('وقف ')[1];
		} else if (lang == 5) {
			return commandValue.split('一時停止')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c9q') {
		if (lang == 0) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3];
		} else if (lang == 1) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3];
		} else if (lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3];
		} else if (lang == 3) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2];
		} else if (lang == 4) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2];
		} else if (lang == 5) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3];
		}
	} else if (commandCode == 'c9r') {
		if (lang == 0) {
			return 'set its value to';
		} else if (lang == 1) {
			return 'set its value to';
		} else if (lang == 2) {
			return 'définir sa valeur à';
		} else if (lang == 3) {
			return 'غير قيمته إلى';
		} else if (lang == 4) {
			return 'غير قيمته إلى';
		} else if (lang == 5) {
			return 'にその値を設定';
		}
	} else if (commandCode == 'c10q') {
		if (lang == 0) {
			return commandValue.split('set its value to ')[1].split(' ')[0] + ' ' + commandValue.split('set its value to ')[1].split(' ')[1] + ' ' + commandValue.split('set its value to ')[1].split(' ')[2];
		} else if (lang == 1) {
			return commandValue.split('set its value to ')[1].split(' ')[0] + ' ' + commandValue.split('set its value to ')[1].split(' ')[1] + ' ' + commandValue.split('set its value to ')[1].split(' ')[2];
		} else if (lang == 2) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		} else if (lang == 3) {
			return commandValue.split('غير قيمته إلى ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('غير قيمته إلى ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c10rA') {
		if (lang == 0) {
			return 'the value of';
		} else if (lang == 1) {
			return 'the value of';
		} else if (lang == 2) {
			return 'la valeur de';
		} else if (lang == 3) {
			return 'قيمة';
		} else if (lang == 4) {
			return 'قيمة';
		} else if (lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c10rB') {
		if (lang == 0) {
			return 'the result of';
		} else if (lang == 1) {
			return 'the result of';
		} else if (lang == 2) {
			return "le résultat de";
		} else if (lang == 3) {
			return 'ناتج';
		} else if (lang == 4) {
			return 'ناتج';
		} else if (lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c11') {
		if (lang == 0) {
			return commandValue.split('set its value to the value of ')[1];
		} else if (lang == 1) {
			return commandValue.split('set its value to the value of ')[1];
		} else if (lang == 2) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		} else if (lang == 3) {
			return commandValue.split('غير قيمته إلى قيمة ')[1];
		} else if (lang == 4) {
			return commandValue.split('غير قيمته إلى قيمة ')[1];
		} else if (lang == 5) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		}
	} else if (commandCode == 'c12') {
		if (lang == 0) {
			return commandValue.split('set its value to ')[1];
		} else if (lang == 1) {
			return commandValue.split('set its value to ')[1];
		} else if (lang == 2) {
			return commandValue.split('définir sa valeur à ')[1];
		} else if (lang == 3) {
			return commandValue.split('غير قيمته إلى ')[1];
		} else if (lang == 4) {
			return commandValue.split('غير قيمته إلى ')[1];
		} else if (lang == 5) {
			return commandValue.split('にその値を設定')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c13q') {
		if (lang == 0) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[5];
		} else if (lang == 1) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[5];
		} else if (lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[5];
		} else if (lang == 3) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[3];
		} else if (lang == 4) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[3];
		} else if (lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[5];
		}
	} else if (commandCode == 'c13r') {
		if (lang == 0) {
			return 'set the value of to';
		} else if (lang == 1) {
			return 'set the value of to';
		} else if (lang == 2) {
			return 'définir la valeur de à';
		} else if (lang == 3) {
			return 'غير قيمة إلى';
		} else if (lang == 4) {
			return 'غير قيمة إلى';
		} else if (lang == 5) {
			return 'définir la valeur de à';
		}
	} else if (commandCode == 'c14') {
		if (lang == 0) {
			return commandValue.split('set the value of ')[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split('set the value of ')[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('غير قيمة ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('غير قيمة ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c15') {
		if (lang == 0) {
			return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
		} else if (lang == 1) {
			return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
		} else if (lang == 2) {
			return commandValue.split('définir la valeur de ' + para1 + ' à la valeur de ')[1];
		} else if (lang == 3) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى قيمة ')[1];
		} else if (lang == 4) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى قيمة ')[1];
		} else if (lang == 5) {
			return commandValue.split('définir la valeur de ' + para1 + ' à la valeur de ')[1];
		}
	} else if (commandCode == 'c16q') {
		if (lang == 0) {
			return commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[2];
		} else if (lang == 1) {
			return commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[2];
		} else if (lang == 2) {
			return commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[2];
		} else if (lang == 3) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c16rA') {
		if (lang == 0) {
			return 'the value of';
		} else if (lang == 1) {
			return 'the value of';
		} else if (lang == 2) {
			return 'la valeur de';
		} else if (lang == 3) {
			return 'قيمة';
		} else if (lang == 4) {
			return 'قيمة';
		} else if (lang == 5) {
			return 'la valeur de';
		}
	} else if (commandCode == 'c16rB') {
		if (lang == 0) {
			return 'the result of';
		} else if (lang == 1) {
			return 'the result of';
		} else if (lang == 2) {
			return "le résultat de";
		} else if (lang == 3) {
			return 'ناتج';
		} else if (lang == 4) {
			return 'ناتج';
		} else if (lang == 5) {
			return 'the result of';
		}
	} else if (commandCode == 'c17') {
		if (lang == 0) {
			return commandValue.split('set the value of ' + para1 + ' to ')[1];
		} else if (lang == 1) {
			return commandValue.split('set the value of ' + para1 + ' to ')[1];
		} else if (lang == 2) {
			return commandValue.split('définir la valeur de ' + para1 + ' à ')[1];
		} else if (lang == 3) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى ')[1];
		} else if (lang == 4) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى ')[1];
		} else if (lang == 5) {
			return commandValue.split('définir la valeur de ' + para1 + ' à ')[1];
		}
	} else if (commandCode == 'c18q') {
		if (lang == 0) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6];
		} else if (lang == 1) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6];
		} else if (lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[7];
		} else if (lang == 3) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[7];
		} else if (lang == 4) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[7];
		} else if (lang == 5) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[7];
		}
	} else if (commandCode == 'c18r') {
		if (lang == 0) {
			return 'set the time position of to';
		} else if (lang == 1) {
			return 'set the time position of to';
		} else if (lang == 2) {
			return 'définir la position de temps de à';
		} else if (lang == 3) {
			return 'définir la position de temps de à';
		} else if (lang == 4) {
			return 'définir la position de temps de à';
		} else if (lang == 5) {
			return 'définir la position de temps de à';
		}
	} else if (commandCode == 'c19') {
		if (lang == 0) {
			return commandValue.split('set the time position of ')[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split('set the time position of ')[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c20') {
		if (lang == 0) {
			return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
		} else if (lang == 1) {
			return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
		} else if (lang == 2) {
			return commandValue.split('définir la valeur de ' + para1 + ' à la valeur de ')[1];
		} else if (lang == 3) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى قيمة ')[1];
		} else if (lang == 4) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى قيمة ')[1];
		} else if (lang == 5) {
			return commandValue.split('définir la valeur de ' + para1 + ' à la valeur de ')[1];
		}
	} else if (commandCode == 'c21q') {
		if (lang == 0) {
			return commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[2];
		} else if (lang == 1) {
			return commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[2];
		} else if (lang == 2) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[2];
		} else if (lang == 3) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[2];
		} else if (lang == 4) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[2];
		} else if (lang == 5) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c21rA') {
		if (lang == 0) {
			return 'the value of';
		} else if (lang == 1) {
			return 'the value of';
		} else if (lang == 2) {
			return 'la valeur de';
		} else if (lang == 3) {
			return 'قيمة';
		} else if (lang == 4) {
			return 'قيمة';
		} else if (lang == 5) {
			return 'la valeur de';
		}
	} else if (commandCode == 'c21rB') {
		if (lang == 0) {
			return 'the result of';
		} else if (lang == 1) {
			return 'the result of';
		} else if (lang == 2) {
			return "le résultat de";
		} else if (lang == 3) {
			return 'ناتج';
		} else if (lang == 4) {
			return 'ناتج';
		} else if (lang == 5) {
			return 'the result of';
		}
	} else if (commandCode == 'c22') {
		if (lang == 0) {
			return commandValue.split('set the time position of ' + para1 + ' to ')[1];
		} else if (lang == 1) {
			return commandValue.split('set the time position of ' + para1 + ' to ')[1];
		} else if (lang == 2) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1];
		} else if (lang == 3) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1];
		} else if (lang == 4) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1];
		} else if (lang == 5) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1];
		}
	} else if (commandCode == 'c23q') {
		if (lang == 0) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[7] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14];
		} else if (lang == 1) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[7] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14];
		} else if (lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14] + ' ' + commandValue.split(event)[1].split(' ')[15] + ' ' + commandValue.split(event)[1].split(' ')[16];
		} else if (lang == 3) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12];
		} else if (lang == 4) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[7] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11];
		} else if (lang == 5) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13];
		}
	} else if (commandCode == 'c23r') {
		if (lang == 0) {
			return 'go to the database the branch and then insert the following data:';
		} else if (lang == 1) {
			return 'go to the database the branch and then insert the following data:';
		} else if (lang == 2) {
			return 'aller à la base de données la branche et ensuite insérer les données suivantes:';
		} else if (lang == 3) {
			return 'اذهب إلى قاعدة البيانات الفرع ثم قم بإدخال البيانات التالية:';
		} else if (lang == 4) {
			return 'روح لقاعدة البيانات الفرع و بعد كدة دخل البيانات دى:';
		} else if (lang == 5) {
			return 'aller à la base de données la branche et ensuite insérer les données suivantes:';
		}
	} else if (commandCode == 'c24') {
		if (lang == 0) {
			return commandValue.split('go to the ' + para1 + ' database ')[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split('go to the ' + para1 + ' database ')[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split('aller à la base de données ' + para1 + ' ')[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ' + para1 + ' ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ' + para1 + ' ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('aller à la base de données ' + para1 + ' ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c25') {
		if (lang == 0) {
			return commandValue.split('the branch ')[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split('the branch ')[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split('la branche ')[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('الفرع ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('الفرع ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('la branche ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c26') {
		if (lang == 0) {
			return commandValue.split('go to the ' + para1 + ' database ' + para2 + ' the branch ' + para3 + ' and then insert the following data: ')[1].split(', ');
		} else if (lang == 1) {
			return commandValue.split('go to the ' + para1 + ' database ' + para2 + ' the branch ' + para3 + ' and then insert the following data: ')[1].split(', ');
		} else if (lang == 2) {
			return commandValue.split('aller à la base de données ' + para1 + ' ' + para2 + ' la branche ' + para3 + ' et ensuite insérer les données suivantes: ')[1].split(', ');
		} else if (lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ' + para1 + ' ' + para2 + ' الفرع ' + para3 + ' ثم قم بإدخال البيانات التالية: ')[1].split(', ');
		} else if (lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ' + para1 + ' ' + para2 + ' الفرع ' + para3 + ' و بعد كدة دخل البيانات دى: ')[1].split(', ');
		} else if (lang == 5) {
			return commandValue.split('aller à la base de données ' + para1 + ' ' + para2 + ' la branche ' + para3 + ' et ensuite insérer les données suivantes: ')[1].split(', ');
		}
	} else if (commandCode == 'c27q') {
		if (lang == 0) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[7] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14] + ' ' + commandValue.split(event)[1].split(' ')[15] + ' ' + commandValue.split(event)[1].split(' ')[16];
		} else if (lang == 1) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[7] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14] + ' ' + commandValue.split(event)[1].split(' ')[15] + ' ' + commandValue.split(event)[1].split(' ')[16];
		} else if (lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14] + ' ' + commandValue.split(event)[1].split(' ')[15] + ' ' + commandValue.split(event)[1].split(' ')[16] + ' ' + commandValue.split(event)[1].split(' ')[16];
		} else if (lang == 3) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13];
		} else if (lang == 4) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[7] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12];
		} else if (lang == 5) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14] + ' ' + commandValue.split(event)[1].split(' ')[15];
		}
	} else if (commandCode == 'c27r') {
		if (lang == 0) {
			return 'go to the database the branch and then get the value of the slot';
		} else if (lang == 1) {
			return 'go to the database the branch and then get the value of the slot';
		} else if (lang == 2) {
			return 'aller à la base de données la branche et ensuite obtenir la valeur de la fente';
		} else if (lang == 3) {
			return 'اذهب إلى قاعدة البيانات الفرع ثم قم بالحصول على قيمة الشريحة';
		} else if (lang == 4) {
			return 'روح لقاعدة البيانات الفرع و بعد كدة هات قيمة الشريحة';
		} else if (lang == 5) {
			return 'aller à la base de données la branche et ensuite obtenir la valeur de la fente';
		}
	} else if (commandCode == 'c28') {
		if (lang == 0) {
			return commandValue.split('go to the ' + para1 + ' database ')[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split('go to the ' + para1 + ' database ')[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split('aller à la base de données ' + para1 + ' ')[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ' + para1 + ' ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ' + para1 + ' ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('aller à la base de données ' + para1 + ' ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c29') {
		if (lang == 0) {
			return commandValue.split('the branch ')[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split('the branch ')[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split('la branche ')[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('الفرع ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('الفرع ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('la branche ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c30') {
		if (lang == 0) {
			return commandValue.split('get the value of the slot ')[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split('get the value of the slot ')[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ')[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('قم بالحصول على قيمة الشريحة ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('هات قيمة الشريحة ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c31') {
		if (lang == 0) {
			return commandValue.split('and set it as the value of ')[1];
		} else if (lang == 1) {
			return commandValue.split('and set it as the value of ')[1];
		} else if (lang == 2) {
			return commandValue.split('définissez-le comme valeur de ')[1];
		} else if (lang == 3) {
			return commandValue.split('و اجعلها قيمة ')[1];
		} else if (lang == 4) {
			return commandValue.split('و خليها قيمة ')[1];
		} else if (lang == 5) {
			return commandValue.split('définissez-le comme valeur de ')[1];
		}
	} else if (commandCode == 'c32') {
		if (lang == 0) {
			return commandValue.split('the value of ')[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split('the value of ')[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split('la valeur de ')[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('قيمة ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('قيمة ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('la valeur de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c33') {
		if (lang == 0) {
			return commandValue.split('in the slot ')[1];
		} else if (lang == 1) {
			return commandValue.split('in the slot ')[1];
		} else if (lang == 2) {
			return commandValue.split('in the slot ')[1];
		} else if (lang == 3) {
			return commandValue.split('فى الشريحة ')[1];
		} else if (lang == 4) {
			return commandValue.split('فى الشريحة ')[1];
		} else if (lang == 5) {
			return commandValue.split('in the slot ')[1];
		}
	} else if (commandCode == 'c34') {
		if (lang == 0) {
			return commandValue.split(' after a period of ');
		} else if (lang == 1) {
			return commandValue.split(' after a period of ');
		} else if (lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ');
		} else if (lang == 3) {
			return commandValue.split(' بعد مدة ');
		} else if (lang == 4) {
			return commandValue.split(' بعد مدة ');
		} else if (lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ');
		}
	} else if (commandCode == 'c35') {
		if (lang == 0) {
			return commandValue.split(' after a period of ')[0];
		} else if (lang == 1) {
			return commandValue.split(' after a period of ')[0];
		} else if (lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		} else if (lang == 3) {
			return commandValue.split(' بعد مدة ')[0];
		} else if (lang == 4) {
			return commandValue.split(' بعد مدة ')[0];
		} else if (lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		}
	} else if (commandCode == 'c36') {
		if (lang == 0) {
			if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' after a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' after a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' after a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (lang == 1) {
			if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' after a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' after a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' after a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (lang == 2) {
			if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' after a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' after a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' after a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (lang == 3) {
			if (commandValue.split(' بعد مدة ')[1] == 'ميلى ثانية') {
				return 1
			} else if (commandValue.split(' بعد مدة ')[1] == 'ثانية') {
				return 1000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'دقيقة') {
				return 60000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'ساعة') {
				return 3600000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'يوم') {
				return 86400000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]);
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ثوانى') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'دقائق') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ساعات') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ايام') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 86400000;
			}
		} else if (lang == 4) {
			if (commandValue.split(' بعد مدة ')[1] == 'ميلى ثانية') {
				return 1
			} else if (commandValue.split(' بعد مدة ')[1] == 'ثانية') {
				return 1000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'دقيقة') {
				return 60000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'ساعة') {
				return 3600000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'يوم') {
				return 86400000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]);
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ثوانى') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'دقائق') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ساعات') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ايام') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 86400000;
			}
		} else if (lang == 5) {
			if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' after a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' after a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' after a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000;
			}
		}
	} else if (commandCode == 'c37') {
		if (lang == 0) {
			return commandValue.split(' every a period of ');
		} else if (lang == 1) {
			return commandValue.split(' every a period of ');
		} else if (lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ');
		} else if (lang == 3) {
			return commandValue.split(' كل مدة ');
		} else if (lang == 4) {
			return commandValue.split(' كل مدة ');
		} else if (lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ');
		}
	} else if (commandCode == 'c38') {
		if (lang == 0) {
			return commandValue.split(' every a period of ')[0];
		} else if (lang == 1) {
			return commandValue.split(' every a period of ')[0];
		} else if (lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		} else if (lang == 3) {
			return commandValue.split(' كل مدة ')[0];
		} else if (lang == 4) {
			return commandValue.split(' كل مدة ')[0];
		} else if (lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		}
	} else if (commandCode == 'c39') {
		if (lang == 0) {
			if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' every a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' every a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' every a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (lang == 1) {
			if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' every a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' every a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' every a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (lang == 2) {
			if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' every a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' every a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' every a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (lang == 3) {
			if (commandValue.split(' كل مدة ')[1] == 'ميلى ثانية') {
				return 1
			} else if (commandValue.split(' كل مدة ')[1] == 'ثانية') {
				return 1000;
			} else if (commandValue.split(' كل مدة ')[1] == 'دقيقة') {
				return 60000;
			} else if (commandValue.split(' كل مدة ')[1] == 'ساعة') {
				return 3600000;
			} else if (commandValue.split(' كل مدة ')[1] == 'يوم') {
				return 86400000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]);
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ثوانى') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'دقائق') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ساعات') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ايام') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 86400000;
			}
		} else if (lang == 4) {
			if (commandValue.split(' كل مدة ')[1] == 'ميلى ثانية') {
				return 1
			} else if (commandValue.split(' كل مدة ')[1] == 'ثانية') {
				return 1000;
			} else if (commandValue.split(' كل مدة ')[1] == 'دقيقة') {
				return 60000;
			} else if (commandValue.split(' كل مدة ')[1] == 'ساعة') {
				return 3600000;
			} else if (commandValue.split(' كل مدة ')[1] == 'يوم') {
				return 86400000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]);
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ثوانى') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'دقائق') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ساعات') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ايام') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 86400000;
			}
		} else if (lang == 5) {
			if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' every a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' every a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' every a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000;
			}
		}
	} else if (commandCode == 'c40') {
		if (lang == 0) {
			return commandValue.split(this.E17)[1].split(', ')[0];
		} else if (lang == 1) {
			return commandValue.split(this.E17)[1].split(', ')[0];
		} else if (lang == 2) {
			return commandValue.split(this.E17)[1].split(', ')[0];
		} else if (lang == 3) {
			return commandValue.split(this.E17)[1].split(', ')[0];
		} else if (lang == 4) {
			return commandValue.split(this.E17)[1].split(', ')[0];
		} else if (lang == 5) {
			return commandValue.split(this.E17)[1].split(', ')[0];
		}
	} else if (commandCode == 'c41') {
		if (lang == 0) {
			return evaluateExpression(commandValue.split('the result of ')[1]);
		} else if (lang == 1) {
			return evaluateExpression(commandValue.split('the result of ')[1]);
		} else if (lang == 2) {
			return evaluateExpression(commandValue.split("le résultat de ")[1]);
		} else if (lang == 3) {
			return evaluateExpression(commandValue.split('ناتج ')[1]);
		} else if (lang == 4) {
			return evaluateExpression(commandValue.split('ناتج ')[1]);
		} else if (lang == 5) {
			return evaluateExpression(commandValue.split('the result of ')[1]);
		}
	} else if (commandCode == 'c42') {
		if (lang == 0) {
			return evaluateExpression(commandValue.split('set the value of ' + para1 + ' to the result of ')[1]);
		} else if (lang == 1) {
			return evaluateExpression(commandValue.split('set the value of ' + para1 + ' to the result of ')[1]);
		} else if (lang == 2) {
			return evaluateExpression(commandValue.split("définir la valeur de ' + para1 + ' à le résultat de ")[1]);
		} else if (lang == 3) {
			return evaluateExpression(commandValue.split('غير قيمة ' + para1 + ' إلى ناتج ')[1]);
		} else if (lang == 4) {
			return evaluateExpression(commandValue.split('غير قيمة ' + para1 + ' إلى ناتج ')[1]);
		} else if (lang == 5) {
			return evaluateExpression(commandValue.split('set the value of ' + para1 + ' to the result of ')[1]);
		}
	} else if (commandCode == 'c43') {
		if (lang == 0) {
			return evaluateExpression(commandValue.split('set the value of ' + para1 + ' to the result of ')[1]);
		} else if (lang == 1) {
			return evaluateExpression(commandValue.split('set the value of ' + para1 + ' to the result of ')[1]);
		} else if (lang == 2) {
			return evaluateExpression(commandValue.split("définir la valeur de ' + para1 + ' à le résultat de ")[1]);
		} else if (lang == 3) {
			return evaluateExpression(commandValue.split('غير قيمة ' + para1 + ' إلى ناتج ')[1]);
		} else if (lang == 4) {
			return evaluateExpression(commandValue.split('غير قيمة ' + para1 + ' إلى ناتج ')[1]);
		} else if (lang == 5) {
			return evaluateExpression(commandValue.split('set the value of ' + para1 + ' to the result of ')[1]);
		}
	} else if (commandCode == 'c44q') {
		if (lang == 0) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (lang == 1) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (lang == 2) {
			return commandValue.split("aller à ")[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('اذهب إلى ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('روح إلى ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c44r') {
		if (lang == 0) {
			return 'the url';
		} else if (lang == 1) {
			return 'the url';
		} else if (lang == 2) {
			return "l'url";
		} else if (lang == 3) {
			return 'الرابط';
		} else if (lang == 4) {
			return 'اللينك';
		} else if (lang == 5) {
			return 'に行く';
		}
	} else if (commandCode == 'c44t') {
		if (lang == 0) {
			return commandValue.split('the url ')[1];
		} else if (lang == 1) {
			return commandValue.split('the url ')[1];
		} else if (lang == 2) {
			return commandValue.split("l'url ")[1];
		} else if (lang == 3) {
			return commandValue.split('الرابط ')[1];
		} else if (lang == 4) {
			return commandValue.split('اللينك ')[1];
		} else if (lang == 5) {
			return commandValue.split('に行く ')[1];
		}
	} else if (commandCode == 'c45q') {
		if (lang == 0) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (lang == 1) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (lang == 2) {
			return commandValue.split("aller à ")[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('اذهب إلى ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('روح إلى ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c45r') {
		if (lang == 0) {
			return 'the element';
		} else if (lang == 1) {
			return 'the element';
		} else if (lang == 2) {
			return "l'élément";
		} else if (lang == 3) {
			return 'العنصر';
		} else if (lang == 4) {
			return 'العنصر';
		} else if (lang == 5) {
			return 'に行く';
		}
	} else if (commandCode == 'c45t') {
		if (lang == 0) {
			return commandValue.split('the element ')[1];
		} else if (lang == 1) {
			return commandValue.split('the element ')[1];
		} else if (lang == 2) {
			return commandValue.split("l'élément ")[1];
		} else if (lang == 3) {
			return commandValue.split('العنصر ')[1];
		} else if (lang == 4) {
			return commandValue.split('العنصر ')[1];
		} else if (lang == 5) {
			return commandValue.split('に行く ')[1];
		}
	} else if (commandCode == 'c46q') {
		if (lang == 0) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (lang == 1) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (lang == 2) {
			return commandValue.split("aller à ")[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (lang == 3) {
			return commandValue.split('اذهب إلى ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (lang == 4) {
			return commandValue.split('روح إلى ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c46r') {
		if (lang == 0) {
			return 'the email';
		} else if (lang == 1) {
			return 'the email';
		} else if (lang == 2) {
			return 'le courriel';
		} else if (lang == 3) {
			return 'البريد الإلكترونى';
		} else if (lang == 4) {
			return 'الإيميل';
		} else if (lang == 5) {
			return 'Eメール';
		}
	} else if (commandCode == 'c46t') {
		if (lang == 0) {
			return commandValue.split('the email ')[1];
		} else if (lang == 1) {
			return commandValue.split('the email ')[1];
		} else if (lang == 2) {
			return commandValue.split("le courriel ")[1];
		} else if (lang == 3) {
			return commandValue.split('البريد الإلكترونى ')[1];
		} else if (lang == 4) {
			return commandValue.split('الإيميل ')[1];
		} else if (lang == 5) {
			return commandValue.split('Eメール ')[1];
		}
	} else if (commandCode == 'c47q') {
		if (lang == 0) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (lang == 1) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (lang == 2) {
			return commandValue.split("aller à ")[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (lang == 3) {
			return commandValue.split('اذهب إلى ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('روح إلى ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c47r') {
		if (lang == 0) {
			return 'the page';
		} else if (lang == 1) {
			return 'the page';
		} else if (lang == 2) {
			return 'la page';
		} else if (lang == 3) {
			return 'الصفحة';
		} else if (lang == 4) {
			return 'الصفحة';
		} else if (lang == 5) {
			return 'ページ';
		}
	} else if (commandCode == 'c47t') {
		if (lang == 0) {
			return commandValue.split('the page ')[1];
		} else if (lang == 1) {
			return commandValue.split('the page ')[1];
		} else if (lang == 2) {
			return commandValue.split("le courriella page ")[1];
		} else if (lang == 3) {
			return commandValue.split('الصفحة ')[1];
		} else if (lang == 4) {
			return commandValue.split('الصفحة ')[1];
		} else if (lang == 5) {
			return commandValue.split('ページ ')[1];
		}
	} else if (commandCode == 'c48') {
		if (lang == 0) {
			return commandValue.split('go to the ')[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split('go to the ')[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c49') {
		if (lang == 0) {
			return commandValue.split('go to the ')[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split('go to the ')[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c50') {
		if (lang == 0) {
			return commandValue.split('which has the same class of the value of ')[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split('which has the same class of the value of ')[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c51') {
		if (lang == 0) {
			return commandValue.split('which has the same class of the value of ' + para1 + ' in the slot ')[1].split(' ')[0];
		} else if (lang == 1) {
			return commandValue.split('which has the same class of the value of ' + para1 + ' in the slot ')[1].split(' ')[0];
		} else if (lang == 2) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		} else if (lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
		} else if (lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
		} else if (lang == 5) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c52') {
		if (lang == 0) {
			return commandValue.split(' in the case that ');
		} else if (lang == 1) {
			return commandValue.split(' in the case that ');
		} else if (lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ');
		} else if (lang == 3) {
			return commandValue.split(' فى حالة أن ');
		} else if (lang == 4) {
			return commandValue.split(' فى حالة أن ');
		} else if (lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ');
		}
	} else if (commandCode == 'c53') {
		if (lang == 0) {
			return evaluateStatement(commandValue.split(' in the case that ')[1]);
		} else if (lang == 1) {
			return evaluateStatement(commandValue.split(' in the case that ')[1]);
		} else if (lang == 2) {
			return evaluateStatement(commandValue.split('obtenir la valeur de la fente ')[1]);
		} else if (lang == 3) {
			return evaluateStatement(commandValue.split(' فى حالة أن ')[1]);
		} else if (lang == 4) {
			return evaluateStatement(commandValue.split(' فى حالة أن ')[1]);
		} else if (lang == 5) {
			return evaluateStatement(commandValue.split('obtenir la valeur de la fente ')[1]);
		}
	} else if (commandCode == 'c54') {
		if (lang == 0) {
			return commandValue.split(' in the case that ')[0];
		} else if (lang == 1) {
			return commandValue.split(' in the case that ')[0];
		} else if (lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		} else if (lang == 3) {
			return commandValue.split(' فى حالة أن ')[0];
		} else if (lang == 4) {
			return commandValue.split(' فى حالة أن ')[0];
		} else if (lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		}
	}
}
(function ($) {
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	//--------------------------------------------------------Animate.CSS Script------------------------------------------------------------------------------------------------------------------------------------------//
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	$.fn.extend({
		animateCss: function (animationName) {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			this.addClass('animated ' + animationName).one(animationEnd, function () {
				$(this).removeClass('animated ' + animationName);
			});
		}
	});
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	//--------------------------------------------------------Maths Translations------------------------------------------------------------------------------------------------------------------------------------------//
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	function mathOperation(expression) {
		return math.eval(expression);
	}
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	//-------------------------------------------------------Colors Translations------------------------------------------------------------------------------------------------------------------------------------------//
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	function setFontColour(elementName, colour) {
		if (colour == blackTranslations[lang]) {
			$('#' + elementName + '').css('color', '#000000');
		} else if (colour == redTranslations[lang]) {
			$('#' + elementName + '').css('color', '#F44336');
		} else if (colour == blueTranslations[lang]) {
			$('#' + elementName + '').css('color', '#2196F3');
		} else if (colour == cyanTranslations[lang]) {
			$('#' + elementName + '').css('color', '#00BCD4');
		} else if (colour == grayTranslations[lang]) {
			$('#' + elementName + '').css('color', '#9E9E9E');
		} else if (colour == greenTranslations[lang]) {
			$('#' + elementName + '').css('color', '#4CAF50');
		} else if (colour == whiteTranslations[lang]) {
			$('#' + elementName + '').css('color', '#FFFFFF');
		} else if (colour == orangeTranslations[lang]) {
			$('#' + elementName + '').css('color', '#FF9800');
		} else if (colour == yellowTranslations[lang]) {
			$('#' + elementName + '').css('color', '#FFEB3B');
		} else if (colour == brownTranslations[lang]) {
			$('#' + elementName + '').css('color', '#795548');
		} else if (colour == tealTranslations[lang]) {
			$('#' + elementName + '').css('color', '#009688');
		} else if (colour == pinkTranslations[lang]) {
			$('#' + elementName + '').css('color', '#E91E63');
		} else if (colour == lightGreenTranslations[lang]) {
			$('#' + elementName + '').css('color', '#8BC34A');
		} else {
			$('#' + elementName + '').css('color', colour);
		}
	}

	function setBG(elementName, background) {
		if (background == blackTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#000000');
		} else if (background == redTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#F44336');
		} else if (background == blueTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#2196F3');
		} else if (background == cyanTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#00BCD4');
		} else if (background == grayTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#9E9E9E');
		} else if (background == greenTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#4CAF50');
		} else if (background == whiteTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#FFFFFF');
		} else if (background == orangeTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#FF9800');
		} else if (background == yellowTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#FFEB3B');
		} else if (background == brownTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#795548');
		} else if (background == tealTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#009688');
		} else if (background == pinkTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#E91E63');
		} else if (background == lightGreenTranslations[lang]) {
			$('#' + elementName + '').css('background-color', '#8BC34A');
		} else if (background.charAt(0) == '#') {
			$('#' + elementName + '').css('background-color', background);
		} else {
			$('#' + elementName + '').css('background-image', 'url(' + background + ')');
		}
	}
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	//---------------------------------------------------Animations Translations------------------------------------------------------------------------------------------------------------------------------------------//
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	document.setAnimation = function (elementName, animation) {
		$('#' + elementName + '').visibilityChanged({
			callback: function (element, visible) {
				if (visible == true) {
					if (animation == 'bounce') {
						element.animateCss('bounce');
					} else if (animation == 'jumping') {
						element.animateCss('flash');
					} else if (animation == 'jumping') {
						element.animateCss('pulse');
					} else if (animation == 'jumping') {
						element.animateCss('rubberBand');
					} else if (animation == 'jumping') {
						element.animateCss('shake');
					} else if (animation == 'jumping') {
						element.animateCss('headShake');
					} else if (animation == 'jumping') {
						element.animateCss('swing');
					} else if (animation == 'jumping') {
						element.animateCss('tada');
					} else if (animation == 'jumping') {
						element.animateCss('wobble');
					} else if (animation == 'jumping') {
						element.animateCss('jello');
					} else if (animation == 'jumping') {
						element.animateCss('bounceIn');
					} else if (animation == 'jumping') {
						element.animateCss('bounceInDown');
					} else if (animation == 'jumping') {
						element.animateCss('bounceInLeft');
					} else if (animation == 'jumping') {
						element.animateCss('bounceInRight');
					} else if (animation == 'jumping') {
						element.animateCss('bounceInUp');
					} else if (animation == 'jumping') {
						element.animateCss('bounceOut');
					} else if (animation == 'jumping') {
						element.animateCss('bounceOutDown');
					} else if (animation == 'jumping') {
						element.animateCss('bounceOutLeft');
					} else if (animation == 'jumping') {
						element.animateCss('bounceOutRight');
					} else if (animation == 'jumping') {
						element.animateCss('bounceOutUp');
					} else if (animation == 'jumping') {
						element.animateCss('fadeIn');
					} else if (animation == 'jumping') {
						element.animateCss('fadeInDown');
					} else if (animation == 'jumping') {
						element.animateCss('fadeInDownBig');
					} else if (animation == 'jumping') {
						element.animateCss('fadeInLeft');
					} else if (animation == 'jumping') {
						element.animateCss('fadeInLeftBig');
					} else if (animation == 'jumping') {
						element.animateCss('fadeInRight');
					} else if (animation == 'jumping') {
						element.animateCss('fadeInRightBig');
					} else if (animation == 'jumping') {
						element.animateCss('fadeInUp');
					} else if (animation == 'jumping') {
						element.animateCss('fadeInUpBig');
					} else if (animation == 'jumping') {
						element.animateCss('fadeOut');
					} else if (animation == 'jumping') {
						element.animateCss('fadeOutDown');
					} else if (animation == 'jumping') {
						element.animateCss('fadeOutDownBig');
					} else if (animation == 'jumping') {
						element.animateCss('fadeOutLeft');
					} else if (animation == 'jumping') {
						element.animateCss('fadeOutLeftBig');
					} else if (animation == 'jumping') {
						element.animateCss('fadeOutRight');
					} else if (animation == 'jumping') {
						element.animateCss('fadeOutRightBig');
					} else if (animation == 'jumping') {
						element.animateCss('fadeOutUp');
					} else if (animation == 'jumping') {
						element.animateCss('fadeOutUpBig');
					} else if (animation == 'jumping') {
						element.animateCss('flipInX');
					} else if (animation == 'jumping') {
						element.animateCss('flipInY');
					} else if (animation == 'jumping') {
						element.animateCss('flipOutX');
					} else if (animation == 'jumping') {
						element.animateCss('flipOutY');
					} else if (animation == 'jumping') {
						element.animateCss('lightSpeedIn');
					} else if (animation == 'jumping') {
						element.animateCss('lightSpeedOut');
					} else if (animation == 'jumping') {
						element.animateCss('rotateIn');
					} else if (animation == 'jumping') {
						element.animateCss('rotateInDownLeft');
					} else if (animation == 'jumping') {
						element.animateCss('rotateInDownRight');
					} else if (animation == 'jumping') {
						element.animateCss('rotateInUpLeft');
					} else if (animation == 'jumping') {
						element.animateCss('rotateInUpRight');
					} else if (animation == 'jumping') {
						element.animateCss('rotateOut');
					} else if (animation == 'jumping') {
						element.animateCss('rotateOutDownLeft');
					} else if (animation == 'jumping') {
						element.animateCss('rotateOutDownRight');
					} else if (animation == 'jumping') {
						element.animateCss('rotateOutUpLeft');
					} else if (animation == 'jumping') {
						element.animateCss('rotateOutUpRight');
					} else if (animation == 'jumping') {
						element.animateCss('hinge');
					} else if (animation == 'jumping') {
						element.animateCss('jackInTheBox');
					} else if (animation == 'jumping') {
						element.animateCss('rollIn');
					} else if (animation == 'jumping') {
						element.animateCss('rollOut');
					} else if (animation == 'jumping') {
						element.animateCss('zoomIn');
					} else if (animation == 'jumping') {
						element.animateCss('zoomInDown');
					} else if (animation == 'jumping') {
						element.animateCss('zoomInLeft');
					} else if (animation == 'jumping') {
						element.animateCss('zoomInRight');
					} else if (animation == 'jumping') {
						element.animateCss('zoomInUp');
					} else if (animation == 'jumping') {
						element.animateCss('zoomOut');
					} else if (animation == 'jumping') {
						element.animateCss('zoomOutDown');
					} else if (animation == 'jumping') {
						element.animateCss('zoomOutLeft');
					} else if (animation == 'jumping') {
						element.animateCss('zoomOutRight');
					} else if (animation == 'jumping') {
						element.animateCss('zoomOutUp');
					} else if (animation == 'jumping') {
						element.animateCss('slideInDown');
					} else if (animation == 'jumping') {
						element.animateCss('slideInLeft');
					} else if (animation == 'jumping') {
						element.animateCss('slideInRight');
					} else if (animation == 'jumping') {
						element.animateCss('slideInUp');
					} else if (animation == 'jumping') {
						element.animateCss('slideOutDown');
					} else if (animation == 'jumping') {
						element.animateCss('slideOutLeft');
					} else if (animation == 'jumping') {
						element.animateCss('slideOutRight');
					} else if (animation == 'jumping') {
						element.animateCss('slideOutUp');
					} else {
						element.animateCss(animation);
					}
				} else if (visible == false) {
					element.removeClass('animated');
				}
			},
			runOnLoad: true,
			frequency: 100
		});
	}
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	//--------------------------------------------------------Scripts Evaluation------------------------------------------------------------------------------------------------------------------------------------------//
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	function evaluateScript(script, event, type) {
		var eventPrefix = '';
		if (event == 'E1') {
			eventPrefix = "$('#' + elementName + '').click(function () {";
			eventSuffix = "});";
		} else if (event == 'E2') {
			eventPrefix = "$('#' + elementName + '').mouseenter(function () {";
			eventSuffix = "});";
		} else if (event == 'E3') {
			eventPrefix = "$('#' + elementName + '').mouseleave(function () {";
			eventSuffix = "});";
		} else if (event == 'E4') {
			eventPrefix = "$('#' + elementName + '').mouseout(function () {";
			eventSuffix = "});";
		} else if (event == 'E5') {
			eventPrefix = "$('#' + elementName + '').mousemove(function () {";
			eventSuffix = "});";
		} else if (event == 'E6') {
			eventPrefix = "$('#' + elementName + '').mouseup(function () {";
			eventSuffix = "});";
		} else if (event == 'E7') {
			eventPrefix = "$('#' + elementName + '').dblclick(function () {";
			eventSuffix = "});";
		} else if (event == 'E8') {
			eventPrefix = "$('#' + elementName + '').contextmenu(function () {";
			eventSuffix = "});";
		} else if (event == 'E9') {
			eventPrefix = "$('#' + elementName + '').keypress(function () {";
			eventSuffix = "});";
		} else if (event == 'E10') {
			eventPrefix = "$('#' + elementName + '').keydown(function () {";
			eventSuffix = "});";
		} else if (event == 'E11') {
			eventPrefix = "$('#' + elementName + '').change(function () {";
			eventSuffix = "});";
		} else if (event == 'E12') {
			eventPrefix = "$('#' + elementName + '').focus(function () {";
			eventSuffix = "});";
		} else if (event == 'E13') {
			eventPrefix = "$('#' + elementName + '').focusin(function () {";
			eventSuffix = "});";
		} else if (event == 'E14') {
			eventPrefix = "$('#' + elementName + '').focusout(function () {";
			eventSuffix = "});";
		} else if (event == 'E15') {
			eventPrefix = "$('#' + elementName + '').submit(function () {";
			eventSuffix = "});";
		} else if (event == 'E16') {
			eventPrefix = "$('#' + elementName + '').scroll(function () {";
			eventSuffix = "});";
		} else if (event == 'E17') {
			eventPrefix = "annyang.addCommands({ [voiceCommand]: function () {";
			eventSuffix = "}});";
		}
		if (type == 'T0') {
			typePrefix = "";
			typeSuffix = "";
			if (event == 'E17') {
				commandVarA = "commands[commandID], voiceCommand"
			} else {
				commandVarA = "commands[commandID]"
			}
			commandVarB = "commandID"
		} else if (type == 'T1') {
			typePrefix = "setTimeout(function () {";
			typeSuffix = "}, timeoutPeriod);";
			if (event == 'E17') {
				commandVarA = "statementT0Command, voiceCommand"
			} else {
				commandVarA = "statementT0Command"
			}
			commandVarB = "statementT0Command"
		} else if (type == 'T2') {
			typePrefix = "setInterval(function () {";
			typeSuffix = "}, intervalPeriod);";
			if (event == 'E17') {
				commandVarA = "intervalCommand, voiceCommand"
			} else {
				commandVarA = "intervalCommand"
			}
			commandVarB = "intervalCommand"
		} else if (type == 'T3') {
			typePrefix = "if (eval(ifStatement)) {";
			typeSuffix = "}";
			if (event == 'E17') {
				commandVarA = "statementT0Command, voiceCommand"
			} else {
				commandVarA = "statementT0Command"
			}
			commandVarB = "statementT0Command"
		}
		if (script == 'S1') {
			return "if (commandsFnTranslations('c3q', '" + event + "', " + commandVarA + ") == commandsFnTranslations('c3r')) { \
        " + eventPrefix + typePrefix + " \
            $('#' + elementName + '').remove(); \
        }); \
    } else { \
        var targetName = commandsFnTranslations('c4', '" + event + "', " + commandVarA + "); \
        $('#' + elementName + '').click(function () { \
            $('#' + targetName + '').remove(); \
            " + typeSuffix + eventSuffix + " \
            }";
		} else if (script == 'S2') {
			return "(function (" + commandVarB + ") { \
				$('#' + elementName + '').css('cursor', 'pointer'); \
                " + eventPrefix + typePrefix + " \
                    if (commandsFnTranslations('c44q', '" + event + "', " + commandVarA + ") == commandsFnTranslations('c44r')) { \
                        targetURL = commandsFnTranslations('c44t', '" + event + "', " + commandVarA + "); \
                        window.open(targetURL); \
                    } else if (commandsFnTranslations('c45q', '" + event + "', " + commandVarA + ") == commandsFnTranslations('c45r')) { \
                        targetURL = commandsFnTranslations('c45t', '" + event + "', " + commandVarA + "); \
                        window.location.hash = '#' + targetURL; \
                    } else if (commandsFnTranslations('c46q', '" + event + "', " + commandVarA + ") == commandsFnTranslations('c46r')) { \
                        targetURL = commandsFnTranslations('c46t', '" + event + "', " + commandVarA + "); \
                        window.open('mailto:' + targetURL); \
                    } else if (commandsFnTranslations('c47q', '" + event + "', " + commandVarA + ") == commandsFnTranslations('c47r')) { \
                        targetURL = commandsFnTranslations('c47t', '" + event + "', " + commandVarA + "); \
                        changePage(targetURL); \
                        setURLParameter('page', targetURL); \
                    } \
                    " + typeSuffix + eventSuffix + " \
            })(" + commandVarB + ");";
		} else if (script == 'S3') {
			return "var targetElement = commandsFnTranslations('c7', '" + event + "', " + commandVarA + "); \
		  " + eventPrefix + typePrefix + " \
		  if ($('#' + targetElement + '').hasClass('aplayer')) { \
			document[targetElement].play(); \
		  } else { \
			document.getElementById(targetElement).play(); \
		  } \
              " + typeSuffix + eventSuffix + "";
		} else if (script == 'S4') {
			return "var targetElement = commandsFnTranslations('c8', '" + event + "', " + commandVarA + "); \
            " + eventPrefix + typePrefix + " \
			if ($('#' + targetElement + '').hasClass('aplayer')) { \
				document[targetElement].pause(); \
			  } else { \
				document.getElementById(targetElement).pause(); \
			  } \
                " + typeSuffix + eventSuffix + "";
		} else if (script == 'S5') {
			return "if (commandsFnTranslations('c10q', '" + event + "', " + commandVarA + ") == commandsFnTranslations('c10rA')) { \
                    var targetElement = commandsFnTranslations('c11', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
                        $('#' + elementName + '').val($('#' + targetElement + '').val()); \
                        $('#' + elementName + '').text($('#' + targetElement + '').val()); \
                        $('#' + elementName + '').val($('#' + targetElement + '').text()); \
                        $('#' + elementName + '').text($('#' + targetElement + '').text()); \
                        " + typeSuffix + eventSuffix + " \
                } else if (commandsFnTranslations('c10q', '" + event + "', " + commandVarA + ") == commandsFnTranslations('c10rB')) { \
                    (function (" + commandVarB + ") { \
                        " + eventPrefix + typePrefix + " \
                            $('#' + elementName + '').val(commandsFnTranslations('c41', '" + event + "', " + commandVarA + ")); \
                            $('#' + elementName + '').text(commandsFnTranslations('c41', '" + event + "', " + commandVarA + ")); \
                            " + typeSuffix + eventSuffix + " \
                    })(" + commandVarB + "); \
                } else { \
                    var newVal = commandsFnTranslations('c12', '" + event + "', " + commandVarA + "); \
                    " + eventPrefix + typePrefix + " \
                        $('#' + elementName + '').val(newVal); \
                        $('#' + elementName + '').text(newVal); \
                        " + typeSuffix + eventSuffix + " \
                }";
		} else if (script == 'S6') {
			return "var targetElement = commandsFnTranslations('c14', '" + event + "', " + commandVarA + "); \
                if (commandsFnTranslations('c16q', '" + event + "', " + commandVarA + ", targetElement) == commandsFnTranslations('c16rA')) { \
                    var resource = commandsFnTranslations('c15', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
                        $('#' + targetElement + '').val($('#' + resource + '').val()); \
                        $('#' + targetElement + '').val($('#' + resource + '').text()); \
                        $('#' + targetElement + '').text($('#' + resource + '').val()); \
                        $('#' + targetElement + '').text($('#' + resource + '').text()); \
                        " + typeSuffix + eventSuffix + " \
                    } else if (commandsFnTranslations('c16q', '" + event + "', " + commandVarA + ", targetElement) == commandsFnTranslations('c16rB')) { \
                    (function (" + commandVarB + ", targetElement) { \
                        " + eventPrefix + typePrefix + " \
                            $('#' + targetElement + '').val(commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            $('#' + targetElement + '').text(commandsFnTranslations('c43', '" + event + "', " + commandVarA + ", targetElement)); \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + ", targetElement); \
                } else { \
                    var newVal = commandsFnTranslations('c17', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
                    $('#' + targetElement + '').val(newVal); \
                        $('#' + targetElement + '').text(newVal); \
                        " + typeSuffix + eventSuffix + " \
                    }";
		} else if (script == 'S7') {
			return "var targetElement = commandsFnTranslations('c19', '" + event + "', " + commandVarA + "); \
                if (commandsFnTranslations('c21q', '" + event + "', " + commandVarA + ", targetElement) == commandsFnTranslations('c21rA')) { \
                    var resource = commandsFnTranslations('c20', '" + event + "', " + commandVarA + ", targetElement); \
					" + eventPrefix + typePrefix + " \
					if ($('#' + targetElement + '').hasClass('aplayer')) { \
						document[targetElement].audio.currentTime = $('#' + resource + '').val(); \
						document[targetElement].audio.currentTime = $('#' + resource + '').text(); \
					  } else { \
                        document.getElementById(targetElement).currentTime = $('#' + resource + '').val(); \
                        document.getElementById(targetElement).currentTime = $('#' + resource + '').text(); \
					  } \
                        " + typeSuffix + eventSuffix + " \
                } else if (commandsFnTranslations('c21q', '" + event + "', " + commandVarA + ", targetElement) == commandsFnTranslations('c21rB')) { \
                    (function (" + commandVarB + ") { \
						" + eventPrefix + typePrefix + " \
						if ($('#' + targetElement + '').hasClass('aplayer')) { \
							document[targetElement].audio.currentTime = commandsFnTranslations('c42', '" + event + "', " + commandVarA + ", targetElement); \
						  } else { \
                            document.getElementById(targetElement).currentTime = commandsFnTranslations('c42', '" + event + "', " + commandVarA + ", targetElement); \
						} \
                            " + typeSuffix + eventSuffix + " \
                        })(" + commandVarB + "); \
                } else { \
                    var newTimePosition = commandsFnTranslations('c22', '" + event + "', " + commandVarA + ", targetElement); \
                    " + eventPrefix + typePrefix + " \
                    document.getElementById(targetElement).currentTime = newTimePosition; \
                    " + typeSuffix + eventSuffix + " \
                }";
		} else if (script == 'S8') {
			return "var dbType = commandsFnTranslations('c48', '" + event + "', " + commandVarA + "); \
                var dbname = commandsFnTranslations('c24', '" + event + "', " + commandVarA + ", dbType); \
                var tablename = commandsFnTranslations('c25', '" + event + "', " + commandVarA + "); \
                var dataRaw = commandsFnTranslations('c26', '" + event + "', " + commandVarA + ", dbType, dbname, tablename); \
                " + eventPrefix + typePrefix + " \
                    var data = '{'; \
                    for (i = 0; i < dataRaw.length; i++) { \
                        var resource = commandsFnTranslations('c32', '', dataRaw[i]); \
                        var slot = commandsFnTranslations('c33', '', dataRaw[i]); \
                        if (i != dataRaw.length - 1) { \
                            data += '\"' + slot + '\":\"' + $('#' + resource + '').val() + '\", '; \
                        } else { \
                            data += '\"' + slot + '\":\"' + $('#' + resource + '').val() + '\"}'; \
                        } \
                    } \
                    data = JSON.parse(data); \
                    if (dbType == publicCTranslations[lang]) { \
                        var newPostKey = firebase.database().ref('public/' + dbname).child(tablename).push().key; \
                        firebase.database().ref('public/' + dbname + '/' + tablename + '/' + newPostKey).set(data); \
                    } else if (dbType == privateCTranslations[lang]) { \
                        var newPostKey = firebase.database().ref('private/' + window.user.uid + '/' + dbname).child(tablename).push().key; \
                        firebase.database().ref('private/' + window.user.uid + '/' + dbname + '/' + tablename + '/' + newPostKey).set(data); \
                    } \
                    " + typeSuffix + eventSuffix;
		} else if (script == 'S9') {
			return "var dbType = commandsFnTranslations('c49', '" + event + "', " + commandVarA + "); \
            var dbname = commandsFnTranslations('c28', '" + event + "', " + commandVarA + ", dbType); \
            var tablename = commandsFnTranslations('c29', '" + event + "', " + commandVarA + "); \
            var calledSlot = commandsFnTranslations('c30', '" + event + "', " + commandVarA + "); \
            var resourceSlotValueResource = commandsFnTranslations('c50', '" + event + "', " + commandVarA + "); \
            var resourceSlotName = commandsFnTranslations('c51', '" + event + "', " + commandVarA + ", resourceSlotValueResource); \
            (function (" + commandVarB + ") { \
                " + eventPrefix + typePrefix + " \
                    if (dbType == publicCTranslations) { \
                        var dbRef = firebase.database().ref('public/' + dbname + '/' + tablename); \
                        dbRef.orderByChild(resourceSlotName).equalTo($('#' + resourceSlotValueResource + '').val()).on('value', function (snapshot) { \
                            snapshot.forEach(function (data) { \
                                $('#' + commandsFnTranslations('c31', '" + event + "', " + commandVarA + ") + '').val(data.val()[calledSlot]); \
                            }); \
                        }); \
                    } else if (dbType == privateCTranslations[lang]) { \
                        var dbRef = firebase.database().ref('private/' + window.user.uid + '/' + dbname + '/' + tablename); \
                        dbRef.orderByChild(resourceSlotName).equalTo($('#' + resourceSlotValueResource + '').val()).on('value', function (snapshot) { \
                            snapshot.forEach(function (data) { \
                                $('#' + commandsFnTranslations('c31', '" + event + "', " + commandVarA + ") + '').val(data.val()[calledSlot]); \
                            }); \
                        }); \
                    }; \
                " + eventSuffix + typeSuffix + " \
            })(" + commandVarB + ");";
		}
	}
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	//-----------------------------------------------------Commands Functions------------------------------------------------------------------------------------------------------------------------------------------//
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	function execute(elementName, command) {
		var commands = command.split(' &amp;&amp;&amp; ');
		var commandID;
		for (commandID = 0; commandID < commands.length; commandID++) {
			if (commandsFnTranslations('c52', 'E1', commands[commandID]).length > 1) {
				var ifStatement = commandsFnTranslations('c53', 'E1', commands[commandID]);
				var statementT0Command = commandsFnTranslations('c54', 'E1', commands[commandID]);
				if (commandsFnTranslations('c1', 'E1', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E1', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E1', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E1', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E1', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E1', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E1', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E1', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E1', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E1', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E1', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E1', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E1', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E1', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E1', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E1', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E1', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E1', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E1', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E2', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E2', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E2', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E2', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E2', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E2', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E2', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E2', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E2', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E2', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E2', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E2', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E2', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E2', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E2', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E2', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E2', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E2', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E2', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E3', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E3', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E3', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E3', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E3', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E3', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E3', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E3', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E3', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E3', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E3', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E3', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E3', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E3', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E3', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E3', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E3', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E3', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E3', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E4', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E4', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E4', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E4', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E4', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E4', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E4', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E4', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E4', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E4', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E4', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E4', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E4', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E4', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E4', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E4', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E4', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E4', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E4', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E5', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E5', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E5', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E5', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E5', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E5', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E5', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E5', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E5', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E5', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E5', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E5', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E5', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E5', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E5', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E5', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E5', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E5', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E5', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E6', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E6', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E6', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E6', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E6', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E6', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E6', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E6', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E6', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E6', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E6', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E6', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E6', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E6', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E6', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E6', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E6', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E6', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E6', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E7', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E7', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E7', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E7', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E7', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E7', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E7', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E7', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E7', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E7', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E7', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E7', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E7', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E7', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E7', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E7', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E7', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E7', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E7', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E8', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E8', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E8', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E8', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E8', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E8', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E8', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E8', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E8', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E8', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E8', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E8', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E8', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E8', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E8', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E8', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E8', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E8', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E8', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E9', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E9', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E9', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E9', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E9', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E9', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E9', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E9', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E9', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E9', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E9', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E9', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E9', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E9', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E9', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E9', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E9', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E9', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E9', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E10', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E10', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E10', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E10', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E10', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E10', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E10', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E10', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E10', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E10', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E10', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E10', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E10', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E10', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E10', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E10', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E10', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E10', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E10', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E11', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E11', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E11', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E11', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E11', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E11', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E11', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E11', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E11', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E11', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E11', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E11', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E11', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E11', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E11', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E11', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E11', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E11', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E11', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E12', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E12', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E12', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E12', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E12', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E12', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E12', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E12', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E12', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E12', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E12', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E12', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E12', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E12', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E12', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E12', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E12', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E12', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E12', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E13', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E13', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E13', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E13', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E13', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E13', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E13', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E13', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E13', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E13', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E13', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E13', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E13', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E13', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E13', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E13', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E13', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E13', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E13', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E14', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E14', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E14', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E14', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E14', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E14', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E14', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E14', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E14', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E14', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E14', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E14', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E14', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E14', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E14', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E14', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E14', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E14', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E14', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E15', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E15', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E15', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E15', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E15', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E15', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E15', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E15', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E15', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E15', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E15', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E15', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E15', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E15', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E15', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E15', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E15', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E15', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E15', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E16', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E16', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E16', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E16', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E16', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E16', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E16', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E16', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E16', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E16', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E16', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E16', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E16', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E16', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E16', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E16', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E16', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E16', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E16', 'T3'));
					}
				} else if (commandsFnTranslations('c1', 'E17', statementT0Command).length > 1) {
					annyang.start();
					var voiceCommand = commandsFnTranslations('c40', 'E17', statementT0Command);
					if (commandsFnTranslations('c2q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E17', 'T3'));
					} else if (commandsFnTranslations('c5q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c5r')) {
						eval(evaluateScript('S2', 'E17', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E17', 'T3'));
					} else if (commandsFnTranslations('c2q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E17', 'T3'));
					} else if (commandsFnTranslations('c9q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E17', 'T3'));
					} else if (commandsFnTranslations('c13q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E17', 'T3'));
					} else if (commandsFnTranslations('c18q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E17', 'T3'));
					} else if (commandsFnTranslations('c23q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E17', 'T3'));
					} else if (commandsFnTranslations('c27q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E17', 'T3'));
					}
				}
			} else if (commandsFnTranslations('c34', 'E1', commands[commandID]).length > 1) {
				var statementT0Command = commandsFnTranslations('c35', 'E1', commands[commandID]);
				var timeoutPeriod = commandsFnTranslations('c36', 'E1', commands[commandID]);
				if (commandsFnTranslations('c1', 'E1', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E1', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E1', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E1', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E1', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E1', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E1', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E1', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E1', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E1', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E1', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E1', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E1', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E1', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E1', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E1', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E1', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E1', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E1', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E2', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E2', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E2', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E2', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E2', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E2', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E2', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E2', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E2', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E2', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E2', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E2', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E2', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E2', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E2', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E2', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E2', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E2', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E2', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E3', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E3', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E3', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E3', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E3', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E3', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E3', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E3', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E3', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E3', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E3', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E3', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E3', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E3', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E3', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E3', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E3', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E3', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E3', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E4', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E4', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E4', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E4', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E4', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E4', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E4', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E4', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E4', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E4', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E4', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E4', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E4', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E4', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E4', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E4', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E4', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E4', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E4', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E5', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E5', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E5', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E5', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E5', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E5', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E5', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E5', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E5', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E5', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E5', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E5', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E5', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E5', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E5', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E5', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E5', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E5', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E5', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E6', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E6', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E6', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E6', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E6', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E6', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E6', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E6', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E6', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E6', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E6', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E6', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E6', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E6', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E6', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E6', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E6', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E6', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E6', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E7', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E7', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E7', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E7', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E7', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E7', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E7', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E7', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E7', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E7', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E7', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E7', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E7', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E7', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E7', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E7', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E7', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E7', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E7', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E8', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E8', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E8', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E8', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E8', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E8', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E8', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E8', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E8', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E8', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E8', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E8', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E8', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E8', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E8', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E8', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E8', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E8', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E8', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E9', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E9', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E9', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E9', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E9', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E9', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E9', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E9', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E9', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E9', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E9', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E9', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E9', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E9', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E9', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E9', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E9', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E9', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E9', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E10', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E10', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E10', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E10', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E10', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E10', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E10', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E10', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E10', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E10', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E10', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E10', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E10', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E10', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E10', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E10', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E10', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E10', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E10', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E11', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E11', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E11', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E11', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E11', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E11', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E11', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E11', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E11', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E11', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E11', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E11', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E11', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E11', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E11', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E11', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E11', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E11', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E11', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E12', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E12', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E12', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E12', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E12', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E12', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E12', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E12', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E12', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E12', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E12', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E12', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E12', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E12', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E12', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E12', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E12', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E12', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E12', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E13', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E13', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E13', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E13', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E13', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E13', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E13', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E13', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E13', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E13', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E13', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E13', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E13', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E13', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E13', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E13', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E13', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E13', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E13', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E14', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E14', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E14', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E14', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E14', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E14', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E14', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E14', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E14', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E14', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E14', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E14', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E14', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E14', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E14', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E14', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E14', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E14', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E14', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E15', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E15', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E15', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E15', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E15', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E15', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E15', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E15', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E15', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E15', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E15', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E15', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E15', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E15', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E15', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E15', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E15', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E15', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E15', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E16', statementT0Command).length > 1) {
					if (commandsFnTranslations('c2q', 'E16', statementT0Command) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E16', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E16', statementT0Command) == commandsFnTranslations('c5r'), statementT0Command.includes(commandsFnTranslations('c44r')) || statementT0Command.includes(commandsFnTranslations('c45r')) || statementT0Command.includes(commandsFnTranslations('c46r')) || statementT0Command.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E16', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E16', statementT0Command) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E16', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E16', statementT0Command) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E16', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E16', statementT0Command) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E16', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E16', statementT0Command) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E16', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E16', statementT0Command) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E16', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E16', statementT0Command) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E16', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E16', statementT0Command) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E16', 'T1'));
					}
				} else if (commandsFnTranslations('c1', 'E17', statementT0Command).length > 1) {
					annyang.start();
					var voiceCommand = commandsFnTranslations('c40', 'E17', statementT0Command);
					if (commandsFnTranslations('c2q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E17', 'T1'));
					} else if (commandsFnTranslations('c5q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c5r')) {
						eval(evaluateScript('S2', 'E17', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E17', 'T1'));
					} else if (commandsFnTranslations('c2q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E17', 'T1'));
					} else if (commandsFnTranslations('c9q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E17', 'T1'));
					} else if (commandsFnTranslations('c13q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E17', 'T1'));
					} else if (commandsFnTranslations('c18q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E17', 'T1'));
					} else if (commandsFnTranslations('c23q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E17', 'T1'));
					} else if (commandsFnTranslations('c27q', 'E17', statementT0Command, voiceCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E17', 'T1'));
					}
				}
			} else if (commandsFnTranslations('c37', 'E1', commands[commandID]).length > 1) {
				var intervalCommand = commandsFnTranslations('c38', 'E1', commands[commandID]);
				var intervalPeriod = commandsFnTranslations('c39', 'E1', commands[commandID]);
				if (commandsFnTranslations('c1', 'E1', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E1', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E1', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E1', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E1', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E1', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E1', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E1', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E1', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E1', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E1', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E1', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E1', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E1', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E1', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E1', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E1', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E1', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E1', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E2', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E2', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E2', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E2', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E2', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E2', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E2', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E2', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E2', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E2', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E2', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E2', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E2', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E2', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E2', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E2', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E2', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E2', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E2', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E3', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E3', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E3', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E3', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E3', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E3', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E3', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E3', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E3', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E3', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E3', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E3', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E3', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E3', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E3', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E3', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E3', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E3', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E3', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E4', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E4', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E4', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E4', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E4', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E4', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E4', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E4', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E4', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E4', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E4', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E4', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E4', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E4', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E4', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E4', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E4', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E4', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E4', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E5', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E5', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E5', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E5', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E5', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E5', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E5', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E5', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E5', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E5', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E5', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E5', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E5', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E5', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E5', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E5', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E5', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E5', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E5', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E6', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E6', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E6', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E6', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E6', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E6', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E6', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E6', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E6', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E6', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E6', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E6', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E6', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E6', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E6', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E6', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E6', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E6', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E6', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E7', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E7', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E7', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E7', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E7', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E7', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E7', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E7', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E7', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E7', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E7', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E7', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E7', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E7', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E7', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E7', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E7', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E7', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E7', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E8', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E8', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E8', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E8', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E8', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E8', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E8', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E8', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E8', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E8', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E8', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E8', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E8', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E8', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E8', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E8', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E8', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E8', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E8', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E9', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E9', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E9', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E9', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E9', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E9', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E9', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E9', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E9', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E9', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E9', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E9', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E9', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E9', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E9', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E9', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E9', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E9', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E9', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E10', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E10', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E10', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E10', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E10', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E10', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E10', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E10', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E10', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E10', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E10', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E10', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E10', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E10', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E10', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E10', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E10', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E10', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E10', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E11', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E11', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E11', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E11', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E11', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E11', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E11', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E11', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E11', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E11', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E11', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E11', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E11', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E11', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E11', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E11', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E11', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E11', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E11', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E12', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E12', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E12', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E12', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E12', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E12', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E12', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E12', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E12', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E12', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E12', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E12', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E12', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E12', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E12', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E12', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E12', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E12', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E12', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E13', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E13', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E13', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E13', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E13', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E13', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E13', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E13', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E13', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E13', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E13', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E13', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E13', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E13', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E13', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E13', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E13', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E13', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E13', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E14', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E14', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E14', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E14', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E14', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E14', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E14', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E14', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E14', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E14', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E14', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E14', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E14', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E14', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E14', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E14', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E14', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E14', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E14', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E15', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E15', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E15', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E15', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E15', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E15', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E15', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E15', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E15', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E15', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E15', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E15', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E15', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E15', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E15', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E15', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E15', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E15', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E15', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E16', intervalCommand).length > 1) {
					if (commandsFnTranslations('c2q', 'E16', intervalCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E16', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E16', intervalCommand) == commandsFnTranslations('c5r'), intervalCommand.includes(commandsFnTranslations('c44r')) || intervalCommand.includes(commandsFnTranslations('c45r')) || intervalCommand.includes(commandsFnTranslations('c46r')) || intervalCommand.includes(commandsFnTranslations('c47r'))) {
						eval(evaluateScript('S2', 'E16', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E16', intervalCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E16', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E16', intervalCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E16', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E16', intervalCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E16', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E16', intervalCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E16', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E16', intervalCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E16', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E16', intervalCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E16', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E16', intervalCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E16', 'T2'));
					}
				} else if (commandsFnTranslations('c1', 'E17', intervalCommand).length > 1) {
					annyang.start();
					var voiceCommand = commandsFnTranslations('c40', 'E17', intervalCommand);
					if (commandsFnTranslations('c2q', 'E17', intervalCommand, voiceCommand) == commandsFnTranslations('c2ruA')) {
						eval(evaluateScript('S1', 'E17', 'T2'));
					} else if (commandsFnTranslations('c5q', 'E17', intervalCommand, voiceCommand) == commandsFnTranslations('c5r')) {
						eval(evaluateScript('S2', 'E17', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E17', intervalCommand, voiceCommand) == commandsFnTranslations('c2ruB')) {
						eval(evaluateScript('S3', 'E17', 'T2'));
					} else if (commandsFnTranslations('c2q', 'E17', intervalCommand, voiceCommand) == commandsFnTranslations('c2ruC')) {
						eval(evaluateScript('S4', 'E17', 'T2'));
					} else if (commandsFnTranslations('c9q', 'E17', intervalCommand, voiceCommand) == commandsFnTranslations('c9r')) {
						eval(evaluateScript('S5', 'E17', 'T2'));
					} else if (commandsFnTranslations('c13q', 'E17', intervalCommand, voiceCommand) == commandsFnTranslations('c13r')) {
						eval(evaluateScript('S6', 'E17', 'T2'));
					} else if (commandsFnTranslations('c18q', 'E17', intervalCommand, voiceCommand) == commandsFnTranslations('c18r')) {
						eval(evaluateScript('S7', 'E17', 'T2'));
					} else if (commandsFnTranslations('c23q', 'E17', intervalCommand, voiceCommand) == commandsFnTranslations('c23r')) {
						eval(evaluateScript('S8', 'E17', 'T2'));
					} else if (commandsFnTranslations('c27q', 'E17', intervalCommand, voiceCommand) == commandsFnTranslations('c27r')) {
						eval(evaluateScript('S9', 'E17', 'T2'));
					}
				}
			} else if (commandsFnTranslations('c1', 'E1', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E1', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E1', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E1', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E1', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E1', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E1', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E1', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E1', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E1', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E1', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E1', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E1', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E1', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E1', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E1', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E1', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E1', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E1', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E2', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E2', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E2', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E2', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E2', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E2', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E2', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E2', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E2', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E2', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E2', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E2', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E2', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E2', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E2', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E2', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E2', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E2', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E2', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E3', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E3', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E3', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E3', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E3', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E3', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E3', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E3', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E3', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E3', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E3', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E3', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E3', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E3', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E3', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E3', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E3', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E3', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E3', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E4', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E4', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E4', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E4', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E4', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E4', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E4', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E4', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E4', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E4', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E4', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E4', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E4', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E4', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E4', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E4', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E4', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E4', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E4', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E5', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E5', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E5', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E5', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E5', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E5', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E5', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E5', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E5', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E5', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E5', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E5', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E5', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E5', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E5', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E5', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E5', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E5', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E5', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E6', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E6', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E6', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E6', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E6', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E6', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E6', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E6', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E6', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E6', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E6', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E6', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E6', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E6', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E6', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E6', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E6', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E6', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E6', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E7', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E7', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E7', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E7', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E7', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E7', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E7', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E7', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E7', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E7', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E7', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E7', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E7', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E7', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E7', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E7', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E7', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E7', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E7', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E8', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E8', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E8', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E8', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E8', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E8', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E8', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E8', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E8', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E8', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E8', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E8', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E8', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E8', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E8', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E8', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E8', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E8', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E8', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E9', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E9', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E9', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E9', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E9', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E9', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E9', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E9', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E9', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E9', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E9', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E9', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E9', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E9', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E9', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E9', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E9', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E9', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E9', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E10', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E10', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E10', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E10', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E10', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E10', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E10', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E10', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E10', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E10', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E10', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E10', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E10', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E10', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E10', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E10', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E10', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E10', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E10', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E11', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E11', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E11', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E11', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E11', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E11', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E11', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E11', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E11', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E11', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E11', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E11', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E11', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E11', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E11', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E11', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E11', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E11', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E11', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E12', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E12', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E12', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E12', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E12', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E12', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E12', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E12', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E12', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E12', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E12', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E12', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E12', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E12', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E12', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E12', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E12', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E12', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E12', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E13', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E13', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E13', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E13', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E13', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E13', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E13', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E13', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E13', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E13', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E13', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E13', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E13', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E13', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E13', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E13', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E13', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E13', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E13', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E14', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E14', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E14', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E14', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E14', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E14', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E14', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E14', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E14', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E14', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E14', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E14', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E14', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E14', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E14', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E14', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E14', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E14', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E14', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E15', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E15', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E15', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E15', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E15', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E15', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E15', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E15', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E15', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E15', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E15', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E15', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E15', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E15', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E15', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E15', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E15', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E15', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E15', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E16', commands[commandID]).length > 1) {
				if (commandsFnTranslations('c2q', 'E16', commands[commandID]) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E16', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E16', commands[commandID]) == commandsFnTranslations('c5r'), commands[commandID].includes(commandsFnTranslations('c44r')) || commands[commandID].includes(commandsFnTranslations('c45r')) || commands[commandID].includes(commandsFnTranslations('c46r')) || commands[commandID].includes(commandsFnTranslations('c47r'))) {
					eval(evaluateScript('S2', 'E16', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E16', commands[commandID]) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E16', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E16', commands[commandID]) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E16', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E16', commands[commandID]) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E16', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E16', commands[commandID]) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E16', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E16', commands[commandID]) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E16', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E16', commands[commandID]) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E16', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E16', commands[commandID]) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E16', 'T0'));
				}
			} else if (commandsFnTranslations('c1', 'E17', commands[commandID]).length > 1) {
				annyang.start();
				var voiceCommand = commandsFnTranslations('c40', 'E17', commands[commandID]);
				if (commandsFnTranslations('c2q', 'E17', commands[commandID], voiceCommand) == commandsFnTranslations('c2ruA')) {
					eval(evaluateScript('S1', 'E17', 'T0'));
				} else if (commandsFnTranslations('c5q', 'E17', commands[commandID], voiceCommand) == commandsFnTranslations('c5r')) {
					eval(evaluateScript('S2', 'E17', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E17', commands[commandID], voiceCommand) == commandsFnTranslations('c2ruB')) {
					eval(evaluateScript('S3', 'E17', 'T0'));
				} else if (commandsFnTranslations('c2q', 'E17', commands[commandID], voiceCommand) == commandsFnTranslations('c2ruC')) {
					eval(evaluateScript('S4', 'E17', 'T0'));
				} else if (commandsFnTranslations('c9q', 'E17', commands[commandID], voiceCommand) == commandsFnTranslations('c9r')) {
					eval(evaluateScript('S5', 'E17', 'T0'));
				} else if (commandsFnTranslations('c13q', 'E17', commands[commandID], voiceCommand) == commandsFnTranslations('c13r')) {
					eval(evaluateScript('S6', 'E17', 'T0'));
				} else if (commandsFnTranslations('c18q', 'E17', commands[commandID], voiceCommand) == commandsFnTranslations('c18r')) {
					eval(evaluateScript('S7', 'E17', 'T0'));
				} else if (commandsFnTranslations('c23q', 'E17', commands[commandID], voiceCommand) == commandsFnTranslations('c23r')) {
					eval(evaluateScript('S8', 'E17', 'T0'));
				} else if (commandsFnTranslations('c27q', 'E17', commands[commandID], voiceCommand) == commandsFnTranslations('c27r')) {
					eval(evaluateScript('S9', 'E17', 'T0'));
				}
			}
		}
	}
	$(function () {
		//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		//-----------------------------------------------------------Firebase Center------------------------------------------------------------------------------------------------------------------------------------------//
		//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		$.fn[firebaseCenterTranslations[lang]] = function (options) {
			// Establish our default settings
			var settings = $.extend({
				[usernameTranslations[lang]]: null,
				[passwordTranslations[lang]]: null
			}, options);
			return this.each(function () {
				sessionStorage.firebaseID = settings[usernameTranslations[lang]];
				sessionStorage.firebaseKey = settings[passwordTranslations[lang]];
				var config = {
					apiKey: sessionStorage.firebaseKey,
					authDomain: sessionStorage.firebaseID + ".firebaseapp.com",
					databaseURL: "https://" + sessionStorage.firebaseID + ".firebaseio.com",
					storageBucket: sessionStorage.firebaseID + ".appspot.com",
				};
				firebase.initializeApp(config);
				var database = firebase.database();
			});
		};
		//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		//----------------------------------------------------------------Login Form------------------------------------------------------------------------------------------------------------------------------------------//
		//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		$.fn[loginFormTranslations[lang]] = function (options) {
			// Establish our default settings
			var settings = $.extend({}, options);
			return this.each(function () {
				$('body').append('<div id="firebaseui-container"></div>');

				function getRecaptchaMode() {
					// Quick way of checking query params in the fragment. If we add more config
					// we might want to actually parse the fragment as a query string.
					return location.hash.indexOf('recaptcha=invisible') !== -1 ? 'invisible' : 'normal';
				}

				function getUiConfig() {
					return {
						'callbacks': {
							// Called when the user has been successfully signed in.
							'signInSuccess': function (user, credential, redirectUrl) {
								handleSignedInUser(user);
								// Do not redirect.
								return false;
							}
						},
						// Opens IDP Providers sign-in flow in a popup.
						'signInFlow': 'popup',
						'signInOptions': [
							// TODO(developer): Remove the providers you don't need for your app.
							{
								provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
								scopes: ['https://www.googleapis.com/auth/plus.login']
							}, {
								provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
								scopes: ['public_profile', 'email', 'user_likes', 'user_friends']
							},
							firebase.auth.TwitterAuthProvider.PROVIDER_ID, {
								provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
								recaptchaParameters: {
									size: getRecaptchaMode()
								}
							}
						],
						// Terms of service url.
						'tosUrl': 'https://www.google.com'
					};
				}
				// Initialize the FirebaseUI Widget using Firebase.
				var ui = new firebaseui.auth.AuthUI(firebase.auth());
				/**
				 * @return {string} The URL of the FirebaseUI standalone widget.
				 */
				function getWidgetUrl() {
					return '/widget#recaptcha=' + getRecaptchaMode();
				}
				/**
				 * Redirects to the FirebaseUI widget.
				 */
				var signInWithRedirect = function () {
					window.location.assign(getWidgetUrl());
				};
				/**
				 * Open a popup with the FirebaseUI widget.
				 */
				var signInWithPopup = function () {
					window.open(getWidgetUrl(), 'Sign In', 'width=985,height=735');
				};
				/**
				 * Displays the UI for a signed in user.
				 * @param {!firebase.User} user
				 */
				var handleSignedInUser = function (user) {
					window.user = user;
					console.log(user.uid);
					sessionStorage.displayName = user.displayName;
					sessionStorage.email = user.email;
					sessionStorage.phoneNumber = user.phoneNumber;
					if (user.photoURL) {
						sessionStorage.profilePhoto = user.photoURL;
					}
				};
				/**
				 * Displays the UI for a signed out user.
				 */
				var handleSignedOutUser = function () {
					ui.start('#firebaseui-container', getUiConfig());
					$('contents').hide();
				};
				// Listen to change in auth state so it displays the correct UI for when
				// the user is signed in or not.
				firebase.auth().onAuthStateChanged(function (user) {
					user ? handleSignedInUser(user) : handleSignedOutUser();
				});
				/**
				 * Deletes the user's account.
				 */
				var deleteAccount = function () {
					firebase.auth().currentUser.delete().catch(function (error) {
						if (error.code == 'auth/requires-recent-login') {
							// The user's credential is too old. She needs to sign in again.
							firebase.auth().signOut().then(function () {
								// The timeout allows the message to be displayed after the UI has
								// changed to the signed out state.
								setTimeout(function () {
									alert('Please sign in again to delete your account.');
								}, 1);
							});
						}
					});
				};
				/**
				 * Handles when the user changes the reCAPTCHA config.
				 */
				function handleRecaptchaConfigChange() {
					var newRecaptchaValue = document.querySelector('input[name="recaptcha"]:checked').value;
					location.replace(location.pathname + '#recaptcha=' + newRecaptchaValue);
					// Reset the inline widget so the config changes are reflected.
					ui.reset();
					ui.start('#firebaseui-container', getUiConfig());
				}
			});
		};
		//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		//---------------------------------------------------------------------Setup------------------------------------------------------------------------------------------------------------------------------------------//
		//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		$.fn[setupTranslations[lang]] = function (options) {
			// Establish our default settings
			var settings = $.extend({
				[logoTranslations[lang]]: null,
				[titleTranslations[lang]]: null,
				[modeTranslations[lang]]: null,
				[widthTranslations[lang]]: document.documentElement.clientWidth,
				[lengthTranslations[lang]]: document.documentElement.clientHeight,
				[attributesTranslations[lang]]: null
			}, options);
			return this.each(function () {
				document.defaultWindowLength = settings[lengthTranslations[lang]];
				document.defaultWindowWidth = settings[widthTranslations[lang]];
				if (settings[modeTranslations[lang]] == 'site') {
					$('body').append('<contents></contents>');
				} else if (settings[modeTranslations[lang]] == 'app') {
					$('body').append('<paper-header-panel><paper-toolbar><paper-button slot="top" on-tap="menuAction"><i class="material-icons">menu</i></paper-button><div slot="top" class="title">' + settings[titleTranslations[lang]] + '</div></paper-toolbar><div><contents></contents></div></paper-header-panel>');
				}
				if (settings[logoTranslations[lang]]) {
					$('head').append('<link rel="icon" type="image/png" href="' + settings[logoTranslations[lang]] + '">');
				}
				if (settings[titleTranslations[lang]]) {
					$('head').append('<title>' + settings[titleTranslations[lang]] + '</title>');
				}
				if (settings[attributesTranslations[lang]]) {
					var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
					for (i = 0; i < propertiesArray.length; i++) {
						if (propertiesArray[i] == remoteScrollingTranslations[lang]) {
							var canvas = $('<canvas style="display: none;">').get(0),
								context = canvas.getContext('2d'),
								video = document.createElement('video'),
								fist_pos_old,
								detector;
							document.getElementsByTagName('body')[0].appendChild(canvas);
							try {
								compatibility.getUserMedia({
									video: true
								}, function (stream) {
									try {
										video.src = compatibility.URL.createObjectURL(stream);
									} catch (error) {
										video.src = stream;
									}
									compatibility.requestAnimationFrame(play);
								}, function (error) {
									alert("WebRTC not available");
								});
							} catch (error) {
								alert(error);
							}

							function play() {
								compatibility.requestAnimationFrame(play);
								if (video.paused) video.play();
								if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {
									/* Prepare the detector once the video dimensions are known: */
									if (!detector) {
										var width = ~~(80 * video.videoWidth / video.videoHeight);
										var height = 80;
										detector = new objectdetect.detector(width, height, 1.1, objectdetect.handfist);
									}
									/* Draw video overlay: */
									canvas.width = ~~(100 * video.videoWidth / video.videoHeight);
									canvas.height = 100;
									context.drawImage(video, 0, 0, canvas.clientWidth, canvas.clientHeight);
									var coords = detector.detect(video, 1);
									if (coords[0]) {
										var coord = coords[0];
										/* Rescale coordinates from detector to video coordinate space: */
										coord[0] *= video.videoWidth / detector.canvas.width;
										coord[1] *= video.videoHeight / detector.canvas.height;
										coord[2] *= video.videoWidth / detector.canvas.width;
										coord[3] *= video.videoHeight / detector.canvas.height;
										/* Find coordinates with maximum confidence: */
										var coord = coords[0];
										for (var i = coords.length - 1; i >= 0; --i)
											if (coords[i][4] > coord[4]) coord = coords[i];
										/* Scroll window: */
										var fist_pos = [coord[0] + coord[2] / 2, coord[1] + coord[3] / 2];
										if (fist_pos_old) {
											var dx = (fist_pos[0] - fist_pos_old[0]) / video.videoWidth,
												dy = (fist_pos[1] - fist_pos_old[1]) / video.videoHeight;
											window.scrollBy(dx * 200, dy * 200);
										} else fist_pos_old = fist_pos;
										/* Draw coordinates on video overlay: */
										context.beginPath();
										context.lineWidth = '2';
										context.fillStyle = 'rgba(0, 255, 255, 0.5)';
										context.fillRect(coord[0] / video.videoWidth * canvas.clientWidth, coord[1] / video.videoHeight * canvas.clientHeight, coord[2] / video.videoWidth * canvas.clientWidth, coord[3] / video.videoHeight * canvas.clientHeight);
										context.stroke();
									} else fist_pos_old = null;
								}
							}
						}
					}
				}
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//---------------------------------------------------------------------Page------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[pageTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[nameTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						$('contents').append('<page id="' + settings[nameTranslations[lang]] + '" style="display: none;"></page>');
						$('#' + decodeURIComponent(getAllUrlParams().page) + '').fadeIn(500);
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
					})
				}
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//----------------------------------------------------------------------Text------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[textFnTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[textTranslations[lang]]: 'It seems that you have typed nothing',
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[attributesTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var out = '<p id="' + name + '"></p>';
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == shareableTranslations[lang]) {
									shareThis({
										selector: '#' + name + '',
										sharers: [twitterSharer, facebookSharer, linkedInSharer, redditSharer, emailSharer]
									}).init();
								}
							}
						}
						var insertedText = settings[textTranslations[lang]];
						var dynamicTextsArrayA = settings[textTranslations[lang]].split('&lt;&lt; the value of ');
						(function (dynamicTextsArrayA, insertedText) {
							setInterval(function () {
								for (i = 1; i < dynamicTextsArrayA.length; i++) {
									var textResourceA = dynamicTextsArrayA[i].split(' &gt;&gt;')[0];
									var newText = insertedText.replace('&lt;&lt; the value of ' + textResourceA + ' &gt;&gt;', $('#' + textResourceA + '').val());
								}
								$('#' + name + '').html(newText);
							}, 5000);
						})(dynamicTextsArrayA, insertedText);
						var dynamicTextsArrayB = settings[textTranslations[lang]].split('&lt;&lt; the text of ');
						(function (dynamicTextsArrayB, insertedText) {
							setInterval(function () {
								for (i = 1; i < dynamicTextsArrayB.length; i++) {
									var textResourceB = dynamicTextsArrayB[i].split(' &gt;&gt;')[0];
									var newText = insertedText.replace('&lt;&lt; the text of ' + textResourceB + ' &gt;&gt;', $('#' + textResourceB + '').text());
								}
								$('#' + name + '').html(newText);
							}, 5000);
						})(dynamicTextsArrayB, insertedText);
						var customTextsArrayAB = insertedText.split('&lt;&lt; ' + "the user's name" + ' ');
						if (customTextsArrayAB.length > 1) {
							setTimeout(function () {
								for (i = 1; i < customTextsArrayAB.length; i++) {
									var customTextAB = customTextsArrayAB[i].split(' &gt;&gt;')[0];
									insertedText = insertedText.replace('&lt;&lt; ' + "the user's name" + ' &gt;&gt;', window.user.displayName);
								}
								$('#' + name + '').html(insertedText);
							}, 2000);
						} else {
							$('#' + name + '').html(insertedText);
						}
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[fontStyleTranslations[lang]]) {
							$('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
						}
						if (settings[thicknessTranslations[lang]]) {
							if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
								$('#' + name + '').css('font-weight', 'bold');
							} else {
								$('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
							}
						}
						if (settings[fontSizeTranslations[lang]]) {
							$('#' + name + '').css('font-size', convertLengthCSS(settings[fontSizeTranslations[lang]]));
						}
						if ($('#' + settings[containerTranslations[lang]] + '').hasClass('row') == true) {
							$('#' + name + '').addClass('col');
						}
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------Button------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[buttonTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[textTranslations[lang]]: 'It seems that you have typed nothing',
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[disabledTranslations[lang]]: null,
						[raisedTranslations[lang]]: null,
						[switchedTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[attributesTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var out = '<paper-button id="' + name + '"></paper-button>';
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						$('#' + name + '').text(settings[textTranslations[lang]]);
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[fontStyleTranslations[lang]]) {
							$('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == disabledTranslations[lang]) {
									$('#' + name + '').attr('disabled', '');
								} else if (propertiesArray[i] == raisedTranslations[lang]) {
									$('#' + name + '').attr('raised', '');
								} else if (propertiesArray[i] == switchedTranslations[lang]) {
									$('#' + name + '').attr('toggled', '');
								}
							}
						}
						if (settings[thicknessTranslations[lang]]) {
							if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
								$('#' + name + '').css('font-weight', 'bold');
							} else {
								$('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
							}
						}
						if (settings[fontSizeTranslations[lang]]) {
							$('#' + name + '').css('font-size', convertLengthCSS(settings[fontSizeTranslations[lang]]));
						}
						if ($('#' + settings[containerTranslations[lang]] + '').hasClass('row') == true) {
							$('#' + name + '').addClass('col');
						}
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//----------------------------------------------------------------------Card------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[sectionTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[textTranslations[lang]]: 'It seems that you have typed nothing',
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var out = '<paper-card id="' + name + '"><div id="الحاجات_اللى_جوة_السيكشن" class="card-content"></div></paper-card>';
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[imageSourceTranslations[lang]]) {
							$('#' + name + '').attr('image', settings[imageSourceTranslations[lang]]);
						}
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//-------------------------------------------------------------------ToolTip------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[tooltipTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[textTranslations[lang]]: 'It seems that you have typed nothing',
						[titleTranslations[lang]]: null,
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[emitterTranslations[lang]]: null,
						[directionTranslations[lang]]: fromTheTopTranslations[lang],
						[animationTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						if (settings[directionTranslations[lang]] == fromTheRightTranslations[lang]) {
							var position = 'right';
						} else if (settings[directionTranslations[lang]] == fromTheLeftTranslations[lang]) {
							var position = 'left';
						} else if (settings[directionTranslations[lang]] == fromTheTopTranslations[lang]) {
							var position = 'top';
						} else if (settings[directionTranslations[lang]] == fromTheBottomTranslations[lang]) {
							var position = 'bottom';
						}
						if (settings[titleTranslations[lang]]) {
							$('#' + settings[emitterTranslations[lang]]).tipso({
								titleContent: settings[titleTranslations[lang]],
								content: settings[textTranslations[lang]],
								position: position,
								background: '#FE5970'
							});
						} else {
							$('#' + settings[emitterTranslations[lang]]).tipso({
								content: settings[textTranslations[lang]],
								position: position,
								background: '#FE5970'
							});
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//------------------------------------------------------------Colors Palette------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[colorsPaletteTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var out = '<paper-swatch-picker id="' + name + '" color="{{selectedColor}}"></paper-swatch-picker>';
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------Loader------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[loaderTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[loadingTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[typeTranslations[lang]]: null,
						[attributesTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						if (settings[typeTranslations[lang]] == settings[barTranslations[lang]]) {
							var out = '<paper-progress id="' + name + '"></paper-progress>';
						} else if (settings[typeTranslations[lang]] == settings[spinnerTranslations[lang]]) {
							var out = '<paper-spinner id="' + name + '"></paper-spinner>';
						}
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == loadingTranslations[lang]) {
									$('#' + name + '').attr('active', '');
								}
							}
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//---------------------------------------------------------------------Image------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[imageTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[titleTranslations[lang]]: null,
						[typeTranslations[lang]]: null,
						[sourceTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[FXTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var isLogo = false;
						var name = settings[nameTranslations[lang]];
						var source = settings[sourceTranslations[lang]];
						window.analyseImage(name, source);
						if (settings[typeTranslations[lang]] == iconTranslations[lang]) {
							getFileSize(source, function (size) {
								if (size.split(' kb')[0] < 100) {
									isLogo = true;
									var out = '<img id="' + name + '" width="' + settings[imageWidthTranslations[lang]] + '" height="' + settings[imageLengthTranslations[lang]] + '" src="' + source + '" />';
								} else {
									var out = '<paper-material elevation="2" id="' + name + '_container" style="position: relative; overflow: hidden;"> \
								<img id="' + name + '" src="' + window.mediaImageBlurredA + '" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> \
								<div id="showImage_' + name + '_containerA"> \
								<p id="' + name + '_imageData" class="imageData"></p> \
								<button id="image_' + name + '_mainButton" class="imageMainButton" onclick="showImageA(\'' + name + '\', \'' + source + '\');"> \
								<i class="material-icons">file_download</i> Loading...</button></div> \
								<div id="showImage_' + name + '_containerB" style="display: none;"> \
								<p class="nudesFoundWarningText">Nudes found</p><button class="yesShowTheNudes" onclick="showImageC(\'' + name + '\', \'' + source + '\');">Continue</button> \
								<button class="showBlurredNudes" onclick="showImageB(\'' + name + '\', \'' + source + '\');">Show Blurred</button></div> \
								<div id="showImage_' + name + '_containerC" style="display: none;"> \
								<p class="showTheFullContentWarning">Show the full content ?</p> \
								<button class="yesRemoveTheBlur" onclick="showImageD(\'' + name + '\');">Continue</button></paper-container>';
								}
							});
						} else {
							if (settings[titleTranslations[lang]]) {
								containerHeight = parseInt(settings[imageLengthTranslations[lang]]) + 40;
								var out = '<paper-material elevation="2" id="' + name + '_container" style="position: relative; overflow: hidden;"> \
								<img id="' + name + '" src="' + window.mediaImageBlurredA + '" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> \
								<div id="showImage_' + name + '_containerA"> \
								<p id="' + name + '_imageData" class="imageData"></p> \
								<button id="image_' + name + '_mainButton" class="imageMainButton" onclick="showImageA(\'' + name + '\', \'' + source + '\');"> \
								<i class="material-icons">file_download</i> Loading...</button></div> \
								<div id="showImage_' + name + '_containerB" style="display: none;"> \
								<p class="nudesFoundWarningText">Nudes found</p><button class="yesShowTheNudes" onclick="showImageC(\'' + name + '\', \'' + source + '\');">Continue</button> \
								<button class="showBlurredNudes" onclick="showImageB(\'' + name + '\', \'' + source + '\');">Show Blurred</button></div> \
								<div id="showImage_' + name + '_containerC" style="display: none;"> \
								<p class="showTheFullContentWarning">Show the full content ?</p> \
								<button class="yesRemoveTheBlur" onclick="showImageD(\'' + name + '\');">Continue</button></paper-container>';
							} else {
								var out = '<paper-material elevation="2" id="' + name + '_container" style="position: relative; overflow: hidden;"> \
								<img id="' + name + '" src="' + window.mediaImageBlurredA + '" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> \
								<div id="showImage_' + name + '_containerA"> \
								<p id="' + name + '_imageData" class="imageData"></p> \
								<button id="image_' + name + '_mainButton" class="imageMainButton" onclick="showImageA(\'' + name + '\', \'' + source + '\');"> \
								<i class="material-icons">file_download</i> Loading...</button></div> \
								<div id="showImage_' + name + '_containerB" style="display: none;"> \
								<p class="nudesFoundWarningText">Nudes found</p><button class="yesShowTheNudes" onclick="showImageC(\'' + name + '\', \'' + source + '\');">Continue</button> \
								<button class="showBlurredNudes" onclick="showImageB(\'' + name + '\', \'' + source + '\');">Show Blurred</button></div> \
								<div id="showImage_' + name + '_containerC" style="display: none;"> \
								<p class="showTheFullContentWarning">Show the full content ?</p> \
								<button class="yesRemoveTheBlur" onclick="showImageD(\'' + name + '\');">Continue</button></paper-container>';
							}
						}
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						getFileSize(source, function (size) {
							$('#image_' + name + '_mainButton').html('<i class="material-icons">file_download</i> ' + size);
						})
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[titleTranslations[lang]]) {
							$('#' + name + '').attr('alt', settings[titleTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]], 'img');
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]], 'img');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							if (isLogo == true) {
								setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
							} else {
								setDistance(name + '_container', 'bottom', settings[distanceFromBottomTranslations[lang]]);
							}
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							if (isLogo == true) {
								setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
							} else {
								setDistance(name + '_container', 'top', settings[distanceFromTopTranslations[lang]]);
							}
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							if (isLogo == true) {
								setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
							} else {
								setDistance(name + '_container', 'left', settings[distanceFromLeftTranslations[lang]]);
							}
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							if (isLogo == true) {
								setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
							} else {
								setDistance(name + '_container', 'right', settings[distanceFromRightTranslations[lang]]);
							}
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
						if (settings[FXTranslations[lang]] == 'rain') {
							$('#' + name + '').attr('fx', 'rain');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//---------------------------------------------------------------------Video------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[videoTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[titleTranslations[lang]]: null,
						[sourceTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var source = settings[sourceTranslations[lang]];
						var out = '<div id="' + name + '_container" style="position: relative; overflow: hidden;"> \
						<video id="' + name + '" crossorigin="anonymous" style="-webkit-filter: blur(10px); background: black;" preload="auto" /> \
						<div id="showVideo_' + name + '_containerA"> \
						<button id="video_' + name + '_mainButton" class="videoMainButton" onclick="showVideoA(\'' + name + '\', \'' + source + '\');"> \
						<i class="material-icons">play_arrow</i> Loading...</button></div> \
						<div id="showVideo_' + name + '_containerB" style="display: none;"> \
						<p style="position: relative; color: #FFFFFF; top: 20%; left: 50%; transform: translate(-50%, -50%);">Nudes found</p> \
						<button style="position: relative; top: 65%; left: 50%; background-color: silver; opacity: 0.5; border-radius: 100px; border: 5px solid; color: #FFFFFF; max-width: 200px; max-height: 60px; width: 50%; height: 30%; transform: translate(-50%, -50%);" onclick="showVideoB(\'' + name + '\');">Continue</button></div>';
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						getFileSize(source, function (size) {
							$('#video_' + name + '_mainButton').html('<i class="material-icons">play_arrow</i> ' + size);
						})
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[videoWidthTranslations[lang]]) {
							$('#' + name + '').attr('width', settings[imageWidthTranslations[lang]]);
						}
						if (settings[videoLengthTranslations[lang]]) {
							$('#' + name + '').attr('length', settings[videoLengthTranslations[lang]]);
						}
						if (settings[titleTranslations[lang]]) {
							$('#' + name + '').attr('alt', settings[titleTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]], 'vid');
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]], 'vid');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name + '_container', 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name + '_container', 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name + '_container', 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name + '_container', 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------ِAuido Player------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[audioPlayerTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[autoplayTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[attributesTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var autoplay = false;
						var out = '<div id="' + name + '" class="aplayer"></div>';
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == autoplayTranslations[lang]) {
									var autoplay = true;
								}
							}
						}
						document.initializeAudioPlayerA = [];
						document.initializeAudioPlayerB = [];
						document.initializeAudioPlayerA[name] = new Function("title, author, url", "document." + name + " = new APlayer({element: document.getElementById('" + name + "'), narrow: false, autoplay: " + autoplay + ", showlrc: 0, mutex: true, theme: '#e6d0b2', mode: 'random', preload: 'metadata', listmaxheight: '513px', music: {title: title, author: author, url: url}});");
						document.initializeAudioPlayerB[name] = new Function("title, author, url, coverURL", "document." + name + " = new APlayer({element: document.getElementById('" + name + "'), narrow: false, autoplay: " + autoplay + ", showlrc: 0, mutex: true, theme: '#e6d0b2', mode: 'random', preload: 'metadata', listmaxheight: '513px', music: {title: title, author: author, url: url, pic: coverURL}});");
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[titleTranslations[lang]]) {
							$('#' + name + '').attr('alt', settings[titleTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//---------------------------------------------------------------------Audio------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[audioTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[titleTranslations[lang]]: null,
						[authorTranslations[lang]]: null,
						[coverTranslations[lang]]: null,
						[autoplayTranslations[lang]]: null,
						[audioPlayerTranslations]: 'false',
						[sourceTranslations[lang]]: null,
					}, options);
					return this.each(function () {
						var source = settings[sourceTranslations[lang]];
						if (settings[coverTranslations[lang]]) {
							var audioInfo = [{
								title: settings[titleTranslations[lang]],
								author: settings[authorTranslations[lang]],
								url: settings[sourceTranslations[lang]],
								pic: settings[coverTranslations[lang]]
							}];
							if ($('#' + settings[audioPlayerTranslations[lang]]).html().trim() != "") {
								document[settings[audioPlayerTranslations[lang]]].addMusic(audioInfo);
							} else {
								document.initializeAudioPlayerB[settings[audioPlayerTranslations[lang]]](settings[titleTranslations[lang]], settings[authorTranslations[lang]], settings[sourceTranslations[lang]], settings[coverTranslations[lang]]);
							}
						} else {
							var audioInfo = [{
								title: settings[titleTranslations[lang]],
								author: settings[authorTranslations[lang]],
								url: settings[sourceTranslations[lang]]
							}];
							if ($('#' + settings[audioPlayerTranslations[lang]]).html().trim() != "") {
								document[settings[audioPlayerTranslations[lang]]].addMusic(audioInfo);
							} else {
								document.initializeAudioPlayerA[settings[audioPlayerTranslations[lang]]](settings[titleTranslations[lang]], settings[authorTranslations[lang]], settings[sourceTranslations[lang]]);
							}
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//-----------------------------------------------------------------ِSlideshow------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[slideShowTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[autoplayTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[attributesTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var autoplay = false;
						var out = '<div id="' + name + '" class="owl-carousel owl-theme"></div>';
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == autoplayTranslations[lang]) {
									autoplay = true;
								}
							}
						}
						jQuery(document).ready(function ($) {
							$('#' + name + '').owlCarousel({
								animateOut: 'slideOutDown',
								animateIn: 'flipInX',
								items: 1,
								margin: 30,
								loop: true,
								stagePadding: 30,
								smartSpeed: 450,
								autoHeight: true,
								rtl: document.isRTL,
								autoplay: autoplay,
								autoplayHoverPause: true,
								URLhashListener: true,
								autoplayTimeout: 5000
							});
						});
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[titleTranslations[lang]]) {
							$('#' + name + '').attr('alt', settings[titleTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//---------------------------------------------------------------------SlideShow Item------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[slideShowItemTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[slideShowTranslations[lang]]: null,
						[typeTranslations[lang]]: imageTranslations[lang],
						[sourceTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var source = settings[sourceTranslations[lang]];
						if (settings[typeTranslations[lang]] == imageTranslations[lang]) {
							var out = '<div class="owl-item" data-hash="' + name + '"><img src="' + source + '"></img></div>';
						} else if (settings[typeTranslations[lang]] == videoTranslations[lang]) {
							var out = '<div class="item-video" data-hash="' + name + '"><a class="owl-video" href="' + source + '"></a></div>'
						}
						$('#' + settings[slideShowTranslations[lang]] + '').append(out);
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[titleTranslations[lang]]) {
							$('#' + name + '').attr('alt', settings[titleTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------Notification Count------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[notificationCountTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[textTranslations[lang]]: 'It seems that you have typed nothing',
						[iconTranslations[lang]]: null,
						[targetTranslations[lang]]: null,
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var out = '<paper-badge id="' + name + '" for="' + targetTranslations[lang] + '"></paper-badge>';
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[fontStyleTranslations[lang]]) {
							$('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
						}
						if (settings[textTranslations[lang]]) {
							$('#' + name + '').attr('label', settings[textTranslations[lang]]);
						}
						if (settings[iconTranslations[lang]]) {
							$('#' + name + '').attr('icon', settings[iconTranslations[lang]]);
						}
						if (settings[thicknessTranslations[lang]]) {
							if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
								$('#' + name + '').css('font-weight', 'bold');
							} else {
								$('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
							}
						}
						if (settings[fontSizeTranslations[lang]]) {
							$('#' + name + '').css('font-size', convertLengthCSS(settings[fontSizeTranslations[lang]]));
						}
						if ($('#' + settings[containerTranslations[lang]] + '').hasClass('row') == true) {
							$('#' + name + '').addClass('col');
						}
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//------------------------------------------------------------------Checkbox------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[checkboxTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[textTranslations[lang]]: null,
						[descriptionTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[disabledTranslations[lang]]: null,
						checked: null,
						[rippleTranslations[lang]]: null,
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[attributesTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var out = '<paper-checkbox id="' + name + '">' + settings[textTranslations[lang]] + '';
						if (settings[descriptionTranslations[lang]]) {
							out += '<span class="subtitle">' + settings[descriptionTranslations[lang]] + '</span>';
						}
						out += '</paper-checkbox>';
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[fontStyleTranslations[lang]]) {
							$('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == disabledTranslations[lang]) {
									$('#' + name + '').attr('disabled', '');
								} else if (settings.checked == yesTranslations[lang]) {
									$('#' + name + '').attr('checked', '');
								} else if (propertiesArray[i] == rippleTranslations[lang]) {
									$('#' + name + '').attr('noink', '');
								}
							}
						}
						if (settings[thicknessTranslations[lang]]) {
							if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
								$('#' + name + '').css('font-weight', 'bold');
							} else {
								$('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
							}
						}
						if (settings[fontSizeTranslations[lang]]) {
							$('#' + name + '').css('font-size', convertLengthCSS(settings[fontSizeTranslations[lang]]));
						}
						if ($('#' + settings[containerTranslations[lang]] + '').hasClass('row') == true) {
							$('#' + name + '').addClass('col');
						}
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//----------------------------------------------------------------Dialog Box------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[dialogBoxTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[titleTranslations[lang]]: null,
						[acceptanceButtonTranslations[lang]]: null,
						[cancellationButtonTranslations[lang]]: null,
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var out = '<div id="' + name + '" class="modal modal-fixed-footer">';
						if (settings[titleTranslations[lang]]) {
							out += '<div class="modal-content" elementTitle="' + settings[titleTranslations[lang]] + '"><h4>' + settings[titleTranslations[lang]] + '</h4></div>';
						} else {
							out += '<div class="modal-content"></div>';
						}
						if (settings[cancellationButtonTranslations[lang]] || settings[acceptanceButtonTranslations[lang]]) {
							out += '<div class="modal-footer">';
							if (settings[cancellationButtonTranslations[lang]]) {
								out += '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">' + settings[cancellationButtonTranslations[lang]] + '</a>';
							}
							if (settings[acceptanceButtonTranslations[lang]]) {
								out += '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">' + settings[acceptanceButtonTranslations[lang]] + '</a>';
							}
							out += '</div>';
						}
						out += '</div>';
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[fontStyleTranslations[lang]]) {
							$('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
						}
						if (settings[emitterTranslations[lang]]) {
							$('#' + settings[emitterTranslations[lang]] + '').attr('onclick', settings[nameTranslations[lang]] + '.open()');
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[thicknessTranslations[lang]]) {
							if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
								$('#' + name + '').css('font-weight', 'bold');
							} else {
								$('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
							}
						}
						if (settings[fontSizeTranslations[lang]]) {
							$('#' + name + '').css('font-size', convertLengthCSS(settings[fontSizeTranslations[lang]]));
						}
						if ($('#' + settings[containerTranslations[lang]] + '').hasClass('row') == true) {
							$('#' + name + '').addClass('col');
						}
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
						$('#' + name + '').modal();
						$('#' + name + '').css('position', 'fixed')
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//------------------------------------------------------------------Dropdown------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[dropdownTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[titleTranslations[lang]]: null,
						[itemsTranslations[lang]]: null,
						[rippleTranslations[lang]]: null,
						preselected: null,
						[disabledTranslations[lang]]: null,
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[attributesTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var out = '<div class="input-field"> \
						<select id="' + name + '" style="display: block;"> \
						<option value="" disabled selected>Choose your option</option>';
						if (settings[itemsTranslations[lang]]) {
							if (settings[itemsTranslations[lang]].includes(inTheGroupTranslations[lang])) {
								var itemsGroups = settings[itemsTranslations[lang]].split(' &amp;&amp;&amp;&amp; ');
								for (a = 0; a < itemsGroups.length; a++) {
									if (itemsGroups[a].includes(inTheGroupTranslations[lang])) {
										var items = itemsGroups[a].split(' ' + inTheGroupTranslations[lang])[0].split(' &amp;&amp;&amp; ');
										out += '<optgroup label="' + itemsGroups[a].split(' ' + inTheGroupTranslations[lang])[1] + '">'
										for (i = 0; i < items.length; i++) {
											out += '<option value="' + items[i] + '">' + items[i] + '</option>';
										}
										out += '</optgroup>';
									} else {
										var items = itemsGroups[a].split(' &amp;&amp;&amp; ');
										for (i = 0; i < items.length; i++) {
											out += '<option value="' + items[i] + '">' + items[i] + '</option>';
										}
									}
								}
							}
						}
						if (settings[titleTranslations[lang]]) {
							out += '</select><label>' + settings[titleTranslations[lang]] + '</label></div>';
						} else {
							out += '</select></div>';
						}
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[fontStyleTranslations[lang]]) {
							$('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == disabledTranslations[lang]) {
									$('#' + name + '').attr('disabled', '');
								} else if (propertiesArray[i] == rippleTranslations[lang]) {
									$('#' + name + '').attr('noink', '');
								}
							}
						}
						if (settings[thicknessTranslations[lang]]) {
							if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
								$('#' + name + '').css('font-weight', 'bold');
							} else {
								$('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
							}
						}
						if (settings[fontSizeTranslations[lang]]) {
							$('#' + name + '').css('font-size', convertLengthCSS(settings[fontSizeTranslations[lang]]));
						}
						if ($('#' + settings[containerTranslations[lang]] + '').hasClass('row') == true) {
							$('#' + name + '').addClass('col');
						}
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
						$('#' + name + '').material_select();
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//-----------------------------------------------------------------------FAB------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[FABTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[descriptionTranslations[lang]]: null,
						[iconTranslations[lang]]: null,
						[textTranslations[lang]]: null,
						[rippleTranslations[lang]]: null,
						mini: null,
						[disabledTranslations[lang]]: null,
						[rippleTranslations[lang]]: null,
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[attributesTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var out = '<paper-fab ';
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (settings.mini == yesTranslations[lang]) {
									out += 'mini ';
								} else if (propertiesArray[i] == disabledTranslations[lang]) {
									out += 'disabled ';
								}
							}
						}
						if (settings[rippleTranslations[lang]] == noTranslations[lang]) {
							out += 'noink ';
						}
						if (settings[textTranslations[lang]]) {
							out += 'label="' + settings[textTranslations[lang]] + '" ';
						}
						if (settings[iconTranslations[lang]]) {
							out += 'icon="' + settings[iconTranslations[lang]] + '" ';
						}
						if (settings[descriptionTranslations[lang]]) {
							out += 'title="' + settings[descriptionTranslations[lang]] + '" ';
						}
						out += 'id="' + name + '"></paper-fab>';
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[fontStyleTranslations[lang]]) {
							$('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == disabledTranslations[lang]) {
									$('#' + name + '').attr('disabled', '');
								}
							}
						}
						if (settings[rippleTranslations[lang]] == noTranslations[lang]) {
							$('#' + name + '').attr('noink', '');
						}
						if (settings[thicknessTranslations[lang]]) {
							if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
								$('#' + name + '').css('font-weight', 'bold');
							} else {
								$('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
							}
						}
						if (settings[fontSizeTranslations[lang]]) {
							$('#' + name + '').css('font-size', convertLengthCSS(settings[fontSizeTranslations[lang]]));
						}
						if ($('#' + settings[containerTranslations[lang]] + '').hasClass('row') == true) {
							$('#' + name + '').addClass('col');
						}
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//-------------------------------------------------------------------TextBox------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[writingZoneTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[typeTranslations[lang]]: null,
						[maxTranslations[lang]]: null,
						[minTranslations[lang]]: null,
						[requirementTranslations[lang]]: null,
						errorMessage: null,
						[prefixTranslations[lang]]: null,
						[suffixTranslations[lang]]: null,
						[clearButtonTranslations[lang]]: null,
						required: null,
						counter: null,
						[dynamicSizeTranslations[lang]]: null,
						[disabledTranslations[lang]]: null,
						[rippleTranslations[lang]]: null,
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[attributesTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						if (settings[dynamicSizeTranslations[lang]] == yesTranslations[lang]) {
							var out = 'paper-textarea ';
						} else {
							var out = '<paper-input '
						}
						if (settings[titleTranslations[lang]]) {
							out += 'label="' + settings[titleTranslations[lang]] + '" ';
						}
						if (settings[typeTranslations[lang]] == 'password') {
							out += 'type="password" ';
						} else if (settings[typeTranslations[lang]] == 'number') {
							out += 'type="number" ';
						}
						if (settings[requirementTranslations[lang]] == 'someText') {
							out += 'auto-validate ';
						} else if (settings[requirementTranslations[lang]] == 'lettersOnly') {
							out += 'auto-validate allowed-pattern="[a-zA-Z]"';
						} else if (settings[requirementTranslations[lang]]) {
							out += 'auto-validate allowed-pattern="' + settings[requirementTranslations[lang]] + '"';
						}
						if (settings[maxTranslations[lang]]) {
							out += 'maxlength="' + settings[maxTranslations[lang]] + '" ';
						}
						if (settings[minTranslations[lang]]) {
							out += 'minlength="' + settings[minTranslations[lang]] + '" ';
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == disabledTranslations[lang]) {
									out += 'disabled ';
								} else if (propertiesArray[i] == counterTranslations[lang]) {
									out += 'char-counter ';
								}
							}
						}
						if (settings[rippleTranslations[lang]] == noTranslations[lang]) {
							out += 'noink ';
						}
						if (settings[textTranslations[lang]]) {
							out += 'label="' + settings[textTranslations[lang]] + '" ';
						}
						if (settings[iconTranslations[lang]]) {
							out += 'icon="' + settings[iconTranslations[lang]] + '" ';
						}
						if (settings[descriptionTranslations[lang]]) {
							out += 'title="' + settings[descriptionTranslations[lang]] + '" ';
						}
						out += 'id="' + name + '">';
						if (settings[prefixTranslations[lang]]) {
							var prefix = settings[prefixTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < prefix.length; i++) {
								if (prefix[i].split("an icon of ")[1]) {
									out += '<iron-icon icon="' + prefix[i].split("an icon of ")[1] + '" prefix></iron-icon>';
								} else {
									out += '<div prefix>' + prefix[i] + '</div>';
								}
							}
						}
						if (settings[suffixTranslations[lang]]) {
							var suffix = settings[suffixTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < suffix.length; i++) {
								if (suffix[i].split("an icon of ")[1]) {
									out += '<iron-icon icon="' + suffix[i].split("an icon of ")[1] + '" suffix></iron-icon>';
								} else {
									out += '<div suffix>' + suffix[i] + '</div>';
								}
							}
						}
						if (settings[clearButtonTranslations[lang]] == yesTranslations[lang]) {
							out += '<paper-icon-button suffix onclick="clearInput()" icon="clear" alt="clear" title="clear"></paper-icon-button>';
						}
						if (settings[dynamicSizeTranslations[lang]] == yesTranslations[lang]) {
							out += '</paper-textarea>';
						} else {
							out += '</paper-input>'
						}
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[typeTranslations[lang]] == 'date') {
							$('#' + name + '').pickadate({
								selectMonths: true,
								selectYears: 100,
								today: 'Today',
								clear: 'Clear',
								close: 'Ok',
								closeOnSelect: false
							});
						} else if (settings[typeTranslations[lang]] == 'time') {
							$('#' + name + '').pickatime({
								default: 'now',
								donetext: 'OK',
								cleartext: 'Clear',
								canceltext: 'Cancel'
							});
						}
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[fontStyleTranslations[lang]]) {
							$('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == disabledTranslations[lang]) {
									$('#' + name + '').attr('disabled', '');
								}
							}
						}
						if (settings[rippleTranslations[lang]] == noTranslations[lang]) {
							$('#' + name + '').attr('noink', '');
						}
						if (settings[thicknessTranslations[lang]]) {
							if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
								$('#' + name + '').css('font-weight', 'bold');
							} else {
								$('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
							}
						}
						if (settings[fontSizeTranslations[lang]]) {
							$('#' + name + '').css('font-size', convertLengthCSS(settings[fontSizeTranslations[lang]]));
						}
						if ($('#' + settings[containerTranslations[lang]] + '').hasClass('row') == true) {
							$('#' + name + '').addClass('col');
						}
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//-----------------------------------------------------------------Container------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[containerTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[attributesTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var out = '<paper-material elevation="2" id="' + name + '" class="' + name + '"></paper-material>'
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == gridTranslations[lang]) {
									$('#' + name + '').addClass('row');
								}
							}
						}
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[fontStyleTranslations[lang]]) {
							$('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
						}
						if (settings[shapeTranslations[lang]]) {
							if (settings[shapeTranslations[lang]] == triangleTranslations[lang]) {
								$('#' + name + '').addClass('triangle');
							} else if (settings[shapeTranslations[lang]] == trapezoidTranslations[lang]) {
								$('#' + name + '').addClass('trapezoid');
							} else if (settings[shapeTranslations[lang]] == parallelogramTranslations[lang]) {
								$('#' + name + '').addClass('parallelogram');
							} else if (settings[shapeTranslations[lang]] == rhombusTranslations[lang]) {
								$('#' + name + '').addClass('rhombus');
							} else if (settings[shapeTranslations[lang]] == pentagonTranslations[lang]) {
								$('#' + name + '').addClass('pentagon');
							} else if (settings[shapeTranslations[lang]] == hexagonTranslations[lang]) {
								$('#' + name + '').addClass('hexagon');
							} else if (settings[shapeTranslations[lang]] == heptagonTranslations[lang]) {
								$('#' + name + '').addClass('heptagon');
							} else if (settings[shapeTranslations[lang]] == octagonTranslations[lang]) {
								$('#' + name + '').addClass('octagon');
							} else if (settings[shapeTranslations[lang]] == decagonTranslations[lang]) {
								$('#' + name + '').addClass('decagon');
							} else if (settings[shapeTranslations[lang]] == circleTranslations[lang]) {
								$('#' + name + '').addClass('circle');
							} else if (settings[shapeTranslations[lang]] == ellipseTranslations[lang]) {
								$('#' + name + '').addClass('ellipse');
							}
						}
						if (settings[thicknessTranslations[lang]]) {
							if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
								$('#' + name + '').css('font-weight', 'bold');
							} else {
								$('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
							}
						}
						if (settings[fontSizeTranslations[lang]]) {
							$('#' + name + '').css('font-size', convertLengthCSS(settings[fontSizeTranslations[lang]]));
						}
						if ($('#' + settings[containerTranslations[lang]] + '').hasClass('row') == true) {
							$('#' + name + '').addClass('col');
						}
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'absolute');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[attributesTranslations[lang]]) {
							if (settings[attributesTranslations[lang]].indexOf(parallaxTranslations[lang]) > -1) {
								if (settings[backgroundTranslations[lang]]) {
									$('#' + name + '').css('background', 'url(' + settings[backgroundTranslations[lang]] + ') 50% 0 no-repeat fixed');
								}
							} else {
								if (settings[backgroundTranslations[lang]]) {
									setBG(name, settings[backgroundTranslations[lang]]);
								}
							}
						} else {
							if (settings[backgroundTranslations[lang]]) {
								setBG(name, settings[backgroundTranslations[lang]]);
							}
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//---------------------------------------------------------------------Table------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[tableTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[dataTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[attributesTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						var out = 'table id="' + name + '" class="responsive-table centered highlight"><thead></thead><tbody class="list"></tbody></table>'
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[dataTranslations[lang]]) {
							var inputDataPlainA = settings[dataTranslations[lang]].split(' &amp;&amp;&amp;&amp; ');
							var inputDataRaw = '[';
							for (var a = 0; a < inputDataPlainA.length; a++) {
								var inputDataPlainB = inputDataPlainA[a].split(' &amp;&amp;&amp; ');
								inputDataRaw += '{';
								for (var i = 0; i < inputDataPlainB.length; i++) {
									if (i == inputDataPlainB.length - 1) {
										var cellData = inputDataPlainB[i].split(' ' + inTheCellTranslations[lang] + ' ')[0];
										var cellName = inputDataPlainB[i].split(' ' + inTheCellTranslations[lang] + ' ')[1];
										inputDataRaw += '"' + cellName + '": "' + cellData + '"';
									} else {
										var cellData = inputDataPlainB[i].split(' ' + inTheCellTranslations[lang] + ' ')[0];
										var cellName = inputDataPlainB[i].split(' ' + inTheCellTranslations[lang] + ' ')[1];
										inputDataRaw += '"' + cellName + '": "' + cellData + '", ';
									}
								}
								if (a == inputDataPlainA.length - 1) {
									inputDataRaw += '}';
								} else {
									inputDataRaw += '}, ';
								}
							}
							inputDataRaw += ']';
						}
						var inputData = JSON.parse(inputDataRaw);
						var keys = [];
						for (var i = 0; i < inputData.length; i++) {
							Object.keys(inputData[i]).forEach(function (key) {
								if (keys.indexOf(key) == -1) {
									keys.push(key);
								}
							});
						}
						var template = '<tr>';
						for (i = 0; i < keys.length; i++) {
							$('#' + name + ' > thead').append('<th>' + keys[i] + '</th>');
							template += '<td class="' + keys[i] + '"></td>';
						}
						template += '</tr>';
						var options = {
							valueNames: keys,
							item: template
						};
						var userList = new List(name + '_container', options, inputData);
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == gridTranslations[lang]) {
									$('#' + name + '').addClass('row');
								}
							}
						}
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[fontStyleTranslations[lang]]) {
							$('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
						}
						if (settings[thicknessTranslations[lang]]) {
							if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
								$('#' + name + '').css('font-weight', 'bold');
							} else {
								$('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
							}
						}
						if (settings[fontSizeTranslations[lang]]) {
							$('#' + name + '').css('font-size', convertLengthCSS(settings[fontSizeTranslations[lang]]));
						}
						if ($('#' + settings[containerTranslations[lang]] + '').hasClass('row') == true) {
							$('#' + name + '').addClass('col');
						}
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[attributesTranslations[lang]]) {
							if (settings[attributesTranslations[lang]].indexOf(parallaxTranslations[lang]) > -1) {
								if (settings[backgroundTranslations[lang]]) {
									$('#' + name + '').css('background', 'url(' + settings[backgroundTranslations[lang]] + ') 50% 0 no-repeat fixed');
								}
							} else {
								if (settings[backgroundTranslations[lang]]) {
									setBG(name, settings[backgroundTranslations[lang]]);
								}
							}
						} else {
							if (settings[backgroundTranslations[lang]]) {
								setBG(name, settings[backgroundTranslations[lang]]);
							}
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------Slider------------------------------------------------------------------------------------------------------------------------------------------//
				//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
				$.fn[sliderTranslations[lang]] = function (options) {
					// Establish our default settings
					var settings = $.extend({
						[titleTranslations[lang]]: null,
						[maxTranslations[lang]]: null,
						[minTranslations[lang]]: null,
						[stepTranslations[lang]]: null,
						[progressTranslations[lang]]: null,
						prevalue: null,
						[valueBoxTranslations[lang]]: null,
						[disabledTranslations[lang]]: null,
						[fontColorTranslations[lang]]: null,
						[fontSizeTranslations[lang]]: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[thicknessTranslations[lang]]: null,
						[fontStyleTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[transparencyTranslations[lang]]: null,
						[distanceFromBottomTranslations[lang]]: null,
						[distanceFromTopTranslations[lang]]: null,
						[distanceFromLeftTranslations[lang]]: null,
						[distanceFromRightTranslations[lang]]: null,
						[positionTranslations[lang]]: null,
						[containerTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
						[attributesTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
					}, options);
					return this.each(function () {
						var name = settings[nameTranslations[lang]];
						if (settings[titleTranslations[lang]]) {
							var out = '<div>' + settings[titleTranslations[lang]] + '</div><br><paper-slider ';
						} else {
							var out = '<paper-slider '
						}
						if (settings[maxTranslations[lang]]) {
							out += 'max="' + settings[maxTranslations[lang]] + '" ';
						}
						if (settings[minTranslations[lang]]) {
							out += 'min="' + settings[minTranslations[lang]] + '" ';
						}
						if (settings[progressTranslations[lang]]) {
							out += 'secondary-progress="' + settings[progressTranslations[lang]] + '" ';
						}
						if (settings[stepTranslations[lang]]) {
							out += 'step="' + settings[stepTranslations[lang]] + '" ';
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == disabledTranslations[lang]) {
									out += 'disabled ';
								} else if (propertiesArray[i] == withPinTranslations[lang]) {
									out += 'pin ';
								} else if (propertiesArray[i] == valueBoxTranslations[lang]) {
									out += 'editable ';
								}
							}
						}
						out += 'id="' + name + '">';
						out += '</paper-slider>'
						if (settings[containerTranslations[lang]]) {
							if ($('#' + settings[containerTranslations[lang]] + '').hasClass('modal')) {
								$('#' + settings[containerTranslations[lang]] + ' > .modal-content').append(out);
							} else {
								$('#' + settings[containerTranslations[lang]] + '').append(out);
							}
						} else {
							$('contents').append(out);
						}
						if (settings[fontColorTranslations[lang]]) {
							setFontColour(name, settings[fontColorTranslations[lang]]);
						}
						if (settings[fontStyleTranslations[lang]]) {
							$('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
						}
						if (settings[attributesTranslations[lang]]) {
							var propertiesArray = settings[attributesTranslations[lang]].split(' &amp;&amp;&amp; ');
							for (i = 0; i < propertiesArray.length; i++) {
								if (propertiesArray[i] == disabledTranslations[lang]) {
									$('#' + name + '').attr('disabled', '');
								} else if (propertiesArray[i] == rippleTranslations[lang]) {
									$('#' + name + '').removeAttr('noink');
								}
							}
						}
						if (settings[thicknessTranslations[lang]]) {
							if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
								$('#' + name + '').css('font-weight', 'bold');
							} else {
								$('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
							}
						}
						if (settings[fontSizeTranslations[lang]]) {
							$('#' + name + '').css('font-size', convertLengthCSS(settings[fontSizeTranslations[lang]]));
						}
						if ($('#' + settings[containerTranslations[lang]] + '').hasClass('row') == true) {
							$('#' + name + '').addClass('col');
						}
						if (settings[positionTranslations[lang]]) {
							$('#' + name + '').css('position', settings[positionTranslations[lang]]);
						} else {
							$('#' + name + '').css('position', 'relative');
						}
						if (settings[distanceFromBottomTranslations[lang]]) {
							setDistance(name, 'bottom', settings[distanceFromBottomTranslations[lang]]);
						}
						if (settings[distanceFromTopTranslations[lang]]) {
							setDistance(name, 'top', settings[distanceFromTopTranslations[lang]]);
						}
						if (settings[distanceFromLeftTranslations[lang]]) {
							setDistance(name, 'left', settings[distanceFromLeftTranslations[lang]]);
						}
						if (settings[distanceFromRightTranslations[lang]]) {
							setDistance(name, 'right', settings[distanceFromRightTranslations[lang]]);
						}
						if (settings[commandsTranslations[lang]]) {
							execute(name, settings[commandsTranslations[lang]]);
						}
						if (settings[widthTranslations[lang]]) {
							setDimension(name, 'width', settings[widthTranslations[lang]]);
						}
						if (settings[lengthTranslations[lang]]) {
							setDimension(name, 'length', settings[lengthTranslations[lang]]);
						}
						if (settings[backgroundTranslations[lang]]) {
							setBG(name, settings[backgroundTranslations[lang]]);
						}
						if (settings[animationTranslations[lang]]) {
							document.setAnimation(name, settings[animationTranslations[lang]]);
						}
						if (settings[transparencyTranslations[lang]]) {
							$('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
						}
					});
				};
			});
		};
	});
}(jQuery));
/*!
 * Declarations Live Version
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-23
 */
window.jsteVariablesStore = {};
window.jsteFunctionsStore = {};
window.jsteStylesStore = {};
var code = $("jste").html();
var detectedLang = detectLanguage(code);
if (detectedLang == 'English') {
	if (code.includes('colour') || code.includes('centre')) {
		document.langID = 0;
	} else {
		document.langID = 1;
	}
	document.langCode = 'en';
} else if (detectedLang == 'French') {
	document.langID = 2;
	document.langCode = 'fr';
} else if (detectedLang == 'Arabic') {
	if (code.includes('بتاعه') || code.includes('بتاعها') || code.includes('بتاعته') || code.includes('بتاعتها')) {
		document.langID = 4;
		document.langCode = 'arz';
	} else {
		document.langID = 3;
		document.langCode = 'ar';
	}
} else if (detectedLang == 'Japanese') {
	document.langID = 5;
}
if (navigator.platform == 'Win32') {
	window.localAddress = 'localhost';
} else {
	window.localAddress = '0.0.0.0';
}
$.get("https://jste-manager.herokuapp.com/deviceForm", function (data) {
	window.deviceForm = data;
});
document.isRTL = false;
window.corsPolicy = 'https://jste-cors-proxy.herokuapp.com/';
window.autoCorrectionAddress = "https://jste-manager.herokuapp.com/autoCorrect"
window.shareThis = window.ShareThis;
window.twitterSharer = window.ShareThisViaTwitter;
window.facebookSharer = window.ShareThisViaFacebook;
window.linkedInSharer = window.ShareThisViaLinkedIn;
window.redditSharer = window.ShareThisViaReddit;
window.emailSharer = window.ShareThisViaEmail;
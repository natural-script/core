/*!
 * Declarations
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-19
 */
var code = $("jste").html();
var detectedLang = franc(code, {
	whitelist: ['arb', 'eng', 'fra']
});
if (detectedLang == 'eng') {
	if (code.includes('colour') || code.includes('centre')) {
		document.langID = 0;
	} else {
		document.langID = 1;
	}
	document.langCode = 'en';
} else if (detectedLang == 'fra') {
	document.langID = 2;
	document.langCode = 'fr';
} else if (detectedLang == 'arb') {
	if (code.includes('بتاعه') || code.includes('بتاعها') || code.includes('بتاعته') || code.includes('بتاعتها')) {
		document.langID = 4;
		document.langCode = 'arz';
	} else {
		document.langID = 3;
		document.langCode = 'ar';
	}
} else if ($("ja-ja").length) {
	document.langID = 5;
}
if (navigator.platform == 'Win32') {
	window.localAddress = 'localhost';
} else {
	window.localAddress = '0.0.0.0';
}
$.get("http://" + window.localAddress + ":5050/deviceForm", function (data) {
	window.deviceForm = data;
});
$.get("http://" + window.localAddress + ":5050/childModeStatus", function (data) {
	window.childModeStatus == data;
});
$.get("http://" + window.localAddress + ":5050/nudityDetectionStatus", function (data) {
	window.nudityDetectionStatus == data;
});
document.isRTL = false;
window.corsPolicy = 'http://' + window.localAddress + ':6060/';
window.autoCorrectionAddress = "http://" + window.localAddress + ":5050/autoCorrect"
window.shareThis = window.ShareThis;
window.twitterSharer = window.ShareThisViaTwitter;
window.facebookSharer = window.ShareThisViaFacebook;
window.linkedInSharer = window.ShareThisViaLinkedIn;
window.redditSharer = window.ShareThisViaReddit;
window.emailSharer = window.ShareThisViaEmail;
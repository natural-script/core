/*!
 * Declarations
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-23
 */
console.log(`\n %c Jste v1.0.0 Nightly ${window.isLive ? '( Live Edition )' : ''} %c https://project-jste.github.io \n`, "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
window.jsteVariablesStore = {};
window.jsteFunctionsStore = {};
window.jsteStylesStore = {};
window.jsteComponentsFnStore = {};
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
if (!window.isLive) {
	if (navigator.platform == 'Win32') {
		window.localAddress = 'localhost';
	} else {
		window.localAddress = '0.0.0.0';
	}
}
fetch(window.isLive ? 'https://jste-manager.herokuapp.com/deviceForm' : `http://${window.localAddress}:5050/deviceForm`)
	.then(res => res.text())
	.then(data => window.deviceForm = data);
if (!window.isLive) {
	fetch(`http://${window.localAddress}:5050/childModeStatus`)
		.then(res => res.text())
		.then(data => window.childModeStatus = data);
	fetch(`http://${window.localAddress}:5050/nudityDetectionStatus`)
		.then(res => res.text())
		.then(data => window.nudityDetectionStatus = data);
}
document.isRTL = false;
window.corsPolicy = window.isLive ? 'https://jste-cors-proxy.herokuapp.com/' : `http://${window.localAddress}:6060/`;
window.autoCorrectionAddress = window.isLive ? 'https://jste-manager.herokuapp.com/autoCorrect' : `http://${window.localAddress}:5050/autoCorrect`;
window.shareThis = window.ShareThis;
window.twitterSharer = window.ShareThisViaTwitter;
window.facebookSharer = window.ShareThisViaFacebook;
window.linkedInSharer = window.ShareThisViaLinkedIn;
window.redditSharer = window.ShareThisViaReddit;
window.emailSharer = window.ShareThisViaEmail;
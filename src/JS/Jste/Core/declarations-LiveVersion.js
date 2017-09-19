/*!
 * Declarations Live Version
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-14
 */
if ($("en-uk").length) {
	document.lang = 0;
} else if ($("en-us").length) {
	document.lang = 1;
} else if ($("fr-fr").length) {
	document.lang = 2;
} else if ($("ar-ar").length) {
	document.lang = 3;
} else if ($("ar-eg").length) {
	document.lang = 4;
} else if ($("ja-ja").length) {
	document.lang = 5;
}
if (navigator.platform == 'Win32') {
	window.localAddress = 'localhost';
} else {
	window.localAddress = '0.0.0.0';
}
$.get("https://jste-manager.herokuapp.com/deviceForm", function (data) {
	window.deviceForm = data;
});
window.isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
document.isRTL = false;
window.corsPolicy = 'https://jste-cors-proxy.herokuapp.com/';
window.shareThis = window.ShareThis;
window.twitterSharer = window.ShareThisViaTwitter;
window.facebookSharer = window.ShareThisViaFacebook;
window.linkedInSharer = window.ShareThisViaLinkedIn;
window.redditSharer = window.ShareThisViaReddit;
window.emailSharer = window.ShareThisViaEmail;
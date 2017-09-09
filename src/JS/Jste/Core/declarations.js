//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Declaring Some Variables------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
if (navigator.platform == 'Win32') {
	window.localAddress = 'localhost';
} else {
	window.localAddress = '0.0.0.0';
}
$.get("http://0.0.0.0:5050/deviceForm", function (data) {
	document.deviceForm = data;
});
window.isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
document.isRTL = false;
window.corsPolicy = 'http://' + window.localAddress + ':6060/';
window.shareThis = window.ShareThis;
window.twitterSharer = window.ShareThisViaTwitter;
window.facebookSharer = window.ShareThisViaFacebook;
window.linkedInSharer = window.ShareThisViaLinkedIn;
window.redditSharer = window.ShareThisViaReddit;
window.emailSharer = window.ShareThisViaEmail;
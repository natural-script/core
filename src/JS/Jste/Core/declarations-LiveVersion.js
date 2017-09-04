//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Declaring Some Variables------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
if (navigator.platform == 'Win32') {
	window.localAddress = 'localhost';
} else {
	window.localAddress = '0.0.0.0';
}
window.isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
document.isRTL = false;
window.corsPolicy = 'https://cors-anywhere.herokuapp.com/';
window.shareThis = window.ShareThis;
window.twitterSharer = window.ShareThisViaTwitter;
window.facebookSharer = window.ShareThisViaFacebook;
window.linkedInSharer = window.ShareThisViaLinkedIn;
window.redditSharer = window.ShareThisViaReddit;
window.emailSharer = window.ShareThisViaEmail;
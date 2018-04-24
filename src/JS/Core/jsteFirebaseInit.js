//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------Initialization Of Jste Firebase------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
$(async function () {
	if (navigator.onLine) {
		var isReachable = await window.isReachable('https://jste-9584c.firebaseio.com/');
		if (isReachable) {
			var jsteFirebaseconfig = {
				apiKey: "AIzaSyDMGk_SFlEto93zfGHUbVLwxYiSq00aknk",
				authDomain: "jste-9584c.firebaseapp.com",
				databaseURL: "https://jste-9584c.firebaseio.com",
				storageBucket: "jste-9584c.appspot.com",
			};
			window.jsteFirebase = firebase.initializeApp(jsteFirebaseconfig, 'jsteFirebase');
		}
	}
}(jQuery));
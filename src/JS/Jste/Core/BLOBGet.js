//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------Requesting The Stored BLOBs------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.requestBLOB = function (name, type, url, URLID) {
	// Get the window displayed in the iframe.
	var receiver = document.getElementById('receiver').contentWindow;
	var sentMessageRaw = [];
	sentMessageRaw.name = name;
	sentMessageRaw.type = type;
	sentMessageRaw.action = 'request';
	sentMessageRaw.url = url;
	sentMessageRaw.URLID = URLID;
	receiver.postMessage(sentMessageRaw, 'https://jste-manager.herokuapp.com/db-manager.min.html');
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------Verifying If A Specific BLOB Exists------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.verifyBLOB = function (name, type, url, URLID, title) {
	// Get the window displayed in the iframe.
	var receiver = document.getElementById('receiver').contentWindow;
	var sentMessageRaw = [];
	sentMessageRaw.name = name;
	sentMessageRaw.type = type;
	sentMessageRaw.action = 'verify';
	sentMessageRaw.url = url;
	sentMessageRaw.URLID = URLID;
	if (title) {
		sentMessageRaw.title = title;
	}
	receiver.postMessage(sentMessageRaw, 'https://jste-manager.herokuapp.com/db-manager.min.html');
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------Dealing With The Incoming BLOB Info------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.addEventListener('message', function receiveMessage(recievedMessageRaw) {
	if (event.origin !== 'https://jste-manager.herokuapp.com') return;
	if (recievedMessageRaw.data.action == 'ready') {
		$('#receiver').prop('ready', true);
	} else if (recievedMessageRaw.data.action == 'verify') {
		var name = recievedMessageRaw.data.name;
		var source = recievedMessageRaw.data.url;
		var URLID = recievedMessageRaw.data.URLID;
		var title = recievedMessageRaw.data.title;
		if (recievedMessageRaw.data.type == 'img') {
			window.showImageA(name, URLID, source);
		} else if (recievedMessageRaw.data.type == 'vid') {
			window.showVideoA(name, source, title, URLID);
		}
	} else if (recievedMessageRaw.data.action == 'request') {
		if (recievedMessageRaw.data.type == 'vid') {
			var BLOBURL = window.URL.createObjectURL(recievedMessageRaw.data.BLOBObject);
			$('#' + recievedMessageRaw.data.name + '').html('<source src="' + BLOBURL + '" type="video/mp4" />');
		} else if (recievedMessageRaw.data.type == 'img') {
			var BLOBURL = window.URL.createObjectURL(recievedMessageRaw.data.BLOBObject);
			$('#' + recievedMessageRaw.data.name + '').attr('src', BLOBURL);
		}
	}
}, false);
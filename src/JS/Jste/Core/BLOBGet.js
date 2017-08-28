//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------Requesting The Stored BLOBs------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.requestBLOB = function (name, type, url) {
	// Get the window displayed in the iframe.
	var receiver = document.getElementById('receiver').contentWindow;
	var sentMessageRaw = [];
	sentMessageRaw.name = name;
	sentMessageRaw.type = type;
	sentMessageRaw.action = 'request';
	sentMessageRaw.url = url;
	receiver.postMessage(sentMessageRaw, 'http://' + window.localAddress + ':5050/db-manager.html');
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------Verifying If A Specific BLOB Exists------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.verifyBLOB = function (name, type, url) {
	// Get the window displayed in the iframe.
	var receiver = document.getElementById('receiver').contentWindow;
	var sentMessageRaw = [];
	sentMessageRaw.name = name;
	sentMessageRaw.type = type;
	sentMessageRaw.action = 'verify';
	sentMessageRaw.url = url;
	receiver.postMessage(sentMessageRaw, 'http://' + window.localAddress + ':5050/db-manager.html');
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------Dealing With The Incoming BLOB Info------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.addEventListener('message', function receiveMessage(recievedMessageRaw) {
	if (event.origin !== 'http://' + window.localAddress + ':5050') return;
	if (recievedMessageRaw.data.action == 'verify') {
		var name = recievedMessageRaw.data.name;
		var originalSource = recievedMessageRaw.data.originalSource;
		if (recievedMessageRaw.data.type == 'img') {
			window.showImageA(name, originalSource);
		} else if (recievedMessageRaw.data.type == 'vid') {
			window.showVideoA(name, originalSource);
		}
	} else if (recievedMessageRaw.data.action == 'request') {
		if (recievedMessageRaw.data.type == 'img' || recievedMessageRaw.data.type == 'vid') {
			var BLOBURL = window.URL.createObjectURL(recievedMessageRaw.data.BLOBObject);
			$('#' + recievedMessageRaw.data.name + '').attr('src', BLOBURL);
		}
	}
}, false);
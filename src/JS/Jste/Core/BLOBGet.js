//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------Requesting The Stored BLOBs------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.requestBLOB = function(name, type, url) {
	// Get the window displayed in the iframe.
	var receiver = document.getElementById('receiver').contentWindow;
	var sentMessageRaw = [];
	sentMessageRaw.name = name;
	sentMessageRaw.type = type;
	sentMessageRaw.url = url;
	receiver.postMessage(sentMessageRaw, 'http://' + window.localAddress + ':5050/db-manager.html');
}
window.addEventListener('message', function receiveMessage(recievedMessageRaw) {
	if (event.origin !== 'http://' + window.localAddress + ':5050') return;
	if (recievedMessageRaw.data.type == 'img' || recievedMessageRaw.data.type == 'vid') {
		var BLOBURL = window.URL.createObjectURL(recievedMessageRaw.data.BLOBObject);
		$('#' + recievedMessageRaw.data.name + '').attr('src', BLOBURL);
	}
}, false);
/*!
 * BLOBs manager
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------Converting Data URL To BLOB URL------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function dataURItoBlob(dataURI) {
	// convert base64 to raw binary data held in a string
	// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
	var byteString = atob(dataURI.split(',')[1]);
  
	// separate out the mime component
	var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  
	// write the bytes of the string to an ArrayBuffer
	var ab = new ArrayBuffer(byteString.length);
  
	// create a view into the buffer
	var ia = new Uint8Array(ab);
  
	// set the bytes of the buffer to the correct values
	for (var i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}
  
	// write the ArrayBuffer to a blob, and you're done
	var blob = new Blob([ab], {type: mimeString});
	return window.URL.createObjectURL(blob);
  
  }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------Requesting The Stored data URL------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.requestBLOB = function (url, URLID, callback) {
	$.post('http://' + window.localAddress + ':5050/verifyDataURL', {
		URLID: URLID
	}).done(function (data) {
		if (data == 'exists') {
			$.post('http://' + window.localAddress + ':5050/getDataURL', {
				URLID: URLID
			}).done(function (data) {
				callback(dataURItoBlob(data));
			});
		} else if (data == 'not exist') {
			var xhr = new XMLHttpRequest(),
				BLOBObject;
			xhr.open("GET", window.corsPolicy + url,
				true);
			xhr.responseType = "blob";
			xhr.addEventListener("load", function () {
				if (xhr.status === 200) {
					BLOBObject = xhr.response;
					var reader = new window.FileReader();
					reader.readAsDataURL(BLOBObject);
					reader.onloadend = function () {
						dataURL = reader.result;
						$.post('http://' + window.localAddress + ':5050/insertDataURL', {
							URLID: URLID,
							dataURL: dataURL
						});
						callback(dataURItoBlob(dataURL));
					};
				}
			}, false);
			xhr.send();
		}
	});
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------Verifying If A Specific data URL Exists------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.verifyBLOB = function (URLID, callback) {
	$.post('http://' + window.localAddress + ':5050/verifyDataURL', {
		URLID: URLID
	}).done(function (data) {
		callback(data);
	});
};
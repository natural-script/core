//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------Requesting The Stored data URL------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.requestDataURL = function (url, callback) {
	var URLID = encodeURIComponent(url).replace(/\./g, '%2E');
	$.post('http://0.0.0.0:5050/verifyDataURL', {
		URLID: URLID
	}).done(function (data) {
		if (data == 'exists') {
			$.post('http://0.0.0.0:5050/getDataURL', {
				URLID: URLID
			}).done(function (data) {
				callback(data);
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
						$.post('http://0.0.0.0:5050/insertDataURL', {
							URLID: URLID,
							dataURL: dataURL
						});
						callback(dataURL);
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
window.verifyDataURL = function (url, callback) {
	var URLID = encodeURIComponent(url).replace(/\./g, '%2E');
	$.post('http://0.0.0.0:5050/verifyDataURL', {
		URLID: URLID
	}).done(function (data) {
		callback(data);
	});
};
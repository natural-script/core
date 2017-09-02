//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------Requesting The Files Sizes------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
 window.getFileSize = function (url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("HEAD", window.corsPolicy + url, true); // Notice "HEAD" instead of "GET",
	//  to get only the header
	xhr.onreadystatechange = function() {
		if (this.readyState == this.DONE) {
			size = parseInt(xhr.getResponseHeader("Content-Length"));
			if (size < 1000) {
				callback(size + ' Bytes');
			} else if (size < 1000000) {
				callback(Math.round(size / 1000 * 10) / 10 + ' kb');
			} else if (size < 1000000000) {
				callback(Math.round(size / 1000000 * 10) / 10 + ' mb');
			} else if (size < 1000000000000) {
				callback(Math.round(size / 1000000000 * 10) / 10 + ' gb');
			}
		}
	};
	xhr.send();
}
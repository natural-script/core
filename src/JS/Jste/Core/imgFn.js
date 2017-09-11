//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Images Related Functions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function showImageA(name, URLID, source) {
	var nudity = $('#' + name + '').attr('nude');
	var fx = $('#' + name + '').attr('fx');
	if (typeof nudity !== typeof undefined && nudity !== false) {
		$.get("http://0.0.0.0:5050/childModeStatus", function (data) {
			if (data == 'off') {
				if ($('showImage_' + name + '_containerA').length > -1) {
					window.fadeOut('showImage_' + name + '_containerA');
				}
				window.fadeIn('showImage_' + name + '_containerB');
			} else if (data == 'on') {
				if ($('showImage_' + name + '_containerA').length > -1) {
					window.fadeOut('showImage_' + name + '_containerA');
				}
				window.fadeIn('showImage_' + name + '_containerD');
			}
		});
	} else {
		window.requestBLOB(source, URLID, function (BLOBURL) {
			$('#' + name + '').attr('src', BLOBURL);
		});
		$('#' + name + '').on('load', function () {
			window.URL.revokeObjectURL($('#' + name + '').attr('src'));
			$('#' + name + '').css('-webkit-filter', 'blur(0px)');
			if ($('showImage_' + name + '_containerA').length > -1) {
				window.fadeOut('showImage_' + name + '_containerA');
			}
			if (typeof fx !== typeof undefined && fx !== false) {
				if (fx == 'rain') {
					window.setDimension(name);
				}
			}
		});
	}
}

function showImageB(name, URLID, source) {
	window.requestBLOB(source, URLID, function (BLOBURL) {
		$('#' + name + '').attr('src', BLOBURL);
	});
	$('#' + name + '').on('load', function () {
		window.URL.revokeObjectURL($('#' + name + '').attr('src'));
		window.fadeOut('showImage_' + name + '_containerB');
		window.fadeIn('showImage_' + name + '_containerC');
	});
}

function showImageC(name, source) {
	window.requestBLOB(source, function (BLOBURL) {
		$('#' + name + '').attr('src', BLOBURL);
	});
	$('#' + name + '').on('load', function () {
		window.URL.revokeObjectURL($('#' + name + '').attr('src'));
		$('#' + name + '').css('-webkit-filter', 'blur(0px)');
		window.fadeOut('showImage_' + name + '_containerB');
		if (typeof fx !== typeof undefined && fx !== false) {
			if (fx == 'rain') {
				window.setDimension(name);
			}
		}
	});
}

function showImageD(name) {
	$('#' + name + '').css('-webkit-filter', 'blur(0px)');
	window.fadeOut('showImage_' + name + '_containerC');
	if (typeof fx !== typeof undefined && fx !== false) {
		if (fx == 'rain') {
			window.setDimension(name);
		}
	}
}
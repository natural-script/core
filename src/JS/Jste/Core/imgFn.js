//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Images Related Functions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function showImageA(name, source) {
	var nudity = $('#' + name + '').attr('nude');
	var fx = $('#' + name + '').attr('fx');
	if (typeof nudity !== typeof undefined && nudity !== false) {
		$.get("http://0.0.0.0:5050/childModeStatus", function (data) {
			if (data == 'off') {
				window.fadeOut('showImage_' + name + '_containerA');
				window.fadeIn('showImage_' + name + '_containerB');
			} else if (data == 'on') {
				window.fadeOut('showImage_' + name + '_containerA');
				window.fadeIn('showImage_' + name + '_containerD');
			}
		});
	} else {
		window.requestDataURL(source, function (dataURL) {
			$('#' + name + '').attr('src', dataURL);
		});
		$('#' + name + '').on('load', function () {
			$('#' + name + '').css('-webkit-filter', 'blur(0px)');
			window.fadeOut('showImage_' + name + '_containerA');
			if (typeof fx !== typeof undefined && fx !== false) {
				if (fx == 'rain') {
					window.setDimension(name);
				}
			}
		});
	}
}

function showImageB(name, source) {
	window.requestDataURL(source, function (dataURL) {
		$('#' + name + '').attr('src', dataURL);
	});
	$('#' + name + '').on('load', function () {
		window.fadeOut('showImage_' + name + '_containerB');
		window.fadeIn('showImage_' + name + '_containerC');
	});
}

function showImageC(name, source) {
	window.requestDataURL(source, function (dataURL) {
		$('#' + name + '').attr('src', dataURL);
	});
	$('#' + name + '').on('load', function () {
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
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Videos Related Functions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function showVideoA(name, source, title, videoURLID, fps) {
	var FPS;
	if (fps) {
		FPS = parseFloat(fps);
	} else {
		FPS = 30;
	}
	var uniqueID = document.uniqueID();
	var v = document.getElementById(name);
	window.requestBLOB(source, videoURLID, function (BLOBURL) {
		$('#' + name + '').html('<source src="' + BLOBURL + '" type="video/mp4" />');
		document[uniqueID + 'src'] = BLOBURL;
	});
	document[uniqueID + 'checker'] = setInterval(function () {
		if (v.readyState === 4) {
			$('#' + name + '').attr('controls', '');
			window.fadeOut('showVideo_' + name + '_containerA');
			$('#' + name + '').css('-webkit-filter', 'blur(0px)');
			document[name] = videojs(name, {
				plugins: {
					framebyframe: {
						fps: FPS,
						steps: [{
								text: '-1',
								step: -1
							},
							{
								text: '+1',
								step: 1
							},
						]
					}
				}
			});
			var player = document[name];
			player.Resume({
				uuid: videoURLID,
				playbackOffset: 5, // begin playing video this number of seconds before it otherwise would.
				title: 'Resume ?',
				resumeButtonText: 'Sure',
				cancelButtonText: 'Start Over'
			});
			player.ready(function () {
				this.hotkeys({
					volumeStep: 0.1,
					seekStep: 1,
					enableModifiersForNumbers: false
				});
			});
			player.dock({
				title: title
			});
			if (document.lang == 3 || document.lang == 4) {
				$('.vjs-dock-text').css('padding', '1em 5% 2em 1em');
			}
			clearInterval(document[uniqueID + 'checker']);
		}
	}, 1);
}

function showVideoB(name) {
	$('#' + name + '').css('-webkit-filter', 'blur(0px)');
	window.fadeOut('showVideo_' + name + '_containerB');
}
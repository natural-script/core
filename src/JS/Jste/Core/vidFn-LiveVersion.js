//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Videos Related Functions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function showVideoA(name, source, title, videoURLID) {
	var v = document.getElementById(name);
	window.requestBLOB(name, 'vid', source);
	var videoLoadingChecker = setInterval(function () {
		if (v.readyState === 4) {
			$('#' + name + '').attr('controls', '');
			window.fadeOut('showVideo_' + name + '_containerA');
			$('#' + name + '').css('-webkit-filter', 'blur(0px)');
			document[name] = videojs(name, {
				plugins: {
					framebyframe: {
						fps: 23.98,
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
				uuid: URLID,
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
			window.URL.revokeObjectURL($('#' + name + '_html5_api').find('source').attr('src'));
			clearInterval(videoLoadingChecker);
		}
	}, 1);
}

function showVideoB(name) {
	$('#' + name + '').css('-webkit-filter', 'blur(0px)');
	window.fadeOut('showVideo_' + name + '_containerB');
}
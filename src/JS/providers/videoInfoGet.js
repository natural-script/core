import {verifyBLOB} from 'core/BLOBGet'
import {showVideoA} from 'core/vidFn'
import * as declarations from 'core/declarations'
export const getVideoInfo = function (name, provider, videoID, url, title) {
  fetch(window.isLive ? 'https://jste-manager.herokuapp.com/getVideoInfo' : `http://${declarations.localAddress}:5050/getVideoInfo`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      'url': url
    })
  }).then(res => res.text())
    .then(function (data) {
      var availableQualities = $.parseJSON(data).qualities
      if (availableQualities) {
        for (var i = 0; i < availableQualities.length; i++) {
          var videoQuality = availableQualities[i].width
          var videoURL = availableQualities[i].url
          var videoSize = availableQualities[i].size
          var fps = parseFloat(availableQualities[i].fps)
          var videoURLID = encodeURIComponent(url + videoQuality).replace(/\./g, '%2E')
          if (availableQualities.length == 1) {
            window.verifyVideoURL(name, videoURL, title, videoURLID, fps)
          }
          $('<paper-button>').addClass('resolutionBtn')
            .addClass('col')
            .attr('resolution', videoQuality)
            .attr('vidurl', videoURL)
            .text(videoQuality + 'p')
            .attr('onclick', 'window.verifyVideoURL(\"' + name + '\", \"' + videoURL + '\", \"' + title + '\", \"' + videoURLID + '", \"' + fps + '\"); \
                        window.jQuery(\'#video_' + name + '_mainButton\').attr(\'onclick\', \'showVideoA(\"' + name + '\", \"' + videoURL + '\", \"' + title + '\", \"' + videoURLID + '", \"' + fps + '\");\') \
                        .html(\'<i class="material-icons">play_arrow</i> ' + videoSize + '\');')
            .appendTo('#' + name + '_resolutionsBtnConatiner')
          $('#' + name + '_resolutionsBtnConatiner').show()
        }
      }
    })
    .catch((err) => console.log(err))
}
window.verifyVideoURL = function (name, source, title, URLID, fps) {
  if (window.isLive) {
    verifyBLOB(name, 'vid', source, URLID, title, fps)
  } else {
    verifyBLOB(URLID, function (data) {
      if (data == 'exists') {
        showVideoA(name, source, title, URLID)
      }
    })
  }
}

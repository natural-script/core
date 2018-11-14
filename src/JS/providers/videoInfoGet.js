import {
  verifyBLOB
} from 'core/BLOBGet'
import {
  showVideoA
} from 'core/vidFn'
import * as declarations from 'core/declarations'
import filesize from 'filesize/lib/filesize.es6'
export default function getVideoInfo(name, provider, videoID, url, title) {
  fetch('https://jste-manager.herokuapp.com/getVideoInfo', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        'url': url
      })
    }).then(res => res.json())
    .then(function (data) {
      let availableQualities = []
      for (const format of data.info.formats) {
        if (format.ext == 'mp4') {
          availableQualities.push(format);
        }
      }
      if (availableQualities.length > 0) {
        for (const quality of availableQualities) {
          const videoQuality = quality.height
          const videoURL = quality.url
          let videoSize
          if (quality.filesize) {
            videoSize = filesize(quality.filesize)
          } else {
            videoSize = `Can't Fetch`
          }
          const fps = parseFloat(quality.fps)
          const videoURLID = encodeURIComponent(url + videoQuality).replace(/\./g, '%2E')
          if (availableQualities.length == 1) {
            window.verifyVideoURL(name, videoURL, title, videoURLID, fps)
          }
          $('<paper-button>').addClass('resolutionBtn')
            .addClass('col')
            .attr('resolution', videoQuality)
            .attr('vidurl', videoURL)
            .text(`${videoQuality}p${fps}`)
            .attr('onclick', `window.verifyVideoURL("${name}", "${videoURL}", "${title}", "${videoURLID}", "${fps}"); 
                        document.getElementById('video_${name}_mainButton').setAttribute('onclick', 'showVideoA("${name}", "${videoURL}", "${title}", "${videoURLID}", "${fps}");');
                        document.getElementById('video_${name}_mainButton').innerHTML = '<i class="material-icons">play_arrow</i> ${videoSize} ';`)
            .appendTo(`#${name}_resolutionsBtnConatiner`)
          $(`#${name}_resolutionsBtnConatiner`).show()
        }
      }
    })
    .catch(err => console.error(err))
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
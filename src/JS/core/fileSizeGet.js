// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ------------------------------------------------Requesting The Files Sizes------------------------------------------------------------------------------------------------------------------------------------------//
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
import * as declarations from 'core/declarations'
export default function getFileSize (url, callback) {
  $.post(window.isLive ? 'https://jste-manager.herokuapp.com/getFileSize' : `http://${declarations.localAddress}:5050/getFileSize`, {
    fileURL: url
  }).done(function (data) {
    const size = parseInt(data)
    if (size < 1000) {
      callback(size + ' Bytes')
    } else if (size < 1000000) {
      callback(Math.round(size / 1000 * 10) / 10 + ' kb')
    } else if (size < 1000000000) {
      callback(Math.round(size / 1000000 * 10) / 10 + ' mb')
    } else if (size < 1000000000000) {
      callback(Math.round(size / 1000000000 * 10) / 10 + ' gb')
    }
  })
}

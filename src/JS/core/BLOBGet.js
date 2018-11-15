/*!
 * BLOBs manager
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-05-01
 */
import {
  showImageA
} from './imgFn.js'
import {
  showVideoA
} from 'core/vidFn.js'
import * as declarations from 'core/declarations'
export let requestBLOB;
export let verifyBLOB;
if (window.isLive) {
  // Requesting The Stored BLOBs
  requestBLOB = function (name, type, url, URLID) {
    // Get the window displayed in the iframe.
    var receiver = document.getElementById('receiver').contentWindow
    var sentMessageRaw = []
    sentMessageRaw.name = name
    sentMessageRaw.type = type
    sentMessageRaw.action = 'request'
    sentMessageRaw.url = url
    sentMessageRaw.URLID = URLID
    receiver.postMessage(sentMessageRaw, 'https://jste-manager.herokuapp.com/db-manager.min.html')
  }
  // Verifying If A Specific BLOB Exists
  verifyBLOB = function (name, type, url, URLID, title) {
    // Get the window displayed in the iframe.
    var receiver = document.getElementById('receiver').contentWindow
    var sentMessageRaw = []
    sentMessageRaw.name = name
    sentMessageRaw.type = type
    sentMessageRaw.action = 'verify'
    sentMessageRaw.url = url
    sentMessageRaw.URLID = URLID
    if (title) {
      sentMessageRaw.title = title
    }
    receiver.postMessage(sentMessageRaw, 'https://jste-manager.herokuapp.com/db-manager.min.html')
  }
  // Dealing With The Incoming BLOB Info
  window.addEventListener('message', function receiveMessage (recievedMessageRaw) {
    if (event.origin !== 'https://jste-manager.herokuapp.com') return
    if (recievedMessageRaw.data.action == 'ready') {
      $('#receiver').prop('ready', true)
    } else if (recievedMessageRaw.data.action == 'verify') {
      var name = recievedMessageRaw.data.name
      var source = recievedMessageRaw.data.url
      var URLID = recievedMessageRaw.data.URLID
      var title = recievedMessageRaw.data.title
      if (recievedMessageRaw.data.type == 'img') {
        showImageA(name, URLID, source)
      } else if (recievedMessageRaw.data.type == 'vid') {
        showVideoA(name, source, title, URLID)
      }
    } else if (recievedMessageRaw.data.action == 'request') {
      if (recievedMessageRaw.data.type == 'vid') {
        var BLOBURL = window.URL.createObjectURL(recievedMessageRaw.data.BLOBObject)
        $('body').find(`#${recievedMessageRaw.data.name}`).html('<source src="' + BLOBURL + '" type="video/mp4" />')
      } else if (recievedMessageRaw.data.type == 'img') {
        var BLOBURL = window.URL.createObjectURL(recievedMessageRaw.data.BLOBObject)
        $('body').find(`#${recievedMessageRaw.data.name}`).attr('src', BLOBURL)
      }
    }
  }, false)
} else {
  // Converting Data URL To BLOB URL

  function dataURItoBlob (dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1])

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length)

    // create a view into the buffer
    var ia = new Uint8Array(ab)

    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }

    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], {
      type: mimeString
    })
    return window.URL.createObjectURL(blob)
  }

  // Requesting The Stored data URL

  requestBLOB = function (url, URLID, callback) {
    $.post('http://' + declarations.localAddress + ':5050/verifyDataURL', {
      URLID: URLID
    }).done(function (data) {
      if (data == 'exists') {
        $.post('http://' + declarations.localAddress + ':5050/getDataURL', {
          URLID: URLID
        }).done(function (data) {
          callback(dataURItoBlob(data))
        })
      } else if (data == 'not exist') {
        var xhr = new XMLHttpRequest(),
          BLOBObject
        xhr.open('GET', declarations.corsPolicy + url,
          true)
        xhr.responseType = 'blob'
        xhr.addEventListener('load', function () {
          if (xhr.status === 200) {
            BLOBObject = xhr.response
            var reader = new window.FileReader()
            reader.readAsDataURL(BLOBObject)
            reader.onloadend = function () {
              const dataURL = reader.result
              $.post('http://' + declarations.localAddress + ':5050/insertDataURL', {
                URLID: URLID,
                dataURL: dataURL
              })
              callback(dataURItoBlob(dataURL))
            }
          }
        }, false)
        xhr.send()
      }
    })
  }

  // Verifying If A Specific data URL Exists

  verifyBLOB = function (URLID, callback) {
    $.post('http://' + declarations.localAddress + ':5050/verifyDataURL', {
      URLID: URLID
    }).done(function (data) {
      callback(data)
    })
  }
}

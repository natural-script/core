import Clarifai from 'clarifai'
import * as declarations from 'core/declarations'
export default function analyseImage(name, source) {
  if (window.jsteFirebase) {
    const app = new Clarifai.App({
      apiKey: 'cd0b92362c304e0e87046ed8dccac9b8'
    })
    var ref = window.jsteFirebase.database().ref('clarifai')
    ref.once('value').then(function (snapshot) {
      if (snapshot.child(encodeURIComponent(source).replace(/\./g, '%2E')).exists()) {
        ref.on('value', function (snapshot) {
          var imageData = snapshot.val()
          var encodedSource = encodeURIComponent(source).replace(/\./g, '%2E')
          if (declarations.nudityDetectionStatus || window.isLive) {
            if (imageData[encodedSource].nfsw.rawData.outputs[0].data.concepts[0].name == 'nfsw') {
              $('body').find(`#${name}`).attr('nude', '')
            }
          }
          let detectedObjectsRaw = imageData[encodedSource].general
          var detectedObjects
          for (var i = 0; i < detectedObjectsRaw.rawData.outputs[0].data.concepts.length; i++) {
            if (i == detectedObjectsRaw.rawData.outputs[0].data.concepts.length - 1) {
              detectedObjects += detectedObjectsRaw.rawData.outputs[0].data.concepts[i].name
            } else {
              detectedObjects += detectedObjectsRaw.rawData.outputs[0].data.concepts[i].name + ', '
            }
          }
          $('body').find(`#${name}_imageData`).text(detectedObjects.split('undefined')[1])
        })
      } else {
        // predict the contents of an image by passing in a url
        app.models.predict('aaa03c23b3724a16a56b629203edc62c', source).then(function (response) {
          window.jsteFirebase.database().ref('clarifai/' + encodeURIComponent(source).replace(/\./g, '%2E') + '/general').set(response)
          var imageData = ''
          for (var i = 0; i < response.rawData.outputs[0].data.concepts.length; i++) {
            if (i == response.rawData.outputs[0].data.concepts.length - 1) {
              imageData += response.rawData.outputs[0].data.concepts[i].name
            } else {
              imageData += response.rawData.outputs[0].data.concepts[i].name + ', '
            }
          }
          $('body').find(`#${name}_imageData`).text(imageData)
        }, function (err) {
          console.error(err)
        })
        app.models.predict('e9576d86d2004ed1a38ba0cf39ecb4b1', source).then(function (response) {
          window.jsteFirebase.database().ref('clarifai/' + encodeURIComponent(source).replace(/\./g, '%2E') + '/nfsw').set(response)
          if (declarations.nudityDetectionStatus || window.isLive) {
            if (response.rawData.outputs[0].data.concepts[0].name == 'nfsw') {
              $('body').find(`#${name}`).attr('nude', '')
            }
          }
        }, function (err) {
          console.error(err)
        })
      }
    })
  }
}
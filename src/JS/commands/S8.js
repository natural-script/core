export default function () {
  window.plugins.flashlight.available(function (isAvailable) {
    if (isAvailable) {
      window.plugins.flashlight.switchOn()
    } else {
      alert('Flashlight not available on this device')
    }
  })
}

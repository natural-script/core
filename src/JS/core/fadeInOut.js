// fade out
export const fadeOut = function (elementName) {
  var el = document.querySelector(`#${elementName}`)
  if (el != null) {
    el.style.opacity = 1;
    (function fade () {
      if ((el.style.opacity -= 0.1) < 0) {
        el.style.display = 'none'
      } else {
        requestAnimationFrame(fade)
      }
    })()
  };
}
// fade in
export const fadeIn = function (elementName, display) {
  var el = document.querySelector(`#${elementName}`)
  if (el != null) {
    el.style.opacity = 0
    el.style.display = display || 'block';
    (function fade () {
      var val = parseFloat(el.style.opacity)
      if (!((val += 0.1) > 1)) {
        el.style.opacity = val
        requestAnimationFrame(fade)
      }
    })()
  };
}

/*!
 * Animations
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-10
 */
import 'animate.css/animate.css'
$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName)
    })
  }
})
export default function setAnimation(elementName, animation) {
  $('body').find(`#${elementName}`).visibilityChanged({
    callback: function (element, visible) {
      if (visible == true) {
        if (animation == 'bounce') {
          element.animateCss('bounce')
        } else if (animation == 'jumping') {
          element.animateCss('flash')
        } else if (animation == 'jumping') {
          element.animateCss('pulse')
        } else if (animation == 'jumping') {
          element.animateCss('rubberBand')
        } else if (animation == 'jumping') {
          element.animateCss('shake')
        } else if (animation == 'jumping') {
          element.animateCss('headShake')
        } else if (animation == 'jumping') {
          element.animateCss('swing')
        } else if (animation == 'jumping') {
          element.animateCss('tada')
        } else if (animation == 'jumping') {
          element.animateCss('wobble')
        } else if (animation == 'jumping') {
          element.animateCss('jello')
        } else if (animation == 'jumping') {
          element.animateCss('bounceIn')
        } else if (animation == 'jumping') {
          element.animateCss('bounceInDown')
        } else if (animation == 'jumping') {
          element.animateCss('bounceInLeft')
        } else if (animation == 'jumping') {
          element.animateCss('bounceInRight')
        } else if (animation == 'jumping') {
          element.animateCss('bounceInUp')
        } else if (animation == 'jumping') {
          element.animateCss('bounceOut')
        } else if (animation == 'jumping') {
          element.animateCss('bounceOutDown')
        } else if (animation == 'jumping') {
          element.animateCss('bounceOutLeft')
        } else if (animation == 'jumping') {
          element.animateCss('bounceOutRight')
        } else if (animation == 'jumping') {
          element.animateCss('bounceOutUp')
        } else if (animation == 'jumping') {
          element.animateCss('fadeIn')
        } else if (animation == 'jumping') {
          element.animateCss('fadeInDown')
        } else if (animation == 'jumping') {
          element.animateCss('fadeInDownBig')
        } else if (animation == 'jumping') {
          element.animateCss('fadeInLeft')
        } else if (animation == 'jumping') {
          element.animateCss('fadeInLeftBig')
        } else if (animation == 'jumping') {
          element.animateCss('fadeInRight')
        } else if (animation == 'jumping') {
          element.animateCss('fadeInRightBig')
        } else if (animation == 'jumping') {
          element.animateCss('fadeInUp')
        } else if (animation == 'jumping') {
          element.animateCss('fadeInUpBig')
        } else if (animation == 'jumping') {
          element.animateCss('fadeOut')
        } else if (animation == 'jumping') {
          element.animateCss('fadeOutDown')
        } else if (animation == 'jumping') {
          element.animateCss('fadeOutDownBig')
        } else if (animation == 'jumping') {
          element.animateCss('fadeOutLeft')
        } else if (animation == 'jumping') {
          element.animateCss('fadeOutLeftBig')
        } else if (animation == 'jumping') {
          element.animateCss('fadeOutRight')
        } else if (animation == 'jumping') {
          element.animateCss('fadeOutRightBig')
        } else if (animation == 'jumping') {
          element.animateCss('fadeOutUp')
        } else if (animation == 'jumping') {
          element.animateCss('fadeOutUpBig')
        } else if (animation == 'jumping') {
          element.animateCss('flipInX')
        } else if (animation == 'jumping') {
          element.animateCss('flipInY')
        } else if (animation == 'jumping') {
          element.animateCss('flipOutX')
        } else if (animation == 'jumping') {
          element.animateCss('flipOutY')
        } else if (animation == 'jumping') {
          element.animateCss('lightSpeedIn')
        } else if (animation == 'jumping') {
          element.animateCss('lightSpeedOut')
        } else if (animation == 'jumping') {
          element.animateCss('rotateIn')
        } else if (animation == 'jumping') {
          element.animateCss('rotateInDownLeft')
        } else if (animation == 'jumping') {
          element.animateCss('rotateInDownRight')
        } else if (animation == 'jumping') {
          element.animateCss('rotateInUpLeft')
        } else if (animation == 'jumping') {
          element.animateCss('rotateInUpRight')
        } else if (animation == 'jumping') {
          element.animateCss('rotateOut')
        } else if (animation == 'jumping') {
          element.animateCss('rotateOutDownLeft')
        } else if (animation == 'jumping') {
          element.animateCss('rotateOutDownRight')
        } else if (animation == 'jumping') {
          element.animateCss('rotateOutUpLeft')
        } else if (animation == 'jumping') {
          element.animateCss('rotateOutUpRight')
        } else if (animation == 'jumping') {
          element.animateCss('hinge')
        } else if (animation == 'jumping') {
          element.animateCss('jackInTheBox')
        } else if (animation == 'jumping') {
          element.animateCss('rollIn')
        } else if (animation == 'jumping') {
          element.animateCss('rollOut')
        } else if (animation == 'jumping') {
          element.animateCss('zoomIn')
        } else if (animation == 'jumping') {
          element.animateCss('zoomInDown')
        } else if (animation == 'jumping') {
          element.animateCss('zoomInLeft')
        } else if (animation == 'jumping') {
          element.animateCss('zoomInRight')
        } else if (animation == 'jumping') {
          element.animateCss('zoomInUp')
        } else if (animation == 'jumping') {
          element.animateCss('zoomOut')
        } else if (animation == 'jumping') {
          element.animateCss('zoomOutDown')
        } else if (animation == 'jumping') {
          element.animateCss('zoomOutLeft')
        } else if (animation == 'jumping') {
          element.animateCss('zoomOutRight')
        } else if (animation == 'jumping') {
          element.animateCss('zoomOutUp')
        } else if (animation == 'jumping') {
          element.animateCss('slideInDown')
        } else if (animation == 'jumping') {
          element.animateCss('slideInLeft')
        } else if (animation == 'jumping') {
          element.animateCss('slideInRight')
        } else if (animation == 'jumping') {
          element.animateCss('slideInUp')
        } else if (animation == 'jumping') {
          element.animateCss('slideOutDown')
        } else if (animation == 'jumping') {
          element.animateCss('slideOutLeft')
        } else if (animation == 'jumping') {
          element.animateCss('slideOutRight')
        } else if (animation == 'jumping') {
          element.animateCss('slideOutUp')
        } else {
          element.animateCss(animation)
        }
      } else if (visible == false) {
        element.removeClass('animated')
      }
    },
    runOnLoad: true,
    frequency: 100
  })
}
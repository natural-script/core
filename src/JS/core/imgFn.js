import {
  requestBLOB
} from 'core/BLOBGet'
import {
  fadeIn,
  fadeOut
} from 'core/fadeInOut'
import setDimension from 'measurements/Dimensions'
import rain from 'FX/rain'
import * as declarations from 'core/declarations'
export const showImageA = function (name, URLID, source) {
  var nudity = $('body').find(`#${name}`).attr('nude')
  var fx = $('body').find(`#${name}`).attr('fx')
  if (typeof nudity !== typeof undefined && nudity !== false) {
    if (declarations.childModeStatus == 'off') {
      if ($('body').find(`#showImage_${name}_containerA`).length > 0) {
        fadeOut('showImage_' + name + '_containerA')
      }
      fadeIn('showImage_' + name + '_containerB')
    } else if (declarations.childModeStatus == 'on') {
      if ($('body').find(`#showImage_${name}_containerA`).length > 0) {
        fadeOut('showImage_' + name + '_containerA')
      }
      fadeIn('showImage_' + name + '_containerD')
    }
  } else {
    if (window.isLive) {
      requestBLOB(name, 'img', source, URLID)
    } else {
      requestBLOB(source, URLID, function (BLOBURL) {
        $('body').find(`#${name}`).attr('src', BLOBURL)
      })
    }
    $('body').find(`#${name}`).on('load', function () {
      window.URL.revokeObjectURL($('body').find(`#${name}`).attr('src'))
      $('body').find(`#${name}`).css('-webkit-filter', 'blur(0px)')
      if ($('body').find(`#showImage_${name}_containerA`).length > 0) {
        fadeOut('showImage_' + name + '_containerA')
      }
      if (typeof fx !== typeof undefined && fx !== false) {
        if (fx == 'rain') {
          setDimension(name)
          rain(name)
        }
      }
    })
  }
}
window.showImageA = showImageA

export const showImageB = function (name, URLID, source) {
  if (window.isLive) {
    requestBLOB(name, 'img', source, URLID)
  } else {
    requestBLOB(source, URLID, function (BLOBURL) {
      $('body').find(`#${name}`).attr('src', BLOBURL)
    })
  }
  $('body').find(`#${name}`).on('load', function () {
    window.URL.revokeObjectURL($('body').find(`#${name}`).attr('src'))
    fadeOut('showImage_' + name + '_containerB')
    fadeIn('showImage_' + name + '_containerC')
  })
}

export const showImageC = function (name, URLID, source) {
  if (window.isLive) {
    requestBLOB(name, 'img', source, URLID)
  } else {
    requestBLOB(source, URLID, function (BLOBURL) {
      $('body').find(`#${name}`).attr('src', BLOBURL)
    })
  }
  $('body').find(`#${name}`).on('load', function () {
    window.URL.revokeObjectURL($('body').find(`#${name}`).attr('src'))
    $('body').find(`#${name}`).css('-webkit-filter', 'blur(0px)')
    fadeOut('showImage_' + name + '_containerB')
    if (typeof fx !== typeof undefined && fx !== false) {
      if (fx == 'rain') {
        setDimension(name)
        rain(name)
      }
    }
  })
}

export const showImageD = function (name) {
  $('body').find(`#${name}`).css('-webkit-filter', 'blur(0px)')
  fadeOut('showImage_' + name + '_containerC')
  if (typeof fx !== typeof undefined && fx !== false) {
    if (fx == 'rain') {
      setDimension(name)
      rain(name)
    }
  }
}

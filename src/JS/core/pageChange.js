/*!
 * Changing & Navigating The Pages
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-05-01
 */
import {fadeIn, fadeOut} from './fadeInOut'
import {getTranslations} from 'core/translationsGet'
import {getAllUrlParams} from './URLParamsGet'
import {setURLParameter} from './URLParamsSet'
function getLocation () {
  return location.pathname + location.search
}
export const showCurrentPage = function () {
  var currentPageRaw = ($(`page#${decodeURIComponent(getAllUrlParams().page)}`).length > 0 || getAllUrlParams().page == undefined) ? (getAllUrlParams().page || wordsTranslationsDB.Words['indexPage'][document.langCode][0]) : 'page_not_found'
  if (currentPageRaw == 'page_not_found') {
    setURLParameter('page', 'page_not_found')
  }
  if (XRegExp('' + getTranslations('indexPage') + '', 'gmi').test(currentPageRaw)) {
    setURLParameter('page', wordsTranslationsDB.Words['indexPage'][document.langCode][0])
  }
  var currentPage = decodeURIComponent(currentPageRaw)
  setTimeout(() => $('#' + currentPage + '').fadeIn(500), 1)
  $('title').html(currentPage.replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  }) + ' | ' + window.title)
  if (window.mode == 'app') {
    $('.appTitle').html(currentPage.replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    }))
  }
}
export const changePage = function (pageName) {
  if ($(`page#${pageName}`).length == 0) {
    pageName = 'page_not_found'
  }
  var currentPage = getAllUrlParams().page || wordsTranslationsDB.Words['indexPage'][document.langCode][0]
  if (decodeURIComponent(currentPage) != pageName) {
    fadeOut(decodeURIComponent(currentPage))
    fadeIn(pageName, 'inline-block')
    $('title').html(pageName.replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    }) + ' | ' + window.title)
    if (window.mode) {
      $('.appTitle').html(decodeURIComponent(getAllUrlParams().page).replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      }))
    }
  }
}
$(function () {
  document.currentLocation = getLocation()
  $(window).on('popstate', function () {
    var newLocation = getLocation()
    if (newLocation != document.currentLocation) {
      fadeOut($('page:visible').attr('id'))
      fadeIn(decodeURIComponent(getAllUrlParams().page), 'inline-block')
      $('title').html(decodeURIComponent(getAllUrlParams().page).replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      }) + ' | ' + window.title)
      if (window.mode) {
        $('.appTitle').html(decodeURIComponent(getAllUrlParams().page).replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        }))
      }
    }
    document.currentLocation = newLocation
  })
})

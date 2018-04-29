/*!
 * Changing & Navigating The Pages
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-03-10
 */
function getLocation() {
	return location.pathname + location.search;
}
window.showCurrentPage = function () {
	var currentPageRaw = ($(`page#${decodeURIComponent(window.getAllUrlParams().page)}`).length > 0 || window.getAllUrlParams().page == undefined) ? (window.getAllUrlParams().page || wordsTranslationsDB.Words['indexPage'][document.langCode][0]) : 'page_not_found';
	if (currentPageRaw == 'page_not_found') {
		window.setURLParameter('page', 'page_not_found');
	}
	if (XRegExp('' + getTranslations("indexPage") + '', 'gmi').test(currentPageRaw)) {
		window.setURLParameter('page', wordsTranslationsDB.Words['indexPage'][document.langCode][0]);
	}
	var currentPage = decodeURIComponent(currentPageRaw);
	setTimeout(function () {
		$('#' + currentPage + '').fadeIn(500);
	}, 1);
	$('title').html(currentPage.replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	}) + ' | ' + window.title);
	if (window.mode == 'app') {
		$('.appTitle').html(currentPage.replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		}));
	}
}
window.changePage = function (pageName) {
	if ($(`page#${pageName}`).length == 0) {
		pageName = 'page_not_found';
	}
	var currentPage = window.getAllUrlParams().page || wordsTranslationsDB.Words['indexPage'][document.langCode][0];
	if (decodeURIComponent(currentPage) != pageName) {
		window.fadeOut(decodeURIComponent(currentPage));
		window.fadeIn(pageName, 'inline-block');
		$('title').html(pageName.replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		}) + ' | ' + window.title);
		if (window.mode) {
			$('.appTitle').html(decodeURIComponent(window.getAllUrlParams().page).replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}));
		}
	}
};
$(function () {
	document.currentLocation = getLocation();
	$(window).on("popstate", function () {
		var newLocation = getLocation();
		if (newLocation != document.currentLocation) {
			window.fadeOut($("page:visible").attr('id'));
			window.fadeIn(decodeURIComponent(window.getAllUrlParams().page), 'inline-block');
			$('title').html(decodeURIComponent(window.getAllUrlParams().page).replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}) + ' | ' + window.title);
			if (window.mode) {
				$('.appTitle').html(decodeURIComponent(window.getAllUrlParams().page).replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
					return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				}));
			}
		}
		document.currentLocation = newLocation;
	});
})
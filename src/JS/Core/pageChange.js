/*!
 * Changing & Navigating The Pages
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-07
 */
function getLocation() {
	return location.pathname + location.search;
}
window.changePage = function (pageName) {
	var currentPage = window.getAllUrlParams().page || window.indexPageTranslations[document.langID];
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
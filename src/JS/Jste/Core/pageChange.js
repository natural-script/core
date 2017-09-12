//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------Changing The Current Page Function------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
window.changePage = function (pageName) {
	if (decodeURIComponent(window.getAllUrlParams().page) != pageName) {
		window.fadeOut(decodeURIComponent(window.getAllUrlParams().page));
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
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------Changing The Current Page On Back Or Forward------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function getLocation() {
	return location.pathname + location.search;
}

var currentLocation = getLocation();

$(function () {
	$(window).on("popstate", function () {
		var newLocation = getLocation();
		if (newLocation != currentLocation) {
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
		currentLocation = newLocation;
	});
})
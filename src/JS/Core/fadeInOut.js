//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------Vanillia Fading In & Out Functions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// fade out
window.fadeOut = function(elementName) {
	var el = document.querySelector('#' + elementName + '');
	el.style.opacity = 1;
	(function fade() {
		if ((el.style.opacity -= .1) < 0) {
			el.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}
	})();
};
// fade in
window.fadeIn = function(elementName, display) {
	var el = document.querySelector('#' + elementName + '');
	el.style.opacity = 0;
	el.style.display = display || "block";
	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += .1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
};
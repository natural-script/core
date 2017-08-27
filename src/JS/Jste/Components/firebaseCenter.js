$(function () {
    $(function () {
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
        //-----------------------------------------------------------Firebase Center------------------------------------------------------------------------------------------------------------------------------------------//
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
        $.fn[window.firebaseCenterTranslations[document.lang]] = function (options) {
            // Establish our default settings
            var settings = $.extend({
                [window.usernameTranslations[document.lang]]: null,
                [window.passwordTranslations[document.lang]]: null
            }, options);
            return this.each(function () {
                sessionStorage.firebaseID = settings[window.usernameTranslations[document.lang]];
                sessionStorage.firebaseKey = settings[window.passwordTranslations[document.lang]];
                var config = {
                    apiKey: sessionStorage.firebaseKey,
                    authDomain: sessionStorage.firebaseID + ".firebaseapp.com",
                    databaseURL: "https://" + sessionStorage.firebaseID + ".firebaseio.com",
                    storageBucket: sessionStorage.firebaseID + ".appspot.com",
                };
                firebase.initializeApp(config);
                var database = firebase.database();
            });
        };
    });
}(jQuery));
/*!
 * Firebase Center
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.firebaseCenterTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.usernameTranslations[document.langID]]: null,
            [window.passwordTranslations[document.langID]]: null
        }, options);
        return this.each(function () {
            sessionStorage.firebaseID = settings[window.usernameTranslations[document.langID]];
            sessionStorage.firebaseKey = settings[window.passwordTranslations[document.langID]];
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
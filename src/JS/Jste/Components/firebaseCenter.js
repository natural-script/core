/*!
 * Firebase Center
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $(function () {
        var uniqueID = document.uniqueID();
        document[uniqueID + 'checker'] = setInterval(function () {
            if (document.lang == 0 || document.lang == 1 || document.lang == 2 || document.lang == 3 || document.lang == 4 || document.lang == 5) {
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

                clearInterval(document[uniqueID + 'checker']);
            }
        }, 1);
    });
}(jQuery));
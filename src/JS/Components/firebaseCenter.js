/*!
 * Firebase Center
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-16
 */
$(function () {
    var firebaseCenter = async function (settings) {
        if (navigator.onLine) {
            var isReachable = await window.isReachable(`https://${elementSettingsAnalyze(settings, 'username')}.firebaseio.com/`);
            if (isReachable) {
                settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
                sessionStorage.firebaseID = elementSettingsAnalyze(settings, 'username');
                sessionStorage.firebaseKey = elementSettingsAnalyze(settings, 'password');
                var config = {
                    apiKey: sessionStorage.firebaseKey,
                    authDomain: sessionStorage.firebaseID + ".firebaseapp.com",
                    databaseURL: "https://" + sessionStorage.firebaseID + ".firebaseio.com",
                    storageBucket: sessionStorage.firebaseID + ".appspot.com",
                };
                firebase.initializeApp(config);
                var database = firebase.database();
            }
        }
    }
    var firebaseCenterTranslations = window.wordsTranslationsDB.Words['firebaseCenter'][document.langCode];
    for (const i of firebaseCenterTranslations) {
        window.jsteComponentsFnStore[i] = async function (settings) {
            await firebaseCenter(settings);
        };
    }
});
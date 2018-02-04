/*!
 * Audio Live Version
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
 */
$(function () {
    function audioFn(el, settings) {
        el.each(function () {
            var source = settings[window.sourceTranslations[document.langID]];
            if (settings[window.coverTranslations[document.langID]]) {
                var audioInfo = [{
                    title: settings[window.titleTranslations[document.langID]],
                    author: settings[window.authorTranslations[document.langID]],
                    url: settings[window.sourceTranslations[document.langID]],
                    pic: settings[window.coverTranslations[document.langID]]
                }];
                if ($('#' + settings[window.audioPlayerTranslations[document.langID]]).html().trim() != "") {
                    document[settings[window.audioPlayerTranslations[document.langID]]].addMusic(audioInfo);
                } else {
                    document.initializeAudioPlayerB[settings[window.audioPlayerTranslations[document.langID]]](settings[window.titleTranslations[document.langID]], settings[window.authorTranslations[document.langID]], settings[window.sourceTranslations[document.langID]], settings[window.coverTranslations[document.langID]]);
                }
            } else {
                var audioInfo = [{
                    title: settings[window.titleTranslations[document.langID]],
                    author: settings[window.authorTranslations[document.langID]],
                    url: settings[window.sourceTranslations[document.langID]]
                }];
                if ($('#' + settings[window.audioPlayerTranslations[document.langID]]).html().trim() != "") {
                    document[settings[window.audioPlayerTranslations[document.langID]]].addMusic(audioInfo);
                } else {
                    document.initializeAudioPlayerA[settings[window.audioPlayerTranslations[document.langID]]](settings[window.titleTranslations[document.langID]], settings[window.authorTranslations[document.langID]], settings[window.sourceTranslations[document.langID]]);
                }
            }
        });
    }
    $.fn[window.audioTranslations[document.langID]] = function (settings) {
        audioFn(this, settings);
    };
});
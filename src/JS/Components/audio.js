/*!
 * Audio
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
            window.requestBLOB(source, encodeURIComponent(source).replace(/\./g, '%2E'), function (dataURL) {
                if (settings[window.coverTranslations[document.langID]]) {
                    var audioInfo = [{
                        title: settings[window.titleTranslations[document.langID]],
                        author: settings[window.authorTranslations[document.langID]],
                        url: dataURL,
                        pic: settings[window.coverTranslations[document.langID]]
                    }];
                    if ($('#' + settings[window.audioPlayerTranslations[document.langID]]).html().trim() != "") {
                        document[settings[window.audioPlayerTranslations[document.langID]]].addMusic(audioInfo);
                    } else {
                        document.initializeAudioPlayerB[settings[window.audioPlayerTranslations[document.langID]]](settings[window.titleTranslations[document.langID]], settings[window.authorTranslations[document.langID]], dataURL, settings[window.coverTranslations[document.langID]]);
                    }
                } else {
                    var audioInfo = [{
                        title: settings[window.titleTranslations[document.langID]],
                        author: settings[window.authorTranslations[document.langID]],
                        url: dataURL
                    }];
                    if ($('#' + settings[window.audioPlayerTranslations[document.langID]]).html().trim() != "") {
                        document[settings[window.audioPlayerTranslations[document.langID]]].addMusic(audioInfo);
                    } else {
                        document.initializeAudioPlayerA[settings[window.audioPlayerTranslations[document.langID]]](settings[window.titleTranslations[document.langID]], settings[window.authorTranslations[document.langID]], dataURL);
                    }
                }
            });
        });
    }
    $.fn[window.audioTranslations[document.langID]] = function (settings) {
        audioFn(this, settings);
    };
});
/*!
 * Audio
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $.fn[window.audioTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.titleTranslations[document.lang]]: null,
            [window.authorTranslations[document.lang]]: null,
            [window.coverTranslations[document.lang]]: null,
            [window.autoplayTranslations[document.lang]]: null,
            [window.audioPlayerTranslations]: 'false',
            [window.sourceTranslations[document.lang]]: null,
        }, options);
        return this.each(function () {
            var source = settings[window.sourceTranslations[document.lang]];
            window.requestBLOB(source, encodeURIComponent(source).replace(/\./g, '%2E'), function (dataURL) {
                if (settings[window.coverTranslations[document.lang]]) {
                    var audioInfo = [{
                        title: settings[window.titleTranslations[document.lang]],
                        author: settings[window.authorTranslations[document.lang]],
                        url: dataURL,
                        pic: settings[window.coverTranslations[document.lang]]
                    }];
                    if ($('#' + settings[window.audioPlayerTranslations[document.lang]]).html().trim() != "") {
                        document[settings[window.audioPlayerTranslations[document.lang]]].addMusic(audioInfo);
                    } else {
                        document.initializeAudioPlayerB[settings[window.audioPlayerTranslations[document.lang]]](settings[window.titleTranslations[document.lang]], settings[window.authorTranslations[document.lang]], dataURL, settings[window.coverTranslations[document.lang]]);
                    }
                } else {
                    var audioInfo = [{
                        title: settings[window.titleTranslations[document.lang]],
                        author: settings[window.authorTranslations[document.lang]],
                        url: dataURL
                    }];
                    if ($('#' + settings[window.audioPlayerTranslations[document.lang]]).html().trim() != "") {
                        document[settings[window.audioPlayerTranslations[document.lang]]].addMusic(audioInfo);
                    } else {
                        document.initializeAudioPlayerA[settings[window.audioPlayerTranslations[document.lang]]](settings[window.titleTranslations[document.lang]], settings[window.authorTranslations[document.lang]], dataURL);
                    }
                }
            });
        });
    };
});
/*!
 * Audio
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-26
 */
$(function () {
    function audioFn (settings) {
            settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
            var source = elementSettingsAnalyze(settings, 'source');
            window.requestBLOB(source, encodeURIComponent(source).replace(/\./g, '%2E'), function (dataURL) {
                if (elementSettingsAnalyze(settings, 'cover')) {
                    var audioInfo = [{
                        name: elementSettingsAnalyze(settings, 'title'),
                        artist: elementSettingsAnalyze(settings, 'author'),
                        url: dataURL,
                        cover: elementSettingsAnalyze(settings, 'cover')
                    }];
                    if ($('#' + elementSettingsAnalyze(settings, 'audioPlayer')).html().trim() != "") {
                        document[elementSettingsAnalyze(settings, 'audioPlayer')].addAudio(audioInfo);
                    } else {
                        document.initializeAudioPlayerB[elementSettingsAnalyze(settings, 'audioPlayer')](elementSettingsAnalyze(settings, 'title'), elementSettingsAnalyze(settings, 'author'), dataURL, elementSettingsAnalyze(settings, 'cover'));
                    }
                } else {
                    var audioInfo = [{
                        name: elementSettingsAnalyze(settings, 'title'),
                        artist: elementSettingsAnalyze(settings, 'author'),
                        url: dataURL
                    }];
                    if ($('#' + elementSettingsAnalyze(settings, 'audioPlayer')).html().trim() != "") {
                        document[elementSettingsAnalyze(settings, 'audioPlayer')].addAudio(audioInfo);
                    } else {
                        document.initializeAudioPlayerA[elementSettingsAnalyze(settings, 'audioPlayer')](elementSettingsAnalyze(settings, 'title'), elementSettingsAnalyze(settings, 'author'), dataURL);
                    }
                }
            });
    }
    var audioTranslations = window.wordsTranslationsDB.Words['audio'][document.langCode];
    for (const i of audioTranslations) {
        window.jsteComponentsFnStore[i] = function (settings) {
            audioFn(settings);
        };
    }
});
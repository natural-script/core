/*!
 * Audio
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function audioFn(el, settings) {
        el.each(function () {
            settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
            var source = elementSettingsAnalyze(settings, 'source');
            window.requestBLOB(source, encodeURIComponent(source).replace(/\./g, '%2E'), function (dataURL) {
                if (elementSettingsAnalyze(settings, 'cover')) {
                    var audioInfo = [{
                        title: elementSettingsAnalyze(settings, 'title'),
                        author: elementSettingsAnalyze(settings, 'author'),
                        url: dataURL,
                        pic: elementSettingsAnalyze(settings, 'cover')
                    }];
                    if ($('#' + elementSettingsAnalyze(settings, 'audioPlayer')).html().trim() != "") {
                        document[elementSettingsAnalyze(settings, 'audioPlayer')].addMusic(audioInfo);
                    } else {
                        document.initializeAudioPlayerB[elementSettingsAnalyze(settings, 'audioPlayer')](elementSettingsAnalyze(settings, 'title'), elementSettingsAnalyze(settings, 'author'), dataURL, elementSettingsAnalyze(settings, 'cover'));
                    }
                } else {
                    var audioInfo = [{
                        title: elementSettingsAnalyze(settings, 'title'),
                        author: elementSettingsAnalyze(settings, 'author'),
                        url: dataURL
                    }];
                    if ($('#' + elementSettingsAnalyze(settings, 'audioPlayer')).html().trim() != "") {
                        document[elementSettingsAnalyze(settings, 'audioPlayer')].addMusic(audioInfo);
                    } else {
                        document.initializeAudioPlayerA[elementSettingsAnalyze(settings, 'audioPlayer')](elementSettingsAnalyze(settings, 'title'), elementSettingsAnalyze(settings, 'author'), dataURL);
                    }
                }
            });
        });
    }
    var audioTranslations = window.wordsTranslationsDB.Words['audio'][document.langCode];
    for (var i = 0; i < audioTranslations.length;i++) {
    $.fn[audioTranslations[i]] = function (settings) {
        audioFn(this, settings);
    };
}
});
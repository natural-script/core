/*!
 * Audio Player
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-26
 */
$(function () {
    function audioPlayerFn(el, settings) {
        el.each(function () {
            settings = window.inheritStyle(settings, elementSettingsAnalyze(settings, 'style'));
            var name = elementSettingsAnalyze(settings, 'name');
            var autoplay = false;
            var out = '<div id="' + name + '" class="aplayer"></div>';
            window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(' ' + getTranslations("and") + ' ', 'gmi'));
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['autoplay'][document.langCode]).rating > 0.8) {
                        var autoplay = true;
                    }
                }
            }
            document.initializeAudioPlayerA = [];
            document.initializeAudioPlayerB = [];
            document.initializeAudioPlayerA[name] = new Function("title, author, url", "document." + name + " = new APlayer({container: document.getElementById('" + name + "'), mini: false, autoplay: " + autoplay + ", lrcType: 0, mutex: true, theme: '#e6d0b2', order: 'random', preload: 'metadata', listMaxHeight: '513px', audio: {name: title, artist: author, url: url}});");
            document.initializeAudioPlayerB[name] = new Function("title, author, url, coverURL", "document." + name + " = new APlayer({container: document.getElementById('" + name + "'), mini: false, autoplay: " + autoplay + ", lrcType: 0, mutex: true, theme: '#e6d0b2', order: 'random', preload: 'metadata', listMaxHeight: '513px', audio: {name: title, artist: author, url: url, cover: coverURL}});");
            if (elementSettingsAnalyze(settings, 'position')) {
                $('#' + name + '').css('position', elementSettingsAnalyze(settings, 'position'));
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            if (elementSettingsAnalyze(settings, 'title')) {
                $('#' + name + '').attr('alt', elementSettingsAnalyze(settings, 'title'));
            }
            window.propSet(name, settings);
        });
    }
    var audioPlayerTranslations = window.wordsTranslationsDB.Words['audioPlayer'][document.langCode];
    for (const i of audioPlayerTranslations) {
        $.fn[i] = function (settings) {
            audioPlayerFn(this, settings);
        };
    }
});
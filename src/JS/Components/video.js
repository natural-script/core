/*!
 * Video
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function videoFn(el, settings) {
        el.each(function () {
            var name = elementSettingsAnalyze(settings, 'name');
            var source = elementSettingsAnalyze(settings, 'source');
            var title = elementSettingsAnalyze(settings, 'title');
            var URLID = encodeURIComponent(source).replace(/\./g, '%2E');
            var subContainerStartTag = '<paper-material elevation="2" style="position: absolute;">';
            var subContainerEndTag = '</paper-material>';
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(' ' + getTranslations("and") + ' ', 'gmi'));
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['transparent'][document.langCode]).rating > 0.8) {
                        subContainerStartTag = '<div style="position: absolute;">';
                        subContainerEndTag = '</div>';
                    }
                }
            }
            var out = '<div id="' + name + '_container" style="position: relative; overflow: hidden;"> \
                            ' + subContainerStartTag + ' \
                            <video id="' + name + '" crossorigin="anonymous" class="video-js vjs-big-play-centered" style="-webkit-filter: blur(10px); background: black;" controls preload="auto" data-setup="{}" /> \
                            <div id="showVideo_' + name + '_containerA"> \
                            <div class="showVideoContainerA"> \
                            <paper-button id="video_' + name + '_mainButton" class="videoMainButton" onclick="showVideoA(\'' + name + '\', \'' + source + '\', \'' + title + '\', \'' + URLID + '\');"> \
                            <i class="material-icons">play_arrow</i> Loading...</paper-button></div> \
                            <div id="' + name + '_resolutionsBtnConatiner" class="resolutionsBtnConatiner row" style="display: none;"></div> \
                            <img class="showVideoContainerAIcon" src="' + window.mediaImageIconCamcorderA + '" /></div> \
                            <div id="showVideo_' + name + '_containerB" style="display: none;"> \
                            <p class="videoNudesFoundText">Nudes found</p> \
                            <button class="showVideoBtnB" onclick="showVideoB(\'' + name + '\');">Continue</button></div> \
                            ' + subContainerEndTag + '</div>';
            window.appendComponent(elementSettingsAnalyze(settings, 'container'), out);
            $('#' + name + '').prop('isTitled', false);
            $('#' + name + '').prop('type', 'vid');
            if (window.getVideoProvider(source).videoProvider == 'webHosting') {
                window.verifyBLOB(encodeURIComponent(source).replace(/\./g, '%2E'), function (data) {
                    if (data == 'not exist') {
                        window.getFileSize(source, function (size) {
                            $('#video_' + name + '_mainButton').html('<i class="material-icons">play_arrow</i> ' + size);
                        });
                    } else if (data == 'exists') {
                        window.showVideoA(name, source, title, encodeURIComponent(source).replace(/\./g, '%2E'));
                    }
                });
            } else {
                window.getVideoInfo(name, window.getVideoProvider(source).videoProvider, window.getVideoProvider(source).videoID, window.getVideoProvider(source).videoURL, title);
            }
            if (elementSettingsAnalyze(settings, 'background')) {
                window.setBG(name, elementSettingsAnalyze(settings, 'background'));
            }
            if (elementSettingsAnalyze(settings, 'title')) {
                $('#' + name + '').attr('alt', elementSettingsAnalyze(settings, 'title'));
            }
            if (elementSettingsAnalyze(settings, 'width')) {
                window.setDimension(name, 'width', elementSettingsAnalyze(settings, 'width'));
            }
            if (elementSettingsAnalyze(settings, 'length')) {
                window.setDimension(name, 'length', elementSettingsAnalyze(settings, 'length'));
            }
            if (elementSettingsAnalyze(settings, 'distanceFromBottom')) {
                window.setDistance(name + '_container', 'bottom', elementSettingsAnalyze(settings, 'distanceFromBottom'));
            }
            if (elementSettingsAnalyze(settings, 'distanceFromTop')) {
                window.setDistance(name + '_container', 'top', elementSettingsAnalyze(settings, 'distanceFromTop'));
            }
            if (elementSettingsAnalyze(settings, 'distanceFromLeft')) {
                window.setDistance(name + '_container', 'left', elementSettingsAnalyze(settings, 'distanceFromLeft'));
            }
            if (elementSettingsAnalyze(settings, 'distanceFromRight')) {
                window.setDistance(name + '_container', 'right', elementSettingsAnalyze(settings, 'distanceFromRight'));
            }
            if (elementSettingsAnalyze(settings, 'commands')) {
                window.execute(name, elementSettingsAnalyze(settings, 'commands'));
            }
            if (elementSettingsAnalyze(settings, 'animation')) {
                window.setAnimation(name + '_container', elementSettingsAnalyze(settings, 'animation'));
            }
            if (elementSettingsAnalyze(settings, 'transparency')) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(settings, 'transparency') + '%)');
            }
        });
    }
    var videoTranslations = window.wordsTranslationsDB.Words['video'][document.langCode];
    for (var i = 0; i < videoTranslations.length; i++) {
        $.fn[videoTranslations[i]] = function (settings) {
            videoFn(this, settings);
        };
    }
});
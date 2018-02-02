/*!
 * Video
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-20
 */
$(function () {
    $.fn[window.videoTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.titleTranslations[document.langID]]: null,
            [window.sourceTranslations[document.langID]]: null,
            [window.nameTranslations[document.langID]]: null,
            [window.widthTranslations[document.langID]]: null,
            [window.lengthTranslations[document.langID]]: null,
            [window.animationTranslations[document.langID]]: null,
            [window.transparencyTranslations[document.langID]]: null,
            [window.distanceFromBottomTranslations[document.langID]]: null,
            [window.distanceFromTopTranslations[document.langID]]: null,
            [window.distanceFromLeftTranslations[document.langID]]: null,
            [window.distanceFromRightTranslations[document.langID]]: null,
            [window.positionTranslations[document.langID]]: null,
            [window.containerTranslations[document.langID]]: null,
            [window.backgroundTranslations[document.langID]]: null,
            [window.attributesTranslations[document.langID]]: null,
            [window.commandsTranslations[document.langID]]: null
        }, options);
        return this.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var source = settings[window.sourceTranslations[document.langID]];
            var title = settings[window.titleTranslations[document.langID]];
            var URLID = encodeURIComponent(source).replace(/\./g, '%2E');
            var subContainerStartTag = '<paper-material elevation="2" style="position: absolute;">';
            var subContainerEndTag = '</paper-material>';
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.transparentTranslations[document.langID]) {
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
            window.appendComponent(settings[window.containerTranslations[document.langID]], out);
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
            if (settings[window.backgroundTranslations[document.langID]]) {
                window.setBG(name, settings[window.backgroundTranslations[document.langID]]);
            }
            if (settings[window.titleTranslations[document.langID]]) {
                $('#' + name + '').attr('alt', settings[window.titleTranslations[document.langID]]);
            }
            if (settings[window.widthTranslations[document.langID]]) {
                window.setDimension(name, 'width', settings[window.widthTranslations[document.langID]]);
            }
            if (settings[window.lengthTranslations[document.langID]]) {
                window.setDimension(name, 'length', settings[window.lengthTranslations[document.langID]]);
            }
            if (settings[window.distanceFromBottomTranslations[document.langID]]) {
                window.setDistance(name + '_container', 'bottom', settings[window.distanceFromBottomTranslations[document.langID]]);
            }
            if (settings[window.distanceFromTopTranslations[document.langID]]) {
                window.setDistance(name + '_container', 'top', settings[window.distanceFromTopTranslations[document.langID]]);
            }
            if (settings[window.distanceFromLeftTranslations[document.langID]]) {
                window.setDistance(name + '_container', 'left', settings[window.distanceFromLeftTranslations[document.langID]]);
            }
            if (settings[window.distanceFromRightTranslations[document.langID]]) {
                window.setDistance(name + '_container', 'right', settings[window.distanceFromRightTranslations[document.langID]]);
            }
            if (settings[window.commandsTranslations[document.langID]]) {
                window.execute(name, settings[window.commandsTranslations[document.langID]]);
            }
            if (settings[window.animationTranslations[document.langID]]) {
                window.setAnimation(name + '_container', settings[window.animationTranslations[document.langID]]);
            }
            if (settings[window.transparencyTranslations[document.langID]]) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.langID]] + '%)');
            }
        });
    };
});
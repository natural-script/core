/*!
 * Image Live Version
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-6
 */
$(function () {
    function setImgProp(name, settings, isTitled) {
        if (isTitled) {
            $('#' + name + '').prop('isTitled', true);
        } else {
            $('#' + name + '').prop('isTitled', false);
        }
        $('#' + name + '').prop('type', 'img');
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
            window.setAnimation(name, settings[window.animationTranslations[document.langID]]);
        }
        if (settings[window.transparencyTranslations[document.langID]]) {
            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.langID]] + '%)');
        }
        if (settings[window.FXTranslations[document.langID]] == 'rain') {
            $('#' + name + '').attr('fx', 'rain');
        }
    }
    $.fn[window.imageTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [window.titleTranslations[document.langID]]: null,
            [window.typeTranslations[document.langID]]: null,
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
            [window.FXTranslations[document.langID]]: null,
            [window.attributesTranslations[document.langID]]: null,
            [window.commandsTranslations[document.langID]]: null
        }, options);
        return this.each(function () {
            var isIcon = false;
            var isTitled = false;
            var name = settings[window.nameTranslations[document.langID]];
            var source = settings[window.sourceTranslations[document.langID]];
            var URLID = encodeURIComponent(source).replace(/\./g, '%2E');
            var subContainerStartTag = '<paper-material elevation="2" style="position: absolute;">';
            var subContainerEndTag = '</paper-material>';
            window.analyseImage(name, source);
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.transparentTranslations[document.langID]) {
                        subContainerStartTag = '<div style="position: absolute;">';
                        subContainerEndTag = '</div>';
                    }
                }
            }
            if (settings[window.typeTranslations[document.langID]] == window.iconTranslations[document.langID]) {
                window.getFileSize(source, function (size) {
                    if (size.split(' kb')[0] < 100) {
                        isIcon = true;
                        var out = '<div id="' + name + '_container" style="position: relative; overflow: hidden;"> \
                            ' + subContainerStartTag + ' \
                            <img id="' + name + '" src="" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> \
                            <div id="showImage_' + name + '_containerB" style="display: none;"> \
                            <div class="showImageConatainerB"> \
                            <p class="nudesFoundWarningText">Nudes found</p><paper-button class="yesShowTheNudes" onclick="showImageC(\'' + name + '\', \'' + URLID + '\', \'' + source + '\');">Continue</paper-button> \
                            <paper-button class="showBlurredNudes" onclick="showImageB(\'' + name + '\', \'' + URLID + '\', \'' + source + '\');">Show Blurred</paper-button></div></div> \
                            <div id="showImage_' + name + '_containerC" style="display: none;"> \
                            <p class="showTheFullContentWarning">Show the full content ?</p> \
                            <paper-button class="yesRemoveTheBlur" onclick="showImageD(\'' + name + '\');">Continue</paper-button></div>\
                            <div id="showImage_' + name + '_containerD" style="display: none;"> \
                            <p class="forbiddenContentWarning">You are prohibited from accessing this content</p> \
                            </div> \
                            ' + subContainerEndTag + '</div>';
                    } else {
                        var out = '<div id="' + name + '_container" style="position: relative; overflow: hidden;"> \
                                ' + subContainerStartTag + ' \
								<img id="' + name + '" src="" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> \
                                <div id="showImage_' + name + '_containerA"> \
                                <div class="showImageConatainerA"> \
								<p id="' + name + '_imageData" class="imageData"></p> \
								<paper-button id="image_' + name + '_mainButton" class="imageMainButton" onclick="showImageA(\'' + name + '\', \'' + URLID + '\', \'' + source + '\');"> \
                                <i class="material-icons">file_download</i> Loading...</paper-button> \
                                <img class="showImageContainerAIcon" src="' + window.mediaImageIconPhotoA + '" /></div></div> \
								<div id="showImage_' + name + '_containerB" style="display: none;"> \
								<p class="nudesFoundWarningText">Nudes found</p><paper-button class="yesShowTheNudes" onclick="showImageC(\'' + name + '\', \'' + URLID + '\', \'' + source + '\');">Continue</paper-button> \
								<paper-button class="showBlurredNudes" onclick="showImageB(\'' + name + '\', \'' + URLID + '\', \'' + source + '\');">Show Blurred</paper-button></div></div> \
								<div id="showImage_' + name + '_containerC" style="display: none;"> \
								<p class="showTheFullContentWarning">Show the full content ?</p> \
								<paper-button class="yesRemoveTheBlur" onclick="showImageD(\'' + name + '\');">Continue</paper-button></div>\
                                <div id="showImage_' + name + '_containerD" style="display: none;"> \
								<p class="forbiddenContentWarning">You are prohibited from accessing this content</p> \
								</div> \
                                ' + subContainerEndTag + '</div>';
                    }
                    window.appendComponent(settings[window.containerTranslations[document.langID]], out);
                    if (isIcon) {
                        var uniqueID = document.uniqueID();
                        document[uniqueID + 'checker'] = setInterval(function () {
                            if ($('#receiver').prop('ready')) {
                                window.showImageA(name, URLID, source);
                                clearInterval(document[uniqueID + 'checker']);
                            }
                        }, 1);
                    } else {
                        window.getFileSize(source, function (size) {
                            $('#image_' + name + '_mainButton').html('<i class="material-icons">file_download</i> ' + size);
                        });
                        var uniqueID = document.uniqueID();
                        document[uniqueID + 'checker'] = setInterval(function () {
                            if ($('#receiver').prop('ready')) {
                                window.verifyBLOB(name, 'img', source, URLID);
                                clearInterval(document[uniqueID + 'checker']);
                            }
                        }, 1);
                    }
                    setImgProp(name, settings, isTitled);
                });
            } else {
                if (settings[window.titleTranslations[document.langID]]) {
                    isTitled = true;
                    var out = '<div id="' + name + '_container" style="position: relative; overflow: hidden;"> \
                                ' + subContainerStartTag + ' \
                                <img id="' + name + '" src="" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> \
                                <div class="imageTitle">' + settings[window.titleTranslations[document.langID]] + '</div> \
								<div id="showImage_' + name + '_containerA"> \
                                <div class="showImageContainerA"> \
								<p id="' + name + '_imageData" class="imageData"></p> \
								<paper-button id="image_' + name + '_mainButton" class="imageMainButton" onclick="showImageA(\'' + name + '\', \'' + URLID + '\', \'' + source + '\');"> \
                                <i class="material-icons">file_download</i> Loading...</paper-button> \
                                <img class="showImageContainerAIcon" src="' + window.mediaImageIconPhotoA + '" /></div></div> \
								<div id="showImage_' + name + '_containerB" style="display: none;"> \
                                <div class="showImageConatainerB"> \
								<p class="nudesFoundWarningText">Nudes found</p><paper-button class="yesShowTheNudes" onclick="showImageC(\'' + name + '\', \'' + URLID + '\', \'' + source + '\');">Continue</paper-button> \
								<paper-button class="showBlurredNudes" onclick="showImageB(\'' + name + '\', \'' + URLID + '\', \'' + source + '\');">Show Blurred</paper-button></div></div> \
								<div id="showImage_' + name + '_containerC" style="display: none;"> \
								<p class="showTheFullContentWarning">Show the full content ?</p> \
								<paper-button class="yesRemoveTheBlur" onclick="showImageD(\'' + name + '\');">Continue</paper-button></div>\
                                <div id="showImage_' + name + '_containerD" style="display: none;"> \
								<p class="forbiddenContentWarning">You are prohibited from accessing this content</p> \
								</div> \
                                ' + subContainerEndTag + '</div>';
                } else {
                    var out = '<div id="' + name + '_container" style="position: relative; overflow: hidden;"> \
                                ' + subContainerStartTag + ' \
								<img id="' + name + '" src="" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> \
                                <div id="showImage_' + name + '_containerA"> \
                                <div class="showImageContainerA"> \
								<p id="' + name + '_imageData" class="imageData"></p> \
								<paper-button id="image_' + name + '_mainButton" class="imageMainButton" onclick="showImageA(\'' + name + '\', \'' + URLID + '\', \'' + source + '\');"> \
                                <i class="material-icons">file_download</i> Loading...</paper-button> \
                                <img class="showImageContainerAIcon" src="' + window.mediaImageIconPhotoA + '" /></div></div> \
								<div id="showImage_' + name + '_containerB" style="display: none;"> \
								<p class="nudesFoundWarningText">Nudes found</p><paper-button class="yesShowTheNudes" onclick="showImageC(\'' + name + '\', \'' + URLID + '\', \'' + source + '\');">Continue</paper-button> \
								<paper-button class="showBlurredNudes" onclick="showImageB(\'' + name + '\', \'' + URLID + '\', \'' + source + '\');">Show Blurred</paper-button></div></div> \
								<div id="showImage_' + name + '_containerC" style="display: none;"> \
								<p class="showTheFullContentWarning">Show the full content ?</p> \
                                <paper-button class="yesRemoveTheBlur" onclick="showImageD(\'' + name + '\');">Continue</paper-button></div>\
                                <div id="showImage_' + name + '_containerD" style="display: none;"> \
								<p class="forbiddenContentWarning">You are prohibited from accessing this content</p> \
								</div> \
                                ' + subContainerEndTag + '</div>';
                }
                window.appendComponent(settings[window.containerTranslations[document.langID]], out);
                window.getFileSize(source, function (size) {
                    $('#image_' + name + '_mainButton').html('<i class="material-icons">file_download</i> ' + size);
                });
                var uniqueID = document.uniqueID();
                document[uniqueID + 'checker'] = setInterval(function () {
                    if ($('#receiver').prop('ready')) {
                        window.verifyBLOB(name, 'img', source, URLID);
                        clearInterval(document[uniqueID + 'checker']);
                    }
                }, 1);
                setImgProp(name, settings, isTitled);
            }
        });
    };
});
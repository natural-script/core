/*!
 * Image
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
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

    function imageFn(el, settings) {
        el.each(function () {
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
                        window.showImageA(name, URLID, source);
                    } else {
                        window.verifyBLOB(URLID, function (data) {
                            if (data == 'not exist') {
                                window.getFileSize(source, function (size) {
                                    $('#image_' + name + '_mainButton').html('<i class="material-icons">file_download</i> ' + size);
                                });
                            } else if (data == 'exists') {
                                window.showImageA(name, URLID, source);
                            }
                        });
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
                window.verifyBLOB(URLID, function (data) {
                    if (data == 'not exist') {
                        window.getFileSize(source, function (size) {
                            $('#image_' + name + '_mainButton').html('<i class="material-icons">file_download</i> ' + size);
                        });
                    } else if (data == 'exists') {
                        window.showImageA(name, URLID, source);
                    }
                });
                setImgProp(name, settings, isTitled);
            }
        });
    }
    $.fn[window.imageTranslations[document.langID]] = function (settings) {
        imageFn(this, settings);
    };
});
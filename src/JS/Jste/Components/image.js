/*!
 * Image
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-8
 */
$(function () {
    $(function () {
        function setImgProp(name, settings, isTitled) {
            if (settings[window.backgroundTranslations[document.lang]]) {
                window.setBG(name, settings[window.backgroundTranslations[document.lang]]);
            }
            if (settings[window.titleTranslations[document.lang]]) {
                $('#' + name + '').attr('alt', settings[window.titleTranslations[document.lang]]);
            }
            if (settings[window.widthTranslations[document.lang]]) {
                window.setDimension(name, 'width', settings[window.widthTranslations[document.lang]], 'img', isTitled);
            }
            if (settings[window.lengthTranslations[document.lang]]) {
                window.setDimension(name, 'length', settings[window.lengthTranslations[document.lang]], 'img', isTitled);
            }
            if (settings[window.distanceFromBottomTranslations[document.lang]]) {
                window.setDistance(name + '_container', 'bottom', settings[window.distanceFromBottomTranslations[document.lang]]);
            }
            if (settings[window.distanceFromTopTranslations[document.lang]]) {
                window.setDistance(name + '_container', 'top', settings[window.distanceFromTopTranslations[document.lang]]);
            }
            if (settings[window.distanceFromLeftTranslations[document.lang]]) {
                window.setDistance(name + '_container', 'left', settings[window.distanceFromLeftTranslations[document.lang]]);
            }
            if (settings[window.distanceFromRightTranslations[document.lang]]) {
                window.setDistance(name + '_container', 'right', settings[window.distanceFromRightTranslations[document.lang]]);
            }
            if (settings[window.commandsTranslations[document.lang]]) {
                window.execute(name, settings[window.commandsTranslations[document.lang]]);
            }
            if (settings[window.animationTranslations[document.lang]]) {
                window.setAnimation(name, settings[window.animationTranslations[document.lang]]);
            }
            if (settings[window.transparencyTranslations[document.lang]]) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.lang]] + '%)');
            }
            if (settings[window.FXTranslations[document.lang]] == 'rain') {
                $('#' + name + '').attr('fx', 'rain');
            }
        }
        var uniqueID = document.uniqueID();
        document[uniqueID + 'checker'] = setInterval(function () {
            if (document.lang == 0 || document.lang == 1 || document.lang == 2 || document.lang == 3 || document.lang == 4 || document.lang == 5) {
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //---------------------------------------------------------------------Image------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[window.imageTranslations[document.lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [window.titleTranslations[document.lang]]: null,
                        [window.typeTranslations[document.lang]]: null,
                        [window.sourceTranslations[document.lang]]: null,
                        [window.nameTranslations[document.lang]]: null,
                        [window.widthTranslations[document.lang]]: null,
                        [window.lengthTranslations[document.lang]]: null,
                        [window.animationTranslations[document.lang]]: null,
                        [window.transparencyTranslations[document.lang]]: null,
                        [window.distanceFromBottomTranslations[document.lang]]: null,
                        [window.distanceFromTopTranslations[document.lang]]: null,
                        [window.distanceFromLeftTranslations[document.lang]]: null,
                        [window.distanceFromRightTranslations[document.lang]]: null,
                        [window.positionTranslations[document.lang]]: null,
                        [window.containerTranslations[document.lang]]: null,
                        [window.backgroundTranslations[document.lang]]: null,
                        [window.FXTranslations[document.lang]]: null,
                        [window.attributesTranslations[document.lang]]: null,
                        [window.commandsTranslations[document.lang]]: null
                    }, options);
                    return this.each(function () {
                        var isIcon = false;
                        var isTitled = false;
                        var name = settings[window.nameTranslations[document.lang]];
                        var source = settings[window.sourceTranslations[document.lang]];
                        var URLID = encodeURIComponent(source).replace(/\./g, '%2E');
                        var imageContainerStartTag = 'paper-material elevation="2"';
                        var imageContainerEndTag = 'paper-material';
                        window.analyseImage(name, source);
                        if (settings[window.attributesTranslations[document.lang]]) {
                            var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' ' + window.andTranslations[document.lang] + ' ');
                            for (i = 0; i < propertiesArray.length; i++) {
                                if (propertiesArray[i] == window.transparentTranslations[document.lang]) {
                                    imageContainerStartTag = 'div';
                                    imageContainerEndTag = 'div';
                                }
                            }
                        }
                        if (settings[window.typeTranslations[document.lang]] == window.iconTranslations[document.lang]) {
                            window.getFileSize(source, function (size) {
                                if (size.split(' kb')[0] < 100) {
                                    isIcon = true;
                                    var out = '<' + imageContainerStartTag + ' id="' + name + '_container" style="position: relative; overflow: hidden;"> \
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
                            </div></' + imageContainerEndTag + '>';
                                } else {
                                    var out = '<' + imageContainerStartTag + ' id="' + name + '_container" style="position: relative; overflow: hidden;"> \
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
								</div></' + imageContainerEndTag + '>';
                                }

                                if (settings[window.containerTranslations[document.lang]]) {
                                    if ($('#' + settings[window.containerTranslations[document.lang]] + '').hasClass('modal')) {
                                        $('#' + settings[window.containerTranslations[document.lang]] + ' > .modal-content').append(out);
                                    } else {
                                        $('#' + settings[window.containerTranslations[document.lang]] + '').append(out);
                                    }
                                } else {
                                    $('contents').append(out);
                                }
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
                            if (settings[window.titleTranslations[document.lang]]) {
                                isTitled = true;
                                var out = '<' + imageContainerStartTag + ' id="' + name + '_container" style="position: relative; overflow: hidden;"> \
                                <img id="' + name + '" src="" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> \
                                <div class="imageTitle">' + settings[window.titleTranslations[document.lang]] + '</div> \
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
								</div></' + imageContainerEndTag + '>';
                            } else {
                                var out = '<' + imageContainerStartTag + ' id="' + name + '_container" style="position: relative; overflow: hidden;"> \
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
								</div></' + imageContainerEndTag + '>';
                            }

                            if (settings[window.containerTranslations[document.lang]]) {
                                if ($('#' + settings[window.containerTranslations[document.lang]] + '').hasClass('modal')) {
                                    $('#' + settings[window.containerTranslations[document.lang]] + ' > .modal-content').append(out);
                                } else {
                                    $('#' + settings[window.containerTranslations[document.lang]] + '').append(out);
                                }
                            } else {
                                $('contents').append(out);
                            }
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
                };
                clearInterval(document[uniqueID + 'checker']);
            }
        }, 1);
    });
}(jQuery));
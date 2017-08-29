$(function () {
    $(function () {
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
                [window.commandsTranslations[document.lang]]: null
            }, options);
            return this.each(function () {
                var isLogo = false;
                var name = settings[window.nameTranslations[document.lang]];
                var source = settings[window.sourceTranslations[document.lang]];
                window.analyseImage(name, source);
                if (settings[window.typeTranslations[document.lang]] == window.iconTranslations[document.lang]) {
                    window.getFileSize(source, function (size) {
                        if (size.split(' kb')[0] < 100) {
                            isLogo = true;
                            var out = '<img id="' + name + '" width="' + settings[window.imageWidthTranslations[document.lang]] + '" height="' + settings[window.imageLengthTranslations[document.lang]] + '" src="' + source + '" />';
                        } else {
                            var out = '<paper-material elevation="2" id="' + name + '_container" style="position: relative; overflow: hidden;"> \
								<img id="' + name + '" src="' + window.mediaImageBlurredA + '" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> \
								<div id="showImage_' + name + '_containerA"> \
								<p id="' + name + '_imageData" class="imageData"></p> \
								<button id="image_' + name + '_mainButton" class="imageMainButton" onclick="showImageA(\'' + name + '\', \'' + source + '\');"> \
								<i class="material-icons">file_download</i> Loading...</button></div> \
								<div id="showImage_' + name + '_containerB" style="display: none;"> \
								<p class="nudesFoundWarningText">Nudes found</p><button class="yesShowTheNudes" onclick="showImageC(\'' + name + '\', \'' + source + '\');">Continue</button> \
								<button class="showBlurredNudes" onclick="showImageB(\'' + name + '\', \'' + source + '\');">Show Blurred</button></div> \
								<div id="showImage_' + name + '_containerC" style="display: none;"> \
								<p class="showTheFullContentWarning">Show the full content ?</p> \
								<button class="yesRemoveTheBlur" onclick="showImageD(\'' + name + '\');">Continue</button></div>\
                                <div id="showImage_' + name + '_containerD" style="display: none;"> \
								<p class="forbiddenContentWarning">You are prohibited from accessing this content</p> \
								</div></paper-container>';
                        }
                    });
                } else {
                    if (settings[window.titleTranslations[document.lang]]) {
                        containerHeight = parseInt(settings[window.imageLengthTranslations[document.lang]]) + 40;
                        var out = '<paper-material elevation="2" id="' + name + '_container" style="position: relative; overflow: hidden;"> \
								<img id="' + name + '" src="' + window.mediaImageBlurredA + '" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> \
								<div id="showImage_' + name + '_containerA"> \
								<p id="' + name + '_imageData" class="imageData"></p> \
								<button id="image_' + name + '_mainButton" class="imageMainButton" onclick="showImageA(\'' + name + '\', \'' + source + '\');"> \
								<i class="material-icons">file_download</i> Loading...</button></div> \
								<div id="showImage_' + name + '_containerB" style="display: none;"> \
								<p class="nudesFoundWarningText">Nudes found</p><button class="yesShowTheNudes" onclick="showImageC(\'' + name + '\', \'' + source + '\');">Continue</button> \
								<button class="showBlurredNudes" onclick="showImageB(\'' + name + '\', \'' + source + '\');">Show Blurred</button></div> \
								<div id="showImage_' + name + '_containerC" style="display: none;"> \
								<p class="showTheFullContentWarning">Show the full content ?</p> \
								<button class="yesRemoveTheBlur" onclick="showImageD(\'' + name + '\');">Continue</button></div>\
                                <div id="showImage_' + name + '_containerD" style="display: none;"> \
								<p class="forbiddenContentWarning">You are prohibited from accessing this content</p> \
								</div></paper-container>';
                    } else {
                        var out = '<paper-material elevation="2" id="' + name + '_container" style="position: relative; overflow: hidden;"> \
								<img id="' + name + '" src="' + window.mediaImageBlurredA + '" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /> \
								<div id="showImage_' + name + '_containerA"> \
								<p id="' + name + '_imageData" class="imageData"></p> \
								<button id="image_' + name + '_mainButton" class="imageMainButton" onclick="showImageA(\'' + name + '\', \'' + source + '\');"> \
								<i class="material-icons">file_download</i> Loading...</button></div> \
								<div id="showImage_' + name + '_containerB" style="display: none;"> \
								<p class="nudesFoundWarningText">Nudes found</p><button class="yesShowTheNudes" onclick="showImageC(\'' + name + '\', \'' + source + '\');">Continue</button> \
								<button class="showBlurredNudes" onclick="showImageB(\'' + name + '\', \'' + source + '\');">Show Blurred</button></div> \
								<div id="showImage_' + name + '_containerC" style="display: none;"> \
								<p class="showTheFullContentWarning">Show the full content ?</p> \
                                <button class="yesRemoveTheBlur" onclick="showImageD(\'' + name + '\');">Continue</button></div>\
                                <div id="showImage_' + name + '_containerD" style="display: none;"> \
								<p class="forbiddenContentWarning">You are prohibited from accessing this content</p> \
								</div></paper-container>';
                    }
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
                window.verifyDataURL(source, function (data) {
                    if (data == 'not exist') {
                        window.getFileSize(source, function (size) {
                            $('#image_' + name + '_mainButton').html('<i class="material-icons">file_download</i> ' + size);
                        });
                    } else if (data == 'exists') {
                        window.showImageA(name, source);
                    }
                });
                if (settings[window.backgroundTranslations[document.lang]]) {
                    window.setBG(name, settings[window.backgroundTranslations[document.lang]]);
                }
                if (settings[window.titleTranslations[document.lang]]) {
                    $('#' + name + '').attr('alt', settings[window.titleTranslations[document.lang]]);
                }
                if (settings[window.widthTranslations[document.lang]]) {
                    window.setDimension(name, 'width', settings[window.widthTranslations[document.lang]], 'img');
                }
                if (settings[window.lengthTranslations[document.lang]]) {
                    window.setDimension(name, 'length', settings[window.lengthTranslations[document.lang]], 'img');
                }
                if (settings[window.distanceFromBottomTranslations[document.lang]]) {
                    if (isLogo == true) {
                        window.setDistance(name, 'bottom', settings[window.distanceFromBottomTranslations[document.lang]]);
                    } else {
                        window.setDistance(name + '_container', 'bottom', settings[window.distanceFromBottomTranslations[document.lang]]);
                    }
                }
                if (settings[window.distanceFromTopTranslations[document.lang]]) {
                    if (isLogo == true) {
                        window.setDistance(name, 'top', settings[window.distanceFromTopTranslations[document.lang]]);
                    } else {
                        window.setDistance(name + '_container', 'top', settings[window.distanceFromTopTranslations[document.lang]]);
                    }
                }
                if (settings[window.distanceFromLeftTranslations[document.lang]]) {
                    if (isLogo == true) {
                        window.setDistance(name, 'left', settings[window.distanceFromLeftTranslations[document.lang]]);
                    } else {
                        window.setDistance(name + '_container', 'left', settings[window.distanceFromLeftTranslations[document.lang]]);
                    }
                }
                if (settings[window.distanceFromRightTranslations[document.lang]]) {
                    if (isLogo == true) {
                        window.setDistance(name, 'right', settings[window.distanceFromRightTranslations[document.lang]]);
                    } else {
                        window.setDistance(name + '_container', 'right', settings[window.distanceFromRightTranslations[document.lang]]);
                    }
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
            });
        };
    });
}(jQuery));
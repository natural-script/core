/*!
 * Setup
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-10
 */
$(function () {
    $.fn[setupTranslations[document.lang]] = function (options) {
        // Establish our default settings
        var settings = $.extend({
            [logoTranslations[document.lang]]: null,
            [titleTranslations[document.lang]]: null,
            [modeTranslations[document.lang]]: siteTranslations[document.lang],
            [defaultWindowResolutionTranslations[document.lang]]: screen.availWidth + ' × ' + screen.availHeight,
            [mainColorTranslations[document.lang]]: null,
            [directionTranslations[document.lang]]: window.verticalTranslations[document.lang],
            [attributesTranslations[document.lang]]: null
        }, options);
        return this.each(function () {
            if (settings[window.defaultWindowResolutionTranslations[document.lang]]) {
                var resolution = settings[window.defaultWindowResolutionTranslations[document.lang]];
                var landscapeResolution = null;
                var portraitResolution = null;
                if (resolution.includes(window.andTranslations[document.lang])) {
                    var availableResolutions = resolution.split(' ' + window.andTranslations[document.lang] + ' ');
                    for (var i = 0; i < availableResolutions.length; i++) {
                        if (availableResolutions[i].includes(window.inTheCaseOfLandscapeModeTranslations[document.lang])) {
                            landscapeResolution = availableResolutions[i].split(' ' + window.inTheCaseOfLandscapeModeTranslations[document.lang])[0].split(' ')[0] + ' ' + availableResolutions[i].split(' ' + window.inTheCaseOfLandscapeModeTranslations[document.lang])[0].split(' ')[1] + ' ' + availableResolutions[i].split(' ' + window.inTheCaseOfLandscapeModeTranslations[document.lang])[0].split(' ')[2];
                            document.defaultLandscapeWindowWidth = landscapeResolution.split(' × ')[0];
                            document.defaultLandscapeWindowLength = landscapeResolution.split(' × ')[1];
                            document.defaultWindowWidth = document.defaultLandscapeWindowLength;
                            document.defaultWindowLength = document.defaultLandscapeWindowLength;
                        } else if (availableResolutions[i].includes(window.inTheCaseOfPortraitModeTranslations[document.lang])) {
                            portraitResolution = availableResolutions[i].split(' ' + window.inTheCaseOfPortraitModeTranslations[document.lang])[0].split(' ')[0] + ' ' + availableResolutions[i].split(' ' + window.inTheCaseOfPortraitModeTranslations[document.lang])[0].split(' ')[1] + ' ' + availableResolutions[i].split(' ' + window.inTheCaseOfPortraitModeTranslations[document.lang])[0].split(' ')[2];
                            document.defaultPortraitWindowWidth = portraitResolution.split(' × ')[0];
                            document.defaultPortraitWindowLength = portraitResolution.split(' × ')[1];
                        }
                    }
                } else {
                    document.defaultWindowWidth = resolution.split(' × ')[0];
                    document.defaultWindowLength = resolution.split(' × ')[1];
                }

            }
            if (settings[modeTranslations[document.lang]] == siteTranslations[document.lang]) {
                window.mode = 'site';
                $('body').append('<contents></contents>');
            } else if (settings[modeTranslations[document.lang]] == appTranslations[document.lang]) {
                window.mode = 'app';
                $('body').append('<paper-header-panel><paper-toolbar><a slot="top" class="waves-effect waves-light transparent menuBtn"><i class="material-icons">menu</i></a><div slot="top" class="title appTitle" style="margin-left: 25px;">' + settings[titleTranslations[document.lang]] + '</div></paper-toolbar><div><contents></contents></div></paper-header-panel>');
            }
            if (settings[logoTranslations[document.lang]]) {
                $('head').append('<link rel="icon" type="image/png" href="' + settings[logoTranslations[document.lang]] + '">');
            }
            if (settings[titleTranslations[document.lang]]) {
                $('head').append('<title>' + settings[titleTranslations[document.lang]] + '</title>');
                window.title = settings[titleTranslations[document.lang]].replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
                if (typeof cordova !== 'undefined') {
                    if (cordova.platformId == 'android') {
                        RecentsControl.setDescription(window.title);
                    }
                }
            }
            if (settings[mainColorTranslations[document.lang]]) {
                if (typeof cordova !== 'undefined') {
                    if (cordova.platformId == 'android') {
                        window.setMainColor(settings[mainColorTranslations[document.lang]]);
                    }
                }
            }
            if (settings[directionTranslations[document.lang]]) {
                if (settings[directionTranslations[document.lang]] == window.verticalTranslations[document.lang]) {
                    document.pageDirection = 'vertical';
                } else if (settings[directionTranslations[document.lang]] == window.horizontalTranslations[document.lang]) {
                    document.pageDirection = 'horizontal';
                }
            }
            if (settings[attributesTranslations[document.lang]]) {
                var propertiesArray = settings[attributesTranslations[document.lang]].split(' &amp;&amp;&amp; ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == remoteScrollingTranslations[document.lang]) {
                        var canvas = $('<canvas style="display: none;">').get(0),
                            context = canvas.getContext('2d'),
                            video = document.createElement('video'),
                            fist_pos_old,
                            detector;
                        document.getElementsByTagName('body')[0].appendChild(canvas);
                        try {
                            compatibility.getUserMedia({
                                video: true
                            }, function (stream) {
                                try {
                                    video.src = compatibility.URL.createObjectURL(stream);
                                } catch (error) {
                                    video.src = stream;
                                }
                                compatibility.requestAnimationFrame(play);
                            }, function (error) {
                                alert("WebRTC not available");
                            });
                        } catch (error) {
                            alert(error);
                        }

                        function play() {
                            compatibility.requestAnimationFrame(play);
                            if (video.paused) video.play();
                            if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {
                                /* Prepare the detector once the video dimensions are known: */
                                if (!detector) {
                                    var width = ~~(80 * video.videoWidth / video.videoHeight);
                                    var height = 80;
                                    detector = new objectdetect.detector(width, height, 1.1, objectdetect.handfist);
                                }
                                /* Draw video overlay: */
                                canvas.width = ~~(100 * video.videoWidth / video.videoHeight);
                                canvas.height = 100;
                                context.drawImage(video, 0, 0, canvas.clientWidth, canvas.clientHeight);
                                var coords = detector.detect(video, 1);
                                if (coords[0]) {
                                    var coord = coords[0];
                                    /* Rescale coordinates from detector to video coordinate space: */
                                    coord[0] *= video.videoWidth / detector.canvas.width;
                                    coord[1] *= video.videoHeight / detector.canvas.height;
                                    coord[2] *= video.videoWidth / detector.canvas.width;
                                    coord[3] *= video.videoHeight / detector.canvas.height;
                                    /* Find coordinates with maximum confidence: */
                                    var coord = coords[0];
                                    for (var i = coords.length - 1; i >= 0; --i)
                                        if (coords[i][4] > coord[4]) coord = coords[i];
                                    /* Scroll window: */
                                    var fist_pos = [coord[0] + coord[2] / 2, coord[1] + coord[3] / 2];
                                    if (fist_pos_old) {
                                        var dx = (fist_pos[0] - fist_pos_old[0]) / video.videoWidth,
                                            dy = (fist_pos[1] - fist_pos_old[1]) / video.videoHeight;
                                        window.scrollBy(dx * 200, dy * 200);
                                    } else fist_pos_old = fist_pos;
                                    /* Draw coordinates on video overlay: */
                                    context.beginPath();
                                    context.lineWidth = '2';
                                    context.fillStyle = 'rgba(0, 255, 255, 0.5)';
                                    context.fillRect(coord[0] / video.videoWidth * canvas.clientWidth, coord[1] / video.videoHeight * canvas.clientHeight, coord[2] / video.videoWidth * canvas.clientWidth, coord[3] / video.videoHeight * canvas.clientHeight);
                                    context.stroke();
                                } else fist_pos_old = null;
                            }
                        }
                    }
                }
            }
        });
    };
});
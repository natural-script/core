/*!
 * Setup
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
$(function () {
    function setupFn(el, settings) {
        el.each(function () {
            var resolution;
            if (elementSettingsAnalyze(settings, 'defaultWindowResolution')) {
                resolution = elementSettingsAnalyze(settings, 'defaultWindowResolution');
            } else {
                resolution = screen.availWidth + ' × ' + screen.availHeight;
            }
            var landscapeResolution = null;
            var portraitResolution = null;
            if (XRegExp(' ' + getTranslations("and") + ' ', 'gmi').test(resolution)) {
                var availableResolutions = resolution.split(XRegExp(' ' + getTranslations("and") + ' ', 'gmi'));
                for (var i = 0; i < availableResolutions.length; i++) {
                    if (XRegExp('' + getTranslations("inTheCaseOfLandscapeMode") + '', 'gmi').test(availableResolutions[i])) {
                        landscapeResolution = availableResolutions[i].split(XRegExp('' + getTranslations("inTheCaseOfLandscapeMode") + '', 'gmi'))[0].split(' ')[0] + ' ' + availableResolutions[i].split(XRegExp('' + getTranslations("inTheCaseOfLandscapeMode") + '', 'gmi'))[0].split(' ')[1] + ' ' + availableResolutions[i].split(XRegExp('' + getTranslations("inTheCaseOfLandscapeMode") + '', 'gmi'))[0].split(' ')[2];
                        document.defaultLandscapeWindowWidth = landscapeResolution.split(' × ')[0];
                        document.defaultLandscapeWindowLength = landscapeResolution.split(' × ')[1];
                        document.defaultWindowWidth = document.defaultLandscapeWindowLength;
                        document.defaultWindowLength = document.defaultLandscapeWindowLength;
                    } else if (XRegExp('' + getTranslations("inTheCaseOfPortraitMode") + '', 'gmi').test(availableResolutions[i])) {
                        portraitResolution = availableResolutions[i].split(XRegExp('' + getTranslations("inTheCaseOfPortraitMode") + '', 'gmi'))[0].split(' ')[0] + ' ' + availableResolutions[i].split(XRegExp('' + getTranslations("inTheCaseOfPortraitMode") + '', 'gmi'))[0].split(' ')[1] + ' ' + availableResolutions[i].split(XRegExp('' + getTranslations("inTheCaseOfPortraitMode") + '', 'gmi'))[0].split(' ')[2];
                        document.defaultPortraitWindowWidth = portraitResolution.split(' × ')[0];
                        document.defaultPortraitWindowLength = portraitResolution.split(' × ')[1];
                    }
                }
            } else {
                document.defaultWindowWidth = resolution.split(' × ')[0];
                document.defaultWindowLength = resolution.split(' × ')[1];
            }
            if (window.getSafe(() => elementSettingsAnalyze(settings, 'mode') == undefined || elementSettingsAnalyze(settings, 'mode').findBestMatch(window.wordsTranslationsDB.Words['site'][document.langCode]).rating > 0.8)) {
                window.mode = 'site';
                $('body').append('<contents></contents>');
            } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'mode').findBestMatch(window.wordsTranslationsDB.Words['app'][document.langCode]).rating > 0.8)) {
                window.mode = 'app';
                $('body').append('<app-header reveals><app-toolbar><paper-icon-button icon="menu" class="menuBtn"></paper-icon-button><div main-title class="appTitle">' + elementSettingsAnalyze(settings, 'title') + '</div></app-toolbar><div><contents></contents></div></app-header>');
            }
            if (elementSettingsAnalyze(settings, 'logo')) {
                $('head').append('<link rel="icon" type="image/png" href="' + elementSettingsAnalyze(settings, 'logo') + '">');
            }
            if (elementSettingsAnalyze(settings, 'title')) {
                $('head').append('<title>' + elementSettingsAnalyze(settings, 'title') + '</title>');
                window.title = elementSettingsAnalyze(settings, 'title').replace(/[_]/g, ' ').replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
                if (typeof cordova !== 'undefined') {
                    if (cordova.platformId == 'android') {
                        RecentsControl.setDescription(window.title);
                    }
                }
            }
            if (elementSettingsAnalyze(settings, 'mainColor')) {
                window.setMainColor(elementSettingsAnalyze(settings, 'mainColor'));
            } else {
                window.setMainColor('#2196F3');
            }
            if (window.getSafe(() => elementSettingsAnalyze(settings, 'direction') == undefined || elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['vertical'][document.langCode]).rating > 0.8)) {
                document.pageDirection = 'vertical';
            } else if (window.getSafe(() => elementSettingsAnalyze(settings, 'direction').findBestMatch(window.wordsTranslationsDB.Words['horizontal'][document.langCode]).rating > 0.8)) {
                document.pageDirection = 'horizontal';
            }
            if (elementSettingsAnalyze(settings, 'attributes')) {
                var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(' &amp;&amp;&amp; ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['remoteScrolling'][document.langCode]).rating > 0.8) {
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
            document[document.uniqueID()] = new PerfectScrollbar('body');
        });
    }
    var setupTranslations = window.wordsTranslationsDB.Words['setup'][document.langCode];
    for (var i = 0; i < setupTranslations.length; i++) {
        $.fn[setupTranslations[i]] = function (settings) {
            setupFn(this, settings);
        };
    }
});
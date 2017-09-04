$(function () {
    $(function () {
        var uniqueID = document.uniqueID();
        document[uniqueID + 'checker'] = setInterval(function () {
            if (document.lang == 0 || document.lang == 1 || document.lang == 2 || document.lang == 3 || document.lang == 4 || document.lang == 5) {
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //---------------------------------------------------------------------SlideShow Item------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[window.slideShowItemTranslations[document.lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [window.slideShowTranslations[document.lang]]: null,
                        [window.typeTranslations[document.lang]]: window.imageTranslations[document.lang],
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
                        [window.commandsTranslations[document.lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[window.nameTranslations[document.lang]];
                        var source = settings[window.sourceTranslations[document.lang]];
                        if (settings[window.typeTranslations[document.lang]] == window.imageTranslations[document.lang]) {
                            var out = '<div class="owl-item" data-hash="' + name + '"><img src="' + source + '"></img></div>';
                        } else if (settings[window.typeTranslations[document.lang]] == window.videoTranslations[document.lang]) {
                            var out = '<div class="item-video" data-hash="' + name + '"><a class="owl-video" href="' + source + '"></a></div>'
                        }
                        $('#' + settings[window.slideShowTranslations[document.lang]] + '').append(out);
                        if (settings[window.positionTranslations[document.lang]]) {
                            $('#' + name + '').css('position', settings[window.positionTranslations[document.lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[window.distanceFromBottomTranslations[document.lang]]) {
                            window.setDistance(name, 'bottom', settings[window.distanceFromBottomTranslations[document.lang]]);
                        }
                        if (settings[window.distanceFromTopTranslations[document.lang]]) {
                            window.setDistance(name, 'top', settings[window.distanceFromTopTranslations[document.lang]]);
                        }
                        if (settings[window.distanceFromLeftTranslations[document.lang]]) {
                            window.setDistance(name, 'left', settings[window.distanceFromLeftTranslations[document.lang]]);
                        }
                        if (settings[window.distanceFromRightTranslations[document.lang]]) {
                            window.setDistance(name, 'right', settings[window.distanceFromRightTranslations[document.lang]]);
                        }
                        if (settings[window.backgroundTranslations[document.lang]]) {
                            window.setBG(name, settings[window.backgroundTranslations[document.lang]]);
                        }
                        if (settings[window.commandsTranslations[document.lang]]) {
                            window.execute(name, settings[window.commandsTranslations[document.lang]]);
                        }
                        if (settings[window.titleTranslations[document.lang]]) {
                            $('#' + name + '').attr('alt', settings[window.titleTranslations[document.lang]]);
                        }
                        if (settings[window.widthTranslations[document.lang]]) {
                            window.setDimension(name, 'width', settings[window.widthTranslations[document.lang]]);
                        }
                        if (settings[window.lengthTranslations[document.lang]]) {
                            window.setDimension(name, 'length', settings[window.lengthTranslations[document.lang]]);
                        }
                        if (settings[window.animationTranslations[document.lang]]) {
                            window.setAnimation(name, settings[window.animationTranslations[document.lang]]);
                        }
                        if (settings[window.transparencyTranslations[document.lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[window.transparencyTranslations[document.lang]] + '%)');
                        }
                    });
                };

                clearInterval(document[uniqueID + 'checker']);
            }
        }, 1);
    });
}(jQuery));
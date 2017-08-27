$(function () {
    $(function () {
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
        //--------------------------------------------------------------------Button------------------------------------------------------------------------------------------------------------------------------------------//
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
        $.fn[window.buttonTranslations[document.lang]] = function (options) {
            // Establish our default settings
            var settings = $.extend({
                [window.textTranslations[document.lang]]: 'It seems that you have typed nothing',
                [window.fontColorTranslations[document.lang]]: null,
                [window.fontSizeTranslations[document.lang]]: null,
                [window.nameTranslations[document.lang]]: null,
                [window.widthTranslations[document.lang]]: null,
                [window.lengthTranslations[document.lang]]: null,
                [window.thicknessTranslations[document.lang]]: null,
                [window.fontStyleTranslations[document.lang]]: null,
                [window.disabledTranslations[document.lang]]: null,
                [window.raisedTranslations[document.lang]]: null,
                [window.switchedTranslations[document.lang]]: null,
                [window.animationTranslations[document.lang]]: null,
                [window.backgroundTranslations[document.lang]]: null,
                [window.transparencyTranslations[document.lang]]: null,
                [window.distanceFromBottomTranslations[document.lang]]: null,
                [window.distanceFromTopTranslations[document.lang]]: null,
                [window.distanceFromLeftTranslations[document.lang]]: null,
                [window.distanceFromRightTranslations[document.lang]]: null,
                [window.positionTranslations[document.lang]]: null,
                [window.containerTranslations[document.lang]]: null,
                [window.attributesTranslations[document.lang]]: null,
                [window.commandsTranslations[document.lang]]: null
            }, options);
            return this.each(function () {
                var name = settings[window.nameTranslations[document.lang]];
                var out = '<paper-button id="' + name + '"></paper-button>';
                if (settings[window.containerTranslations[document.lang]]) {
                    if ($('#' + settings[window.containerTranslations[document.lang]] + '').hasClass('modal')) {
                        $('#' + settings[window.containerTranslations[document.lang]] + ' > .modal-content').append(out);
                    } else {
                        $('#' + settings[window.containerTranslations[document.lang]] + '').append(out);
                    }
                } else {
                    $('contents').append(out);
                }
                $('#' + name + '').text(settings[window.textTranslations[document.lang]]);
                if (settings[window.fontColorTranslations[document.lang]]) {
                    window.setFontColour(name, settings[window.fontColorTranslations[document.lang]]);
                }
                if (settings[window.fontStyleTranslations[document.lang]]) {
                    $('#' + name + '').css('font-style', settings[window.fontStyleTranslations[document.lang]]);
                }
                if (settings[window.attributesTranslations[document.lang]]) {
                    var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' &amp;&amp;&amp; ');
                    for (i = 0; i < propertiesArray.length; i++) {
                        if (propertiesArray[i] == window.disabledTranslations[document.lang]) {
                            $('#' + name + '').attr('disabled', '');
                        } else if (propertiesArray[i] == window.raisedTranslations[document.lang]) {
                            $('#' + name + '').attr('raised', '');
                        } else if (propertiesArray[i] == window.switchedTranslations[document.lang]) {
                            $('#' + name + '').attr('toggled', '');
                        }
                    }
                }
                if (settings[window.thicknessTranslations[document.lang]]) {
                    if (settings[window.thicknessTranslations[document.lang]] == window.thickTranslations[document.lang]) {
                        $('#' + name + '').css('font-weight', 'bold');
                    } else {
                        $('#' + name + '').css('font-weight', settings[window.thicknessTranslations[document.lang]]);
                    }
                }
                if (settings[window.fontSizeTranslations[document.lang]]) {
                    $('#' + name + '').css('font-size', window.convertLengthCSS(settings[window.fontSizeTranslations[document.lang]]));
                }
                if ($('#' + settings[window.containerTranslations[document.lang]] + '').hasClass('row') == true) {
                    $('#' + name + '').addClass('col');
                }
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
                if (settings[window.commandsTranslations[document.lang]]) {
                    window.execute(name, settings[window.commandsTranslations[document.lang]]);
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
    });
}(jQuery));
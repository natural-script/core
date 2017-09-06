/*!
 * Text
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-6
 */
$(function () {
    $(function () {
        var uniqueID = document.uniqueID();
        document[uniqueID + 'checker'] = setInterval(function () {
            if (document.lang == 0 || document.lang == 1 || document.lang == 2 || document.lang == 3 || document.lang == 4 || document.lang == 5) {
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //----------------------------------------------------------------------Text------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[window.textFnTranslations[document.lang]] = function (options) {
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
                        var out = '<p id="' + name + '"></p>';
                        if (settings[window.containerTranslations[document.lang]]) {
                            if ($('#' + settings[window.containerTranslations[document.lang]] + '').hasClass('modal')) {
                                $('#' + settings[window.containerTranslations[document.lang]] + ' > .modal-content').append(out);
                            } else {
                                $('#' + settings[window.containerTranslations[document.lang]] + '').append(out);
                            }
                        } else {
                            $('contents').append(out);
                        }
                        if (settings[window.attributesTranslations[document.lang]]) {
                            var propertiesArray = settings[window.attributesTranslations[document.lang]].split(' &amp;&amp;&amp; ');
                            for (i = 0; i < propertiesArray.length; i++) {
                                if (propertiesArray[i] == window.shareableTranslations[document.lang]) {
                                    window.shareThis({
                                        selector: '#' + name + '',
                                        sharers: [window.twitterSharer, window.facebookSharer, window.linkedInSharer, window.redditSharer, window.emailSharer]
                                    }).init();
                                }
                            }
                        }
                        var insertedText = settings[window.textTranslations[document.lang]];
                        var dynamicTextsArrayA = settings[window.textTranslations[document.lang]].split('&lt;&lt; the value of ');
                        (function (dynamicTextsArrayA, insertedText) {
                            setInterval(function () {
                                for (i = 1; i < dynamicTextsArrayA.length; i++) {
                                    var textResourceA = dynamicTextsArrayA[i].split(' &gt;&gt;')[0];
                                    var newText = insertedText.replace('&lt;&lt; the value of ' + textResourceA + ' &gt;&gt;', $('#' + textResourceA + '').val());
                                }
                                $('#' + name + '').html(newText);
                            }, 5000);
                        })(dynamicTextsArrayA, insertedText);
                        var dynamicTextsArrayB = settings[window.textTranslations[document.lang]].split('&lt;&lt; the text of ');
                        (function (dynamicTextsArrayB, insertedText) {
                            setInterval(function () {
                                for (i = 1; i < dynamicTextsArrayB.length; i++) {
                                    var textResourceB = dynamicTextsArrayB[i].split(' &gt;&gt;')[0];
                                    var newText = insertedText.replace('&lt;&lt; the text of ' + textResourceB + ' &gt;&gt;', $('#' + textResourceB + '').text());
                                }
                                $('#' + name + '').html(newText);
                            }, 5000);
                        })(dynamicTextsArrayB, insertedText);
                        var customTextsArrayAB = insertedText.split('&lt;&lt; ' + "the user's name" + ' ');
                        if (customTextsArrayAB.length > 1) {
                            setTimeout(function () {
                                for (i = 1; i < customTextsArrayAB.length; i++) {
                                    var customTextAB = customTextsArrayAB[i].split(' &gt;&gt;')[0];
                                    insertedText = insertedText.replace('&lt;&lt; ' + "the user's name" + ' &gt;&gt;', window.user.displayName);
                                }
                                $('#' + name + '').html(insertedText);
                            }, 2000);
                        } else {
                            $('#' + name + '').html(insertedText);
                        }
                        if (settings[window.fontColorTranslations[document.lang]]) {
                            window.setFontColour(name, settings[window.fontColorTranslations[document.lang]]);
                        }
                        if (settings[window.fontStyleTranslations[document.lang]]) {
                            $('#' + name + '').css('font-style', settings[window.fontStyleTranslations[document.lang]]);
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
                        if (settings[window.backgroundTranslations[document.lang]]) {
                            window.setBG(name, settings[window.backgroundTranslations[document.lang]]);
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

                clearInterval(document[uniqueID + 'checker']);
            }
        }, 1);
    });
}(jQuery));
/*!
 * Text
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-04
 */
$(function () {
    function textFn(el, settings) {
        el.each(function () {
            var name = settings[window.nameTranslations[document.langID]];
            var out = '<p id="' + name + '">' + settings[window.textTranslations[document.langID]] + '</p>';
            window.appendComponent(settings[window.containerTranslations[document.langID]], out);
            if (settings[window.attributesTranslations[document.langID]]) {
                var propertiesArray = settings[window.attributesTranslations[document.langID]].split(' ' + window.andTranslations[document.langID] + ' ');
                for (i = 0; i < propertiesArray.length; i++) {
                    if (propertiesArray[i] == window.shareableTranslations[document.langID]) {
                        window.shareThis({
                            selector: '#' + name + '',
                            sharers: [window.twitterSharer, window.facebookSharer, window.linkedInSharer, window.redditSharer, window.emailSharer]
                        }).init();
                    }
                }
            }
            if (settings[window.directionTranslations[document.langID]]) {
                if (settings[window.directionTranslations[document.langID]] == window.ltrTranslations[document.langID]) {
                    $('#' + name + '').css('direction', 'ltr');
                } else if (settings[window.directionTranslations[document.langID]] == window.rtlTranslations[document.langID]) {
                    $('#' + name + '').css('direction', 'rtl');
                }
            }
            if (settings[window.backgroundTranslations[document.langID]]) {
                window.setBG(name, settings[window.backgroundTranslations[document.langID]]);
            }
            if ($('#' + settings[window.containerTranslations[document.langID]] + '').hasClass('row') == true) {
                $('#' + name + '').addClass('col');
            }
            if (settings[window.positionTranslations[document.langID]]) {
                $('#' + name + '').css('position', settings[window.positionTranslations[document.langID]]);
            } else {
                $('#' + name + '').css('position', 'relative');
            }
            window.propSet(name, settings);
            document[document.uniqueID()] = new PerfectScrollbar('#' + name + '');
        });
    }
    $.fn[window.textFnTranslations[document.langID]] = function (settings) {

        textFn(this, settings);
    };
});
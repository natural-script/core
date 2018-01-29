(function ($) {
    var defaults = {
        callback: function () { },
        runOnLoad: true,
        frequency: 100,
        previousVisibility : null
    };

    var methods = {};
    methods.checkVisibility = function (element, options) {
        if (jQuery.contains(document, element[0])) {
            var previousVisibility = options.previousVisibility;
            var isVisible = element.is(':visible');
            options.previousVisibility = isVisible;
            if (previousVisibility == null) {
                if (options.runOnLoad) {
                    options.callback(element, isVisible);
                }
            } else if (previousVisibility !== isVisible) {
                options.callback(element, isVisible);
            }

            setTimeout(function() {
                methods.checkVisibility(element, options);
            }, options.frequency);
        } 
    };

    $.fn.visibilityChanged = function (options) {
        var settings = $.extend({}, defaults, options);
        return this.each(function () {
            methods.checkVisibility($(this), settings);
        });
    };
})(jQuery);

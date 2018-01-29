window.getVideoInfo = function (name, provider, videoID, url, title) {
    var request = new XMLHttpRequest();

    request.open('POST', 'https://jste-manager.herokuapp.com/getVideoInfo');

    request.setRequestHeader('Content-Type', 'application/json');

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            var availableQualities = $.parseJSON(this.responseText).qualities;
            if (availableQualities) {
                for (var i = 0; i < availableQualities.length; i++) {
                    var videoQuality = availableQualities[i].width;
                    var videoURL = availableQualities[i].url;
                    var videoSize = availableQualities[i].size;
                    var fps = parseFloat(availableQualities[i].fps);
                    var videoURLID = encodeURIComponent(url + videoQuality).replace(/\./g, '%2E');
                    if (availableQualities.length == 1) {
                        window.verifyBLOB(name, 'vid', videoURL, videoURLID, title, fps);
                    }
                    $('<paper-button>').addClass('resolutionBtn')
                        .addClass('col')
                        .attr('resolution', videoQuality)
                        .attr('vidurl', videoURL)
                        .text(videoQuality + 'p')
                        .attr('onclick', 'window.verifyBLOB(\"' + name + '\", \"vid\", \"' + videoURL + '\", \"' + videoURLID + '", \"' + title + '\", \"' + fps + '\"); \
                    window.jQuery(\'#video_' + name + '_mainButton\').attr(\'onclick\', \'showVideoA(\"' + name + '\", \"' + videoURL + '\", \"' + title + '\", \"' + videoURLID + '", \"' + fps + '\");\') \
                    .html(\'<i class="material-icons">play_arrow</i> ' + videoSize + '\');')
                        .appendTo('#' + name + '_resolutionsBtnConatiner');
                    $('#' + name + '_resolutionsBtnConatiner').show();
                }
            }
        }
    };

    var body = {
        'url': url
    };

    request.send(JSON.stringify(body));
};
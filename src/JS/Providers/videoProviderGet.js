window.getVideoProvider = function (videoURL) {
    var videoInfo = [];
    if (videoURL.split('https://www.youtube.com/watch?v=').length == 2) {
        videoInfo.videoProvider = 'youtube';
        videoInfo.videoID = videoURL.split('https://www.youtube.com/watch?v=')[1].split('?')[0].split('#')[0];
        videoInfo.videoURL = 'https://www.youtube.com/watch?v=' + videoInfo.videoID;
        return videoInfo;
    } else if (videoURL.split('https://vimeo.com/').length == 2) {
        videoInfo.videoProvider = 'vimeo';
        videoInfo.videoID = videoURL.split('https://vimeo.com/')[1].split('?')[0].split('#')[0];
        videoInfo.videoURL = 'https://vimeo.com/' + videoInfo.videoID;
        return videoInfo;
    } else {
        videoInfo.videoProvider = 'webHosting';
        return videoInfo;
    }
};
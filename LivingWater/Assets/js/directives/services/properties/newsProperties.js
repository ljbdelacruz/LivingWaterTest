﻿angular.module('otherApp')
.factory('newsProperties', function () {
    var newsProperties = {
        news: [{
            id: 1, title: 'Headlines', content: 'This is the new news',
            images: [{ id: 1, image: '/Assets/images/etc/img2.jpg', page_id: 1, width: 300, height: 300 }],
            videos: [{ id: 1, news_id: 1, title: 'Youtube video player', design: 'youtube-player', type: 'text/html', width: 300, height: 300, source: 'https://www.youtube.com/embed/ZL6BP8ss-5Q', thumbnail: 'http://img.youtube.com/vi/ZL6BP8ss-5Q/default.jpg', frameborder:0}]
        }],
    };
    return newsProperties;
});
angular.module('otherApp')
.factory('newsProperties', function () {
    var newsProperties = {
        news: [{
            id: 1, title: 'Headlines', content: 'This is the new news',
            images: [{ id: 1, image: '/Assets/images/etc/img2.jpg', page_id: 1, width: 300, height: 300 }],
            videos: [{ id: 1, news_id: 1, title: 'Youtube video player', design: 'youtube-player', type: 'text/html', width: 300, height: 300, source: 'https://www.youtube.com/embed/ZL6BP8ss-5Q', thumbnail: 'http://img.youtube.com/vi/ZL6BP8ss-5Q/default.jpg', frameborder:0}]
        },
        {
            id: 2, title: 'Headline 2', content: 'This Just In',
            images: [{ id: 2, image: '/Assets/images/etc/img1.jpg', page_id: 2, width: 300, height: 300 }],
            videos: [{ id: 1, news_id: 1, title: 'Youtube video player', design: 'youtube-player', type: 'text/html', width: 300, height: 300, source: 'https://www.youtube.com/embed/CqSo-kXjQLU', thumbnail: 'http://img.youtube.com/vi/CqSo-kXjQLU/default.jpg', frameborder: 0 }]
        },
        {
            id: 3, title: 'Headline 3', content: 'This Just In',
            images: [{ id: 2, image: '/Assets/images/etc/img3.jpg', page_id: 2, width: 300, height: 300 }],
            videos: [{ id: 1, news_id: 1, title: 'Youtube video player', design: 'youtube-player', type: 'text/html', width: 300, height: 300, source: 'https://www.youtube.com/embed/cBxlHvDwZpw', thumbnail: 'http://img.youtube.com/vi/cBxlHvDwZpw/default.jpg', frameborder: 0 }]
        },
        {
            id: 4, title: 'Headline 4', content: 'This Just In',
            images: [{ id: 2, image: '/Assets/images/etc/img4.jpg', page_id: 2, width: 300, height: 300 }],
            videos: [{ id: 1, news_id: 1, title: 'Youtube video player', design: 'youtube-player', type: 'text/html', width: 300, height: 300, source: 'https://www.youtube.com/embed/ZL6BP8ss-5Q', thumbnail: 'http://img.youtube.com/vi/ZL6BP8ss-5Q/default.jpg', frameborder: 0 }]
        }
        ],
    };
    return newsProperties;
});
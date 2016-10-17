'use strict';

/* Create module for navbar directive */
angular.module('directives.newsModify', [])
.directive('newsModify',
           ['$location',
            'newsProperties',
            'userInformation',
            'addNews',
            function ($location, newsProperties, userInformation, addNews) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {

                    scope.news = { id: -1, title: '', content: '', images: [{ id: 1, image: '/Assets/images/etc/img2.jpg', page_id: 1, width: 300, height: 300 }], videos: [] };
                    scope.videoCode = "";
                    scope.newsToModify = {};
                    scope.mode = 1;
                    scope.SwitchMode = function (nMode) {
                        scope.mode = nMode;
                    };
                    scope.AddVideo_OnClicked = function (code) {
                        var video = { id: -1, news_id: -1, title: 'Youtube video player', design: 'youtube-player', type: 'text/html', width: 300, height: 300, source: 'https://www.youtube.com/embed/' + code, thumbnail: 'http://img.youtube.com/vi/' + code + '/default.jpg', frameborder: 0 };
                        scope.news.videos.push(video);
                    };
                    scope.DeleteVideo_OnClicked = function (index) {
                        $scope.news.videos.splice(index, 1);
                    };
                    scope.Post_OnClicked = function () {
                        addNews($scope.news);
                    };

                }
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: '/Assets/js/directives/template2/ui/newsComponents/newsModify/newsModify.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);
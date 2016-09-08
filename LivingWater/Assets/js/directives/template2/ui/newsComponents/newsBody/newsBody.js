'use strict';

/* Create module for navbar directive */
angular.module('directives.newsBody', [])
.directive('newsBody',
           ['$location',
            'newsProperties',
            'userInformation',
            function ($location, newsProperties, userInformation) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.news = newsProperties.news;
                    scope.selectedNews = newsProperties.news[0];
                    scope.displayImage = newsProperties.news[0].images[0].image;
                    scope.title=newsProperties.news[0].title;
                    scope.content = newsProperties.news[0].content;

                    scope.ChangeDisplayNews = function (selected) {
                        scope.displayImage = selected.images[0].image;
                        scope.title = selected.title;
                        scope.content = selected.content;
                        scope.selectedNews = selected;
                    };
                    scope.ShowNewsInformation = function () {
                        userInformation.newsToView = scope.selectedNews;
                        userInformation.newsToView.datePublished = 'September 8, 2015';
                        $location.path('/ViewNews');
                    };
                }
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: '/Assets/js/directives/template2/ui/newsComponents/newsBody/newsBody.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);
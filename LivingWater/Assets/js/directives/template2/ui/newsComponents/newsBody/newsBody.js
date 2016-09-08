'use strict';

/* Create module for navbar directive */
angular.module('directives.newsBody', [])
.directive('newsBody',
           ['$location',
            'newsProperties',
            function ($location, newsProperties) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.news = newsProperties.news;
                    scope.displayImage = newsProperties.news[0].images[0].image;
                    scope.title=newsProperties.news[0].title;
                    scope.content = newsProperties.news[0].content;

                    scope.ChangeDisplayNews = function (selected) {
                        scope.displayImage = selected.images[0].image;
                        scope.title = selected.title;
                        scope.content = selected.content;
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
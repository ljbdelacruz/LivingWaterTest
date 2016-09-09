'use strict';

/* Create module for navbar directive */
angular.module('directives.newsPreview', [])
.directive('newsPreview',
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
                    scope.title = newsProperties.news[0].title;
                    scope.content = newsProperties.news[0].content;

                    scope.ShowNewsInformationPreview = function (itm) {
                        userInformation.newsToView = itm;
                        userInformation.newsToView.datePublished = 'September 8, 2015';
                        $location.path('/ViewNews');
                    };

                }
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: '/Assets/js/directives/template2/ui/newsComponents/newsPreview/newsPreview.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);
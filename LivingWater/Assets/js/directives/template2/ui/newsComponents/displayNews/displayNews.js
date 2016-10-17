'use strict';

/* Create module for navbar directive */
angular.module('directives.displayNews', [])
.directive('displayNews',
           ['$location',
            'newsProperties',
            'userInformation',
            function ($location, newsProperties, userInformation) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.news=newsProperties.news;
                    scope.newsSelected = newsProperties.news[0];
                    scope.editEnable = false;
                    scope.Edit_OnClicked = function () {
                        scope.editEnable = true;
                    };
                    scope.Save_OnClicked = function () {
                        scope.editEnable = false;
                    };
                }
                return {
                    restrict: 'E',
                    replace: true,
                    scope: {
                        mode:'=',
                    },
                    templateUrl: '/Assets/js/directives/template2/ui/newsComponents/displayNews/displayNews.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);
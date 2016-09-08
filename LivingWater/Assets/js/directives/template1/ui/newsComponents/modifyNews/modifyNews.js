'use strict';

/* Create module for navbar directive */
angular.module('directives.modifyNews', [])

.directive('modifyNews',
           ['$location',
            'userInformation',
            'userListService',
            function ($location, userInformation, userListService) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.title = "";
                    scope.content = "";
                    if (userInformation.process == 2) {
                            scope.news = userListService.news[userInformation.newsToModify_id];
                            scope.title = scope.news.title;
                            scope.content = scope.news.content;
                    } else if (userInformation.process == 3) {
                            scope.title = "";
                            scope.content = "";
                    }
                    scope.OnChange = function () {
                        userListService.news[userInformation.newsToModify_id].title = scope.title;
                        userListService.news[userInformation.newsToModify_id].content = scope.content;
                    };
                }
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/newsComponents/modifyNews/modifyNews.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);
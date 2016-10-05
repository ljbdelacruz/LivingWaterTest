'use strict';

/* Create module for navbar directive */
angular.module('directives.displayVideo2', [])

.directive('displayVideo2',
           ['$location',
            'userInformation',
            'userListService',
            function ($location, userInformation, userListService) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.enableRemove = false;
                    scope.checkMode = function () {
                        switch (+scope.mode) {
                            case 1:
                                scope.enableRemove = true;
                                break;
                        }
                    };
                    scope.checkMode();
                    scope.remove = function (index) {
                        userListService.news[userInformation.newsToModify_id].videos.splice(index, 1);
                        scope.videos = userListService.news[userInformation.newsToModify_id].videos;
                    };
                }
                return {
                    restrict: 'EAC',
                    scope: {
                        videos: '=',
                        mode:'='
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template2/ui/displayVideo2/displayVideo2.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);
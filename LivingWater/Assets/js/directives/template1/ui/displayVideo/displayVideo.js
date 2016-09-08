'use strict';

/* Create module for navbar directive */
angular.module('directives.displayVideo', [])

.directive('displayVideo',
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
                    scope.checkIfEdit = function () {
                        if (userInformation.newsToModify_id != -1) {
                            scope.enableRemove = true;
                        }
                    };
                    scope.checkIfEdit();


                    scope.remove = function (index) {
                        userListService.news[userInformation.newsToModify_id].videos.splice(index, 1);
                        scope.videos = userListService.news[userInformation.newsToModify_id].videos;
                    };
                }
                return {
                    restrict: 'EAC',
                    scope: {
                        videos:'='
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/displayVideo/displayVideo.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);
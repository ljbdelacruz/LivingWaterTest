'use strict';

/* Create module for navbar directive */
angular.module('directives.displayImage', [])

.directive('displayImage',
           ['$location',
            'userListService',
            'userInformation',
            function ($location, userListService, userInformation) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.displayImage = scope.images[0].image;
                    scope.clickImageToDisplay = function (img) {
                        scope.displayImage = img;
                    };

                    scope.checkIfEdit = function () {
                        if (userInformation.newsToModify_id != -1) {
                            scope.enableRemove = true;
                        }
                    };
                    scope.checkIfEdit();
                    scope.remove = function (index) {
                        userListService.news[userInformation.newsToModify_id].images.splice(index, 1);
                        scope.images = userListService.news[userInformation.newsToModify_id].images;
                    };
                }
                return {
                    restrict: 'EAC',
                    scope: {
                        images: '=',
                        enableRemove: '=',
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/displayImage/displayImage.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);
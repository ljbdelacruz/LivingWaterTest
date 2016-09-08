'use strict';

/* Create module for navbar directive */
angular.module('directives.carouselImage', [])
.directive('carouselImage',
           ['$location',
            'userInformation',
            function ($location, userInformation){
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {

                }
                return {
                    restrict: 'E',
                    replace: true,
                    scope: {
                        slides: "=",
                        slideInterval: "=",
                        isShowButton: "=",
                    },
                    templateUrl: '/Assets/js/directives/template1/ui/carouselImage/carouselImage.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
}]);
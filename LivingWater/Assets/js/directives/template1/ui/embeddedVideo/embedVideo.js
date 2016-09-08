'use strict';

/* Create module for navbar directive */
angular.module('directives.embedVideo', [])

.directive('embedVideo',
           ['$location',
            'userInformation',
            '$sce',
            function ($location, userInformation, $sce) {
                function preFn(scope, element, attr) {
                }
                function postFn(scope, element, attr) {
                    scope.trustSrc = function (src) {
                        return $sce.trustAsResourceUrl(src);
                    }
                }
                return {
                    restrict: 'E',
                    replace: true,
                    scope: {
                        video:'=',
                    },
                    templateUrl: '/Assets/js/directives/template1/ui/embeddedVideo/embedVideo.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };


            }]);
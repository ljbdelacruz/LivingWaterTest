'use strict';

/* Create module for navbar directive */
angular.module('directives.navigationBar', [])

/**
 * navigationBar directive
 */
.directive('navigationBar',
           ['$location',
            function ($location, processChecker, routeChecker) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.goto = function (path) {
                        $location.path(path);
                    };
                }
                return {
                    restrict: 'E',
                    scope: {
                        items: "="
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template2/ui/navigationBar/navigationBar.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);
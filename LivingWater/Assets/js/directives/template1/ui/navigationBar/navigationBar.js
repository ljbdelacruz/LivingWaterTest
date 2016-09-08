'use strict';

/* Create module for navbar directive */
angular.module('directives.navigationBar', [])

/**
 * navigationBar directive
 */
.directive('navigationBar',
           ['$location',
            'processChecker',
            function ($location, processChecker) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.goto = function () {
                        //this one changes the path/url
                        processChecker(this.item.path);
                        $location.path(this.item.path);
                    };
                }
                return {
                    restrict: 'E',
                    scope: {
                        items: "="
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/navigationBar/navigationBar.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);
'use strict';

/* Create module for navbar directive */
angular.module('directives.adminNavBar', [])

/**
 * navigationBar directive
 */
.directive('adminNavBar',
           ['$location',
            '$anchorScroll',
            function ($location, $anchoScroll) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.goto = function (path) {
                        //this one changes the path/url 
                        var newHash = path;
                        if ($location.hash() !== newHash) {
                            $location.hash(path);
                        } else {
                            $anchoScroll();
                        }
                    };
                }
                return {
                    restrict: 'E',
                    scope: {
                        items: "="
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/adminNavBar/adminNavBar.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);
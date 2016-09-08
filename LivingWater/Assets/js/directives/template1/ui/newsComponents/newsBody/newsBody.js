'use strict';

/* Create module for navbar directive */
angular.module('directives.newsBody', [])

/**
 * navigationBar directive
 */
.directive('newsBody',
           ['$location',
            function ($location) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                    scope.man = "lj";
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {

                    scope.goto = function () {
                        //this one changes the path/url
                        $location.path(this.item.path);
                    };
                    scope.login = function () {

                    }
                }
                return {
                    restrict: 'E',
                    scope: {
                        data: '=',
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/newsComponents/newsBody/newsBody.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);
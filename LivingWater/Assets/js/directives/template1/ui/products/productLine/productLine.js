'use strict';

/* Create module for navbar directive */
angular.module('directives.productLine', [])
.directive('productLine',
           ['$location',
            'userListService',
            function ($location, userListService) {
                function preFn(scope, element, attr) {

                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.nMode = scope.mode;
                }
                return {
                    restrict: 'E',
                    scope: {
                        items: '=',
                        genre: '=',
                        mode: '=',
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/products/productLine/productLine.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };
            }]);
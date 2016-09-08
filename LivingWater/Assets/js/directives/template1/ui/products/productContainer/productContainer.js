'use strict';

/* Create module for navbar directive */
angular.module('directives.productContainer', [])

.directive('productContainer',
           ['$location',
            'userInformation',
            function ($location, userInformation) {
                function preFn(scope, element, attr) {

                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.nEnableBuying = scope.enableBuying;
                    scope.nMode = scope.mode;
                }
                return {
                    restrict: 'E',
                    scope: {
                        products: '=',
                        mode: '=',
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/products/productContainer/productContainer.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);
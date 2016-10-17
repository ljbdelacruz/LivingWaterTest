'use strict';

/* Create module for navbar directive */
angular.module('directives.orderBody', [])
.directive('orderBody',
           ['$location',
            'productService',
            'routeChecker',
            'deleteProductItems',
            function ($location, productService, routeChecker, deleteProductItems) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    
                }
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: '/Assets/js/directives/template2/ui/orderComponents/orderBody/orderBody.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);
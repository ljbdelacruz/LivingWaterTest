'use strict';

/* Create module for navbar directive */
angular.module('directives.productBody', [])
.directive('productBody',
           ['$location',
            'productService',
            function ($location, productService) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.enableDeleteMode = productService.isEnableDeleteProduct;
                    scope.enableEditMode = productService.isEnableEditProduct;
                    scope.enablePurchase = productService.isenableAddingToCart;
                    scope.nMode = scope.mode;
                }
                return {
                    restrict: 'E',
                    replace: true,
                    scope: {
                        items: '=',
                        mode:'=',
                    },
                    templateUrl: '/Assets/js/directives/template2/ui/products/productBody/productBody.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);
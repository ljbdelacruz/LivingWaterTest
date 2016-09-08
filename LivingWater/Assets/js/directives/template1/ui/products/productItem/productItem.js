'use strict';

/* Create module for navbar directive */
angular.module('directives.productItem', [])
.directive('productItem',
           ['$location',
            'userListService',
            'productService',
            'modifyCart',
            function ($location, userListService, productService, modifyCart) {
                function preFn(scope, element, attr) {
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.showAddCart = false;
                    scope.CheckMode = function () {
                        scope.productQuantity = 1;
                        if (scope.mode == "1" && productService.isenableAddingToCart) {
                            scope.showAddCart = true;
                        }
                    };
                    scope.CheckMode();
                    scope.AddToCart = function () {
                        modifyCart(scope.item, scope.id, scope.productQuantity, 1);
                        //sets back into default value
                        scope.productQuantity = 1;
                    };
                }
                return {
                    restrict: 'E',
                    scope: {
                        item: '=',
                        id: '=',
                        mode: '=',
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/products/productItem/productItem.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };
            }]);
'use strict';

/* Create module for navbar directive */
angular.module('directives.productBody', [])
.directive('productBody',
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
                    productService.subItems = [];
                    scope.enableDeleteMode = productService.isEnableDeleteProduct;
                    scope.enableEditMode = productService.isEnableEditProduct;
                    scope.enablePurchase = productService.isenableAddingToCart;
                    scope.nMode = scope.mode;
                    scope.LearnMore_OnClicked = function (itm) {
                        alert(itm.item);
                        productService.productSelected = itm;
                        routeChecker('/ViewProducts');
                    };
                    scope.Edit_OnClicked = function (itm) {
                        productService.productSelected = itm;
                        routeChecker('/ViewProducts');
                    };
                    scope.isselect = false;
                    scope.selectedItem = function (col) {
                        if (!col.isselected) {
                            productService.subItems.push(col);
                        } else {
                            var temp = [];
                            for (var i = 0; i < productService.subItems.length; i++) {
                                if (productService.subItems[i].id != col.id) {
                                    temp.push(productService.subItems[i]);
                                }
                            }
                            productService.subItems = temp;
                        }
                    };
                    scope.delete_OnClicked = function () {
                        var temp = [];
                        for (var i = 0; i < productService.subItems.length; i++) {
                            temp.push({id:productService.subItems[i].id});
                        }
                        deleteProductItems(temp, scope.successDeleteMessage);
                    };
                    scope.successDeleteMessage = function () {
                        alert("Success");
                    };
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
'use strict';

/* Create module for navbar directive */
angular.module('directives.productViewFilter', [])
.directive('productViewFilter',
           ['$location',
            'productService',
             'filterProductAll',
             'filterBySlots',
             'filterByGenre',
             'userInformation',
             'userListService',
             'routeChecker',
            function ($location, productService, filterProductAll, filterBySlots, filterByGenre, userInformation, userListService, routeChecker) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.filters = productService.productGenre;
                    scope.selectedFilter = 0;
                    scope.items = productService.items;
                    scope.cart = userListService.cart;
                    scope.showProd = true;
                    scope.showCart = false;
                    scope.isEnablePurchase = productService.isenableAddingToCart;
                    scope.SwitchMode = function (action) {
                        if (action == 'product') {
                            scope.showProd = true;
                            scope.showCart = false;
                        } else {
                            scope.showProd = false;
                            scope.showCart = true;
                        }
                    }

                    scope.ChangeFilter = function () {
                        switch (+scope.selectedFilter) {
                            case 0:
                                filterProductAll();
                                filterBySlots(4);
                                scope.items = productService.productSlots;
                                break;
                            default:
                                filterByGenre(scope.selectedFilter);
                                filterBySlots(4);
                                scope.items = productService.productSlots;
                                break;
                        }
                    };
                    scope.ChangeFilter(1);
                    scope.isShowToolBar = userInformation.isadmin;
                    scope.ToolBar = function () {
                        scope.isShowToolBar = userInformation.isadmin;
                    };
                    productService.updateToolBarView = scope.isShowToolBar;
                    scope.nMode = 1;
                    scope.ChangeMode = function () {
                        if (scope.mode != 0) {
                            scope.nMode = scope.mode;
                        }
                    };
                }
                return {
                    restrict: 'E',
                    replace: true,
                    scope: {
                        mode:'=',
                    },
                    templateUrl: '/Assets/js/directives/template2/ui/products/productViewFilter/productViewFilter.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);
'use strict';

/* Create module for navbar directive */
angular.module('directives.productItem', [])
.directive('productItem',
           ['$location',
            'productService',
            'filterByGenre',
            function ($location, productService, filterByGenre) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.items = [];
                    scope.FilterProductItem = function () {
                        switch (+scope.genre) {
                            case 0:
                                break;
                            default:
                                filterByGenre($scope.selectedFilter);
                                scope.items = productService.items;
                                break;
                        }
                    };
                }
                return {
                    restrict: 'E',
                    replace: true,
                    scope: {
                        genre:'=',
                    },
                    templateUrl: '/Assets/js/directives/template2/ui/products/productItem/productItem.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);
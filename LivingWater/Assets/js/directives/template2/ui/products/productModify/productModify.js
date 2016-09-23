'use strict';

/* Create module for navbar directive */
angular.module('directives.productModify', [])
.directive('productModify',
           ['$location',
            'productService',
            'addProduct',
            function ($location, productService, addProduct) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.isEditEnable = false;
                    scope.isAddingEnable = false;
                    scope.isDeleteEnable = false;

                    scope.ChangeModes = function (mode) {
                        switch(+mode){
                            case 1:
                                productService.isEnableDeleteProduct = true;
                                productService.isEnableEditProduct = false;
                                scope.isAddingEnable = true;
                                scope.isDeleteEnable = false;
                                scope.isEditEnable = false;
                                break;
                            case 2:
                                productService.adminProductMode = 1;
                                productService.isEnableEditProduct = true;
                                productService.isEnableDeleteProduct = false;
                                scope.isAddingEnable = false;
                                scope.isDeleteEnable = true;
                                scope.isEditEnable = false;
                                break;
                            case 3:
                                productService.adminProductMode = 2;
                                scope.isAddingEnable = false;
                                scope.isDeleteEnable = false;
                                scope.isEditEnable = true;
                                break;
                            default:
                                break;
                        }
                        scope.genreSelected = 1;
                        scope.enableNewGenre = false;
                        scope.newGenre="";
                        scope.CheckGenreSelected = function (genre) {
                            switch (+genre) {
                                case -1:
                                    scope.enableNewGenre = true;
                                    break;
                                default:
                                    scope.enableNewGenre=false;
                                    break;
                            }
                        };
                    };
                    scope.ChangeModes(1);
                    scope.AddNewProduct = function () {
                        
                    };
                    scope.AddNewProductGenre = function () {
                        addProduct({ id: -2, genre: scope.newGenre, items: [] }, scope.SuccessAddingNewGenre);
                    };
                    scope.SuccessAddingNewGenre = function () {
                        //do a reload in products here
                    };

                }
                return {
                    restrict: 'E',
                    replace: true,
                    scope:{mode:'='},
                    templateUrl: '/Assets/js/directives/template2/ui/products/productModify/productModify.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);
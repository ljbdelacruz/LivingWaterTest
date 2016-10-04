angular.module('modules.ViewProducts')
.controller('viewProductsCtrl',
            ['$scope',
             'productService',
             'updateProduct',
             'routeChecker',
             function ($scope, productService, updateProduct, routeChecker) {
                 $scope.productTypes = productService.products;
                 $scope.productEdit = productService.productSelected;
                 $scope.viewProduct = false;
                 $scope.editProduct = true;
                 $scope.saveChanges_OnClicked = function () {
                     updateProduct($scope.productEdit, $scope.finishedUpdate);
                 };
                 $scope.finishedUpdate = function () {
                     alert("Success");
                 };

             }
            ]);
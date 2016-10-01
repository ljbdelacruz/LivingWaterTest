angular.module('modules.ViewProducts')
.controller('viewProductsCtrl',
            ['$scope',
             'productService',
             'routeChecker',
             function ($scope, productService,routeChecker) {
                 routeChecker('/ViewProducts');
                 $scope.products = productService.productSelected.item;
                 $scope.img = productService.productSelected.source;
                 $scope.content = productService.productSelected.content;
             }
            ]);
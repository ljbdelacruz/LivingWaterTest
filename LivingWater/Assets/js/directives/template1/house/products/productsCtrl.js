angular.module('modules.Products')
.controller('productsCtrl',
            ['$scope',
             'userListService',
             'routeChecker',
             'productService',
             'filterProductAll',
             'filterBySlots',
             'filterByGenre',
             function ($scope, userListService, routeChecker, productService, filterProductAll, filterBySlots, filterByGenre) {
                 routeChecker('/Products');
                 $scope.filters = [];
                 $scope.GetProductGenre = function () {
                     $scope.filters = [{id:1, name:'All'}];
                     temp = {};
                     for (var i = 0; i < productService.products.length; i++) {
                         temp = { id: productService.products[i].id, name: productService.products[i].genre };
                         temp.id += 1;
                         $scope.filters.push(temp);
                     }
                 };
                 $scope.GetProductGenre();
                 $scope.selectedFilter = 1;

                 //get data from userListService the products
                 $scope.items = productService.items;
                 $scope.cart = userListService.cart;
                 //this is for disabling and enabling 
                 $scope.showProd = true;
                 $scope.showCart = false;
                 $scope.isEnablePurchase = productService.isenableAddingToCart;
                 $scope.SwitchMode = function (action) {
                     if (action == 'product') {
                         $scope.showProd = true;
                         $scope.showCart = false;
                     } else {
                         $scope.showProd = false;
                         $scope.showCart = true;
                     }
                 }

                 $scope.ChangeFilter = function(index) {
                     switch(+$scope.selectedFilter){
                         case 1:
                             filterProductAll();
                             filterBySlots(4);
                             $scope.items = productService.productSlots;
                             break;
                         default:
                             filterByGenre($scope.selectedFilter);
                             filterBySlots(4);
                             $scope.items = productService.productSlots;
                             break;
                     }
                 };
                 $scope.ChangeFilter(1);

             }
            ]
);
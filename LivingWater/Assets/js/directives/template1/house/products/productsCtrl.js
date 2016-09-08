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
                 $scope.filters = [{ id: 1, name: 'All' }, { id: 2, name: 'Accessory' }, {id: 3, name: 'Products'} ];
                 $scope.selectedFilter = 1;

                 //get data from userListService the products
                 $scope.items = userListService.items;
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
                             $scope.items = userListService.productSlots;
                             break;
                         case 2:
                             filterByGenre($scope.selectedFilter);
                             filterBySlots(4);
                             $scope.items = userListService.productSlots;
                             break;
                         case 3:
                             filterByGenre($scope.selectedFilter);
                             filterBySlots(4);
                             $scope.items = userListService.productSlots;
                             break;
                         default:
                             alert("Default");
                             break;
                     }
                 };
                 $scope.ChangeFilter(1);

             }
            ]
);
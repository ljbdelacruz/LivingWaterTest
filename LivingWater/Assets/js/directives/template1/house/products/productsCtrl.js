angular.module('modules.Products')
.controller('productsCtrl',
            ['$scope',
             'routeChecker',
             function ($scope, routeChecker) {
                 routeChecker('/Products');
             }
            ]);
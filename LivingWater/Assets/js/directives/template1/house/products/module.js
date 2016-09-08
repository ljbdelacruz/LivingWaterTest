angular.module('modules.Products', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/Products', {
                 templateUrl: '/Assets/js/directives/template1/house/products/products.html',
                 controller: 'productsCtrl'
             });
         }
]);




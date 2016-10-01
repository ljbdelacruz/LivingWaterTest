angular.module('modules.ViewProducts', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/ViewProducts', {
                 templateUrl: '/Assets/js/directives/template1/house/viewProducts/viewProducts.html',
                 controller: 'viewProductsCtrl'
             });
         }
]);




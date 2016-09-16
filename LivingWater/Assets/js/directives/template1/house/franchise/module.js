angular.module('modules.Franchise', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/Franchise', {
                 templateUrl: '/Assets/js/directives/template1/house/franchise/Franchise.html',
                 controller: 'franchiseCtrl'
             });
         }
]);




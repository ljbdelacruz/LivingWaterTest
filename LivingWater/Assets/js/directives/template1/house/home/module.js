angular.module('modules.Home', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/Home', {
                 templateUrl: '/Assets/js/directives/template1/house/home/Home.html',
                 controller: 'HomeCtrl'
             });
         }
]);




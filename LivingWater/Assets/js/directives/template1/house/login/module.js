angular.module('modules.Login', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/Login', {
                 templateUrl: '/Assets/js/directives/template1/house/login/Login.html',
                 controller: 'LoginCtrl'
             });
         }
]);




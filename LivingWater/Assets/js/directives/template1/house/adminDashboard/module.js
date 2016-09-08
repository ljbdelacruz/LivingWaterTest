angular.module('modules.AdminDashboard', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/AdminDashboard', {
                 templateUrl: '/Assets/js/directives/template1/house/adminDashboard/adminDashboard.html',
                 controller: 'adminDashboardCtrl'
             });
         }
]);




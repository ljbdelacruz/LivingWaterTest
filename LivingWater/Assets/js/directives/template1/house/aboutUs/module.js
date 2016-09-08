angular.module('modules.AboutUs', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/AboutUs', {
                 templateUrl: '/Assets/js/directives/template1/house/aboutUs/AboutUs.html',
                 controller: 'AboutCtrl'
             });
         }
]);




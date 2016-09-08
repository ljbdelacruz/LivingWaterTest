angular.module('modules.ContactUs', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/ContactUs', {
                 templateUrl: '/Assets/js/directives/template1/house/contactUs/ContactUs.html',
                 controller: 'ContactUsCtrl'
             });
         }
]);




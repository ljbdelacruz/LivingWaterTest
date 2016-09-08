angular.module('modules.ViewNews', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/ViewNews', {
                 templateUrl: '/Assets/js/directives/template1/house/viewNews/viewNews.html',
                 controller: 'viewNewsCtrl'
             });
         }
]);




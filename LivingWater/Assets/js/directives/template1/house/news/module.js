angular.module('modules.News', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/News', {
                 templateUrl: '/Assets/js/directives/template1/house/news/news.html',
                 controller: 'newsCtrl'
             });
         }
]);




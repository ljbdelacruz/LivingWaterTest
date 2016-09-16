angular.module('modules.Inbox', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/Inbox', {
                 templateUrl: '/Assets/js/directives/template1/house/inbox/inbox.html',
                 controller: 'inboxCtrl'
             });
         }
]);




angular.module('modules.Transaction', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/Transaction', {
                 templateUrl: '/Assets/js/directives/template1/house/transaction/transaction.html',
                 controller: 'transactionCtrl'
             });
         }
]);




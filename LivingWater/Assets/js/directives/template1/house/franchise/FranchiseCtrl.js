angular.module('modules.Franchise')
.controller('franchiseCtrl',
            ['$scope',
             'userInformation',
             '$location',
             'sharedService',
             'userListService',
             'routeChecker',
             function ($scope, userInformation, $location, sharedService, userListService, routeChecker) {
                 routeChecker('/Franchise');

             }
            ]
);
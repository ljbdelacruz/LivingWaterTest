angular.module('modules.Inbox')
.controller('inboxCtrl',
            ['$scope',
             'userInformation',
             'routeChecker',
             function ($scope, userInformation, routeChecker) {
                 routeChecker('/Inbox');
                 $scope.isAdmin = userInformation.isadmin;
             }
            ]
);
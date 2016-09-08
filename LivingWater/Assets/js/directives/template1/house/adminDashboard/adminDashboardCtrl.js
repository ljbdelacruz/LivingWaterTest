angular.module('modules.AdminDashboard')
.controller('adminDashboardCtrl',
            ['$scope',
             'userInformation',
             '$location',
             'Globalization',
             'userListService',
             'globalizationByLanguage',
             'routeChecker',
             function ($scope, userInformation, $location, Globalization, userListService, globalizationByLanguage, routeChecker) {
                 //this checks if allow access to this house
                 routeChecker('/AdminDashboard');
                 $scope.navItems=[];
                 $scope.filterAdminNavBar = function () {
                     globalizationByLanguage(userInformation.language_id, $scope.assignMainNav);
                 };
                 $scope.assignMainNav = function () {
                     $scope.navItems = Globalization.adminNavBarItems;
                 };
                 $scope.inbox = userListService.inbox;
                 $scope.concernData = userListService.concerns;
                 //this here is used in toggling data
                 $scope.inboxShow = true;
                 $scope.newsShow = true;
                 $scope.concernShow = true;
                 $scope.toggleInbox = function () {
                     if ($scope.inboxShow == true) {
                         $scope.inboxShow = false;
                     } else {
                         $scope.inboxShow = true;
                     }
                 };
                 $scope.toggleNews = function () {
                     if ($scope.newsShow == true) {
                         $scope.newsShow = false;
                     } else {
                         $scope.newsShow = true;
                     }
                 };
                 $scope.toggleConcerns = function () {
                     if ($scope.concernShow == true) {
                         $scope.concernShow = false;
                     } else {
                         $scope.concernShow = true;
                     }
                 };



              }
            ]
);
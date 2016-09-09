'use strict';


//use the 
angular.module('ngStarterKit')
.controller('AppCtrl',
            ['$scope',
             'loadData',
             'sharedService',
             'Globalization',
             'userInformation',
             'loadSlideImage',
             'loadNews',
             'globalizationByLanguage',
             'siteSettings',
             function ($scope, loadData, sharedService, Globalization, userInformation, loadSlideImage, loadNews, globalizationByLanguage, siteSettings) {
                 $scope.width = window.innerWidth;
                 siteSettings.width = $scope.width;

                 $scope.navItems = [];
                 //this one loades the verification code from database
                 $scope.loadVerificationCodes = function () {
                     loadData(2);
                 };
                 //this one will load the slides images from database
                 $scope.loadSlideImages = function () {
                     loadSlideImage();
                 };
                 $scope.loadNews = function () {
                     loadNews();
                 };

                 //filter the items that will be in the navigation bar
                 $scope.filterNavItems = function () {
                     globalizationByLanguage(userInformation.language_id, $scope.assignMainNav);
                 };
                 $scope.assignMainNav = function () {
                     $scope.navItems = Globalization.globalizationTranslationMainNav;
                 };

                 $scope.click = function () {
                     alert($scope.shared.isAdmin);
                 }
                 $scope.updateDashboard = function () {
                     
                 };

}]);


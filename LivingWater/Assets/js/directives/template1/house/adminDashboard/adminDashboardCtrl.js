angular.module('modules.AdminDashboard')
.controller('adminDashboardCtrl',
            ['$scope',
             'userInformation',
             'routeChecker',
             'adminDashboardProperties',
             'productService',
             'addNews',
             function ($scope, userInformation, routeChecker, adminDashboardProperties, productService, addNews) {
                 //this checks if allow access to this house
                 routeChecker('/AdminDashboard');
                 $scope.isEnableProductModify = false;
                 $scope.isEnableNewsModify = false;
                 $scope.isEnableSettingsModify = false;
                 $scope.isEnableOrderModify = false;

                 $scope.Update = function () {
                     $scope.isEnableProductModify = adminDashboardProperties.isModifyProductsEnable;
                     $scope.isEnableNewsModify = adminDashboardProperties.isAddingNewsEnable;
                     $scope.isEnableSettingsModify = adminDashboardProperties.isModifySettingsEnable;
                     $scope.isEnableOrderModify = adminDashboardProperties.isModifyOrderEnable;
                 };
                 adminDashboardProperties.update = $scope.Update;
                 adminDashboardProperties.update();
              }
            ]
);
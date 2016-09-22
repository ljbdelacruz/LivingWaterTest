angular.module('modules.AdminDashboard')
.controller('adminDashboardCtrl',
            ['$scope',
             'userInformation',
             'routeChecker',
             'adminDashboardProperties',
             'productService',
             function ($scope, userInformation, routeChecker, adminDashboardProperties, productService) {
                 //this checks if allow access to this house
                 routeChecker('/AdminDashboard');
                 $scope.isEnableProductModify = false;
                 $scope.isEnableNewsModify = false;
                 $scope.isEnableSettingsModify = false;
                 $scope.Update = function () {
                     $scope.isEnableProductModify = adminDashboardProperties.isModifyProductsEnable;
                     $scope.isEnableNewsModify = adminDashboardProperties.isAddingNewsEnable;
                     $scope.isEnableSettingsModify = adminDashboardProperties.isModifySettingsEnable;

                 };
                 adminDashboardProperties.update = $scope.Update;
                 adminDashboardProperties.update();

              }
            ]
);
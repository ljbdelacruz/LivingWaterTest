angular.module('modules.AdminDashboard')
.controller('adminDashboardCtrl',
            ['$scope',
             'userInformation',
             'routeChecker',
             'adminDashboardProperties',
             function ($scope, userInformation, routeChecker, adminDashboardProperties) {
                 //this checks if allow access to this house
                 routeChecker('/AdminDashboard');
                 $scope.isEnableProductModify = adminDashboardProperties.isModifyProductsEnable;
                 $scope.isEnableNewsModify = adminDashboardProperties.isAddingNewsEnable;
                 $scope.Update = function () {
                     $scope.isEnableProductModify = adminDashboardProperties.isModifyProductsEnable;
                     $scope.isEnableNewsModify = adminDashboardProperties.isAddingNewsEnable;
                 };
                 adminDashboardProperties.update = $scope.Update;
                 adminDashboardProperties.update();
              }
            ]
);
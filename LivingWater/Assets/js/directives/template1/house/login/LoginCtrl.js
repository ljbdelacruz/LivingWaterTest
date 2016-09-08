angular.module('modules.Login')
.controller('LoginCtrl',
            ['$scope',
             'userInformation',
             function ($scope, userInformation) {
                 userInformation.islogin = false;
                 userInformation.isadmin = false;
                 userInformation.language_id = 1;

                 $scope.isRegister = false;
                 $scope.showRegistrationForm = function () {
                     $scope.isRegister = true;
                 };
                 $scope.collapseRegistrationForm = function () {
                     $scope.isRegister = false;
                 };
             }
]);
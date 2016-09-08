angular.module('modules.Home')
.controller('HomeCtrl',
            ['$scope',
             'userInformation',
             '$location',
             'sharedService',
             'userListService',
             'routeChecker',
             function ($scope, userInformation, $location, sharedService, userListService, routeChecker) {
                 routeChecker('/Home');
                 $scope.videos = userListService.news[0].videos;
                 $scope.imageInCarousel = userListService.slideImage;
                 $scope.interval = sharedService.slideInterval;

                 $scope.imageClicked = function () {
                     alert("HELOO");
                 };
             }
            ]
);
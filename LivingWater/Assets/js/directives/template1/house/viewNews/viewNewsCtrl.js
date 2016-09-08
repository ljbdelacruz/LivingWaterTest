angular.module('modules.ViewNews')
.controller('viewNewsCtrl',
            ['$scope',
             'routeChecker',
             'userInformation',
             function ($scope,  routeChecker, userInformation) {
                 routeChecker('/ViewNews');
                 $scope.title = userInformation.newsToView.title;
                 $scope.datePublished = userInformation.newsToView.datePublished;
                 $scope.content = userInformation.newsToView.content;
                 $scope.videos = userInformation.newsToView.videos;
             }
            ]
);
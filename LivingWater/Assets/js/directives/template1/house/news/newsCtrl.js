angular.module('modules.News')
.controller('newsCtrl',
            ['$scope',
             'userListService',
             function ($scope, userListService) {
                 //this is where the content of the page will get its data json
                 $scope.data = userListService.news;
                 //populate the content of the page using json
                 $scope.populateData = function(){
                    
                 };
             }
            ]
);
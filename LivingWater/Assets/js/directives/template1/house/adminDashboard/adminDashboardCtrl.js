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
                 $scope.Update = function () {
                     $scope.isEnableProductModify = adminDashboardProperties.isModifyProductsEnable;
                     $scope.isEnableNewsModify = adminDashboardProperties.isAddingNewsEnable;
                     $scope.isEnableSettingsModify = adminDashboardProperties.isModifySettingsEnable;

                 };
                 adminDashboardProperties.update = $scope.Update;
                 adminDashboardProperties.update();

                 //news properties
                 $scope.isEnableAddNews = false;
                 $scope.isEnableDeleteNews = false;
                 $scope.isEnableEditNews = false;

                 $scope.news = { id: -1, title: '', content: '', images: [{ id: 1, image: '/Assets/images/etc/img2.jpg', page_id: 1, width: 300, height: 300 }], videos: [] };
                 $scope.videoCode = "";
                 $scope.AddVideo_OnClicked = function (code) {
                     var video = { id: -1, news_id: -1, title: 'Youtube video player', design: 'youtube-player', type: 'text/html', width: 300, height: 300, source: 'https://www.youtube.com/embed/'+code, thumbnail: 'http://img.youtube.com/vi/'+code+'/default.jpg', frameborder: 0 };
                     $scope.news.videos.push(video);
                 };
                 $scope.DeleteVideo_OnClicked = function (index) {
                     $scope.news.videos.splice(index, 1);
                 };
                 $scope.Post_OnClicked=function(){
                     addNews($scope.news);
                 };
                 $scope.switchModes = function (mode) {
                     switch (+mode) {
                         case 1:
                             $scope.isEnableAddNews = true;
                             $scope.isEnableDeleteNews = false;
                             $scope.isEnableEditNews = false;
                             break;
                         case 2:
                             $scope.isEnableAddNews = false;
                             $scope.isEnableDeleteNews = true;
                             $scope.isEnableEditNews = false;
                             break;
                         case 3:
                             $scope.isEnableAddNews = false;
                             $scope.isEnableDeleteNews = false;
                             $scope.isEnableEditNews = true;
                             break;
                     }
                 };
                 $scope.switchModes(1);

              }
            ]
);
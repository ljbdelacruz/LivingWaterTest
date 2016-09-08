
angular.module('otherApp')
.factory('loadNews', ['userListService','$http', function (userListService, $http) {
    return function () {
        $http.post('index.aspx/ListOfNews', { data: {} })
                           .success(function (data, status, headers, config) {
                               userListService.news = [];
                               //do a loop here to extract data json and put it into the array of news
                               temp = {};
                               for (var i = 0; i < data['d'].length; i++) {
                                   temp = { id: data['d'][i]['Id'], title: data['d'][i]['title'], content:data['d'][i]['content'], images: [], videos: [], buttons: [] };
                                   for (var c = 0; c < data['d'][i]['images'].length; c++) {
                                       temp.images.push({
                                           image: data['d'][i]['images'][c]['image'],
                                           path: data['d'][i]['images'][c]['path'],
                                           width: data['d'][i]['images'][c]['width'],
                                           height: data['d'][i]['images'][c]['height']
                                       })
                                   }
                                   for (var c = 0; c < data['d'][i]['videos'].length; c++) {
                                       temp.videos.push({
                                           title: data['d'][i]['videos'][c]['title'],
                                           design: data['d'][i]['videos'][c]['design'],
                                           type: data['d'][i]['videos'][c]['type'],
                                           width: data['d'][i]['videos'][c]['width'],
                                           height: data['d'][i]['videos'][c]['height'],
                                           source: data['d'][i]['videos'][c]['source'],
                                           thumbnail: data['d'][i]['videos'][c]['thumbnail'],
                                           frameborder: data['d'][i]['videos'][c]['frameborder'],
                                       })
                                   }
                                   for (var c = 0; c < data['d'][i]['buttons'].length; c++) {
                                       temp.buttons.push({
                                           name: data['d'][i]['buttons'][c]['name'],
                                           link: data['d'][i]['buttons'][c]['link']
                                       })
                                   }
                                   userListService.news.push(temp);
                               }
                           }).error(function (data, status, headers, config) {
                               window.alert("Error " + status);
                           });
    }
}]);
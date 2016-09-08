
angular.module('otherApp')
.factory('loadSlideImage', ['userListService', '$http', function (userListService, $http) {
    return function () {
        $http.post('index.aspx/ListOfSlideImages', { data: {} })
                           .success(function (data, status, headers, config) {
                               userListService.slideImage = [];
                               //do a loop here to extract data json and put it into the array of news
                               for (var i = 0; i < data['d'].length; i++) {
                                   userListService.slideImage.push({
                                       image: data['d'][i]['image'],
                                       path: data['d'][i]['path'],
                                       page_id: data['d'][i]['page_id'],
                                       width: data['d'][i]['width'],
                                       height: data['d'][i]['height'],
                                   });
                               }
                           }).error(function (data, status, headers, config) {
                               window.alert("Error " + status);
                           });
    }
}]);
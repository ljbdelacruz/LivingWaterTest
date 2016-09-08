
angular.module('otherApp')
.factory('loadConcern', ['userListService', '$http', function (userListService, $http) {
    return function () {
        $http.post('index.aspx/ListOfConcern', { data: {} })
                           .success(function (data, status, headers, config) {
                               userListService.concerns = [];
                               //do a loop here to extract data json and put it into the array of news
                               for (var i = 0; i < data['d'].length; i++) {
                                   userListService.concerns.push({
                                       title: data['d'][i]['title'],
                                       subject: data['d'][i]['subject'],
                                       message: data['d'][i]['message'],
                                       username: data['d'][i]['username'],
                                       unread: data['d'][i]['unread'],
                                       resolved: data['d'][i]['resolved']
                                   });
                               }
                           }).error(function (data, status, headers, config) {
                               window.alert("Error " + status);
                           });
    }
}]);
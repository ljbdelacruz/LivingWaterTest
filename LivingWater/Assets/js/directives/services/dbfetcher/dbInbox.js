
angular.module('otherApp')
.factory('loadInbox', ['userListService', '$http', function (userListService, $http) {
    return function () {
        $http.post('index.aspx/ListOfInbox', { data: {} })
                           .success(function (data, status, headers, config) {
                               userListService.inbox = [];
                               //do a loop here to extract data json and put it into the array of news
                               for (var i = 0; i < data['d'].length; i++) {
                                   userListService.inbox.push({
                                       user: data['d'][i]['user'],
                                       subject: data['d'][i]['subject'],
                                       body: data['d'][i]['body'],
                                       unread: data['d'][i]['unread'],
                                       receiver: data['d'][i]['receiver'],
                                       receiver_id: data['d'][i]['receiver_id']
                                   });
                               }
                           }).error(function (data, status, headers, config) {
                               window.alert("Error " + status);
                           });
    }
}]);

angular.module('otherApp')
.factory('dbInbox', ['inboxProperties', '$http', function (inboxProperties, $http) {
    return function (user_id) {
        inboxProperties.inbox = [];
        var parameters = {
            "user_id": user_id
        }
        $http.post('index.aspx/ListOfInbox', angular.toJson(parameters))
                           .success(function (data, status, headers, config) {
                               var inbox = [];
                               //do a loop here to extract data json and put it into the array of news
                               for (var i = 0; i < data['d'].length; i++) {
                                   var temp={
                                       id: data['d'][i]['id'],
                                       sender_id:data['d'][i]['sender_id'],
                                       sender_username:data['d'][i]['sender_username'],
                                       receiver_id: data['d'][i]['receiver_id'],
                                       subject: data['d'][i]['subject'],
                                       isSelected:false,
                                   };
                                   temp.InboxContent=[];
                                   for (var c = 0; c < data['d'][i]['InboxContent'].length; c++) {
                                       temp.InboxContent.push({
                                           id: data['d'][i]['InboxContent'][c]['id'],
                                           message: data['d'][i]['InboxContent'][c]['message'],
                                           unread: data['d'][i]['InboxContent'][c]['unread'],
                                           inbox_id: data['d'][i]['InboxContent'][c]['inbox_id'],
                                           dateCreated:data['d'][i]['InboxContent'][c]['dateCreated']
                                       });
                                   }
                                   inboxProperties.inbox.push(temp);
                               }
                           }).error(function (data, status, headers, config) {
                               window.alert("Error " + status);
                           });
    }
}]);
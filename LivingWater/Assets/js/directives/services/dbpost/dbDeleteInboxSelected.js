angular.module('otherApp')
.factory('deleteInboxSelected', ['inboxProperties', '$http', 'loadData', function (inboxProperties, $http, loadData) {
    return function (data, callBackFunction){
        var parameters = {
            "data": angular.toJson(data),
        }
        $http.post('index.aspx/AddNew', angular.toJson(parameters))
        .success(function (data) {

            callBackFunction();
        }).error(function (data) {

        });
    }
}]);
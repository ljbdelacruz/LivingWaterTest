angular.module('otherApp')
.factory('deleteInboxSelected', ['inboxProperties', '$http', 'loadData', function (inboxProperties, $http, loadData) {
    return function (data, callBackFunction) {
        var temp = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].isSelected == true) {
                temp.push(data[i]);
            }
        }
        var parameters = {
            "data": angular.toJson(temp),
            "process":3,
        }
        $http.post('index.aspx/DeleteItem', angular.toJson(parameters))
        .success(function (data) {
            callBackFunction();
        }).error(function (data) {

        });
    }
}]);
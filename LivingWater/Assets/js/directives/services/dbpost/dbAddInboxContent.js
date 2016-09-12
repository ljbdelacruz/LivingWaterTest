angular.module('otherApp')
.factory('addInboxContent', ['$http', function ($http) {
    return function (data, callBackFunction) {
        var parameters = {
            "data": angular.toJson(data),
            "process": 3,
        }
        $http.post('index.aspx/AddNew', angular.toJson(parameters))
        .success(function (data) {
            callBackFunction();
        }).error(function (data) {

        });
    }
}]);
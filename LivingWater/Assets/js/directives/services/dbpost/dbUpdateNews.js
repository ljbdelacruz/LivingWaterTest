angular.module('otherApp')
.factory('updateNews', ['$http', function ($http) {
    return function (data, callBackFunction) {
        var parameters = {
            "data": angular.toJson(data),
            "process": 2
        }
        $http.post('index.aspx/UpdateData', angular.toJson(parameters))
        .success(function (data) {
            callBackFunction();
        }).error(function (data) {
            alert("Failed");
        });
    }
}]);
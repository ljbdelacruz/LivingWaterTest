angular.module('otherApp')
.factory('addProduct', ['$http', function ($http) {
    return function (data, callBackFunction) {
        var parameters = {
            "data": angular.toJson(data),
            "process": 4,
        }
        $http.post('index.aspx/AddNew', angular.toJson(parameters))
        .success(function (data) {
            callBackFunction();
        }).error(function (data) {

        });
    }
}]);
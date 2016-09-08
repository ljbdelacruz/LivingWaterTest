
angular.module('otherApp')
.factory('submitConcern', ['userListService', '$http', function (userListService, $http) {
    return function (data, callBackFunction) {
        var parameters = {
            "data": angular.toJson(data),
            "process": 4, //process 3 is for saving new concern
        }
        $http.post('index.aspx/AddNew', angular.toJson(parameters))
        .success(function (data) {
            alert("Success");
            callBackFunction();
        }).error(function (data) {

        });
    }
}]);
angular.module('otherApp')
.factory('deleteProductItems', ['$http', 'loadData', function ( $http, loadData) {
    return function (data, callBackFunction) {
        var parameters = {
            "data": angular.toJson(data),
            "process": 1,
        }
        $http.post('index.aspx/DeleteItem', angular.toJson(parameters))
        .success(function (data) {
            callBackFunction();
        }).error(function (data) {

        });
    }
}]);

angular.module('otherApp')
.factory('submitLogin', ['$http','userInformation', function ($http, userInformation) {
    return function (data, callbackResponse) {
        var parameters = {
            data: angular.toJson(data)
        }
        $http.post('index.aspx/CheckUserExistence', angular.toJson(parameters))
        .success(function (data) {
            var result = angular.fromJson(data.d);
            if (result != null) {
                userInformation.username = result.username;
                userInformation.language_id = result.language_id;
                userInformation.isadmin = result.isadmin;
                userInformation.islogin = true;
            }
            callbackResponse();
        }).error(function (data) {
            alert("Error in executing submitLogin service");
        });
    }
}]);
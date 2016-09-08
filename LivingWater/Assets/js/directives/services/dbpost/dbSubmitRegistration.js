
angular.module('otherApp')
.factory('submitRegistration', ['userInformation', '$http', function (userInformation, $http) {
    return function (data, callBackFunction) {
        var parameters = {
            "data": angular.toJson(data),
            "process":1, //process 3 is for saving new registration
        }
        $http.post('index.aspx/AddNew', angular.toJson(parameters))
        .success(function (data) {
            if (data.d == true) {
                callBackFunction();
            } else {
                alert("Problems Registering Please Check The Fields");
            }
        }).error(function (data) {
            alert("Error When Trying to Register Connection Might Have Been Broken in the Process");
        });
    }
}]);
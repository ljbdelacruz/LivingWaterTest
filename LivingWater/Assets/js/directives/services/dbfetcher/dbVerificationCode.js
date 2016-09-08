
angular.module('otherApp')
.factory('loadVerificationCodes', ['userListService', '$http', function (userListService, $http) {
    return function () {
        $http.post('index.aspx/ListOfVerificationCodes', { data: {} })
                           .success(function (data, status, headers, config) {
                               userListService.verification = [];
                               //do a loop here to extract data json and put it into the array of news
                               for (var i = 0; i < data['d'].length; i++) {
                                   userListService.verification.push({ source: data['d'][i]['source'], answer: data['d'][i]['answer'] });
                               }
                           }).error(function (data, status, headers, config) {
                               window.alert("Error Retrieving Verification Code" + status);
                           });
    }
}]);
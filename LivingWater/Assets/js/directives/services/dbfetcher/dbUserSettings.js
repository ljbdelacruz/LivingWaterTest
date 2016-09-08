
angular.module('otherApp')
.factory('loadVerificationCodes', ['userInformation', '$http', function (userInformation, $http) {
    return function () {
        $http.post('index.aspx/ListOfVerificationCodes', { data: {} })
                           .success(function (data, status, headers, config) {
                               //do a loop here to extract data json and put it into the array of news
                               userInformation.username = data['d']['username'];
                               for (var i = 0; i < data['d'].length; i++) {
                                   userListService.verification.push({ source: data['d'][i]['source'], answer: data['d'][i]['answer'] });
                               }
                           }).error(function (data, status, headers, config) {
                               window.alert("Error Retrieving Verification Code" + status);
                           });
    }
}]);
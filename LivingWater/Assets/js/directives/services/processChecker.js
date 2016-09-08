
angular.module('otherApp')
.factory('processChecker', [ 'userInformation',function (userInformation){
    return function (path) {
        if (path == '/Login') {
            userInformation.process = 20;
        } else if (path == '/ContactUs') {
            userInformation.process = 21;
        } else if (path == '/EditNews' || path=='editNews') {
            userInformation.process = 2;
        } else if (path == 'addNews') {
            userInformation.process = 3;
        } else if (path == 'viewNews' || path=='/Home' || path == '/News') {
            userInformation.process = 1;
        }
    }
}]);
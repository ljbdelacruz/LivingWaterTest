
angular.module('otherApp')
.factory('navigationBarProperties', function () {
    var navigationBarProperties = {
        isAdmin: false,
        isUser: false,
        update:'&',
    };
    return navigationBarProperties;
});
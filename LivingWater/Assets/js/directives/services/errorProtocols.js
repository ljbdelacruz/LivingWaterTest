
angular.module('otherApp')
.factory('errorProtocols', [function() {
    return function (errorNumber) {
        switch (errorNumber) {
            case 1:
                alert("Lost Connection Please Try Again Later");
                break;
            case 2:
                alert("There Has Been An Error While Loging In");
                break;
            case 3:
                alert("Wrong User Credentials");
                break;
            case 4:
                alert("Cannot Load News Connection Problem Please Check Your Connection");
                break;
            case 5:
                alert("Cannot Load Inbox Connection Problem Please Check Your Connection");
                break;
            default:
                alert("Error Not Specified Yet");
                break;
        }
    }
}]);
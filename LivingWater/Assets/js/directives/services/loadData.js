
angular.module('otherApp')
.factory('loadData', ['dbInbox', '$http', 'userInformation', 'loadVerificationCodes',
    function (dbInbox, $http, userInformation, loadVerificationCodes) {
        return function (action) {
            alert("User "+action);
            switch (+action) {
                case 1:
                    //loads inbox under this user
                    alert(userInformation.user_id);
                    dbInbox(userInformation.user_id);
                    break;
                case 2:
                    //loads verificationCodes
                    loadVerificationCodes();
                    break;
                default:
                    break;
            }
        }
}]);

angular.module('otherApp')
.factory('loadData', ['$http', 'userInformation', 'loadVerificationCodes', 'dbProducts', 'dbInbox',
function ( $http, userInformation, loadVerificationCodes, dbProducts, dbInbox) {
        return function (action) {
            switch (+action) {
                case 1:
                    //loads inbox under this user
                    dbInbox(userInformation.user_id);
                    break;
                case 2:
                    //loads verificationCodes
                    loadVerificationCodes();
                    break;
                case 3:
                    dbProducts();
                    break;
                default:
                    break;
            }
        }
}]);
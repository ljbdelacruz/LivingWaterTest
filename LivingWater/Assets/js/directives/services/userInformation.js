
angular.module('otherApp')
.factory('userInformation', function () {
    var userInformation = {
        username: '',
        language_id:1,
        isadmin: false,
        islogin: false,
        newsToModify_id: -1,
        process: 20,
        successRegister: false,
        sucessCreatingConcern: false,
        newsToView: {id: -1, title: '', content: '', datePublished: ''},
    };
    return userInformation;
});
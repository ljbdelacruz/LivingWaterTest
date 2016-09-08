angular.module('otherApp')
.factory('registrationService', function () {
    var registrationService = {
        username: "",
        password: "",
        retypePassword: "",
        fName: "",
        mName: "",
        lName: "",
        bMonth: 12,
        bDay: 5,
        bYear: 1994,
        age:0,
    };
    return registrationService;
});
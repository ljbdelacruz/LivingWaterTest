angular.module('otherApp')
.factory('registrationProperties', function () {
    var registrationProperties = {
        month: [{ m: 1 }, { m: 2 }, { m: 3 }, { m: 4 }, { m: 5 }, { m: 6 }, { m: 7 }, { m: 8 }, { m: 9 }, { m: 10 }, { m: 11 }, { m: 12 }],
        day: [{ d: 1 }, { d: 2 }, { d: 3 }, { d: 4 }, { d: 5 }, { d: 6 }, { d: 7 }, { d: 8 }, { d: 9 }, { d: 10 }, { d: 11 }, { d: 12 }, { d: 13 },
              { d: 14 }, { d: 15 }, { d: 16 }, { d: 17 }, { d: 18 }, { d: 19 }, { d: 20 }, { d: 21 }, { d: 22 }, { d: 23 }, { d: 24 }, { d: 25 }, { d: 26 },
              { d: 27 }, { d: 28 }, { d: 29 }, { d: 30 }, { d: 31 }],
    };
    return registrationProperties;
});
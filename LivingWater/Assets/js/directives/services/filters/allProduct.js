
angular.module('otherApp')
.factory('filterProductAll', ['userListService', function (userListService) {
    return function () {
        userListService.items = [];
        for (var i = 0; i < userListService.products.length; i++) {
            for (var c = 0; c < userListService.products[i].items.length; c++) {
                userListService.items.push(userListService.products[i].items[c]);
            }
        }
    }
}]);
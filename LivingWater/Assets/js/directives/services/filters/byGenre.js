
angular.module('otherApp')
.factory('filterByGenre', ['userListService', function (userListService) {
    return function (genre) {
        genre--;
        userListService.items = [];
        for (var i = 0; i < userListService.products.length; i++) {
            if (genre == userListService.products[i].id) {
                for (var c = 0; c < userListService.products[i].items.length; c++) {
                    userListService.items.push(userListService.products[i].items[c]);
                }
            }
        }
    }
}]);

angular.module('otherApp')
.factory('filterBySlots', ['userListService', function (userListService) {
    return function (col) {
        userListService.productSlots = [{items:[]}];
        var tempCol = 0;
        var index = 0;
        for (var i = 0; i < userListService.items.length; i++) {
            if (tempCol < col) {
                userListService.productSlots[index].items.push(userListService.items[i]);
            } else {
                userListService.productSlots.push({ items: [] });
                index++;
                userListService.productSlots[index].items.push(userListService.items[i]);
                tempCol = 0;
            }
            tempCol++;
        }
    }
}]);
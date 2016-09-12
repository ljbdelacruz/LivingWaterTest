
angular.module('otherApp')
.factory('filterBySlots', ['productService', function (productService) {
    return function (col) {
        productService.productSlots = [{ items: [] }];
        var tempCol = 0;
        var index = 0;
        for (var i = 0; i < productService.items.length; i++) {
            if (tempCol < col) {
                productService.productSlots[index].items.push(productService.items[i]);
            } else {
                productService.productSlots.push({ items: [] });
                index++;
                productService.productSlots[index].items.push(productService.items[i]);
                tempCol = 0;
            }
            tempCol++;
        }
    }
}]);
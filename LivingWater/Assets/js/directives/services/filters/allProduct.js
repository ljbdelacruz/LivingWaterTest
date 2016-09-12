
angular.module('otherApp')
.factory('filterProductAll', ['productService', function (productService) {
    return function () {
        productService.items = [];
        for (var i = 0; i < productService.products.length; i++) {
            for (var c = 0; c < productService.products[i].items.length; c++) {
                productService.items.push(productService.products[i].items[c]);
            }
        }
    }
}]);
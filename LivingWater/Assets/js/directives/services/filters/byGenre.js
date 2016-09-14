
angular.module('otherApp')
.factory('filterByGenre', ['productService', function (productService) {
    return function (genre) {
        productService.items = [];
        for (var i = 0; i < productService.products.length; i++) {
            alert("SELECTED FILTER " + genre);
            alert(productService.products[i].id)
            if (genre == productService.products[i].id) {
                for (var c = 0; c < productService.products[i].items.length; c++) {
                    productService.items.push(productService.products[i].items[c]);
                }
            }
        }
    }
}]);
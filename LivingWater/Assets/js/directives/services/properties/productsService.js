
angular.module('otherApp')
.factory('productService', function () {
    var productService = {
        isenableAddingToCart: false,
        mode: 1,
    };
    return productService;
});
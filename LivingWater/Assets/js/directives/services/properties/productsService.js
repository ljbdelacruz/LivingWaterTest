
angular.module('otherApp')
.factory('productService', function () {
    var productService = {
        products: [{ id: 1, genre: 'Despenser', items: [{ id: 1, item: 'Hot And Cold Dispenser', price: 3600, source: 'Assets/images/products/1.jpg', quantity: 1 }, { id: 1, item: 'Lourdes Portable Water Maker', price: 68900, source: '/Assets/images/products/2.jpg', quantity: 1 }, { id: 1, item: 'Hot And Cold Dispenser(WOW)', price: 3500, source: '/Assets/images/products/3.jpg', quantity: 1 }, { id: 1, item: 'Electrolysis Alkaline Water Maker', price: 54800, source: '/Assets/images/products/4.jpg', quantity: 1 }] },
                   { id: 2, genre: 'Products', items: [{ id: 2, item: 'Rope', price: 200, source: '', quantity: 1 }, { id: 2, item: 'Rope', price: 200, source: '', quantity: 1 }] }
        ],
        productSlots: [],
        items: [],
        productGenre:[],
        isenableAddingToCart: false,
        mode: 1,
        newProductItem: [],
        newGenre: [],

    };
    return productService;
});
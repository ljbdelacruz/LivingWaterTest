
angular.module('otherApp')
.factory('userListService', function () {
    var userListService = {
        users: [],
        userprofile: [{ id: 1, firstname: 'Lainel', middlename: 'John', lastname: 'Dela Cruz', age: 21, birthday: '12-05-1994' },
        ],
        newUserRegistration:{}, //this is where the new registered user data will be stored
        concerns: [],
        inbox: [],
        newConcern: [{ title: 'Hello', subject: 'Product', message: 'What the hell is this', username: '' }],
        slideImage: [],
        news: [],
        newNews: {  images:[], videos:[]},
        verification: [],
        products: [{ id: 1, genre: 'Accessory', items: [{ id: 1, item: 'Capsule', price: 200, source: '', quantity: 1 }, { id: 1, item: 'Capsule', price: 200, source: '', quantity: 1 }, { id: 1, item: 'Capsule', price: 200, source: '', quantity: 1 }, { id: 1, item: 'Capsule', price: 200, source: '', quantity: 1 }] },
                   { id: 2, genre: 'Products', items: [{ id: 2, item: 'Rope', price: 200, source: '', quantity: 1 }, { id: 2, item: 'Rope', price: 200, source: '', quantity: 1 }] }
        ],
        items: [],
        productSlots: [],
        genre:[],
        cart: [{ id: 1, genre: 'Accessory', items: [{ id: 1, item: 'Capsule', price: 200, source: '', quantity:3 }] },
               { id: 2, genre: 'Products', items: []}],
    };
    return userListService;
});
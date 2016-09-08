
angular.module('otherApp')
.factory('modifyCart', ['userListService', function (userListService) {
    //accepts the parameter item from products and also the genre on where this item belongs
    return function (item, type, quantity,action) {
                for (var i = 0; i < userListService.cart.length; i++) {
                    if (userListService.cart[i].id == type) {
                        var isExist = false;
                        //checks if item exist
                        for (var c = 0; c < userListService.cart[i].items.length; c++) {
                            if (userListService.cart[i].items[c].id == item.id) {
                                switch (action) {
                                    case 1:
                                        userListService.cart[i].items[c].quantity += +quantity;
                                        isExist = true;
                                        break;
                                    case 2:
                                        //delete item from cart
                                        userListService.cart[i].items.splice(c, 1);
                                        break;
                                }
                                break;
                            }
                        }
                        //if not then add a new item to a specific genre in cart
                        if (isExist == false && action == 1) {
                            alert("!Exist");
                            userListService.cart[i].items.push(item);
                        }
                        break;
                    }
                }
    }
}]);
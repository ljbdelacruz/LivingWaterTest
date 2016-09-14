angular.module('otherApp')
.factory('dbProducts', ['$http', 'productService', function ($http, productService) {
    return function () {
        var parameters = {};
        $http.post('index.aspx/ListOfProducts', angular.toJson(parameters))
                           .success(function (data, status, headers, config) {
                               productService.products = [];
                               productService.productGenre = [];
                               productService.productGenre.push({id:0, name:'All'});
                               for (var i = 0; i < data['d'].length; i++) {
                                   alert(data['d'][i]['genre']);
                                   var temp = {id: 0, genre:'', items:[]};
                                   temp.id = data["d"][i]["id"];
                                   temp.genre = data["d"][i]['genre'];
                                   productService.productGenre.push({ id: +data['d'][i]['id'], name: data['d'][i]['genre']});
                                   for (var c = 0; c < data['d'][i]['items'].length; c++) {
                                       temp.items.push({
                                           id: data['d'][i]['items'][c]['id'], item: data['d'][i]['items'][c]['item'],
                                           price: data['d'][i]['items'][c]['price'], source: data['d'][i]['items'][c]['source'],
                                           quantity: data['d'][i]['items'][c]['stock'], product_id: data['d'][i]['items'][c]['product_id']
                                       });
                                   }
                                   productService.products.push(temp);
                               }

                           }).error(function (data, status, headers, config) {
                               window.alert("Error " + status);
                           });
    }
}]);
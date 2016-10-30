'use strict';

/* Create module for navbar directive */
angular.module('directives.cartComponent', [])
.directive('cartComponent',
           ['$http',
            function($http) {
    function preFn(scope, element, attr) {
        /* TODO: Do something here before post function */
    }
    /* Do the directive's logic here */
    function postFn(scope, element, attr) {
        scope.items=[{item:{ id: 2, item: 'Rope', price: 200, source: '', quantity: 1, content: 'This Product Is Helpful' }, isSelected:false}];
        scope.PopulateCart=function(){
             //this one populate the cart at the start of the program      
        };
        scope.Remove_OnClicked=function(){
            alert("Removed Items");
            //scope.RemoveItemsSelected();
        };
        scope.RemoveItemsSelected=function(){
            var itmSelected=[];
            for(var i=0; i<scope.items; i++){
                if(scope.items[i].isSelected){
                    itmSelected.push(scope.items[i].item);
                }
            }
        };
        scope.MakeOrder=function(){
            alert("Make Order");
        };
        scope.CancelOrders=function(){
            alert("Cancel Order");
        };
        

    }
    return {
        restrict: 'E',
        replace: true,
        scope:{
            cCart:'='
        },
        //change path if will be used on other projects
        templateUrl: '/Assets/js/directives/template2/ui/cartComponent/cartComponent.html',
        compile: function(scope, element, attr) {
            return {
                pre: preFn,
                post: postFn
            }
        }
    };
}]);
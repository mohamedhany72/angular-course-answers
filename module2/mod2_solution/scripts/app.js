(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;
        var service = ShoppingListCheckOffService;

        toBuy.items = service.getToBuyItems();

        toBuy.buy = function(i){
            service.buy(i);
        }
    };
    
    
    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBought = this;
        var service = ShoppingListCheckOffService;

        alreadyBought.items = service.getAlreadyBoughtItems();
    };
    

    function ShoppingListCheckOffService(){
        var service = this;
        var toBuyItems =[
            {
                name: "Milk",
                quantity: 1
            },
            {
                name: "Cookies",
                quantity: 10
            },
            {
                name: "Chips",
                quantity: 3
            },
            {
                name: "Eggs",
                quantity: 5
            },
            {
                name: "Orange Juice",
                quantity: 4
            },
        ];

        var alreadyBoughtItems = [];

        service.getToBuyItems = function(){
            return toBuyItems;
        }

        service.getAlreadyBoughtItems = function(){
            return alreadyBoughtItems;
        }

        service.buy = function(i){
            var item = toBuyItems[i];
            toBuyItems.splice(i,1);
            alreadyBoughtItems.push(item);
        }


    }

})();
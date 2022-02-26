(function () {
    'use strict';
    
    angular.module('app', [])
    .controller('Ctrl', Ctrl)
    .provider("ShopListService", ShopListServiceProvider);


    Ctrl.$inject = ["ShopListService"];
    function Ctrl(ShopListService){
        var list = this;
        // let shopList = ShopListService;

        list.itemName = "";
        list.itemQuantity = "";
        list.add = function(){
            try{
                ShopListService.add(list.itemName, list.itemQuantity);
            }catch(error){
                list.errorMessage = error.message;
            }

            
        }

        list.remove = function(i){
            ShopListService.remove(i);
        }

        list.items = ShopListService.show();
        

    };
    
    
    
    
    function ShopListCustomService(maxnum){
        var service = this;
        let items = [];

        service.add = function(itemName, itemQuantity){
            if(maxnum == undefined || items.length < maxnum){
                let item = {
                    name: itemName,
                    quantity: itemQuantity
                };
                items.push(item);

            } else{
                throw new Error("maximum number of items " + maxnum + " is reached!");
            }
        }

        service.remove = function(i){
            items.splice(i,1);
        }

        service.show = function(){
            return items;
        }
    }

    function ShopListServiceProvider(){
        var provider = this;

        provider.defaults = {
            maxItems: 10
        }

        provider.$get = function(){
            var shopList = new ShopListCustomService(provider.defaults.maxItems)
            return shopList
        }
    }

    

})();
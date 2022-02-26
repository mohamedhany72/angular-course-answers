(function () {
    'use strict';
    
    angular.module('app', [])
    .controller('Ctrl1', Ctrl1)
    .controller('ctrl2', ctrl2)
    .factory("shopListFactory", ShopListFactory);


    Ctrl1.$inject = ["shopListFactory"];
    function Ctrl1(shopListFactory){
        var list = this;
        let shopList = shopListFactory();

        list.itemName = "";
        list.itemQuantity = "";
        list.add = function(){
            try{
                shopList.add(list.itemName, list.itemQuantity);
            }catch(error){
                shopList.errorMessage = error.message;
            }

            
        }

        list.remove = function(i){
            shopList.remove(i);
        }

        list.items = shopList.show();
        

    };
    
    
    ctrl2.$inject = ["$scope", "shopListFactory"];
    function ctrl2($scope, shopListFactory){
        let shopList = shopListFactory(3);
        
        $scope.itemName = "";
        $scope.itemQuantity = "";
        $scope.add = function(){
            try{
                shopList.add($scope.itemName, $scope.itemQuantity);
            }catch(error){
                $scope.errorMessage = error.message;
            }

            }

        $scope.remove = function(i){
            shopList.remove(i)
        }

        $scope.items = shopList.show();

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

    function ShopListFactory(){
        var factory = function(maxnum){
            return new ShopListCustomService(maxnum)
        }
        return factory;
    }

})();
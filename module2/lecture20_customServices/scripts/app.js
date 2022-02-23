(function () {
    'use strict';
    
    angular.module('app', [])
    .controller('ShopListAddCtrl1', ShopListAddCtrl1)
    .controller('ShopListShowCtrl1', ShopListShowCtrl1)
    .controller('shopListAddCtrl2', shopListAddCtrl2)
    .controller('shopListShowCtrl2', shopListShowCtrl2)
    .controller('shopListShowCtrl3', shopListShowCtrl3)
    .service('ShopListService1', ShopListService1)
    .service('ShopListService2', ShopListService2);


    // function instructors controller
    shopListAddCtrl2.$inject = ["ShopListService1"];
    function ShopListAddCtrl1(ShopListService1){
        var itemAdder = this;
        itemAdder.itemName = "";
        itemAdder.itemQuantity = "";

        itemAdder.addItem = function(){
            ShopListService1.addItem(itemAdder.itemName, itemAdder.itemQuantity);
        }
    };
    
    shopListShowCtrl2.$inject = ["ShopListService1"];
    function ShopListShowCtrl1(ShopListService1){
        var showList = this;
        showList.items = ShopListService1.getItems();
        showList.removeItem = function(i){
            ShopListService1.removeItem(i)
        }
    };




    // normal contrllers with $scope
    shopListAddCtrl2.$inject = ["$scope", "ShopListService2"];
    function shopListAddCtrl2($scope, ShopListService2){
        $scope.itemName = "";
        $scope.itemQuantity = "";

        $scope.addItem = function(){
            ShopListService2.addItem($scope.itemName, $scope.itemQuantity);
        }
    };
    
    shopListShowCtrl2.$inject = ["$scope", "ShopListService2"];
    function shopListShowCtrl2($scope, ShopListService2){
        $scope.items = ShopListService2.getItems();
        $scope.removeItem = function(i){
            ShopListService2.removeItem(i)
        }
    };


    shopListShowCtrl3.$inject = ["$scope", "ShopListService1"];
    function shopListShowCtrl3($scope, ShopListService1){
        $scope.items = ShopListService1.getItems();
        $scope.removeItem = function(i){
            ShopListService1.removeItem(i)
        }
    };



    // servicess
    // first two controllers service
    function ShopListService1(){
        var service = this;
        let items = [];

        // add items here
        service.addItem = function(name, quant){
            let item = {
                name: name,
                quantity: quant
            }
            items.push(item);
        }

        // show items here
        service.getItems = function(){
            return items;
        }

        // remove items here
        service.removeItem = function(i){
            items.splice(i,1);
        }
    }

    // second two controllers service
    function ShopListService2(){
        var service = this;
        let items = [];

        // add items here
        service.addItem = function(name, quant){
            let item = {
                name: name,
                quantity: quant
            }
            items.push(item);
        }

        // show items here
        service.getItems = function(){
            return items;
        }

        // remove items here
        service.removeItem = function(i){
            items.splice(i,1);
        }
    }

    
})();
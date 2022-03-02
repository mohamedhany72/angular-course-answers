(function () {
    'use strict';
    
    angular.module('app', [])
    .controller('ShoppingListCtrl', ShoppingListCtrl)
    .service('ShopListService', ShopListService)
    .service('WeightLossFilterService',WeightLossFilterService);

    // my controller 
    ShoppingListCtrl.$inject = ["ShopListService"];
    function ShoppingListCtrl(ShopListService){
        var service = ShopListService;
        var shopList = this;
        shopList.itemName = "";
        shopList.itemQuantity = "";

        shopList.addItem = function(){
            service.addItem(shopList.itemName, shopList.itemQuantity);
        }

        shopList.items = service.getItems();


        shopList.removeItem = function(i){
            service.removeItem(i)
        }
    };
    

    // Shopping list service
    ShopListService.$inject = ["$q", "WeightLossFilterService"]
    function ShopListService($q, WeightLossFilterService){
        var service = this;
        let items = [];

        // add items here
        service.addItem = function(name, quant){


            // *** first approach with indent.... it sucks

            // var promise = WeightLossFilterService.checkName(name);

            // promise.then(function(response){
            //     var nextPromise = WeightLossFilterService.checkQuantity(quant);

            //     nextPromise.then(function(response){    
                    
            //         let item = {
            //             name: name,
            //             quantity: quant
            //         }
            //         items.push(item);

            //     }, function(errorResponse){
            //         console.log(errorResponse.message);
            //     })

            // }, function(errorResponse){
            //     console.log(errorResponse.message);
            // });

            // *** end of first approach




            // *** second approach

            // var promise = WeightLossFilterService.checkName(name);

            // promise.then(function(){
            //     return WeightLossFilterService.checkQuantity(quant);
            // }).then(function(){
            //     let item = {
            //         name: name,
            //         quantity: quant
            //     }
            //     items.push(item);
            // }).catch(function(errorResponse){
            //     console.log(errorResponse.message)
            // })

            // *** end of second approach


            // *** third approach
            var namePromise = WeightLossFilterService.checkName(name);
            var quantPromise = WeightLossFilterService.checkQuantity(quant);

            $q.all([namePromise, quantPromise]).then(function(){
                let item = {
                    name: name,
                    quantity: quant
                }
                items.push(item);
            }).catch(function(errorResponse){
                console.log(errorResponse.message);
            })


                
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
    

    // WeightLossFilterService
    WeightLossFilterService.$inject = ["$q", "$timeout"]
    function WeightLossFilterService($q, $timeout){
        var service = this;

        service.checkName = function(name){
            var deferred = $q.defer();

            var result = {
                message : ""
            };

            $timeout(function(){
                if(name.toLowerCase().indexOf('cookie') === -1){
                    deferred.resolve(result)
                } else {
                    result.message = "stay away from cookies!";
                    deferred.reject(result);
                }


            }, 3000)

            return deferred.promise;
        };

        service.checkQuantity = function(quantity){
            var deferred = $q.defer();
            var result = {
                message: ""
            };

            $timeout( function(){
                if(quantity < 6){
                    deferred.resolve(result);
                } else {
                    result.message = "too much boxes!";
                    deferred.reject(result)
                }

            } ,1000);

            return deferred.promise;
        }
    }
    
})();
(function () {
    'use strict';
    
    angular.module('app', [])
    .controller('MenuCategoriesController', MenuCategoriesController)
    .service("MenuCategoriesService",MenuCategoriesService);

    
    MenuCategoriesController.$inject = ["MenuCategoriesService"];
    function MenuCategoriesController(MenuCategoriesService){
        var menu = this;
        var service = MenuCategoriesService;

        var categoriesPromise = service.getMenuCategories();

        categoriesPromise.then((response)=>{
            menu.categories = response.data;
        }).catch((err)=>{
            console.log("something went wrong");
        })

        menu.logMenuItems = (shortName)=>{
            var shortNamePromise = service.getMenuForGategory(shortName);

            shortNamePromise.then((response)=>{
                console.log(response.data);
            }).catch((err)=>{
                console.log("okkkk, wrong short name!");
            })
        }

    };
    

    MenuCategoriesService.$inject = ["$http"];
    function MenuCategoriesService($http){
        var service = this;

        service.getMenuCategories = function(){
            var response = $http({
                method : "GET",
                url: ("http://davids-restaurant.herokuapp.com/categories.json")
            });

            return response;
        };

        service.getMenuForGategory = function(shortName){
            var response = $http({
                method: "GET",
                url: ("http://davids-restaurant.herokuapp.com/menu_items.json"),
                params: {
                    category: shortName
                }
            });

            return response;
        }
    }
    
    
})();
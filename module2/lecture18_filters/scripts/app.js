(function () {
    'use strict';
    

    var shopList = ["milk", "chockolate milk", "pouder milk", "buffalo milk", "white eggs", "red eggs", "cottage eggs",
                    "frensh bread", "white bread", "toast bread", "red mango", "green mango", "red apples", "green apples"];

    angular.module('app', [])
    .controller('ctrl', ctrl);
    ctrl.$inject = ["$scope"];
    function ctrl($scope){
        $scope.shopList = shopList;
    };
    
    
    
})();
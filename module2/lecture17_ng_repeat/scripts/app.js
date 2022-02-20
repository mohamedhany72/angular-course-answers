(function () {
    'use strict';
    
    var shoplist1 = ["Banana", "Apple", "Orange", "Grapes", "Mango", "Watermelon"];
    var shoplist2 = [
        {
            name: "egg",
            price: 2
        },{
            name: "milk",
            price: 14
        },{
            name: "bread",
            price: 0.5
        },{
            name: "cheese",
            price: 40
        }
    ];
    angular.module('repeatApp', [])
    .controller('ctrl', ctrl);
    ctrl.$inject = ["$scope", "$filter"];
    function ctrl($scope){
        $scope.shoplist1 = shoplist1;
        $scope.shoplist2 = shoplist2;

        $scope.addme = function(){
            let item = { name: $scope.addedName, price: $scope.addedPrice};
            $scope.shoplist2.push(item);
        }
    };
    
    
    
})();
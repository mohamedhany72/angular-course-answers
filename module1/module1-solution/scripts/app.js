(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.foods = "";
        $scope.message = "";
        $scope.class = "";
        $scope.checKFood = function(){
            var message = calculateFoods($scope.foods);
            $scope.message = message;
        };

        $scope.dosomething = function(){
            console.log("clicked")
        }
        function calculateFoods(string){
            let list = string.split(",")
            let count = 0;
            for(let i=0;i<list.length; i++){
                if(list[i].trim()){
                    count ++
                }
            }

            if(count === 0){
                $scope.class = "red";
                return "Please enter data first";
            } else if(count <= 3 ){
                $scope.class = "green";
                return "Enjoy!";
            } else {
                $scope.class = "green";
                return "Too much!";
            }
        }
    
      
    }
    
})();
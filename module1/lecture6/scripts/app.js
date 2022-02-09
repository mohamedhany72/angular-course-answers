(function () {
    'use strict';
    
    angular.module('nameCalculator', [])
    .controller('calculatorController', function($scope){
        $scope.text = "";
        $scope.totalValue = 0;

        $scope.displayNumber = function(){
            let numberValue = calcNumber($scope.text);
            $scope.totalValue = numberValue;
        }

        function calcNumber(text){
            let totalVal = 0;
            for(let i=0;i<text.length; i++){
                totalVal += text.charCodeAt(i);
            }
            return totalVal;
        }
    });
    
    
    
})();
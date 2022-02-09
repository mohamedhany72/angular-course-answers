(function () {
    'use strict';
    
    angular.module('myFirstApp', [])
    .controller('myFirstController', function($scope){
        $scope.name = "Mido";
        $scope.sayHello = function(){
            return "Hello Angular";
        }
        $scope.changeMe = "text";
        
    });
    
    
    
})();
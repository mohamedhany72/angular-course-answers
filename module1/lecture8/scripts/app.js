(function () {
    'use strict';
    
    angular.module('upperCase', [])
    .controller('upperController', function($scope, $filter){
        $scope.name = "name";

        $scope.toUpperCase = function(){
            let upCase = $filter('uppercase');
            $scope.name = upCase($scope.name)
        }
    });
    
    
    
})();
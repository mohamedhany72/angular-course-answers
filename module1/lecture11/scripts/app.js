(function () {
    'use strict';
    
    angular.module('imageApp', [])
    .controller('imageController', imageController);
    imageController.$inject = ['$scope'];
    function imageController($scope){
        $scope.animal = 'dog';
        $scope.changeAnimal = function(){
            $scope.animal = 'horse';
        }
    }
    
    
    
})();
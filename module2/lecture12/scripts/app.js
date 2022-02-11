(function () {
    'use strict';
    
    angular.module('filtersApp', [])
    .controller('filtersController', filtersController);
    filtersController.$inject = ["$scope", "$filter"];
    function filtersController($scope, $filter){
        $scope.object = $filter('uppercase')("white shoes");

        $scope.price = 12;
    };
    
    
    
})();
(function () {
    'use strict';
    
    angular.module('app', [])
    .controller('ctrl', ctrl)
    .filter('replace', replaceFilter)
    .filter('run', runFilter);
    ctrl.$inject = ["$scope", 'replaceFilter', 'runFilter'];
    function ctrl($scope, replaceFilter, runFilter){
        $scope.msgOld = "Mido loves to ride a car";
        $scope.msg = replaceFilter($scope.msgOld);

        $scope.walk = "mido loves to walk";
        $scope.run = runFilter($scope.walk);
    };
    
    function replaceFilter(){
        return function(input){
            input = input || "";
            return input.replace('car', 'bike');
        }
    }

    function runFilter(){
        return function(input){
            input = input || "";
            return input.replace('walk', 'run');
        }
    }
    
    
})();
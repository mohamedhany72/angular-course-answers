(function () {
    'use strict';
    
    angular.module('app', [])
    .controller('ctrl', ctrl)
    .filter('replace', replaceFilter)
    .filter('run', runFilter)
    .filter('cr', crFilter);
    ctrl.$inject = ["$scope", 'replaceFilter', 'runFilter'];
    function ctrl($scope, replaceFilter, runFilter){
        $scope.msgOld = "Mido loves to ride a car";
        $scope.msg = replaceFilter($scope.msgOld);

        $scope.walk = "mido loves to walk";
        $scope.run = runFilter($scope.walk);

        $scope.letter = "My name is Mido, I love Geophysics";
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

    function crFilter(){
        return function(input, text, replacement){
            input = input || "";
            return input.replace(text, replacement);
        }
    }
    
    
})();
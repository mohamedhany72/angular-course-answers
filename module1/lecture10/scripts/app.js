// This lecture is all about protecting the code from minification
// There will be many approachs to help solve this problem
// https://www.minifier.org/ 
// https://www.toptal.com/developers/javascript-minifier/



// the first way will not solve the problem
// (function () {
//     'use strict';
    
//     angular.module('upperCase', [])
//     .controller('upperController', function($scope, $filter){
//         $scope.name = "name";

//         $scope.toUpperCase = function(){
//             let upCase = $filter('uppercase');
//             $scope.name = upCase($scope.name)
//         }
//     });
    
// })();

// The first approach 
// (function () {
//     'use strict';
    
//     angular.module('upperCase', [])
//     .controller('upperController', [ '$scope', '$filter', upperController]);
//     function upperController($scope, $filter){
//         $scope.name = "name";

//         $scope.toUpperCase = function(){
//             let upCase = $filter('uppercase');
//             $scope.name = upCase($scope.name)
//         }
//     }
    
// })();


// The second approach...the best approach
(function () {
    'use strict';
    
    angular.module('upperCase', [])
    .controller('upperController', upperController);
    upperController.$inject = ['$scope', '$filter'];
    function upperController($scope, $filter){
        $scope.name = "name";

        $scope.toUpperCase = function(){
            let upCase = $filter('uppercase');
            $scope.name = upCase($scope.name)
        }
    }
    
})();




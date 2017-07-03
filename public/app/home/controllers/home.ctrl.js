(function() {
    'use strict';
    
    angular
    .module('app')
    .controller('HomeCtrl', HomeCtrl);
    
    HomeCtrl.$inject = ['$scope', '$firebaseAuth', '$firebaseArray', 'ModalService'];
    
    function HomeCtrl($scope, $firebaseAuth, $firebaseArray, ModalService) {
        
        activate();
        
        function activate() {
            return;
        }
    }
})();
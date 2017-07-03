(function() {
    'use strict';
    
    angular
    .module('app')
    .controller('ContactCtrl', ContactCtrl);
    
    ContactCtrl.$inject = ['$scope', '$firebaseAuth', '$firebaseArray', 'ModalService'];
    
    function ContactCtrl($scope, $firebaseAuth, $firebaseArray, ModalService) {
        
        activate();
        
        function activate() {
            return;
        }
    }
})();
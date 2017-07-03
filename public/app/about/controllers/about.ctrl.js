(function() {
    'use strict';
    
    angular
    .module('app')
    .controller('AboutCtrl', AboutCtrl);
    
    AboutCtrl.$inject = ['$scope', '$firebaseAuth', '$firebaseArray', 'ModalService'];
    
    function AboutCtrl($scope, $firebaseAuth, $firebaseArray, ModalService) {
        
        activate();
        
        function activate() {
            return;
        }
    }
})();
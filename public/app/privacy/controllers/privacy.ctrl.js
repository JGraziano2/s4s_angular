(function() {
    'use strict';
    
    angular
    .module('app')
    .controller('PrivacyCtrl', PrivacyCtrl);
    
    PrivacyCtrl.$inject = ['$scope', '$stateParams', '$firebaseAuth', '$firebaseArray', 'ModalService'];
    
    function PrivacyCtrl($scope, $stateParams, $firebaseAuth, $firebaseArray, ModalService) {
        
        activate();
        
        function activate() {
            return;
        }
    }
})();
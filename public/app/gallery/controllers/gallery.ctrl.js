(function() {
    'use strict';
    
    angular
    .module('app')
    .controller('GalleryCtrl', GalleryCtrl);
    
    GalleryCtrl.$inject = ['$scope', '$firebaseAuth', '$firebaseArray', 'ModalService'];
    
    function GalleryCtrl($scope, $firebaseAuth, $firebaseArray, ModalService) {
        $scope.showLogin = showLogin;
        
        activate();
        
        function activate() {
            return;
        }
    }
})();
(function() {
    'use strict';
    
    angular
    .module('app')
    .controller('UpdateCtrl', UpdateCtrl);
    
    UpdateCtrl.$inject = ['$scope', '$stateParams', '$firebaseAuth', '$firebaseArray', 'ModalService'];
    
    function UpdateCtrl($scope, $stateParams, $firebaseAuth, $firebaseArray, ModalService) {
        $scope.addStaging = addStaging;
        $scope.removeStaging = removeStaging;
        
        activate();
        
        function activate() {
            const stagingRef = firebase.database().ref().child($stateParams.id).child('stagings'); 
            $scope.stagings = $firebaseArray(stagingRef);
            
            console.log($scope.stagings);
        }
        
        function addStaging() {
            ModalService.showModal({
                templateUrl: 'app/update/templates/modals/addStaging.tpl.html',
                controller: 'AddStagingCtrl',
                controllerAs: 'vm'
            }).then((modal) => {
                modal.element.modal();
                modal.close.then( staging => {
                    $scope.stagings.$add(staging);
                });
            });
        }
        
        function removeStaging(staging) {
            if (confirm("Delete staging?")) $scope.stagings.$remove(staging);
        }
    }
})();
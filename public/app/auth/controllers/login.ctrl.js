(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state', '$firebaseAuth'];

    function LoginCtrl($scope, $state, $firebaseAuth) {
        $scope.submit = submit;
        $scope.message = "";
        $scope.clickedLogin = false;
        
        function submit(){
            $scope.clickedLogin = true;

            $firebaseAuth().$signInWithEmailAndPassword($scope.email, $scope.password)
            .then( (data) => { $state.go('update', {id: data.uid}); })
            .catch( (error) => { $scope.message = error.message; $scope.clickedLogin = false;});                                                                                                   
        }
    }
})();
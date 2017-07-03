(function () {
    'use strict';

    angular
        .module('app')
        .controller('AddStagingCtrl', AddStagingCtrl);

    AddStagingCtrl.$inject = ['close'];

    function AddStagingCtrl(close) {
        let vm = this;
        vm.staging = {};
        
        vm.submit = () => {close(vm.staging, 500);};
        vm.cancel = () => {close({}, 500);};
    }
})();
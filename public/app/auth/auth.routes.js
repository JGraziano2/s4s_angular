(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('login', {
            url: '/login',
            templateUrl:'app/auth/templates/login.tpl.html',
            controller: 'LoginCtrl'
        });
    }
})();
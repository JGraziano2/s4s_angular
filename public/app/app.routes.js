(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('about', {
            url: '/about',
            templateUrl:'app/about/templates/about.tpl.html',
            controller: 'AboutCtrl'
        })
            .state('contact', {
            url: '/contact',
            templateUrl:'app/contact/templates/contact.tpl.html',
            controller: 'ContactCtrl'
        })
            .state('gallery', {
            url: '/gallery',
            templateUrl:'app/gallery/templates/gallery.tpl.html',
            controller: 'GalleryCtrl'
        })
            .state('home', {
            url: '/',
            templateUrl:'app/home/templates/home.tpl.html',
            controller: 'HomeCtrl'
        })
            .state('partners', {
            url: '/partners',
            templateUrl:'app/partners/templates/partners.tpl.html',
            controller: 'PartnersCtrl'
        })    
            .state('privacy', {
            url: '/privacy',
            templateUrl:'app/privacy/templates/privacy.tpl.html',
            controller: 'PrivacyCtrl'
        })            
            .state('update', {
            url: '/update/{id}',
            templateUrl:'app/update/templates/update.tpl.html',
            controller: 'UpdateCtrl'
        });
    }
})();
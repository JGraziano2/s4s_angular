(function () {
    'use strict';
    
    angular
    .module('app')
    .directive('navigation', navigation);
    
    navigation.$inject = [];
    
    function navigation() {
        var directive = {
            replace: true,
            restrict: 'EA',
            templateUrl: 'app/utils/nav/nav.tpl.html'
        };
        
        return directive;
    }
})();
(function () {
    'use strict';
    
    angular
    .module('app')
    .directive('footer', footer);
    
    footer.$inject = [];
    
    function footer() {
        var directive = {
            replace: true,
            restrict: 'EA',
            templateUrl: 'app/utils/footer/footer.tpl.html'
        };
        
        return directive;
    }
})();
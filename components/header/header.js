(function() {
'use strict';

angular
    .module('bagelsBakery')
    .controller('HeaderController', HeaderController)
    .directive('bakeryHeader', bakeryHeader);

HeaderController.$inject = [];
bakeryHeader.$inject = [];

function HeaderController() {
    var vm = this;

    vm.fabOpen = false;
}

function bakeryHeader() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/components/header/header.html',
        controller: 'HeaderController',
        controllerAs: 'headerCtrl'
    };
}

})();

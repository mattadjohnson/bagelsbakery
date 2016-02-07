(function() {
'use strict';

angular
    .module('bagelsBakery.header', [])
    .controller('HeaderController', HeaderController)
    .directive('bakeryHeader', bakeryHeader);

HeaderController.$inject = [];
bakeryHeader.$inject = [];

function HeaderController() {
    var vm = this;

    vm.navs = [
        {
            value: 'about',
            id: '0'
        },
        {
            value: 'contact',
            id: '1'
        }
    ];
}

function bakeryHeader() {
    return {
        restrict: 'E',
        templateUrl: '/components/header/header.html',
        controller: 'HeaderController',
        controllerAs: 'headerCtrl'
    };
}

})();

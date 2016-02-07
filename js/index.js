(function() {
'use strict';

angular
    .module('bagelsBakery', [
        'ngNewRouter',
        'ngMaterial',
        'bagelsBakery.home',
        'bagelsBakery.header'
    ])
    .controller('AppController', AppController);

AppController.$inject = ['$router'];

function AppController($router) {
    $router.config([
        {path: '/', component: 'home'}
    ]);
}

})();

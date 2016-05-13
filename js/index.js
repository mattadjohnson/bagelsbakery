(function() {
'use strict';

angular
    .module('bagelsBakery', [
        'ngAnimate',
        'ngMaterial',
        'ngRoute'
    ])
    .config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'components/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        })
        .when('/about', {
            templateUrl: 'components/about/about.html',
            controller: 'AboutController',
            controllerAs: 'aboutCtrl'
        })
        .when('/contact', {
            templateUrl: 'components/contact/contact.html',
            controller: 'ContactController',
            controllerAs: 'contactCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
    ;
}

})();

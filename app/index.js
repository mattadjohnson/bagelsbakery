(function() {
'use strict';

angular
    .module('bagelsBakery', [
        'ngRoute',
        'ngAnimate',
        'ngMaterial',
        'ngtweet'
    ])
    .config(config)
    .run(run);

config.$inject = ['$routeProvider', '$locationProvider'];

run.$inject = [];

function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true); // enable angular HTML5 mode

    $routeProvider
        .when('/', {
            template: '<bakery-home></bakery-home>',
        })
        .otherwise({
            redirectTo: '/'
        })
    ;
}

/* The run block will execute during angular run time execution, giving us the data we need on page load*/
function run() {

}

})();

(function() {
'use strict';

angular.module('bagelsBakery', ['ngNewRouter', 'bagelsBakery.home'])

.controller('AppController', ['$router', function($router) {
	$router.config([
		{path: '/', component: 'home'}
	]);
}]);

})();
	// app.config(function($routeProvider, $httpProvider, $mdThemingProvider) {
	// 	$routeProvider.
	// 		when('/', {
	// 			templateUrl: 'partials/content.html',
	// 			controller: 'contentController',
	// 			controllerAs: 'contentCtrl'
	// 		}).
	// 		when('/about', {
	// 			templateUrl: 'partials/about.html',
	// 			controller: 'aboutController',
	// 			controllerAs: 'aboutCtrl'
	// 		}).
	// 		when('/contact', {
	// 			templateUrl: 'partials/contact.html',
	// 			controller: 'contactController',
	// 			controllerAs: 'contactCtrl'
	// 		}).
	// 		otherwise({
	// 			redirectTo: '/'
	// 		});

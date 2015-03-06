(function() {

	var app = angular.module('bagelsBakery', ['ngRoute', 'ngMaterial']);

	app.config(function($routeProvider, $httpProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/content.html',
				controller: 'contentController',
				controllerAs: 'contentCtrl'
			}).
			when('/about', {
				templateUrl: 'partials/about.html',
				controller: 'aboutController',
				controllerAs: 'aboutCtrl'
			}).
			when('/contact', {
				templateUrl: 'partials/contact.html',
				controller: 'contactController',
				controllerAs: 'contactCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	});

})();
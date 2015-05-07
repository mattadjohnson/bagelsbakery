(function() {

	var app = angular.module('bagelsBakery', ['ngNewRouter', 'ngMaterial']);

	app.config(function($routeProvider, $httpProvider, $mdThemingProvider) {
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

		$mdThemingProvider.theme('default')
			    .primaryPalette('pink')
			    .accentPalette('orange');
	});

})();
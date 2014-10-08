(function() {
	'use strict';

	angular.module('bagel', ['ngRoute'])

	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'app/templates/about.html',
					controller: 'aboutController',
					controllerAs: 'aboutCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
		}
	]);

})();
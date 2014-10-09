(function() {
	'use strict';

	angular.module('bagel', ['ngRoute'])

	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'app/templates/main.html',
					controller: 'mainController',
					controllerAs: 'mainCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
		}
	]);

})();

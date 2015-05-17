(function() {
	'use strict';

	angular.module('bagelsBakery')

	.directive('bakeryHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/directives/header.html',
			controller: 'headerController',
			controllerAs: 'headerCtrl'
		};
	});

})();

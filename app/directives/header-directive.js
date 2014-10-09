(function() {
	'use strict';

	angular.module('bagel')

	.directive('bakeryHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/templates/header.html',
			controller: 'headerController',
			controllerAs: 'headerCtrl'
		};
	});

})();

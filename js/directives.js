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
	})

	.directive('bakeryMenu', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/directives/menu.html',
			controller: 'menuController',
			controllerAs: 'menuCtrl'
		};
	})

	.directive('scroll', function($window) {
		return function(scope, element, attrs) {
	        angular.element($window).bind('scroll', function() {
	             if (this.pageYOffset >= 400) {
	                 scope.stick = true;
	             } 
	             else {
	                 scope.stick = false;
	             }
	            scope.$apply();
	        });
	    };
	})

})();

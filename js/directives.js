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
	        	console.warn(this.pageYOffset);
	             if (this.pageYOffset >= 288) {
	                 scope.stick = true;
	                 console.log('Scrolled below header.');
	             } 
	             else {
	                 scope.stick = false;
	                 console.log('Header is in view.');
	             }
	            scope.$apply();
	        });
	    };
	})

})();

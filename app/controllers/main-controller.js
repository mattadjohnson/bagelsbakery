(function() {
	'use strict';

	angular.module('bagel')

	.controller('mainController', ['$http', function($http) {
		this.aboutHeading = 'Welcome to My Bakery.';
		this.aboutProjects = 'Checkout some items on the menu:';

		this.imgularLink = 'imgular/';
	}]);

})();

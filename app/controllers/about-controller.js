(function() {
	'use strict';

	angular.module('bagel')

	.controller('aboutController', ['$http', function($http) {
		this.aboutHeading = 'Welcome to my Bakery.';
		this.aboutSubHeading = 'This is a place for me to show off all of my projects and for you to get to know a little about me and my skillset as a front-end developer.';
	}]);

})();

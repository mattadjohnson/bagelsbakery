(function() {
	'use strict';

	angular.module('bagel')

	.controller('mainController', ['$http', function($http) {
		this.aboutHeading = 'Welcome to My Bakery.';
		this.aboutProjects = 'Content Coming Soon';
		this.aboutSkills = '';
	}]);

})();

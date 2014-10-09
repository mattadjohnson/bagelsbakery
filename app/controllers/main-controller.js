(function() {
	'use strict';

	angular.module('bagel')

	.controller('mainController', ['$http', function($http) {
		this.aboutHeading = 'Welcome to My Bakery.';
		this.aboutProjects = 'This is a place for me to show off all of my projects...';
		this.aboutSkills = 'and for you to get to know a little about me and my skillset as a front-end developer.';
	}]);

})();

(function() {
	'use strict';

	angular.module('bagel')

	.controller('headerController', ['$http', function($http) {
		this.projectName = 'Bagel\'s Bakery';
	}]);

})();

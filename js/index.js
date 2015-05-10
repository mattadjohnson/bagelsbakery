(function() {
'use strict';

angular.module('bagelsBakery', ['ngNewRouter', 'ngMaterial', 'bagelsBakery.home'])

.controller('AppController', ['$router', function($router) {
	$router.config([
		{path: '/', component: 'home'}
	]);
}]);

})();

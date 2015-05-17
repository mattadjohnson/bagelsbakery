(function() {
	'use strict';

	angular.module('bagelsBakery')

	.controller('headerController', function() {
		this.navs = [
			{
				value: 'about',
				id: '0'
			},
			{
				value: 'contact',
				id: '1'
			}
		];
	});

})();

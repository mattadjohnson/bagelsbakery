(function() {
'use strict';

angular.module('bagelsBakery')

.factory('navigation', function() {
	// handle navigation stuff
	var headerNavs = [
		{
			key: 1,
			value: 'contact'
		},
		{
			key: 2,
			value: 'about'
		}
	];

	var menuNavs = [
		{
			key: 1,
			value: 'Contact',
			icon: 'ic_portrait_white',
			link: 'contact'
		},
		{
			key: 2,
			value: 'About',
			icon: 'ic_info_outline_white',
			link: 'about'
		},
		{
			key: 3,
			value: 'Home',
			icon: 'ic_home_white',
			link: ''
		}
	]

	return {
		headerNavs: headerNavs,
		menuNavs: menuNavs
	};

});

})();
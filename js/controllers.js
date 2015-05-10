(function() {
'use strict';

angular.module('bagelsBakery')

.controller('aboutController', ['$http', function($http) {
	// handle all text on about page
	this.bio = 'My name is Matthew Johnson. I\'m a front-end developer at the University of Florida.';
}])

.controller('contactController', ['$http', function($http) {
	// handle all text on contact page
	this.contact = 'CONTACT COMING SOON';
}])

.controller('headerController', ['$http', '$window', '$mdSidenav', 'navigation', function($http, $window, $mdSidenav, navigation) {
	// handle all text on header
	this.logo = 'Matthew Johnson';

	this.navs = navigation.headerNavs;

	this.toggleMenu = function() {
		$mdSidenav('right').toggle()
            .then(function() {
            	//@TODO: something
            	//console.warn('toggled');
            });
    };
}])

.controller('menuController', ['$http', '$mdSidenav', 'navigation', function($http, $mdSidenav, navigation) {
	this.navs = navigation.menuNavs;

	this.logo = 'Bagel\'s Bakery';

	this.closeMenu = function() {
		$mdSidenav('right').close()
			.then(function() {
				//@TODO: Something
				//console.warn('closed');
			});
	};
}])

})();
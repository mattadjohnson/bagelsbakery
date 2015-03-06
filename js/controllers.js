(function() {
'use strict';

angular.module('bagelsBakery')

.controller('aboutController', ['$http', function($http) {
	// handle all text on about page
	this.bio = ''
}])

.controller('contactController', ['$http', function($http) {
	// handle all text on contact page
	this.contact = 'CONTACT COMING SOON';
}])

.controller('contentController', ['$http', function($http) {
	this.welcome = 'Welcome to my Bakery, Check Out What\'s on the Menu:';

	this.projects = [
		{
			path: 'imgular',
			title: 'imgular - imgur and angular',
			description: 'This is my version of an \'imgur roulette\'. A random image generator hooked up with the imgur API and served as my first learning experience with AngularJS.'
			//todo: other attributes
		},
		{
			path: 'moistcake',
			title: '<Moist Cake> - WoW Guild',
			description: 'This is my take on a World of Warcraft guild website. I was tired of all the crappy sites out there built from the same old templates, so I started this from scratch to serve as a public facing recruitment portal for my guild. Still totally a work in Progress.'
		}
	];
}])

.controller('headerController', ['$http', '$mdSidenav', 'navigation', function($http, $mdSidenav, navigation) {
	// handle all text on header
	this.logo = 'Bagel\'s Bakery';

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
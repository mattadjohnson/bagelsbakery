(function() {
'use strict';

angular.module('bagelsBakery.home', [])

.controller('HomeController', [function() {
	this.name = 'Hi my name is Matthew Johnson';
	this.bio = 'I\'m a Front End Developer at the University of Florida';

	this.projects = [
		{
			id: 'p1',
			src: '../images/imgular.jpg',
			path: 'imgular',
			title: 'imgular - imgur and angular',
			//description: 'This is my version of an \'imgur roulette\'. A random image generator hooked up with the imgur API and served as my first learning experience with AngularJS.'
			//todo: other attributes
		},
		{
			id: 'p2',
			src: '../images/wow.jpg',
			path: 'moistcake',
			title: '<Moist Cake> - WoW Guild',
			//description: 'This is my take on a World of Warcraft guild website. I was tired of all the stock sites out there built from the same old templates, so I started this from scratch to serve as a public facing recruitment portal for my guild. Still totally a work in Progress.'
		}
	];

	this.link = function(path) {
		window.location = 'https://bagelsbakery.com/' + path;
	};

}]);

})();

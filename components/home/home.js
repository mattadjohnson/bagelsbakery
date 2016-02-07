(function() {
'use strict';

angular
    .module('bagelsBakery.home', [])
    .controller('HomeController', HomeController);

HomeController.$inject = ['$sce'];

function HomeController($sce) {
    var vm = this;

    vm.bio = 'I\'m a front end developer at the University of Florida <br> Welcome to My Blog';

    vm.posts = [
        // @TODO - blog
    ];

    vm.link = link;
    vm.trustAsHtml = trustAsHtml;

    function link(path) {
        window.location = 'https://bagelsbakery.com/' + path;
    }

    function trustAsHtml(string) {
        return $sce.trustAsHtml(string);
    }
}

})();

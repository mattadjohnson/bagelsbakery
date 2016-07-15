(function() {
'use strict';

angular
    .module('bagelsBakery')
    .controller('MainController', MainController);

/* dependency injection to ensure valid minified code */
MainController.$inject = ['$mdSidenav'];

function MainController($mdSidenav) {
    /* jshint validthis: true */
    var vm = this;

    /* load defaults into view model */

    /* load services into view model */

    /* load functions into view model */
    // vm.toggleSideNav = sideNavToggle('bakery-sidenav');

    /* Here you can immediately invoke function(s) on controller load if needed */

    /* define functions */

    // open sidenav
    // function sideNavToggle(navID) {
    //     return function() {
    //         // Component lookup should always be available since we are not using `ng-if`
    //         $mdSidenav(navID)
    //             .toggle()
    //             .then(function() {
    //                 // if something needs to happen after internal menu toggle
    //             })
    //         ;
    //     };
    // }
}

})();

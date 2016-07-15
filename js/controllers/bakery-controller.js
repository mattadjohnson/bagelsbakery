(function() {
'use strict';

angular
    .module('bagelsBakery')
    .controller('BakeryController', BakeryController);

/* dependency injection to ensure valid minified code */
BakeryController.$inject = [];

function BakeryController() {
    /* jshint validthis: true */
    var vm = this;

    /* load defaults into view model */
    vm.headerFabOpen = false;

    /* load services into view model */

    /* load functions into view model */

    /* Here you can immediately invoke function(s) on controller load if needed */

    /* define functions */
}

})();

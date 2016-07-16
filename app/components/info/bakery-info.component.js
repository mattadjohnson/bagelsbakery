(function() {
'use strict';

angular
    .module('bagelsBakery')
    .component('bakeryInfo', {
        templateUrl: 'app/components/info/bakery-info.html',
        controller: function() {
            this.displayTweets = true;
        }
    });

})();

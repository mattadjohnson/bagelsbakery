(function() {
'use strict';

angular
    .module('bagelsBakery')
    .directive('bakeryHeader', bakeryHeader)
    .directive('bakeryReviews', bakeryReviews)
    .directive('bakeryInfo', bakeryInfo);

function bakeryHeader() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/components/bakery-header.html'
    };
}

function bakeryReviews() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/components/bakery-posts.html'
    };
}

function bakeryInfo() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/components/bakery-info.html'
    };
}

})();

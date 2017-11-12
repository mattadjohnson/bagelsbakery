(function() {
'use strict';

angular
    .module('bagelsBakery')
    .directive('bakeryScroll', bakeryScroll);

bakeryScroll.$inject = ['$timeout', '$window'];

function bakeryScroll($timeout, $window) {
	return {
        restrict: 'A',
        link: function ($scope, $element) {
            $timeout(function () {
                $element.on('scroll', function() {
                    var contentPosition = ($window.innerHeight * 3 / 4) - 64;
                    var scrollPosition = $element[0].scrollTop;

                    if (scrollPosition >= contentPosition) {
                        $element.addClass('scrolled-past-hero');
                    } else {
                        $element.removeClass('scrolled-past-hero');
                    }

                    $scope.$apply();
                });
            }, 0);
        }
    };
}
})();

(function() {
'use strict';

angular
    .module('bagelsBakery')
    .component('bakeryPosts', {
        templateUrl: 'app/components/posts/bakery-posts.html',
        controller: function() {
            // posts have file path of /_posts/YYYY/YYYY-MM-DD-short-description-of-post.markdown
            this.postPaths = [
                '/_posts/2016/2016-07-17-past-present-and-future.markdown',
                '/_posts/2016/2016-07-15-imgular-my-first-angularjs-project.markdown'
            ];
        }
    });

})();

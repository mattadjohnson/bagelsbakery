module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "app/includes/css/main.min.css": "app/includes/less/main.less",
                    "app/includes/css/bootstrap.min.css": "app/includes/less/lib/bootstrap.less"
                }
            }
        },
        watch: {
            styles: {
                files: ['app/includes/less/**/*.less', 'app/includes/less/lib/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};

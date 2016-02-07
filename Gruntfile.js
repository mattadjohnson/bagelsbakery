module.exports = function(grunt) {
    grunt.initConfig({
        gitpull: {
            bakery: {
                options: {
                    remote: 'origin',
                    branch: 'develop',
                    cwd: '',
                    verbose: true
                }
            }
        },
        less: {
            bakery: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "css/main.min.css": "less/styles.less"                }
            }
        },
        ngtemplates: {
            bakery: {
                cwd: '',
                src: ['components/**/*.html'],
                dest: 'js/partials.js',
                options: {
                    module: 'bagelsBakery',
                    htmlmin: {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             true,
                        removeAttributeQuotes:          true,
                        removeComments:                 true,
                        removeEmptyAttributes:          true,
                        removeRedundantAttributes:      true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true
                    }
                }
            }
        },
        uglify: {
            bakery: {
                options: {
                    compress: {
                        global_defs: {
                            "DEBUG": true
                        },
                        dead_code: true
                    },
                    mangle: true
                },
                files: {'js/everything.min.js': [
                        'bower_components/angular/angular.js',
                        'bower_components/angular-new-router/dist/router.es5.js',
                        'bower_components/angular-aria/angular-aria.js',
                        'bower_components/angular-animate/angular-animate.js',
                        'bower_components/angular-material/angular-material.js',
                        'js/index.js',
                        'js/partials.js',
                        'components/**/*.js',
                    ]
                }
            }
        },
        watch: {
            styles: {
                files: ['less/*.less'], // which files to watch
                tasks: ['less:bakery'],
                options: {
                    nospawn: true
                }
            },
            js: {
                files: ['js/index.js', 'components/**/*.js'],
                tasks: ['uglify:bakery'],
                options: {
                    nospawn: true
                }
            },
            html: {
                files: ['components/**/*.js'],
                tasks: ['ngtemplates:bakery', 'uglify:bakery'],
                options: {
                    nospawn: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect', 'watch']);

    grunt.registerTask('pull_build', ['gitpull:bakery', 'less:bakery', 'ngtemplates:bakery', 'uglify:bakery']);

    grunt.registerTask('build', ['less:bakery', 'ngtemplates:bakery', 'uglify:bakery']);

};
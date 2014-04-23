module.exports = function (grunt)
{
    'use strict';

    // Load Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Use 'config.rb' file to configure Compass.
        compass: {
            dev: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },

        // Copy JavaScript files from `bower-components`.
        copy: {
            core: {
                files: [
                    {expand: true, cwd: 'bower_components/html5shiv/dist/', src: ['html5shiv.js'], dest: 'js/'}
                ]
            }
        },

        // Minified versions of CSS files within `css/`.
        cssmin: {
            main: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
            }
        },

        // Check code quality of Gruntfile.js using JSHint.
        jshint: {
            files: ['Gruntfile.js'],
            options: {
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                es3: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                noarg: true,
                noempty: true,
                nonew: true,
                quotmark: 'single',
                undef: true,
                unused: true,
                strict: true,
                trailing: true,
                browser: true,
                globals: {
                    module: true
                }
            }
        },

        // Directories watched and tasks performed by invoking `grunt watch`.
        watch: {
            sass: {
                files: 'sass/**',
                tasks: ['sass']
            }
        }

    });

    // Register tasks.
    grunt.registerTask('build', ['sass', 'copy:core']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('sass', ['compass', 'cssmin']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('travis', ['jshint', 'compass']);
};

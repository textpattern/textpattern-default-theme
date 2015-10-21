module.exports = function (grunt)
{
    'use strict';

    // Load Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    //grunt.loadNpmTasks('grunt-scss-lint');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
                    module: true,
                    require: true
                }
            }
        },

        // Sass configuration.
        sass: {
            options: {
                includePaths: require('bourbon').includePaths
            },
            dist: {
                options: {
                    outputStyle: 'expanded', // outputStyle = expanded, nested, compact or compressed.
                    sourceMap: true
                },
                files: {
                    'css/*.css': 'sass/*.scss'
                }
            }
        },

        // Validate Sass files via scss-lint.
        //scsslint: {
        //    all: ['sass/**/*.scss'],
        //    options: {
        //        bundleExec: true,
        //        colorizeOutput: false,
        //        config: '.scss-lint.yml',
        //        force: true,
        //        reporterOutput: 'scss-lint-report.xml'
        //    }
        //},

        // Directories watched and tasks performed by invoking `grunt watch`.
        watch: {
            sass: {
                files: 'sass/**',
                tasks: ['sass', 'cssmin']
            }
        }

    });

    // Register tasks.
    grunt.registerTask('build', ['sass', 'cssmin']); // TODO: add 'sass-lint' before 'sass'
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('travis', ['jshint', 'sass']);
};

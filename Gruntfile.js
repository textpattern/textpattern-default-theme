module.exports = function (grunt)
{
    'use strict';

    // Load Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-sass-lint');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            main: {
                // Copy files from `src/` to `dist/`.
                files: [
                    {expand: true, src: ['forms/*', 'pages/*'], dest: 'dist/', filter: 'isFile'}
                ]
            }
        },

        // Minified versions of CSS files within `css/`.
        cssmin: {
            main: {
                expand: true,
                cwd: 'dist/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css/',
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
            main: {
                options: {
                    outputStyle: 'expanded', // outputStyle = expanded, nested, compact or compressed.
                    sourceMap: false
                },
                files: {
                    'dist/css/default.css': 'sass/default.scss'
                }
            }
        },

        // Validate Sass files via sass-lint.
        sasslint: {
            options: {
                configFile: '.sass-lint.yml',
            },
            target: ['sass/**/*.scss']
        },

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
    grunt.registerTask('build', ['sasslint', 'sass', 'cssmin', 'copy']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('travis', ['jshint', 'sass']);
};

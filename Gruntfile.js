module.exports = function (grunt)
{
    'use strict';

    // Load all Grunt tasks.
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Set up paths.
        paths: {
            src: {
                sass: 'src/sass/',
                formsTemplates: 'forms/',
                pagesTemplates: 'pages/'
            },
            dest: {
                dist: 'dist/',
                css: 'dist/styles/'
            }
        },

        // Clean distribution directory to start afresh.
        clean: ['<%= paths.dest.dist %>'],

        // Run some tasks in parallel to speed up the build process.
        concurrent: {
            dist: [
                'css',
                'copy',
                'devUpdate'
            ]
        },

        // Copy Textpattern templates to distribution directory.
        copy: {
            formsTemplates: {
                expand: true,
                cwd: 'src/',
                src: '<%= paths.src.formsTemplates %>**/*.txp',
                dest: '<%= paths.dest.dist %>',
                filter: 'isFile'
            },
            pagesTemplates: {
                expand: true,
                cwd: 'src/',
                src: '<%= paths.src.pagesTemplates %>**/*.txp',
                dest: '<%= paths.dest.dist %>',
                filter: 'isFile'
            }
        },

        // Report on any available updates for dependencies.
        devUpdate: {
            main: {
                options: {
                    updateType: 'report',
                    reportUpdated: false, // Don't report up-to-date packages.
                    packages: {
                        dependencies: true,
                        devDependencies: true
                    }
                }
            }
        },

        // Check code quality of Gruntfile.js using JSHint.
        jshint: {
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
            },
            files: 'Gruntfile.js'
        },

        // Add vendor prefixed styles and other post-processing transformations.
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: 'last 2 versions'
                    })
                ]
            },
            files: {
                expand: true,
                cwd: '<%= paths.dest.css %>',
                src: ['*.css', '!*.min.css'],
                dest: '<%= paths.dest.css %>'
            }
        },

        // Sass configuration.
        sass: {
            options: {
                outputStyle: 'expanded', // outputStyle = expanded, nested, compact or compressed.
                sourceMap: false
            },
            dist: {
                files: {
                    '<%= paths.dest.css %>default.css': '<%= paths.src.sass %>default.scss'
                }
            }
        },

        // Validate Sass files via sass-lint.
        sasslint: {
            options: {
                configFile: '.sass-lint.yml'
            },
            target: ['<%= paths.src.sass %>**/*.scss']
        },

        // Directories watched and tasks performed by invoking `grunt watch`.
        watch: {
            sass: {
                files: '<%= paths.src.sass %>**/*.scss',
                tasks: 'css'
            },
            formsTemplates: {
                files: '<%= paths.src.formsTemplates %>**/*.txp',
                tasks: 'copy:formsTemplates'
            },
            pagesTemplates: {
                files: '<%= paths.src.pagesTemplates %>**/*.txp',
                tasks: 'copy:pagesTemplates'
            }
        }

    });

    // Register tasks.
    grunt.registerTask('build', ['clean', 'concurrent']);
    grunt.registerTask('css', ['sasslint', 'sass', 'postcss']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('travis', ['jshint', 'build']);
};

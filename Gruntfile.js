module.exports = function (grunt)
{
    'use strict';

    // Load Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-sass-lint');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Empty `dist` directory to start afresh.
        clean: ['dist/'],

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
                cwd: 'dist/styles/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/styles/',
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

        // Add vendor prefixed styles and other post-processing transformations.
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: [
                            'last 2 versions'
                        ]
                    })
                ]
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/styles/',
                        src: ['*.css', '!*.min.css'],
                        dest: 'dist/styles/'
                    }
                ]
            }
        },

        // Sass configuration.
        sass: {
            main: {
                options: {
                    outputStyle: 'expanded', // outputStyle = expanded, nested, compact or compressed.
                    sourceMap: false
                },
                files: {
                    'dist/styles/default.css': 'sass/default.scss'
                }
            }
        },

        // Validate Sass files via sass-lint.
        sasslint: {
            options: {
                configFile: '.sass-lint.yml'
            },
            target: ['sass/**/*.scss']
        },

        // Directories watched and tasks performed by invoking `grunt watch`.
        watch: {
            sass: {
                files: 'sass/**',
                tasks: ['sass', 'cssmin']
            }
        }

    });

    // Register tasks.
    grunt.registerTask('build', ['clean', 'sasslint', 'sass', 'postcss', 'cssmin', 'copy']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('travis', ['jshint', 'build']);
};

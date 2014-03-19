module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [
                // includes files within path
                // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
                // includes files within path and its sub-directories
                {
                    expand: true,
                    src: ['bower_components/**/*.js'],
                    dest: 'app/views/assets/js/libs'
                },
                // makes all src relative to cwd
                //{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
                // flattens results to a single level
                //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'}
                ]
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'app.tar'
                },
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['**'],
                    dest: 'app/'
                }, ]
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['app/views/assets/js/libs/jquery-1.9.1.min.js', 'app/views/assets/js/libs/jquery-ui-1.10.0.custom.min.js', 'app/views/assets/js/libs/bootstrap.min.js','app/views/assets/js/demo/signin.js'],
                dest: 'app/views/assets/js/login.js',
            },
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "app/",
                    mainConfigFile: "app/config/config.js",
                    out: "app/views/assets/js/main.js", 
                    optimize: 'none'
                  
                }
            }
        },
        jshint: {
            options: {
                scripturl: true,
                eqnull: true
            },
            // TODO: how to jshint the files with JSX?
            app: ['app/*.js'],
            other: ['Gruntfile.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.registerTask('default', ['jshint', 'cssmin']);
    grunt.registerTask('com', ['compress']);
    grunt.registerTask('default', ['copy','requirejs']);

};
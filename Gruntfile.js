module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            options: {
                transform: [require('grunt-react').browserify]
            },
            app: {
                src: 'app/main.js',
                dest: 'app/public/js/output.js'
            }
        },
        cssmin: {
            minify: {
                src: 'views/assets/css/output.css',
                dest: 'views/assets/css/output.min.css'
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'app.tar'
                },
                files: [{
                    src: ['app/*','views/**/*','views/*','models/*','config/*'],
                    dest: 'dist/',
                    filter: 'isFile'
                }, // includes files in path
                {
                    src: ['views/**'],
                    dest: 'app/'
                }, // includes files in path and its subdirs
                {
                    expand: true,
                    cwd: 'app/',
                    src: ['**'],
                    dest: 'app/'
                }
                ]
            }
        },
        concat: {
            css: {
                src: ['views/assets/css/*'],
                dest: 'views/assets/css/combined.css'
            },
            /*   js: {
                src: ['js/*'],
                dest: 'combined.js'
            }*/
        },
        jshint: {
            options: {
                scripturl: true,
                eqnull: true
            },
            // TODO: how to jshint the files with JSX?
            app: ['app/*.js'],
            other: ['Gruntfile.js']
        },
        bower: {
            install: {
                //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
            }
        },
        less: {
            development: {
                options: {
                    paths: ["/views/assets/css"]
                },
                files: {
                    "app/public/css/main.css": "app/less/main.less"
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.registerTask('default', ['jshint', 'cssmin']);
    grunt.registerTask('com', ['jshint', 'compress']);
};
module.exports = function (grunt) {
    grunt.initConfig({
       
        compress: {
            main: {
                options: {
                    archive: 'app.tar'
                },
                files: [
                {expand: true, cwd: 'app/', src: ['**'], dest: 'app/'},
                ]
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
   
    
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.registerTask('default', ['jshint', 'cssmin']);
    grunt.registerTask('com', ['jshint', 'compress']);
};
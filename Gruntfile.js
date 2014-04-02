var crypto = require('crypto');
var fs = require('fs');

function createFileSha(filenane) {
	var sha = crypto.createHash('sha1');
	return sha.update(fs.readFileSync(filenane));
}

module.exports = function(grunt) {
	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					baseUrl: "public/js/",
					mainConfigFile: "public/js/config/config.js",
					out: "public/build/main.js",
                    optimize: 'none'
				}
			},
			css: {
				options: {
					baseUrl: 'public/css',
					cssIn: "public/css/main.css",
					out: "public/build/main.css",
					cssImportIgnore: null,
					optimizeCss: 'default'
				}
			}
		},
         compress: {
            main: {
                options: {
                    archive: 'app.tar'
                },
                files: [{
                    expand: true,
                   
                    src: ['**'],
                    dest: '/'
                },

                {src: ['views/**'], dest: '/'},
                {src: ['public/components/**'], dest: '/'},
                {src: ['source/**'], dest: '/'},
                {src: ['tools/**'], dest: '/'}  //


                 ]
            }
        },

		hashres: {
			options: {
				fileNameFormat: '${name}-${hash}.${ext}'
			},
			prod: {
				src: [
					'public/build/main.js',
					'public/build/main.css'
				],
				dest: { src: 'tools/client/index.js', out: 'source/client/index.js' }
			}
		}

	});

	// Laoded tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-contrib-compress');

	// Default task.
	//grunt.registerTask('default', ['requirejs', 'hashres']);
      grunt.registerTask('default', ['requirejs']);
    grunt.registerTask('com', ['compress']);
};

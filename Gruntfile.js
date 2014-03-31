var crypto = require('crypto');
var fs = require('fs');

function createFileSha(filenane) {
	var sha = crypto.createHash('sha1');
	return sha.update(fs.readFileSync(filenane));
}

module.exports = function(grunt) {
	grunt.initConfig({
		meta: {
			version: '0.0.5'
		},

		jshint: {
			options: {
				"asi" : false,
				"bitwise" : false,
				"boss" : false,
				"curly" : false,
				"debug": false,
				"devel": false,
				"eqeqeq": false,
				"evil": false,
				"expr": false,
				"forin": false,
				"immed": false,
				"latedef" : false,
				"laxbreak": false,
				"multistr": true,
				"newcap":  false,
				"noarg": false,
				"node" : false,
				"browser": false,
				"noempty": false,
				"nonew": false,
				"onevar": false,
				"plusplus": false,
				"regexp": false,
				"strict": false,
				"sub": false,
				"trailing" : false,
				"undef": false,
				globals: {
					jQuery: true,
					Backbone: true,
					_: true,
					$: true,
					require: true,
					define: true
				}
			},
			js: ['public/js/**/*.js', 'source/**/*.js']
		},

		requirejs: {
			js: {
				options: {
					baseUrl: "public/js",
					mainConfigFile: "public/js/main.js",
					name: 'main',
					out: "public/build/main.js"
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
                    cwd: 'public/',
                    src: ['**'],
                    dest: '/public/'
                },

                {src: ['views/**'], dest: '/'},
                {src: ['source/**'], dest: '/'} //


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
    grunt.registerTask('com', ['compress']);
};

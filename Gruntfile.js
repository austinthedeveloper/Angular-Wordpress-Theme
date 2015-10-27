module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'assets/js/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            js: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint', 'uglify']
            },
            compass: {
                files: ['assets/**/*.{scss,sass}'],
                tasks: ['compass:dev']
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: ['assets/scss'],
                    cssDir: ['build/css'],
                    environment: 'development'
                }
            },
        },
        uglify: {
            all: {
                files: {
                    'build/js/main.js': ['assets/js/**/*.js']
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['compass:dev' , 'uglify' , 'watch']);
    grunt.registerTask('watch', ['watch']);

};
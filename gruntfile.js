module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks("grunt-tsc");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        typescript: {
            base: {
                src: ['app/**/*.ts'],
                dest: 'js/',
                options: {
                    module: 'system',
                    target: 'es5'
                }
            }
        },
        watch: {
            files: '**/*.ts',
            tasks: ['typescript']
        },
        open: {
            dev: {
                path: 'http://localhost:3000/index.html'
            }
        }
    });
 
    grunt.registerTask('default', ['connect', 'open', 'watch']);
 
}
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // https://github.com/gruntjs/grunt-contrib-connect
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: './'
                }
            }
        },
        // https://www.npmjs.com/package/grunt-ts
        ts: {
            base: {
                src: ['app/src/**/*.ts', 'typings'],
                dest: 'app/dist',
                options: {
                module: 'system', 
                moduleResolution: 'node',
                target: 'es5',
                experimentalDecorators: true,
                emitDecoratorMetadata: true,
                noImplicitAny: false
                }
            }
        },
        watch: {
            files: ['app/src/**/*.ts', '**/*.html', '**/*.css'],
            tasks: ['ts']
        },
        open: {
            dev: {
                path: 'http://localhost:3000/index.html'
            }
        }
    });
 
    grunt.registerTask('default', ['ts', 'connect', 'open', 'watch']);
 
}
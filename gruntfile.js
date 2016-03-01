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
                    port: 3000,
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
        tsc: {
            options: {
                // global options 
                "target": "es5",
                "module": "system",
                "moduleResolution": "node",
                "sourceMap": true,
                "emitDecoratorMetadata": true,
                "experimentalDecorators": true,
                "removeComments": false,
                "noImplicitAny": false
            },
            task_name: {
                options: {
                    // task options 
                },
                "exclude": [
                    "typings/browser.d.ts",
                    "typings/browser",
                    "node_modules"
                ]
            }
        },
        watch: {
            files: '**/*.ts',
            tasks: ['tsc']
        },
        open: {
            dev: {
                path: 'http://localhost:3000/index.html'
            }
        }
    });
 
    grunt.registerTask('default', ['connect', 'open', 'watch']);
 
}
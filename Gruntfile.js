module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {      
            unit: {                
                configFile: 'karma.conf.js'            
            },
             
            watch: {
                tests: {
                    files: ['test/*.js'],
                    tasks: ['karma'],

                },
            },
        },   

    });

    grunt.registerTask('watch', ['karma']);

};

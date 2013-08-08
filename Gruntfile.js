module.exports = function(grunt) {
    initialize()
    loadTasks()
    describeGoals()


    function initialize() {
        var config = require('./Gruntconfig.js')
        grunt.initConfig(config)
    }

    function loadTasks() {
        grunt.loadNpmTasks('grunt-cucumber')
        grunt.loadNpmTasks('grunt-devserver')
        grunt.loadNpmTasks('grunt-contrib-jshint')
    }

    function describeGoals() {
        grunt.registerTask('default', ['jshint', 'test'])
        grunt.registerTask('test', ['cucumberjs'])
        grunt.registerTask('lint', ['jshint'])
    }
}
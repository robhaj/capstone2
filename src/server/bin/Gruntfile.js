module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.JSON'),
    concat: {
      src: [],
      dest: 'x'
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['server/server-spec/server-specs.js']
      }
    },
    uglify: {
      build: {
        src: '',
        dest: ''
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('test', [
      'mochaTest'
    ]);

  grunt.registerTask('build', [
      'concat',
      'uglify'
    ]);

  grunt.registerTask('deploy', [
      'test',
      'build'
    ]);

};

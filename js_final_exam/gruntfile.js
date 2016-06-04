module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: 'js/*.js',
        dest: 'js/dist/script.js'
      }
    },
    uglify: {
      js: {
        src: 'js/dist/script.js',
        dest: 'js/dist/script.min.js'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css',
          src: 'style.scss',
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      css: {
        src: 'css/style.css',
        dest: 'css/style.css'
      }
    },
    watch: {
      scss: {
        files: ['css/*.scss'],
        tasks: ['sass'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);

};

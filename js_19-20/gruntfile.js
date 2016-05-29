module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: 'js/*.js',
        dest: 'js/dist/script.min.js'
      },
      scss: {
        src: 'css/*.scss',
        dest: 'css/dist/main.scss'
      }
    },
    uglify: {
      js: {
        src: 'js/dist/script.min.js',
        dest: 'js/dist/script.min.js'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css/dist',
          src: ['main.scss'],
          dest: 'css/dist',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      css: {
        src: 'css/dist/main.css',
        dest: 'css/dist/main.css'
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['css/*.scss'],
        tasks: ['concat', 'sass'],
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

module.exports = function (grunt) {
  grunt.initConfig({
    requirejs: {
      build: {
        options: {
          appDir                  : 'src/',
          baseUrl                 : 'javascripts',
          dir                     : 'build/',
          mainConfigFile          : 'src/javascripts/main.js',
          modules                 : [{ name: 'main' }],
          optimizeCss             : 'standard',
          preserveLicenseComments : false,
          removeCombined          : true
        }
      }
    },
    htmlmin: {
      build: {
        options: {
          removeComments     : true,
          collapseWhitespace : true
        },
        files: [{
          expand : true,
          src    : 'build/**/*.html'
        }]
      }
    },
    imagemin: {
      build: {
        files: [{
          expand : true,
          src    : 'build/**/*.png'
        }, {
          expand : true,
          src    : 'build/**/*.jpg'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('cleanBuild', 'Delete build.txt', function (){
    grunt.file.delete('build/build.txt');
  });

  grunt.registerTask('default', ['requirejs', 'htmlmin', 'imagemin', 'cleanBuild']);
};
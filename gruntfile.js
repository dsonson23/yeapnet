module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/pd.yeap.js',
        dest: 'js/pd.yeap.min.js'
      },
      dev: {
        options: {
          beautify: true,
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
         
        src: ['src/js/jquery.js','src/js/jquery.easing.1.3.js','src/js/typeit.js','src/js/bootstrap.js','src/js/pd.yeap.js'],
        dest: 'js/pd.yeap.js'
           
    }
  },
      sass: {
         dev: {
          options: {
             outputStyle: 'expanded'
          },
          files: {
            'css/pd.yeap.css' : 'src/css/bootstrap.css'          
          }

         },
         build: {
          options: {
             outputStyle: 'compressed'
          },
          files: {
            'css/pd.yeap.min.css' : 'css/pd.yeap.css'
          }
         }
      },
    watch: {
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify:dev']
      },
      css: {
        files: ['src/css/*.css'],
        tasks: ['sass:dev']
      },
      html: {
        files: ['*.html'],
        tasks: ['uglify:dev']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify:dev','sass:dev']);
  grunt.registerTask('build', ['uglify:build','sass:build']);

};
module.exports = function(grunt) {
  grunt.initConfig({
    babel: {
      client: {
        options: {
          modules: 'ignore',
          stage: 1
        },
        files: [{
          cwd: 'src/client',
          expand: true,
          src: '**/*.js',
          dest: 'lib/client'
        }, {
          cwd: 'src',
          expand: true,
          src: 'common/**/*.js',
          dest: 'lib/client'
        }]
      },
      server: {
        options: {
          stage: 1
        },
        files: [{
          cwd: 'src/server',
          expand: true,
          src: '**/*.js',
          dest: 'lib/server'
        }, {
          cwd: 'src',
          expand: true,
          src: 'common/**/*.js',
          dest: 'lib/server'
        }]
      }
    },
    copy: {
      assets: {
        files: [{
          cwd: 'src/client',
          expand: true,
          src: ['**/*.html', '**/*.css'],
          dest: 'lib/client'
        }]
      },
      polyfill: {
        files: [{
          src: 'node_modules/babel/node_modules/babel-core/browser-polyfill.js',
          dest: 'lib/client/vendors/babel/browser-polyfill.js'
        }]
      }
    },
    watch: {
      js: {
        files: ['src/**/*.js'],
        tasks: ['babel']
      },
      assets: {
        files: ['src/**/*.html', 'src/**/*.css'],
        tasks: ['copy:assets']
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['babel', 'copy', 'watch']);
  grunt.registerTask('build', ['babel', 'copy']);
};

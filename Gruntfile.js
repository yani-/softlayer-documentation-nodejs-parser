/**
 * SoftLayer Documentation Node.js Parser
 *
 * Copyright (c) 2013 Yani Iliev <yani@iliev.me>
 * Licensed under the MIT license.
 *
 * @author    Yani Iliev <yani@iliev.me>
 * @copyright 2013 Yani Iliev
 * @license   https://github.com/yani-/blog/master/softlayer-documentation-nodejs-parser
 * @version   GIT: 1.0.0
 * @link      https://github.com/yani-/softlayer-documentation-nodejs-parser
 */
'use strict';

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig(
    {
      pkg: grunt.file.readJSON('package.json'),
      // JSHINT
      jshint: {
        // define the files to lint
        files: [
          'Gruntfile.js',
          'test/**/*.js',
          'lib/**/*.js'
        ],
        // configure JSHint (documented at http://www.jshint.com/docs/)
        options: {
          jshintrc: '.jshintrc.json'
        }
      },
      // MOCHA
      simplemocha: {
        options: {
          timeout:     3000,
          ignoreLeaks: false,
          ui:          'tdd',
          reporter:    'dot'
        },
        all: {
          src: ['test/**/*.js']
        }
      },
      // CONCURRENT
      concurrent: {
        lintAndTest: ['jshint', 'simplemocha']
      }
    }
  );

  // loading jshint
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // loading mocha
  grunt.loadNpmTasks('grunt-simple-mocha');

  // loading concurrent
  grunt.loadNpmTasks('grunt-concurrent');

  // default task lints and tests the lib
  grunt.registerTask(
    'default', ['concurrent:lintAndTest']
  );
};

/**
 * SoftLayer Documentation Node.js Parser
 *
 * Copyright (c) 2013 Yani Iliev <yani@iliev.me>
 * Licensed under the MIT license.
 *
 * @author    Yani Iliev <yani@iliev.me>
 * @copyright 2013 Yani Iliev
 * @license
 * https://github.com/yani-/blog/master/softlayer-documentation-nodejs-parser
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
          'lib/**/*.js'
        ],
        // configure JSHint (documented at http://www.jshint.com/docs/)
        options: {
          jshintrc: '.jshintrc.json'
        }
      }
    }
  );

  // loading jshint
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // default task lints the lib
  grunt.registerTask('default', 'jshint');
};

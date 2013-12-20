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

var assert   = require('chai').assert,
    slClient = null;

suite('Application\'s', function () {
  setup(function () {
    slClient = require(__dirname + '/../index.js')();
  });

  /**
   * Application.prototype
   */
  suite('Constructor', function () {
  });

});

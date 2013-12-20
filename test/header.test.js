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

var assert = require('chai').assert,
    Header = require(__dirname + '/../lib/header'),
    header = null,
    name   = null;

suite('Header\'s', function () {
  setup(function () {
    name   = 'testHeaderName';
    header = new Header(name);
  });

  /**
   * Header.prototype
   */
  suite('Constructor', function () {
    test('should set properties', function () {
      assert.equal(header.name, name);
    });
  });

});

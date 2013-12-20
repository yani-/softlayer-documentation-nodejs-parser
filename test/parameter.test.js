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

var assert      = require('chai').assert,
    Parameter   = require(__dirname + '/../lib/parameter'),
    parameter   = null,
    name        = null,
    type        = null,
    description = null;

suite('Parameter\'s', function () {
  setup(function () {
    name        = 'testParameterName';
    type        = 'boolean';
    description = 'Lorem Ipsum is simply dummy text';
    parameter   = new Parameter(name, type, description);
  });

  /**
   * Parameter.prototype
   */
  suite('Constructor', function () {
    test('should set properties', function () {
      assert.equal(parameter.name, name);
      assert.equal(parameter.type, type);
      assert.equal(parameter.description, description);
    });
  });

});

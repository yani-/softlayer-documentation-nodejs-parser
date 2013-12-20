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

var assert           = require('chai').assert,
    Method           = require(__dirname + '/../lib/method'),
    Header           = require(__dirname + '/../lib/header'),
    Parameter        = require(__dirname + '/../lib/parameter'),
    method           = null,
    name             = null,
    shortDescription = null,
    overview         = null,
    returnValue      = null,
    requiredHeaders  = [],
    optionalHeaders  = [],
    parameters       = [];

suite('Method\'s', function () {
  setup(function () {
    name             = 'testHeaderName';
    shortDescription = 'Lorem Ipsum is simply dummy text';

    overview         = 'Lorem Ipsum is simply dummy text of the printing and ' +
                       'typesetting industry. Lorem Ipsum has been the ' +
                       'industry\'s standard dummy text ever since the 1500s,' +
                       ' when an unknown printer took a galley of type and ' +
                       'scrambled it to make a type specimen book. It has ' +
                       'survived not only five centuries, but also the leap ' +
                       'into electronic typesetting, remaining essentially ' +
                       'unchanged';

    returnValue      = 'an array of Accounts';

    requiredHeaders.push(new Header('This is header one name'));
    requiredHeaders.push(new Header('This is header two name'));

    optionalHeaders.push(new Header('This is header three name'));
    optionalHeaders.push(new Header('This is header four name'));

    parameters.push(new Parameter('nameOne', 'typeOne', 'descriptionOne'));
    parameters.push(new Parameter('nameTwo', 'typeTwo', 'descriptionTwo'));

    method = new Method(name, shortDescription, overview, returnValue);

    for (var i in requiredHeaders) {
      if (requiredHeaders.hasOwnProperty(i)) {
        method.requiredHeaders = requiredHeaders[i];
      }
    }

    for (i in optionalHeaders) {
      if (optionalHeaders.hasOwnProperty(i)) {
        method.optionalHeaders = optionalHeaders[i];
      }
    }

    for (i in parameters) {
      if (parameters.hasOwnProperty(i)) {
        method.parameters = parameters[i];
      }
    }
  });

  /**
   * Method.prototype
   */
  suite('Constructor', function () {
    test('should set properties', function () {
      assert.equal(method.name, name);
      assert.equal(method.shortDescription, shortDescription);
      assert.equal(method.overview, overview);
      assert.equal(method.returnValue, returnValue);

      for (var i in method.requiredHeaders) {
        if (method.requiredHeaders.hasOwnProperty(i)) {
          assert.deepEqual(method.requiredHeaders[i], requiredHeaders[i]);
        }
      }
      for (i in method.optionalHeaders) {
        if (method.optionalHeaders.hasOwnProperty(i)) {
          assert.deepEqual(method.optionalHeaders[i], optionalHeaders[i]);
        }
      }
      for (i in method.parameters) {
        if (method.parameters.hasOwnProperty(i)) {
          assert.deepEqual(method.parameters[i], parameters[i]);
        }
      }
    });
  });

});

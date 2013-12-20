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

var assert   = require('chai').assert,
    Service  = require(__dirname + '/../lib/service'),
    Method   = require(__dirname + '/../lib/method'),
    name     = null,
    overview = null,
    methods  = [],
    service  = null;

suite('Service\'s', function () {
  setup(function () {
    name     = 'Account';
    overview = 'Every SoftLayer customer has an account which is defined in ' +
               'the SoftLayer_Account service';
    methods.push(new Method(
      'getAddresses',
      'Retrieve all the address(es) that belong to an account.',
      'Retrieve all the address(es) that belong to an account.',
      'an array of SoftLayer_Account_Address'
    ));
    methods.push(new Method(
      'getAttributes',
      'Retrieve the account attribute values for a SoftLayer customer account.',
      'Retrieve the account attribute values for a SoftLayer customer account.',
      'an array of SoftLayer_Account_Attribute'
    ));

    service = new Service(name, overview);

    for (var i in methods) {
      if (methods.hasOwnProperty(i)) {
        service.methods = methods[i];
      }
    }
  });

  /**
   * Service.prototype
   */
  suite('Constructor', function () {
    test('should set properties', function () {
      assert.equal(service.name, name);
      assert.equal(service.overview, overview);

      for (var i in service.methods) {
        if (service.methods.hasOwnProperty[i]) {
          assert.deepEqual(service.methods[i], methods[i]);
        }
      }

    });
  });

});

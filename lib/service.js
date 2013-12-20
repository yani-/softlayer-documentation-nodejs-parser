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

/**
 * Service constructor
 *
 * @return {Object} The service object
 */
var Service = function (name, overview) {
	this.name     = name;
	this.overview = overview;
};

/**
 * Define setter/getter for service name
 */
Object.defineProperty(
  Service.prototype,
  'name',
  {
    enumerable: true,

    set: function (value) {
      this._name = value;
      return this;
    },
    get: function () {
      return this._name;
    }
  }
);

/**
 * Define setter/getter for service overview
 */
Object.defineProperty(
  Service.prototype,
  'overview',
  {
    enumerable: true,

    set: function (value) {
      this._overview = value;
      return this;
    },
    get: function () {
      return this._overview;
    }
  }
);

/**
 * Define setter/getter for service methods
 */
Object.defineProperty(
  Service.prototype,
  'methods',
  {
    enumerable: true,

    set: function (value) {
      this._methods = this._methods || [];
      this._methods.push(value);
      return this;
    },
    get: function () {
      return this._methods;
    }
  }
);

module.exports = Service;

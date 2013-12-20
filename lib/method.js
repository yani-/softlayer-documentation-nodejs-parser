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
 * Method constructor
 *
 * @return {Object} The method object
 */
var Method = function (name, shortDescription, overview, returnValue) {
  this.name             = name;
  this.shortDescription = shortDescription;
  this.overview         = overview;
  this.returnValue      = returnValue;
};

/**
 * Define setter/getter for method name
 */
Object.defineProperty(
  Method.prototype,
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
 * Define setter/getter for method shortDescription
 */
Object.defineProperty(
  Method.prototype,
  'shortDescription',
  {
    enumerable: true,

    set: function (value) {
      this._shortDescription = value;
      return this;
    },
    get: function () {
      return this._shortDescription;
    }
  }
);

/**
 * Define setter/getter for method overview
 */
Object.defineProperty(
  Method.prototype,
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
 * Define setter/getter for method parameters
 */
Object.defineProperty(
  Method.prototype,
  'parameters',
  {
    enumerable: true,

    set: function (value) {
      this._parameters = this._parameters || [];
      this._parameters.push(value);
      return this;
    },
    get: function () {
      return this._parameters;
    }
  }
);

/**
 * Define setter/getter for method optionalHeaders
 */
Object.defineProperty(
  Method.prototype,
  'optionalHeaders',
  {
    enumerable: true,

    set: function (value) {
      this._optionalHeaders = this._optionalHeaders || [];
      this._optionalHeaders.push(value);
      return this;
    },
    get: function () {
      return this._optionalHeaders;
    }
  }
);

/**
 * Define setter/getter for method requiredHeaders
 */
Object.defineProperty(
  Method.prototype,
  'requiredHeaders',
  {
    enumerable: true,

    set: function (value) {
      this._requiredHeaders = this._requiredHeaders || [];
      this._requiredHeaders.push(value);
      return this;
    },
    get: function () {
      return this._requiredHeaders;
    }
  }
);

/**
 * Define setter/getter for method returnValue
 */
Object.defineProperty(
  Method.prototype,
  'returnValue',
  {
    enumerable: true,

    set: function (value) {
      this._returnValue = value;
      return this;
    },
    get: function () {
      return this._returnValue;
    }
  }
);

module.exports = Method;

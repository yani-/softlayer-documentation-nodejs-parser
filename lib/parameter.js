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

var cheerio = require('cheerio');

/**
 * Parameter constructor
 *
 * @return {Object} The parameter object
 */
var Parameter = function (name, type, description) {
  this.name        = name;
  this.type        = type;
  this.description = description;
};

/**
 * Define setter/getter for parameter name
 */
Object.defineProperty(
  Parameter.prototype,
  'name',
  {
    enumerable: true,

    set: function (value) {
      var $      = cheerio.load(value);
      this._name = $(value).find('td.views-field-title').text();
    },
    get: function () {
      return this._name;
    }
  }
);

/**
 * Define setter/getter for parameter type
 */
Object.defineProperty(
  Parameter.prototype,
  'type',
  {
    enumerable: true,

    set: function (value) {
      var $      = cheerio.load(value);
      this._type = $(value).find('td.views-field-field-type-value').text();
    },
    get: function () {
      return this._type;
    }
  }
);

/**
 * Define setter/getter for parameter description
 */
Object.defineProperty(
  Parameter.prototype,
  'description',
  {
    enumerable: true,

    set: function (value) {
      var $             = cheerio.load(value);
      this._description = $(value).find('td.views-field-body').text();
    },
    get: function () {
      return this._description;
    }
  }
);

module.exports = Parameter;

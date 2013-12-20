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
 * Header constructor
 *
 * @return {Object} The method object
 */
var Header = function (name) {
  this.name = name;
};

/**
 * Define setter/getter for method name
 */
Object.defineProperty(
  Header.prototype,
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

module.exports = Header;

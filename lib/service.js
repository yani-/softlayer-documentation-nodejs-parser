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

var cheerio = require('cheerio'),
    Method  = require(__dirname + '/method');

/**
 * Service constructor
 *
 * @return {Object} The service object
 */
var Service = function (content) {
	this.name = content;
  this.href = content;
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
      var $ = cheerio.load(value);
      this._name = $(value).text();
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
      var $ = cheerio.load(value);
      this._overview = $(
        'div.panel-pane >div.pane-content > div.view > div.view-content > ' +
        'div.views-row > div.views-field-body > div.field-content'
      ).text();
    },
    get: function () {
      return this._overview;
    }
  }
);

/**
 * Define setter/getter for service href
 */
Object.defineProperty(
  Service.prototype,
  'href',
  {
    enumerable: true,

    set: function (value) {
      var $ = cheerio.load(value);
      this._href = 'http://sldn.softlayer.com' + $(value).attr('href');
    },
    get: function () {
      return this._href;
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
      var $    = cheerio.load(value),
          self = this;
      $(
        'div.pane-method-panel-pane-1 > div.pane-content > ' +
        'div.view > div.view-content > div.views-row'
      ).map(
        function (i, v) {
          self._methods.push(new Method(v));
        }
      );
    },
    get: function () {
      return this._methods;
    }
  }
);

module.exports = Service;

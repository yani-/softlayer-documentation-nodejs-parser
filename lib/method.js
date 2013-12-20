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

var cheerio   = require('cheerio'),
    Parameter = require(__dirname + '/parameter'),
    Header    = require(__dirname + '/header');

/**
 * Method constructor
 *
 * @return {Object} The method object
 */
var Method = function (content) {
  this.name             = content;
  this.shortDescription = content;
  this.href             = content;
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
      var $ = cheerio.load(value);
      this._name = $(value).find(
        'div.views-field-title > span.field-content > a'
      ).text();
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
      var $ = cheerio.load(value);
      this._shortDescription = $(value).find(
        'div.views-field-field-short-description-value > span'
      ).text();
    },
    get: function () {
      return this._shortDescription;
    }
  }
);

/**
 * Define setter/getter for method href
 */
Object.defineProperty(
  Method.prototype,
  'href',
  {
    enumerable: true,

    set: function (value) {
      var $ = cheerio.load(value);
      this._href = 'http://sldn.softlayer.com' + $(value).find(
        'div.views-field-title > span.field-content > a'
      ).attr('href');
    },
    get: function () {
      return this._href;
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
 * Define setter/getter for method parameters
 */
Object.defineProperty(
  Method.prototype,
  'parameters',
  {
    enumerable: true,

    set: function (value) {
      this._parameters = this._parameters || [];
      var $    = cheerio.load(value),
          self = this;
      $('div.view-Method > div.view-content > table > tbody > tr').map(
        function (i, v) {
          self._parameters.push(new Parameter(v));
        }
      );
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
      var $ = cheerio.load(value);
      var headers = $(
        'div.views-field-field-opt-headers-value > div.field-content > ' +
        'div.field-item'
      ).text().split(',');
      for (var i in headers) {
        if (headers.hasOwnProperty(i)) {
          this._optionalHeaders.push(new Header(headers[i]));
        }
      }
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
      var $ = cheerio.load(value);
      var headers = $(
        'div.views-field-field-req-headers-value > div.field-content'
      ).text().split(',');
      for (var i in headers) {
        if (headers.hasOwnProperty(i)) {
          this._requiredHeaders.push(new Header(headers[i]));
        }
      }
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
      var $ = cheerio.load(value);
      this._returnValue = $(
        'div.views-field-nothing > span.field-content > p'
      ).text();
    },
    get: function () {
      return this._returnValue;
    }
  }
);

module.exports = Method;

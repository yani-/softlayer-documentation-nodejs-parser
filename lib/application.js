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

var http      = require('http'),
    Emitter   = require('events').EventEmitter,
    cheerio   = require('cheerio'),
    Service   = require(__dirname + '/service'),
    Method    = require(__dirname + '/method'),
    Parameter = require(__dirname + '/parameter'),
    Header    = require(__dirname + '/header');

var getContent = function (url, cb) {
  http.get(url, function (res) {
    var data = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on('end', function () {
      cb(data);
    });
  }).on('error', function (e) {
    throw new Error(e.message);
  });
};

/**
 * Application constructor
 *
 * @return {Object} The application object
 */
var Application = function () {
  var self = this;

  self.on('error', function (err) {
    console.error(err);
  });
};

/**
 * Inherit from Emitter.prototype.
 */
Application.prototype = Emitter.prototype;

/**
 * Finds all services supported by SoftLayer and assigns them to _services var
 *
 * @return {void}
 */
Application.prototype.retrieveServices = function () {
  var self = this;

  getContent(
    'http://sldn.softlayer.com/reference/services/',
    function (content) {
      self.services = content.toString();
      self.retrieveServicesMethods();
    }
  );

};

Application.prototype.retrieveServicesMethods = function (current) {
  var self = this;
  current = current || 0;

  if (current !== 0) {
    console.dir(self.services[current-1]);
  }

  if (current === self.services.length) {
    // done
    console.log('DONE');
    self.emit('Parsing complete');
  } else {
    console.log('Retrieiving for ' + self.services[current].name);
    self.retrieveServiceMethods(self.services[current], current + 1);
  }
};

/**
 * Finds all methods for a SoftLayer API service
 *
 * @return {void}
 */
Application.prototype.retrieveServiceMethods = function (service, next) {
  var self = this;
  getContent(service.href, function (content) {
    service.overview = content.toString();
    service.methods  = content.toString();
    self.retrieveMethodsProperties(0, next);
  });
};

Application.prototype.retrieveMethodsProperties = function (current, next) {
  var self = this;
  current = current || 0;

  if (current === self.services[next-1].methods.length) {
    self.retrieveServicesMethods(next);
  } else {
    self.retrieveMethodProperties(
      self.services[next-1].methods[current],
      current + 1,
      next
    );
  }
};

/**
 * Finds the properties of a SoftLayer API service method
 *
 * @return {void}
 */
Application.prototype.retrieveMethodProperties = function (
  method,
  current,
  next
) {
  var self = this;
  console.log(method);
  getContent(method.href, function (content) {
    method.overview        = content.toString();
    method.parameters      = content.toString();
    method.optionalHeaders = content.toString();
    method.requiredHeaders = content.toString();
    method.returnValue     = content.toString();

    self.retrieveMethodsProperties(current, next);
  });
};

/**
 * Define setter/getter for api services
 */
Object.defineProperty(
  Application.prototype,
  'services',
  {
    enumerable: true,

    set: function (value) {
      this._services = this._services || [];

      var $    = cheerio.load(value),
          self = this;

      $('div.item-list > ul > li.views-row > div > span > a').map(
        function (i, v) {
          self._services.push(new Service(v));
        }
      );
    },
    get: function () {
      return this._services;
    }
  }
);

/**
 * Creates a new application object and passes variables to its constructor
 *
 * @return {Object}         Application object
 */
var createApplication = function () {
  return new Application();
};

module.exports = createApplication;

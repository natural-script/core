/**
 * Clarifai JavaScript SDK v2.2.0
 *
 * Last updated: Thu Jun 22 2017 17:17:21 GMT-0400 (EDT)
 *
 * Visit https://developer.clarifai.com
 *
 * Copyright (c) 2016-present, Clarifai, Inc.
 * All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 *
 * The source tree of this library can be found at
 *   https://github.com/Clarifai/clarifai-javascript
 */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

// rawAsap provides everything we need except exception management.
var rawAsap = require("./raw");
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/asap/browser-asap.js","/../node_modules/asap")
},{"./raw":2,"buffer":23,"pBGvAp":27}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/asap/browser-raw.js","/../node_modules/asap")
},{"buffer":23,"pBGvAp":27}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var domain; // The domain module is executed on demand
var hasSetImmediate = typeof setImmediate === "function";

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including network IO events in Node.js.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Avoids a function call
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory excaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

rawAsap.requestFlush = requestFlush;
function requestFlush() {
    // Ensure flushing is not bound to any domain.
    // It is not sufficient to exit the domain, because domains exist on a stack.
    // To execute code outside of any domain, the following dance is necessary.
    var parentDomain = process.domain;
    if (parentDomain) {
        if (!domain) {
            // Lazy execute the domain module.
            // Only employed if the user elects to use domains.
            domain = require("domain");
        }
        domain.active = process.domain = null;
    }

    // `setImmediate` is slower that `process.nextTick`, but `process.nextTick`
    // cannot handle recursion.
    // `requestFlush` will only be called recursively from `asap.js`, to resume
    // flushing after an error is thrown into a domain.
    // Conveniently, `setImmediate` was introduced in the same version
    // `process.nextTick` started throwing recursion errors.
    if (flushing && hasSetImmediate) {
        setImmediate(flush);
    } else {
        process.nextTick(flush);
    }

    if (parentDomain) {
        domain.active = process.domain = parentDomain;
    }
}

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/asap/raw.js","/../node_modules/asap")
},{"buffer":23,"domain":24,"pBGvAp":27}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
module.exports = require('./lib/axios');
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/index.js","/../node_modules/axios")
},{"./lib/axios":6,"buffer":23,"pBGvAp":27}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var utils = require('./../utils');
var buildURL = require('./../helpers/buildURL');
var parseHeaders = require('./../helpers/parseHeaders');
var transformData = require('./../helpers/transformData');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var btoa = (typeof window !== 'undefined' && window.btoa) || require('./../helpers/btoa');
var settle = require('../helpers/settle');

module.exports = function xhrAdapter(resolve, reject, config) {
  var requestData = config.data;
  var requestHeaders = config.headers;

  if (utils.isFormData(requestData)) {
    delete requestHeaders['Content-Type']; // Let the browser set it
  }

  var request = new XMLHttpRequest();
  var loadEvent = 'onreadystatechange';
  var xDomain = false;

  // For IE 8/9 CORS support
  // Only supports POST and GET calls and doesn't returns the response headers.
  // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
  if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
    request = new window.XDomainRequest();
    loadEvent = 'onload';
    xDomain = true;
    request.onprogress = function handleProgress() {};
    request.ontimeout = function handleTimeout() {};
  }

  // HTTP basic authentication
  if (config.auth) {
    var username = config.auth.username || '';
    var password = config.auth.password || '';
    requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
  }

  request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

  // Set the request timeout in MS
  request.timeout = config.timeout;

  // Listen for ready state
  request[loadEvent] = function handleLoad() {
    if (!request || (request.readyState !== 4 && !xDomain)) {
      return;
    }

    // The request errored out and we didn't get a response, this will be
    // handled by onerror instead
    if (request.status === 0) {
      return;
    }

    // Prepare the response
    var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
    var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
    var response = {
      data: transformData(
        responseData,
        responseHeaders,
        config.transformResponse
      ),
      // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
      status: request.status === 1223 ? 204 : request.status,
      statusText: request.status === 1223 ? 'No Content' : request.statusText,
      headers: responseHeaders,
      config: config,
      request: request
    };

    settle(resolve, reject, response);

    // Clean up request
    request = null;
  };

  // Handle low level network errors
  request.onerror = function handleError() {
    // Real errors are hidden from us by the browser
    // onerror should only fire if it's a network error
    reject(new Error('Network Error'));

    // Clean up request
    request = null;
  };

  // Handle timeout
  request.ontimeout = function handleTimeout() {
    var err = new Error('timeout of ' + config.timeout + 'ms exceeded');
    err.timeout = config.timeout;
    err.code = 'ECONNABORTED';
    reject(err);

    // Clean up request
    request = null;
  };

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.
  if (utils.isStandardBrowserEnv()) {
    var cookies = require('./../helpers/cookies');

    // Add xsrf header
    var xsrfValue = config.withCredentials || isURLSameOrigin(config.url) ?
        cookies.read(config.xsrfCookieName) :
        undefined;

    if (xsrfValue) {
      requestHeaders[config.xsrfHeaderName] = xsrfValue;
    }
  }

  // Add headers to the request
  if ('setRequestHeader' in request) {
    utils.forEach(requestHeaders, function setRequestHeader(val, key) {
      if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
        // Remove Content-Type if data is undefined
        delete requestHeaders[key];
      } else {
        // Otherwise add header to the request
        request.setRequestHeader(key, val);
      }
    });
  }

  // Add withCredentials to request if needed
  if (config.withCredentials) {
    request.withCredentials = true;
  }

  // Add responseType to request if needed
  if (config.responseType) {
    try {
      request.responseType = config.responseType;
    } catch (e) {
      if (request.responseType !== 'json') {
        throw e;
      }
    }
  }

  // Handle progress if needed
  if (config.progress) {
    if (config.method === 'post' || config.method === 'put') {
      request.upload.addEventListener('progress', config.progress);
    } else if (config.method === 'get') {
      request.addEventListener('progress', config.progress);
    }
  }

  if (requestData === undefined) {
    requestData = null;
  }

  // Send the request
  request.send(requestData);
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/adapters/xhr.js","/../node_modules/axios/lib/adapters")
},{"../helpers/settle":18,"./../helpers/btoa":11,"./../helpers/buildURL":12,"./../helpers/cookies":14,"./../helpers/isURLSameOrigin":16,"./../helpers/parseHeaders":17,"./../helpers/transformData":20,"./../utils":21,"buffer":23,"pBGvAp":27}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var defaults = require('./defaults');
var utils = require('./utils');
var dispatchRequest = require('./core/dispatchRequest');
var InterceptorManager = require('./core/InterceptorManager');
var isAbsoluteURL = require('./helpers/isAbsoluteURL');
var combineURLs = require('./helpers/combineURLs');
var bind = require('./helpers/bind');
var transformData = require('./helpers/transformData');

function Axios(defaultConfig) {
  this.defaults = utils.merge({}, defaultConfig);
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Don't allow overriding defaults.withCredentials
  config.withCredentials = config.withCredentials || this.defaults.withCredentials;

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

var defaultInstance = new Axios(defaults);
var axios = module.exports = bind(Axios.prototype.request, defaultInstance);
module.exports.Axios = Axios;

// Expose properties from defaultInstance
axios.defaults = defaultInstance.defaults;
axios.interceptors = defaultInstance.interceptors;

// Factory for creating new instances
axios.create = function create(defaultConfig) {
  return new Axios(defaultConfig);
};

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
  axios[method] = bind(Axios.prototype[method], defaultInstance);
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
  axios[method] = bind(Axios.prototype[method], defaultInstance);
});

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/axios.js","/../node_modules/axios/lib")
},{"./core/InterceptorManager":7,"./core/dispatchRequest":8,"./defaults":9,"./helpers/bind":10,"./helpers/combineURLs":13,"./helpers/isAbsoluteURL":15,"./helpers/spread":19,"./helpers/transformData":20,"./utils":21,"buffer":23,"pBGvAp":27}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/core/InterceptorManager.js","/../node_modules/axios/lib/core")
},{"./../utils":21,"buffer":23,"pBGvAp":27}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

/**
 * Dispatch a request to the server using whichever adapter
 * is supported by the current environment.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  return new Promise(function executor(resolve, reject) {
    try {
      var adapter;

      if (typeof config.adapter === 'function') {
        // For custom adapter support
        adapter = config.adapter;
      } else if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = require('../adapters/xhr');
      } else if (typeof process !== 'undefined') {
        // For node use HTTP adapter
        adapter = require('../adapters/http');
      }

      if (typeof adapter === 'function') {
        adapter(resolve, reject, config);
      }
    } catch (e) {
      reject(e);
    }
  });
};


}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/core/dispatchRequest.js","/../node_modules/axios/lib/core")
},{"../adapters/http":5,"../adapters/xhr":5,"buffer":23,"pBGvAp":27}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var utils = require('./utils');

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

module.exports = {
  transformRequest: [function transformRequest(data, headers) {
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isObject(data) && !utils.isFile(data) && !utils.isBlob(data)) {
      // Set application/json if no Content-Type has been specified
      if (!utils.isUndefined(headers)) {
        utils.forEach(headers, function processContentTypeHeader(val, key) {
          if (key.toLowerCase() === 'content-type') {
            headers['Content-Type'] = val;
          }
        });

        if (utils.isUndefined(headers['Content-Type'])) {
          headers['Content-Type'] = 'application/json;charset=utf-8';
        }
      }
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    },
    patch: utils.merge(DEFAULT_CONTENT_TYPE),
    post: utils.merge(DEFAULT_CONTENT_TYPE),
    put: utils.merge(DEFAULT_CONTENT_TYPE)
  },

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/defaults.js","/../node_modules/axios/lib")
},{"./utils":21,"buffer":23,"pBGvAp":27}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/helpers/bind.js","/../node_modules/axios/lib/helpers")
},{"buffer":23,"pBGvAp":27}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/helpers/btoa.js","/../node_modules/axios/lib/helpers")
},{"buffer":23,"pBGvAp":27}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/helpers/buildURL.js","/../node_modules/axios/lib/helpers")
},{"./../utils":21,"buffer":23,"pBGvAp":27}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/helpers/combineURLs.js","/../node_modules/axios/lib/helpers")
},{"buffer":23,"pBGvAp":27}],14:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/helpers/cookies.js","/../node_modules/axios/lib/helpers")
},{"./../utils":21,"buffer":23,"pBGvAp":27}],15:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/helpers/isAbsoluteURL.js","/../node_modules/axios/lib/helpers")
},{"buffer":23,"pBGvAp":27}],16:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/helpers/isURLSameOrigin.js","/../node_modules/axios/lib/helpers")
},{"./../utils":21,"buffer":23,"pBGvAp":27}],17:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var utils = require('./../utils');

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/helpers/parseHeaders.js","/../node_modules/axios/lib/helpers")
},{"./../utils":21,"buffer":23,"pBGvAp":27}],18:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(response);
  }
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/helpers/settle.js","/../node_modules/axios/lib/helpers")
},{"buffer":23,"pBGvAp":27}],19:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/helpers/spread.js","/../node_modules/axios/lib/helpers")
},{"buffer":23,"pBGvAp":27}],20:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/helpers/transformData.js","/../node_modules/axios/lib/helpers")
},{"./../utils":21,"buffer":23,"pBGvAp":27}],21:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  trim: trim
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/axios/lib/utils.js","/../node_modules/axios/lib")
},{"buffer":23,"pBGvAp":27}],22:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/browserify/node_modules/base64-js/lib/b64.js","/../node_modules/browserify/node_modules/base64-js/lib")
},{"buffer":23,"pBGvAp":27}],23:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/browserify/node_modules/buffer/index.js","/../node_modules/browserify/node_modules/buffer")
},{"base64-js":22,"buffer":23,"ieee754":26,"pBGvAp":27}],24:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// This file should be ES5 compatible
/* eslint prefer-spread:0, no-var:0, prefer-reflect:0, no-magic-numbers:0 */
'use strict'
module.exports = (function () {
	// Import Events
	var events = require('events')

	// Export Domain
	var domain = {}
	domain.createDomain = domain.create = function () {
		var d = new events.EventEmitter()

		function emitError (e) {
			d.emit('error', e)
		}

		d.add = function (emitter) {
			emitter.on('error', emitError)
		}
		d.remove = function (emitter) {
			emitter.removeListener('error', emitError)
		}
		d.bind = function (fn) {
			return function () {
				var args = Array.prototype.slice.call(arguments)
				try {
					fn.apply(null, args)
				}
				catch (err) {
					emitError(err)
				}
			}
		}
		d.intercept = function (fn) {
			return function (err) {
				if ( err ) {
					emitError(err)
				}
				else {
					var args = Array.prototype.slice.call(arguments, 1)
					try {
						fn.apply(null, args)
					}
					catch (err) {
						emitError(err)
					}
				}
			}
		}
		d.run = function (fn) {
			try {
				fn()
			}
			catch (err) {
				emitError(err)
			}
			return this
		}
		d.dispose = function () {
			this.removeAllListeners()
			return this
		}
		d.enter = d.exit = function () {
			return this
		}
		return d
	}
	return domain
}).call(this)

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/domain-browser/index.js","/../node_modules/domain-browser")
},{"buffer":23,"events":25,"pBGvAp":27}],25:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/events/events.js","/../node_modules/events")
},{"buffer":23,"pBGvAp":27}],26:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/ieee754/index.js","/../node_modules/ieee754")
},{"buffer":23,"pBGvAp":27}],27:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/process/browser.js","/../node_modules/process")
},{"buffer":23,"pBGvAp":27}],28:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

module.exports = require('./lib')

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/promise/index.js","/../node_modules/promise")
},{"./lib":33,"buffer":23,"pBGvAp":27}],29:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var asap = require('asap/raw');

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('not a function');
  }
  this._45 = 0;
  this._81 = 0;
  this._65 = null;
  this._54 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._10 = null;
Promise._97 = null;
Promise._61 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
};
function handle(self, deferred) {
  while (self._81 === 3) {
    self = self._65;
  }
  if (Promise._10) {
    Promise._10(self);
  }
  if (self._81 === 0) {
    if (self._45 === 0) {
      self._45 = 1;
      self._54 = deferred;
      return;
    }
    if (self._45 === 1) {
      self._45 = 2;
      self._54 = [self._54, deferred];
      return;
    }
    self._54.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._81 === 1) {
        resolve(deferred.promise, self._65);
      } else {
        reject(deferred.promise, self._65);
      }
      return;
    }
    var ret = tryCallOne(cb, self._65);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._81 = 3;
      self._65 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._81 = 1;
  self._65 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._81 = 2;
  self._65 = newValue;
  if (Promise._97) {
    Promise._97(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._45 === 1) {
    handle(self, self._54);
    self._54 = null;
  }
  if (self._45 === 2) {
    for (var i = 0; i < self._54.length; i++) {
      handle(self, self._54[i]);
    }
    self._54 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  })
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/promise/lib/core.js","/../node_modules/promise/lib")
},{"asap/raw":3,"buffer":23,"pBGvAp":27}],30:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.prototype.done = function (onFulfilled, onRejected) {
  var self = arguments.length ? this.then.apply(this, arguments) : this;
  self.then(null, function (err) {
    setTimeout(function () {
      throw err;
    }, 0);
  });
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/promise/lib/done.js","/../node_modules/promise/lib")
},{"./core.js":29,"buffer":23,"pBGvAp":27}],31:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = require('./core.js');

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._61);
  p._81 = 1;
  p._65 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._81 === 3) {
            val = val._65;
          }
          if (val._81 === 1) return res(i, val._65);
          if (val._81 === 2) reject(val._65);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/promise/lib/es6-extensions.js","/../node_modules/promise/lib")
},{"./core.js":29,"buffer":23,"pBGvAp":27}],32:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.prototype['finally'] = function (f) {
  return this.then(function (value) {
    return Promise.resolve(f()).then(function () {
      return value;
    });
  }, function (err) {
    return Promise.resolve(f()).then(function () {
      throw err;
    });
  });
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/promise/lib/finally.js","/../node_modules/promise/lib")
},{"./core.js":29,"buffer":23,"pBGvAp":27}],33:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

module.exports = require('./core.js');
require('./done.js');
require('./finally.js');
require('./es6-extensions.js');
require('./node-extensions.js');
require('./synchronous.js');

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/promise/lib/index.js","/../node_modules/promise/lib")
},{"./core.js":29,"./done.js":30,"./es6-extensions.js":31,"./finally.js":32,"./node-extensions.js":34,"./synchronous.js":35,"buffer":23,"pBGvAp":27}],34:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

// This file contains then/promise specific extensions that are only useful
// for node.js interop

var Promise = require('./core.js');
var asap = require('asap');

module.exports = Promise;

/* Static Functions */

Promise.denodeify = function (fn, argumentCount) {
  if (
    typeof argumentCount === 'number' && argumentCount !== Infinity
  ) {
    return denodeifyWithCount(fn, argumentCount);
  } else {
    return denodeifyWithoutCount(fn);
  }
}

var callbackFn = (
  'function (err, res) {' +
  'if (err) { rj(err); } else { rs(res); }' +
  '}'
);
function denodeifyWithCount(fn, argumentCount) {
  var args = [];
  for (var i = 0; i < argumentCount; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'return new Promise(function (rs, rj) {',
    'var res = fn.call(',
    ['self'].concat(args).concat([callbackFn]).join(','),
    ');',
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');
  return Function(['Promise', 'fn'], body)(Promise, fn);
}
function denodeifyWithoutCount(fn) {
  var fnLength = Math.max(fn.length - 1, 3);
  var args = [];
  for (var i = 0; i < fnLength; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'var args;',
    'var argLength = arguments.length;',
    'if (arguments.length > ' + fnLength + ') {',
    'args = new Array(arguments.length + 1);',
    'for (var i = 0; i < arguments.length; i++) {',
    'args[i] = arguments[i];',
    '}',
    '}',
    'return new Promise(function (rs, rj) {',
    'var cb = ' + callbackFn + ';',
    'var res;',
    'switch (argLength) {',
    args.concat(['extra']).map(function (_, index) {
      return (
        'case ' + (index) + ':' +
        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
        'break;'
      );
    }).join(''),
    'default:',
    'args[argLength] = cb;',
    'res = fn.apply(self, args);',
    '}',
    
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');

  return Function(
    ['Promise', 'fn'],
    body
  )(Promise, fn);
}

Promise.nodeify = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var callback =
      typeof args[args.length - 1] === 'function' ? args.pop() : null;
    var ctx = this;
    try {
      return fn.apply(this, arguments).nodeify(callback, ctx);
    } catch (ex) {
      if (callback === null || typeof callback == 'undefined') {
        return new Promise(function (resolve, reject) {
          reject(ex);
        });
      } else {
        asap(function () {
          callback.call(ctx, ex);
        })
      }
    }
  }
}

Promise.prototype.nodeify = function (callback, ctx) {
  if (typeof callback != 'function') return this;

  this.then(function (value) {
    asap(function () {
      callback.call(ctx, null, value);
    });
  }, function (err) {
    asap(function () {
      callback.call(ctx, err);
    });
  });
}

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/promise/lib/node-extensions.js","/../node_modules/promise/lib")
},{"./core.js":29,"asap":1,"buffer":23,"pBGvAp":27}],35:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.enableSynchronous = function () {
  Promise.prototype.isPending = function() {
    return this.getState() == 0;
  };

  Promise.prototype.isFulfilled = function() {
    return this.getState() == 1;
  };

  Promise.prototype.isRejected = function() {
    return this.getState() == 2;
  };

  Promise.prototype.getValue = function () {
    if (this._81 === 3) {
      return this._65.getValue();
    }

    if (!this.isFulfilled()) {
      throw new Error('Cannot get a value of an unfulfilled promise.');
    }

    return this._65;
  };

  Promise.prototype.getReason = function () {
    if (this._81 === 3) {
      return this._65.getReason();
    }

    if (!this.isRejected()) {
      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
    }

    return this._65;
  };

  Promise.prototype.getState = function () {
    if (this._81 === 3) {
      return this._65.getState();
    }
    if (this._81 === -1 || this._81 === -2) {
      return 0;
    }

    return this._81;
  };
};

Promise.disableSynchronous = function() {
  Promise.prototype.isPending = undefined;
  Promise.prototype.isFulfilled = undefined;
  Promise.prototype.isRejected = undefined;
  Promise.prototype.getValue = undefined;
  Promise.prototype.getReason = undefined;
  Promise.prototype.getState = undefined;
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/promise/lib/synchronous.js","/../node_modules/promise/lib")
},{"./core.js":29,"buffer":23,"pBGvAp":27}],36:[function(require,module,exports){
module.exports={
  "name": "clarifai",
  "version": "2.2.0",
  "description": "Official Clarifai Javascript SDK",
  "main": "dist/index.js",
  "repository": "https://github.com/Clarifai/clarifai-javascript",
  "author": "Clarifai Inc.",
  "license": "Apache-2.0",
  "scripts": {
    "jsdoc": "jsdoc src/* -t node_modules/minami -d docs/$npm_package_version && jsdoc src/* -t node_modules/minami -d docs/latest",
    "test": "gulp test",
    "watch": "gulp watch",
    "build": "npm run clean && gulp build && npm run jsdoc",
    "release": "release-it",
    "clean": "gulp cleanbuild"
  },
  "dependencies": {
    "axios": "0.11.1",
    "form-data": "0.2.0",
    "promise": "7.1.1"
  },
  "devDependencies": {
    "babel-eslint": "^6.1.2",
    "babel-preset-es2015": "^6.14.0",
    "babel-register": "^6.14.0",
    "babelify": "^7.3.0",
    "del": "2.0.2",
    "envify": "3.4.0",
    "git-branch": "0.3.0",
    "gulp": "3.9.0",
    "gulp-awspublish": "3.0.1",
    "gulp-babel": "^6.1.2",
    "gulp-browserify": "0.5.1",
    "gulp-concat": "2.6.0",
    "gulp-eslint": "2.0.0",
    "gulp-if": "2.0.0",
    "gulp-insert": "0.5.0",
    "gulp-jasmine": "^2.2.1",
    "gulp-notify": "2.2.0",
    "gulp-rename": "1.2.2",
    "gulp-replace-task": "0.11.0",
    "gulp-uglify": "1.4.1",
    "gulp-util": "3.0.6",
    "jsdoc": "^3.4.1",
    "minami": "^1.1.1",
    "release-it": "^2.7.3",
    "require-dir": "0.3.0",
    "serve-static": "1.10.0"
  }
}

},{}],37:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');
var Promise = require('promise');

var _require = require('./helpers'),
    checkType = _require.checkType;

var Models = require('./Models');
var Inputs = require('./Inputs');
var Concepts = require('./Concepts');
var Workflow = require('./Workflow');

var _require2 = require('./constants'),
    API = _require2.API,
    ERRORS = _require2.ERRORS;

var TOKEN_PATH = API.TOKEN_PATH;

/**
 * top-level class that allows access to models, inputs and concepts
 * @class
 */

var App = function () {
  function App(arg1, arg2, arg3) {
    _classCallCheck(this, App);

    var optionsObj = arg1;
    if ((typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) !== 'object' || arg1 === null) {
      optionsObj = arg3 || {};
      optionsObj.clientId = arg1;
      optionsObj.clientSecret = arg2;
    }
    this._validate(optionsObj);
    this._init(optionsObj);
  }

  /**
   * Gets a token from the API using client credentials
   * @return {Promise(token, error)} A Promise that is fulfilled with the token string or rejected with an error
   */


  _createClass(App, [{
    key: 'getToken',
    value: function getToken() {
      return this._config.token();
    }

    /**
     * Sets the token to use for the API
     * @param {String}         _token    The token you are setting
     * @return {Boolean}                 true if token has valid fields, false if not
     */

  }, {
    key: 'setToken',
    value: function setToken(_token) {
      var token = _token;
      var now = new Date().getTime();
      if (typeof _token === 'string') {
        token = {
          accessToken: _token,
          expiresIn: 176400
        };
      } else {
        token = {
          accessToken: _token.access_token || _token.accessToken,
          expiresIn: _token.expires_in || _token.expiresIn
        };
      }
      if (token.accessToken && token.expiresIn || token.access_token && token.expires_in) {
        if (!token.expireTime) {
          token.expireTime = now + token.expiresIn * 1000;
        }
        this._config._token = token;
        return true;
      }
      return false;
    }
  }, {
    key: '_validate',
    value: function _validate(_ref) {
      var clientId = _ref.clientId,
          clientSecret = _ref.clientSecret,
          token = _ref.token,
          apiKey = _ref.apiKey;

      if ((!clientId || !clientSecret) && !token && !apiKey) {
        throw ERRORS.paramsRequired(['Client ID', 'Client Secret']);
      }
    }
  }, {
    key: '_init',
    value: function _init(options) {
      var _this = this;

      this._config = {
        apiEndpoint: options.apiEndpoint || process && process.env && process.env.API_ENDPOINT || 'https://api.clarifai.com',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        apiKey: options.apiKey,
        token: function token() {
          return new Promise(function (resolve, reject) {
            var now = new Date().getTime();
            if (checkType(/Object/, _this._config._token) && _this._config._token.expireTime > now) {
              resolve(_this._config._token);
            } else {
              _this._getToken(resolve, reject);
            }
          });
        }
      };
      if (options.token) {
        this.setToken(options.token);
      }
      this.models = new Models(this._config);
      this.inputs = new Inputs(this._config);
      this.concepts = new Concepts(this._config);
      this.workflow = new Workflow(this._config);
    }
  }, {
    key: '_getToken',
    value: function _getToken(resolve, reject) {
      var _this2 = this;

      this._requestToken().then(function (response) {
        if (response.status === 200) {
          _this2.setToken(response.data);
          resolve(_this2._config._token);
        } else {
          reject(response);
        }
      }, reject);
    }
  }, {
    key: '_requestToken',
    value: function _requestToken() {
      var url = '' + this._config.apiEndpoint + TOKEN_PATH;
      var clientId = this._config.clientId;
      var clientSecret = this._config.clientSecret;
      return axios({
        'url': url,
        'method': 'POST',
        'auth': {
          'username': clientId,
          'password': clientSecret
        }
      });
    }
  }]);

  return App;
}();

;

module.exports = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJQcm9taXNlIiwiY2hlY2tUeXBlIiwiTW9kZWxzIiwiSW5wdXRzIiwiQ29uY2VwdHMiLCJXb3JrZmxvdyIsIkFQSSIsIkVSUk9SUyIsIlRPS0VOX1BBVEgiLCJBcHAiLCJhcmcxIiwiYXJnMiIsImFyZzMiLCJvcHRpb25zT2JqIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJfdmFsaWRhdGUiLCJfaW5pdCIsIl9jb25maWciLCJ0b2tlbiIsIl90b2tlbiIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiYWNjZXNzVG9rZW4iLCJleHBpcmVzSW4iLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzX2luIiwiZXhwaXJlVGltZSIsImFwaUtleSIsInBhcmFtc1JlcXVpcmVkIiwib3B0aW9ucyIsImFwaUVuZHBvaW50IiwicHJvY2VzcyIsImVudiIsIkFQSV9FTkRQT0lOVCIsInJlc29sdmUiLCJyZWplY3QiLCJfZ2V0VG9rZW4iLCJzZXRUb2tlbiIsIm1vZGVscyIsImlucHV0cyIsImNvbmNlcHRzIiwid29ya2Zsb3ciLCJfcmVxdWVzdFRva2VuIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGF0YSIsInVybCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUUMsUUFBUSxPQUFSLENBQVo7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLFNBQVIsQ0FBZDs7ZUFDa0JBLFFBQVEsV0FBUixDO0lBQWJFLFMsWUFBQUEsUzs7QUFDTCxJQUFJQyxTQUFTSCxRQUFRLFVBQVIsQ0FBYjtBQUNBLElBQUlJLFNBQVNKLFFBQVEsVUFBUixDQUFiO0FBQ0EsSUFBSUssV0FBV0wsUUFBUSxZQUFSLENBQWY7QUFDQSxJQUFJTSxXQUFXTixRQUFRLFlBQVIsQ0FBZjs7Z0JBQ29CQSxRQUFRLGFBQVIsQztJQUFmTyxHLGFBQUFBLEc7SUFBS0MsTSxhQUFBQSxNOztJQUNM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c291cmNlc0NvbnRlbnQiOlsibGV0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbmxldCBQcm9taXNlID0gcmVxdWlyZSgncHJvbWlzZScpO1xubGV0IHtjaGVja1R5cGV9ID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5sZXQgTW9kZWxzID0gcmVxdWlyZSgnLi9Nb2RlbHMnKTtcbmxldCBJbnB1dHMgPSByZXF1aXJlKCcuL0lucHV0cycpO1xubGV0IENvbmNlcHRzID0gcmVxdWlyZSgnLi9Db25jZXB0cycpO1xubGV0IFdvcmtmbG93ID0gcmVxdWlyZSgnLi9Xb3JrZmxvdycpO1xubGV0IHtBUEksIEVSUk9SU30gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xubGV0IHtUT0tFTl9QQVRIfSA9IEFQSTtcblxuXG4vKipcbiAqIHRvcC1sZXZlbCBjbGFzcyB0aGF0IGFsbG93cyBhY2Nlc3MgdG8gbW9kZWxzLCBpbnB1dHMgYW5kIGNvbmNlcHRzXG4gKiBAY2xhc3NcbiAqL1xuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIGxldCBvcHRpb25zT2JqID0gYXJnMTtcbiAgICBpZiAodHlwZW9mIGFyZzEgIT09ICdvYmplY3QnIHx8IGFyZzEgPT09IG51bGwpIHtcbiAgICAgIG9wdGlvbnNPYmogPSBhcmczIHx8IHt9O1xuICAgICAgb3B0aW9uc09iai5jbGllbnRJZCA9IGFyZzE7XG4gICAgICBvcHRpb25zT2JqLmNsaWVudFNlY3JldCA9IGFyZzI7XG4gICAgfVxuICAgIHRoaXMuX3ZhbGlkYXRlKG9wdGlvbnNPYmopO1xuICAgIHRoaXMuX2luaXQob3B0aW9uc09iaik7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgdG9rZW4gZnJvbSB0aGUgQVBJIHVzaW5nIGNsaWVudCBjcmVkZW50aWFsc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlKHRva2VuLCBlcnJvcil9IEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIHRoZSB0b2tlbiBzdHJpbmcgb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgZ2V0VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy50b2tlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRva2VuIHRvIHVzZSBmb3IgdGhlIEFQSVxuICAgKiBAcGFyYW0ge1N0cmluZ30gICAgICAgICBfdG9rZW4gICAgVGhlIHRva2VuIHlvdSBhcmUgc2V0dGluZ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgICAgICAgICAgdHJ1ZSBpZiB0b2tlbiBoYXMgdmFsaWQgZmllbGRzLCBmYWxzZSBpZiBub3RcbiAgICovXG4gIHNldFRva2VuKF90b2tlbikge1xuICAgIGxldCB0b2tlbiA9IF90b2tlbjtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgaWYgKHR5cGVvZiBfdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0b2tlbiA9IHtcbiAgICAgICAgYWNjZXNzVG9rZW46IF90b2tlbixcbiAgICAgICAgZXhwaXJlc0luOiAxNzY0MDBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRva2VuID0ge1xuICAgICAgICBhY2Nlc3NUb2tlbjogX3Rva2VuLmFjY2Vzc190b2tlbiB8fCBfdG9rZW4uYWNjZXNzVG9rZW4sXG4gICAgICAgIGV4cGlyZXNJbjogX3Rva2VuLmV4cGlyZXNfaW4gfHwgX3Rva2VuLmV4cGlyZXNJblxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCh0b2tlbi5hY2Nlc3NUb2tlbiAmJiB0b2tlbi5leHBpcmVzSW4pIHx8XG4gICAgICAodG9rZW4uYWNjZXNzX3Rva2VuICYmIHRva2VuLmV4cGlyZXNfaW4pKSB7XG4gICAgICBpZiAoIXRva2VuLmV4cGlyZVRpbWUpIHtcbiAgICAgICAgdG9rZW4uZXhwaXJlVGltZSA9IG5vdyArICh0b2tlbi5leHBpcmVzSW4gKiAxMDAwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbmZpZy5fdG9rZW4gPSB0b2tlbjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBfdmFsaWRhdGUoe2NsaWVudElkLCBjbGllbnRTZWNyZXQsIHRva2VuLCBhcGlLZXl9KSB7XG4gICAgaWYgKCghY2xpZW50SWQgfHwgIWNsaWVudFNlY3JldCkgJiYgIXRva2VuICYmICFhcGlLZXkpIHtcbiAgICAgIHRocm93IEVSUk9SUy5wYXJhbXNSZXF1aXJlZChbJ0NsaWVudCBJRCcsICdDbGllbnQgU2VjcmV0J10pO1xuICAgIH1cbiAgfVxuXG4gIF9pbml0KG9wdGlvbnMpIHtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBhcGlFbmRwb2ludDogb3B0aW9ucy5hcGlFbmRwb2ludCB8fFxuICAgICAgKHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuQVBJX0VORFBPSU5UKSB8fFxuICAgICAgJ2h0dHBzOi8vYXBpLmNsYXJpZmFpLmNvbScsXG4gICAgICBjbGllbnRJZDogb3B0aW9ucy5jbGllbnRJZCxcbiAgICAgIGNsaWVudFNlY3JldDogb3B0aW9ucy5jbGllbnRTZWNyZXQsXG4gICAgICBhcGlLZXk6IG9wdGlvbnMuYXBpS2V5LFxuICAgICAgdG9rZW46ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgaWYgKGNoZWNrVHlwZSgvT2JqZWN0LywgdGhpcy5fY29uZmlnLl90b2tlbikgJiYgdGhpcy5fY29uZmlnLl90b2tlbi5leHBpcmVUaW1lID4gbm93KSB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuX2NvbmZpZy5fdG9rZW4pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9nZXRUb2tlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy50b2tlbikge1xuICAgICAgdGhpcy5zZXRUb2tlbihvcHRpb25zLnRva2VuKTtcbiAgICB9XG4gICAgdGhpcy5tb2RlbHMgPSBuZXcgTW9kZWxzKHRoaXMuX2NvbmZpZyk7XG4gICAgdGhpcy5pbnB1dHMgPSBuZXcgSW5wdXRzKHRoaXMuX2NvbmZpZyk7XG4gICAgdGhpcy5jb25jZXB0cyA9IG5ldyBDb25jZXB0cyh0aGlzLl9jb25maWcpO1xuICAgIHRoaXMud29ya2Zsb3cgPSBuZXcgV29ya2Zsb3codGhpcy5fY29uZmlnKTtcbiAgfVxuXG4gIF9nZXRUb2tlbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLl9yZXF1ZXN0VG9rZW4oKS50aGVuKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHRoaXMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLl9jb25maWcuX3Rva2VuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVqZWN0XG4gICAgKTtcbiAgfVxuXG4gIF9yZXF1ZXN0VG9rZW4oKSB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuX2NvbmZpZy5hcGlFbmRwb2ludH0ke1RPS0VOX1BBVEh9YDtcbiAgICBsZXQgY2xpZW50SWQgPSB0aGlzLl9jb25maWcuY2xpZW50SWQ7XG4gICAgbGV0IGNsaWVudFNlY3JldCA9IHRoaXMuX2NvbmZpZy5jbGllbnRTZWNyZXQ7XG4gICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgICd1cmwnOiB1cmwsXG4gICAgICAnbWV0aG9kJzogJ1BPU1QnLFxuICAgICAgJ2F1dGgnOiB7XG4gICAgICAgICd1c2VybmFtZSc6IGNsaWVudElkLFxuICAgICAgICAncGFzc3dvcmQnOiBjbGllbnRTZWNyZXRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiJdfQ==
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/App.js","/")
},{"./Concepts":39,"./Inputs":41,"./Models":43,"./Workflow":44,"./constants":45,"./helpers":47,"axios":4,"buffer":23,"pBGvAp":27,"promise":28}],38:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * class representing a concept and its info
 * @class
 */
var Concept = function Concept(_config, data) {
  _classCallCheck(this, Concept);

  this.id = data.id;
  this.name = data.name;
  this.createdAt = data.created_at || data.createdAt;
  this.appId = data.app_id || data.appId;
  this.value = data.value || null;
  this._config = _config;
  this.rawData = data;
};

;

module.exports = Concept;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmNlcHQuanMiXSwibmFtZXMiOlsiQ29uY2VwdCIsIl9jb25maWciLCJkYXRhIiwiaWQiLCJuYW1lIiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsImFwcElkIiwiYXBwX2lkIiwidmFsdWUiLCJyYXdEYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0lBSU1BLE8sR0FDSixpQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkI7QUFBQTs7QUFDekIsT0FBS0MsRUFBTCxHQUFVRCxLQUFLQyxFQUFmO0FBQ0EsT0FBS0MsSUFBTCxHQUFZRixLQUFLRSxJQUFqQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUJILEtBQUtJLFVBQUwsSUFBbUJKLEtBQUtHLFNBQXpDO0FBQ0EsT0FBS0UsS0FBTCxHQUFhTCxLQUFLTSxNQUFMLElBQWVOLEtBQUtLLEtBQWpDO0FBQ0EsT0FBS0UsS0FBTCxHQUFhUCxLQUFLTyxLQUFMLElBQWMsSUFBM0I7QUFDQSxPQUFLUixPQUFMLEdBQWVBLE9BQWY7QUFDQSxPQUFLUyxPQUFMLEdBQWVSLElBQWY7QUFDRCxDOztBQUVIOztBQUVBUyxPQUFPQyxPQUFQLEdBQWlCWixPQUFqQiIsImZpbGUiOiJDb25jZXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBjbGFzcyByZXByZXNlbnRpbmcgYSBjb25jZXB0IGFuZCBpdHMgaW5mb1xuICogQGNsYXNzXG4gKi9cbmNsYXNzIENvbmNlcHQge1xuICBjb25zdHJ1Y3RvcihfY29uZmlnLCBkYXRhKSB7XG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuY3JlYXRlZEF0ID0gZGF0YS5jcmVhdGVkX2F0IHx8IGRhdGEuY3JlYXRlZEF0O1xuICAgIHRoaXMuYXBwSWQgPSBkYXRhLmFwcF9pZCB8fCBkYXRhLmFwcElkO1xuICAgIHRoaXMudmFsdWUgPSBkYXRhLnZhbHVlIHx8IG51bGw7XG4gICAgdGhpcy5fY29uZmlnID0gX2NvbmZpZztcbiAgICB0aGlzLnJhd0RhdGEgPSBkYXRhO1xuICB9XG59XG47XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uY2VwdDtcbiJdfQ==
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/Concept.js","/")
},{"buffer":23,"pBGvAp":27}],39:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');
var Concept = require('./Concept');

var _require = require('./constants'),
    API = _require.API,
    replaceVars = _require.replaceVars;

var CONCEPTS_PATH = API.CONCEPTS_PATH,
    CONCEPT_PATH = API.CONCEPT_PATH,
    CONCEPT_SEARCH_PATH = API.CONCEPT_SEARCH_PATH;

var _require2 = require('./utils'),
    wrapToken = _require2.wrapToken,
    formatConcept = _require2.formatConcept;

var _require3 = require('./helpers'),
    isSuccess = _require3.isSuccess,
    checkType = _require3.checkType;

/**
 * class representing a collection of concepts
 * @class
 */


var Concepts = function () {
  function Concepts(_config) {
    var _this = this;

    var rawData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Concepts);

    this._config = _config;
    this.rawData = rawData;
    rawData.forEach(function (conceptData, index) {
      _this[index] = new Concept(_this._config, conceptData);
    });
    this.length = rawData.length;
  }

  /**
   * List all the concepts
   * @param {object}     options     Object with keys explained below: (optional)
   *    @param {number}    options.page        The page number (optional, default: 1)
   *    @param {number}    options.perPage     Number of images to return per page (optional, default: 20)
   * @return {Promise(Concepts, error)} A Promise that is fulfilled with a Concepts instance or rejected with an error
   */


  _createClass(Concepts, [{
    key: 'list',
    value: function list() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { page: 1, perPage: 20 };

      var url = '' + this._config.apiEndpoint + CONCEPTS_PATH;
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.get(url, {
            headers: headers,
            params: {
              'page': options.page,
              'per_page': options.perPage
            }
          }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Concepts(_this2._config, response.data.concepts));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * List a single concept given an id
     * @param {String}     id          The concept's id
     * @return {Promise(Concept, error)} A Promise that is fulfilled with a Concept instance or rejected with an error
     */

  }, {
    key: 'get',
    value: function get(id) {
      var _this3 = this;

      var url = '' + this._config.apiEndpoint + replaceVars(CONCEPT_PATH, [id]);
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.get(url, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Concept(_this3._config, response.data.concept));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * Add a list of concepts given an id and name
     * @param {object|object[]}   concepts       Can be a single media object or an array of media objects
     *   @param  {object|string}    concepts[].concept         If string, this is assumed to be the concept id. Otherwise, an object with the following attributes
     *     @param  {object}           concepts[].concept.id      The new concept's id (Required)
     *     @param  {object}           concepts[].concept.name    The new concept's name
     * @return {Promise(Concepts, error)}             A Promise that is fulfilled with a Concepts instance or rejected with an error
     */

  }, {
    key: 'create',
    value: function create() {
      var _this4 = this;

      var concepts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (checkType(/(Object|String)/, concepts)) {
        concepts = [concepts];
      }
      var data = {
        'concepts': concepts.map(formatConcept)
      };
      var url = '' + this._config.apiEndpoint + CONCEPTS_PATH;
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.post(url, data, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Concepts(_this4._config, response.data.concepts));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * Search for a concept given a name. A wildcard can be given (example: The name "bo*" will match with "boat" and "bow" given those concepts exist
     * @param  {string}   name  The name of the concept to search for
     * @return {Promise(Concepts, error)} A Promise that is fulfilled with a Concepts instance or rejected with an error
     */

  }, {
    key: 'search',
    value: function search(name) {
      var _this5 = this;

      var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var url = '' + this._config.apiEndpoint + CONCEPT_SEARCH_PATH;
      return wrapToken(this._config, function (headers) {
        var params = {
          'concept_query': { name: name, language: language }
        };
        return new Promise(function (resolve, reject) {
          axios.post(url, params, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Concepts(_this5._config, response.data.concepts));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }
  }]);

  return Concepts;
}();

;

module.exports = Concepts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmNlcHRzLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIkNvbmNlcHQiLCJBUEkiLCJyZXBsYWNlVmFycyIsIkNPTkNFUFRTX1BBVEgiLCJDT05DRVBUX1BBVEgiLCJDT05DRVBUX1NFQVJDSF9QQVRIIiwid3JhcFRva2VuIiwiZm9ybWF0Q29uY2VwdCIsImlzU3VjY2VzcyIsImNoZWNrVHlwZSIsIkNvbmNlcHRzIiwiX2NvbmZpZyIsInJhd0RhdGEiLCJmb3JFYWNoIiwiY29uY2VwdERhdGEiLCJpbmRleCIsImxlbmd0aCIsIm9wdGlvbnMiLCJwYWdlIiwicGVyUGFnZSIsInVybCIsImFwaUVuZHBvaW50IiwiaGVhZGVycyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwicGFyYW1zIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbmNlcHRzIiwiaWQiLCJjb25jZXB0IiwibWFwIiwicG9zdCIsIm5hbWUiLCJsYW5ndWFnZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUlBLFFBQVFDLFFBQVEsT0FBUixDQUFaO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxXQUFSLENBQWQ7O2VBQ3lCQSxRQUFRLGFBQVIsQztJQUFwQkUsRyxZQUFBQSxHO0lBQUtDLFcsWUFBQUEsVzs7SUFDTEMsYSxHQUFvREYsRyxDQUFwREUsYTtJQUFlQyxZLEdBQXFDSCxHLENBQXJDRyxZO0lBQWNDLG1CLEdBQXVCSixHLENBQXZCSSxtQjs7Z0JBQ0ROLFFBQVEsU0FBUixDO0lBQTVCTyxTLGFBQUFBLFM7SUFBV0MsYSxhQUFBQSxhOztnQkFDYVIsUUFBUSxXQUFSLEM7SUFBeEJTLFMsYUFBQUEsUztJQUFXQyxTLGFBQUFBLFM7O0FBRWhCOzs7Ozs7SUFJTUMsUTtBQUNKLG9CQUFZQyxPQUFaLEVBQW1DO0FBQUE7O0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUFBOztBQUNqQyxTQUFLRCxPQUFMLEdB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cXVpcmUoJ2F4aW9zJyk7XG5sZXQgQ29uY2VwdCA9IHJlcXVpcmUoJy4vQ29uY2VwdCcpO1xubGV0IHtBUEksIHJlcGxhY2VWYXJzfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5sZXQge0NPTkNFUFRTX1BBVEgsIENPTkNFUFRfUEFUSCwgQ09OQ0VQVF9TRUFSQ0hfUEFUSH0gPSBBUEk7XG5sZXQge3dyYXBUb2tlbiwgZm9ybWF0Q29uY2VwdH0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5sZXQge2lzU3VjY2VzcywgY2hlY2tUeXBlfSA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuXG4vKipcbiAqIGNsYXNzIHJlcHJlc2VudGluZyBhIGNvbGxlY3Rpb24gb2YgY29uY2VwdHNcbiAqIEBjbGFzc1xuICovXG5jbGFzcyBDb25jZXB0cyB7XG4gIGNvbnN0cnVjdG9yKF9jb25maWcsIHJhd0RhdGEgPSBbXSkge1xuICAgIHRoaXMuX2NvbmZpZyA9IF9jb25maWc7XG4gICAgdGhpcy5yYXdEYXRhID0gcmF3RGF0YTtcbiAgICByYXdEYXRhLmZvckVhY2goKGNvbmNlcHREYXRhLCBpbmRleCkgPT4ge1xuICAgICAgdGhpc1tpbmRleF0gPSBuZXcgQ29uY2VwdCh0aGlzLl9jb25maWcsIGNvbmNlcHREYXRhKTtcbiAgICB9KTtcbiAgICB0aGlzLmxlbmd0aCA9IHJhd0RhdGEubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3QgYWxsIHRoZSBjb25jZXB0c1xuICAgKiBAcGFyYW0ge29iamVjdH0gICAgIG9wdGlvbnMgICAgIE9iamVjdCB3aXRoIGtleXMgZXhwbGFpbmVkIGJlbG93OiAob3B0aW9uYWwpXG4gICAqICAgIEBwYXJhbSB7bnVtYmVyfSAgICBvcHRpb25zLnBhZ2UgICAgICAgIFRoZSBwYWdlIG51bWJlciAob3B0aW9uYWwsIGRlZmF1bHQ6IDEpXG4gICAqICAgIEBwYXJhbSB7bnVtYmVyfSAgICBvcHRpb25zLnBlclBhZ2UgICAgIE51bWJlciBvZiBpbWFnZXMgdG8gcmV0dXJuIHBlciBwYWdlIChvcHRpb25hbCwgZGVmYXVsdDogMjApXG4gICAqIEByZXR1cm4ge1Byb21pc2UoQ29uY2VwdHMsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBDb25jZXB0cyBpbnN0YW5jZSBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBsaXN0KG9wdGlvbnMgPSB7cGFnZTogMSwgcGVyUGFnZTogMjB9KSB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuX2NvbmZpZy5hcGlFbmRwb2ludH0ke0NPTkNFUFRTX1BBVEh9YDtcbiAgICByZXR1cm4gd3JhcFRva2VuKHRoaXMuX2NvbmZpZywgKGhlYWRlcnMpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCh1cmwsIHtcbiAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgJ3BhZ2UnOiBvcHRpb25zLnBhZ2UsXG4gICAgICAgICAgICAncGVyX3BhZ2UnOiBvcHRpb25zLnBlclBhZ2UsXG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChpc1N1Y2Nlc3MocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICByZXNvbHZlKG5ldyBDb25jZXB0cyh0aGlzLl9jb25maWcsIHJlc3BvbnNlLmRhdGEuY29uY2VwdHMpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IGEgc2luZ2xlIGNvbmNlcHQgZ2l2ZW4gYW4gaWRcbiAgICogQHBhcmFtIHtTdHJpbmd9ICAgICBpZCAgICAgICAgICBUaGUgY29uY2VwdCdzIGlkXG4gICAqIEByZXR1cm4ge1Byb21pc2UoQ29uY2VwdCwgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhIENvbmNlcHQgaW5zdGFuY2Ugb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgZ2V0KGlkKSB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuX2NvbmZpZy5hcGlFbmRwb2ludH0ke3JlcGxhY2VWYXJzKENPTkNFUFRfUEFUSCwgW2lkXSl9YDtcbiAgICByZXR1cm4gd3JhcFRva2VuKHRoaXMuX2NvbmZpZywgKGhlYWRlcnMpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCh1cmwsIHtoZWFkZXJzfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoaXNTdWNjZXNzKHJlc3BvbnNlKSkge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgQ29uY2VwdCh0aGlzLl9jb25maWcsIHJlc3BvbnNlLmRhdGEuY29uY2VwdCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpc3Qgb2YgY29uY2VwdHMgZ2l2ZW4gYW4gaWQgYW5kIG5hbWVcbiAgICogQHBhcmFtIHtvYmplY3R8b2JqZWN0W119ICAgY29uY2VwdHMgICAgICAgQ2FuIGJlIGEgc2luZ2xlIG1lZGlhIG9iamVjdCBvciBhbiBhcnJheSBvZiBtZWRpYSBvYmplY3RzXG4gICAqICAgQHBhcmFtICB7b2JqZWN0fHN0cmluZ30gICAgY29uY2VwdHNbXS5jb25jZXB0ICAgICAgICAgSWYgc3RyaW5nLCB0aGlzIGlzIGFzc3VtZWQgdG8gYmUgdGhlIGNvbmNlcHQgaWQuIE90aGVyd2lzZSwgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzXG4gICAqICAgICBAcGFyYW0gIHtvYmplY3R9ICAgICAgICAgICBjb25jZXB0c1tdLmNvbmNlcHQuaWQgICAgICBUaGUgbmV3IGNvbmNlcHQncyBpZCAoUmVxdWlyZWQpXG4gICAqICAgICBAcGFyYW0gIHtvYmplY3R9ICAgICAgICAgICBjb25jZXB0c1tdLmNvbmNlcHQubmFtZSAgICBUaGUgbmV3IGNvbmNlcHQncyBuYW1lXG4gICAqIEByZXR1cm4ge1Byb21pc2UoQ29uY2VwdHMsIGVycm9yKX0gICAgICAgICAgICAgQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBDb25jZXB0cyBpbnN0YW5jZSBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBjcmVhdGUoY29uY2VwdHMgPSBbXSkge1xuICAgIGlmIChjaGVja1R5cGUoLyhPYmplY3R8U3RyaW5nKS8sIGNvbmNlcHRzKSkge1xuICAgICAgY29uY2VwdHMgPSBbY29uY2VwdHNdO1xuICAgIH1cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgICdjb25jZXB0cyc6IGNvbmNlcHRzLm1hcChmb3JtYXRDb25jZXB0KVxuICAgIH07XG4gICAgbGV0IHVybCA9IGAke3RoaXMuX2NvbmZpZy5hcGlFbmRwb2ludH0ke0NPTkNFUFRTX1BBVEh9YDtcbiAgICByZXR1cm4gd3JhcFRva2VuKHRoaXMuX2NvbmZpZywgKGhlYWRlcnMpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBkYXRhLCB7aGVhZGVyc30pXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNTdWNjZXNzKHJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICByZXNvbHZlKG5ldyBDb25jZXB0cyh0aGlzLl9jb25maWcsIHJlc3BvbnNlLmRhdGEuY29uY2VwdHMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBmb3IgYSBjb25jZXB0IGdpdmVuIGEgbmFtZS4gQSB3aWxkY2FyZCBjYW4gYmUgZ2l2ZW4gKGV4YW1wbGU6IFRoZSBuYW1lIFwiYm8qXCIgd2lsbCBtYXRjaCB3aXRoIFwiYm9hdFwiIGFuZCBcImJvd1wiIGdpdmVuIHRob3NlIGNvbmNlcHRzIGV4aXN0XG4gICAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICBUaGUgbmFtZSBvZiB0aGUgY29uY2VwdCB0byBzZWFyY2ggZm9yXG4gICAqIEByZXR1cm4ge1Byb21pc2UoQ29uY2VwdHMsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBDb25jZXB0cyBpbnN0YW5jZSBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBzZWFyY2gobmFtZSwgbGFuZ3VhZ2UgPSBudWxsKSB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuX2NvbmZpZy5hcGlFbmRwb2ludH0ke0NPTkNFUFRfU0VBUkNIX1BBVEh9YDtcbiAgICByZXR1cm4gd3JhcFRva2VuKHRoaXMuX2NvbmZpZywgKGhlYWRlcnMpID0+IHtcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICdjb25jZXB0X3F1ZXJ5Jzoge25hbWUsIGxhbmd1YWdlfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBwYXJhbXMsIHtoZWFkZXJzfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoaXNTdWNjZXNzKHJlc3BvbnNlKSkge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgQ29uY2VwdHModGhpcy5fY29uZmlnLCByZXNwb25zZS5kYXRhLmNvbmNlcHRzKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbjtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25jZXB0cztcbiJdfQ==
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/Concepts.js","/")
},{"./Concept":38,"./constants":45,"./helpers":47,"./utils":48,"axios":4,"buffer":23,"pBGvAp":27}],40:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');
var Concepts = require('./Concepts');

var _require = require('./constants'),
    API = _require.API;

var INPUTS_PATH = API.INPUTS_PATH;

/**
 * class representing an input
 * @class
 */

var Input = function () {
  function Input(_config, data) {
    _classCallCheck(this, Input);

    this.id = data.id;
    this.createdAt = data.created_at || data.createdAt;
    this.imageUrl = data.data.image.url;
    this.concepts = new Concepts(_config, data.data.concepts);
    this.score = data.score;
    this.metadata = data.data.metadata;
    if (data.data.geo && data.data.geo['geo_point']) {
      this.geo = { geoPoint: data.data.geo['geo_point'] };
    }
    this.rawData = data;
    this._config = _config;
  }

  /**
   * Merge concepts to an input
   * @param {object[]}         concepts    Object with keys explained below:
   *   @param {object}           concepts[].concept
   *     @param {string}           concepts[].concept.id        The concept id (required)
   *     @param {boolean}          concepts[].concept.value     Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
   * @param {object}           metadata                      Object with key values to attach to the input (optional)
   * @return {Promise(Input, error)} A Promise that is fulfilled with an instance of Input or rejected with an error
   */


  _createClass(Input, [{
    key: 'mergeConcepts',
    value: function mergeConcepts(concepts, metadata) {
      return this._update('merge', concepts, metadata);
    }

    /**
     * Delete concept from an input
     * @param {object[]}         concepts    Object with keys explained below:
     *   @param {object}           concepts[].concept
     *     @param {string}           concepts[].concept.id        The concept id (required)
     *     @param {boolean}          concepts[].concept.value     Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
     * @param {object}           metadata                      Object with key values to attach to the input (optional)
     * @return {Promise(Input, error)} A Promise that is fulfilled with an instance of Input or rejected with an error
     */

  }, {
    key: 'deleteConcepts',
    value: function deleteConcepts(concepts, metadata) {
      return this._update('remove', concepts, metadata);
    }

    /**
     * Overwrite inputs
     * @param {object[]}         concepts                      Array of object with keys explained below:
     *   @param {object}           concepts[].concept
     *     @param {string}           concepts[].concept.id         The concept id (required)
     *     @param {boolean}          concepts[].concept.value      Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
     * @param {object}           metadata                      Object with key values to attach to the input (optional)
     * @return {Promise(Input, error)} A Promise that is fulfilled with an instance of Input or rejected with an error
     */

  }, {
    key: 'overwriteConcepts',
    value: function overwriteConcepts(concepts, metadata) {
      return this._update('overwrite', concepts, metadata);
    }
  }, {
    key: '_update',
    value: function _update(action) {
      var concepts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var metadata = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var url = '' + this._config.apiEndpoint + INPUTS_PATH;
      var inputData = {};
      if (concepts.length) {
        inputData.concepts = concepts;
      }
      if (metadata !== null) {
        inputData.metadata = metadata;
      }
      var data = {
        action: action,
        inputs: [{
          id: this.id,
          data: inputData
        }]
      };
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          return axios.patch(url, data, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Input(response.data.input));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }
  }]);

  return Input;
}();

;

module.exports = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIkNvbmNlcHRzIiwiQVBJIiwiSU5QVVRTX1BBVEgiLCJJbnB1dCIsIl9jb25maWciLCJkYXRhIiwiaWQiLCJjcmVhdGVkQXQiLCJjcmVhdGVkX2F0IiwiaW1hZ2VVcmwiLCJpbWFnZSIsInVybCIsImNvbmNlcHRzIiwic2NvcmUiLCJtZXRhZGF0YSIsImdlbyIsImdlb1BvaW50IiwicmF3RGF0YSIsIl91cGRhdGUiLCJhY3Rpb24iLCJhcGlFbmRwb2ludCIsImlucHV0RGF0YSIsImxlbmd0aCIsImlucHV0cyIsIndyYXBUb2tlbiIsImhlYWRlcnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhdGNoIiwidGhlbiIsInJlc3BvbnNlIiwiaXNTdWNjZXNzIiwiaW5wdXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJQSxRQUFRQyxRQUFRLE9BQVIsQ0FBWjtBQUNBLElBQUlDLFdBQVdELFFBQVEsWUFBUixDQUFmOztlQUNZQSxRQUFRLGFBQVIsQztJQUFQRSxHLFlBQUFBLEc7O0lBQ0FDLFcsR0FBZUQsRyxDQUFmQyxXOztBQUVMOzs7OztJQUlNQyxLO0FBQ0osaUJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtDLEVBQUwsR0FBVUQsS0FBS0MsRUFBZjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJGLEtBQUtHLFVBQUwsSUFBbUJILEtBQUtFLFNBQXpDO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQkosS0FBS0EsSUFBTCxDQUFVSyxLQUFWLENBQWdCQyxHQUFoQztBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSVosUUFBSixDQUFhSSxPQUFiLEVBQXNCQyxLQUFLQSxJQUFMLENBQVVPLFFBQWhDLENBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhUixLQUFLUSxLQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JULEtBQUtBLElBQUwsQ0FBVVMsUUFBMUI7QUFDQSxRQUFJVCxLQUFLQSxJQUFMLENBQVVVLEdBQVYsSUFBaUJWLEtBQUtBLElBQUwsQ0FBVVUsR0FBVixDQUFjLFdBQWQsQ0FBckIsRUFBaUQ7QUFDL0MsV0FBS0EsR0FBTCxHQUFXLEVBQUNDLFVBQVVYLEtBQUtBLElBQUwsQ0FBVVUsR0FBVixDQUFjLFdBQWQsQ0FBWCxFQUFYO0FBQ0Q7QUFDRCxTQUFLRSxPQUFMLEdBQWVaLElBQWY7QUFDQSxTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7OztrQ0FTY1EsUSxFQUFVRSxRLEVBQVU7QUFDaEMsYUFBTyxLQUFLSSxPQUFMLENBQWEsT0FBYixFQUFzQk4sUUFBdEIsRUFBZ0NFLFFBQWhDLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O21DQVNlRixRLEVBQVVFLFEsRUFBVTtBQUNqQyxhQUFPLEtBQUtJLE9BQUwsQ0FBYSxRQUFiLEVBQXVCTixRQUF2QixFQUFpQ0UsUUFBakMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7c0NBU2tCRixRLEVBQVVFLFEsRUFBVTtBQUNwQyxhQUFPLEtBQUtJLE9BQUwsQ0FBYSxXQUFiLEVBQTBCTixRQUExQixFQUFvQ0UsUUFBcEMsQ0FBUDtBQUNEOzs7NEJBRU9LLE0sRUFBd0M7QUFBQSxVQUFoQ1AsUUFBZ0MsdUVBQXJCLEVBQXFCO0FBQUEsVUFBakJFLFFBQWlCLHVFQUFOLElBQU07O0FBQzlDLFVBQUlILFdBQVMsS0FBS1AsT0FBTCxDQUFhZ0IsV0FBdEIsR0FBb0NsQixXQUF4QztBQUNBLFVBQUltQixZQUFZLEVBQWhCO0FBQ0EsVUFBSVQsU0FBU1UsTUFBYixFQUFxQjtBQUNuQkQsa0JBQVVULFFBQVYsR0FBcUJBLFFBQXJCO0FBQ0Q7QUFDRCxVQUFJRSxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCTyxrQkFBVVAsUUFBVixHQUFxQkEsUUFBckI7QUFDRDtBQUNELFVBQUlULE9BQU87QUFDVGMsc0JBRFM7QUFFVEksZ0JBQVEsQ0FDTjtBQUNFakIsY0FBSSxLQUFLQSxFQURYO0FBRUVELGdCQUFNZ0I7QUFGUixTQURNO0FBRkMsT0FBWDtBQVNBLGFBQU9HLFVBQVUsS0FBS3BCLE9BQWYsRUFBd0IsVUFBQ3FCLE9BQUQsRUFBYTtBQUMxQyxlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsaUJBQU85QixNQUFNK0IsS0FBTixDQUFZbEIsR0FBWixFQUFpQk4sSUFBakIsRUFBdUIsRUFBQ29CLGdCQUFELEVBQXZCLEVBQ0pLLElBREksQ0FDQyxVQUFDQyxRQUFELEVBQWM7QUFDbEIsZ0JBQUlDLFVBQVVELFFBQVYsQ0FBSixFQUF5QjtBQUN2Qkosc0JBQVEsSUFBSXhCLEtBQUosQ0FBVTRCLFNBQVMxQixJQUFULENBQWM0QixLQUF4QixDQUFSO0FBQ0QsYUFGRCxNQUVPO0FBQ0xMLHFCQUFPRyxRQUFQO0FBQ0Q7QUFDRixXQVBJLEVBT0ZILE1BUEUsQ0FBUDtBQVFELFNBVE0sQ0FBUDtBQVVELE9BWE0sQ0FBUDtBQVlEOzs7Ozs7QUFFSDs7QUFFQU0sT0FBT0MsT0FBUCxHQUFpQmhDLEtBQWpCIiwiZmlsZSI6IklucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbmxldCBDb25jZXB0cyA9IHJlcXVpcmUoJy4vQ29uY2VwdHMnKTtcbmxldCB7QVBJfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5sZXQge0lOUFVUU19QQVRIfSA9IEFQSTtcblxuLyoqXG4gKiBjbGFzcyByZXByZXNlbnRpbmcgYW4gaW5wdXRcbiAqIEBjbGFzc1xuICovXG5jbGFzcyBJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKF9jb25maWcsIGRhdGEpIHtcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IGRhdGEuY3JlYXRlZF9hdCB8fCBkYXRhLmNyZWF0ZWRBdDtcbiAgICB0aGlzLmltYWdlVXJsID0gZGF0YS5kYXRhLmltYWdlLnVybDtcbiAgICB0aGlzLmNvbmNlcHRzID0gbmV3IENvbmNlcHRzKF9jb25maWcsIGRhdGEuZGF0YS5jb25jZXB0cyk7XG4gICAgdGhpcy5zY29yZSA9IGRhdGEuc2NvcmU7XG4gICAgdGhpcy5tZXRhZGF0YSA9IGRhdGEuZGF0YS5tZXRhZGF0YTtcbiAgICBpZiAoZGF0YS5kYXRhLmdlbyAmJiBkYXRhLmRhdGEuZ2VvWydnZW9fcG9pbnQnXSkge1xuICAgICAgdGhpcy5nZW8gPSB7Z2VvUG9pbnQ6IGRhdGEuZGF0YS5nZW9bJ2dlb19wb2ludCddfTtcbiAgICB9XG4gICAgdGhpcy5yYXdEYXRhID0gZGF0YTtcbiAgICB0aGlzLl9jb25maWcgPSBfY29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIGNvbmNlcHRzIHRvIGFuIGlucHV0XG4gICAqIEBwYXJhbSB7b2JqZWN0W119ICAgICAgICAgY29uY2VwdHMgICAgT2JqZWN0IHdpdGgga2V5cyBleHBsYWluZWQgYmVsb3c6XG4gICAqICAgQHBhcmFtIHtvYmplY3R9ICAgICAgICAgICBjb25jZXB0c1tdLmNvbmNlcHRcbiAgICogICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgY29uY2VwdHNbXS5jb25jZXB0LmlkICAgICAgICBUaGUgY29uY2VwdCBpZCAocmVxdWlyZWQpXG4gICAqICAgICBAcGFyYW0ge2Jvb2xlYW59ICAgICAgICAgIGNvbmNlcHRzW10uY29uY2VwdC52YWx1ZSAgICAgV2hldGhlciBvciBub3QgdGhlIGlucHV0IGlzIGEgcG9zaXRpdmUgKHRydWUpIG9yIG5lZ2F0aXZlIChmYWxzZSkgZXhhbXBsZSBvZiB0aGUgY29uY2VwdCAoZGVmYXVsdDogdHJ1ZSlcbiAgICogQHBhcmFtIHtvYmplY3R9ICAgICAgICAgICBtZXRhZGF0YSAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qgd2l0aCBrZXkgdmFsdWVzIHRvIGF0dGFjaCB0byB0aGUgaW5wdXQgKG9wdGlvbmFsKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlKElucHV0LCBlcnJvcil9IEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGFuIGluc3RhbmNlIG9mIElucHV0IG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIG1lcmdlQ29uY2VwdHMoY29uY2VwdHMsIG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZSgnbWVyZ2UnLCBjb25jZXB0cywgbWV0YWRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjb25jZXB0IGZyb20gYW4gaW5wdXRcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gICAgICAgICBjb25jZXB0cyAgICBPYmplY3Qgd2l0aCBrZXlzIGV4cGxhaW5lZCBiZWxvdzpcbiAgICogICBAcGFyYW0ge29iamVjdH0gICAgICAgICAgIGNvbmNlcHRzW10uY29uY2VwdFxuICAgKiAgICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICBjb25jZXB0c1tdLmNvbmNlcHQuaWQgICAgICAgIFRoZSBjb25jZXB0IGlkIChyZXF1aXJlZClcbiAgICogICAgIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICAgY29uY2VwdHNbXS5jb25jZXB0LnZhbHVlICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgaW5wdXQgaXMgYSBwb3NpdGl2ZSAodHJ1ZSkgb3IgbmVnYXRpdmUgKGZhbHNlKSBleGFtcGxlIG9mIHRoZSBjb25jZXB0IChkZWZhdWx0OiB0cnVlKVxuICAgKiBAcGFyYW0ge29iamVjdH0gICAgICAgICAgIG1ldGFkYXRhICAgICAgICAgICAgICAgICAgICAgIE9iamVjdCB3aXRoIGtleSB2YWx1ZXMgdG8gYXR0YWNoIHRvIHRoZSBpbnB1dCAob3B0aW9uYWwpXG4gICAqIEByZXR1cm4ge1Byb21pc2UoSW5wdXQsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYW4gaW5zdGFuY2Ugb2YgSW5wdXQgb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgZGVsZXRlQ29uY2VwdHMoY29uY2VwdHMsIG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZSgncmVtb3ZlJywgY29uY2VwdHMsIG1ldGFkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVyd3JpdGUgaW5wdXRzXG4gICAqIEBwYXJhbSB7b2JqZWN0W119ICAgICAgICAgY29uY2VwdHMgICAgICAgICAgICAgICAgICAgICAgQXJyYXkgb2Ygb2JqZWN0IHdpdGgga2V5cyBleHBsYWluZWQgYmVsb3c6XG4gICAqICAgQHBhcmFtIHtvYmplY3R9ICAgICAgICAgICBjb25jZXB0c1tdLmNvbmNlcHRcbiAgICogICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgY29uY2VwdHNbXS5jb25jZXB0LmlkICAgICAgICAgVGhlIGNvbmNlcHQgaWQgKHJlcXVpcmVkKVxuICAgKiAgICAgQHBhcmFtIHtib29sZWFufSAgICAgICAgICBjb25jZXB0c1tdLmNvbmNlcHQudmFsdWUgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgaW5wdXQgaXMgYSBwb3NpdGl2ZSAodHJ1ZSkgb3IgbmVnYXRpdmUgKGZhbHNlKSBleGFtcGxlIG9mIHRoZSBjb25jZXB0IChkZWZhdWx0OiB0cnVlKVxuICAgKiBAcGFyYW0ge29iamVjdH0gICAgICAgICAgIG1ldGFkYXRhICAgICAgICAgICAgICAgICAgICAgIE9iamVjdCB3aXRoIGtleSB2YWx1ZXMgdG8gYXR0YWNoIHRvIHRoZSBpbnB1dCAob3B0aW9uYWwpXG4gICAqIEByZXR1cm4ge1Byb21pc2UoSW5wdXQsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYW4gaW5zdGFuY2Ugb2YgSW5wdXQgb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgb3ZlcndyaXRlQ29uY2VwdHMoY29uY2VwdHMsIG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZSgnb3ZlcndyaXRlJywgY29uY2VwdHMsIG1ldGFkYXRhKTtcbiAgfVxuXG4gIF91cGRhdGUoYWN0aW9uLCBjb25jZXB0cyA9IFtdLCBtZXRhZGF0YSA9IG51bGwpIHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5fY29uZmlnLmFwaUVuZHBvaW50fSR7SU5QVVRTX1BBVEh9YDtcbiAgICBsZXQgaW5wdXREYXRhID0ge307XG4gICAgaWYgKGNvbmNlcHRzLmxlbmd0aCkge1xuICAgICAgaW5wdXREYXRhLmNvbmNlcHRzID0gY29uY2VwdHM7XG4gICAgfVxuICAgIGlmIChtZXRhZGF0YSAhPT0gbnVsbCkge1xuICAgICAgaW5wdXREYXRhLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgfVxuICAgIGxldCBkYXRhID0ge1xuICAgICAgYWN0aW9uLFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICBkYXRhOiBpbnB1dERhdGFcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gICAgcmV0dXJuIHdyYXBUb2tlbih0aGlzLl9jb25maWcsIChoZWFkZXJzKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3MucGF0Y2godXJsLCBkYXRhLCB7aGVhZGVyc30pXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNTdWNjZXNzKHJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICByZXNvbHZlKG5ldyBJbnB1dChyZXNwb25zZS5kYXRhLmlucHV0KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuIl19
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/Input.js","/")
},{"./Concepts":39,"./constants":45,"axios":4,"buffer":23,"pBGvAp":27}],41:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');
var Input = require('./Input');

var _require = require('./constants'),
    API = _require.API,
    ERRORS = _require.ERRORS,
    MAX_BATCH_SIZE = _require.MAX_BATCH_SIZE,
    replaceVars = _require.replaceVars;

var INPUT_PATH = API.INPUT_PATH,
    INPUTS_PATH = API.INPUTS_PATH,
    INPUTS_STATUS_PATH = API.INPUTS_STATUS_PATH,
    SEARCH_PATH = API.SEARCH_PATH;

var _require2 = require('./utils'),
    wrapToken = _require2.wrapToken,
    formatInput = _require2.formatInput,
    formatImagesSearch = _require2.formatImagesSearch,
    formatConceptsSearch = _require2.formatConceptsSearch;

var _require3 = require('./helpers'),
    isSuccess = _require3.isSuccess,
    checkType = _require3.checkType,
    clone = _require3.clone;

/**
 * class representing a collection of inputs
 * @class
 */


var Inputs = function () {
  function Inputs(_config) {
    var _this = this;

    var rawData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Inputs);

    this.rawData = rawData;
    rawData.forEach(function (inputData, index) {
      if (inputData.input && inputData.score) {
        inputData.input.score = inputData.score;
        inputData = inputData.input;
      }
      _this[index] = new Input(_this._config, inputData);
    });
    this.length = rawData.length;
    this._config = _config;
  }

  /**
   * Get all inputs in app
   * @param {Object}    options  Object with keys explained below: (optional)
   *   @param {Number}    options.page  The page number (optional, default: 1)
   *   @param {Number}    options.perPage  Number of images to return per page (optional, default: 20)
   * @return {Promise(Inputs, error)} A Promise that is fulfilled with an instance of Inputs or rejected with an error
   */


  _createClass(Inputs, [{
    key: 'list',
    value: function list() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { page: 1, perPage: 20 };

      var url = '' + this._config.apiEndpoint + INPUTS_PATH;
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.get(url, {
            headers: headers,
            params: {
              page: options.page,
              per_page: options.perPage
            }
          }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Inputs(_this2._config, response.data.inputs));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * Adds an input or multiple inputs
     * @param {object|object[]}        inputs                                Can be a single media object or an array of media objects (max of 128 inputs/call; passing > 128 will throw an exception)
     *   @param {object|string}          inputs[].input                        If string, is given, this is assumed to be an image url
     *     @param {string}                 inputs[].input.(url|base64)           Can be a publicly accessibly url or base64 string representing image bytes (required)
     *     @param {string}                 inputs[].input.id                     ID of input (optional)
     *     @param {number[]}               inputs[].input.crop                   An array containing the percent to be cropped from top, left, bottom and right (optional)
     *     @param {object[]}               inputs[].input.metadata               Object with key and values pair (value can be string, array or other objects) to attach to the input (optional)
     *     @param {object}                 inputs[].input.geo                    Object with latitude and longitude coordinates to associate with an input. Can be used in search query as the proximity of an input to a reference point (optional)
     *       @param {number}                 inputs[].input.geo.latitude           +/- latitude val of geodata
     *       @param {number}                 inputs[].input.geo.longitude          +/- longitude val of geodata
     *     @param {object[]}               inputs[].input.concepts               An array of concepts to attach to media object (optional)
     *       @param {object|string}          inputs[].input.concepts[].concept     If string, is given, this is assumed to be concept id with value equals true
     *         @param {string}                 inputs[].input.concepts[].concept.id          The concept id (required)
     *         @param {boolean}                inputs[].input.concepts[].concept.value       Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
     * @return {Promise(Inputs, error)} A Promise that is fulfilled with an instance of Inputs or rejected with an error
     */

  }, {
    key: 'create',
    value: function create(inputs) {
      var _this3 = this;

      if (checkType(/(String|Object)/, inputs)) {
        inputs = [inputs];
      }
      var url = '' + this._config.apiEndpoint + INPUTS_PATH;
      if (inputs.length > MAX_BATCH_SIZE) {
        throw ERRORS.MAX_INPUTS;
      }
      return wrapToken(this._config, function (headers) {
        var data = {
          inputs: inputs.map(formatInput)
        };
        return new Promise(function (resolve, reject) {
          axios.post(url, data, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Inputs(_this3._config, response.data.inputs));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * Get input by id
     * @param {String}    id  The input id
     * @return {Promise(Input, error)} A Promise that is fulfilled with an instance of Input or rejected with an error
     */

  }, {
    key: 'get',
    value: function get(id) {
      var _this4 = this;

      var url = '' + this._config.apiEndpoint + replaceVars(INPUT_PATH, [id]);
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.get(url, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Input(_this4._config, response.data.input));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * Delete an input or a list of inputs by id or all inputs if no id is passed
     * @param {string|string[]}    id           The id of input to delete (optional)
     * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
     */

  }, {
    key: 'delete',
    value: function _delete() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var val = void 0;
      // delete an input
      if (checkType(/String/, id)) {
        var url = '' + this._config.apiEndpoint + replaceVars(INPUT_PATH, [id]);
        val = wrapToken(this._config, function (headers) {
          return axios.delete(url, { headers: headers });
        });
      } else {
        val = this._deleteInputs(id);
      }
      return val;
    }
  }, {
    key: '_deleteInputs',
    value: function _deleteInputs() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var url = '' + this._config.apiEndpoint + INPUTS_PATH;
      return wrapToken(this._config, function (headers) {
        var data = id === null ? { delete_all: true } : { ids: id };
        return axios({
          url: url,
          method: 'delete',
          headers: headers,
          data: data
        });
      });
    }

    /**
     * Merge concepts to inputs in bulk
     * @param {object[]}         inputs    List of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception)
     *   @param {object}           inputs[].input
     *     @param {string}           inputs[].input.id        The id of the input to update
     *     @param {string}           inputs[].input.concepts  Object with keys explained below:
     *       @param {object}           inputs[].input.concepts[].concept
     *         @param {string}           inputs[].input.concepts[].concept.id        The concept id (required)
     *         @param {boolean}          inputs[].input.concepts[].concept.value     Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
     * @return {Promise(Inputs, error)} A Promise that is fulfilled with an instance of Inputs or rejected with an error
     */

  }, {
    key: 'mergeConcepts',
    value: function mergeConcepts(inputs) {
      inputs.action = 'merge';
      return this.update(inputs);
    }

    /**
     * Delete concepts to inputs in bulk
     * @param {object[]}         inputs    List of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception)
     *   @param {object}           inputs[].input
     *     @param {string}           inputs[].input.id                           The id of the input to update
     *     @param {string}           inputs[].input.concepts                     Object with keys explained below:
     *       @param {object}           inputs[].input.concepts[].concept
     *         @param {string}           inputs[].input.concepts[].concept.id        The concept id (required)
     *         @param {boolean}          inputs[].input.concepts[].concept.value     Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
     * @return {Promise(Inputs, error)} A Promise that is fulfilled with an instance of Inputs or rejected with an error
     */

  }, {
    key: 'deleteConcepts',
    value: function deleteConcepts(inputs) {
      inputs.action = 'remove';
      return this.update(inputs);
    }

    /**
     * Overwrite inputs in bulk
     * @param {object[]}         inputs    List of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception)
     *   @param {object}           inputs[].input
     *     @param {string}           inputs[].input.id                           The id of the input to update
     *     @param {string}           inputs[].input.concepts                     Object with keys explained below:
     *       @param {object}           inputs[].input.concepts[].concept
     *         @param {string}           inputs[].input.concepts[].concept.id        The concept id (required)
     *         @param {boolean}          inputs[].input.concepts[].concept.value     Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
     * @return {Promise(Inputs, error)} A Promise that is fulfilled with an instance of Inputs or rejected with an error
     */

  }, {
    key: 'overwriteConcepts',
    value: function overwriteConcepts(inputs) {
      inputs.action = 'overwrite';
      return this.update(inputs);
    }

    /**
     * @param {object[]}         inputs    List of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception)
     *   @param {object}           inputs[].input
     *     @param {string}           inputs[].input.id                           The id of the input to update
     *     @param {object}           inputs[].input.metadata                     Object with key values to attach to the input (optional)
     *     @param {object}           inputs[].input.geo                          Object with latitude and longitude coordinates to associate with an input. Can be used in search query as the proximity of an input to a reference point (optional)
     *       @param {number}           inputs[].input.geo.latitude                 +/- latitude val of geodata
     *       @param {number}           inputs[].input.geo.longitude                +/- longitude val of geodata
     *     @param {string}           inputs[].input.concepts                     Object with keys explained below (optional):
     *       @param {object}           inputs[].input.concepts[].concept
     *         @param {string}           inputs[].input.concepts[].concept.id        The concept id (required)
     *         @param {boolean}          inputs[].input.concepts[].concept.value     Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
     * @return {Promise(Inputs, error)} A Promise that is fulfilled with an instance of Inputs or rejected with an error
     */

  }, {
    key: 'update',
    value: function update(inputs) {
      var _this5 = this;

      var url = '' + this._config.apiEndpoint + INPUTS_PATH;
      var inputsList = Array.isArray(inputs) ? inputs : [inputs];
      if (inputsList.length > MAX_BATCH_SIZE) {
        throw ERRORS.MAX_INPUTS;
      }
      var data = {
        action: inputs.action,
        inputs: inputsList.map(function (input) {
          return formatInput(input, false);
        })
      };
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.patch(url, data, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Inputs(_this5._config, response.data.inputs));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * Search for inputs or outputs based on concepts or images
     *   @param {object[]}               queries          List of all predictions to match with
     *     @param {object}                 queries[].concept            An object with the following keys:
     *       @param {string}                 queries[].concept.id          The concept id
     *       @param {string}                 queries[].concept.type        Search over 'input' to get input matches to criteria or 'output' to get inputs that are visually similar to the criteria (default: 'output')
     *       @param {string}                 queries[].concept.name        The concept name
     *       @param {boolean}                queries[].concept.value       Indicates whether or not the term should match with the prediction returned (default: true)
     *     @param {object}                 queries[].input              An image object that contains the following keys:
     *       @param {string}                 queries[].input.id            The input id
     *       @param {string}                 queries[].input.type          Search over 'input' to get input matches to criteria or 'output' to get inputs that are visually similar to the criteria (default: 'output')
     *       @param {string}                 queries[].input.(base64|url)  Can be a publicly accessibly url or base64 string representing image bytes (required)
     *       @param {number[]}               queries[].input.crop          An array containing the percent to be cropped from top, left, bottom and right (optional)
     *       @param {object}                 queries[].input.metadata      An object with key and value specified by user to refine search with (optional)
     * @param {Object}                   options       Object with keys explained below: (optional)
     *    @param {Number}                  options.page          The page number (optional, default: 1)
     *    @param {Number}                  options.perPage       Number of images to return per page (optional, default: 20)
     * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
     */

  }, {
    key: 'search',
    value: function search() {
      var queries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { page: 1, perPage: 20 };

      var formattedAnds = [];
      var url = '' + this._config.apiEndpoint + SEARCH_PATH;
      var data = {
        query: {
          ands: []
        },
        pagination: {
          page: options.page,
          per_page: options.perPage
        }
      };

      if (!Array.isArray(queries)) {
        queries = [queries];
      }
      if (queries.length > 0) {
        queries.forEach(function (query) {
          if (query.input) {
            formattedAnds = formattedAnds.concat(formatImagesSearch(query.input));
          } else if (query.concept) {
            formattedAnds = formattedAnds.concat(formatConceptsSearch(query.concept));
          }
        });
        data.query.ands = formattedAnds;
      }
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.post(url, data, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              var _data = clone(response.data);
              _data.rawData = clone(response.data);
              resolve(_data);
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * Get inputs status (number of uploaded, in process or failed inputs)
     * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
     */

  }, {
    key: 'getStatus',
    value: function getStatus() {
      var url = '' + this._config.apiEndpoint + INPUTS_STATUS_PATH;
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.get(url, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              var data = clone(response.data);
              data.rawData = clone(response.data);
              resolve(data);
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }
  }]);

  return Inputs;
}();

;

module.exports = Inputs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0cy5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJJbnB1dCIsIkFQSSIsIkVSUk9SUyIsIk1BWF9CQVRDSF9TSVpFIiwicmVwbGFjZVZhcnMiLCJJTlBVVF9QQVRIIiwiSU5QVVRTX1BBVEgiLCJJTlBVVFNfU1RBVFVTX1BBVEgiLCJTRUFSQ0hfUEFUSCIsIndyYXBUb2tlbiIsImZvcm1hdElucHV0IiwiZm9ybWF0SW1hZ2VzU2VhcmNoIiwiZm9ybWF0Q29uY2VwdHNTZWFyY2giLCJpc1N1Y2Nlc3MiLCJjaGVja1R5cGUiLCJjbG9uZSIsIklucHV0cyIsIl9jb25maWciLCJyYXdEYXRhIiwiZm9yRWFjaCIsImlucHV0RGF0YSIsImluZGV4IiwiaW5wdXQiLCJzY29yZSIsImxlbmd0aCIsIm9wdGlvbnMiLCJwYWdlIiwicGVyUGFnZSIsInVybCIsImFwaUVuZHBvaW50IiwiaGVhZGVycyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwicGFyYW1zIiwicGVyX3BhZ2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiaW5wdXRzIiwiTUFYX0lOUFVUUyIsIm1hcCIsInBvc3QiLCJpZCIsInZhbCIsImRlbGV0ZSIsIl9kZWxldGVJbnB1dHMiLCJkZWxldGVfYWxsIiwiaWRzIiwibWV0aG9kIiwiYWN0aW9uIiwidXBkYXRlIiwiaW5wdXRzTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInBhdGNoIiwicXVlcmllcyIsImZvcm1hdHRlZEFuZHMiLCJxdWVyeSIsImFuZHMiLCJwYWdpbmF0aW9uIiwiY29uY2F0IiwiY29uY2VwdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUlBLFFBQVFDLFFBQVEsT0FBUixDQUFaO0FBQ0EsSUFBSUMsUUFBUUQsUUFBUSxTQUFSLENBQVo7O2VBQ2lEQSxRQUFRLGFBQVIsQztJQUE1Q0UsRyxZQUFBQSxHO0lBQUtDLE0sWUFBQUEsTTtJQUFRQyxjLFlBQUFB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LEVBQ0dPLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsZ0JBQUl6QixVQUFVeUIsUUFBVixDQUFKLEVBQXlCO0FBQ3ZCLGtCQUFJQyxRQUFPeEIsTUFBTXVCLFNBQVNDLElBQWYsQ0FBWDtBQUNBQSxvQkFBS3JCLE9BQUwsR0FBZUgsTUFBTXVCLFNBQVNDLElBQWYsQ0FBZjtBQUNBUCxzQkFBUU8sS0FBUjtBQUNELGFBSkQsTUFJTztBQUNMTixxQkFBT0ssUUFBUDtBQUNEO0FBQ0YsV0FUSCxFQVNLTCxNQVRMO0FBVUQsU0FYTSxDQUFQO0FBWUQsT0FiTSxDQUFQO0FBY0Q7O0FBRUQ7Ozs7Ozs7Z0NBSVk7QUFDVixVQUFJTCxXQUFTLEtBQUtYLE9BQUwsQ0FBYVksV0FBdEIsR0FBb0N0QixrQkFBeEM7QUFDQSxhQUFPRSxVQUFVLEtBQUtRLE9BQWYsRUFBd0IsVUFBQ2EsT0FBRCxFQUFhO0FBQzFDLGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q25DLGdCQUFNb0MsR0FBTixDQUFVTixHQUFWLEVBQWUsRUFBQ0UsZ0JBQUQsRUFBZixFQUNHTyxJQURILENBQ1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLGdCQUFJekIsVUFBVXlCLFFBQVYsQ0FBSixFQUF5QjtBQUN2QixrQkFBSUMsT0FBT3hCLE1BQU11QixTQUFTQyxJQUFmLENBQVg7QUFDQUEsbUJBQUtyQixPQUFMLEdBQWVILE1BQU11QixTQUFTQyxJQUFmLENBQWY7QUFDQVAsc0JBQVFPLElBQVI7QUFDRCxhQUpELE1BSU87QUFDTE4scUJBQU9LLFFBQVA7QUFDRDtBQUNGLFdBVEgsRUFTS0wsTUFUTDtBQVVELFNBWE0sQ0FBUDtBQVlELE9BYk0sQ0FBUDtBQWNEOzs7Ozs7QUFFSDs7QUFFQStCLE9BQU9DLE9BQVAsR0FBaUJqRCxNQUFqQiIsImZpbGUiOiJJbnB1dHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xubGV0IElucHV0ID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xubGV0IHtBUEksIEVSUk9SUywgTUFYX0JBVENIX1NJWkUsIHJlcGxhY2VWYXJzfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5sZXQge0lOUFVUX1BBVEgsIElOUFVUU19QQVRILCBJTlBVVFNfU1RBVFVTX1BBVEgsIFNFQVJDSF9QQVRIfSA9IEFQSTtcbmxldCB7d3JhcFRva2VuLCBmb3JtYXRJbnB1dCwgZm9ybWF0SW1hZ2VzU2VhcmNoLCBmb3JtYXRDb25jZXB0c1NlYXJjaH0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5sZXQge2lzU3VjY2VzcywgY2hlY2tUeXBlLCBjbG9uZX0gPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcblxuLyoqXG4gKiBjbGFzcyByZXByZXNlbnRpbmcgYSBjb2xsZWN0aW9uIG9mIGlucHV0c1xuICogQGNsYXNzXG4gKi9cbmNsYXNzIElucHV0cyB7XG4gIGNvbnN0cnVjdG9yKF9jb25maWcsIHJhd0RhdGEgPSBbXSkge1xuICAgIHRoaXMucmF3RGF0YSA9IHJhd0RhdGE7XG4gICAgcmF3RGF0YS5mb3JFYWNoKChpbnB1dERhdGEsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5wdXREYXRhLmlucHV0ICYmIGlucHV0RGF0YS5zY29yZSkge1xuICAgICAgICBpbnB1dERhdGEuaW5wdXQuc2NvcmUgPSBpbnB1dERhdGEuc2NvcmU7XG4gICAgICAgIGlucHV0RGF0YSA9IGlucHV0RGF0YS5pbnB1dDtcbiAgICAgIH1cbiAgICAgIHRoaXNbaW5kZXhdID0gbmV3IElucHV0KHRoaXMuX2NvbmZpZywgaW5wdXREYXRhKTtcbiAgICB9KTtcbiAgICB0aGlzLmxlbmd0aCA9IHJhd0RhdGEubGVuZ3RoO1xuICAgIHRoaXMuX2NvbmZpZyA9IF9jb25maWc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBpbnB1dHMgaW4gYXBwXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgICBvcHRpb25zICBPYmplY3Qgd2l0aCBrZXlzIGV4cGxhaW5lZCBiZWxvdzogKG9wdGlvbmFsKVxuICAgKiAgIEBwYXJhbSB7TnVtYmVyfSAgICBvcHRpb25zLnBhZ2UgIFRoZSBwYWdlIG51bWJlciAob3B0aW9uYWwsIGRlZmF1bHQ6IDEpXG4gICAqICAgQHBhcmFtIHtOdW1iZXJ9ICAgIG9wdGlvbnMucGVyUGFnZSAgTnVtYmVyIG9mIGltYWdlcyB0byByZXR1cm4gcGVyIHBhZ2UgKG9wdGlvbmFsLCBkZWZhdWx0OiAyMClcbiAgICogQHJldHVybiB7UHJvbWlzZShJbnB1dHMsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYW4gaW5zdGFuY2Ugb2YgSW5wdXRzIG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIGxpc3Qob3B0aW9ucyA9IHtwYWdlOiAxLCBwZXJQYWdlOiAyMH0pIHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5fY29uZmlnLmFwaUVuZHBvaW50fSR7SU5QVVRTX1BBVEh9YDtcbiAgICByZXR1cm4gd3JhcFRva2VuKHRoaXMuX2NvbmZpZywgKGhlYWRlcnMpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCh1cmwsIHtcbiAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcGFnZTogb3B0aW9ucy5wYWdlLFxuICAgICAgICAgICAgcGVyX3BhZ2U6IG9wdGlvbnMucGVyUGFnZSxcbiAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKGlzU3VjY2VzcyhyZXNwb25zZSkpIHtcbiAgICAgICAgICAgIHJlc29sdmUobmV3IElucHV0cyh0aGlzLl9jb25maWcsIHJlc3BvbnNlLmRhdGEuaW5wdXRzKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBpbnB1dCBvciBtdWx0aXBsZSBpbnB1dHNcbiAgICogQHBhcmFtIHtvYmplY3R8b2JqZWN0W119ICAgICAgICBpbnB1dHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbiBiZSBhIHNpbmdsZSBtZWRpYSBvYmplY3Qgb3IgYW4gYXJyYXkgb2YgbWVkaWEgb2JqZWN0cyAobWF4IG9mIDEyOCBpbnB1dHMvY2FsbDsgcGFzc2luZyA+IDEyOCB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbilcbiAgICogICBAcGFyYW0ge29iamVjdHxzdHJpbmd9ICAgICAgICAgIGlucHV0c1tdLmlucHV0ICAgICAgICAgICAgICAgICAgICAgICAgSWYgc3RyaW5nLCBpcyBnaXZlbiwgdGhpcyBpcyBhc3N1bWVkIHRvIGJlIGFuIGltYWdlIHVybFxuICAgKiAgICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICBpbnB1dHNbXS5pbnB1dC4odXJsfGJhc2U2NCkgICAgICAgICAgIENhbiBiZSBhIHB1YmxpY2x5IGFjY2Vzc2libHkgdXJsIG9yIGJhc2U2NCBzdHJpbmcgcmVwcmVzZW50aW5nIGltYWdlIGJ5dGVzIChyZXF1aXJlZClcbiAgICogICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgaW5wdXRzW10uaW5wdXQuaWQgICAgICAgICAgICAgICAgICAgICBJRCBvZiBpbnB1dCAob3B0aW9uYWwpXG4gICAqICAgICBAcGFyYW0ge251bWJlcltdfSAgICAgICAgICAgICAgIGlucHV0c1tdLmlucHV0LmNyb3AgICAgICAgICAgICAgICAgICAgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgcGVyY2VudCB0byBiZSBjcm9wcGVkIGZyb20gdG9wLCBsZWZ0LCBib3R0b20gYW5kIHJpZ2h0IChvcHRpb25hbClcbiAgICogICAgIEBwYXJhbSB7b2JqZWN0W119ICAgICAgICAgICAgICAgaW5wdXRzW10uaW5wdXQubWV0YWRhdGEgICAgICAgICAgICAgICBPYmplY3Qgd2l0aCBrZXkgYW5kIHZhbHVlcyBwYWlyICh2YWx1ZSBjYW4gYmUgc3RyaW5nLCBhcnJheSBvciBvdGhlciBvYmplY3RzKSB0byBhdHRhY2ggdG8gdGhlIGlucHV0IChvcHRpb25hbClcbiAgICogICAgIEBwYXJhbSB7b2JqZWN0fSAgICAgICAgICAgICAgICAgaW5wdXRzW10uaW5wdXQuZ2VvICAgICAgICAgICAgICAgICAgICBPYmplY3Qgd2l0aCBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGNvb3JkaW5hdGVzIHRvIGFzc29jaWF0ZSB3aXRoIGFuIGlucHV0LiBDYW4gYmUgdXNlZCBpbiBzZWFyY2ggcXVlcnkgYXMgdGhlIHByb3hpbWl0eSBvZiBhbiBpbnB1dCB0byBhIHJlZmVyZW5jZSBwb2ludCAob3B0aW9uYWwpXG4gICAqICAgICAgIEBwYXJhbSB7bnVtYmVyfSAgICAgICAgICAgICAgICAgaW5wdXRzW10uaW5wdXQuZ2VvLmxhdGl0dWRlICAgICAgICAgICArLy0gbGF0aXR1ZGUgdmFsIG9mIGdlb2RhdGFcbiAgICogICAgICAgQHBhcmFtIHtudW1iZXJ9ICAgICAgICAgICAgICAgICBpbnB1dHNbXS5pbnB1dC5nZW8ubG9uZ2l0dWRlICAgICAgICAgICsvLSBsb25naXR1ZGUgdmFsIG9mIGdlb2RhdGFcbiAgICogICAgIEBwYXJhbSB7b2JqZWN0W119ICAgICAgICAgICAgICAgaW5wdXRzW10uaW5wdXQuY29uY2VwdHMgICAgICAgICAgICAgICBBbiBhcnJheSBvZiBjb25jZXB0cyB0byBhdHRhY2ggdG8gbWVkaWEgb2JqZWN0IChvcHRpb25hbClcbiAgICogICAgICAgQHBhcmFtIHtvYmplY3R8c3RyaW5nfSAgICAgICAgICBpbnB1dHNbXS5pbnB1dC5jb25jZXB0c1tdLmNvbmNlcHQgICAgIElmIHN0cmluZywgaXMgZ2l2ZW4sIHRoaXMgaXMgYXNzdW1lZCB0byBiZSBjb25jZXB0IGlkIHdpdGggdmFsdWUgZXF1YWxzIHRydWVcbiAgICogICAgICAgICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgIGlucHV0c1tdLmlucHV0LmNvbmNlcHRzW10uY29uY2VwdC5pZCAgICAgICAgICBUaGUgY29uY2VwdCBpZCAocmVxdWlyZWQpXG4gICAqICAgICAgICAgQHBhcmFtIHtib29sZWFufSAgICAgICAgICAgICAgICBpbnB1dHNbXS5pbnB1dC5jb25jZXB0c1tdLmNvbmNlcHQudmFsdWUgICAgICAgV2hldGhlciBvciBub3QgdGhlIGlucHV0IGlzIGEgcG9zaXRpdmUgKHRydWUpIG9yIG5lZ2F0aXZlIChmYWxzZSkgZXhhbXBsZSBvZiB0aGUgY29uY2VwdCAoZGVmYXVsdDogdHJ1ZSlcbiAgICogQHJldHVybiB7UHJvbWlzZShJbnB1dHMsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYW4gaW5zdGFuY2Ugb2YgSW5wdXRzIG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIGNyZWF0ZShpbnB1dHMpIHtcbiAgICBpZiAoY2hlY2tUeXBlKC8oU3RyaW5nfE9iamVjdCkvLCBpbnB1dHMpKSB7XG4gICAgICBpbnB1dHMgPSBbaW5wdXRzXTtcbiAgICB9XG4gICAgbGV0IHVybCA9IGAke3RoaXMuX2NvbmZpZy5hcGlFbmRwb2ludH0ke0lOUFVUU19QQVRIfWA7XG4gICAgaWYgKGlucHV0cy5sZW5ndGggPiBNQVhfQkFUQ0hfU0laRSkge1xuICAgICAgdGhyb3cgRVJST1JTLk1BWF9JTlBVVFM7XG4gICAgfVxuICAgIHJldHVybiB3cmFwVG9rZW4odGhpcy5fY29uZmlnLCAoaGVhZGVycykgPT4ge1xuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIGlucHV0czogaW5wdXRzLm1hcChmb3JtYXRJbnB1dClcbiAgICAgIH07XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KHVybCwgZGF0YSwge2hlYWRlcnN9KVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzU3VjY2VzcyhyZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgSW5wdXRzKHRoaXMuX2NvbmZpZywgcmVzcG9uc2UuZGF0YS5pbnB1dHMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbnB1dCBieSBpZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gICAgaWQgIFRoZSBpbnB1dCBpZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlKElucHV0LCBlcnJvcil9IEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGFuIGluc3RhbmNlIG9mIElucHV0IG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIGdldChpZCkge1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLl9jb25maWcuYXBpRW5kcG9pbnR9JHtyZXBsYWNlVmFycyhJTlBVVF9QQVRILCBbaWRdKX1gO1xuICAgIHJldHVybiB3cmFwVG9rZW4odGhpcy5fY29uZmlnLCAoaGVhZGVycykgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KHVybCwge2hlYWRlcnN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChpc1N1Y2Nlc3MocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICByZXNvbHZlKG5ldyBJbnB1dCh0aGlzLl9jb25maWcsIHJlc3BvbnNlLmRhdGEuaW5wdXQpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYW4gaW5wdXQgb3IgYSBsaXN0IG9mIGlucHV0cyBieSBpZCBvciBhbGwgaW5wdXRzIGlmIG5vIGlkIGlzIHBhc3NlZFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gICAgaWQgICAgICAgICAgIFRoZSBpZCBvZiBpbnB1dCB0byBkZWxldGUgKG9wdGlvbmFsKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlKHJlc3BvbnNlLCBlcnJvcil9IEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIHRoZSBBUEkgcmVzcG9uc2Ugb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgZGVsZXRlKGlkID0gbnVsbCkge1xuICAgIGxldCB2YWw7XG4gICAgLy8gZGVsZXRlIGFuIGlucHV0XG4gICAgaWYgKGNoZWNrVHlwZSgvU3RyaW5nLywgaWQpKSB7XG4gICAgICBsZXQgdXJsID0gYCR7dGhpcy5fY29uZmlnLmFwaUVuZHBvaW50fSR7cmVwbGFjZVZhcnMoSU5QVVRfUEFUSCwgW2lkXSl9YDtcbiAgICAgIHZhbCA9IHdyYXBUb2tlbih0aGlzLl9jb25maWcsIChoZWFkZXJzKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlvcy5kZWxldGUodXJsLCB7aGVhZGVyc30pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IHRoaXMuX2RlbGV0ZUlucHV0cyhpZCk7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBfZGVsZXRlSW5wdXRzKGlkID0gbnVsbCkge1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLl9jb25maWcuYXBpRW5kcG9pbnR9JHtJTlBVVFNfUEFUSH1gO1xuICAgIHJldHVybiB3cmFwVG9rZW4odGhpcy5fY29uZmlnLCAoaGVhZGVycykgPT4ge1xuICAgICAgbGV0IGRhdGEgPSBpZCA9PT0gbnVsbCA/IHtkZWxldGVfYWxsOiB0cnVlfSA6XG4gICAgICAgIHtpZHM6IGlkfTtcbiAgICAgIHJldHVybiBheGlvcyh7XG4gICAgICAgIHVybCxcbiAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgZGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgY29uY2VwdHMgdG8gaW5wdXRzIGluIGJ1bGtcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gICAgICAgICBpbnB1dHMgICAgTGlzdCBvZiBjb25jZXB0cyB0byB1cGRhdGUgKG1heCBvZiAxMjggaW5wdXRzL2NhbGw7IHBhc3NpbmcgPiAxMjggd2lsbCB0aHJvdyBhbiBleGNlcHRpb24pXG4gICAqICAgQHBhcmFtIHtvYmplY3R9ICAgICAgICAgICBpbnB1dHNbXS5pbnB1dFxuICAgKiAgICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICBpbnB1dHNbXS5pbnB1dC5pZCAgICAgICAgVGhlIGlkIG9mIHRoZSBpbnB1dCB0byB1cGRhdGVcbiAgICogICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgaW5wdXRzW10uaW5wdXQuY29uY2VwdHMgIE9iamVjdCB3aXRoIGtleXMgZXhwbGFpbmVkIGJlbG93OlxuICAgKiAgICAgICBAcGFyYW0ge29iamVjdH0gICAgICAgICAgIGlucHV0c1tdLmlucHV0LmNvbmNlcHRzW10uY29uY2VwdFxuICAgKiAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgaW5wdXRzW10uaW5wdXQuY29uY2VwdHNbXS5jb25jZXB0LmlkICAgICAgICBUaGUgY29uY2VwdCBpZCAocmVxdWlyZWQpXG4gICAqICAgICAgICAgQHBhcmFtIHtib29sZWFufSAgICAgICAgICBpbnB1dHNbXS5pbnB1dC5jb25jZXB0c1tdLmNvbmNlcHQudmFsdWUgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBpbnB1dCBpcyBhIHBvc2l0aXZlICh0cnVlKSBvciBuZWdhdGl2ZSAoZmFsc2UpIGV4YW1wbGUgb2YgdGhlIGNvbmNlcHQgKGRlZmF1bHQ6IHRydWUpXG4gICAqIEByZXR1cm4ge1Byb21pc2UoSW5wdXRzLCBlcnJvcil9IEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGFuIGluc3RhbmNlIG9mIElucHV0cyBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBtZXJnZUNvbmNlcHRzKGlucHV0cykge1xuICAgIGlucHV0cy5hY3Rpb24gPSAnbWVyZ2UnO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZShpbnB1dHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjb25jZXB0cyB0byBpbnB1dHMgaW4gYnVsa1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSAgICAgICAgIGlucHV0cyAgICBMaXN0IG9mIGNvbmNlcHRzIHRvIHVwZGF0ZSAobWF4IG9mIDEyOCBpbnB1dHMvY2FsbDsgcGFzc2luZyA+IDEyOCB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbilcbiAgICogICBAcGFyYW0ge29iamVjdH0gICAgICAgICAgIGlucHV0c1tdLmlucHV0XG4gICAqICAgICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgIGlucHV0c1tdLmlucHV0LmlkICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGlkIG9mIHRoZSBpbnB1dCB0byB1cGRhdGVcbiAgICogICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgaW5wdXRzW10uaW5wdXQuY29uY2VwdHMgICAgICAgICAgICAgICAgICAgICBPYmplY3Qgd2l0aCBrZXlzIGV4cGxhaW5lZCBiZWxvdzpcbiAgICogICAgICAgQHBhcmFtIHtvYmplY3R9ICAgICAgICAgICBpbnB1dHNbXS5pbnB1dC5jb25jZXB0c1tdLmNvbmNlcHRcbiAgICogICAgICAgICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgIGlucHV0c1tdLmlucHV0LmNvbmNlcHRzW10uY29uY2VwdC5pZCAgICAgICAgVGhlIGNvbmNlcHQgaWQgKHJlcXVpcmVkKVxuICAgKiAgICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICAgaW5wdXRzW10uaW5wdXQuY29uY2VwdHNbXS5jb25jZXB0LnZhbHVlICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgaW5wdXQgaXMgYSBwb3NpdGl2ZSAodHJ1ZSkgb3IgbmVnYXRpdmUgKGZhbHNlKSBleGFtcGxlIG9mIHRoZSBjb25jZXB0IChkZWZhdWx0OiB0cnVlKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlKElucHV0cywgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhbiBpbnN0YW5jZSBvZiBJbnB1dHMgb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgZGVsZXRlQ29uY2VwdHMoaW5wdXRzKSB7XG4gICAgaW5wdXRzLmFjdGlvbiA9ICdyZW1vdmUnO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZShpbnB1dHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZSBpbnB1dHMgaW4gYnVsa1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSAgICAgICAgIGlucHV0cyAgICBMaXN0IG9mIGNvbmNlcHRzIHRvIHVwZGF0ZSAobWF4IG9mIDEyOCBpbnB1dHMvY2FsbDsgcGFzc2luZyA+IDEyOCB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbilcbiAgICogICBAcGFyYW0ge29iamVjdH0gICAgICAgICAgIGlucHV0c1tdLmlucHV0XG4gICAqICAgICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgIGlucHV0c1tdLmlucHV0LmlkICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGlkIG9mIHRoZSBpbnB1dCB0byB1cGRhdGVcbiAgICogICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgaW5wdXRzW10uaW5wdXQuY29uY2VwdHMgICAgICAgICAgICAgICAgICAgICBPYmplY3Qgd2l0aCBrZXlzIGV4cGxhaW5lZCBiZWxvdzpcbiAgICogICAgICAgQHBhcmFtIHtvYmplY3R9ICAgICAgICAgICBpbnB1dHNbXS5pbnB1dC5jb25jZXB0c1tdLmNvbmNlcHRcbiAgICogICAgICAgICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgIGlucHV0c1tdLmlucHV0LmNvbmNlcHRzW10uY29uY2VwdC5pZCAgICAgICAgVGhlIGNvbmNlcHQgaWQgKHJlcXVpcmVkKVxuICAgKiAgICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICAgaW5wdXRzW10uaW5wdXQuY29uY2VwdHNbXS5jb25jZXB0LnZhbHVlICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgaW5wdXQgaXMgYSBwb3NpdGl2ZSAodHJ1ZSkgb3IgbmVnYXRpdmUgKGZhbHNlKSBleGFtcGxlIG9mIHRoZSBjb25jZXB0IChkZWZhdWx0OiB0cnVlKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlKElucHV0cywgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhbiBpbnN0YW5jZSBvZiBJbnB1dHMgb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgb3ZlcndyaXRlQ29uY2VwdHMoaW5wdXRzKSB7XG4gICAgaW5wdXRzLmFjdGlvbiA9ICdvdmVyd3JpdGUnO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZShpbnB1dHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0W119ICAgICAgICAgaW5wdXRzICAgIExpc3Qgb2YgY29uY2VwdHMgdG8gdXBkYXRlIChtYXggb2YgMTI4IGlucHV0cy9jYWxsOyBwYXNzaW5nID4gMTI4IHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uKVxuICAgKiAgIEBwYXJhbSB7b2JqZWN0fSAgICAgICAgICAgaW5wdXRzW10uaW5wdXRcbiAgICogICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgaW5wdXRzW10uaW5wdXQuaWQgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgaWQgb2YgdGhlIGlucHV0IHRvIHVwZGF0ZVxuICAgKiAgICAgQHBhcmFtIHtvYmplY3R9ICAgICAgICAgICBpbnB1dHNbXS5pbnB1dC5tZXRhZGF0YSAgICAgICAgICAgICAgICAgICAgIE9iamVjdCB3aXRoIGtleSB2YWx1ZXMgdG8gYXR0YWNoIHRvIHRoZSBpbnB1dCAob3B0aW9uYWwpXG4gICAqICAgICBAcGFyYW0ge29iamVjdH0gICAgICAgICAgIGlucHV0c1tdLmlucHV0LmdlbyAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0IHdpdGggbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBjb29yZGluYXRlcyB0byBhc3NvY2lhdGUgd2l0aCBhbiBpbnB1dC4gQ2FuIGJlIHVzZWQgaW4gc2VhcmNoIHF1ZXJ5IGFzIHRoZSBwcm94aW1pdHkgb2YgYW4gaW5wdXQgdG8gYSByZWZlcmVuY2UgcG9pbnQgKG9wdGlvbmFsKVxuICAgKiAgICAgICBAcGFyYW0ge251bWJlcn0gICAgICAgICAgIGlucHV0c1tdLmlucHV0Lmdlby5sYXRpdHVkZSAgICAgICAgICAgICAgICAgKy8tIGxhdGl0dWRlIHZhbCBvZiBnZW9kYXRhXG4gICAqICAgICAgIEBwYXJhbSB7bnVtYmVyfSAgICAgICAgICAgaW5wdXRzW10uaW5wdXQuZ2VvLmxvbmdpdHVkZSAgICAgICAgICAgICAgICArLy0gbG9uZ2l0dWRlIHZhbCBvZiBnZW9kYXRhXG4gICAqICAgICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgIGlucHV0c1tdLmlucHV0LmNvbmNlcHRzICAgICAgICAgICAgICAgICAgICAgT2JqZWN0IHdpdGgga2V5cyBleHBsYWluZWQgYmVsb3cgKG9wdGlvbmFsKTpcbiAgICogICAgICAgQHBhcmFtIHtvYmplY3R9ICAgICAgICAgICBpbnB1dHNbXS5pbnB1dC5jb25jZXB0c1tdLmNvbmNlcHRcbiAgICogICAgICAgICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgIGlucHV0c1tdLmlucHV0LmNvbmNlcHRzW10uY29uY2VwdC5pZCAgICAgICAgVGhlIGNvbmNlcHQgaWQgKHJlcXVpcmVkKVxuICAgKiAgICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICAgaW5wdXRzW10uaW5wdXQuY29uY2VwdHNbXS5jb25jZXB0LnZhbHVlICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgaW5wdXQgaXMgYSBwb3NpdGl2ZSAodHJ1ZSkgb3IgbmVnYXRpdmUgKGZhbHNlKSBleGFtcGxlIG9mIHRoZSBjb25jZXB0IChkZWZhdWx0OiB0cnVlKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlKElucHV0cywgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhbiBpbnN0YW5jZSBvZiBJbnB1dHMgb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgdXBkYXRlKGlucHV0cykge1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLl9jb25maWcuYXBpRW5kcG9pbnR9JHtJTlBVVFNfUEFUSH1gO1xuICAgIGxldCBpbnB1dHNMaXN0ID0gQXJyYXkuaXNBcnJheShpbnB1dHMpID8gaW5wdXRzIDogW2lucHV0c107XG4gICAgaWYgKGlucHV0c0xpc3QubGVuZ3RoID4gTUFYX0JBVENIX1NJWkUpIHtcbiAgICAgIHRocm93IEVSUk9SUy5NQVhfSU5QVVRTO1xuICAgIH1cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIGFjdGlvbjogaW5wdXRzLmFjdGlvbixcbiAgICAgIGlucHV0czogaW5wdXRzTGlzdC5tYXAoKGlucHV0KSA9PiBmb3JtYXRJbnB1dChpbnB1dCwgZmFsc2UpKVxuICAgIH07XG4gICAgcmV0dXJuIHdyYXBUb2tlbih0aGlzLl9jb25maWcsIChoZWFkZXJzKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBheGlvcy5wYXRjaCh1cmwsIGRhdGEsIHtoZWFkZXJzfSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3MocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUobmV3IElucHV0cyh0aGlzLl9jb25maWcsIHJlc3BvbnNlLmRhdGEuaW5wdXRzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggZm9yIGlucHV0cyBvciBvdXRwdXRzIGJhc2VkIG9uIGNvbmNlcHRzIG9yIGltYWdlc1xuICAgKiAgIEBwYXJhbSB7b2JqZWN0W119ICAgICAgICAgICAgICAgcXVlcmllcyAgICAgICAgICBMaXN0IG9mIGFsbCBwcmVkaWN0aW9ucyB0byBtYXRjaCB3aXRoXG4gICAqICAgICBAcGFyYW0ge29iamVjdH0gICAgICAgICAgICAgICAgIHF1ZXJpZXNbXS5jb25jZXB0ICAgICAgICAgICAgQW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBrZXlzOlxuICAgKiAgICAgICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgIHF1ZXJpZXNbXS5jb25jZXB0LmlkICAgICAgICAgIFRoZSBjb25jZXB0IGlkXG4gICAqICAgICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgcXVlcmllc1tdLmNvbmNlcHQudHlwZSAgICAgICAgU2VhcmNoIG92ZXIgJ2lucHV0JyB0byBnZXQgaW5wdXQgbWF0Y2hlcyB0byBjcml0ZXJpYSBvciAnb3V0cHV0JyB0byBnZXQgaW5wdXRzIHRoYXQgYXJlIHZpc3VhbGx5IHNpbWlsYXIgdG8gdGhlIGNyaXRlcmlhIChkZWZhdWx0OiAnb3V0cHV0JylcbiAgICogICAgICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICBxdWVyaWVzW10uY29uY2VwdC5uYW1lICAgICAgICBUaGUgY29uY2VwdCBuYW1lXG4gICAqICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgcXVlcmllc1tdLmNvbmNlcHQudmFsdWUgICAgICAgSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSB0ZXJtIHNob3VsZCBtYXRjaCB3aXRoIHRoZSBwcmVkaWN0aW9uIHJldHVybmVkIChkZWZhdWx0OiB0cnVlKVxuICAgKiAgICAgQHBhcmFtIHtvYmplY3R9ICAgICAgICAgICAgICAgICBxdWVyaWVzW10uaW5wdXQgICAgICAgICAgICAgIEFuIGltYWdlIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcga2V5czpcbiAgICogICAgICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICBxdWVyaWVzW10uaW5wdXQuaWQgICAgICAgICAgICBUaGUgaW5wdXQgaWRcbiAgICogICAgICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICBxdWVyaWVzW10uaW5wdXQudHlwZSAgICAgICAgICBTZWFyY2ggb3ZlciAnaW5wdXQnIHRvIGdldCBpbnB1dCBtYXRjaGVzIHRvIGNyaXRlcmlhIG9yICdvdXRwdXQnIHRvIGdldCBpbnB1dHMgdGhhdCBhcmUgdmlzdWFsbHkgc2ltaWxhciB0byB0aGUgY3JpdGVyaWEgKGRlZmF1bHQ6ICdvdXRwdXQnKVxuICAgKiAgICAgICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgIHF1ZXJpZXNbXS5pbnB1dC4oYmFzZTY0fHVybCkgIENhbiBiZSBhIHB1YmxpY2x5IGFjY2Vzc2libHkgdXJsIG9yIGJhc2U2NCBzdHJpbmcgcmVwcmVzZW50aW5nIGltYWdlIGJ5dGVzIChyZXF1aXJlZClcbiAgICogICAgICAgQHBhcmFtIHtudW1iZXJbXX0gICAgICAgICAgICAgICBxdWVyaWVzW10uaW5wdXQuY3JvcCAgICAgICAgICBBbiBhcnJheSBjb250YWluaW5nIHRoZSBwZXJjZW50IHRvIGJlIGNyb3BwZWQgZnJvbSB0b3AsIGxlZnQsIGJvdHRvbSBhbmQgcmlnaHQgKG9wdGlvbmFsKVxuICAgKiAgICAgICBAcGFyYW0ge29iamVjdH0gICAgICAgICAgICAgICAgIHF1ZXJpZXNbXS5pbnB1dC5tZXRhZGF0YSAgICAgIEFuIG9iamVjdCB3aXRoIGtleSBhbmQgdmFsdWUgc3BlY2lmaWVkIGJ5IHVzZXIgdG8gcmVmaW5lIHNlYXJjaCB3aXRoIChvcHRpb25hbClcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgICAgICAgT2JqZWN0IHdpdGgga2V5cyBleHBsYWluZWQgYmVsb3c6IChvcHRpb25hbClcbiAgICogICAgQHBhcmFtIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wYWdlICAgICAgICAgIFRoZSBwYWdlIG51bWJlciAob3B0aW9uYWwsIGRlZmF1bHQ6IDEpXG4gICAqICAgIEBwYXJhbSB7TnVtYmVyfSAgICAgICAgICAgICAgICAgIG9wdGlvbnMucGVyUGFnZSAgICAgICBOdW1iZXIgb2YgaW1hZ2VzIHRvIHJldHVybiBwZXIgcGFnZSAob3B0aW9uYWwsIGRlZmF1bHQ6IDIwKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlKHJlc3BvbnNlLCBlcnJvcil9IEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIHRoZSBBUEkgcmVzcG9uc2Ugb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgc2VhcmNoKHF1ZXJpZXMgPSBbXSwgb3B0aW9ucyA9IHtwYWdlOiAxLCBwZXJQYWdlOiAyMH0pIHtcbiAgICBsZXQgZm9ybWF0dGVkQW5kcyA9IFtdO1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLl9jb25maWcuYXBpRW5kcG9pbnR9JHtTRUFSQ0hfUEFUSH1gO1xuICAgIGxldCBkYXRhID0ge1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgYW5kczogW11cbiAgICAgIH0sXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIHBhZ2U6IG9wdGlvbnMucGFnZSxcbiAgICAgICAgcGVyX3BhZ2U6IG9wdGlvbnMucGVyUGFnZVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocXVlcmllcykpIHtcbiAgICAgIHF1ZXJpZXMgPSBbcXVlcmllc107XG4gICAgfVxuICAgIGlmIChxdWVyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICBpZiAocXVlcnkuaW5wdXQpIHtcbiAgICAgICAgICBmb3JtYXR0ZWRBbmRzID0gZm9ybWF0dGVkQW5kcy5jb25jYXQoZm9ybWF0SW1hZ2VzU2VhcmNoKHF1ZXJ5LmlucHV0KSk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnkuY29uY2VwdCkge1xuICAgICAgICAgIGZvcm1hdHRlZEFuZHMgPSBmb3JtYXR0ZWRBbmRzLmNvbmNhdChmb3JtYXRDb25jZXB0c1NlYXJjaChxdWVyeS5jb25jZXB0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZGF0YS5xdWVyeS5hbmRzID0gZm9ybWF0dGVkQW5kcztcbiAgICB9XG4gICAgcmV0dXJuIHdyYXBUb2tlbih0aGlzLl9jb25maWcsIChoZWFkZXJzKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KHVybCwgZGF0YSwge2hlYWRlcnN9KVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzU3VjY2VzcyhyZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgbGV0IGRhdGEgPSBjbG9uZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgZGF0YS5yYXdEYXRhID0gY2xvbmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5wdXRzIHN0YXR1cyAobnVtYmVyIG9mIHVwbG9hZGVkLCBpbiBwcm9jZXNzIG9yIGZhaWxlZCBpbnB1dHMpXG4gICAqIEByZXR1cm4ge1Byb21pc2UocmVzcG9uc2UsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggdGhlIEFQSSByZXNwb25zZSBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBnZXRTdGF0dXMoKSB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuX2NvbmZpZy5hcGlFbmRwb2ludH0ke0lOUFVUU19TVEFUVVNfUEFUSH1gO1xuICAgIHJldHVybiB3cmFwVG9rZW4odGhpcy5fY29uZmlnLCAoaGVhZGVycykgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KHVybCwge2hlYWRlcnN9KVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzU3VjY2VzcyhyZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgbGV0IGRhdGEgPSBjbG9uZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgZGF0YS5yYXdEYXRhID0gY2xvbmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0cztcbiJdfQ==
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/Inputs.js","/")
},{"./Input":40,"./constants":45,"./helpers":47,"./utils":48,"axios":4,"buffer":23,"pBGvAp":27}],42:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');

var _require = require('./helpers'),
    isSuccess = _require.isSuccess,
    checkType = _require.checkType,
    clone = _require.clone;

var _require2 = require('./constants'),
    API = _require2.API,
    SYNC_TIMEOUT = _require2.SYNC_TIMEOUT,
    replaceVars = _require2.replaceVars,
    STATUS = _require2.STATUS,
    POLLTIME = _require2.POLLTIME;

var MODEL_QUEUED_FOR_TRAINING = STATUS.MODEL_QUEUED_FOR_TRAINING,
    MODEL_TRAINING = STATUS.MODEL_TRAINING;

var _require3 = require('./utils'),
    wrapToken = _require3.wrapToken,
    formatMediaPredict = _require3.formatMediaPredict,
    formatModel = _require3.formatModel,
    formatObjectForSnakeCase = _require3.formatObjectForSnakeCase;

var MODEL_VERSIONS_PATH = API.MODEL_VERSIONS_PATH,
    MODEL_VERSION_PATH = API.MODEL_VERSION_PATH,
    MODELS_PATH = API.MODELS_PATH,
    MODEL_FEEDBACK_PATH = API.MODEL_FEEDBACK_PATH,
    MODEL_VERSION_FEEDBACK_PATH = API.MODEL_VERSION_FEEDBACK_PATH,
    PREDICT_PATH = API.PREDICT_PATH,
    VERSION_PREDICT_PATH = API.VERSION_PREDICT_PATH,
    MODEL_INPUTS_PATH = API.MODEL_INPUTS_PATH,
    MODEL_OUTPUT_PATH = API.MODEL_OUTPUT_PATH,
    MODEL_VERSION_INPUTS_PATH = API.MODEL_VERSION_INPUTS_PATH;

/**
 * class representing a model
 * @class
 */

var Model = function () {
  function Model(_config, data) {
    _classCallCheck(this, Model);

    this._config = _config;
    this.name = data.name;
    this.id = data.id;
    this.createdAt = data.created_at || data.createdAt;
    this.appId = data.app_id || data.appId;
    this.outputInfo = data.output_info || data.outputInfo;
    if (checkType(/(String)/, data.version)) {
      this.modelVersion = {};
      this.versionId = data.version;
    } else {
      this.modelVersion = data.model_version || data.modelVersion || data.version;
      this.versionId = (this.modelVersion || {}).id;
    }
    this.rawData = data;
  }

  /**
   * Merge concepts to a model
   * @param {object[]}      concepts    List of concept objects with id
   * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
   */


  _createClass(Model, [{
    key: 'mergeConcepts',
    value: function mergeConcepts() {
      var concepts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var conceptsArr = Array.isArray(concepts) ? concepts : [concepts];
      return this.update({ action: 'merge', concepts: conceptsArr });
    }

    /**
     * Remove concepts from a model
     * @param {object[]}      concepts    List of concept objects with id
     * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
     */

  }, {
    key: 'deleteConcepts',
    value: function deleteConcepts() {
      var concepts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var conceptsArr = Array.isArray(concepts) ? concepts : [concepts];
      return this.update({ action: 'remove', concepts: conceptsArr });
    }

    /**
     * Overwrite concepts in a model
     * @param {object[]}      concepts    List of concept objects with id
     * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
     */

  }, {
    key: 'overwriteConcepts',
    value: function overwriteConcepts() {
      var concepts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var conceptsArr = Array.isArray(concepts) ? concepts : [concepts];
      return this.update({ action: 'overwrite', concepts: conceptsArr });
    }

    /**
     * Update a model's output config or concepts
     * @param {object}               model                                 An object with any of the following attrs:
     *   @param {string}               name                                  The new name of the model to update with
     *   @param {boolean}              conceptsMutuallyExclusive             Do you expect to see more than one of the concepts in this model in the SAME image? Set to false (default) if so. Otherwise, set to true.
     *   @param {boolean}              closedEnvironment                     Do you expect to run the trained model on images that do not contain ANY of the concepts in the model? Set to false (default) if so. Otherwise, set to true.
     *   @param {object[]}             concepts                              An array of concept objects or string
     *     @param {object|string}        concepts[].concept                    If string is given, this is interpreted as concept id. Otherwise, if object is given, client expects the following attributes
     *       @param {string}             concepts[].concept.id                   The id of the concept to attach to the model
     *   @param {object[]}             action                                The action to perform on the given concepts. Possible values are 'merge', 'remove', or 'overwrite'. Default: 'merge'
     * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
     */

  }, {
    key: 'update',
    value: function update(obj) {
      var _this = this;

      var url = '' + this._config.apiEndpoint + MODELS_PATH;
      var modelData = [obj];
      var data = { models: modelData.map(function (m) {
          return formatModel(Object.assign(m, { id: _this.id }));
        }) };
      if (Array.isArray(obj.concepts)) {
        data['action'] = obj.action || 'merge';
      }

      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.patch(url, data, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Model(_this._config, response.data.models[0]));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * Create a new model version
     * @param {boolean}       sync     If true, this returns after model has completely trained. If false, this immediately returns default api response.
     * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
     */

  }, {
    key: 'train',
    value: function train(sync) {
      var _this2 = this;

      var url = '' + this._config.apiEndpoint + replaceVars(MODEL_VERSIONS_PATH, [this.id]);
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.post(url, null, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              if (sync) {
                var timeStart = Date.now();
                _this2._pollTrain.bind(_this2)(timeStart, resolve, reject);
              } else {
                resolve(new Model(_this2._config, response.data.model));
              }
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }
  }, {
    key: '_pollTrain',
    value: function _pollTrain(timeStart, resolve, reject) {
      var _this3 = this;

      clearTimeout(this.pollTimeout);
      if (Date.now() - timeStart >= SYNC_TIMEOUT) {
        return reject({
          status: 'Error',
          message: 'Sync call timed out'
        });
      }
      this.getOutputInfo().then(function (model) {
        var modelStatusCode = model.modelVersion.status.code.toString();
        if (modelStatusCode === MODEL_QUEUED_FOR_TRAINING || modelStatusCode === MODEL_TRAINING) {
          _this3.pollTimeout = setTimeout(function () {
            return _this3._pollTrain(timeStart, resolve, reject);
          }, POLLTIME);
        } else {
          resolve(model);
        }
      }, reject).catch(reject);
    }

    /**
     * Returns model ouputs according to inputs
     * @param {object[]|object|string}       inputs    An array of objects/object/string pointing to an image resource. A string can either be a url or base64 image bytes. Object keys explained below:
     *    @param {object}                      inputs[].image     Object with keys explained below:
     *       @param {string}                     inputs[].image.(url|base64)   Can be a publicly accessibly url or base64 string representing image bytes (required)
     *       @param {number[]}                   inputs[].image.crop           An array containing the percent to be cropped from top, left, bottom and right (optional)
     * @param {object|string} config An object with keys explained below. If a string is passed instead, it will be treated as the language (backwards compatibility)
     *   @param {string} config.language A string code representing the language to return results in (example: 'zh' for simplified Chinese, 'ru' for Russian, 'ja' for Japanese)
     *   @param {boolean} config.video indicates if the input should be processed as a video
     *   @param {object[]} config.selectConcepts An array of concepts to return. Each object in the array will have a form of {name: <CONCEPT_NAME>} or {id: CONCEPT_ID}
     *   @param {float} config.minValue The minimum confidence threshold that a result must meet. From 0.0 to 1.0
     *   @param {number} config.maxConcepts The maximum number of concepts to return
     * @param {boolean} isVideo  Deprecated: indicates if the input should be processed as a video (default false). Deprecated in favor of using config object
     * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
     */

  }, {
    key: 'predict',
    value: function predict(inputs) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var isVideo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (checkType(/String/, config)) {
        console.warn('passing the language as a string is deprecated, consider using the configuration object instead');
        config = {
          language: config
        };
      }

      if (isVideo) {
        console.warn('"isVideo" argument is deprecated, consider using the configuration object instead');
        config.video = isVideo;
      }
      var video = config.video || false;
      delete config.video;
      if (checkType(/(Object|String)/, inputs)) {
        inputs = [inputs];
      }
      var url = '' + this._config.apiEndpoint + (this.versionId ? replaceVars(VERSION_PREDICT_PATH, [this.id, this.versionId]) : replaceVars(PREDICT_PATH, [this.id]));
      return wrapToken(this._config, function (headers) {
        var params = { inputs: inputs.map(function (input) {
            return formatMediaPredict(input, video ? 'video' : 'image');
          }) };
        if (config && Object.getOwnPropertyNames(config).length > 0) {
          params['model'] = {
            output_info: {
              output_config: formatObjectForSnakeCase(config)
            }
          };
        }
        return new Promise(function (resolve, reject) {
          axios.post(url, params, { headers: headers }).then(function (response) {
            var data = clone(response.data);
            data.rawData = clone(response.data);
            resolve(data);
          }, reject);
        });
      });
    }

    /**
     * Returns a version of the model specified by its id
     * @param {string}     versionId   The model's id
     * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
     */

  }, {
    key: 'getVersion',
    value: function getVersion(versionId) {
      var url = '' + this._config.apiEndpoint + replaceVars(MODEL_VERSION_PATH, [this.id, versionId]);
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.get(url, { headers: headers }).then(function (response) {
            var data = clone(response.data);
            data.rawData = clone(response.data);
            resolve(data);
          }, reject);
        });
      });
    }

    /**
     * Returns a list of versions of the model
     * @param {object}     options     Object with keys explained below: (optional)
     *   @param {number}     options.page        The page number (optional, default: 1)
     *   @param {number}     options.perPage     Number of images to return per page (optional, default: 20)
     * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
     */

  }, {
    key: 'getVersions',
    value: function getVersions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { page: 1, perPage: 20 };

      var url = '' + this._config.apiEndpoint + replaceVars(MODEL_VERSIONS_PATH, [this.id]);
      return wrapToken(this._config, function (headers) {
        var data = {
          headers: headers,
          params: { 'per_page': options.perPage, 'page': options.page }
        };
        return new Promise(function (resolve, reject) {
          axios.get(url, data).then(function (response) {
            var data = clone(response.data);
            data.rawData = clone(response.data);
            resolve(data);
          }, reject);
        });
      });
    }

    /**
     * Returns all the model's output info
     * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
     */

  }, {
    key: 'getOutputInfo',
    value: function getOutputInfo() {
      var _this4 = this;

      var url = '' + this._config.apiEndpoint + replaceVars(MODEL_OUTPUT_PATH, [this.id]);
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.get(url, { headers: headers }).then(function (response) {
            resolve(new Model(_this4._config, response.data.model));
          }, reject);
        });
      });
    }

    /**
     * Returns all the model's inputs
     * @param {object}     options     Object with keys explained below: (optional)
     *   @param {number}     options.page        The page number (optional, default: 1)
     *   @param {number}     options.perPage     Number of images to return per page (optional, default: 20)
     * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
     */

  }, {
    key: 'getInputs',
    value: function getInputs() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { page: 1, perPage: 20 };

      var url = '' + this._config.apiEndpoint + (this.versionId ? replaceVars(MODEL_VERSION_INPUTS_PATH, [this.id, this.versionId]) : replaceVars(MODEL_INPUTS_PATH, [this.id]));
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.get(url, {
            params: { 'per_page': options.perPage, 'page': options.page },
            headers: headers
          }).then(function (response) {
            var data = clone(response.data);
            data.rawData = clone(response.data);
            resolve(data);
          }, reject);
        });
      });
    }

    /**
     *
     * @param {string} input A string pointing to an image resource. A string must be a url
     * @param {object} config A configuration object consisting of the following required keys
     *   @param {string} config.id The id of the feedback request
     *   @param {object} config.data The feedback data to be sent
     *   @param {object} config.info Meta data related to the feedback request
     * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
     */

  }, {
    key: 'feedback',
    value: function feedback(input, _ref) {
      var id = _ref.id,
          data = _ref.data,
          info = _ref.info;

      var url = '' + this._config.apiEndpoint + (this.versionId ? replaceVars(MODEL_VERSION_FEEDBACK_PATH, [this.id, this.versionId]) : replaceVars(MODEL_FEEDBACK_PATH, [this.id]));
      var media = formatMediaPredict(input).data;
      info.eventType = 'annotation';
      var body = {
        input: {
          id: id,
          data: Object.assign(media, data),
          'feedback_info': formatObjectForSnakeCase(info)
        }
      };
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.post(url, body, {
            headers: headers
          }).then(function (_ref2) {
            var data = _ref2.data;

            var d = clone(data);
            d.rawData = clone(data);
            resolve(d);
          }, reject);
        });
      });
    }
  }]);

  return Model;
}();

module.exports = Model;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGVsLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImlzU3VjY2VzcyIsImNoZWNrVHlwZSIsImNsb25lIiwiQVBJIiwiU1lOQ19USU1FT1VUIiwicmVwbGFjZVZhcnMiLCJTVEFUVVMiLCJQT0xMVElNRSIsIk1PREVMX1FVRVVFRF9GT1JfVFJBSU5JTkciLCJNT0RFTF9UUkFJTklORyIsIndyYXBUb2tlbiIsImZvcm1hdE1lZGlhUHJlZGljdCIsImZvcm1hdE1vZGVsIiwiZm9ybWF0T2JqZWN0Rm9yU25ha2VDYXNlIiwiTU9ERUxfVkVSU0lPTlNfUEFUSCIsIk1PREVMX1ZFUlNJT05fUEFUSCIsIk1PREVMU19QQVRIIiwiTU9ERUxfRkVFREJBQ0tfUEFUSCIsIk1PREVMX1ZFUlNJT05fRkVFREJBQ0tfUEFUSCIsIlBSRURJQ1RfUEFUSCIsIlZFUlNJT05fUFJFRElDVF9QQVRIIiwiTU9ERUxfSU5QVVRTX1BBVEgiLCJNT0RFTF9PVVRQVVRfUEFUSCIsIk1PREVMX1ZFUlNJT05fSU5QVVRTX1BBVEgiLCJNb2RlbCIsIl9jb25maWciLCJkYXRhIiwibmFtZSIsImlkIiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsImFwcElkIiwiYXBwX2lkIiwib3V0cHV0SW5mbyIsIm91dHB1dF9pbmZvIiwidmVyc2lvbiIsIm1vZGVsVmVyc2lvbiIsInZlcnNpb25JZCIsIm1vZGVsX3ZlcnNpb24iLCJyYXdEYXRhIiwiY29uY2VwdHMiLCJjb25jZXB0c0FyciIsIkFycmF5IiwiaXNBcnJheSIsInVwZGF0ZSIsImFjdGlvbiIsIm9iaiIsInVybCIsImFwaUVuZHBvaW50IiwibW9kZWxEYXRhIiwibW9kZWxzIiwibWFwIiwiT2JqZWN0IiwiYXNzaWduIiwibSIsImhlYWRlcnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhdGNoIiwidGhlbiIsInJlc3BvbnNlIiwic3luYyIsInBvc3QiLCJ0aW1lU3RhcnQiLCJEYXRlIiwibm93IiwiX3BvbGxUcmFpbiIsImJpbmQiLCJtb2RlbCIsImNsZWFyVGltZW91dCIsInBvbGxUaW1lb3V0Iiwic3RhdHVzIiwibWVzc2FnZSIsImdldE91dHB1dEluZm8iLCJtb2RlbFN0YXR1c0NvZGUiLCJjb2RlIiwidG9TdHJpbmciLCJzZXRUaW1lb3V0IiwiY2F0Y2giLCJpbnB1dHMiLCJjb25maWciLCJpc1ZpZGVvIiwiY29uc29sZSIsIndhcm4iLCJsYW5ndWFnZSIsInZpZGVvIiwicGFyYW1zIiwiaW5wdXQiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwibGVuZ3RoIiwib3V0cHV0X2NvbmZpZyIsImdldCIsIm9wdGlvbnMiLCJwYWdlIiwicGVyUGFnZSIsImluZm8iLCJtZWRpYSIsImV2ZW50VHlwZSIsImJvZHkiLCJkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBSUEsUUFBUUMsUUFBUSxPQUFSLENBQVo7O2VBQ29DQSxRQUFRLFdBQVIsQztJQUEvQkMsUyxZQUFBQSxTO0lBQVdDLFMsWUFBQUEsUztJQUFXQyxLLFlBQUFBLEs7O2dCQU92QkgsUUFBUSxhQUFSLEM7SUFMRkksRyxhQUFBQSxHO0lBQ0FDLFksYUFBQUEsWTtJQUNBQyxXLGFBQUFBLFc7SUFDQUMsTSxhQUFBQSxNO0lBQ0FDLFEsYUFBQUEsUTs7SUFFR0MseUIsR0FBNkNGLE0sQ0FBN0NFLHlCO0lBQTJCQyxjLEdBQWtCSCxNLENBQWxCRyxjOztnQkFDNkNWLFFBQVEsU0FBUixDO0lBQXhFVyxTLGFBQUFBLFM7SUFBV0Msa0IsYUFBQUEsa0I7SUFBb0JDLFcsYUFBQUEsVztJQUFhQyx3QixhQUFBQSx3Qjs7SUFFL0NDLG1CLEdBVUVYLEcsQ0FWRlcsbUI7SUFDQUMsa0IsR0FTRVosRyxDQVRGWSxrQjtJQUNBQyxXLEdBUUViLEcsQ0FSRmEsVztJQUNBQyxtQixHQU9FZCxHLENBUEZjLG1CO0lBQ0FDLDJCLEdBTUVmLEcsQ0FORmUsMkI7SUFDQUMsWSxHQUtFaEIsRyxDQUxGZ0IsWTtJQUNBQyxvQixHQUlFakIs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b0MsS0FBS1gsU0FBTCxHQUN4Q2hDLFlBQVlhLDJCQUFaLEVBQXlDLENBQUMsS0FBS1UsRUFBTixFQUFVLEtBQUtTLFNBQWYsQ0FBekMsQ0FEd0MsR0FFeENoQyxZQUFZWSxtQkFBWixFQUFpQyxDQUFDLEtBQUtXLEVBQU4sQ0FBakMsQ0FGSSxDQUFOO0FBR0EsVUFBTXFFLFFBQVF0RixtQkFBbUI2RSxLQUFuQixFQUEwQjlELElBQXhDO0FBQ0FzRSxXQUFLRSxTQUFMLEdBQWlCLFlBQWpCO0FBQ0EsVUFBTUMsT0FBTztBQUNYWCxlQUFPO0FBQ0w1RCxnQkFESztBQUVMRixnQkFBTTBCLE9BQU9DLE1BQVAsQ0FBYzRDLEtBQWQsRUFBcUJ2RSxJQUFyQixDQUZEO0FBR0wsMkJBQWlCYix5QkFBeUJtRixJQUF6QjtBQUhaO0FBREksT0FBYjtBQU9BLGFBQU90RixVQUFVLEtBQUtlLE9BQWYsRUFBd0IsbUJBQVc7QUFDeEMsZUFBTyxJQUFJK0IsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QzVELGdCQUFNaUUsSUFBTixDQUFXaEIsR0FBWCxFQUFnQm9ELElBQWhCLEVBQXNCO0FBQ3BCNUM7QUFEb0IsV0FBdEIsRUFFR0ssSUFGSCxDQUVRLGlCQUFZO0FBQUEsZ0JBQVZsQyxJQUFVLFNBQVZBLElBQVU7O0FBQ2xCLGdCQUFNMEUsSUFBSWxHLE1BQU13QixJQUFOLENBQVY7QUFDQTBFLGNBQUU3RCxPQUFGLEdBQVlyQyxNQUFNd0IsSUFBTixDQUFaO0FBQ0ErQixvQkFBUTJDLENBQVI7QUFDRCxXQU5ELEVBTUcxQyxNQU5IO0FBT0QsU0FSTSxDQUFQO0FBU0QsT0FWTSxDQUFQO0FBV0Q7Ozs7OztBQUdIMkMsT0FDR0MsT0FESCxHQUNhOUUsS0FEYiIsImZpbGUiOiJNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5sZXQge2lzU3VjY2VzcywgY2hlY2tUeXBlLCBjbG9uZX0gPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbmxldCB7XG4gIEFQSSxcbiAgU1lOQ19USU1FT1VULFxuICByZXBsYWNlVmFycyxcbiAgU1RBVFVTLFxuICBQT0xMVElNRVxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5sZXQge01PREVMX1FVRVVFRF9GT1JfVFJBSU5JTkcsIE1PREVMX1RSQUlOSU5HfSA9IFNUQVRVUztcbmxldCB7d3JhcFRva2VuLCBmb3JtYXRNZWRpYVByZWRpY3QsIGZvcm1hdE1vZGVsLCBmb3JtYXRPYmplY3RGb3JTbmFrZUNhc2V9ID0gcmVxdWlyZSgnLi91dGlscycpO1xubGV0IHtcbiAgTU9ERUxfVkVSU0lPTlNfUEFUSCxcbiAgTU9ERUxfVkVSU0lPTl9QQVRILFxuICBNT0RFTFNfUEFUSCxcbiAgTU9ERUxfRkVFREJBQ0tfUEFUSCxcbiAgTU9ERUxfVkVSU0lPTl9GRUVEQkFDS19QQVRILFxuICBQUkVESUNUX1BBVEgsXG4gIFZFUlNJT05fUFJFRElDVF9QQVRILFxuICBNT0RFTF9JTlBVVFNfUEFUSCxcbiAgTU9ERUxfT1VUUFVUX1BBVEgsXG4gIE1PREVMX1ZFUlNJT05fSU5QVVRTX1BBVEhcbn0gPSBBUEk7XG5cbi8qKlxuICogY2xhc3MgcmVwcmVzZW50aW5nIGEgbW9kZWxcbiAqIEBjbGFzc1xuICovXG5jbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKF9jb25maWcsIGRhdGEpIHtcbiAgICB0aGlzLl9jb25maWcgPSBfY29uZmlnO1xuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IGRhdGEuY3JlYXRlZF9hdCB8fCBkYXRhLmNyZWF0ZWRBdDtcbiAgICB0aGlzLmFwcElkID0gZGF0YS5hcHBfaWQgfHwgZGF0YS5hcHBJZDtcbiAgICB0aGlzLm91dHB1dEluZm8gPSBkYXRhLm91dHB1dF9pbmZvIHx8IGRhdGEub3V0cHV0SW5mbztcbiAgICBpZiAoY2hlY2tUeXBlKC8oU3RyaW5nKS8sIGRhdGEudmVyc2lvbikpIHtcbiAgICAgIHRoaXMubW9kZWxWZXJzaW9uID0ge307XG4gICAgICB0aGlzLnZlcnNpb25JZCA9IGRhdGEudmVyc2lvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbFZlcnNpb24gPSBkYXRhLm1vZGVsX3ZlcnNpb24gfHwgZGF0YS5tb2RlbFZlcnNpb24gfHwgZGF0YS52ZXJzaW9uO1xuICAgICAgdGhpcy52ZXJzaW9uSWQgPSAodGhpcy5tb2RlbFZlcnNpb24gfHwge30pLmlkO1xuICAgIH1cbiAgICB0aGlzLnJhd0RhdGEgPSBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIGNvbmNlcHRzIHRvIGEgbW9kZWxcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gICAgICBjb25jZXB0cyAgICBMaXN0IG9mIGNvbmNlcHQgb2JqZWN0cyB3aXRoIGlkXG4gICAqIEByZXR1cm4ge1Byb21pc2UoTW9kZWwsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBNb2RlbCBpbnN0YW5jZSBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBtZXJnZUNvbmNlcHRzKGNvbmNlcHRzID0gW10pIHtcbiAgICBsZXQgY29uY2VwdHNBcnIgPSBBcnJheS5pc0FycmF5KGNvbmNlcHRzKSA/IGNvbmNlcHRzIDogW2NvbmNlcHRzXTtcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoe2FjdGlvbjogJ21lcmdlJywgY29uY2VwdHM6IGNvbmNlcHRzQXJyfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNvbmNlcHRzIGZyb20gYSBtb2RlbFxuICAgKiBAcGFyYW0ge29iamVjdFtdfSAgICAgIGNvbmNlcHRzICAgIExpc3Qgb2YgY29uY2VwdCBvYmplY3RzIHdpdGggaWRcbiAgICogQHJldHVybiB7UHJvbWlzZShNb2RlbCwgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhIE1vZGVsIGluc3RhbmNlIG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIGRlbGV0ZUNvbmNlcHRzKGNvbmNlcHRzID0gW10pIHtcbiAgICBsZXQgY29uY2VwdHNBcnIgPSBBcnJheS5pc0FycmF5KGNvbmNlcHRzKSA/IGNvbmNlcHRzIDogW2NvbmNlcHRzXTtcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoe2FjdGlvbjogJ3JlbW92ZScsIGNvbmNlcHRzOiBjb25jZXB0c0Fycn0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZSBjb25jZXB0cyBpbiBhIG1vZGVsXG4gICAqIEBwYXJhbSB7b2JqZWN0W119ICAgICAgY29uY2VwdHMgICAgTGlzdCBvZiBjb25jZXB0IG9iamVjdHMgd2l0aCBpZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlKE1vZGVsLCBlcnJvcil9IEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgTW9kZWwgaW5zdGFuY2Ugb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgb3ZlcndyaXRlQ29uY2VwdHMoY29uY2VwdHMgPSBbXSkge1xuICAgIGxldCBjb25jZXB0c0FyciA9IEFycmF5LmlzQXJyYXkoY29uY2VwdHMpID8gY29uY2VwdHMgOiBbY29uY2VwdHNdO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZSh7YWN0aW9uOiAnb3ZlcndyaXRlJywgY29uY2VwdHM6IGNvbmNlcHRzQXJyfSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGEgbW9kZWwncyBvdXRwdXQgY29uZmlnIG9yIGNvbmNlcHRzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICAgICAgICAgIG1vZGVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW4gb2JqZWN0IHdpdGggYW55IG9mIHRoZSBmb2xsb3dpbmcgYXR0cnM6XG4gICAqICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgbmV3IG5hbWUgb2YgdGhlIG1vZGVsIHRvIHVwZGF0ZSB3aXRoXG4gICAqICAgQHBhcmFtIHtib29sZWFufSAgICAgICAgICAgICAgY29uY2VwdHNNdXR1YWxseUV4Y2x1c2l2ZSAgICAgICAgICAgICBEbyB5b3UgZXhwZWN0IHRvIHNlZSBtb3JlIHRoYW4gb25lIG9mIHRoZSBjb25jZXB0cyBpbiB0aGlzIG1vZGVsIGluIHRoZSBTQU1FIGltYWdlPyBTZXQgdG8gZmFsc2UgKGRlZmF1bHQpIGlmIHNvLiBPdGhlcndpc2UsIHNldCB0byB0cnVlLlxuICAgKiAgIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICAgICAgIGNsb3NlZEVudmlyb25tZW50ICAgICAgICAgICAgICAgICAgICAgRG8geW91IGV4cGVjdCB0byBydW4gdGhlIHRyYWluZWQgbW9kZWwgb24gaW1hZ2VzIHRoYXQgZG8gbm90IGNvbnRhaW4gQU5ZIG9mIHRoZSBjb25jZXB0cyBpbiB0aGUgbW9kZWw/IFNldCB0byBmYWxzZSAoZGVmYXVsdCkgaWYgc28uIE90aGVyd2lzZSwgc2V0IHRvIHRydWUuXG4gICAqICAgQHBhcmFtIHtvYmplY3RbXX0gICAgICAgICAgICAgY29uY2VwdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbiBhcnJheSBvZiBjb25jZXB0IG9iamVjdHMgb3Igc3RyaW5nXG4gICAqICAgICBAcGFyYW0ge29iamVjdHxzdHJpbmd9ICAgICAgICBjb25jZXB0c1tdLmNvbmNlcHQgICAgICAgICAgICAgICAgICAgIElmIHN0cmluZyBpcyBnaXZlbiwgdGhpcyBpcyBpbnRlcnByZXRlZCBhcyBjb25jZXB0IGlkLiBPdGhlcndpc2UsIGlmIG9iamVjdCBpcyBnaXZlbiwgY2xpZW50IGV4cGVjdHMgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzXG4gICAqICAgICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICBjb25jZXB0c1tdLmNvbmNlcHQuaWQgICAgICAgICAgICAgICAgICAgVGhlIGlkIG9mIHRoZSBjb25jZXB0IHRvIGF0dGFjaCB0byB0aGUgbW9kZWxcbiAgICogICBAcGFyYW0ge29iamVjdFtdfSAgICAgICAgICAgICBhY3Rpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBhY3Rpb24gdG8gcGVyZm9ybSBvbiB0aGUgZ2l2ZW4gY29uY2VwdHMuIFBvc3NpYmxlIHZhbHVlcyBhcmUgJ21lcmdlJywgJ3JlbW92ZScsIG9yICdvdmVyd3JpdGUnLiBEZWZhdWx0OiAnbWVyZ2UnXG4gICAqIEByZXR1cm4ge1Byb21pc2UoTW9kZWwsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBNb2RlbCBpbnN0YW5jZSBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICB1cGRhdGUob2JqKSB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuX2NvbmZpZy5hcGlFbmRwb2ludH0ke01PREVMU19QQVRIfWA7XG4gICAgbGV0IG1vZGVsRGF0YSA9IFtvYmpdO1xuICAgIGxldCBkYXRhID0ge21vZGVsczogbW9kZWxEYXRhLm1hcChtID0+IGZvcm1hdE1vZGVsKE9iamVjdC5hc3NpZ24obSwge2lkOiB0aGlzLmlkfSkpKX07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqLmNvbmNlcHRzKSkge1xuICAgICAgZGF0YVsnYWN0aW9uJ10gPSBvYmouYWN0aW9uIHx8ICdtZXJnZSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyYXBUb2tlbih0aGlzLl9jb25maWcsIChoZWFkZXJzKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBheGlvcy5wYXRjaCh1cmwsIGRhdGEsIHtoZWFkZXJzfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoaXNTdWNjZXNzKHJlc3BvbnNlKSkge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgTW9kZWwodGhpcy5fY29uZmlnLCByZXNwb25zZS5kYXRhLm1vZGVsc1swXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBtb2RlbCB2ZXJzaW9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgc3luYyAgICAgSWYgdHJ1ZSwgdGhpcyByZXR1cm5zIGFmdGVyIG1vZGVsIGhhcyBjb21wbGV0ZWx5IHRyYWluZWQuIElmIGZhbHNlLCB0aGlzIGltbWVkaWF0ZWx5IHJldHVybnMgZGVmYXVsdCBhcGkgcmVzcG9uc2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2UoTW9kZWwsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBNb2RlbCBpbnN0YW5jZSBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICB0cmFpbihzeW5jKSB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuX2NvbmZpZy5hcGlFbmRwb2ludH0ke3JlcGxhY2VWYXJzKE1PREVMX1ZFUlNJT05TX1BBVEgsIFt0aGlzLmlkXSl9YDtcbiAgICByZXR1cm4gd3JhcFRva2VuKHRoaXMuX2NvbmZpZywgKGhlYWRlcnMpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBudWxsLCB7aGVhZGVyc30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKGlzU3VjY2VzcyhyZXNwb25zZSkpIHtcbiAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICB0aGlzLl9wb2xsVHJhaW4uYmluZCh0aGlzKSh0aW1lU3RhcnQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKG5ldyBNb2RlbCh0aGlzLl9jb25maWcsIHJlc3BvbnNlLmRhdGEubW9kZWwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9wb2xsVHJhaW4odGltZVN0YXJ0LCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5wb2xsVGltZW91dCk7XG4gICAgaWYgKChEYXRlLm5vdygpIC0gdGltZVN0YXJ0KSA+PSBTWU5DX1RJTUVPVVQpIHtcbiAgICAgIHJldHVybiByZWplY3Qoe1xuICAgICAgICBzdGF0dXM6ICdFcnJvcicsXG4gICAgICAgIG1lc3NhZ2U6ICdTeW5jIGNhbGwgdGltZWQgb3V0J1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuZ2V0T3V0cHV0SW5mbygpLnRoZW4oKG1vZGVsKSA9PiB7XG4gICAgICBsZXQgbW9kZWxTdGF0dXNDb2RlID0gbW9kZWwubW9kZWxWZXJzaW9uLnN0YXR1cy5jb2RlLnRvU3RyaW5nKCk7XG4gICAgICBpZiAobW9kZWxTdGF0dXNDb2RlID09PSBNT0RFTF9RVUVVRURfRk9SX1RSQUlOSU5HIHx8IG1vZGVsU3RhdHVzQ29kZSA9PT0gTU9ERUxfVFJBSU5JTkcpIHtcbiAgICAgICAgdGhpcy5wb2xsVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fcG9sbFRyYWluKHRpbWVTdGFydCwgcmVzb2x2ZSwgcmVqZWN0KSwgUE9MTFRJTUUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShtb2RlbCk7XG4gICAgICB9XG4gICAgfSwgcmVqZWN0KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBtb2RlbCBvdXB1dHMgYWNjb3JkaW5nIHRvIGlucHV0c1xuICAgKiBAcGFyYW0ge29iamVjdFtdfG9iamVjdHxzdHJpbmd9ICAgICAgIGlucHV0cyAgICBBbiBhcnJheSBvZiBvYmplY3RzL29iamVjdC9zdHJpbmcgcG9pbnRpbmcgdG8gYW4gaW1hZ2UgcmVzb3VyY2UuIEEgc3RyaW5nIGNhbiBlaXRoZXIgYmUgYSB1cmwgb3IgYmFzZTY0IGltYWdlIGJ5dGVzLiBPYmplY3Qga2V5cyBleHBsYWluZWQgYmVsb3c6XG4gICAqICAgIEBwYXJhbSB7b2JqZWN0fSAgICAgICAgICAgICAgICAgICAgICBpbnB1dHNbXS5pbWFnZSAgICAgT2JqZWN0IHdpdGgga2V5cyBleHBsYWluZWQgYmVsb3c6XG4gICAqICAgICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgIGlucHV0c1tdLmltYWdlLih1cmx8YmFzZTY0KSAgIENhbiBiZSBhIHB1YmxpY2x5IGFjY2Vzc2libHkgdXJsIG9yIGJhc2U2NCBzdHJpbmcgcmVwcmVzZW50aW5nIGltYWdlIGJ5dGVzIChyZXF1aXJlZClcbiAgICogICAgICAgQHBhcmFtIHtudW1iZXJbXX0gICAgICAgICAgICAgICAgICAgaW5wdXRzW10uaW1hZ2UuY3JvcCAgICAgICAgICAgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgcGVyY2VudCB0byBiZSBjcm9wcGVkIGZyb20gdG9wLCBsZWZ0LCBib3R0b20gYW5kIHJpZ2h0IChvcHRpb25hbClcbiAgICogQHBhcmFtIHtvYmplY3R8c3RyaW5nfSBjb25maWcgQW4gb2JqZWN0IHdpdGgga2V5cyBleHBsYWluZWQgYmVsb3cuIElmIGEgc3RyaW5nIGlzIHBhc3NlZCBpbnN0ZWFkLCBpdCB3aWxsIGJlIHRyZWF0ZWQgYXMgdGhlIGxhbmd1YWdlIChiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSlcbiAgICogICBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmxhbmd1YWdlIEEgc3RyaW5nIGNvZGUgcmVwcmVzZW50aW5nIHRoZSBsYW5ndWFnZSB0byByZXR1cm4gcmVzdWx0cyBpbiAoZXhhbXBsZTogJ3poJyBmb3Igc2ltcGxpZmllZCBDaGluZXNlLCAncnUnIGZvciBSdXNzaWFuLCAnamEnIGZvciBKYXBhbmVzZSlcbiAgICogICBAcGFyYW0ge2Jvb2xlYW59IGNvbmZpZy52aWRlbyBpbmRpY2F0ZXMgaWYgdGhlIGlucHV0IHNob3VsZCBiZSBwcm9jZXNzZWQgYXMgYSB2aWRlb1xuICAgKiAgIEBwYXJhbSB7b2JqZWN0W119IGNvbmZpZy5zZWxlY3RDb25jZXB0cyBBbiBhcnJheSBvZiBjb25jZXB0cyB0byByZXR1cm4uIEVhY2ggb2JqZWN0IGluIHRoZSBhcnJheSB3aWxsIGhhdmUgYSBmb3JtIG9mIHtuYW1lOiA8Q09OQ0VQVF9OQU1FPn0gb3Ige2lkOiBDT05DRVBUX0lEfVxuICAgKiAgIEBwYXJhbSB7ZmxvYXR9IGNvbmZpZy5taW5WYWx1ZSBUaGUgbWluaW11bSBjb25maWRlbmNlIHRocmVzaG9sZCB0aGF0IGEgcmVzdWx0IG11c3QgbWVldC4gRnJvbSAwLjAgdG8gMS4wXG4gICAqICAgQHBhcmFtIHtudW1iZXJ9IGNvbmZpZy5tYXhDb25jZXB0cyBUaGUgbWF4aW11bSBudW1iZXIgb2YgY29uY2VwdHMgdG8gcmV0dXJuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWaWRlbyAgRGVwcmVjYXRlZDogaW5kaWNhdGVzIGlmIHRoZSBpbnB1dCBzaG91bGQgYmUgcHJvY2Vzc2VkIGFzIGEgdmlkZW8gKGRlZmF1bHQgZmFsc2UpLiBEZXByZWNhdGVkIGluIGZhdm9yIG9mIHVzaW5nIGNvbmZpZyBvYmplY3RcbiAgICogQHJldHVybiB7UHJvbWlzZShyZXNwb25zZSwgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCB0aGUgQVBJIHJlc3BvbnNlIG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIHByZWRpY3QoaW5wdXRzLCBjb25maWcgPSB7fSwgaXNWaWRlbyA9IGZhbHNlKSB7XG4gICAgaWYgKGNoZWNrVHlwZSgvU3RyaW5nLywgY29uZmlnKSkge1xuICAgICAgY29uc29sZS53YXJuKCdwYXNzaW5nIHRoZSBsYW5ndWFnZSBhcyBhIHN0cmluZyBpcyBkZXByZWNhdGVkLCBjb25zaWRlciB1c2luZyB0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgaW5zdGVhZCcpO1xuICAgICAgY29uZmlnID0ge1xuICAgICAgICBsYW5ndWFnZTogY29uZmlnXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpc1ZpZGVvKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1wiaXNWaWRlb1wiIGFyZ3VtZW50IGlzIGRlcHJlY2F0ZWQsIGNvbnNpZGVyIHVzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCBpbnN0ZWFkJyk7XG4gICAgICBjb25maWcudmlkZW8gPSBpc1ZpZGVvO1xuICAgIH1cbiAgICBjb25zdCB2aWRlbyA9IGNvbmZpZy52aWRlbyB8fCBmYWxzZTtcbiAgICBkZWxldGUgY29uZmlnLnZpZGVvO1xuICAgIGlmIChjaGVja1R5cGUoLyhPYmplY3R8U3RyaW5nKS8sIGlucHV0cykpIHtcbiAgICAgIGlucHV0cyA9IFtpbnB1dHNdO1xuICAgIH1cbiAgICBsZXQgdXJsID0gYCR7dGhpcy5fY29uZmlnLmFwaUVuZHBvaW50fSR7dGhpcy52ZXJzaW9uSWQgP1xuICAgICAgcmVwbGFjZVZhcnMoVkVSU0lPTl9QUkVESUNUX1BBVEgsIFt0aGlzLmlkLCB0aGlzLnZlcnNpb25JZF0pIDpcbiAgICAgIHJlcGxhY2VWYXJzKFBSRURJQ1RfUEFUSCwgW3RoaXMuaWRdKX1gO1xuICAgIHJldHVybiB3cmFwVG9rZW4odGhpcy5fY29uZmlnLCAoaGVhZGVycykgPT4ge1xuICAgICAgbGV0IHBhcmFtcyA9IHtpbnB1dHM6IGlucHV0cy5tYXAoaW5wdXQgPT4gZm9ybWF0TWVkaWFQcmVkaWN0KGlucHV0LCB2aWRlbyA/ICd2aWRlbycgOiAnaW1hZ2UnKSl9O1xuICAgICAgaWYgKGNvbmZpZyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjb25maWcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcGFyYW1zWydtb2RlbCddID0ge1xuICAgICAgICAgIG91dHB1dF9pbmZvOiB7XG4gICAgICAgICAgICBvdXRwdXRfY29uZmlnOiBmb3JtYXRPYmplY3RGb3JTbmFrZUNhc2UoY29uZmlnKVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBwYXJhbXMsIHtoZWFkZXJzfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IGNsb25lKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIGRhdGEucmF3RGF0YSA9IGNsb25lKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgbW9kZWwgc3BlY2lmaWVkIGJ5IGl0cyBpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgIHZlcnNpb25JZCAgIFRoZSBtb2RlbCdzIGlkXG4gICAqIEByZXR1cm4ge1Byb21pc2UocmVzcG9uc2UsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggdGhlIEFQSSByZXNwb25zZSBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBnZXRWZXJzaW9uKHZlcnNpb25JZCkge1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLl9jb25maWcuYXBpRW5kcG9pbnR9JHtyZXBsYWNlVmFycyhNT0RFTF9WRVJTSU9OX1BBVEgsIFt0aGlzLmlkLCB2ZXJzaW9uSWRdKX1gO1xuICAgIHJldHVybiB3cmFwVG9rZW4odGhpcy5fY29uZmlnLCAoaGVhZGVycykgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KHVybCwge2hlYWRlcnN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gY2xvbmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgZGF0YS5yYXdEYXRhID0gY2xvbmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHZlcnNpb25zIG9mIHRoZSBtb2RlbFxuICAgKiBAcGFyYW0ge29iamVjdH0gICAgIG9wdGlvbnMgICAgIE9iamVjdCB3aXRoIGtleXMgZXhwbGFpbmVkIGJlbG93OiAob3B0aW9uYWwpXG4gICAqICAgQHBhcmFtIHtudW1iZXJ9ICAgICBvcHRpb25zLnBhZ2UgICAgICAgIFRoZSBwYWdlIG51bWJlciAob3B0aW9uYWwsIGRlZmF1bHQ6IDEpXG4gICAqICAgQHBhcmFtIHtudW1iZXJ9ICAgICBvcHRpb25zLnBlclBhZ2UgICAgIE51bWJlciBvZiBpbWFnZXMgdG8gcmV0dXJuIHBlciBwYWdlIChvcHRpb25hbCwgZGVmYXVsdDogMjApXG4gICAqIEByZXR1cm4ge1Byb21pc2UocmVzcG9uc2UsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggdGhlIEFQSSByZXNwb25zZSBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBnZXRWZXJzaW9ucyhvcHRpb25zID0ge3BhZ2U6IDEsIHBlclBhZ2U6IDIwfSkge1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLl9jb25maWcuYXBpRW5kcG9pbnR9JHtyZXBsYWNlVmFycyhNT0RFTF9WRVJTSU9OU19QQVRILCBbdGhpcy5pZF0pfWA7XG4gICAgcmV0dXJuIHdyYXBUb2tlbih0aGlzLl9jb25maWcsIChoZWFkZXJzKSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgcGFyYW1zOiB7J3Blcl9wYWdlJzogb3B0aW9ucy5wZXJQYWdlLCAncGFnZSc6IG9wdGlvbnMucGFnZX0sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KHVybCwgZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IGNsb25lKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIGRhdGEucmF3RGF0YSA9IGNsb25lKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB0aGUgbW9kZWwncyBvdXRwdXQgaW5mb1xuICAgKiBAcmV0dXJuIHtQcm9taXNlKE1vZGVsLCBlcnJvcil9IEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgTW9kZWwgaW5zdGFuY2Ugb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgZ2V0T3V0cHV0SW5mbygpIHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5fY29uZmlnLmFwaUVuZHBvaW50fSR7cmVwbGFjZVZhcnMoTU9ERUxfT1VUUFVUX1BBVEgsIFt0aGlzLmlkXSl9YDtcbiAgICByZXR1cm4gd3JhcFRva2VuKHRoaXMuX2NvbmZpZywgKGhlYWRlcnMpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCh1cmwsIHtoZWFkZXJzfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXNvbHZlKG5ldyBNb2RlbCh0aGlzLl9jb25maWcsIHJlc3BvbnNlLmRhdGEubW9kZWwpKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIHRoZSBtb2RlbCdzIGlucHV0c1xuICAgKiBAcGFyYW0ge29iamVjdH0gICAgIG9wdGlvbnMgICAgIE9iamVjdCB3aXRoIGtleXMgZXhwbGFpbmVkIGJlbG93OiAob3B0aW9uYWwpXG4gICAqICAgQHBhcmFtIHtudW1iZXJ9ICAgICBvcHRpb25zLnBhZ2UgICAgICAgIFRoZSBwYWdlIG51bWJlciAob3B0aW9uYWwsIGRlZmF1bHQ6IDEpXG4gICAqICAgQHBhcmFtIHtudW1iZXJ9ICAgICBvcHRpb25zLnBlclBhZ2UgICAgIE51bWJlciBvZiBpbWFnZXMgdG8gcmV0dXJuIHBlciBwYWdlIChvcHRpb25hbCwgZGVmYXVsdDogMjApXG4gICAqIEByZXR1cm4ge1Byb21pc2UocmVzcG9uc2UsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggdGhlIEFQSSByZXNwb25zZSBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBnZXRJbnB1dHMob3B0aW9ucyA9IHtwYWdlOiAxLCBwZXJQYWdlOiAyMH0pIHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5fY29uZmlnLmFwaUVuZHBvaW50fSR7dGhpcy52ZXJzaW9uSWQgP1xuICAgICAgcmVwbGFjZVZhcnMoTU9ERUxfVkVSU0lPTl9JTlBVVFNfUEFUSCwgW3RoaXMuaWQsIHRoaXMudmVyc2lvbklkXSkgOlxuICAgICAgcmVwbGFjZVZhcnMoTU9ERUxfSU5QVVRTX1BBVEgsIFt0aGlzLmlkXSl9YDtcbiAgICByZXR1cm4gd3JhcFRva2VuKHRoaXMuX2NvbmZpZywgKGhlYWRlcnMpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCh1cmwsIHtcbiAgICAgICAgICBwYXJhbXM6IHsncGVyX3BhZ2UnOiBvcHRpb25zLnBlclBhZ2UsICdwYWdlJzogb3B0aW9ucy5wYWdlfSxcbiAgICAgICAgICBoZWFkZXJzXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBjbG9uZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICBkYXRhLnJhd0RhdGEgPSBjbG9uZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IEEgc3RyaW5nIHBvaW50aW5nIHRvIGFuIGltYWdlIHJlc291cmNlLiBBIHN0cmluZyBtdXN0IGJlIGEgdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgQSBjb25maWd1cmF0aW9uIG9iamVjdCBjb25zaXN0aW5nIG9mIHRoZSBmb2xsb3dpbmcgcmVxdWlyZWQga2V5c1xuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuaWQgVGhlIGlkIG9mIHRoZSBmZWVkYmFjayByZXF1ZXN0XG4gICAqICAgQHBhcmFtIHtvYmplY3R9IGNvbmZpZy5kYXRhIFRoZSBmZWVkYmFjayBkYXRhIHRvIGJlIHNlbnRcbiAgICogICBAcGFyYW0ge29iamVjdH0gY29uZmlnLmluZm8gTWV0YSBkYXRhIHJlbGF0ZWQgdG8gdGhlIGZlZWRiYWNrIHJlcXVlc3RcbiAgICogQHJldHVybiB7UHJvbWlzZShyZXNwb25zZSwgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCB0aGUgQVBJIHJlc3BvbnNlIG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIGZlZWRiYWNrKGlucHV0LCB7aWQsIGRhdGEsIGluZm99KSB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5fY29uZmlnLmFwaUVuZHBvaW50fSR7dGhpcy52ZXJzaW9uSWQgP1xuICAgICAgcmVwbGFjZVZhcnMoTU9ERUxfVkVSU0lPTl9GRUVEQkFDS19QQVRILCBbdGhpcy5pZCwgdGhpcy52ZXJzaW9uSWRdKSA6XG4gICAgICByZXBsYWNlVmFycyhNT0RFTF9GRUVEQkFDS19QQVRILCBbdGhpcy5pZF0pfWA7XG4gICAgY29uc3QgbWVkaWEgPSBmb3JtYXRNZWRpYVByZWRpY3QoaW5wdXQpLmRhdGE7XG4gICAgaW5mby5ldmVudFR5cGUgPSAnYW5ub3RhdGlvbic7XG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIGlkLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKG1lZGlhLCBkYXRhKSxcbiAgICAgICAgJ2ZlZWRiYWNrX2luZm8nOiBmb3JtYXRPYmplY3RGb3JTbmFrZUNhc2UoaW5mbylcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB3cmFwVG9rZW4odGhpcy5fY29uZmlnLCBoZWFkZXJzID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBib2R5LCB7XG4gICAgICAgICAgaGVhZGVyc1xuICAgICAgICB9KS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICBjb25zdCBkID0gY2xvbmUoZGF0YSk7XG4gICAgICAgICAgZC5yYXdEYXRhID0gY2xvbmUoZGF0YSk7XG4gICAgICAgICAgcmVzb2x2ZShkKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZVxuICAuZXhwb3J0cyA9IE1vZGVsO1xuIl19
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/Model.js","/")
},{"./constants":45,"./helpers":47,"./utils":48,"axios":4,"buffer":23,"pBGvAp":27}],43:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');
var Promise = require('promise');
var Model = require('./Model');
var Concepts = require('./Concepts');

var _require = require('./constants'),
    API = _require.API,
    ERRORS = _require.ERRORS,
    replaceVars = _require.replaceVars;

var _require2 = require('./helpers'),
    isSuccess = _require2.isSuccess,
    checkType = _require2.checkType,
    clone = _require2.clone;

var _require3 = require('./utils'),
    wrapToken = _require3.wrapToken,
    formatModel = _require3.formatModel;

var MODELS_PATH = API.MODELS_PATH,
    MODEL_PATH = API.MODEL_PATH,
    MODEL_SEARCH_PATH = API.MODEL_SEARCH_PATH,
    MODEL_VERSION_PATH = API.MODEL_VERSION_PATH;

/**
 * class representing a collection of models
 * @class
 */

var Models = function () {
  function Models(_config) {
    var _this = this;

    var rawData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Models);

    this._config = _config;
    this.rawData = rawData;
    rawData.forEach(function (modelData, index) {
      _this[index] = new Model(_this._config, modelData);
    });
    this.length = rawData.length;
  }

  /**
   * Returns a Model instance given model id or name. It will call search if name is given.
   * @param {string|object}    model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
   *   @param {string}           model.id          Model id
   *   @param {string}           model.name        Model name
   *   @param {string}           model.version     Model version
   *   @param {string}           model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
   * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
   */


  _createClass(Models, [{
    key: 'initModel',
    value: function initModel(model) {
      var _this2 = this;

      var data = {};
      var fn = void 0;
      if (checkType(/String/, model)) {
        data.id = model;
      } else {
        data = model;
      }
      if (data.id) {
        fn = function fn(resolve, reject) {
          resolve(new Model(_this2._config, data));
        };
      } else {
        fn = function fn(resolve, reject) {
          _this2.search(data.name, data.type).then(function (models) {
            if (data.version) {
              resolve(models.rawData.filter(function (model) {
                return model.modelVersion.id === data.version;
              }));
            } else {
              resolve(models[0]);
            }
          }, reject).catch(reject);
        };
      }
      return new Promise(fn);
    }

    /**
     * Calls predict given model info and inputs to predict on
     * @param {string|object}            model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
     *   @param {string}                   model.id          Model id
     *   @param {string}                   model.name        Model name
     *   @param {string}                   model.version     Model version
     *   @param {string}                   model.language    Model language (only for Clarifai's public models)
     *   @param {string}                   model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
     * @param {object[]|object|string}   inputs    An array of objects/object/string pointing to an image resource. A string can either be a url or base64 image bytes. Object keys explained below:
     *    @param {object}                  inputs[].image     Object with keys explained below:
     *       @param {string}                 inputs[].image.(url|base64)  Can be a publicly accessibly url or base64 string representing image bytes (required)
     * @param {boolean} isVideo  indicates if the input should be processed as a video (default false)
     * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
     */

  }, {
    key: 'predict',
    value: function predict(model, inputs) {
      var _this3 = this;

      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (checkType(/Boolean/, config)) {
        console.warn('"isVideo" argument is deprecated, consider using the configuration object instead');
        config = {
          video: config
        };
      }
      if (model.language) {
        config.language = model.language;
      }
      return new Promise(function (resolve, reject) {
        _this3.initModel(model).then(function (modelObj) {
          modelObj.predict(inputs, config).then(resolve, reject).catch(reject);
        }, reject);
      });
    }

    /**
     * Calls train on a model and creates a new model version given model info
     * @param {string|object}            model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
     *   @param {string}                   model.id          Model id
     *   @param {string}                   model.name        Model name
     *   @param {string}                   model.version     Model version
     *   @param {string}                   model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
     * @param {boolean}                  sync        If true, this returns after model has completely trained. If false, this immediately returns default api response.
     * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
     */

  }, {
    key: 'train',
    value: function train(model) {
      var _this4 = this;

      var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return new Promise(function (resolve, reject) {
        _this4.initModel(model).then(function (model) {
          model.train(sync).then(resolve, reject).catch(reject);
        }, reject);
      });
    }

    /**
     *
     * @param {string|object}            model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
     *   @param {string}                   model.id          Model id
     *   @param {string}                   model.name        Model name
     *   @param {string}                   model.version     Model version
     *   @param {string}                   model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
     * @param {string} input A string pointing to an image resource. A string must be a url
     * @param {object} config A configuration object consisting of the following required keys
     *   @param {string} config.id The id of the feedback request
     *   @param {object} config.data The feedback data to be sent
     *   @param {object} config.info Meta data related to the feedback request
     */

  }, {
    key: 'feedback',
    value: function feedback(model, input, config) {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5.initModel(model).then(function (model) {
          return model.feedback(input, config);
        }).then(function (d) {
          return resolve(d);
        }).catch(function (e) {
          return reject(e);
        });
      });
    }

    /**
     * Returns a version of the model specified by its id
     * @param {string|object}            model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
     *   @param {string}                   model.id          Model id
     *   @param {string}                   model.name        Model name
     *   @param {string}                   model.version     Model version
     *   @param {string}                   model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
     * @param {string}     versionId   The model's id
     * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
     */

  }, {
    key: 'getVersion',
    value: function getVersion(model, versionId) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        _this6.initModel(model).then(function (model) {
          model.getVersion(versionId).then(resolve, reject).catch(reject);
        }, reject);
      });
    }

    /**
     * Returns a list of versions of the model
     * @param {string|object}            model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
     *   @param {string}                   model.id          Model id
     *   @param {string}                   model.name        Model name
     *   @param {string}                   model.version     Model version
     *   @param {string}                   model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
     * @param {object}                   options     Object with keys explained below: (optional)
     *   @param {number}                   options.page        The page number (optional, default: 1)
     *   @param {number}                   options.perPage     Number of images to return per page (optional, default: 20)
     * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
     */

  }, {
    key: 'getVersions',
    value: function getVersions(model) {
      var _this7 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { page: 1, perPage: 20 };

      return new Promise(function (resolve, reject) {
        _this7.initModel(model).then(function (model) {
          model.getVersions().then(resolve, reject).catch(reject);
        }, reject);
      });
    }

    /**
     * Returns all the model's output info
     * @param {string|object}            model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
     *   @param {string}                   model.id          Model id
     *   @param {string}                   model.name        Model name
     *   @param {string}                   model.version     Model version
     *   @param {string}                   model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
     * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
     */

  }, {
    key: 'getOutputInfo',
    value: function getOutputInfo(model) {
      var _this8 = this;

      return new Promise(function (resolve, reject) {
        _this8.initModel(model).then(function (model) {
          model.getOutputInfo().then(resolve, reject).catch(reject);
        }, reject);
      });
    }

    /**
     * Returns all the models
     * @param {Object}     options     Object with keys explained below: (optional)
     *   @param {Number}     options.page        The page number (optional, default: 1)
     *   @param {Number}     options.perPage     Number of images to return per page (optional, default: 20)
     * @return {Promise(Models, error)} A Promise that is fulfilled with an instance of Models or rejected with an error
     */

  }, {
    key: 'list',
    value: function list() {
      var _this9 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { page: 1, perPage: 20 };

      var url = '' + this._config.apiEndpoint + MODELS_PATH;
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.get(url, {
            params: { 'per_page': options.perPage, 'page': options.page },
            headers: headers
          }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Models(_this9._config, response.data.models));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * Create a model
     * @param {string|object}                  model                                  If string, it is assumed to be the model id. Otherwise, if object is given, it can have any of the following keys:
     *   @param {string}                         model.id                               Model id
     *   @param {string}                         model.name                             Model name
     * @param {object[]|string[]|Concepts[]}   conceptsData                           List of objects with ids, concept id strings or an instance of Concepts object
     * @param {Object}                         options                                Object with keys explained below:
     *   @param {boolean}                        options.conceptsMutuallyExclusive      Do you expect to see more than one of the concepts in this model in the SAME image? Set to false (default) if so. Otherwise, set to true.
     *   @param {boolean}                        options.closedEnvironment              Do you expect to run the trained model on images that do not contain ANY of the concepts in the model? Set to false (default) if so. Otherwise, set to true.
     * @return {Promise(Model, error)} A Promise that is fulfilled with an instance of Model or rejected with an error
     */

  }, {
    key: 'create',
    value: function create(model) {
      var _this10 = this;

      var conceptsData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var concepts = conceptsData instanceof Concepts ? conceptsData.toObject('id') : conceptsData.map(function (concept) {
        var val = concept;
        if (checkType(/String/, concept)) {
          val = { 'id': concept };
        }
        return val;
      });
      var modelObj = model;
      if (checkType(/String/, model)) {
        modelObj = { id: model, name: model };
      }
      if (modelObj.id === undefined) {
        throw ERRORS.paramsRequired('Model ID');
      }
      var url = '' + this._config.apiEndpoint + MODELS_PATH;
      var data = { model: modelObj };
      data['model']['output_info'] = {
        'data': {
          concepts: concepts
        },
        'output_config': {
          'concepts_mutually_exclusive': !!options.conceptsMutuallyExclusive,
          'closed_environment': !!options.closedEnvironment
        }
      };

      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.post(url, data, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Model(_this10._config, response.data.model));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * Returns a model specified by ID
     * @param {String}     id          The model's id
     * @return {Promise(Model, error)} A Promise that is fulfilled with an instance of Model or rejected with an error
     */

  }, {
    key: 'get',
    value: function get(id) {
      var _this11 = this;

      var url = '' + this._config.apiEndpoint + replaceVars(MODEL_PATH, [id]);
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.get(url, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Model(_this11._config, response.data.model));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * Update a model's or a list of models' output config or concepts
     * @param {object|object[]}      models                                 Can be a single model object or list of model objects with the following attrs:
     *   @param {string}               models.id                                    The id of the model to apply changes to (Required)
     *   @param {string}               models.name                                  The new name of the model to update with
     *   @param {boolean}              models.conceptsMutuallyExclusive             Do you expect to see more than one of the concepts in this model in the SAME image? Set to false (default) if so. Otherwise, set to true.
     *   @param {boolean}              models.closedEnvironment                     Do you expect to run the trained model on images that do not contain ANY of the concepts in the model? Set to false (default) if so. Otherwise, set to true.
     *   @param {object[]}             models.concepts                              An array of concept objects or string
     *     @param {object|string}        models.concepts[].concept                    If string is given, this is interpreted as concept id. Otherwise, if object is given, client expects the following attributes
     *       @param {string}             models.concepts[].concept.id                   The id of the concept to attach to the model
     *   @param {object[]}             models.action                                The action to perform on the given concepts. Possible values are 'merge', 'remove', or 'overwrite'. Default: 'merge'
     * @return {Promise(Models, error)} A Promise that is fulfilled with an instance of Models or rejected with an error
     */

  }, {
    key: 'update',
    value: function update(models) {
      var _this12 = this;

      var url = '' + this._config.apiEndpoint + MODELS_PATH;
      var modelsList = Array.isArray(models) ? models : [models];
      var data = { models: modelsList.map(formatModel) };
      data['action'] = models.action || 'merge';
      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.patch(url, data, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Models(_this12._config, response.data.models));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }

    /**
     * Update model by merging concepts
     * @param {object|object[]}      model                                 Can be a single model object or list of model objects with the following attrs:
     *   @param {string}               model.id                                    The id of the model to apply changes to (Required)
     *   @param {object[]}             model.concepts                              An array of concept objects or string
     *     @param {object|string}        model.concepts[].concept                    If string is given, this is interpreted as concept id. Otherwise, if object is given, client expects the following attributes
     *       @param {string}             model.concepts[].concept.id                   The id of the concept to attach to the model
     */

  }, {
    key: 'mergeConcepts',
    value: function mergeConcepts() {
      var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      model.action = 'merge';
      return this.update(model);
    }

    /**
     * Update model by removing concepts
     * @param {object|object[]}      model                                 Can be a single model object or list of model objects with the following attrs:
     *   @param {string}               model.id                                    The id of the model to apply changes to (Required)
     *   @param {object[]}             model.concepts                              An array of concept objects or string
     *     @param {object|string}        model.concepts[].concept                    If string is given, this is interpreted as concept id. Otherwise, if object is given, client expects the following attributes
     *       @param {string}             model.concepts[].concept.id                   The id of the concept to attach to the model
     */

  }, {
    key: 'deleteConcepts',
    value: function deleteConcepts() {
      var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      model.action = 'remove';
      return this.update(model);
    }

    /**
     * Update model by overwriting concepts
     * @param {object|object[]}      model                                 Can be a single model object or list of model objects with the following attrs:
     *   @param {string}               model.id                                    The id of the model to apply changes to (Required)
     *   @param {object[]}             model.concepts                              An array of concept objects or string
     *     @param {object|string}        model.concepts[].concept                    If string is given, this is interpreted as concept id. Otherwise, if object is given, client expects the following attributes
     *       @param {string}             model.concepts[].concept.id                   The id of the concept to attach to the model
     */

  }, {
    key: 'overwriteConcepts',
    value: function overwriteConcepts() {
      var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      model.action = 'overwrite';
      return this.update(model);
    }

    /**
     * Deletes all models (if no ids and versionId given) or a model (if given id) or a model version (if given id and verion id)
     * @param {String|String[]}      ids         Can be a single string or an array of strings representing the model ids
     * @param {String}               versionId   The model's version id
     * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
     */

  }, {
    key: 'delete',
    value: function _delete(ids) {
      var versionId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var request = void 0,
          url = void 0,
          data = void 0;
      var id = ids;

      if (checkType(/String/, ids) || checkType(/Array/, ids) && ids.length === 1) {
        if (versionId) {
          url = '' + this._config.apiEndpoint + replaceVars(MODEL_VERSION_PATH, [id, versionId]);
        } else {
          url = '' + this._config.apiEndpoint + replaceVars(MODEL_PATH, [id]);
        }
        request = wrapToken(this._config, function (headers) {
          return new Promise(function (resolve, reject) {
            axios.delete(url, { headers: headers }).then(function (response) {
              var data = clone(response.data);
              data.rawData = clone(response.data);
              resolve(data);
            }, reject);
          });
        });
      } else {
        if (!ids && !versionId) {
          url = '' + this._config.apiEndpoint + MODELS_PATH;
          data = { 'delete_all': true };
        } else if (!versionId && ids.length > 1) {
          url = '' + this._config.apiEndpoint + MODELS_PATH;
          data = { ids: ids };
        } else {
          throw ERRORS.INVALID_DELETE_ARGS;
        }
        request = wrapToken(this._config, function (headers) {
          return new Promise(function (resolve, reject) {
            axios({
              method: 'delete',
              url: url,
              data: data,
              headers: headers
            }).then(function (response) {
              var data = clone(response.data);
              data.rawData = clone(response.data);
              resolve(data);
            }, reject);
          });
        });
      }

      return request;
    }

    /**
     * Search for models by name or type
     * @param {String}     name        The model name
     * @param {String}     type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
     * @return {Promise(models, error)} A Promise that is fulfilled with an instance of Models or rejected with an error
     */

  }, {
    key: 'search',
    value: function search(name) {
      var _this13 = this;

      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var url = '' + this._config.apiEndpoint + MODEL_SEARCH_PATH;
      return wrapToken(this._config, function (headers) {
        var params = {
          'model_query': {
            name: name,
            type: type
          }
        };
        return new Promise(function (resolve, reject) {
          axios.post(url, params, { headers: headers }).then(function (response) {
            if (isSuccess(response)) {
              resolve(new Models(_this13._config, response.data.models));
            } else {
              reject(response);
            }
          }, reject);
        });
      });
    }
  }]);

  return Models;
}();

module.exports = Models;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGVscy5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJQcm9taXNlIiwiTW9kZWwiLCJDb25jZXB0cyIsIkFQSSIsIkVSUk9SUyIsInJlcGxhY2VWYXJzIiwiaXNTdWNjZXNzIiwiY2hlY2tUeXBlIiwiY2xvbmUiLCJ3cmFwVG9rZW4iLCJmb3JtYXRNb2RlbCIsIk1PREVMU19QQVRIIiwiTU9ERUxfUEFUSCIsIk1PREVMX1NFQVJDSF9QQVRIIiwiTU9ERUxfVkVSU0lPTl9QQVRIIiwiTW9kZWxzIiwiX2NvbmZpZyIsInJhd0RhdGEiLCJmb3JFYWNoIiwibW9kZWxEYXRhIiwiaW5kZXgiLCJsZW5ndGgiLCJtb2RlbCIsImRhdGEiLCJmbiIsImlkIiwicmVzb2x2ZSIsInJlamVjdCIsInNlYXJjaCIsIm5hbWUiLCJ0eXBlIiwidGhlbiIsIm1vZGVscyIsInZlcnNpb24iLCJmaWx0ZXIiLCJtb2RlbFZlcnNpb24iLCJjYXRjaCIsImlucHV0cyIsImNvbmZpZyIsImNvbnNvbGUiLCJ3YXJuIiwidmlkZW8iLCJsYW5ndWFnZSIsImluaXRNb2RlbCIsIm1vZGVsT2JqIiwicHJlZGljdCIsInN5bmMiLCJ0cmFpbiIsImlucHV0IiwiZmVlZGJhY2siLCJkIiwiZSIsInZlcnNpb25JZCIsImdldFZlcnNpb24iLCJvcHRpb25zIiwicGFnZSIsInBlclBhZ2UiLCJnZXRWZXJzaW9ucyIsImdldE91dHB1dEluZm8iLCJ1cmwiLCJhcGlFbmRwb2ludCIsImhlYWRlcnMiLCJnZXQiLCJwYXJhbXMiLCJyZXNwb25zZSIsImNvbmNlcHRzRGF0YSIsImNvbmNlcHRzIiwidG9PYmplY3QiLCJtYXAiLCJjb25jZXB0IiwidmFsIiwidW5kZWZpbmVkIiwicGFyYW1zUmVxdWlyZWQiLCJjb25jZXB0c011dHVhbGx5RXhjbHVzaXZlIiwiY2xvc2VkRW52aXJvbm1lbnQiLCJwb3N0IiwibW9kZWxzTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsImFjdGlvbiIsInBhdGNoIiwidXBkYXRlIiwiaWRzIiwicmVxdWVzdCIsImRlbGV0ZSIsIklOVkFMSURfREVMRVRFX0FSR1MiLCJtZXRob2QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJQSxRQUFRQyxRQUFRLE9BQVIsQ0FBWjtBQUNBLElBQUlDLFVBQVVELFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUUsUUFBUUYsUUFBUSxTQUFSLENBQVo7QUFDQSxJQUFJRyxXQUFXSCxRQUFRLFlBQVIsQ0FBZjs7ZUFDaUNBLFFBQVEsYUFBUixDO0lBQTVCSSxHLFlBQUFBLEc7SUFBS0MsTSxZQUFBQSxNO0lBQVFDLFcsWUFBQUEsVzs7Z0JBQ2tCTixRQUFRLFdBQVIsQztJQUEvQk8sUyxhQUFBQSxTO0lBQVdDLFMsYUFBQUEsUztJQUFXQyxLLGFBQUFBLEs7O2dCQUNJVCxRQUFRLFNBQVIsQztJQUExQlUsUyxhQUFBQSxTO0lBQVdDLFcsYUFBQUEsVzs7SUFDWEMsVyxHQUFrRVIsRyxDQUFsRVEsVztJQUFhQyxVLEdBQXFEVCxHLENBQXJEUyxVO0lBQVlDLGlCLEdBQXlDVixHLENBQXpDVSxpQjtJQUFtQkMsa0IsR0FBc0JYLEcsQ0FBdEJXLGtCOztBQUVqRDs7Ozs7SUFJTUMsTTtBQUNKLGtCQUFZQyxPQUFaLEVBQW1DO0FBQUE7O0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUFBOztBQUNqQyxTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQUEsWUFBUUMsT0FBUixDQUFnQixVQUFDQyxTQUFELEVBQVlDLEtBQVosRUFBc0I7QUFDcEMsWUFBS0EsS0FBTCxJQUFjLElBQUluQixLQUFKLENBQVUsTUFBS2UsT0FBZixFQUF3QkcsU0FBeEIsQ0FBZDtBQUNELEtBRkQ7QUFHQSxTQUFLRSxNQUFMLEdBQWNKLFFBQVFJLE1BQXRCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7OEJBU1VDLEssRUFBTztBQUFBOztBQUNmLFVBQUlDLE9BQU8sRUFBWDtBQUNB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MUMsWUFBSUUsU0FBUztBQUNYLHlCQUFlO0FBQ2JsQyxzQkFEYTtBQUViQztBQUZhO0FBREosU0FBYjtBQU1BLGVBQU8sSUFBSTlCLE9BQUosQ0FBWSxVQUFDMEIsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDN0IsZ0JBQU02RSxJQUFOLENBQVdoQixHQUFYLEVBQWdCSSxNQUFoQixFQUF3QixFQUFDRixnQkFBRCxFQUF4QixFQUFtQzlCLElBQW5DLENBQXdDLFVBQUNpQyxRQUFELEVBQWM7QUFDcEQsZ0JBQUkxRCxVQUFVMEQsUUFBVixDQUFKLEVBQXlCO0FBQ3ZCdEMsc0JBQVEsSUFBSVgsTUFBSixDQUFXLFFBQUtDLE9BQWhCLEVBQXlCZ0QsU0FBU3pDLElBQVQsQ0FBY1MsTUFBdkMsQ0FBUjtBQUNELGFBRkQsTUFFTztBQUNMTCxxQkFBT3FDLFFBQVA7QUFDRDtBQUNGLFdBTkQsRUFNR3JDLE1BTkg7QUFPRCxTQVJNLENBQVA7QUFTRCxPQWhCTSxDQUFQO0FBaUJEOzs7Ozs7QUFHSDRELE9BQU9DLE9BQVAsR0FBaUJ6RSxNQUFqQiIsImZpbGUiOiJNb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xubGV0IFByb21pc2UgPSByZXF1aXJlKCdwcm9taXNlJyk7XG5sZXQgTW9kZWwgPSByZXF1aXJlKCcuL01vZGVsJyk7XG5sZXQgQ29uY2VwdHMgPSByZXF1aXJlKCcuL0NvbmNlcHRzJyk7XG5sZXQge0FQSSwgRVJST1JTLCByZXBsYWNlVmFyc30gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xubGV0IHtpc1N1Y2Nlc3MsIGNoZWNrVHlwZSwgY2xvbmV9ID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5sZXQge3dyYXBUb2tlbiwgZm9ybWF0TW9kZWx9ID0gcmVxdWlyZSgnLi91dGlscycpO1xubGV0IHtNT0RFTFNfUEFUSCwgTU9ERUxfUEFUSCwgTU9ERUxfU0VBUkNIX1BBVEgsIE1PREVMX1ZFUlNJT05fUEFUSH0gPSBBUEk7XG5cbi8qKlxuICogY2xhc3MgcmVwcmVzZW50aW5nIGEgY29sbGVjdGlvbiBvZiBtb2RlbHNcbiAqIEBjbGFzc1xuICovXG5jbGFzcyBNb2RlbHMge1xuICBjb25zdHJ1Y3RvcihfY29uZmlnLCByYXdEYXRhID0gW10pIHtcbiAgICB0aGlzLl9jb25maWcgPSBfY29uZmlnO1xuICAgIHRoaXMucmF3RGF0YSA9IHJhd0RhdGE7XG4gICAgcmF3RGF0YS5mb3JFYWNoKChtb2RlbERhdGEsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzW2luZGV4XSA9IG5ldyBNb2RlbCh0aGlzLl9jb25maWcsIG1vZGVsRGF0YSk7XG4gICAgfSk7XG4gICAgdGhpcy5sZW5ndGggPSByYXdEYXRhLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgTW9kZWwgaW5zdGFuY2UgZ2l2ZW4gbW9kZWwgaWQgb3IgbmFtZS4gSXQgd2lsbCBjYWxsIHNlYXJjaCBpZiBuYW1lIGlzIGdpdmVuLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9ICAgIG1vZGVsICAgICAgIElmIHN0cmluZywgaXQgaXMgYXNzdW1lZCB0byBiZSBtb2RlbCBpZC4gT3RoZXJ3aXNlLCBpZiBvYmplY3QgaXMgZ2l2ZW4sIGl0IGNhbiBoYXZlIGFueSBvZiB0aGUgZm9sbG93aW5nIGtleXM6XG4gICAqICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICBtb2RlbC5pZCAgICAgICAgICBNb2RlbCBpZFxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgbW9kZWwubmFtZSAgICAgICAgTW9kZWwgbmFtZVxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgbW9kZWwudmVyc2lvbiAgICAgTW9kZWwgdmVyc2lvblxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgbW9kZWwudHlwZSAgICAgICAgVGhpcyBjYW4gYmUgXCJjb25jZXB0XCIsIFwiY29sb3JcIiwgXCJlbWJlZFwiLCBcImZhY2VkZXRlY3RcIiwgXCJjbHVzdGVyXCIgb3IgXCJibHVyXCJcbiAgICogQHJldHVybiB7UHJvbWlzZShNb2RlbCwgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhIE1vZGVsIGluc3RhbmNlIG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIGluaXRNb2RlbChtb2RlbCkge1xuICAgIGxldCBkYXRhID0ge307XG4gICAgbGV0IGZuO1xuICAgIGlmIChjaGVja1R5cGUoL1N0cmluZy8sIG1vZGVsKSkge1xuICAgICAgZGF0YS5pZCA9IG1vZGVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gbW9kZWw7XG4gICAgfVxuICAgIGlmIChkYXRhLmlkKSB7XG4gICAgICBmbiA9IChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcmVzb2x2ZShuZXcgTW9kZWwodGhpcy5fY29uZmlnLCBkYXRhKSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBmbiA9IChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2goZGF0YS5uYW1lLCBkYXRhLnR5cGUpLnRoZW4oKG1vZGVscykgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLnZlcnNpb24pIHtcbiAgICAgICAgICAgIHJlc29sdmUobW9kZWxzLnJhd0RhdGEuZmlsdGVyKChtb2RlbCkgPT4gbW9kZWwubW9kZWxWZXJzaW9uLmlkID09PSBkYXRhLnZlcnNpb24pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShtb2RlbHNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgcmVqZWN0KS5jYXRjaChyZWplY3QpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyBwcmVkaWN0IGdpdmVuIG1vZGVsIGluZm8gYW5kIGlucHV0cyB0byBwcmVkaWN0IG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gICAgICAgICAgICBtb2RlbCAgICAgICBJZiBzdHJpbmcsIGl0IGlzIGFzc3VtZWQgdG8gYmUgbW9kZWwgaWQuIE90aGVyd2lzZSwgaWYgb2JqZWN0IGlzIGdpdmVuLCBpdCBjYW4gaGF2ZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBrZXlzOlxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICBtb2RlbC5pZCAgICAgICAgICBNb2RlbCBpZFxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICBtb2RlbC5uYW1lICAgICAgICBNb2RlbCBuYW1lXG4gICAqICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgIG1vZGVsLnZlcnNpb24gICAgIE1vZGVsIHZlcnNpb25cbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgbW9kZWwubGFuZ3VhZ2UgICAgTW9kZWwgbGFuZ3VhZ2UgKG9ubHkgZm9yIENsYXJpZmFpJ3MgcHVibGljIG1vZGVscylcbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgbW9kZWwudHlwZSAgICAgICAgVGhpcyBjYW4gYmUgXCJjb25jZXB0XCIsIFwiY29sb3JcIiwgXCJlbWJlZFwiLCBcImZhY2VkZXRlY3RcIiwgXCJjbHVzdGVyXCIgb3IgXCJibHVyXCJcbiAgICogQHBhcmFtIHtvYmplY3RbXXxvYmplY3R8c3RyaW5nfSAgIGlucHV0cyAgICBBbiBhcnJheSBvZiBvYmplY3RzL29iamVjdC9zdHJpbmcgcG9pbnRpbmcgdG8gYW4gaW1hZ2UgcmVzb3VyY2UuIEEgc3RyaW5nIGNhbiBlaXRoZXIgYmUgYSB1cmwgb3IgYmFzZTY0IGltYWdlIGJ5dGVzLiBPYmplY3Qga2V5cyBleHBsYWluZWQgYmVsb3c6XG4gICAqICAgIEBwYXJhbSB7b2JqZWN0fSAgICAgICAgICAgICAgICAgIGlucHV0c1tdLmltYWdlICAgICBPYmplY3Qgd2l0aCBrZXlzIGV4cGxhaW5lZCBiZWxvdzpcbiAgICogICAgICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICBpbnB1dHNbXS5pbWFnZS4odXJsfGJhc2U2NCkgIENhbiBiZSBhIHB1YmxpY2x5IGFjY2Vzc2libHkgdXJsIG9yIGJhc2U2NCBzdHJpbmcgcmVwcmVzZW50aW5nIGltYWdlIGJ5dGVzIChyZXF1aXJlZClcbiAgICogQHBhcmFtIHtib29sZWFufSBpc1ZpZGVvICBpbmRpY2F0ZXMgaWYgdGhlIGlucHV0IHNob3VsZCBiZSBwcm9jZXNzZWQgYXMgYSB2aWRlbyAoZGVmYXVsdCBmYWxzZSlcbiAgICogQHJldHVybiB7UHJvbWlzZShyZXNwb25zZSwgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCB0aGUgQVBJIHJlc3BvbnNlIG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIHByZWRpY3QobW9kZWwsIGlucHV0cywgY29uZmlnID0ge30pIHtcbiAgICBpZiAoY2hlY2tUeXBlKC9Cb29sZWFuLywgY29uZmlnKSkge1xuICAgICAgY29uc29sZS53YXJuKCdcImlzVmlkZW9cIiBhcmd1bWVudCBpcyBkZXByZWNhdGVkLCBjb25zaWRlciB1c2luZyB0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgaW5zdGVhZCcpO1xuICAgICAgY29uZmlnID0ge1xuICAgICAgICB2aWRlbzogY29uZmlnXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobW9kZWwubGFuZ3VhZ2UpIHtcbiAgICAgIGNvbmZpZy5sYW5ndWFnZSA9IG1vZGVsLmxhbmd1YWdlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0TW9kZWwobW9kZWwpLnRoZW4oKG1vZGVsT2JqKSA9PiB7XG4gICAgICAgIG1vZGVsT2JqLnByZWRpY3QoaW5wdXRzLCBjb25maWcpXG4gICAgICAgICAgLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyB0cmFpbiBvbiBhIG1vZGVsIGFuZCBjcmVhdGVzIGEgbmV3IG1vZGVsIHZlcnNpb24gZ2l2ZW4gbW9kZWwgaW5mb1xuICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9ICAgICAgICAgICAgbW9kZWwgICAgICAgSWYgc3RyaW5nLCBpdCBpcyBhc3N1bWVkIHRvIGJlIG1vZGVsIGlkLiBPdGhlcndpc2UsIGlmIG9iamVjdCBpcyBnaXZlbiwgaXQgY2FuIGhhdmUgYW55IG9mIHRoZSBmb2xsb3dpbmcga2V5czpcbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgbW9kZWwuaWQgICAgICAgICAgTW9kZWwgaWRcbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgbW9kZWwubmFtZSAgICAgICAgTW9kZWwgbmFtZVxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICBtb2RlbC52ZXJzaW9uICAgICBNb2RlbCB2ZXJzaW9uXG4gICAqICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgIG1vZGVsLnR5cGUgICAgICAgIFRoaXMgY2FuIGJlIFwiY29uY2VwdFwiLCBcImNvbG9yXCIsIFwiZW1iZWRcIiwgXCJmYWNlZGV0ZWN0XCIsIFwiY2x1c3RlclwiIG9yIFwiYmx1clwiXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICBzeW5jICAgICAgICBJZiB0cnVlLCB0aGlzIHJldHVybnMgYWZ0ZXIgbW9kZWwgaGFzIGNvbXBsZXRlbHkgdHJhaW5lZC4gSWYgZmFsc2UsIHRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBkZWZhdWx0IGFwaSByZXNwb25zZS5cbiAgICogQHJldHVybiB7UHJvbWlzZShNb2RlbCwgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhIE1vZGVsIGluc3RhbmNlIG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIHRyYWluKG1vZGVsLCBzeW5jID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0TW9kZWwobW9kZWwpLnRoZW4oKG1vZGVsKSA9PiB7XG4gICAgICAgIG1vZGVsLnRyYWluKHN5bmMpXG4gICAgICAgICAgLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9ICAgICAgICAgICAgbW9kZWwgICAgICAgSWYgc3RyaW5nLCBpdCBpcyBhc3N1bWVkIHRvIGJlIG1vZGVsIGlkLiBPdGhlcndpc2UsIGlmIG9iamVjdCBpcyBnaXZlbiwgaXQgY2FuIGhhdmUgYW55IG9mIHRoZSBmb2xsb3dpbmcga2V5czpcbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgbW9kZWwuaWQgICAgICAgICAgTW9kZWwgaWRcbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgbW9kZWwubmFtZSAgICAgICAgTW9kZWwgbmFtZVxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICBtb2RlbC52ZXJzaW9uICAgICBNb2RlbCB2ZXJzaW9uXG4gICAqICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgIG1vZGVsLnR5cGUgICAgICAgIFRoaXMgY2FuIGJlIFwiY29uY2VwdFwiLCBcImNvbG9yXCIsIFwiZW1iZWRcIiwgXCJmYWNlZGV0ZWN0XCIsIFwiY2x1c3RlclwiIG9yIFwiYmx1clwiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBBIHN0cmluZyBwb2ludGluZyB0byBhbiBpbWFnZSByZXNvdXJjZS4gQSBzdHJpbmcgbXVzdCBiZSBhIHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIEEgY29uZmlndXJhdGlvbiBvYmplY3QgY29uc2lzdGluZyBvZiB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIGtleXNcbiAgICogICBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmlkIFRoZSBpZCBvZiB0aGUgZmVlZGJhY2sgcmVxdWVzdFxuICAgKiAgIEBwYXJhbSB7b2JqZWN0fSBjb25maWcuZGF0YSBUaGUgZmVlZGJhY2sgZGF0YSB0byBiZSBzZW50XG4gICAqICAgQHBhcmFtIHtvYmplY3R9IGNvbmZpZy5pbmZvIE1ldGEgZGF0YSByZWxhdGVkIHRvIHRoZSBmZWVkYmFjayByZXF1ZXN0XG4gICAqL1xuICBmZWVkYmFjayhtb2RlbCwgaW5wdXQsIGNvbmZpZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXRNb2RlbChtb2RlbClcbiAgICAgICAgLnRoZW4obW9kZWwgPT4ge1xuICAgICAgICAgIHJldHVybiBtb2RlbC5mZWVkYmFjayhpbnB1dCwgY29uZmlnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZCA9PiByZXNvbHZlKGQpKVxuICAgICAgICAuY2F0Y2goZSA9PiByZWplY3QoZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBtb2RlbCBzcGVjaWZpZWQgYnkgaXRzIGlkXG4gICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gICAgICAgICAgICBtb2RlbCAgICAgICBJZiBzdHJpbmcsIGl0IGlzIGFzc3VtZWQgdG8gYmUgbW9kZWwgaWQuIE90aGVyd2lzZSwgaWYgb2JqZWN0IGlzIGdpdmVuLCBpdCBjYW4gaGF2ZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBrZXlzOlxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICBtb2RlbC5pZCAgICAgICAgICBNb2RlbCBpZFxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICBtb2RlbC5uYW1lICAgICAgICBNb2RlbCBuYW1lXG4gICAqICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgIG1vZGVsLnZlcnNpb24gICAgIE1vZGVsIHZlcnNpb25cbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgbW9kZWwudHlwZSAgICAgICAgVGhpcyBjYW4gYmUgXCJjb25jZXB0XCIsIFwiY29sb3JcIiwgXCJlbWJlZFwiLCBcImZhY2VkZXRlY3RcIiwgXCJjbHVzdGVyXCIgb3IgXCJibHVyXCJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgICB2ZXJzaW9uSWQgICBUaGUgbW9kZWwncyBpZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlKHJlc3BvbnNlLCBlcnJvcil9IEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIHRoZSBBUEkgcmVzcG9uc2Ugb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgZ2V0VmVyc2lvbihtb2RlbCwgdmVyc2lvbklkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaW5pdE1vZGVsKG1vZGVsKS50aGVuKChtb2RlbCkgPT4ge1xuICAgICAgICBtb2RlbC5nZXRWZXJzaW9uKHZlcnNpb25JZClcbiAgICAgICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpXG4gICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHZlcnNpb25zIG9mIHRoZSBtb2RlbFxuICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9ICAgICAgICAgICAgbW9kZWwgICAgICAgSWYgc3RyaW5nLCBpdCBpcyBhc3N1bWVkIHRvIGJlIG1vZGVsIGlkLiBPdGhlcndpc2UsIGlmIG9iamVjdCBpcyBnaXZlbiwgaXQgY2FuIGhhdmUgYW55IG9mIHRoZSBmb2xsb3dpbmcga2V5czpcbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgbW9kZWwuaWQgICAgICAgICAgTW9kZWwgaWRcbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgbW9kZWwubmFtZSAgICAgICAgTW9kZWwgbmFtZVxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICBtb2RlbC52ZXJzaW9uICAgICBNb2RlbCB2ZXJzaW9uXG4gICAqICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgIG1vZGVsLnR5cGUgICAgICAgIFRoaXMgY2FuIGJlIFwiY29uY2VwdFwiLCBcImNvbG9yXCIsIFwiZW1iZWRcIiwgXCJmYWNlZGV0ZWN0XCIsIFwiY2x1c3RlclwiIG9yIFwiYmx1clwiXG4gICAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICAgICAgICAgICAgICBvcHRpb25zICAgICBPYmplY3Qgd2l0aCBrZXlzIGV4cGxhaW5lZCBiZWxvdzogKG9wdGlvbmFsKVxuICAgKiAgIEBwYXJhbSB7bnVtYmVyfSAgICAgICAgICAgICAgICAgICBvcHRpb25zLnBhZ2UgICAgICAgIFRoZSBwYWdlIG51bWJlciAob3B0aW9uYWwsIGRlZmF1bHQ6IDEpXG4gICAqICAgQHBhcmFtIHtudW1iZXJ9ICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucGVyUGFnZSAgICAgTnVtYmVyIG9mIGltYWdlcyB0byByZXR1cm4gcGVyIHBhZ2UgKG9wdGlvbmFsLCBkZWZhdWx0OiAyMClcbiAgICogQHJldHVybiB7UHJvbWlzZShyZXNwb25zZSwgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCB0aGUgQVBJIHJlc3BvbnNlIG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIGdldFZlcnNpb25zKG1vZGVsLCBvcHRpb25zID0ge3BhZ2U6IDEsIHBlclBhZ2U6IDIwfSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXRNb2RlbChtb2RlbCkudGhlbigobW9kZWwpID0+IHtcbiAgICAgICAgbW9kZWwuZ2V0VmVyc2lvbnMoKVxuICAgICAgICAgIC50aGVuKHJlc29sdmUsIHJlamVjdClcbiAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgdGhlIG1vZGVsJ3Mgb3V0cHV0IGluZm9cbiAgICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSAgICAgICAgICAgIG1vZGVsICAgICAgIElmIHN0cmluZywgaXQgaXMgYXNzdW1lZCB0byBiZSBtb2RlbCBpZC4gT3RoZXJ3aXNlLCBpZiBvYmplY3QgaXMgZ2l2ZW4sIGl0IGNhbiBoYXZlIGFueSBvZiB0aGUgZm9sbG93aW5nIGtleXM6XG4gICAqICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgIG1vZGVsLmlkICAgICAgICAgIE1vZGVsIGlkXG4gICAqICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgIG1vZGVsLm5hbWUgICAgICAgIE1vZGVsIG5hbWVcbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgbW9kZWwudmVyc2lvbiAgICAgTW9kZWwgdmVyc2lvblxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICBtb2RlbC50eXBlICAgICAgICBUaGlzIGNhbiBiZSBcImNvbmNlcHRcIiwgXCJjb2xvclwiLCBcImVtYmVkXCIsIFwiZmFjZWRldGVjdFwiLCBcImNsdXN0ZXJcIiBvciBcImJsdXJcIlxuICAgKiBAcmV0dXJuIHtQcm9taXNlKE1vZGVsLCBlcnJvcil9IEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgTW9kZWwgaW5zdGFuY2Ugb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgZ2V0T3V0cHV0SW5mbyhtb2RlbCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXRNb2RlbChtb2RlbCkudGhlbigobW9kZWwpID0+IHtcbiAgICAgICAgbW9kZWwuZ2V0T3V0cHV0SW5mbygpXG4gICAgICAgICAgLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB0aGUgbW9kZWxzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgb3B0aW9ucyAgICAgT2JqZWN0IHdpdGgga2V5cyBleHBsYWluZWQgYmVsb3c6IChvcHRpb25hbClcbiAgICogICBAcGFyYW0ge051bWJlcn0gICAgIG9wdGlvbnMucGFnZSAgICAgICAgVGhlIHBhZ2UgbnVtYmVyIChvcHRpb25hbCwgZGVmYXVsdDogMSlcbiAgICogICBAcGFyYW0ge051bWJlcn0gICAgIG9wdGlvbnMucGVyUGFnZSAgICAgTnVtYmVyIG9mIGltYWdlcyB0byByZXR1cm4gcGVyIHBhZ2UgKG9wdGlvbmFsLCBkZWZhdWx0OiAyMClcbiAgICogQHJldHVybiB7UHJvbWlzZShNb2RlbHMsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYW4gaW5zdGFuY2Ugb2YgTW9kZWxzIG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIGxpc3Qob3B0aW9ucyA9IHtwYWdlOiAxLCBwZXJQYWdlOiAyMH0pIHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5fY29uZmlnLmFwaUVuZHBvaW50fSR7TU9ERUxTX1BBVEh9YDtcbiAgICByZXR1cm4gd3JhcFRva2VuKHRoaXMuX2NvbmZpZywgKGhlYWRlcnMpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCh1cmwsIHtcbiAgICAgICAgICBwYXJhbXM6IHsncGVyX3BhZ2UnOiBvcHRpb25zLnBlclBhZ2UsICdwYWdlJzogb3B0aW9ucy5wYWdlfSxcbiAgICAgICAgICBoZWFkZXJzXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKGlzU3VjY2VzcyhyZXNwb25zZSkpIHtcbiAgICAgICAgICAgIHJlc29sdmUobmV3IE1vZGVscyh0aGlzLl9jb25maWcsIHJlc3BvbnNlLmRhdGEubW9kZWxzKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbW9kZWxcbiAgICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSAgICAgICAgICAgICAgICAgIG1vZGVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIHN0cmluZywgaXQgaXMgYXNzdW1lZCB0byBiZSB0aGUgbW9kZWwgaWQuIE90aGVyd2lzZSwgaWYgb2JqZWN0IGlzIGdpdmVuLCBpdCBjYW4gaGF2ZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBrZXlzOlxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5pZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RlbCBpZFxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RlbCBuYW1lXG4gICAqIEBwYXJhbSB7b2JqZWN0W118c3RyaW5nW118Q29uY2VwdHNbXX0gICBjb25jZXB0c0RhdGEgICAgICAgICAgICAgICAgICAgICAgICAgICBMaXN0IG9mIG9iamVjdHMgd2l0aCBpZHMsIGNvbmNlcHQgaWQgc3RyaW5ncyBvciBhbiBpbnN0YW5jZSBvZiBDb25jZXB0cyBvYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdCB3aXRoIGtleXMgZXhwbGFpbmVkIGJlbG93OlxuICAgKiAgIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmNvbmNlcHRzTXV0dWFsbHlFeGNsdXNpdmUgICAgICBEbyB5b3UgZXhwZWN0IHRvIHNlZSBtb3JlIHRoYW4gb25lIG9mIHRoZSBjb25jZXB0cyBpbiB0aGlzIG1vZGVsIGluIHRoZSBTQU1FIGltYWdlPyBTZXQgdG8gZmFsc2UgKGRlZmF1bHQpIGlmIHNvLiBPdGhlcndpc2UsIHNldCB0byB0cnVlLlxuICAgKiAgIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmNsb3NlZEVudmlyb25tZW50ICAgICAgICAgICAgICBEbyB5b3UgZXhwZWN0IHRvIHJ1biB0aGUgdHJhaW5lZCBtb2RlbCBvbiBpbWFnZXMgdGhhdCBkbyBub3QgY29udGFpbiBBTlkgb2YgdGhlIGNvbmNlcHRzIGluIHRoZSBtb2RlbD8gU2V0IHRvIGZhbHNlIChkZWZhdWx0KSBpZiBzby4gT3RoZXJ3aXNlLCBzZXQgdG8gdHJ1ZS5cbiAgICogQHJldHVybiB7UHJvbWlzZShNb2RlbCwgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhbiBpbnN0YW5jZSBvZiBNb2RlbCBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBjcmVhdGUobW9kZWwsIGNvbmNlcHRzRGF0YSA9IFtdLCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgY29uY2VwdHMgPSBjb25jZXB0c0RhdGEgaW5zdGFuY2VvZiBDb25jZXB0cyA/XG4gICAgICBjb25jZXB0c0RhdGEudG9PYmplY3QoJ2lkJykgOlxuICAgICAgY29uY2VwdHNEYXRhLm1hcCgoY29uY2VwdCkgPT4ge1xuICAgICAgICBsZXQgdmFsID0gY29uY2VwdDtcbiAgICAgICAgaWYgKGNoZWNrVHlwZSgvU3RyaW5nLywgY29uY2VwdCkpIHtcbiAgICAgICAgICB2YWwgPSB7J2lkJzogY29uY2VwdH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH0pO1xuICAgIGxldCBtb2RlbE9iaiA9IG1vZGVsO1xuICAgIGlmIChjaGVja1R5cGUoL1N0cmluZy8sIG1vZGVsKSkge1xuICAgICAgbW9kZWxPYmogPSB7aWQ6IG1vZGVsLCBuYW1lOiBtb2RlbH07XG4gICAgfVxuICAgIGlmIChtb2RlbE9iai5pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBFUlJPUlMucGFyYW1zUmVxdWlyZWQoJ01vZGVsIElEJyk7XG4gICAgfVxuICAgIGxldCB1cmwgPSBgJHt0aGlzLl9jb25maWcuYXBpRW5kcG9pbnR9JHtNT0RFTFNfUEFUSH1gO1xuICAgIGxldCBkYXRhID0ge21vZGVsOiBtb2RlbE9ian07XG4gICAgZGF0YVsnbW9kZWwnXVsnb3V0cHV0X2luZm8nXSA9IHtcbiAgICAgICdkYXRhJzoge1xuICAgICAgICBjb25jZXB0c1xuICAgICAgfSxcbiAgICAgICdvdXRwdXRfY29uZmlnJzoge1xuICAgICAgICAnY29uY2VwdHNfbXV0dWFsbHlfZXhjbHVzaXZlJzogISFvcHRpb25zLmNvbmNlcHRzTXV0dWFsbHlFeGNsdXNpdmUsXG4gICAgICAgICdjbG9zZWRfZW52aXJvbm1lbnQnOiAhIW9wdGlvbnMuY2xvc2VkRW52aXJvbm1lbnRcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHdyYXBUb2tlbih0aGlzLl9jb25maWcsIChoZWFkZXJzKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KHVybCwgZGF0YSwge2hlYWRlcnN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChpc1N1Y2Nlc3MocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICByZXNvbHZlKG5ldyBNb2RlbCh0aGlzLl9jb25maWcsIHJlc3BvbnNlLmRhdGEubW9kZWwpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbW9kZWwgc3BlY2lmaWVkIGJ5IElEXG4gICAqIEBwYXJhbSB7U3RyaW5nfSAgICAgaWQgICAgICAgICAgVGhlIG1vZGVsJ3MgaWRcbiAgICogQHJldHVybiB7UHJvbWlzZShNb2RlbCwgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhbiBpbnN0YW5jZSBvZiBNb2RlbCBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBnZXQoaWQpIHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5fY29uZmlnLmFwaUVuZHBvaW50fSR7cmVwbGFjZVZhcnMoTU9ERUxfUEFUSCwgW2lkXSl9YDtcbiAgICByZXR1cm4gd3JhcFRva2VuKHRoaXMuX2NvbmZpZywgKGhlYWRlcnMpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCh1cmwsIHtoZWFkZXJzfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoaXNTdWNjZXNzKHJlc3BvbnNlKSkge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgTW9kZWwodGhpcy5fY29uZmlnLCByZXNwb25zZS5kYXRhLm1vZGVsKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGEgbW9kZWwncyBvciBhIGxpc3Qgb2YgbW9kZWxzJyBvdXRwdXQgY29uZmlnIG9yIGNvbmNlcHRzXG4gICAqIEBwYXJhbSB7b2JqZWN0fG9iamVjdFtdfSAgICAgIG1vZGVscyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbiBiZSBhIHNpbmdsZSBtb2RlbCBvYmplY3Qgb3IgbGlzdCBvZiBtb2RlbCBvYmplY3RzIHdpdGggdGhlIGZvbGxvd2luZyBhdHRyczpcbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICBtb2RlbHMuaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgaWQgb2YgdGhlIG1vZGVsIHRvIGFwcGx5IGNoYW5nZXMgdG8gKFJlcXVpcmVkKVxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgIG1vZGVscy5uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBuZXcgbmFtZSBvZiB0aGUgbW9kZWwgdG8gdXBkYXRlIHdpdGhcbiAgICogICBAcGFyYW0ge2Jvb2xlYW59ICAgICAgICAgICAgICBtb2RlbHMuY29uY2VwdHNNdXR1YWxseUV4Y2x1c2l2ZSAgICAgICAgICAgICBEbyB5b3UgZXhwZWN0IHRvIHNlZSBtb3JlIHRoYW4gb25lIG9mIHRoZSBjb25jZXB0cyBpbiB0aGlzIG1vZGVsIGluIHRoZSBTQU1FIGltYWdlPyBTZXQgdG8gZmFsc2UgKGRlZmF1bHQpIGlmIHNvLiBPdGhlcndpc2UsIHNldCB0byB0cnVlLlxuICAgKiAgIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICAgICAgIG1vZGVscy5jbG9zZWRFbnZpcm9ubWVudCAgICAgICAgICAgICAgICAgICAgIERvIHlvdSBleHBlY3QgdG8gcnVuIHRoZSB0cmFpbmVkIG1vZGVsIG9uIGltYWdlcyB0aGF0IGRvIG5vdCBjb250YWluIEFOWSBvZiB0aGUgY29uY2VwdHMgaW4gdGhlIG1vZGVsPyBTZXQgdG8gZmFsc2UgKGRlZmF1bHQpIGlmIHNvLiBPdGhlcndpc2UsIHNldCB0byB0cnVlLlxuICAgKiAgIEBwYXJhbSB7b2JqZWN0W119ICAgICAgICAgICAgIG1vZGVscy5jb25jZXB0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuIGFycmF5IG9mIGNvbmNlcHQgb2JqZWN0cyBvciBzdHJpbmdcbiAgICogICAgIEBwYXJhbSB7b2JqZWN0fHN0cmluZ30gICAgICAgIG1vZGVscy5jb25jZXB0c1tdLmNvbmNlcHQgICAgICAgICAgICAgICAgICAgIElmIHN0cmluZyBpcyBnaXZlbiwgdGhpcyBpcyBpbnRlcnByZXRlZCBhcyBjb25jZXB0IGlkLiBPdGhlcndpc2UsIGlmIG9iamVjdCBpcyBnaXZlbiwgY2xpZW50IGV4cGVjdHMgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzXG4gICAqICAgICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICBtb2RlbHMuY29uY2VwdHNbXS5jb25jZXB0LmlkICAgICAgICAgICAgICAgICAgIFRoZSBpZCBvZiB0aGUgY29uY2VwdCB0byBhdHRhY2ggdG8gdGhlIG1vZGVsXG4gICAqICAgQHBhcmFtIHtvYmplY3RbXX0gICAgICAgICAgICAgbW9kZWxzLmFjdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGFjdGlvbiB0byBwZXJmb3JtIG9uIHRoZSBnaXZlbiBjb25jZXB0cy4gUG9zc2libGUgdmFsdWVzIGFyZSAnbWVyZ2UnLCAncmVtb3ZlJywgb3IgJ292ZXJ3cml0ZScuIERlZmF1bHQ6ICdtZXJnZSdcbiAgICogQHJldHVybiB7UHJvbWlzZShNb2RlbHMsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYW4gaW5zdGFuY2Ugb2YgTW9kZWxzIG9yIHJlamVjdGVkIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIHVwZGF0ZShtb2RlbHMpIHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5fY29uZmlnLmFwaUVuZHBvaW50fSR7TU9ERUxTX1BBVEh9YDtcbiAgICBsZXQgbW9kZWxzTGlzdCA9IEFycmF5LmlzQXJyYXkobW9kZWxzKSA/IG1vZGVscyA6IFttb2RlbHNdO1xuICAgIGxldCBkYXRhID0ge21vZGVsczogbW9kZWxzTGlzdC5tYXAoZm9ybWF0TW9kZWwpfTtcbiAgICBkYXRhWydhY3Rpb24nXSA9IG1vZGVscy5hY3Rpb24gfHwgJ21lcmdlJztcbiAgICByZXR1cm4gd3JhcFRva2VuKHRoaXMuX2NvbmZpZywgKGhlYWRlcnMpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zLnBhdGNoKHVybCwgZGF0YSwge2hlYWRlcnN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChpc1N1Y2Nlc3MocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICByZXNvbHZlKG5ldyBNb2RlbHModGhpcy5fY29uZmlnLCByZXNwb25zZS5kYXRhLm1vZGVscykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBtb2RlbCBieSBtZXJnaW5nIGNvbmNlcHRzXG4gICAqIEBwYXJhbSB7b2JqZWN0fG9iamVjdFtdfSAgICAgIG1vZGVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuIGJlIGEgc2luZ2xlIG1vZGVsIG9iamVjdCBvciBsaXN0IG9mIG1vZGVsIG9iamVjdHMgd2l0aCB0aGUgZm9sbG93aW5nIGF0dHJzOlxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgIG1vZGVsLmlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGlkIG9mIHRoZSBtb2RlbCB0byBhcHBseSBjaGFuZ2VzIHRvIChSZXF1aXJlZClcbiAgICogICBAcGFyYW0ge29iamVjdFtdfSAgICAgICAgICAgICBtb2RlbC5jb25jZXB0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuIGFycmF5IG9mIGNvbmNlcHQgb2JqZWN0cyBvciBzdHJpbmdcbiAgICogICAgIEBwYXJhbSB7b2JqZWN0fHN0cmluZ30gICAgICAgIG1vZGVsLmNvbmNlcHRzW10uY29uY2VwdCAgICAgICAgICAgICAgICAgICAgSWYgc3RyaW5nIGlzIGdpdmVuLCB0aGlzIGlzIGludGVycHJldGVkIGFzIGNvbmNlcHQgaWQuIE90aGVyd2lzZSwgaWYgb2JqZWN0IGlzIGdpdmVuLCBjbGllbnQgZXhwZWN0cyB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXNcbiAgICogICAgICAgQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgIG1vZGVsLmNvbmNlcHRzW10uY29uY2VwdC5pZCAgICAgICAgICAgICAgICAgICBUaGUgaWQgb2YgdGhlIGNvbmNlcHQgdG8gYXR0YWNoIHRvIHRoZSBtb2RlbFxuICAgKi9cbiAgbWVyZ2VDb25jZXB0cyhtb2RlbCA9IHt9KSB7XG4gICAgbW9kZWwuYWN0aW9uID0gJ21lcmdlJztcbiAgICByZXR1cm4gdGhpcy51cGRhdGUobW9kZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBtb2RlbCBieSByZW1vdmluZyBjb25jZXB0c1xuICAgKiBAcGFyYW0ge29iamVjdHxvYmplY3RbXX0gICAgICBtb2RlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbiBiZSBhIHNpbmdsZSBtb2RlbCBvYmplY3Qgb3IgbGlzdCBvZiBtb2RlbCBvYmplY3RzIHdpdGggdGhlIGZvbGxvd2luZyBhdHRyczpcbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICBtb2RlbC5pZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBpZCBvZiB0aGUgbW9kZWwgdG8gYXBwbHkgY2hhbmdlcyB0byAoUmVxdWlyZWQpXG4gICAqICAgQHBhcmFtIHtvYmplY3RbXX0gICAgICAgICAgICAgbW9kZWwuY29uY2VwdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbiBhcnJheSBvZiBjb25jZXB0IG9iamVjdHMgb3Igc3RyaW5nXG4gICAqICAgICBAcGFyYW0ge29iamVjdHxzdHJpbmd9ICAgICAgICBtb2RlbC5jb25jZXB0c1tdLmNvbmNlcHQgICAgICAgICAgICAgICAgICAgIElmIHN0cmluZyBpcyBnaXZlbiwgdGhpcyBpcyBpbnRlcnByZXRlZCBhcyBjb25jZXB0IGlkLiBPdGhlcndpc2UsIGlmIG9iamVjdCBpcyBnaXZlbiwgY2xpZW50IGV4cGVjdHMgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzXG4gICAqICAgICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICBtb2RlbC5jb25jZXB0c1tdLmNvbmNlcHQuaWQgICAgICAgICAgICAgICAgICAgVGhlIGlkIG9mIHRoZSBjb25jZXB0IHRvIGF0dGFjaCB0byB0aGUgbW9kZWxcbiAgICovXG4gIGRlbGV0ZUNvbmNlcHRzKG1vZGVsID0ge30pIHtcbiAgICBtb2RlbC5hY3Rpb24gPSAncmVtb3ZlJztcbiAgICByZXR1cm4gdGhpcy51cGRhdGUobW9kZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBtb2RlbCBieSBvdmVyd3JpdGluZyBjb25jZXB0c1xuICAgKiBAcGFyYW0ge29iamVjdHxvYmplY3RbXX0gICAgICBtb2RlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbiBiZSBhIHNpbmdsZSBtb2RlbCBvYmplY3Qgb3IgbGlzdCBvZiBtb2RlbCBvYmplY3RzIHdpdGggdGhlIGZvbGxvd2luZyBhdHRyczpcbiAgICogICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICBtb2RlbC5pZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBpZCBvZiB0aGUgbW9kZWwgdG8gYXBwbHkgY2hhbmdlcyB0byAoUmVxdWlyZWQpXG4gICAqICAgQHBhcmFtIHtvYmplY3RbXX0gICAgICAgICAgICAgbW9kZWwuY29uY2VwdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbiBhcnJheSBvZiBjb25jZXB0IG9iamVjdHMgb3Igc3RyaW5nXG4gICAqICAgICBAcGFyYW0ge29iamVjdHxzdHJpbmd9ICAgICAgICBtb2RlbC5jb25jZXB0c1tdLmNvbmNlcHQgICAgICAgICAgICAgICAgICAgIElmIHN0cmluZyBpcyBnaXZlbiwgdGhpcyBpcyBpbnRlcnByZXRlZCBhcyBjb25jZXB0IGlkLiBPdGhlcndpc2UsIGlmIG9iamVjdCBpcyBnaXZlbiwgY2xpZW50IGV4cGVjdHMgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzXG4gICAqICAgICAgIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICBtb2RlbC5jb25jZXB0c1tdLmNvbmNlcHQuaWQgICAgICAgICAgICAgICAgICAgVGhlIGlkIG9mIHRoZSBjb25jZXB0IHRvIGF0dGFjaCB0byB0aGUgbW9kZWxcbiAgICovXG4gIG92ZXJ3cml0ZUNvbmNlcHRzKG1vZGVsID0ge30pIHtcbiAgICBtb2RlbC5hY3Rpb24gPSAnb3ZlcndyaXRlJztcbiAgICByZXR1cm4gdGhpcy51cGRhdGUobW9kZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIG1vZGVscyAoaWYgbm8gaWRzIGFuZCB2ZXJzaW9uSWQgZ2l2ZW4pIG9yIGEgbW9kZWwgKGlmIGdpdmVuIGlkKSBvciBhIG1vZGVsIHZlcnNpb24gKGlmIGdpdmVuIGlkIGFuZCB2ZXJpb24gaWQpXG4gICAqIEBwYXJhbSB7U3RyaW5nfFN0cmluZ1tdfSAgICAgIGlkcyAgICAgICAgIENhbiBiZSBhIHNpbmdsZSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgdGhlIG1vZGVsIGlkc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gICAgICAgICAgICAgICB2ZXJzaW9uSWQgICBUaGUgbW9kZWwncyB2ZXJzaW9uIGlkXG4gICAqIEByZXR1cm4ge1Byb21pc2UocmVzcG9uc2UsIGVycm9yKX0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggdGhlIEFQSSByZXNwb25zZSBvciByZWplY3RlZCB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBkZWxldGUoaWRzLCB2ZXJzaW9uSWQgPSBudWxsKSB7XG4gICAgbGV0IHJlcXVlc3QsIHVybCwgZGF0YTtcbiAgICBsZXQgaWQgPSBpZHM7XG5cbiAgICBpZiAoY2hlY2tUeXBlKC9TdHJpbmcvLCBpZHMpIHx8IChjaGVja1R5cGUoL0FycmF5LywgaWRzKSAmJiBpZHMubGVuZ3RoID09PSAxICkpIHtcbiAgICAgIGlmICh2ZXJzaW9uSWQpIHtcbiAgICAgICAgdXJsID0gYCR7dGhpcy5fY29uZmlnLmFwaUVuZHBvaW50fSR7cmVwbGFjZVZhcnMoTU9ERUxfVkVSU0lPTl9QQVRILCBbaWQsIHZlcnNpb25JZF0pfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmwgPSBgJHt0aGlzLl9jb25maWcuYXBpRW5kcG9pbnR9JHtyZXBsYWNlVmFycyhNT0RFTF9QQVRILCBbaWRdKX1gO1xuICAgICAgfVxuICAgICAgcmVxdWVzdCA9IHdyYXBUb2tlbih0aGlzLl9jb25maWcsIChoZWFkZXJzKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgYXhpb3MuZGVsZXRlKHVybCwge2hlYWRlcnN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBjbG9uZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIGRhdGEucmF3RGF0YSA9IGNsb25lKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWlkcyAmJiAhdmVyc2lvbklkKSB7XG4gICAgICAgIHVybCA9IGAke3RoaXMuX2NvbmZpZy5hcGlFbmRwb2ludH0ke01PREVMU19QQVRIfWA7XG4gICAgICAgIGRhdGEgPSB7J2RlbGV0ZV9hbGwnOiB0cnVlfTtcbiAgICAgIH0gZWxzZSBpZiAoIXZlcnNpb25JZCAmJiBpZHMubGVuZ3RoID4gMSkge1xuICAgICAgICB1cmwgPSBgJHt0aGlzLl9jb25maWcuYXBpRW5kcG9pbnR9JHtNT0RFTFNfUEFUSH1gO1xuICAgICAgICBkYXRhID0ge2lkc307XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFUlJPUlMuSU5WQUxJRF9ERUxFVEVfQVJHUztcbiAgICAgIH1cbiAgICAgIHJlcXVlc3QgPSB3cmFwVG9rZW4odGhpcy5fY29uZmlnLCAoaGVhZGVycykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyc1xuICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGNsb25lKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgZGF0YS5yYXdEYXRhID0gY2xvbmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGZvciBtb2RlbHMgYnkgbmFtZSBvciB0eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSAgICAgbmFtZSAgICAgICAgVGhlIG1vZGVsIG5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9ICAgICB0eXBlICAgICAgICBUaGlzIGNhbiBiZSBcImNvbmNlcHRcIiwgXCJjb2xvclwiLCBcImVtYmVkXCIsIFwiZmFjZWRldGVjdFwiLCBcImNsdXN0ZXJcIiBvciBcImJsdXJcIlxuICAgKiBAcmV0dXJuIHtQcm9taXNlKG1vZGVscywgZXJyb3IpfSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhbiBpbnN0YW5jZSBvZiBNb2RlbHMgb3IgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgc2VhcmNoKG5hbWUsIHR5cGUgPSBudWxsKSB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuX2NvbmZpZy5hcGlFbmRwb2ludH0ke01PREVMX1NFQVJDSF9QQVRIfWA7XG4gICAgcmV0dXJuIHdyYXBUb2tlbih0aGlzLl9jb25maWcsIChoZWFkZXJzKSA9PiB7XG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAnbW9kZWxfcXVlcnknOiB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICB0eXBlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KHVybCwgcGFyYW1zLCB7aGVhZGVyc30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKGlzU3VjY2VzcyhyZXNwb25zZSkpIHtcbiAgICAgICAgICAgIHJlc29sdmUobmV3IE1vZGVscyh0aGlzLl9jb25maWcsIHJlc3BvbnNlLmRhdGEubW9kZWxzKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb2RlbHM7XG4iXX0=
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/Models.js","/")
},{"./Concepts":39,"./Model":42,"./constants":45,"./helpers":47,"./utils":48,"axios":4,"buffer":23,"pBGvAp":27,"promise":28}],44:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');

var _require = require('./constants'),
    API = _require.API,
    replaceVars = _require.replaceVars;

var WORKFLOW_PATH = API.WORKFLOW_PATH,
    CREATE_WORKFLOW_PATH = API.CREATE_WORKFLOW_PATH;

var _require2 = require('./utils'),
    wrapToken = _require2.wrapToken,
    formatInput = _require2.formatInput;

var _require3 = require('./helpers'),
    checkType = _require3.checkType;

/**
 * class representing a workflow
 * @class
 */


var Workflow = function () {
  function Workflow(_config) {
    var rawData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Workflow);

    this._config = _config;
    this.rawData = rawData;
  }

  _createClass(Workflow, [{
    key: 'create',
    value: function create(name, config) {
      var url = '' + this._config.apiEndpoint + CREATE_WORKFLOW_PATH;
      var modelId = config.modelId;
      var modelVersionId = config.modelVersionId;
      var body = {
        workflows: [{
          id: name,
          nodes: [{
            id: 'concepts',
            model: {
              id: modelId,
              model_version: {
                id: modelVersionId
              }
            }
          }]
        }]
      };

      return wrapToken(this._config, function (headers) {
        return new Promise(function (resolve, reject) {
          axios.post(url, body, {
            headers: headers
          }).then(function (response) {
            var workflowId = response.data.workflows[0].id;
            resolve(workflowId);
          }, reject);
        });
      });
    }

    /**
     * Returns workflow output according to inputs
     * @param {string}                   workflowId    Workflow id
     * @param {object[]|object|string}   inputs    An array of objects/object/string pointing to an image resource. A string can either be a url or base64 image bytes. Object keys explained below:
     *    @param {object}                  inputs[].image     Object with keys explained below:
     *       @param {string}                 inputs[].image.(url|base64)  Can be a publicly accessibly url or base64 string representing image bytes (required)
     */

  }, {
    key: 'predict',
    value: function predict(workflowId, inputs) {
      var url = '' + this._config.apiEndpoint + replaceVars(WORKFLOW_PATH, [workflowId]);
      if (checkType(/(Object|String)/, inputs)) {
        inputs = [inputs];
      }
      return wrapToken(this._config, function (headers) {
        var params = {
          inputs: inputs.map(formatInput)
        };
        return new Promise(function (resolve, reject) {
          axios.post(url, params, {
            headers: headers
          }).then(function (response) {
            var data = response.data;
            resolve(data);
          }, reject);
        });
      });
    }
  }]);

  return Workflow;
}();

module.exports = Workflow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIldvcmtmbG93LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIkFQSSIsInJlcGxhY2VWYXJzIiwiV09SS0ZMT1dfUEFUSCIsIkNSRUFURV9XT1JLRkxPV19QQVRIIiwid3JhcFRva2VuIiwiZm9ybWF0SW5wdXQiLCJjaGVja1R5cGUiLCJXb3JrZmxvdyIsIl9jb25maWciLCJyYXdEYXRhIiwibmFtZSIsImNvbmZpZyIsInVybCIsImFwaUVuZHBvaW50IiwibW9kZWxJZCIsIm1vZGVsVmVyc2lvbklkIiwiYm9keSIsIndvcmtmbG93cyIsImlkIiwibm9kZXMiLCJtb2RlbCIsIm1vZGVsX3ZlcnNpb24iLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwb3N0IiwidGhlbiIsIndvcmtmbG93SWQiLCJyZXNwb25zZSIsImRhdGEiLCJpbnB1dHMiLCJwYXJhbXMiLCJtYXAiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJQSxRQUFRQyxRQUFRLE9BQVIsQ0FBWjs7ZUFDeUJBLFFBQVEsYUFBUixDO0lBQXBCQyxHLFlBQUFBLEc7SUFBS0MsVyxZQUFBQSxXOztJQUNMQyxhLEdBQXVDRixHLENBQXZDRSxhO0lBQWVDLG9CLEdBQXdCSCxHLENBQXhCRyxvQjs7Z0JBQ1dKLFFBQVEsU0FBUixDO0lBQTFCSyxTLGFBQUFBLFM7SUFBV0MsVyxhQUFBQSxXOztnQkFDRU4sUUFBUSxXQUFSLEM7SUFBYk8sUyxhQUFBQSxTOztBQUVMOzs7Ozs7SUFJTUMsUTtBQUNKLG9CQUFZQyxPQUFaLEVBQWlDO0FBQUEsUUFBWkMsT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUMvQixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OzsyQkFFTUMsSSxFQUFNQyxNLEVBQVE7QUFDbkIsVUFBTUMsV0FBUyxLQUFLSixPQUFMLENBQWFLLFdBQXRCLEdBQW9DVixvQkFBMUM7QUFDQSxVQUFNVyxVQUFVSCxPQUFPRyxPQUF2QjtBQUNBLFVBQU1DLGlCQUFpQkosT0FBT0ksY0FBOUI7QUFDQSxVQUFNQyxPQUFPO0FBQ1hDLG1CQUFXLENBQUM7QUFDVkMsY0FBSVIsSUFETTtBQUVWUyxpQkFBTyxDQUFDO0FBQ05ELGdCQUFJLFVBREU7QUFFTkUsbUJBQU87QUFDTEYsa0JBQUlKLE9BREM7QUFFTE8sNkJBQWU7QUFDYkgsb0JBQUlIO0FBRFM7QUFGVjtBQUZELFdBQUQ7QUFGRyxTQUFEO0FBREEsT0FBYjs7QUFlQSxhQUFPWCxVQUFVLEtBQUtJLE9BQWYsRUFBd0IsVUFBQ2MsT0FBRCxFQUFhO0FBQzFDLGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QzNCLGdCQUFNNEIsSUFBTixDQUFXZCxHQUFYLEVBQWdCSSxJQUFoQixFQUFzQjtBQUNwQk07QUFEb0IsV0FBdEIsRUFFR0ssSUFGSCxDQUVRLG9CQUFZO0FBQ2xCLGdCQUFNQyxhQUFhQyxTQUFTQyxJQUFULENBQWNiLFNBQWQsQ0FBd0IsQ0FBeEIsRUFBMkJDLEVBQTlDO0FBQ0FNLG9CQUFRSSxVQUFSO0FBQ0QsV0FMRCxFQUtHSCxNQUxIO0FBTUQsU0FQTSxDQUFQO0FBUUQsT0FUTSxDQUFQO0FBVUQ7O0FBRUQ7Ozs7Ozs7Ozs7NEJBT1FHLFUsRUFBWUcsTSxFQUFRO0FBQzFCLFVBQU1uQixXQUFTLEtBQUtKLE9BQUwsQ0FBYUssV0FBdEIsR0FBb0NaLFlBQVlDLGFBQVosRUFBMkIsQ0FBQzBCLFVBQUQsQ0FBM0IsQ0FBMUM7QUFDQSxVQUFJdEIsVUFBVSxpQkFBVixFQUE2QnlCLE1BQTdCLENBQUosRUFBMEM7QUFDeENBLGlCQUFTLENBQUNBLE1BQUQsQ0FBVDtBQUNEO0FBQ0QsYUFBTzNCLFVBQVUsS0FBS0ksT0FBZixFQUF3QixVQUFDYyxPQUFELEVBQWE7QUFDMUMsWUFBTVUsU0FBUztBQUNiRCxrQkFBUUEsT0FBT0UsR0FBUCxDQUFXNUIsV0FBWDtBQURLLFNBQWY7QUFHQSxlQUFPLElBQUlrQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDM0IsZ0JBQU00QixJQUFOLENBQVdkLEdBQVgsRUFBZ0JvQixNQUFoQixFQUF3QjtBQUN0QlY7QUFEc0IsV0FBeEIsRUFFR0ssSUFGSCxDQUVRLFVBQUNFLFFBQUQsRUFBYztBQUNwQixnQkFBTUMsT0FBT0QsU0FBU0MsSUFBdEI7QUFDQU4sb0JBQVFNLElBQVI7QUFDRCxXQUxELEVBS0dMLE1BTEg7QUFNRCxTQVBNLENBQVA7QUFRRCxPQVpNLENBQVA7QUFhRDs7Ozs7O0FBR0hTLE9BQU9DLE9BQVAsR0FBaUI1QixRQUFqQiIsImZpbGUiOiJXb3JrZmxvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5sZXQge0FQSSwgcmVwbGFjZVZhcnN9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmxldCB7V09SS0ZMT1dfUEFUSCwgQ1JFQVRFX1dPUktGTE9XX1BBVEh9ID0gQVBJO1xubGV0IHt3cmFwVG9rZW4sIGZvcm1hdElucHV0fSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbmxldCB7Y2hlY2tUeXBlfSA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuXG4vKipcbiAqIGNsYXNzIHJlcHJlc2VudGluZyBhIHdvcmtmbG93XG4gKiBAY2xhc3NcbiAqL1xuY2xhc3MgV29ya2Zsb3cge1xuICBjb25zdHJ1Y3RvcihfY29uZmlnLCByYXdEYXRhPVtdKSB7XG4gICAgdGhpcy5fY29uZmlnID0gX2NvbmZpZztcbiAgICB0aGlzLnJhd0RhdGEgPSByYXdEYXRhO1xuICB9XG5cbiAgY3JlYXRlKG5hbWUsIGNvbmZpZykge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuX2NvbmZpZy5hcGlFbmRwb2ludH0ke0NSRUFURV9XT1JLRkxPV19QQVRIfWA7XG4gICAgY29uc3QgbW9kZWxJZCA9IGNvbmZpZy5tb2RlbElkO1xuICAgIGNvbnN0IG1vZGVsVmVyc2lvbklkID0gY29uZmlnLm1vZGVsVmVyc2lvbklkO1xuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICB3b3JrZmxvd3M6IFt7XG4gICAgICAgIGlkOiBuYW1lLFxuICAgICAgICBub2RlczogW3tcbiAgICAgICAgICBpZDogJ2NvbmNlcHRzJyxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgaWQ6IG1vZGVsSWQsXG4gICAgICAgICAgICBtb2RlbF92ZXJzaW9uOiB7XG4gICAgICAgICAgICAgIGlkOiBtb2RlbFZlcnNpb25JZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH1dXG4gICAgfTtcblxuICAgIHJldHVybiB3cmFwVG9rZW4odGhpcy5fY29uZmlnLCAoaGVhZGVycykgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGJvZHksIHtcbiAgICAgICAgICBoZWFkZXJzXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGNvbnN0IHdvcmtmbG93SWQgPSByZXNwb25zZS5kYXRhLndvcmtmbG93c1swXS5pZDtcbiAgICAgICAgICByZXNvbHZlKHdvcmtmbG93SWQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3b3JrZmxvdyBvdXRwdXQgYWNjb3JkaW5nIHRvIGlucHV0c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgd29ya2Zsb3dJZCAgICBXb3JrZmxvdyBpZFxuICAgKiBAcGFyYW0ge29iamVjdFtdfG9iamVjdHxzdHJpbmd9ICAgaW5wdXRzICAgIEFuIGFycmF5IG9mIG9iamVjdHMvb2JqZWN0L3N0cmluZyBwb2ludGluZyB0byBhbiBpbWFnZSByZXNvdXJjZS4gQSBzdHJpbmcgY2FuIGVpdGhlciBiZSBhIHVybCBvciBiYXNlNjQgaW1hZ2UgYnl0ZXMuIE9iamVjdCBrZXlzIGV4cGxhaW5lZCBiZWxvdzpcbiAgICogICAgQHBhcmFtIHtvYmplY3R9ICAgICAgICAgICAgICAgICAgaW5wdXRzW10uaW1hZ2UgICAgIE9iamVjdCB3aXRoIGtleXMgZXhwbGFpbmVkIGJlbG93OlxuICAgKiAgICAgICBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgIGlucHV0c1tdLmltYWdlLih1cmx8YmFzZTY0KSAgQ2FuIGJlIGEgcHVibGljbHkgYWNjZXNzaWJseSB1cmwgb3IgYmFzZTY0IHN0cmluZyByZXByZXNlbnRpbmcgaW1hZ2UgYnl0ZXMgKHJlcXVpcmVkKVxuICAgKi9cbiAgcHJlZGljdCh3b3JrZmxvd0lkLCBpbnB1dHMpIHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLl9jb25maWcuYXBpRW5kcG9pbnR9JHtyZXBsYWNlVmFycyhXT1JLRkxPV19QQVRILCBbd29ya2Zsb3dJZF0pfWA7XG4gICAgaWYgKGNoZWNrVHlwZSgvKE9iamVjdHxTdHJpbmcpLywgaW5wdXRzKSkge1xuICAgICAgaW5wdXRzID0gW2lucHV0c107XG4gICAgfVxuICAgIHJldHVybiB3cmFwVG9rZW4odGhpcy5fY29uZmlnLCAoaGVhZGVycykgPT4ge1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBpbnB1dHM6IGlucHV0cy5tYXAoZm9ybWF0SW5wdXQpXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIHBhcmFtcywge1xuICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXb3JrZmxvdztcbiJdfQ==
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/Workflow.js","/")
},{"./constants":45,"./helpers":47,"./utils":48,"axios":4,"buffer":23,"pBGvAp":27}],45:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var MAX_BATCH_SIZE = 128;
var GEO_LIMIT_TYPES = ['withinMiles', 'withinKilometers', 'withinRadians', 'withinDegrees'];
var URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
var SYNC_TIMEOUT = 60000;
var MODEL_QUEUED_FOR_TRAINING = '21103';
var MODEL_TRAINING = '21101';
var POLLTIME = 2000;

module.exports = {
  API: {
    TOKEN_PATH: '/v2/token',
    MODELS_PATH: '/v2/models',
    MODEL_PATH: '/v2/models/$0',
    MODEL_VERSIONS_PATH: '/v2/models/$0/versions',
    MODEL_VERSION_PATH: '/v2/models/$0/versions/$1',
    MODEL_PATCH_PATH: '/v2/models/$0/output_info/data/concepts',
    MODEL_OUTPUT_PATH: '/v2/models/$0/output_info',
    MODEL_SEARCH_PATH: '/v2/models/searches',
    MODEL_FEEDBACK_PATH: '/v2/models/$0/feedback',
    MODEL_VERSION_FEEDBACK_PATH: '/v2/models/$0/versions/$1/feedback',
    PREDICT_PATH: '/v2/models/$0/outputs',
    VERSION_PREDICT_PATH: '/v2/models/$0/versions/$1/outputs',
    CONCEPTS_PATH: '/v2/concepts',
    CONCEPT_PATH: '/v2/concepts/$0',
    CONCEPT_SEARCH_PATH: '/v2/concepts/searches',
    MODEL_INPUTS_PATH: '/v2/models/$0/inputs',
    MODEL_VERSION_INPUTS_PATH: '/v2/models/$0/versions/$1/inputs',
    INPUTS_PATH: '/v2/inputs',
    INPUT_PATH: '/v2/inputs/$0',
    INPUTS_STATUS_PATH: '/v2/inputs/status',
    SEARCH_PATH: '/v2/searches',
    WORKFLOW_PATH: '/v2/workflows/$0/results',
    CREATE_WORKFLOW_PATH: '/v2/workflows'
  },
  ERRORS: {
    paramsRequired: function paramsRequired(param) {
      var paramList = Array.isArray(param) ? param : [param];
      return new Error('The following ' + (paramList.length > 1 ? 'params are' : 'param is') + ' required: ' + paramList.join(', '));
    },
    MAX_INPUTS: new Error('Number of inputs passed exceeded max of ' + MAX_BATCH_SIZE),
    INVALID_GEOLIMIT_TYPE: new Error('Incorrect geo_limit type. Value must be any of the following: ' + GEO_LIMIT_TYPES.join(', ')),
    INVALID_DELETE_ARGS: new Error('Wrong arguments passed. You can only delete all models (provide no arguments), delete select models (provide list of ids),\n    delete a single model (providing a single id) or delete a model version (provide a single id and version id)')
  },
  STATUS: {
    MODEL_QUEUED_FOR_TRAINING: MODEL_QUEUED_FOR_TRAINING,
    MODEL_TRAINING: MODEL_TRAINING
  },
  // var replacement must be given in order
  replaceVars: function replaceVars(path) {
    var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var newPath = path;
    vars.forEach(function (val, index) {
      if (index === 0) {
        val = encodeURIComponent(val);
      }
      newPath = newPath.replace(new RegExp('\\$' + index, 'g'), val);
    });
    return newPath;
  },
  GEO_LIMIT_TYPES: GEO_LIMIT_TYPES,
  MAX_BATCH_SIZE: MAX_BATCH_SIZE,
  URL_REGEX: URL_REGEX,
  SYNC_TIMEOUT: SYNC_TIMEOUT,
  POLLTIME: POLLTIME
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJNQVhfQkFUQ0hfU0laRSIsIkdFT19MSU1JVF9UWVBFUyIsIlVSTF9SRUdFWCIsIlNZTkNfVElNRU9VVCIsIk1PREVMX1FVRVVFRF9GT1JfVFJBSU5JTkciLCJNT0RFTF9UUkFJTklORyIsIlBPTExUSU1FIiwibW9kdWxlIiwiZXhwb3J0cyIsIkFQSSIsIlRPS0VOX1BBVEgiLCJNT0RFTFNfUEFUSCIsIk1PREVMX1BBVEgiLCJNT0RFTF9WRVJTSU9OU19QQVRIIiwiTU9ERUxfVkVSU0lPTl9QQVRIIiwiTU9ERUxfUEFUQ0hfUEFUSCIsIk1PREVMX09VVFBVVF9QQVRIIiwiTU9ERUxfU0VBUkNIX1BBVEgiLCJNT0RFTF9GRUVEQkFDS19QQVRIIiwiTU9ERUxfVkVSU0lPTl9GRUVEQkFDS19QQVRIIiwiUFJFRElDVF9QQVRIIiwiVkVSU0lPTl9QUkVESUNUX1BBVEgiLCJDT05DRVBUU19QQVRIIiwiQ09OQ0VQVF9QQVRIIiwiQ09OQ0VQVF9TRUFSQ0hfUEFUSCIsIk1PREVMX0lOUFVUU19QQVRIIiwiTU9ERUxfVkVSU0lPTl9JTlBVVFNfUEFUSCIsIklOUFVUU19QQVRIIiwiSU5QVVRfUEFUSCIsIklOUFVUU19TVEFUVVNfUEFUSCIsIlNFQVJDSF9QQVRIIiwiV09SS0ZMT1dfUEFUSCIsIkNSRUFURV9XT1JLRkxPV19QQVRIIiwiRVJST1JTIiwicGFyYW1zUmVxdWlyZWQiLCJwYXJhbSIsInBhcmFtTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwibGVuZ3RoIiwiam9pbiIsIk1BWF9JTlBVVFMiLCJJTlZBTElEX0dFT0xJTUlUX1RZUEUiLCJJTlZBTElEX0RFTEVURV9BUkdTIiwiU1RBVFVTIiwicmVwbGFjZVZhcnMiLCJwYXRoIiwidmFycyIsIm5ld1BhdGgiLCJmb3JFYWNoIiwidmFsIiwiaW5kZXgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiUmVnRXhwIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLGlCQUFpQixHQUF2QjtBQUNBLElBQU1DLGtCQUFrQixDQUFDLGFBQUQsRUFBZ0Isa0JBQWhCLEVBQW9DLGVBQXBDLEVBQXFELGVBQXJELENBQXhCO0FBQ0EsSUFBTUMsWUFBWSw4RkFBbEI7QUFDQSxJQUFNQyxlQUFlLEtBQXJCO0FBQ0EsSUFBTUMsNEJBQTRCLE9BQWxDO0FBQ0EsSUFBTUMsaUJBQWlCLE9BQXZCO0FBQ0EsSUFBTUMsV0FBVyxJQUFqQjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxPQUFLO0FBQ0hDLGdCQUFZLFdBRFQ7QUFFSEMsaUJBQWEsWUFGVjtBQUdIQyxnQkFBWSxlQUhUO0FBSUhDLHlCQUFxQix3QkFKbEI7QUFLSEMsd0JBQW9CLDJCQUxqQjtBQU1IQyxzQkFBa0IseUNBTmY7QUFPSEMsdUJBQW1CLDJCQVBoQjtBQVFIQyx1QkFBbUIscUJBUmhCO0FBU0hDLHlCQUFxQix3QkFUbEI7QUFVSEMsaUNBQTZCLG9DQVYxQjtBQVdIQyxrQkFBYyx1QkFYWDtBQVlIQywwQkFBc0IsbUNBWm5CO0FBYUhDLG1CQUFlLGNBYlo7QUFjSEMsa0JBQWMsaUJBZFg7QUFlSEMseUJBQXFCLHVCQWZsQjtBQWdCSEMsdUJBQW1CLHNCQWhCaEI7QUFpQkhDLCtCQUEyQixrQ0FqQnhCO0FBa0JIQyxpQkFBYSxZQWxCVjtBQW1CSEMsZ0JBQVksZUFuQlQ7QUFvQkhDLHdCQUFvQixtQkFwQmpCO0FBcUJIQyxpQkFBYSxjQXJCVjtBQXNCSEMsbUJBQWUsMEJBdEJaO0FBdUJIQywwQkFBc0I7QUF2Qm5CLEdBRFU7QUEwQmZDLFVBQVE7QUFDTkMsb0JBQWdCLHdCQUFDQyxLQUFELEVBQVc7QUFDekIsVUFBSUMsWUFBWUMsTUFBTUMsT0FBTixDQUFjSCxLQUFkLElBQXVCQSxLQUF2QixHQUErQixDQUFDQSxLQUFELENBQS9DO0FBQ0EsYUFBTyxJQUFJSSxLQUFKLHFCQUEyQkgsVUFBVUksTUFBVixHQUFtQixDQUFuQixHQUF1QixZQUF2QixHQUFzQyxVQUFqRSxvQkFBeUZKLFVBQVVLLElBQVYsQ0FBZSxJQUFmLENBQXpGLENBQVA7QUFDRCxLQUpLO0FBS05DLGdCQUFZLElBQUlILEtBQUosOENBQXFEdkMsY0FBckQsQ0FMTjtBQU1OMkMsMkJBQXVCLElBQUlKLEtBQUosb0VBQTJFdEMsZ0JBQWdCd0MsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBM0UsQ0FOakI7QUFPTkcseUJBQXFCLElBQUlMLEtBQUo7QUFQZixHQTFCTztBQW9DZk0sVUFBUTtBQUNOekMsd0RBRE07QUFFTkM7QUFGTSxHQXBDTztBQXdDZjtBQUNBeUMsZUFBYSxxQkFBQ0MsSUFBRCxFQUFxQjtBQUFBLFFBQWRDLElBQWMsdUVBQVAsRUFBTzs7QUFDaEMsUUFBSUMsVUFBVUYsSUFBZDtBQUNBQyxTQUFLRSxPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQzNCLFVBQUlBLFVBQVUsQ0FBZCxFQUFpQjtBQUNmRCxjQUFNRSxtQkFBbUJGLEdBQW5CLENBQU47QUFDRDtBQUNERixnQkFBVUEsUUFBUUssT0FBUixDQUFnQixJQUFJQyxNQUFKLFNBQWlCSCxLQUFqQixFQUEwQixHQUExQixDQUFoQixFQUFnREQsR0FBaEQsQ0FBVjtBQUNELEtBTEQ7QUFNQSxXQUFPRixPQUFQO0FBQ0QsR0FsRGM7QUFtRGZoRCxrQ0FuRGU7QUFvRGZELGdDQXBEZTtBQXFEZkUsc0JBckRlO0FBc0RmQyw0QkF0RGU7QUF1RGZHO0FBdkRlLENBQWpCIiwiZmlsZSI6ImNvbnN0YW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1BWF9CQVRDSF9TSVpFID0gMTI4O1xuY29uc3QgR0VPX0xJTUlUX1RZUEVTID0gWyd3aXRoaW5NaWxlcycsICd3aXRoaW5LaWxvbWV0ZXJzJywgJ3dpdGhpblJhZGlhbnMnLCAnd2l0aGluRGVncmVlcyddO1xuY29uc3QgVVJMX1JFR0VYID0gL2h0dHBzPzpcXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolX1xcKy5+Iz8mLy89XSopL2k7XG5jb25zdCBTWU5DX1RJTUVPVVQgPSA2MDAwMDtcbmNvbnN0IE1PREVMX1FVRVVFRF9GT1JfVFJBSU5JTkcgPSAnMjExMDMnO1xuY29uc3QgTU9ERUxfVFJBSU5JTkcgPSAnMjExMDEnO1xuY29uc3QgUE9MTFRJTUUgPSAyMDAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQVBJOiB7XG4gICAgVE9LRU5fUEFUSDogJy92Mi90b2tlbicsXG4gICAgTU9ERUxTX1BBVEg6ICcvdjIvbW9kZWxzJyxcbiAgICBNT0RFTF9QQVRIOiAnL3YyL21vZGVscy8kMCcsXG4gICAgTU9ERUxfVkVSU0lPTlNfUEFUSDogJy92Mi9tb2RlbHMvJDAvdmVyc2lvbnMnLFxuICAgIE1PREVMX1ZFUlNJT05fUEFUSDogJy92Mi9tb2RlbHMvJDAvdmVyc2lvbnMvJDEnLFxuICAgIE1PREVMX1BBVENIX1BBVEg6ICcvdjIvbW9kZWxzLyQwL291dHB1dF9pbmZvL2RhdGEvY29uY2VwdHMnLFxuICAgIE1PREVMX09VVFBVVF9QQVRIOiAnL3YyL21vZGVscy8kMC9vdXRwdXRfaW5mbycsXG4gICAgTU9ERUxfU0VBUkNIX1BBVEg6ICcvdjIvbW9kZWxzL3NlYXJjaGVzJyxcbiAgICBNT0RFTF9GRUVEQkFDS19QQVRIOiAnL3YyL21vZGVscy8kMC9mZWVkYmFjaycsXG4gICAgTU9ERUxfVkVSU0lPTl9GRUVEQkFDS19QQVRIOiAnL3YyL21vZGVscy8kMC92ZXJzaW9ucy8kMS9mZWVkYmFjaycsXG4gICAgUFJFRElDVF9QQVRIOiAnL3YyL21vZGVscy8kMC9vdXRwdXRzJyxcbiAgICBWRVJTSU9OX1BSRURJQ1RfUEFUSDogJy92Mi9tb2RlbHMvJDAvdmVyc2lvbnMvJDEvb3V0cHV0cycsXG4gICAgQ09OQ0VQVFNfUEFUSDogJy92Mi9jb25jZXB0cycsXG4gICAgQ09OQ0VQVF9QQVRIOiAnL3YyL2NvbmNlcHRzLyQwJyxcbiAgICBDT05DRVBUX1NFQVJDSF9QQVRIOiAnL3YyL2NvbmNlcHRzL3NlYXJjaGVzJyxcbiAgICBNT0RFTF9JTlBVVFNfUEFUSDogJy92Mi9tb2RlbHMvJDAvaW5wdXRzJyxcbiAgICBNT0RFTF9WRVJTSU9OX0lOUFVUU19QQVRIOiAnL3YyL21vZGVscy8kMC92ZXJzaW9ucy8kMS9pbnB1dHMnLFxuICAgIElOUFVUU19QQVRIOiAnL3YyL2lucHV0cycsXG4gICAgSU5QVVRfUEFUSDogJy92Mi9pbnB1dHMvJDAnLFxuICAgIElOUFVUU19TVEFUVVNfUEFUSDogJy92Mi9pbnB1dHMvc3RhdHVzJyxcbiAgICBTRUFSQ0hfUEFUSDogJy92Mi9zZWFyY2hlcycsXG4gICAgV09SS0ZMT1dfUEFUSDogJy92Mi93b3JrZmxvd3MvJDAvcmVzdWx0cycsXG4gICAgQ1JFQVRFX1dPUktGTE9XX1BBVEg6ICcvdjIvd29ya2Zsb3dzJ1xuICB9LFxuICBFUlJPUlM6IHtcbiAgICBwYXJhbXNSZXF1aXJlZDogKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgcGFyYW1MaXN0ID0gQXJyYXkuaXNBcnJheShwYXJhbSkgPyBwYXJhbSA6IFtwYXJhbV07XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBUaGUgZm9sbG93aW5nICR7cGFyYW1MaXN0Lmxlbmd0aCA+IDEgPyAncGFyYW1zIGFyZScgOiAncGFyYW0gaXMnfSByZXF1aXJlZDogJHtwYXJhbUxpc3Quam9pbignLCAnKX1gKTtcbiAgICB9LFxuICAgIE1BWF9JTlBVVFM6IG5ldyBFcnJvcihgTnVtYmVyIG9mIGlucHV0cyBwYXNzZWQgZXhjZWVkZWQgbWF4IG9mICR7TUFYX0JBVENIX1NJWkV9YCksXG4gICAgSU5WQUxJRF9HRU9MSU1JVF9UWVBFOiBuZXcgRXJyb3IoYEluY29ycmVjdCBnZW9fbGltaXQgdHlwZS4gVmFsdWUgbXVzdCBiZSBhbnkgb2YgdGhlIGZvbGxvd2luZzogJHtHRU9fTElNSVRfVFlQRVMuam9pbignLCAnKX1gKSxcbiAgICBJTlZBTElEX0RFTEVURV9BUkdTOiBuZXcgRXJyb3IoYFdyb25nIGFyZ3VtZW50cyBwYXNzZWQuIFlvdSBjYW4gb25seSBkZWxldGUgYWxsIG1vZGVscyAocHJvdmlkZSBubyBhcmd1bWVudHMpLCBkZWxldGUgc2VsZWN0IG1vZGVscyAocHJvdmlkZSBsaXN0IG9mIGlkcyksXG4gICAgZGVsZXRlIGEgc2luZ2xlIG1vZGVsIChwcm92aWRpbmcgYSBzaW5nbGUgaWQpIG9yIGRlbGV0ZSBhIG1vZGVsIHZlcnNpb24gKHByb3ZpZGUgYSBzaW5nbGUgaWQgYW5kIHZlcnNpb24gaWQpYClcbiAgfSxcbiAgU1RBVFVTOiB7XG4gICAgTU9ERUxfUVVFVUVEX0ZPUl9UUkFJTklORyxcbiAgICBNT0RFTF9UUkFJTklOR1xuICB9LFxuICAvLyB2YXIgcmVwbGFjZW1lbnQgbXVzdCBiZSBnaXZlbiBpbiBvcmRlclxuICByZXBsYWNlVmFyczogKHBhdGgsIHZhcnMgPSBbXSkgPT4ge1xuICAgIGxldCBuZXdQYXRoID0gcGF0aDtcbiAgICB2YXJzLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB2YWwgPSBlbmNvZGVVUklDb21wb25lbnQodmFsKTtcbiAgICAgIH1cbiAgICAgIG5ld1BhdGggPSBuZXdQYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCQke2luZGV4fWAsICdnJyksIHZhbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1BhdGg7XG4gIH0sXG4gIEdFT19MSU1JVF9UWVBFUyxcbiAgTUFYX0JBVENIX1NJWkUsXG4gIFVSTF9SRUdFWCxcbiAgU1lOQ19USU1FT1VULFxuICBQT0xMVElNRVxufTtcbiJdfQ==
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/constants.js","/")
},{"buffer":23,"pBGvAp":27}],46:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var App = require('./App');

var _require = require('./../package.json'),
    version = _require.version;

module.exports = global.Clarifai = {
  version: version,
  App: App,
  GENERAL_MODEL: 'aaa03c23b3724a16a56b629203edc62c',
  FOOD_MODEL: 'bd367be194cf45149e75f01d59f77ba7',
  TRAVEL_MODEL: 'eee28c313d69466f836ab83287a54ed9',
  NSFW_MODEL: 'e9576d86d2004ed1a38ba0cf39ecb4b1',
  WEDDINGS_MODEL: 'c386b7a870114f4a87477c0824499348',
  WEDDING_MODEL: 'c386b7a870114f4a87477c0824499348',
  COLOR_MODEL: 'eeed0b6733a644cea07cf4c60f87ebb7',
  CLUSTER_MODEL: 'cccbe437d6e54e2bb911c6aa292fb072',
  FACE_DETECT_MODEL: 'a403429f2ddf4b49b307e318f00e528b',
  FOCUS_MODEL: 'c2cf7cecd8a6427da375b9f35fcd2381',
  LOGO_MODEL: 'c443119bf2ed4da98487520d01a0b1e3',
  DEMOGRAPHICS_MODEL: 'c0c0ac362b03416da06ab3fa36fb58e3',
  GENERAL_EMBED_MODEL: 'bbb5f41425b8468d9b7a554ff10f8581',
  FACE_EMBED_MODEL: 'd02b4508df58432fbb84e800597b8959',
  APPAREL_MODEL: 'e0be3b9d6a454f0493ac3a30784001ff'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMjIzZTA1ZDQuanMiXSwibmFtZXMiOlsiQXBwIiwicmVxdWlyZSIsInZlcnNpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2xvYmFsIiwiQ2xhcmlmYWkiLCJHRU5FUkFMX01PREVMIiwiRk9PRF9NT0RFTCIsIlRSQVZFTF9NT0RFTCIsIk5TRldfTU9ERUwiLCJXRURESU5HU19NT0RFTCIsIldFRERJTkdfTU9ERUwiLCJDT0xPUl9NT0RFTCIsIkNMVVNURVJfTU9ERUwiLCJGQUNFX0RFVEVDVF9NT0RFTCIsIkZPQ1VTX01PREVMIiwiTE9HT19NT0RFTCIsIkRFTU9HUkFQSElDU19NT0RFTCIsIkdFTkVSQUxfRU1CRURfTU9ERUwiLCJGQUNFX0VNQkVEX01PREVMIiwiQVBQQVJFTF9NT0RFTCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxNQUFNQyxRQUFRLE9BQVIsQ0FBVjs7ZUFDZ0JBLFFBQVEsbUJBQVIsQztJQUFYQyxPLFlBQUFBLE87O0FBRUxDLE9BQU9DLE9BQVAsR0FBaUJDLE9BQU9DLFFBQVAsR0FBa0I7QUFDakNKLGtCQURpQztBQUVqQ0YsVUFGaUM7QUFHakNPLGlCQUFlLGtDQUhrQjtBQUlqQ0MsY0FBWSxrQ0FKcUI7QUFLakNDLGdCQUFjLGtDQUxtQjtBQU1qQ0MsY0FBWSxrQ0FOcUI7QUFPakNDLGtCQUFnQixrQ0FQaUI7QUFRakNDLGlCQUFlLGtDQVJrQjtBQVNqQ0MsZUFBYSxrQ0FUb0I7QUFVakNDLGlCQUFlLGtDQVZrQjtBQVdqQ0MscUJBQW1CLGtDQVhjO0FBWWpDQyxlQUFhLGtDQVpvQjtBQWFqQ0MsY0FBWSxrQ0FicUI7QUFjakNDLHNCQUFvQixrQ0FkYTtBQWVqQ0MsdUJBQXFCLGtDQWZZO0FBZ0JqQ0Msb0JBQWtCLGtDQWhCZTtBQWlCakNDLGlCQUFlO0FBakJrQixDQUFuQyIsImZpbGUiOiJmYWtlXzIyM2UwNWQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEFwcCA9IHJlcXVpcmUoJy4vQXBwJyk7XG5sZXQge3ZlcnNpb259ID0gcmVxdWlyZSgnLi8uLi9wYWNrYWdlLmpzb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuQ2xhcmlmYWkgPSB7XG4gIHZlcnNpb24sXG4gIEFwcCxcbiAgR0VORVJBTF9NT0RFTDogJ2FhYTAzYzIzYjM3MjRhMTZhNTZiNjI5MjAzZWRjNjJjJyxcbiAgRk9PRF9NT0RFTDogJ2JkMzY3YmUxOTRjZjQ1MTQ5ZTc1ZjAxZDU5Zjc3YmE3JyxcbiAgVFJBVkVMX01PREVMOiAnZWVlMjhjMzEzZDY5NDY2ZjgzNmFiODMyODdhNTRlZDknLFxuICBOU0ZXX01PREVMOiAnZTk1NzZkODZkMjAwNGVkMWEzOGJhMGNmMzllY2I0YjEnLFxuICBXRURESU5HU19NT0RFTDogJ2MzODZiN2E4NzAxMTRmNGE4NzQ3N2MwODI0NDk5MzQ4JyxcbiAgV0VERElOR19NT0RFTDogJ2MzODZiN2E4NzAxMTRmNGE4NzQ3N2MwODI0NDk5MzQ4JyxcbiAgQ09MT1JfTU9ERUw6ICdlZWVkMGI2NzMzYTY0NGNlYTA3Y2Y0YzYwZjg3ZWJiNycsXG4gIENMVVNURVJfTU9ERUw6ICdjY2NiZTQzN2Q2ZTU0ZTJiYjkxMWM2YWEyOTJmYjA3MicsXG4gIEZBQ0VfREVURUNUX01PREVMOiAnYTQwMzQyOWYyZGRmNGI0OWIzMDdlMzE4ZjAwZTUyOGInLFxuICBGT0NVU19NT0RFTDogJ2MyY2Y3Y2VjZDhhNjQyN2RhMzc1YjlmMzVmY2QyMzgxJyxcbiAgTE9HT19NT0RFTDogJ2M0NDMxMTliZjJlZDRkYTk4NDg3NTIwZDAxYTBiMWUzJyxcbiAgREVNT0dSQVBISUNTX01PREVMOiAnYzBjMGFjMzYyYjAzNDE2ZGEwNmFiM2ZhMzZmYjU4ZTMnLFxuICBHRU5FUkFMX0VNQkVEX01PREVMOiAnYmJiNWY0MTQyNWI4NDY4ZDliN2E1NTRmZjEwZjg1ODEnLFxuICBGQUNFX0VNQkVEX01PREVMOiAnZDAyYjQ1MDhkZjU4NDMyZmJiODRlODAwNTk3Yjg5NTknLFxuICBBUFBBUkVMX01PREVMOiAnZTBiZTNiOWQ2YTQ1NGYwNDkzYWMzYTMwNzg0MDAxZmYnXG59O1xuIl19
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_223e05d4.js","/")
},{"./../package.json":36,"./App":37,"buffer":23,"pBGvAp":27}],47:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var SUCCESS_CODES = [200, 201];

module.exports = {
  isSuccess: function isSuccess(response) {
    return SUCCESS_CODES.indexOf(response.status) > -1;
  },
  deleteEmpty: function deleteEmpty(obj) {
    var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    Object.keys(obj).forEach(function (key) {
      if (obj[key] === null || obj[key] === undefined || strict === true && (obj[key] === '' || obj[key].length === 0 || Object.keys(obj[key]).length === 0)) {
        delete obj[key];
      }
    });
  },
  clone: function clone(obj) {
    var keys = Object.keys(obj);
    var copy = {};
    keys.forEach(function (k) {
      copy[k] = obj[k];
    });
    return copy;
  },
  checkType: function checkType(regex, val) {
    if (regex instanceof RegExp === false) {
      regex = new RegExp(regex);
    }
    return regex.test(Object.prototype.toString.call(val));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMuanMiXSwibmFtZXMiOlsiU1VDQ0VTU19DT0RFUyIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc1N1Y2Nlc3MiLCJyZXNwb25zZSIsImluZGV4T2YiLCJzdGF0dXMiLCJkZWxldGVFbXB0eSIsIm9iaiIsInN0cmljdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiY2xvbmUiLCJjb3B5IiwiayIsImNoZWNrVHlwZSIsInJlZ2V4IiwidmFsIiwiUmVnRXhwIiwidGVzdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxnQkFBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUF0Qjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxhQUFXLG1CQUFDQyxRQUFELEVBQWM7QUFDdkIsV0FBT0osY0FBY0ssT0FBZCxDQUFzQkQsU0FBU0UsTUFBL0IsSUFBeUMsQ0FBQyxDQUFqRDtBQUNELEdBSGM7QUFJZkMsZUFBYSxxQkFBQ0MsR0FBRCxFQUF5QjtBQUFBLFFBQW5CQyxNQUFtQix1RUFBVixLQUFVOztBQUNwQ0MsV0FBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixVQUFDQyxHQUFELEVBQVM7QUFDaEMsVUFBSUwsSUFBSUssR0FBSixNQUFhLElBQWIsSUFDRkwsSUFBSUssR0FBSixNQUFhQyxTQURYLElBRUZMLFdBQVcsSUFBWCxLQUNBRCxJQUFJSyxHQUFKLE1BQWEsRUFBYixJQUNBTCxJQUFJSyxHQUFKLEVBQVNFLE1BQVQsS0FBb0IsQ0FEcEIsSUFFQUwsT0FBT0MsSUFBUCxDQUFZSCxJQUFJSyxHQUFKLENBQVosRUFBc0JFLE1BQXRCLEtBQWlDLENBSGpDLENBRkYsRUFLdUM7QUFDckMsZUFBT1AsSUFBSUssR0FBSixDQUFQO0FBQ0Q7QUFDRixLQVREO0FBVUQsR0FmYztBQWdCZkcsU0FBTyxlQUFDUixHQUFELEVBQVM7QUFDZCxRQUFJRyxPQUFPRCxPQUFPQyxJQUFQLENBQVlILEdBQVosQ0FBWDtBQUNBLFFBQUlTLE9BQU8sRUFBWDtBQUNBTixTQUFLQyxPQUFMLENBQWEsVUFBQ00sQ0FBRCxFQUFPO0FBQ2xCRCxXQUFLQyxDQUFMLElBQVVWLElBQUlVLENBQUosQ0FBVjtBQUNELEtBRkQ7QUFHQSxXQUFPRCxJQUFQO0FBQ0QsR0F2QmM7QUF3QmZFLGFBQVcsbUJBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUN6QixRQUFLRCxpQkFBaUJFLE1BQWxCLEtBQThCLEtBQWxDLEVBQXlDO0FBQ3ZDRixjQUFRLElBQUlFLE1BQUosQ0FBV0YsS0FBWCxDQUFSO0FBQ0Q7QUFDRCxXQUFPQSxNQUFNRyxJQUFOLENBQVdiLE9BQU9jLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkwsR0FBL0IsQ0FBWCxDQUFQO0FBQ0Q7QUE3QmMsQ0FBakIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNVQ0NFU1NfQ09ERVMgPSBbMjAwLCAyMDFdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNTdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICByZXR1cm4gU1VDQ0VTU19DT0RFUy5pbmRleE9mKHJlc3BvbnNlLnN0YXR1cykgPiAtMTtcbiAgfSxcbiAgZGVsZXRlRW1wdHk6IChvYmosIHN0cmljdCA9IGZhbHNlKSA9PiB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChvYmpba2V5XSA9PT0gbnVsbCB8fFxuICAgICAgICBvYmpba2V5XSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIHN0cmljdCA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgIG9ialtrZXldID09PSAnJyB8fFxuICAgICAgICBvYmpba2V5XS5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgT2JqZWN0LmtleXMob2JqW2tleV0pLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBjbG9uZTogKG9iaikgPT4ge1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBsZXQgY29weSA9IHt9O1xuICAgIGtleXMuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgY29weVtrXSA9IG9ialtrXTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29weTtcbiAgfSxcbiAgY2hlY2tUeXBlOiAocmVnZXgsIHZhbCkgPT4ge1xuICAgIGlmICgocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApID09PSBmYWxzZSkge1xuICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKHJlZ2V4KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkpO1xuICB9XG59O1xuIl19
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/helpers.js","/")
},{"buffer":23,"pBGvAp":27}],48:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Promise = require('promise');

var _require = require('./constants'),
    URL_REGEX = _require.URL_REGEX,
    GEO_LIMIT_TYPES = _require.GEO_LIMIT_TYPES,
    ERRORS = _require.ERRORS;

var _require2 = require('./helpers'),
    checkType = _require2.checkType,
    clone = _require2.clone;

var _require3 = require('./../package.json'),
    VERSION = _require3.version;

module.exports = {
  wrapToken: function wrapToken(_config, requestFn) {
    return new Promise(function (resolve, reject) {
      if (_config.apiKey) {
        var headers = {
          Authorization: 'Key ' + _config.apiKey,
          'X-Clarifai-Client': 'js:' + VERSION
        };
        return requestFn(headers).then(resolve, reject);
      }
      _config.token().then(function (token) {
        var headers = {
          Authorization: 'Bearer ' + token.accessToken,
          'X-Clarifai-Client': 'js:' + VERSION
        };
        requestFn(headers).then(resolve, reject);
      }, reject);
    });
  },
  formatModel: function formatModel() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var formatted = {};
    if (data.id === null || data.id === undefined) {
      throw ERRORS.paramsRequired('Model ID');
    }
    formatted.id = data.id;
    if (data.name) {
      formatted.name = data.name;
    }
    formatted.output_info = {};
    if (data.conceptsMutuallyExclusive !== undefined) {
      formatted.output_info.output_config = formatted.output_info.output_config || {};
      formatted.output_info.output_config.concepts_mutually_exclusive = !!data.conceptsMutuallyExclusive;
    }
    if (data.closedEnvironment !== undefined) {
      formatted.output_info.output_config = formatted.output_info.output_config || {};
      formatted.output_info.output_config.closed_environment = !!data.closedEnvironment;
    }
    if (data.concepts) {
      formatted.output_info.data = {
        concepts: data.concepts.map(module.exports.formatConcept)
      };
    }
    return formatted;
  },
  formatInput: function formatInput(data, includeImage) {
    var input = checkType(/String/, data) ? { url: data } : data;
    var formatted = {
      id: input.id || null,
      data: {}
    };
    if (input.concepts) {
      formatted.data.concepts = input.concepts;
    }
    if (input.metadata) {
      formatted.data.metadata = input.metadata;
    }
    if (input.geo) {
      formatted.data.geo = { geo_point: input.geo };
    }
    if (includeImage !== false) {
      formatted.data.image = {
        url: input.url,
        base64: input.base64,
        crop: input.crop
      };
      if (data.allowDuplicateUrl) {
        formatted.data.image.allow_duplicate_url = true;
      }
    }
    return formatted;
  },
  formatMediaPredict: function formatMediaPredict(data) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image';

    var media = data;
    if (checkType(/String/, data)) {
      if (URL_REGEX.test(media) === true) {
        media = {
          url: data
        };
      } else {
        media = {
          base64: data
        };
      }
    }
    return {
      data: _defineProperty({}, type, media)
    };
  },
  formatImagesSearch: function formatImagesSearch(image) {
    var imageQuery = void 0;
    var input = { input: { data: {} } };
    var formatted = [];
    if (checkType(/String/, image)) {
      imageQuery = { url: image };
    } else {
      imageQuery = image.url || image.base64 ? {
        image: {
          url: image.url,
          base64: image.base64,
          crop: image.crop
        }
      } : {};
    }

    input.input.data = imageQuery;
    if (image.id) {
      input.input.id = image.id;
      input.input.data = { image: {} };
    }
    if (image.metadata !== undefined) {
      input.input.data.metadata = image.metadata;
    }
    if (image.geo !== undefined) {
      if (checkType(/Array/, image.geo)) {
        input.input.data.geo = {
          geo_box: image.geo.map(function (p) {
            return { geo_point: p };
          })
        };
      } else if (checkType(/Object/, image.geo)) {
        if (GEO_LIMIT_TYPES.indexOf(image.geo.type) === -1) {
          throw ERRORS.INVALID_GEOLIMIT_TYPE;
        }
        input.input.data.geo = {
          geo_point: {
            latitude: image.geo.latitude,
            longitude: image.geo.longitude
          },
          geo_limit: {
            type: image.geo.type,
            value: image.geo.value
          }
        };
      }
    }
    if (image.type !== 'input' && input.input.data.image) {
      if (input.input.data.metadata || input.input.data.geo) {
        var dataCopy = { input: { data: clone(input.input.data) } };
        var imageCopy = { input: { data: clone(input.input.data) } };
        delete dataCopy.input.data.image;
        delete imageCopy.input.data.metadata;
        delete imageCopy.input.data.geo;
        input = [{ output: imageCopy }, dataCopy];
      } else {
        input = [{ output: input }];
      }
    }
    formatted = formatted.concat(input);
    return formatted;
  },
  formatConcept: function formatConcept(concept) {
    var formatted = concept;
    if (checkType(/String/, concept)) {
      formatted = {
        id: concept
      };
    }
    return formatted;
  },
  formatConceptsSearch: function formatConceptsSearch(query) {
    if (checkType(/String/, query)) {
      query = { id: query };
    }
    var v = {};
    var type = query.type === 'input' ? 'input' : 'output';
    delete query.type;
    v[type] = {
      data: {
        concepts: [query]
      }
    };
    return v;
  },
  formatObjectForSnakeCase: function formatObjectForSnakeCase(obj) {
    return Object.keys(obj).reduce(function (o, k) {
      o[k.replace(/([A-Z])/g, function (r) {
        return '_' + r.toLowerCase();
      })] = obj[k];
      return o;
    }, {});
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIlByb21pc2UiLCJyZXF1aXJlIiwiVVJMX1JFR0VYIiwiR0VPX0xJTUlUX1RZUEVTIiwiRVJST1JTIiwiY2hlY2tUeXBlIiwiY2xvbmUiLCJWRVJTSU9OIiwidmVyc2lvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJ3cmFwVG9rZW4iLCJfY29uZmlnIiwicmVxdWVzdEZuIiwicmVzb2x2ZSIsInJlamVjdCIsImFwaUtleSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJmb3JtYXRNb2RlbCIsImRhdGEiLCJmb3JtYXR0ZWQiLCJpZCIsInVuZGVmaW5lZCIsInBhcmFtc1JlcXVpcmVkIiwibmFtZSIsIm91dHB1dF9pbmZvIiwiY29uY2VwdHNNdXR1YWxseUV4Y2x1c2l2ZSIsIm91dHB1dF9jb25maWciLCJjb25jZXB0c19tdXR1YWxseV9leGNsdXNpdmUiLCJjbG9zZWRFbnZpcm9ubWVudCIsImNsb3NlZF9lbnZpcm9ubWVudCIsImNvbmNlcHRzIiwibWFwIiwiZm9ybWF0Q29uY2VwdCIsImZvcm1hdElucHV0IiwiaW5jbHVkZUltYWdlIiwiaW5wdXQiLCJ1cmwiLCJtZXRhZGF0YSIsImdlbyIsImdlb19wb2ludCIsImltYWdlIiwiYmFzZTY0IiwiY3JvcCIsImFsbG93RHVwbGljYXRlVXJsIiwiYWxsb3dfZHVwbGljYXRlX3VybCIsImZvcm1hdE1lZGlhUHJlZGljdCIsInR5cGUiLCJtZWRpYSIsInRlc3QiLCJmb3JtYXRJbWFnZXNTZWFyY2giLCJpbWFnZVF1ZXJ5IiwiZ2VvX2JveCIsInAiLCJpbmRleE9mIiwiSU5WQUxJRF9HRU9MSU1JVF9UWVBFIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJnZW9fbGltaXQiLCJ2YWx1ZSIsImRhdGFDb3B5IiwiaW1hZ2VDb3B5Iiwib3V0cHV0IiwiY29uY2F0IiwiY29uY2VwdCIsImZvcm1hdENvbmNlcHRzU2VhcmNoIiwicXVlcnkiLCJ2IiwiZm9ybWF0T2JqZWN0Rm9yU25ha2VDYXNlIiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsIm8iLCJrIiwicmVwbGFjZSIsInIiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQUlBLFVBQVVDLFFBQVEsU0FBUixDQUFkOztlQUMyQ0EsUUFBUSxhQUFSLEM7SUFBdENDLFMsWUFBQUEsUztJQUFXQyxlLFlBQUFBLGU7SUFBaUJDLE0sWUFBQUEsTTs7Z0JBQ1JILFFBQVEsV0FBUixDO0lBQXBCSSxTLGFBQUFBLFM7SUFBV0MsSyxhQUFBQSxLOztnQkFDU0wsUUFBUSxtQkFBUixDO0lBQVhNLE8sYUFBVEMsTzs7QUFFTEMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxhQUFXLG1CQUFDQyxPQUFELEVBQVVDLFNBQVYsRUFBd0I7QUFDakMsV0FBTyxJQUFJYixPQUFKLENBQVksVUFBQ2MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLFVBQUlILFFBQVFJLE1BQVosRUFBb0I7QUFDbEIsWUFBSUMsVUFBVTtBQUNaQyxrQ0FBc0JOLFFBQVFJLE1BRGxCO0FBRVosdUNBQTJCVDtBQUZmLFNBQWQ7QUFJQSxlQUFPTSxVQUFVSSxPQUFWLEVBQW1CRSxJQUFuQixDQUF3QkwsT0FBeEIsRUFBaUNDLE1BQWpDLENBQVA7QUFDRDtBQUNESCxjQUFRUSxLQUFSLEdBQWdCRCxJQUFoQixDQUFxQixVQUFDQyxLQUFELEVBQVc7QUFDOUIsWUFBSUgsVUFBVTtBQUNaQyxxQ0FBeUJFLE1BQU1DLFdBRG5CO0FBRVosdUNBQTJCZDtBQUZmLFNBQWQ7QUFJQU0sa0JBQVVJLE9BQVYsRUFBbUJFLElBQW5CLENBQXdCTCxPQUF4QixFQUFpQ0MsTUFBakM7QUFDRCxPQU5ELEVBTUdBLE1BTkg7QUFPRCxLQWZNLENBQVA7QUFnQkQsR0FsQmM7QUFtQmZPLGVBQWEsdUJBQWU7QUFBQSxRQUFkQyxJQUFjLHVFQUFQLEVBQU87O0FBQzFCLFFBQUlDLFlBQVksRUFBaEI7QUFDQSxRQUFJRCxL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V0FBT0MsT0FBT0MsSUFBUCxDQUFZRixHQUFaLEVBQWlCRyxNQUFqQixDQUF3QixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN2Q0QsUUFBRUMsRUFBRUMsT0FBRixDQUFVLFVBQVYsRUFBc0I7QUFBQSxlQUFLLE1BQUlDLEVBQUVDLFdBQUYsRUFBVDtBQUFBLE9BQXRCLENBQUYsSUFBcURSLElBQUlLLENBQUosQ0FBckQ7QUFDQSxhQUFPRCxDQUFQO0FBQ0QsS0FITSxFQUdKLEVBSEksQ0FBUDtBQUlEO0FBekxjLENBQWpCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFByb21pc2UgPSByZXF1aXJlKCdwcm9taXNlJyk7XG5sZXQge1VSTF9SRUdFWCwgR0VPX0xJTUlUX1RZUEVTLCBFUlJPUlN9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmxldCB7Y2hlY2tUeXBlLCBjbG9uZX0gPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbmxldCB7dmVyc2lvbjogVkVSU0lPTn0gPSByZXF1aXJlKCcuLy4uL3BhY2thZ2UuanNvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgd3JhcFRva2VuOiAoX2NvbmZpZywgcmVxdWVzdEZuKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChfY29uZmlnLmFwaUtleSkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgS2V5ICR7X2NvbmZpZy5hcGlLZXl9YCxcbiAgICAgICAgICAnWC1DbGFyaWZhaS1DbGllbnQnOiBganM6JHtWRVJTSU9OfWBcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RGbihoZWFkZXJzKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9XG4gICAgICBfY29uZmlnLnRva2VuKCkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VuLmFjY2Vzc1Rva2VufWAsXG4gICAgICAgICAgJ1gtQ2xhcmlmYWktQ2xpZW50JzogYGpzOiR7VkVSU0lPTn1gXG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3RGbihoZWFkZXJzKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xuICB9LFxuICBmb3JtYXRNb2RlbDogKGRhdGEgPSB7fSkgPT4ge1xuICAgIGxldCBmb3JtYXR0ZWQgPSB7fTtcbiAgICBpZiAoZGF0YS5pZCA9PT0gbnVsbCB8fCBkYXRhLmlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IEVSUk9SUy5wYXJhbXNSZXF1aXJlZCgnTW9kZWwgSUQnKTtcbiAgICB9XG4gICAgZm9ybWF0dGVkLmlkID0gZGF0YS5pZDtcbiAgICBpZiAoZGF0YS5uYW1lKSB7XG4gICAgICBmb3JtYXR0ZWQubmFtZSA9IGRhdGEubmFtZTtcbiAgICB9XG4gICAgZm9ybWF0dGVkLm91dHB1dF9pbmZvID0ge307XG4gICAgaWYgKGRhdGEuY29uY2VwdHNNdXR1YWxseUV4Y2x1c2l2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3JtYXR0ZWQub3V0cHV0X2luZm8ub3V0cHV0X2NvbmZpZyA9IGZvcm1hdHRlZC5vdXRwdXRfaW5mby5vdXRwdXRfY29uZmlnIHx8IHt9O1xuICAgICAgZm9ybWF0dGVkLm91dHB1dF9pbmZvLm91dHB1dF9jb25maWcuY29uY2VwdHNfbXV0dWFsbHlfZXhjbHVzaXZlID0gISFkYXRhLmNvbmNlcHRzTXV0dWFsbHlFeGNsdXNpdmU7XG4gICAgfVxuICAgIGlmIChkYXRhLmNsb3NlZEVudmlyb25tZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvcm1hdHRlZC5vdXRwdXRfaW5mby5vdXRwdXRfY29uZmlnID0gZm9ybWF0dGVkLm91dHB1dF9pbmZvLm91dHB1dF9jb25maWcgfHwge307XG4gICAgICBmb3JtYXR0ZWQub3V0cHV0X2luZm8ub3V0cHV0X2NvbmZpZy5jbG9zZWRfZW52aXJvbm1lbnQgPSAhIWRhdGEuY2xvc2VkRW52aXJvbm1lbnQ7XG4gICAgfVxuICAgIGlmIChkYXRhLmNvbmNlcHRzKSB7XG4gICAgICBmb3JtYXR0ZWQub3V0cHV0X2luZm8uZGF0YSA9IHtcbiAgICAgICAgY29uY2VwdHM6IGRhdGEuY29uY2VwdHMubWFwKG1vZHVsZS5leHBvcnRzLmZvcm1hdENvbmNlcHQpXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVkO1xuICB9LFxuICBmb3JtYXRJbnB1dDogKGRhdGEsIGluY2x1ZGVJbWFnZSkgPT4ge1xuICAgIGxldCBpbnB1dCA9IGNoZWNrVHlwZSgvU3RyaW5nLywgZGF0YSkgP1xuICAgICAge3VybDogZGF0YX0gOlxuICAgICAgZGF0YTtcbiAgICBsZXQgZm9ybWF0dGVkID0ge1xuICAgICAgaWQ6IGlucHV0LmlkIHx8IG51bGwsXG4gICAgICBkYXRhOiB7fVxuICAgIH07XG4gICAgaWYgKGlucHV0LmNvbmNlcHRzKSB7XG4gICAgICBmb3JtYXR0ZWQuZGF0YS5jb25jZXB0cyA9IGlucHV0LmNvbmNlcHRzO1xuICAgIH1cbiAgICBpZiAoaW5wdXQubWV0YWRhdGEpIHtcbiAgICAgIGZvcm1hdHRlZC5kYXRhLm1ldGFkYXRhID0gaW5wdXQubWV0YWRhdGE7XG4gICAgfVxuICAgIGlmIChpbnB1dC5nZW8pIHtcbiAgICAgIGZvcm1hdHRlZC5kYXRhLmdlbyA9IHtnZW9fcG9pbnQ6IGlucHV0Lmdlb307XG4gICAgfVxuICAgIGlmIChpbmNsdWRlSW1hZ2UgIT09IGZhbHNlKSB7XG4gICAgICBmb3JtYXR0ZWQuZGF0YS5pbWFnZSA9IHtcbiAgICAgICAgdXJsOiBpbnB1dC51cmwsXG4gICAgICAgIGJhc2U2NDogaW5wdXQuYmFzZTY0LFxuICAgICAgICBjcm9wOiBpbnB1dC5jcm9wXG4gICAgICB9O1xuICAgICAgaWYgKGRhdGEuYWxsb3dEdXBsaWNhdGVVcmwpIHtcbiAgICAgICAgZm9ybWF0dGVkLmRhdGEuaW1hZ2UuYWxsb3dfZHVwbGljYXRlX3VybCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0ZWQ7XG4gIH0sXG4gIGZvcm1hdE1lZGlhUHJlZGljdDogKGRhdGEsIHR5cGUgPSAnaW1hZ2UnKSA9PiB7XG4gICAgbGV0IG1lZGlhID0gZGF0YTtcbiAgICBpZiAoY2hlY2tUeXBlKC9TdHJpbmcvLCBkYXRhKSkge1xuICAgICAgaWYgKFVSTF9SRUdFWC50ZXN0KG1lZGlhKSA9PT0gdHJ1ZSkge1xuICAgICAgICBtZWRpYSA9IHtcbiAgICAgICAgICB1cmw6IGRhdGFcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lZGlhID0ge1xuICAgICAgICAgIGJhc2U2NDogZGF0YVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YToge1xuICAgICAgICBbdHlwZV06IG1lZGlhXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgZm9ybWF0SW1hZ2VzU2VhcmNoOiAoaW1hZ2UpID0+IHtcbiAgICBsZXQgaW1hZ2VRdWVyeTtcbiAgICBsZXQgaW5wdXQgPSB7aW5wdXQ6IHtkYXRhOiB7fX19O1xuICAgIGxldCBmb3JtYXR0ZWQgPSBbXTtcbiAgICBpZiAoY2hlY2tUeXBlKC9TdHJpbmcvLCBpbWFnZSkpIHtcbiAgICAgIGltYWdlUXVlcnkgPSB7dXJsOiBpbWFnZX07XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlUXVlcnkgPSAoaW1hZ2UudXJsIHx8IGltYWdlLmJhc2U2NCkgPyB7XG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgdXJsOiBpbWFnZS51cmwsXG4gICAgICAgICAgYmFzZTY0OiBpbWFnZS5iYXNlNjQsXG4gICAgICAgICAgY3JvcDogaW1hZ2UuY3JvcFxuICAgICAgICB9XG4gICAgICB9IDoge307XG4gICAgfVxuXG4gICAgaW5wdXQuaW5wdXQuZGF0YSA9IGltYWdlUXVlcnk7XG4gICAgaWYgKGltYWdlLmlkKSB7XG4gICAgICBpbnB1dC5pbnB1dC5pZCA9IGltYWdlLmlkO1xuICAgICAgaW5wdXQuaW5wdXQuZGF0YSA9IHtpbWFnZToge319O1xuICAgIH1cbiAgICBpZiAoaW1hZ2UubWV0YWRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5wdXQuaW5wdXQuZGF0YS5tZXRhZGF0YSA9IGltYWdlLm1ldGFkYXRhO1xuICAgIH1cbiAgICBpZiAoaW1hZ2UuZ2VvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjaGVja1R5cGUoL0FycmF5LywgaW1hZ2UuZ2VvKSkge1xuICAgICAgICBpbnB1dC5pbnB1dC5kYXRhLmdlbyA9IHtcbiAgICAgICAgICBnZW9fYm94OiBpbWFnZS5nZW8ubWFwKHAgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtnZW9fcG9pbnQ6IHB9O1xuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGNoZWNrVHlwZSgvT2JqZWN0LywgaW1hZ2UuZ2VvKSkge1xuICAgICAgICBpZiAoR0VPX0xJTUlUX1RZUEVTLmluZGV4T2YoaW1hZ2UuZ2VvLnR5cGUpID09PSAtMSkge1xuICAgICAgICAgIHRocm93IEVSUk9SUy5JTlZBTElEX0dFT0xJTUlUX1RZUEU7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuaW5wdXQuZGF0YS5nZW8gPSB7XG4gICAgICAgICAgZ2VvX3BvaW50OiB7XG4gICAgICAgICAgICBsYXRpdHVkZTogaW1hZ2UuZ2VvLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpbWFnZS5nZW8ubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZW9fbGltaXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IGltYWdlLmdlby50eXBlLFxuICAgICAgICAgICAgdmFsdWU6IGltYWdlLmdlby52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGltYWdlLnR5cGUgIT09ICdpbnB1dCcgJiYgaW5wdXQuaW5wdXQuZGF0YS5pbWFnZSkge1xuICAgICAgaWYgKGlucHV0LmlucHV0LmRhdGEubWV0YWRhdGEgfHwgaW5wdXQuaW5wdXQuZGF0YS5nZW8pIHtcbiAgICAgICAgbGV0IGRhdGFDb3B5ID0ge2lucHV0OiB7ZGF0YTogY2xvbmUoaW5wdXQuaW5wdXQuZGF0YSl9fTtcbiAgICAgICAgbGV0IGltYWdlQ29weSA9IHtpbnB1dDoge2RhdGE6IGNsb25lKGlucHV0LmlucHV0LmRhdGEpfX07XG4gICAgICAgIGRlbGV0ZSBkYXRhQ29weS5pbnB1dC5kYXRhLmltYWdlO1xuICAgICAgICBkZWxldGUgaW1hZ2VDb3B5LmlucHV0LmRhdGEubWV0YWRhdGE7XG4gICAgICAgIGRlbGV0ZSBpbWFnZUNvcHkuaW5wdXQuZGF0YS5nZW87XG4gICAgICAgIGlucHV0ID0gW1xuICAgICAgICAgIHtvdXRwdXQ6IGltYWdlQ29weX0sXG4gICAgICAgICAgZGF0YUNvcHlcbiAgICAgICAgXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0ID0gW3tvdXRwdXQ6IGlucHV0fV07XG4gICAgICB9XG4gICAgfVxuICAgIGZvcm1hdHRlZCA9IGZvcm1hdHRlZC5jb25jYXQoaW5wdXQpO1xuICAgIHJldHVybiBmb3JtYXR0ZWQ7XG4gIH0sXG4gIGZvcm1hdENvbmNlcHQ6IChjb25jZXB0KSA9PiB7XG4gICAgbGV0IGZvcm1hdHRlZCA9IGNvbmNlcHQ7XG4gICAgaWYgKGNoZWNrVHlwZSgvU3RyaW5nLywgY29uY2VwdCkpIHtcbiAgICAgIGZvcm1hdHRlZCA9IHtcbiAgICAgICAgaWQ6IGNvbmNlcHRcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0ZWQ7XG4gIH0sXG4gIGZvcm1hdENvbmNlcHRzU2VhcmNoOiAocXVlcnkpID0+IHtcbiAgICBpZiAoY2hlY2tUeXBlKC9TdHJpbmcvLCBxdWVyeSkpIHtcbiAgICAgIHF1ZXJ5ID0ge2lkOiBxdWVyeX07XG4gICAgfVxuICAgIGxldCB2ID0ge307XG4gICAgbGV0IHR5cGUgPSBxdWVyeS50eXBlID09PSAnaW5wdXQnID8gJ2lucHV0JyA6ICdvdXRwdXQnO1xuICAgIGRlbGV0ZSBxdWVyeS50eXBlO1xuICAgIHZbdHlwZV0gPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbmNlcHRzOiBbcXVlcnldXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gdjtcbiAgfSxcbiAgZm9ybWF0T2JqZWN0Rm9yU25ha2VDYXNlKG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgobywgaykgPT4ge1xuICAgICAgb1trLnJlcGxhY2UoLyhbQS1aXSkvZywgciA9PiAnXycrci50b0xvd2VyQ2FzZSgpKV0gPSBvYmpba107XG4gICAgICByZXR1cm4gbztcbiAgICB9LCB7fSk7XG4gIH1cbn07XG4iXX0=
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/utils.js","/")
},{"./../package.json":36,"./constants":45,"./helpers":47,"buffer":23,"pBGvAp":27,"promise":28}]},{},[46])
(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f
      }
      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e)
      }, l, l.exports, e, t, n, r)
    }
    return n[o].exports
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s
})({
  1: [function (require, module, exports) {
    'use strict';
    const indentString = require('indent-string');
    const cleanStack = require('clean-stack');

    const cleanInternalStack = stack => stack.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, '');

    class AggregateError extends Error {
      constructor(errors) {
          // Even though strings are iterable, we don't allow them to prevent subtle user mistakes
          if (!errors[Symbol.iterator] || typeof errors === 'string') {
            throw new TypeError(`Expected input to be iterable, got ${typeof errors}`);
          }

          errors = Array.from(errors).map(err => err instanceof Error ? err : new Error(err));

          let message = errors.map(err => cleanInternalStack(cleanStack(err.stack))).join('\n');
          message = '\n' + indentString(message, 4);

          super(message);
          this.name = this.constructor.name;
          Object.defineProperty(this, '_errors', {
            value: errors
          });
        }
        *[Symbol.iterator]() {
          for (const error of this._errors) {
            yield error;
          }
        }
    }

    module.exports = AggregateError;

  }, {
    "clean-stack": 3,
    "indent-string": 4
  }],
  2: [function (require, module, exports) {
    'use strict';
    module.exports = function (val) {
      if (val === null || val === undefined) {
        return [];
      }

      return Array.isArray(val) ? val : [val];
    };

  }, {}],
  3: [function (require, module, exports) {
    'use strict';
    const os = require('os');

    const extractPathRegex = /\s+at.*(?:\(|\s)(.*)\)?/;
    const pathRegex = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/babel-polyfill\/.*)?\w+)\.js:\d+:\d+)|native)/;
    const homeDir = os.homedir();

    module.exports = (stack, options) => {
      options = Object.assign({
        pretty: false
      }, options);

      return stack.replace(/\\/g, '/')
        .split('\n')
        .filter(x => {
          const pathMatches = x.match(extractPathRegex);
          if (pathMatches === null || !pathMatches[1]) {
            return true;
          }

          const match = pathMatches[1];

          // Electron
          if (match.includes('.app/Contents/Resources/electron.asar') ||
            match.includes('.app/Contents/Resources/default_app.asar')) {
            return false;
          }

          return !pathRegex.test(match);
        })
        .filter(x => x.trim() !== '')
        .map(x => {
          if (options.pretty) {
            return x.replace(extractPathRegex, (m, p1) => m.replace(p1, p1.replace(homeDir, '~')));
          }

          return x;
        })
        .join('\n');
    };

  }, {
    "os": 13
  }],
  4: [function (require, module, exports) {
    'use strict';
    module.exports = (str, count, opts) => {
      // Support older versions: use the third parameter as options.indent
      // TODO: Remove the workaround in the next major version
      const options = typeof opts === 'object' ? Object.assign({
        indent: ' '
      }, opts) : {
        indent: opts || ' '
      };
      count = count === undefined ? 1 : count;

      if (typeof str !== 'string') {
        throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof str}\``);
      }

      if (typeof count !== 'number') {
        throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof count}\``);
      }

      if (typeof options.indent !== 'string') {
        throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof options.indent}\``);
      }

      if (count === 0) {
        return str;
      }

      const regex = options.includeEmptyLines ? /^/mg : /^(?!\s*$)/mg;
      return str.replace(regex, options.indent.repeat(count));
    };

  }, {}],
  5: [function (require, module, exports) {
    /* eslint-env browser */
    'use strict';
    const arrify = require('arrify');
    const pAny = require('p-any');
    const prependHttp = require('prepend-http');
    const URL = require('url-parse');

    module.exports = hosts => {
      return pAny(arrify(hosts).map(url => {
        return new Promise(resolve => {
          url = new URL(prependHttp(url));

          const hostname = url.hostname;
          const protocol = url.protocol || '';
          const port = url.port ? `:${url.port}` : '';

          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = `${protocol}//${hostname}${port}/favicon.ico?${Date.now()}`;
        });
      }));
    };

  }, {
    "arrify": 2,
    "p-any": 7,
    "prepend-http": 6,
    "url-parse": 11
  }],
  6: [function (require, module, exports) {
    'use strict';
    module.exports = (url, opts) => {
      if (typeof url !== 'string') {
        throw new TypeError(`Expected \`url\` to be of type \`string\`, got \`${typeof url}\``);
      }

      url = url.trim();
      opts = Object.assign({
        https: false
      }, opts);

      if (/^\.*\/|^(?!localhost)\w+:/.test(url)) {
        return url;
      }

      return url.replace(/^(?!(?:\w+:)?\/\/)/, opts.https ? 'https://' : 'http://');
    };

  }, {}],
  7: [function (require, module, exports) {
    'use strict';
    const pSome = require('p-some');

    module.exports = (iterable, opts) => pSome(iterable, Object.assign({}, opts, {
      count: 1
    })).then(values => values[0]);

    module.exports.AggregateError = pSome.AggregateError;

  }, {
    "p-some": 8
  }],
  8: [function (require, module, exports) {
    'use strict';
    const AggregateError = require('aggregate-error');

    module.exports = (iterable, opts) => new Promise((resolve, reject) => {
      opts = Object.assign({}, opts);

      if (!Number.isFinite(opts.count)) {
        throw new TypeError(`Expected a finite number, got ${typeof opts.count}`);
      }

      const values = [];
      const errors = [];
      let elCount = 0;
      let maxErrors = -opts.count + 1;
      let maxFiltered = -opts.count + 1;
      let done = false;

      const fulfilled = value => {
        if (done) {
          return;
        }

        if (typeof opts.filter === 'function' && !opts.filter(value)) {
          if (--maxFiltered === 0) {
            done = true;
            reject(new RangeError(`Not enough values pass the \`filter\` option`));
          }

          return;
        }

        values.push(value);

        if (--opts.count === 0) {
          done = true;
          resolve(values);
        }
      };

      const rejected = error => {
        if (done) {
          return;
        }

        errors.push(error);

        if (--maxErrors === 0) {
          done = true;
          reject(new AggregateError(errors));
        }
      };

      for (const el of iterable) {
        maxErrors++;
        maxFiltered++;
        elCount++;
        Promise.resolve(el).then(fulfilled, rejected);
      }

      if (opts.count > elCount) {
        throw new RangeError(`Expected input to contain at least ${opts.count} items, but contains ${elCount} items`);
      }
    });

    module.exports.AggregateError = AggregateError;

  }, {
    "aggregate-error": 1
  }],
  9: [function (require, module, exports) {
    'use strict';

    var has = Object.prototype.hasOwnProperty;

    /**
     * Decode a URI encoded string.
     *
     * @param {String} input The URI encoded string.
     * @returns {String} The decoded string.
     * @api private
     */
    function decode(input) {
      return decodeURIComponent(input.replace(/\+/g, ' '));
    }

    /**
     * Simple query string parser.
     *
     * @param {String} query The query string that needs to be parsed.
     * @returns {Object}
     * @api public
     */
    function querystring(query) {
      var parser = /([^=?&]+)=?([^&]*)/g,
        result = {},
        part;

      //
      // Little nifty parsing hack, leverage the fact that RegExp.exec increments
      // the lastIndex property so we can continue executing this loop until we've
      // parsed all results.
      //
      for (; part = parser.exec(query); result[decode(part[1])] = decode(part[2]));

      return result;
    }

    /**
     * Transform a query string to an object.
     *
     * @param {Object} obj Object that should be transformed.
     * @param {String} prefix Optional prefix.
     * @returns {String}
     * @api public
     */
    function querystringify(obj, prefix) {
      prefix = prefix || '';

      var pairs = [];

      //
      // Optionally prefix with a '?' if needed
      //
      if ('string' !== typeof prefix) prefix = '?';

      for (var key in obj) {
        if (has.call(obj, key)) {
          pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
      }

      return pairs.length ? prefix + pairs.join('&') : '';
    }

    //
    // Expose the module.
    //
    exports.stringify = querystringify;
    exports.parse = querystring;

  }, {}],
  10: [function (require, module, exports) {
    'use strict';

    /**
     * Check if we're required to add a port number.
     *
     * @see https://url.spec.whatwg.org/#default-port
     * @param {Number|String} port Port number we need to check
     * @param {String} protocol Protocol we need to check against.
     * @returns {Boolean} Is it a default port for the given protocol
     * @api private
     */
    module.exports = function required(port, protocol) {
      protocol = protocol.split(':')[0];
      port = +port;

      if (!port) return false;

      switch (protocol) {
        case 'http':
        case 'ws':
          return port !== 80;

        case 'https':
        case 'wss':
          return port !== 443;

        case 'ftp':
          return port !== 21;

        case 'gopher':
          return port !== 70;

        case 'file':
          return false;
      }

      return port !== 0;
    };

  }, {}],
  11: [function (require, module, exports) {
    (function (global) {
      'use strict';

      var required = require('requires-port'),
        qs = require('querystringify'),
        protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
        slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

      /**
       * These are the parse rules for the URL parser, it informs the parser
       * about:
       *
       * 0. The char it Needs to parse, if it's a string it should be done using
       *    indexOf, RegExp using exec and NaN means set as current value.
       * 1. The property we should set when parsing this value.
       * 2. Indication if it's backwards or forward parsing, when set as number it's
       *    the value of extra chars that should be split off.
       * 3. Inherit from location if non existing in the parser.
       * 4. `toLowerCase` the resulting value.
       */
      var rules = [
        ['#', 'hash'], // Extract from the back.
        ['?', 'query'], // Extract from the back.
        ['/', 'pathname'], // Extract from the back.
        ['@', 'auth', 1], // Extract from the front.
        [NaN, 'host', undefined, 1, 1], // Set left over value.
        [/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
        [NaN, 'hostname', undefined, 1, 1] // Set left over.
      ];

      /**
       * These properties should not be copied or inherited from. This is only needed
       * for all non blob URL's as a blob URL does not include a hash, only the
       * origin.
       *
       * @type {Object}
       * @private
       */
      var ignore = {
        hash: 1,
        query: 1
      };

      /**
       * The location object differs when your code is loaded through a normal page,
       * Worker or through a worker using a blob. And with the blobble begins the
       * trouble as the location object will contain the URL of the blob, not the
       * location of the page where our code is loaded in. The actual origin is
       * encoded in the `pathname` so we can thankfully generate a good "default"
       * location from it so we can generate proper relative URL's again.
       *
       * @param {Object|String} loc Optional default location object.
       * @returns {Object} lolcation object.
       * @api public
       */
      function lolcation(loc) {
        loc = loc || global.location || {};

        var finaldestination = {},
          type = typeof loc,
          key;

        if ('blob:' === loc.protocol) {
          finaldestination = new URL(unescape(loc.pathname), {});
        } else if ('string' === type) {
          finaldestination = new URL(loc, {});
          for (key in ignore) delete finaldestination[key];
        } else if ('object' === type) {
          for (key in loc) {
            if (key in ignore) continue;
            finaldestination[key] = loc[key];
          }

          if (finaldestination.slashes === undefined) {
            finaldestination.slashes = slashes.test(loc.href);
          }
        }

        return finaldestination;
      }

      /**
       * @typedef ProtocolExtract
       * @type Object
       * @property {String} protocol Protocol matched in the URL, in lowercase.
       * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
       * @property {String} rest Rest of the URL that is not part of the protocol.
       */

      /**
       * Extract protocol information from a URL with/without double slash ("//").
       *
       * @param {String} address URL we want to extract from.
       * @return {ProtocolExtract} Extracted information.
       * @api private
       */
      function extractProtocol(address) {
        var match = protocolre.exec(address);

        return {
          protocol: match[1] ? match[1].toLowerCase() : '',
          slashes: !!match[2],
          rest: match[3]
        };
      }

      /**
       * Resolve a relative URL pathname against a base URL pathname.
       *
       * @param {String} relative Pathname of the relative URL.
       * @param {String} base Pathname of the base URL.
       * @return {String} Resolved pathname.
       * @api private
       */
      function resolve(relative, base) {
        var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
          i = path.length,
          last = path[i - 1],
          unshift = false,
          up = 0;

        while (i--) {
          if (path[i] === '.') {
            path.splice(i, 1);
          } else if (path[i] === '..') {
            path.splice(i, 1);
            up++;
          } else if (up) {
            if (i === 0) unshift = true;
            path.splice(i, 1);
            up--;
          }
        }

        if (unshift) path.unshift('');
        if (last === '.' || last === '..') path.push('');

        return path.join('/');
      }

      /**
       * The actual URL instance. Instead of returning an object we've opted-in to
       * create an actual constructor as it's much more memory efficient and
       * faster and it pleases my OCD.
       *
       * @constructor
       * @param {String} address URL we want to parse.
       * @param {Object|String} location Location defaults for relative paths.
       * @param {Boolean|Function} parser Parser for the query string.
       * @api public
       */
      function URL(address, location, parser) {
        if (!(this instanceof URL)) {
          return new URL(address, location, parser);
        }

        var relative, extracted, parse, instruction, index, key, instructions = rules.slice(),
          type = typeof location,
          url = this,
          i = 0;

        //
        // The following if statements allows this module two have compatibility with
        // 2 different API:
        //
        // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
        //    where the boolean indicates that the query string should also be parsed.
        //
        // 2. The `URL` interface of the browser which accepts a URL, object as
        //    arguments. The supplied object will be used as default values / fall-back
        //    for relative paths.
        //
        if ('object' !== type && 'string' !== type) {
          parser = location;
          location = null;
        }

        if (parser && 'function' !== typeof parser) parser = qs.parse;

        location = lolcation(location);

        //
        // Extract protocol information before running the instructions.
        //
        extracted = extractProtocol(address || '');
        relative = !extracted.protocol && !extracted.slashes;
        url.slashes = extracted.slashes || relative && location.slashes;
        url.protocol = extracted.protocol || location.protocol || '';
        address = extracted.rest;

        //
        // When the authority component is absent the URL starts with a path
        // component.
        //
        if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

        for (; i < instructions.length; i++) {
          instruction = instructions[i];
          parse = instruction[0];
          key = instruction[1];

          if (parse !== parse) {
            url[key] = address;
          } else if ('string' === typeof parse) {
            if (~(index = address.indexOf(parse))) {
              if ('number' === typeof instruction[2]) {
                url[key] = address.slice(0, index);
                address = address.slice(index + instruction[2]);
              } else {
                url[key] = address.slice(index);
                address = address.slice(0, index);
              }
            }
          } else if ((index = parse.exec(address))) {
            url[key] = index[1];
            address = address.slice(0, index.index);
          }

          url[key] = url[key] || (
            relative && instruction[3] ? location[key] || '' : ''
          );

          //
          // Hostname, host and protocol should be lowercased so they can be used to
          // create a proper `origin`.
          //
          if (instruction[4]) url[key] = url[key].toLowerCase();
        }

        //
        // Also parse the supplied query string in to an object. If we're supplied
        // with a custom parser as function use that instead of the default build-in
        // parser.
        //
        if (parser) url.query = parser(url.query);

        //
        // If the URL is relative, resolve the pathname against the base URL.
        //
        if (
          relative &&
          location.slashes &&
          url.pathname.charAt(0) !== '/' &&
          (url.pathname !== '' || location.pathname !== '')
        ) {
          url.pathname = resolve(url.pathname, location.pathname);
        }

        //
        // We should not add port numbers if they are already the default port number
        // for a given protocol. As the host also contains the port number we're going
        // override it with the hostname which contains no port number.
        //
        if (!required(url.port, url.protocol)) {
          url.host = url.hostname;
          url.port = '';
        }

        //
        // Parse down the `auth` for the username and password.
        //
        url.username = url.password = '';
        if (url.auth) {
          instruction = url.auth.split(':');
          url.username = instruction[0] || '';
          url.password = instruction[1] || '';
        }

        url.origin = url.protocol && url.host && url.protocol !== 'file:' ?
          url.protocol + '//' + url.host :
          'null';

        //
        // The href is just the compiled result.
        //
        url.href = url.toString();
      }

      /**
       * This is convenience method for changing properties in the URL instance to
       * insure that they all propagate correctly.
       *
       * @param {String} part          Property we need to adjust.
       * @param {Mixed} value          The newly assigned value.
       * @param {Boolean|Function} fn  When setting the query, it will be the function
       *                               used to parse the query.
       *                               When setting the protocol, double slash will be
       *                               removed from the final url if it is true.
       * @returns {URL}
       * @api public
       */
      function set(part, value, fn) {
        var url = this;

        switch (part) {
          case 'query':
            if ('string' === typeof value && value.length) {
              value = (fn || qs.parse)(value);
            }

            url[part] = value;
            break;

          case 'port':
            url[part] = value;

            if (!required(value, url.protocol)) {
              url.host = url.hostname;
              url[part] = '';
            } else if (value) {
              url.host = url.hostname + ':' + value;
            }

            break;

          case 'hostname':
            url[part] = value;

            if (url.port) value += ':' + url.port;
            url.host = value;
            break;

          case 'host':
            url[part] = value;

            if (/:\d+$/.test(value)) {
              value = value.split(':');
              url.port = value.pop();
              url.hostname = value.join(':');
            } else {
              url.hostname = value;
              url.port = '';
            }

            break;

          case 'protocol':
            url.protocol = value.toLowerCase();
            url.slashes = !fn;
            break;

          case 'pathname':
          case 'hash':
            if (value) {
              var char = part === 'pathname' ? '/' : '#';
              url[part] = value.charAt(0) !== char ? char + value : value;
            } else {
              url[part] = value;
            }
            break;

          default:
            url[part] = value;
        }

        for (var i = 0; i < rules.length; i++) {
          var ins = rules[i];

          if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
        }

        url.origin = url.protocol && url.host && url.protocol !== 'file:' ?
          url.protocol + '//' + url.host :
          'null';

        url.href = url.toString();

        return url;
      }

      /**
       * Transform the properties back in to a valid and full URL string.
       *
       * @param {Function} stringify Optional query stringify function.
       * @returns {String}
       * @api public
       */
      function toString(stringify) {
        if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

        var query, url = this,
          protocol = url.protocol;

        if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

        var result = protocol + (url.slashes ? '//' : '');

        if (url.username) {
          result += url.username;
          if (url.password) result += ':' + url.password;
          result += '@';
        }

        result += url.host + url.pathname;

        query = 'object' === typeof url.query ? stringify(url.query) : url.query;
        if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

        if (url.hash) result += url.hash;

        return result;
      }

      URL.prototype = {
        set: set,
        toString: toString
      };

      //
      // Expose the URL parser and some additional properties that might be useful for
      // others or testing.
      //
      URL.extractProtocol = extractProtocol;
      URL.location = lolcation;
      URL.qs = qs;

      module.exports = URL;

    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, {
    "querystringify": 9,
    "requires-port": 10
  }],
  12: [function (require, module, exports) {
    const isReachable = require('is-reachable');

    window.isReachable = async function (url) {
      return await isReachable(url);
    }
  }, {
    "is-reachable": 5
  }],
  13: [function (require, module, exports) {
    exports.endianness = function () {
      return 'LE'
    };

    exports.hostname = function () {
      if (typeof location !== 'undefined') {
        return location.hostname
      } else return '';
    };

    exports.loadavg = function () {
      return []
    };

    exports.uptime = function () {
      return 0
    };

    exports.freemem = function () {
      return Number.MAX_VALUE;
    };

    exports.totalmem = function () {
      return Number.MAX_VALUE;
    };

    exports.cpus = function () {
      return []
    };

    exports.type = function () {
      return 'Browser'
    };

    exports.release = function () {
      if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
      }
      return '';
    };

    exports.networkInterfaces = exports.getNetworkInterfaces = function () {
      return {}
    };

    exports.arch = function () {
      return 'javascript'
    };

    exports.platform = function () {
      return 'browser'
    };

    exports.tmpdir = exports.tmpDir = function () {
      return '/tmp';
    };

    exports.EOL = '\n';

    exports.homedir = function () {
      return '/'
    };

  }, {}]
}, {}, [12]);
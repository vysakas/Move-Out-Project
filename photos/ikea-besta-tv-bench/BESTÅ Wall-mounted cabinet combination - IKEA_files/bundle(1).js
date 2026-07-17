"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // <define:APP_CONFIG>
  var define_APP_CONFIG_default;
  var init_define_APP_CONFIG = __esm({
    "<define:APP_CONFIG>"() {
      define_APP_CONFIG_default = { buildId: "1084", clientName: "ikeauae", cSalecycleCom: "https://c.salecycle.com", errorEndpointUrl: "https://i.salecycle.com/error", remoteStateStoreUrl: "https://s.salecycle.com/receiver.html", rtmWebSocketUrl: "wss://ws.salecycle.com/ws", setAsTestImpression: true, stateEndpointUrl: "https://i.salecycle.com/impression", v1LegacyUrl: "https://d16fk4ms6rqz1v.cloudfront.net/capture/legacy_receiver.html", v2LegacyUrl: "https://d22j4fzzszoii2.cloudfront.net/legacy_receiver/legacy_receiver.html" };
    }
  });

  // ../../node_modules/.pnpm/es6-promise-polyfill@1.2.0/node_modules/es6-promise-polyfill/promise.js
  var require_promise = __commonJS({
    "../../node_modules/.pnpm/es6-promise-polyfill@1.2.0/node_modules/es6-promise-polyfill/promise.js"(exports) {
      init_define_APP_CONFIG();
      var define;
      (function(global2) {
        var NativePromise = global2["Promise"];
        var nativePromiseSupported = NativePromise && // Some of these methods are missing from
        // Firefox/Chrome experimental implementations
        "resolve" in NativePromise && "reject" in NativePromise && "all" in NativePromise && "race" in NativePromise && // Older version of the spec had a resolver object
        // as the arg rather than a function
        (function() {
          var resolve2;
          new NativePromise(function(r) {
            resolve2 = r;
          });
          return typeof resolve2 === "function";
        })();
        if (typeof exports !== "undefined" && exports) {
          exports.Promise = nativePromiseSupported ? NativePromise : Promise3;
          exports.Polyfill = Promise3;
        } else {
          if (typeof define == "function" && define.amd) {
            define(function() {
              return nativePromiseSupported ? NativePromise : Promise3;
            });
          } else {
            if (!nativePromiseSupported)
              global2["Promise"] = Promise3;
          }
        }
        var PENDING = "pending";
        var SEALED = "sealed";
        var FULFILLED = "fulfilled";
        var REJECTED = "rejected";
        var NOOP = function() {
        };
        function isArray(value) {
          return Object.prototype.toString.call(value) === "[object Array]";
        }
        var asyncSetTimer = typeof setImmediate !== "undefined" ? setImmediate : setTimeout;
        var asyncQueue = [];
        var asyncTimer;
        function asyncFlush() {
          for (var i = 0; i < asyncQueue.length; i++)
            asyncQueue[i][0](asyncQueue[i][1]);
          asyncQueue = [];
          asyncTimer = false;
        }
        function asyncCall(callback, arg) {
          asyncQueue.push([callback, arg]);
          if (!asyncTimer) {
            asyncTimer = true;
            asyncSetTimer(asyncFlush, 0);
          }
        }
        function invokeResolver(resolver, promise) {
          function resolvePromise(value) {
            resolve(promise, value);
          }
          function rejectPromise(reason) {
            reject(promise, reason);
          }
          try {
            resolver(resolvePromise, rejectPromise);
          } catch (e) {
            rejectPromise(e);
          }
        }
        function invokeCallback(subscriber) {
          var owner = subscriber.owner;
          var settled = owner.state_;
          var value = owner.data_;
          var callback = subscriber[settled];
          var promise = subscriber.then;
          if (typeof callback === "function") {
            settled = FULFILLED;
            try {
              value = callback(value);
            } catch (e) {
              reject(promise, e);
            }
          }
          if (!handleThenable(promise, value)) {
            if (settled === FULFILLED)
              resolve(promise, value);
            if (settled === REJECTED)
              reject(promise, value);
          }
        }
        function handleThenable(promise, value) {
          var resolved;
          try {
            if (promise === value)
              throw new TypeError("A promises callback cannot return that same promise.");
            if (value && (typeof value === "function" || typeof value === "object")) {
              var then = value.then;
              if (typeof then === "function") {
                then.call(value, function(val) {
                  if (!resolved) {
                    resolved = true;
                    if (value !== val)
                      resolve(promise, val);
                    else
                      fulfill(promise, val);
                  }
                }, function(reason) {
                  if (!resolved) {
                    resolved = true;
                    reject(promise, reason);
                  }
                });
                return true;
              }
            }
          } catch (e) {
            if (!resolved)
              reject(promise, e);
            return true;
          }
          return false;
        }
        function resolve(promise, value) {
          if (promise === value || !handleThenable(promise, value))
            fulfill(promise, value);
        }
        function fulfill(promise, value) {
          if (promise.state_ === PENDING) {
            promise.state_ = SEALED;
            promise.data_ = value;
            asyncCall(publishFulfillment, promise);
          }
        }
        function reject(promise, reason) {
          if (promise.state_ === PENDING) {
            promise.state_ = SEALED;
            promise.data_ = reason;
            asyncCall(publishRejection, promise);
          }
        }
        function publish(promise) {
          var callbacks = promise.then_;
          promise.then_ = void 0;
          for (var i = 0; i < callbacks.length; i++) {
            invokeCallback(callbacks[i]);
          }
        }
        function publishFulfillment(promise) {
          promise.state_ = FULFILLED;
          publish(promise);
        }
        function publishRejection(promise) {
          promise.state_ = REJECTED;
          publish(promise);
        }
        function Promise3(resolver) {
          if (typeof resolver !== "function")
            throw new TypeError("Promise constructor takes a function argument");
          if (this instanceof Promise3 === false)
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          this.then_ = [];
          invokeResolver(resolver, this);
        }
        Promise3.prototype = {
          constructor: Promise3,
          state_: PENDING,
          then_: null,
          data_: void 0,
          then: function(onFulfillment, onRejection) {
            var subscriber = {
              owner: this,
              then: new this.constructor(NOOP),
              fulfilled: onFulfillment,
              rejected: onRejection
            };
            if (this.state_ === FULFILLED || this.state_ === REJECTED) {
              asyncCall(invokeCallback, subscriber);
            } else {
              this.then_.push(subscriber);
            }
            return subscriber.then;
          },
          "catch": function(onRejection) {
            return this.then(null, onRejection);
          }
        };
        Promise3.all = function(promises) {
          var Class = this;
          if (!isArray(promises))
            throw new TypeError("You must pass an array to Promise.all().");
          return new Class(function(resolve2, reject2) {
            var results = [];
            var remaining = 0;
            function resolver(index) {
              remaining++;
              return function(value) {
                results[index] = value;
                if (!--remaining)
                  resolve2(results);
              };
            }
            for (var i = 0, promise; i < promises.length; i++) {
              promise = promises[i];
              if (promise && typeof promise.then === "function")
                promise.then(resolver(i), reject2);
              else
                results[i] = promise;
            }
            if (!remaining)
              resolve2(results);
          });
        };
        Promise3.race = function(promises) {
          var Class = this;
          if (!isArray(promises))
            throw new TypeError("You must pass an array to Promise.race().");
          return new Class(function(resolve2, reject2) {
            for (var i = 0, promise; i < promises.length; i++) {
              promise = promises[i];
              if (promise && typeof promise.then === "function")
                promise.then(resolve2, reject2);
              else
                resolve2(promise);
            }
          });
        };
        Promise3.resolve = function(value) {
          var Class = this;
          if (value && typeof value === "object" && value.constructor === Class)
            return value;
          return new Class(function(resolve2) {
            resolve2(value);
          });
        };
        Promise3.reject = function(reason) {
          var Class = this;
          return new Class(function(resolve2, reject2) {
            reject2(reason);
          });
        };
      })(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : exports);
    }
  });

  // ../../node_modules/.pnpm/@salecycle+log-tiny@2.0.1/node_modules/@salecycle/log-tiny/index.js
  var require_log_tiny = __commonJS({
    "../../node_modules/.pnpm/@salecycle+log-tiny@2.0.1/node_modules/@salecycle/log-tiny/index.js"(exports, module) {
      init_define_APP_CONFIG();
      var noop = () => {
      };
      var bindConsoleFunc = (existingFunc) => {
        if (!console || !console.log || typeof existingFunc !== "function") {
          return noop;
        }
        return existingFunc.bind(console);
      };
      module.exports = {
        groupEnd: bindConsoleFunc(console.groupEnd),
        // eslint-disable-line no-console
        groupStart: bindConsoleFunc(console.groupCollapsed),
        // eslint-disable-line no-console
        logError: bindConsoleFunc(console.error),
        // eslint-disable-line no-console
        logInfo: bindConsoleFunc(console.info),
        // eslint-disable-line no-console
        logObj: bindConsoleFunc(console.dir),
        // eslint-disable-line no-console
        logWarning: bindConsoleFunc(console.warn),
        // eslint-disable-line no-console
        noop
      };
    }
  });

  // ../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      init_define_APP_CONFIG();
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // ../../node_modules/.pnpm/lscache@1.3.2/node_modules/lscache/lscache.js
  var require_lscache = __commonJS({
    "../../node_modules/.pnpm/lscache@1.3.2/node_modules/lscache/lscache.js"(exports, module) {
      init_define_APP_CONFIG();
      var define;
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof module !== "undefined" && module.exports) {
          module.exports = factory();
        } else {
          root.lscache = factory();
        }
      })(exports, function() {
        var CACHE_PREFIX = "lscache-";
        var CACHE_SUFFIX = "-cacheexpiration";
        var EXPIRY_RADIX = 10;
        var expiryMilliseconds = 60 * 1e3;
        var maxDate = calculateMaxDate(expiryMilliseconds);
        var cachedStorage;
        var cachedJSON;
        var cacheBucket = "";
        var warnings = false;
        function supportsStorage() {
          var key = "__lscachetest__";
          var value = key;
          if (cachedStorage !== void 0) {
            return cachedStorage;
          }
          try {
            if (!localStorage) {
              return false;
            }
          } catch (ex) {
            return false;
          }
          try {
            setItem(key, value);
            removeItem(key);
            cachedStorage = true;
          } catch (e) {
            if (isOutOfSpace(e) && localStorage.length) {
              cachedStorage = true;
            } else {
              cachedStorage = false;
            }
          }
          return cachedStorage;
        }
        function isOutOfSpace(e) {
          return e && (e.name === "QUOTA_EXCEEDED_ERR" || e.name === "NS_ERROR_DOM_QUOTA_REACHED" || e.name === "QuotaExceededError");
        }
        function supportsJSON() {
          if (cachedJSON === void 0) {
            cachedJSON = window.JSON != null;
          }
          return cachedJSON;
        }
        function escapeRegExpSpecialCharacters(text) {
          return text.replace(/[[\]{}()*+?.\\^$|]/g, "\\$&");
        }
        function expirationKey(key) {
          return key + CACHE_SUFFIX;
        }
        function currentTime() {
          return Math.floor((/* @__PURE__ */ new Date()).getTime() / expiryMilliseconds);
        }
        function getItem(key) {
          return localStorage.getItem(CACHE_PREFIX + cacheBucket + key);
        }
        function setItem(key, value) {
          localStorage.removeItem(CACHE_PREFIX + cacheBucket + key);
          localStorage.setItem(CACHE_PREFIX + cacheBucket + key, value);
        }
        function removeItem(key) {
          localStorage.removeItem(CACHE_PREFIX + cacheBucket + key);
        }
        function eachKey(fn) {
          var prefixRegExp = new RegExp("^" + CACHE_PREFIX + escapeRegExpSpecialCharacters(cacheBucket) + "(.*)");
          var keysToProcess = [];
          var key, i;
          for (i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);
            key = key && key.match(prefixRegExp);
            key = key && key[1];
            if (key && key.indexOf(CACHE_SUFFIX) < 0) {
              keysToProcess.push(key);
            }
          }
          for (i = 0; i < keysToProcess.length; i++) {
            fn(keysToProcess[i], expirationKey(keysToProcess[i]));
          }
        }
        function flushItem(key) {
          var exprKey = expirationKey(key);
          removeItem(key);
          removeItem(exprKey);
        }
        function flushExpiredItem(key) {
          var exprKey = expirationKey(key);
          var expr = getItem(exprKey);
          if (expr) {
            var expirationTime = parseInt(expr, EXPIRY_RADIX);
            if (currentTime() >= expirationTime) {
              removeItem(key);
              removeItem(exprKey);
              return true;
            }
          }
        }
        function warn(message, err) {
          if (!warnings) return;
          if (!("console" in window) || typeof window.console.warn !== "function") return;
          window.console.warn("lscache - " + message);
          if (err) window.console.warn("lscache - The error was: " + err.message);
        }
        function calculateMaxDate(expiryMilliseconds2) {
          return Math.floor(864e13 / expiryMilliseconds2);
        }
        var lscache = {
          /**
           * Stores the value in localStorage. Expires after specified number of minutes.
           * @param {string} key
           * @param {Object|string} value
           * @param {number} time
           * @return {boolean} whether the value was inserted successfully
           */
          set: function(key, value, time) {
            if (!supportsStorage()) return false;
            if (!supportsJSON()) return false;
            try {
              value = JSON.stringify(value);
            } catch (e) {
              return false;
            }
            try {
              setItem(key, value);
            } catch (e) {
              if (isOutOfSpace(e)) {
                var storedKeys = [];
                var storedKey;
                eachKey(function(key2, exprKey) {
                  var expiration = getItem(exprKey);
                  if (expiration) {
                    expiration = parseInt(expiration, EXPIRY_RADIX);
                  } else {
                    expiration = maxDate;
                  }
                  storedKeys.push({
                    key: key2,
                    size: (getItem(key2) || "").length,
                    expiration
                  });
                });
                storedKeys.sort(function(a, b) {
                  return b.expiration - a.expiration;
                });
                var targetSize = (value || "").length;
                while (storedKeys.length && targetSize > 0) {
                  storedKey = storedKeys.pop();
                  warn("Cache is full, removing item with key '" + storedKey.key + "'");
                  flushItem(storedKey.key);
                  targetSize -= storedKey.size;
                }
                try {
                  setItem(key, value);
                } catch (e2) {
                  warn("Could not add item with key '" + key + "', perhaps it's too big?", e2);
                  return false;
                }
              } else {
                warn("Could not add item with key '" + key + "'", e);
                return false;
              }
            }
            if (time) {
              setItem(expirationKey(key), (currentTime() + time).toString(EXPIRY_RADIX));
            } else {
              removeItem(expirationKey(key));
            }
            return true;
          },
          /**
           * Retrieves specified value from localStorage, if not expired.
           * @param {string} key
           * @return {string|Object}
           */
          get: function(key) {
            if (!supportsStorage()) return null;
            if (flushExpiredItem(key)) {
              return null;
            }
            var value = getItem(key);
            if (!value || !supportsJSON()) {
              return value;
            }
            try {
              return JSON.parse(value);
            } catch (e) {
              return value;
            }
          },
          /**
           * Removes a value from localStorage.
           * Equivalent to 'delete' in memcache, but that's a keyword in JS.
           * @param {string} key
           */
          remove: function(key) {
            if (!supportsStorage()) return;
            flushItem(key);
          },
          /**
           * Returns whether local storage is supported.
           * Currently exposed for testing purposes.
           * @return {boolean}
           */
          supported: function() {
            return supportsStorage();
          },
          /**
           * Flushes all lscache items and expiry markers without affecting rest of localStorage
           */
          flush: function() {
            if (!supportsStorage()) return;
            eachKey(function(key) {
              flushItem(key);
            });
          },
          /**
           * Flushes expired lscache items and expiry markers without affecting rest of localStorage
           */
          flushExpired: function() {
            if (!supportsStorage()) return;
            eachKey(function(key) {
              flushExpiredItem(key);
            });
          },
          /**
           * Appends CACHE_PREFIX so lscache will partition data in to different buckets.
           * @param {string} bucket
           */
          setBucket: function(bucket) {
            cacheBucket = bucket;
          },
          /**
           * Resets the string being appended to CACHE_PREFIX so lscache will use the default storage behavior.
           */
          resetBucket: function() {
            cacheBucket = "";
          },
          /**
           * @returns {number} The currently set number of milliseconds each time unit represents in
           *   the set() function's "time" argument.
           */
          getExpiryMilliseconds: function() {
            return expiryMilliseconds;
          },
          /**
           * Sets the number of milliseconds each time unit represents in the set() function's
           *   "time" argument.
           * Sample values:
           *  1: each time unit = 1 millisecond
           *  1000: each time unit = 1 second
           *  60000: each time unit = 1 minute (Default value)
           *  360000: each time unit = 1 hour
           * @param {number} milliseconds
           */
          setExpiryMilliseconds: function(milliseconds) {
            expiryMilliseconds = milliseconds;
            maxDate = calculateMaxDate(expiryMilliseconds);
          },
          /**
           * Sets whether to display warnings when an item is removed from the cache or not.
           */
          enableWarnings: function(enabled) {
            warnings = enabled;
          }
        };
        return lscache;
      });
    }
  });

  // ../../node_modules/.pnpm/lz-string@1.5.0/node_modules/lz-string/libs/lz-string.js
  var require_lz_string = __commonJS({
    "../../node_modules/.pnpm/lz-string@1.5.0/node_modules/lz-string/libs/lz-string.js"(exports, module) {
      init_define_APP_CONFIG();
      var define;
      var LZString = (function() {
        var f = String.fromCharCode;
        var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
        var baseReverseDic = {};
        function getBaseValue(alphabet, character) {
          if (!baseReverseDic[alphabet]) {
            baseReverseDic[alphabet] = {};
            for (var i = 0; i < alphabet.length; i++) {
              baseReverseDic[alphabet][alphabet.charAt(i)] = i;
            }
          }
          return baseReverseDic[alphabet][character];
        }
        var LZString2 = {
          compressToBase64: function(input) {
            if (input == null) return "";
            var res = LZString2._compress(input, 6, function(a) {
              return keyStrBase64.charAt(a);
            });
            switch (res.length % 4) {
              // To produce valid Base64
              default:
              // When could this happen ?
              case 0:
                return res;
              case 1:
                return res + "===";
              case 2:
                return res + "==";
              case 3:
                return res + "=";
            }
          },
          decompressFromBase64: function(input) {
            if (input == null) return "";
            if (input == "") return null;
            return LZString2._decompress(input.length, 32, function(index) {
              return getBaseValue(keyStrBase64, input.charAt(index));
            });
          },
          compressToUTF16: function(input) {
            if (input == null) return "";
            return LZString2._compress(input, 15, function(a) {
              return f(a + 32);
            }) + " ";
          },
          decompressFromUTF16: function(compressed) {
            if (compressed == null) return "";
            if (compressed == "") return null;
            return LZString2._decompress(compressed.length, 16384, function(index) {
              return compressed.charCodeAt(index) - 32;
            });
          },
          //compress into uint8array (UCS-2 big endian format)
          compressToUint8Array: function(uncompressed) {
            var compressed = LZString2.compress(uncompressed);
            var buf = new Uint8Array(compressed.length * 2);
            for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
              var current_value = compressed.charCodeAt(i);
              buf[i * 2] = current_value >>> 8;
              buf[i * 2 + 1] = current_value % 256;
            }
            return buf;
          },
          //decompress from uint8array (UCS-2 big endian format)
          decompressFromUint8Array: function(compressed) {
            if (compressed === null || compressed === void 0) {
              return LZString2.decompress(compressed);
            } else {
              var buf = new Array(compressed.length / 2);
              for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
                buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
              }
              var result = [];
              buf.forEach(function(c) {
                result.push(f(c));
              });
              return LZString2.decompress(result.join(""));
            }
          },
          //compress into a string that is already URI encoded
          compressToEncodedURIComponent: function(input) {
            if (input == null) return "";
            return LZString2._compress(input, 6, function(a) {
              return keyStrUriSafe.charAt(a);
            });
          },
          //decompress from an output of compressToEncodedURIComponent
          decompressFromEncodedURIComponent: function(input) {
            if (input == null) return "";
            if (input == "") return null;
            input = input.replace(/ /g, "+");
            return LZString2._decompress(input.length, 32, function(index) {
              return getBaseValue(keyStrUriSafe, input.charAt(index));
            });
          },
          compress: function(uncompressed) {
            return LZString2._compress(uncompressed, 16, function(a) {
              return f(a);
            });
          },
          _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
            if (uncompressed == null) return "";
            var i, value, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
            for (ii = 0; ii < uncompressed.length; ii += 1) {
              context_c = uncompressed.charAt(ii);
              if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
                context_dictionary[context_c] = context_dictSize++;
                context_dictionaryToCreate[context_c] = true;
              }
              context_wc = context_w + context_c;
              if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
                context_w = context_wc;
              } else {
                if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                  if (context_w.charCodeAt(0) < 256) {
                    for (i = 0; i < context_numBits; i++) {
                      context_data_val = context_data_val << 1;
                      if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                      } else {
                        context_data_position++;
                      }
                    }
                    value = context_w.charCodeAt(0);
                    for (i = 0; i < 8; i++) {
                      context_data_val = context_data_val << 1 | value & 1;
                      if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                      } else {
                        context_data_position++;
                      }
                      value = value >> 1;
                    }
                  } else {
                    value = 1;
                    for (i = 0; i < context_numBits; i++) {
                      context_data_val = context_data_val << 1 | value;
                      if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                      } else {
                        context_data_position++;
                      }
                      value = 0;
                    }
                    value = context_w.charCodeAt(0);
                    for (i = 0; i < 16; i++) {
                      context_data_val = context_data_val << 1 | value & 1;
                      if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                      } else {
                        context_data_position++;
                      }
                      value = value >> 1;
                    }
                  }
                  context_enlargeIn--;
                  if (context_enlargeIn == 0) {
                    context_enlargeIn = Math.pow(2, context_numBits);
                    context_numBits++;
                  }
                  delete context_dictionaryToCreate[context_w];
                } else {
                  value = context_dictionary[context_w];
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                  context_enlargeIn = Math.pow(2, context_numBits);
                  context_numBits++;
                }
                context_dictionary[context_wc] = context_dictSize++;
                context_w = String(context_c);
              }
            }
            if (context_w !== "") {
              if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                if (context_w.charCodeAt(0) < 256) {
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 8; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                } else {
                  value = 1;
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1 | value;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = 0;
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 16; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                  context_enlargeIn = Math.pow(2, context_numBits);
                  context_numBits++;
                }
                delete context_dictionaryToCreate[context_w];
              } else {
                value = context_dictionary[context_w];
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
            }
            value = 2;
            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value & 1;
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
            while (true) {
              context_data_val = context_data_val << 1;
              if (context_data_position == bitsPerChar - 1) {
                context_data.push(getCharFromInt(context_data_val));
                break;
              } else context_data_position++;
            }
            return context_data.join("");
          },
          decompress: function(compressed) {
            if (compressed == null) return "";
            if (compressed == "") return null;
            return LZString2._decompress(compressed.length, 32768, function(index) {
              return compressed.charCodeAt(index);
            });
          },
          _decompress: function(length, resetValue, getNextValue) {
            var dictionary = [], next, enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i, w, bits, resb, maxpower, power, c, data = { val: getNextValue(0), position: resetValue, index: 1 };
            for (i = 0; i < 3; i += 1) {
              dictionary[i] = i;
            }
            bits = 0;
            maxpower = Math.pow(2, 2);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            switch (next = bits) {
              case 0:
                bits = 0;
                maxpower = Math.pow(2, 8);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                c = f(bits);
                break;
              case 1:
                bits = 0;
                maxpower = Math.pow(2, 16);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                c = f(bits);
                break;
              case 2:
                return "";
            }
            dictionary[3] = c;
            w = c;
            result.push(c);
            while (true) {
              if (data.index > length) {
                return "";
              }
              bits = 0;
              maxpower = Math.pow(2, numBits);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              switch (c = bits) {
                case 0:
                  bits = 0;
                  maxpower = Math.pow(2, 8);
                  power = 1;
                  while (power != maxpower) {
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) {
                      data.position = resetValue;
                      data.val = getNextValue(data.index++);
                    }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                  }
                  dictionary[dictSize++] = f(bits);
                  c = dictSize - 1;
                  enlargeIn--;
                  break;
                case 1:
                  bits = 0;
                  maxpower = Math.pow(2, 16);
                  power = 1;
                  while (power != maxpower) {
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) {
                      data.position = resetValue;
                      data.val = getNextValue(data.index++);
                    }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                  }
                  dictionary[dictSize++] = f(bits);
                  c = dictSize - 1;
                  enlargeIn--;
                  break;
                case 2:
                  return result.join("");
              }
              if (enlargeIn == 0) {
                enlargeIn = Math.pow(2, numBits);
                numBits++;
              }
              if (dictionary[c]) {
                entry = dictionary[c];
              } else {
                if (c === dictSize) {
                  entry = w + w.charAt(0);
                } else {
                  return null;
                }
              }
              result.push(entry);
              dictionary[dictSize++] = w + entry.charAt(0);
              enlargeIn--;
              w = entry;
              if (enlargeIn == 0) {
                enlargeIn = Math.pow(2, numBits);
                numBits++;
              }
            }
          }
        };
        return LZString2;
      })();
      if (typeof define === "function" && define.amd) {
        define(function() {
          return LZString;
        });
      } else if (typeof module !== "undefined" && module != null) {
        module.exports = LZString;
      } else if (typeof angular !== "undefined" && angular != null) {
        angular.module("LZString", []).factory("LZString", function() {
          return LZString;
        });
      }
    }
  });

  // implementations/ikeauae/entry.ts
  init_define_APP_CONFIG();

  // implementations/ikeauae/implementation.ts
  init_define_APP_CONFIG();

  // implementations/ikeauae/scrapers/email.ts
  init_define_APP_CONFIG();

  // ../client-script-core/interfaces/impressions/DataSource.ts
  init_define_APP_CONFIG();

  // implementations/ikeauae/scrapers/email.ts
  function getSource(api, elemMatch) {
    if (api.page.matchesSome(elemMatch, ["#username", "#login_logonId", "#login-form-username", "#login-email"])) {
      return "LoginForm" /* LoginForm */;
    }
    if (api.page.matchesSome(elemMatch, ["#createUser_email1", "#regular-signup-form-username"])) {
      return "CreateAccount" /* CreateAccount */;
    }
    if (api.page.matches(elemMatch, "#NewAddress_Email")) {
      return "GuestCheckout" /* GuestCheckout */;
    }
    return null;
  }
  function emailScrape(api, selectors2, eventTargets) {
    const elemMatch = api.collection.find(eventTargets.concat(api.page.querySelectorAll(selectors2)), (elem) => {
      return !!api.strings.firstMatch(api.page.valueOf(elem), api.strings.regexList.EMAIL);
    });
    if (elemMatch) {
      return {
        value: api.page.valueOf(elemMatch),
        source: getSource(api, elemMatch)
      };
    }
    return null;
  }

  // implementations/ikeauae/scrapers/phone.ts
  init_define_APP_CONFIG();
  function getSource2(api, elemMatch) {
    if (api.page.matchesSome(elemMatch, ["#createUser_phone2", "#regular-signup-form-mobile"])) {
      return "CreateAccount" /* CreateAccount */;
    }
    if (api.page.matches(elemMatch, "#NewAddress_PhoneNumber")) {
      return "GuestCheckout" /* GuestCheckout */;
    }
    return null;
  }
  function phoneScrape(api, selectors2, eventTargets) {
    const elemMatch = api.collection.find(api.page.querySelectorAll(selectors2.mobile), (elem) => {
      return !!api.page.valueOf(elem);
    });
    if (api.fluent.fromValue(api.page.valueOf(elemMatch)).includes("555555555", true)) {
      return null;
    }
    if (elemMatch) {
      return {
        mobile: api.page.valueOf(elemMatch),
        source: getSource2(api, elemMatch)
      };
    }
    return null;
  }

  // implementations/ikeauae/scrapers/maincart.ts
  init_define_APP_CONFIG();

  // implementations/ikeauae/utils.ts
  init_define_APP_CONFIG();
  function recommendedItemScrape(api) {
    const recommendContainer = api.fluent.querySelector("div[data-mount-recommendations=pip-product-first]");
    if (!recommendContainer.exists()) {
      return null;
    }
    const recommendedItems = {};
    const recommendations = recommendContainer.querySelectorAll(".rec-carousel-slide");
    recommendations.forEach((item, index) => {
      if (index < 4) {
        const currentItemIdx = index + 1;
        const currentItemLabel = item.getTextContent([".pip-commercial-message__title", ".pip-product-highlight"]).done();
        const currentItemUrl = item.querySelector("a").getAttribute("href").done();
        const currentItemImg = item.querySelector("img").getAttribute("src").split("?").first().done();
        const currentItemName = item.getTextContent(".pip-header-section__title--small").done();
        const currentItemDescription = item.getTextContent(".pip-header-section__description-text").done();
        const currentItemSize = item.getTextContent(".pip-header-section__description-measurement").done();
        const currentItemPrice = item.getTextContent(".pip-compact-price-package__price-wrapper").done();
        const currentItemPreviousPrice = item.getTextContent(".pip-compact-price-package__previous-price-wrapper .pip-price__integer").done();
        recommendedItems[`recommendedItemLabel${currentItemIdx}`] = currentItemLabel;
        recommendedItems[`recommendedItemUrl${currentItemIdx}`] = currentItemUrl;
        recommendedItems[`recommendedItemName${currentItemIdx}`] = currentItemName;
        recommendedItems[`recommendedItemImg${currentItemIdx}`] = currentItemImg;
        recommendedItems[`recommendedItemDescription${currentItemIdx}`] = currentItemDescription;
        recommendedItems[`recommendedItemSize${currentItemIdx}`] = currentItemSize;
        recommendedItems[`recommendedItemPrice${currentItemIdx}`] = currentItemPrice;
        recommendedItems[`recommendedItemPreviousPrice${currentItemIdx}`] = currentItemPreviousPrice;
      }
    });
    return recommendedItems;
  }
  var livingRoom = [
    "Sofas",
    "Living room storage systems",
    "Cabinet",
    "Shelving unit",
    "Bookcase",
    "Coffee table",
    "TV media furniture",
    "Rugs"
  ];
  var bedroom = [
    "Wardrobes",
    "Bed",
    "Beds",
    "Beds, bed",
    "Chest of drawer",
    "mirror",
    "mattress",
    "bed linen",
    "bedside table"
  ];
  var accessories = [
    "Cookware",
    "Food storage & organising",
    "Cooking & baking utensils",
    "Bakeware",
    "Knives & chopping boards",
    "Dinnerware",
    "Glassware & jugs",
    "Cutlery",
    "Coffee & tea",
    "Serveware",
    "Napkins & napkin holders",
    "Picnic & outdoor recreation",
    "Dishwashing accessories",
    "Kitchen textiles",
    "Table linen",
    "Children's kitchenware & tableware"
  ];
  function getCategory(api, locale) {
    const utag = window.utag;
    const region = !!locale ? locale : "";
    if (utag && utag.product_category && Array.isArray(utag.product_category) && utag.product_category.length > 0) {
      const stringArray = utag.product_category.toString();
      const returnLiving = api.fluent.fromValue(stringArray).includesSome(livingRoom, true);
      if (returnLiving) {
        return `${region}[[LIVINGROOM]]`;
      }
      const returnBedroom = api.fluent.fromValue(stringArray).includesSome(bedroom, true);
      if (returnBedroom) {
        return `${region}[[BEDROOM]]`;
      }
      const returnAccessories = api.fluent.fromValue(stringArray).includesSome(accessories, true);
      if (returnAccessories) {
        return `${region}[[ACCESSORIES]]`;
      }
    }
    return null;
  }

  // implementations/ikeauae/scrapers/maincart.ts
  function mainBagScrape(api) {
    const basketElement = api.fluent.querySelector("#checkoutOptimization");
    const nums = /[^0-9.,]/g;
    const suffix = ".00";
    if (!api.fluent.request.url().includesSome(["/shoppingcart", "AOrderItemUpdate", "/OrderItemDisplay?"], true) || !basketElement.exists()) {
      return null;
    }
    const basket = {};
    const pageUrl = api.fluent.request.url();
    const locale = pageUrl.includes("/ar/", true) ? "[[ARABIC]]" : "[[ENGLISH]]";
    basket.keywords = [locale];
    const languageId = pageUrl.includes("/ar/", true) ? "[[AR]]" : "[[EN]]";
    const basketTotal = api.fluent.getTextContent([".price-layout #txtNormaltotalTop", ".price-layout #txtNormaltotalBottom", ".normalPriceContainer #totalValueTop"]).replace(nums, "").replace(suffix, "").done();
    if (!basketTotal) {
      return null;
    }
    basket.costs = {
      subtotal: basketTotal
    };
    basket.items = basketElement.querySelectorAll("#updateAllForm .productRow").map((itemElement, i) => {
      if (itemElement.getAttribute("class").includes("_Itemnotavailable", true)) {
        return null;
      }
      const itemQty = itemElement.getStringValue(`#quantity_${i + 1}`).toInt().done();
      if (!itemQty) {
        return null;
      }
      const inStock = true;
      const itemId = itemElement.querySelector(`#prodId_${i + 1}`).getAttribute("value").done() || itemElement.querySelector("input[id*=cartorderqty]").getAttribute("id").split("_").last().done();
      const brand = itemElement.getTextContent([".productName", ".prodName"]).done();
      const name = itemElement.getTextContent([".ikea-product-pricetag-desc .description", ".prodDesc"]).done();
      const description = itemElement.getTextContent([".productDescription", ".prodDesignInfo"]).done();
      const url = itemElement.querySelector(["li > script", ".productRow > script"]).textContent().split("window.location = ").last().split(" ").first().replace(/[";]/g, "").split(".com").last().done();
      const itemImage = itemElement.querySelector([".ikea-shoppinglist-image-cell img", ".prodImage a img"]).getAttribute("src").replace("_S2.", "_S5.").replace("m.ikea.com", "").stripProtocol().done();
      const singleItem = itemElement.getTextContent(".productPrice").replace(nums, "").replace(suffix, "").done() || itemElement.querySelectorAll(".colPrice").last().textContent().replace(nums, "").replace(suffix, "").done();
      const itemSubtotal = itemElement.getTextContent([".totalPrice .ikea-product-pricetag-normal", ".colTotalPrice"]).replace(nums, "").replace(suffix, "").done();
      if (!itemSubtotal || !singleItem) {
        return null;
      }
      const detailsEl = itemElement.querySelector(".product__description-list");
      const color = detailsEl.getTextContent(".product__description-design-text").done();
      const size = detailsEl.getTextContent(".product__description-product-measurements").done();
      return {
        product: {
          inStock,
          brand,
          name,
          description,
          url: `https://m.ikea.com${url}`,
          color: {
            value: color
          },
          costs: {
            singleItem
          },
          id: `${languageId}_${itemId}`,
          images: {
            thumbnail: `https://m.ikea.com${itemImage}`
          },
          size: {
            value: size
          }
        },
        costs: {
          subtotal: itemSubtotal
        },
        quantity: itemQty
      };
    }).done();
    const getKeyword = getCategory(api, locale);
    if (getKeyword) {
      basket.keywords.push(getKeyword);
      api.storage.setValue("sc_key", getKeyword, 30);
    }
    basket.currency = "AED";
    return basket;
  }

  // implementations/ikeauae/scrapers/product.ts
  init_define_APP_CONFIG();
  function productScrape(api) {
    const productElement = api.fluent.querySelector(".range-revamp-page-container__main");
    if (!productElement.exists()) {
      return null;
    }
    const itemId = api.fluent.querySelector(".product-pip.js-product-pip").getAttribute("data-product-id").done();
    const url = api.fluent.request.url();
    const languageId = url.includes("/ar/", true) ? "[[AR]]" : "[[EN]]";
    const productImageEl = productElement.querySelector(".range-revamp-product__left-top");
    const productDetailsEl = productElement.querySelector(".range-revamp-product__buy-module-container");
    const brand = productDetailsEl.getTextContent(".range-revamp-header-section__title--big").done();
    const price = productDetailsEl.getTextContent(".range-revamp-price__integer").split("/").first().done();
    const previousPrice = productDetailsEl.getTextContent(".range-revamp-price--strike-through .range-revamp-price__integer").split("/").first().done();
    const itemName = productDetailsEl.getTextContent(".range-revamp-header-section__description-text").done();
    const description = productDetailsEl.getTextContent(".range-revamp-product-summary__description").done();
    const category = productElement.querySelectorAll(".bc-breadcrumb__list-item").getAt(1).textContent().done();
    const inStock = !productDetailsEl.getTextContent(".range-revamp-stockcheck__item-link span").includes("Out of stock", true);
    const imgLink = productImageEl.querySelector(".range-revamp-aspect-ratio-image__image").getAttribute("src").split("?").first().done();
    const sizeEl = productElement.getTextContent(".range-revamp-product-variation-section .range-revamp-chunky-header__title");
    const colEl = productElement.getTextContent(".range-revamp-product-styles .range-revamp-chunky-header__title");
    let size;
    let colour;
    if (sizeEl.includesSome(["size", "measurement", "\u0627\u0644\u0642\u064A\u0627\u0633"], true)) {
      size = productElement.getTextContent(".range-revamp-product-variation-section__button .range-revamp-chunky-header__subtitle").done();
    }
    if (colEl.includesSome(["colour", "color", "\u0644\u0648\u0646"], true)) {
      colour = productElement.getTextContent(".range-revamp-product-styles__button .range-revamp-chunky-header__subtitle").done();
    }
    return {
      id: `${languageId}_${itemId}`,
      brand,
      name: itemName,
      description,
      category: {
        value: category
      },
      size: {
        value: size
      },
      color: {
        value: colour
      },
      inStock,
      costs: {
        singleItem: price,
        previous: previousPrice
      },
      images: {
        thumbnail: imgLink
      },
      url: url.done(),
      currency: "AED"
    };
  }

  // implementations/ikeauae/scrapers/newProduct.ts
  init_define_APP_CONFIG();
  function newProductScrape(api) {
    const productElement = api.fluent.querySelector(".js-product-pip");
    if (!productElement.exists()) {
      return null;
    }
    const url = api.fluent.request.url();
    const languageId = url.includes("/ar/", true) ? "[[AR]]" : "[[EN]]";
    const itemId = api.fluent.getTextContent(".pipf-product-identifier__value").done() || productElement.getAttribute("data-product-id").done();
    const previous = productElement.getTextContent([".pipcom-price--comparison .pipcom-price__integer", ".pip-price--small.pip-price--strikeout .pip-price__integer", ".pip-temp-price-module__addon span.pip-temp-price__nowrap"]).replace(/[a-zA-Z\u0600-\u06FF]/g, "").done();
    const singleItem = productElement.getTextContent([".pipcom-price-module__current-price .pipcom-price__nowrap", ".pip-price-module__current-price .pip-price__integer", ".pip-temp-price-module__current-price span"]).split("/").first().replace(/[a-zA-Z\u0600-\u06FF]/g, "").done();
    if (!singleItem) {
      return null;
    }
    const productHighlight = productElement.getTextContent(".pip-commercial-message__title").done();
    const brand = productElement.getTextContent([".pipcom-price-module__name-decorator", ".pip-header-section__title--big", ".pip-temp-price-module__name h1 span"]).done();
    const description = api.fluent.getTextContent([".pipcom-price-module__description", ".pip-header-section__description-text"]).done();
    let itemName;
    if (brand && description) {
      itemName = `${brand} ${description}`;
    }
    const category = api.fluent.querySelectorAll(".bc-breadcrumb li").getAt(1).textContent().done();
    const imgLink = productElement.querySelector([".pipf-product-gallery__media-wrapper img", ".pip-zoom-image img", ".pip-aspect-ratio-image__image", "img.pip-image", ".pip-media-grid__image-button"]).getAttribute("src").split("?").first().clean().done();
    if (!imgLink) {
      return null;
    }
    const sizeColourEl = productElement.getTextContent(".pip-chunky-header__title-wrapper");
    const sizeColour = productElement.getTextContent(".pip-chunky-header__subtitle").done();
    let size;
    let colour;
    if (sizeColourEl.includesSome(["size", "measurement", "\u0627\u0644\u0642\u064A\u0627\u0633"], true)) {
      size = sizeColour;
    }
    if (sizeColourEl.includesSome(["colour", "color", "\u0644\u0648\u0646"], true)) {
      colour = sizeColour;
    }
    return {
      id: `${languageId}_${itemId}`,
      brand,
      name: itemName,
      description,
      category: {
        value: category
      },
      size: {
        value: size
      },
      color: {
        value: colour
      },
      inStock: true,
      costs: {
        singleItem,
        previous
      },
      images: {
        thumbnail: imgLink
      },
      reward: {
        value: productHighlight
      },
      url: url.done(),
      currency: "AED"
    };
  }

  // ../client-script-core/src/libs/promises.ts
  init_define_APP_CONFIG();
  var es6Promise = __toESM(require_promise());
  var promises_default = es6Promise.Promise;

  // shared/dataLayers/dataLayerHelper.ts
  init_define_APP_CONFIG();
  function getAllDataLayerValues(property, dataLayer = window.dataLayer) {
    if (!dataLayer || !Array.isArray(dataLayer)) {
      return [];
    }
    const filtered = dataLayer.filter((item) => {
      if (item) {
        return item[property];
      }
    });
    if (!filtered || filtered.length < 1) {
      return [];
    }
    return filtered;
  }
  function getDataLayerObject(property, firstMatch = true, dataLayer) {
    const filtered = getAllDataLayerValues(property, dataLayer);
    if (!filtered || filtered.length < 1) {
      return null;
    }
    if (firstMatch) {
      return filtered[0];
    }
    return filtered[filtered.length - 1];
  }
  function getDataLayerValue(property, firstMatch = true, dataLayer) {
    const object = getDataLayerObject(property, firstMatch, dataLayer);
    return object ? object[property] : null;
  }

  // ../client-script-core/interfaces/impressions/PaymentType.ts
  init_define_APP_CONFIG();

  // implementations/ikeauae/scrapers/checkoutScraper.ts
  init_define_APP_CONFIG();
  function checkoutScraper(api) {
    const basketElement = api.fluent.querySelector("#assemblyList");
    const nums = /[^0-9.,]/g;
    const omrReplace = /[0]+$/g;
    const suffix = ".00";
    const pageUrl = api.fluent.request.url();
    if (!pageUrl.includes("/checkout", true) || !basketElement.exists()) {
      return null;
    }
    const basket = {};
    const locale = pageUrl.includes("/ar/", true) ? "[[ARABIC]]" : "[[ENGLISH]]";
    basket.keywords = [locale, "[[CHECKOUT]]"];
    basket.source = "[[CHECKOUT]]";
    const languageId = pageUrl.includes("/ar/", true) ? "[[AR]]" : "[[EN]]";
    let currency = "AED";
    const totalsEl = api.fluent.querySelectorAll(["#orderTotals .cart-total .cart-total-left span", "#orderTotals .cart-total .cart-total-right"]);
    let subtotal;
    let shipping;
    let total;
    if (!totalsEl.exists()) {
      return null;
    }
    totalsEl.map((row) => {
      if (row.textContent().includesSome(["Sub-Total", "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A"], true)) {
        subtotal = row.closest("tr").getTextContent(".cart-total-right .product-price").replace(nums, "").replace(suffix, "").replace(omrReplace, "0").done();
      }
      if (row.textContent().includesSome(["Shipping", "\u0627\u0644\u0634\u062D\u0646"], true)) {
        shipping = row.closest("tr").getTextContent(".cart-total-right .product-price").replace(nums, "").replace(suffix, "").replace(omrReplace, "0").done();
      }
      if (row.textContent().includesSome(["Order Total", "\u0627\u0644\u0645\u062C\u0645\u0648\u0639"], true)) {
        total = row.closest("tr").getTextContent(".cart-total-right .product-price").replace(nums, "").replace(suffix, "").replace(omrReplace, "0").done();
      }
    });
    basket.shipping = {
      cost: shipping
    };
    let rollingTotal = 0;
    basket.items = basketElement.querySelectorAll("#assemblyList .prodRow").map((itemElement, index) => {
      if (itemElement.getAttribute("class").includes("_Itemnotavailable", true)) {
        return null;
      }
      const image = itemElement.querySelector(".prodImage img").getAttribute("src");
      const itemId = image.split("/").last().split("-").first().done();
      let itemQty = itemElement.getTextContent(".colQuantity span").replace(/[^0-9]/, "").toInt().done();
      if (!itemQty) {
        itemQty = itemElement.getTextContent(".prodName").split("x").first().toInt().done();
      }
      if (!itemQty) {
        return null;
      }
      const inStock = true;
      const brand = itemElement.getTextContent([".productName", ".prodName"]).done();
      const name = itemElement.getTextContent([".prodInfoContainer .description", ".itemdescription"]).done();
      const singleItemElement = itemElement.getTextContent(".productPrice").done() || itemElement.querySelectorAll(".colPrice").last().textContent().done();
      const fluentSingleItem = api.fluent.fromValue(singleItemElement);
      if (index === 0 && fluentSingleItem.includes("OMR", true)) {
        currency = "OMR";
      }
      const singleItem = fluentSingleItem.replace(nums, "").replace(suffix, "").replace(omrReplace, "0").done();
      const fluentItemSubtotal = itemElement.getTextContent([".totalPrice .ikea-product-pricetag-normal", ".colTotalPrice"]);
      let itemSubtotal = fluentItemSubtotal.replace(nums, "").replace(suffix, "").replace(omrReplace, "0").done();
      if (fluentItemSubtotal.allMatches(/dhs|درهم/gi).length() > 1) {
        itemSubtotal = fluentItemSubtotal.split(/dhs|درهم/ig).getAt(1).clean().replace(nums, "").replace(suffix, "").replace(omrReplace, "0").done();
      }
      const itemUrlId = itemId[1] === "9" ? `s${itemId}` : itemId;
      const url = locale === "[[ARABIC]]" ? `https://www.ikea.com/ae/ar/catalog/products/${itemUrlId}` : `https://www.ikea.com/ae/en/catalog/products/${itemUrlId}`;
      if (!itemSubtotal || !singleItem) {
        return null;
      }
      rollingTotal += api.fluent.fromValue(itemSubtotal).toInt().done();
      return {
        product: {
          inStock,
          brand,
          name,
          url,
          costs: {
            singleItem
          },
          id: `${languageId}_${itemId}`,
          images: {
            thumbnail: `https://checkout.ae.ikea.com${image.done()}`
          }
        },
        costs: {
          subtotal: itemSubtotal
        },
        quantity: itemQty
      };
    }).done();
    if (api.fluent.fromValue(subtotal).includes("..", true) && rollingTotal > 0) {
      const calculatedTotal = rollingTotal.toString();
      subtotal = calculatedTotal;
      total = calculatedTotal;
    }
    basket.costs = {
      subtotal,
      total
    };
    basket.currency = currency;
    return api.storage.getValue("sc_key").then((returnedKey) => {
      if (returnedKey) {
        basket.keywords.push(returnedKey);
        basket.type = returnedKey;
      }
      return basket;
    }).catch((err) => {
      if (typeof err === "string" && err.indexOf("timeout") > -1 || err.message && typeof err.message === "string" && err.message.indexOf("timeout") > -1) {
        return basket;
      }
      throw err;
    });
  }

  // implementations/ikeauae/scrapers/newMaincart.ts
  init_define_APP_CONFIG();
  function newMainBagScrape(api) {
    const basketElement = api.fluent.querySelector(['div[class^="CartPage_app__"]', "#cart-root"]);
    if (!basketElement.exists()) {
      return null;
    }
    const basket = {};
    const pageUrl = api.fluent.request.url();
    const locale = pageUrl.includes("/ar/", true) ? "[[ARABIC]]" : "[[ENGLISH]]";
    basket.keywords = [locale];
    const languageId = pageUrl.includes("/ar/", true) ? "[[AR]]" : "[[EN]]";
    const nums = /[^0-9.,]/g;
    const suffix = new RegExp("\\.00|(?<=\\.\\d{2})\\d{1}", "g");
    const basketSubtotal = basketElement.getTextContent(["div[class*=Summary_summary] .skapa-wrapper-prefix-price span", "#summary .cart-price span", '[data-testid="text-total-price"] span']).replace(nums, "").replace(suffix, "").done();
    if (!basketSubtotal) {
      return null;
    }
    basket.costs = {
      subtotal: basketSubtotal
    };
    basket.items = basketElement.querySelectorAll("div[product-id]").map((itemElement) => {
      const brandUrlEl = itemElement.querySelector([".skapa-wrapper-prefix-price-module__name a", ".cart-link--black", ".cart-link--subtle", ".cart-link", 'data-testid="item-link"]']);
      const url = brandUrlEl.getAttribute("href").done();
      const brand = brandUrlEl.textContent().done();
      const description = itemElement.getTextContent([".skapa-wrapper-prefix-price-module__description", ".skapa-wrapper-prefixprice-module__description li", ".skapa-wrapper-prefix-price-module__description li", ".cart-price-module__description .cart-text", ".cart-text", ".cart-price-module__description"]).clean().done();
      if (!brand || !description) {
        return null;
      }
      const itemName = `${brand} ${description}`;
      const itemQty = itemElement.querySelector([".skapa-wrapper-prefix-quantity-stepper__input", ".cart-quantity-stepper__input"]).getAttribute("value").toInt().done() || itemElement.getStringValue(["#cart-item-quantity-select", ".cart-quantity-stepper__input"]).toInt().done() || itemElement.getTextContent(["#cart-item-quantity-select", ".cart-quantity-stepper__input", '[class^="cart-quantity"]']).toInt().done() || 1;
      const itemId = itemElement.getAttribute("product-id").done();
      const itemImage = itemElement.querySelector([".skapa-wrapper-prefix-image", ".cart-image"]).getAttribute("src").replace("_s3", "_s5").done();
      const singleItem = itemElement.getTextContent([".cart-price--small.cart-price--subtle span", "div[product-id] .skapa-wrapper-prefix-price--custom-size span"]);
      const singleItemPrice = singleItem.split("/").first().replace(nums, "").replace(suffix, "").clean().done();
      const itemSubtotals = itemElement.querySelectorAll([".skapa-wrapper-prefix-price__integer", ".skapa-wrapper-prefix-price-module__current-price span"]);
      const itemSubtotalAsShown = itemElement.getTextContent(".cart-price-module__current-price span") || itemSubtotals.first().textContent();
      const itemSubtotal = itemSubtotalAsShown.replace(nums, "").replace(suffix, "").clean().done();
      const itemPrevSubtotal = itemElement.getTextContent(".cart-price--comparison .cart-price__nowrap").done();
      return {
        quantity: itemQty,
        product: {
          id: `${languageId}_${itemId}`,
          brand,
          name: itemName,
          description,
          costs: {
            singleItem: singleItemPrice
          },
          url,
          images: {
            thumbnail: itemImage
          },
          inStock: true
        },
        costs: {
          subtotal: itemSubtotal,
          previousSubtotal: itemPrevSubtotal
        },
        tagBag: {
          singleItemAsShown: singleItem.done(),
          itemSubtotalAsShown: itemSubtotalAsShown.done(),
          PreviousItemSubtotalAsShown: itemPrevSubtotal
        }
      };
    }).done();
    const getKeyword = getCategory(api, locale);
    if (getKeyword) {
      basket.keywords.push(getKeyword);
      api.storage.setValue("sc_key", getKeyword, 30);
    }
    basket.type = getKeyword;
    basket.currency = "AED";
    return basket;
  }

  // implementations/ikeauae/implementation.ts
  var selectors = {
    email: [
      "#username",
      // login
      "#createUser_email1",
      // create account
      "#login_logonId",
      // login
      "#NewAddress_Email",
      // billing
      "#regular-signup-form-username",
      "#login-form-username",
      "#login-email",
      "#email"
    ],
    firstName: [
      "#NewAddress_FirstName",
      "#createUser_firstName",
      "#regular-signup-form-firstName",
      "#first-name"
    ],
    lastName: [
      "#NewAddress_LastName",
      "#createUser_firstName",
      "#regular-signup-form-lastName",
      "#last-name"
    ],
    phone: {
      mobile: [
        "#createUser_phone2",
        // create account
        "#NewAddress_PhoneNumber",
        // checkout
        "#regular-signup-form-mobile"
      ]
    },
    billingContinueButton: [
      "#billingSubmitButton"
    ]
  };
  var basketURLs = ["/checkout", "/shoppingcart", "AOrderItemUpdate", "/OrderItemDisplay?", "/cart"];
  var Implementation = class {
    constructor(api) {
      this.api = api;
    }
    client() {
      return {
        apiKey: "3eea5ba4-3414-40d6-a37a-a307a7314a31",
        v1Id: 20683
      };
    }
    /**
     * Check if the user has completed their purchase
     * @param diff {Object} the difference between the previous state we scraped and the state we have just scraped
     */
    isPurchaseComplete() {
      const api = this.api;
      const url = api.fluent.request.url();
      return url.includesAll(["checkout", "/orderdetails/"], true) && !url.includes("status=fail", true);
    }
    /**
     * Get all of our scraper methods
     * You may make changes to the code inside the functions but please do not remove any of them. By default for clarity
     * they all hand back to methods defined on the parent class, this is a style thing more than anything though.
     *
     * Please return null from a scraper if it has no data or is not applicable e.g. we have no customer data
     * @returns {{basket: {state: (function())}, email: {state: (function())}, customer: {state: (function())}, order: {state: (function())}, product: {state: (function())}}}
     */
    scrapers() {
      const api = this.api;
      return {
        basket() {
          if (api.fluent.request.url().includesSome(basketURLs, true)) {
            return new promises_default((resolve, reject) => {
              setTimeout(resolve, 1500);
            }).then(() => {
              return mainBagScrape(api) || newMainBagScrape(api) || checkoutScraper(api);
            }).catch((err) => {
              if (typeof err === "string" && err.indexOf("timeout") > -1 || err.message && typeof err.message === "string" && err.message.indexOf("timeout") > -1) {
                return null;
              }
              throw err;
            });
          }
          return null;
        },
        customer() {
          return {
            firstName: api.fluent.getStringValue(selectors.firstName).done(),
            lastName: api.fluent.getStringValue(selectors.lastName).done()
          };
        },
        phone(eventTargets) {
          return phoneScrape(api, selectors.phone, eventTargets);
        },
        email(eventTargets) {
          return emailScrape(api, selectors.email, eventTargets);
        },
        order: () => {
          if (this.isPurchaseComplete()) {
            const idHtml = api.fluent.getTextContent(".finaltitle .processed b").done();
            const idDataLayer = getDataLayerValue("transaction_id");
            const referrer2 = api.fluent.fromValue(document.referrer);
            return {
              id: idHtml || idDataLayer,
              paymentType: referrer2.includes("mastercard", true) ? "Card" /* Card */ : null
            };
          }
          return null;
        },
        product() {
          return productScrape(api) || newProductScrape(api);
        },
        locale() {
          const url = api.fluent.request.url();
          if (url.includes("/en/", true)) {
            return "en";
          } else if (url.includes("/ar/", true)) {
            return "ar_AE";
          }
          return null;
        },
        tagBag() {
          return recommendedItemScrape(api);
        }
      };
    }
    /**
     * Get a list of events and other triggers to listen to
     * @returns {Object} an object of triggers
     */
    triggers() {
      const onChangeSelectors = [];
      onChangeSelectors.push(...selectors.email);
      onChangeSelectors.push(...selectors.firstName);
      onChangeSelectors.push(...selectors.lastName);
      onChangeSelectors.push(...selectors.phone.mobile);
      return {
        events: {
          change: onChangeSelectors
        },
        watch: [
          { selector: "body", options: { attributes: true } },
          { selector: 'div[data-role="page"]' },
          { selector: 'div[data-namespace="search-box-overlay"]' },
          { selector: ".product-pip-recommend" },
          // watch recommendation section on product page
          { selector: "#orderTotals .product-price" },
          // watch checkout prices,
          { selector: "#co-billing-form" },
          { selector: "#checkout-deliveryandassembly-load" },
          { selector: "div[class*=App_content]" },
          // new maincart
          { selector: ".js-product-pip" },
          // new product
          { selector: "div[data-mount-recommendations=pip-product-first]" }
          // new recommended items
        ]
      };
    }
  };

  // ../client-script-core/src/index.ts
  init_define_APP_CONFIG();
  var logTiny18 = __toESM(require_log_tiny());

  // ../client-script-core/src/browser_abstraction.ts
  init_define_APP_CONFIG();
  var on = (evnt, func, elem = window) => {
    if (elem && elem.addEventListener) {
      elem.addEventListener(evnt, func);
    }
  };
  var off = (evnt, func, elem = window) => {
    if (elem && elem.removeEventListener) {
      elem.removeEventListener(evnt, func);
    }
  };
  var location = () => {
    return window.location;
  };
  var browserWindow = () => {
    return window;
  };
  var topWindow = () => {
    let activeWindow = browserWindow();
    if (activeWindow !== activeWindow.top) {
      try {
        activeWindow.top.document;
        activeWindow = activeWindow.top;
      } catch (e) {
      }
    }
    return activeWindow;
  };
  var browserDocument = () => {
    return document;
  };
  var topDocument = () => {
    const currentWindow = browserWindow();
    let targetDocument = browserDocument();
    if (currentWindow !== currentWindow.top) {
      try {
        targetDocument = currentWindow.top.document;
      } catch (e) {
      }
    }
    return targetDocument;
  };
  var userAgent = () => {
    return browserWindow().navigator.userAgent;
  };
  var pageTitle = () => {
    return browserDocument().title;
  };
  var referrer = () => {
    return browserDocument().referrer;
  };
  var screenInfo = () => {
    const screen = browserWindow().screen;
    return {
      availHeight: screen.availHeight,
      availWidth: screen.availWidth,
      depth: screen.colorDepth,
      height: screen.height,
      width: screen.width
    };
  };
  var fireStateChangeEvents = () => {
    const newState = document.readyState;
    if (newState === "interactive") {
      if (browserWindow().__sc_contentReadyCBs) {
        browserWindow().__sc_contentReadyCBs.forEach((resolve) => resolve());
        delete browserWindow().__sc_contentReadyCBs;
      }
    } else if (newState === "complete") {
      if (browserWindow().__sc_contentReadyCBs) {
        browserWindow().__sc_contentReadyCBs.forEach((resolve) => resolve());
        delete browserWindow().__sc_contentReadyCBs;
      }
      if (browserWindow().__sc_domLoadedCBs) {
        browserWindow().__sc_domLoadedCBs.forEach((resolve) => resolve());
        delete browserWindow().__sc_domLoadedCBs;
      }
    }
  };
  if (document) {
    if (!document.onreadystatechange) {
      document.onreadystatechange = fireStateChangeEvents;
    } else {
      const original = document.onreadystatechange;
      document.onreadystatechange = (event) => {
        if (original && original.constructor && original.call && original.apply) {
          original.call(document, event);
        }
        fireStateChangeEvents();
      };
    }
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", fireStateChangeEvents);
      document.addEventListener("load", fireStateChangeEvents);
    }
  }
  var waitForDom = () => {
    const state = document.readyState;
    return new promises_default((resolve) => {
      if (state === "interactive" || state === "complete") {
        return resolve(void 0);
      }
      if (browserWindow().__sc_contentReadyCBs) {
        browserWindow().__sc_contentReadyCBs.push(resolve);
      } else {
        browserWindow().__sc_contentReadyCBs = [resolve];
      }
    });
  };
  var waitForOnLoad = () => {
    return new promises_default((resolve) => {
      if (document.readyState === "complete") {
        return resolve(void 0);
      }
      if (browserWindow().__sc_domLoadedCBs) {
        browserWindow().__sc_domLoadedCBs.push(resolve);
      } else {
        browserWindow().__sc_domLoadedCBs = [resolve];
      }
    });
  };
  var browserIsSupported = () => {
    const win6 = browserWindow();
    const doc = browserDocument();
    return !!(win6 && doc && win6.JSON && doc.querySelectorAll && !!Array.prototype.forEach && !!doc.querySelector && location().href && win6.btoa);
  };
  var browserIsSpider = () => {
    const re = /(bot|spider|scraper|crawl|agent|Mediapartners-Google|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|biglotron|teoma|convera|gigablast|ia_archiver|GingerCrawler|webmon |httrack|grub.org|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|panscient|IOI|ips-agent|yanga|Voyager|CyberPatrol|postrank|page2rss|linkdex|ezooms|heritrix|findthatfile|europarchive.org|Aboundex|summify|ec2linkfinder|facebookexternalhit|yeti|RetrevoPageAnalyzer|sogou|wotbox|ichiro|drupact|coccoc|integromedb|siteexplorer.info|proximic|changedetection|WeSEE:Search|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|binlar|A6-Indexer|ADmantX|MegaIndex|ltx71|BUbiNG|Qwantify|lipperhey|y!j-asr|AddThis|KTXN|Webmetrics|sessioncam|neustar|PingdomTMS|load|iplabel;|PhantomJS|Load)/i;
    return re.test(userAgent());
  };
  var createElement = (doc = browserDocument(), element, opts = {}) => {
    const elem = doc.createElement(element);
    if (typeof opts !== "object") {
      return elem;
    }
    for (const p in opts) {
      if ({}.hasOwnProperty.call(opts, p)) {
        elem.setAttribute(p, opts[p]);
      }
    }
    return elem;
  };
  var nodelistToArray = (nodes) => {
    const nodeArray = [];
    if (!nodes) {
      return nodeArray;
    }
    for (let i = 0; i < nodes.length; i += 1) {
      nodeArray.push(nodes[i]);
    }
    return nodeArray;
  };
  var SafeJson = class {
    static stringify(value, replacer, space) {
      const win6 = browserWindow();
      if (win6 && win6.sc_json) {
        return win6.sc_json.stringify(value, replacer, space);
      }
      return JSON.stringify(value, replacer, space);
    }
    static parse(text) {
      const win6 = browserWindow();
      if (win6 && win6.sc_json) {
        return win6.sc_json.parse(text);
      }
      return JSON.parse(text);
    }
  };

  // ../client-script-core/src/browser_capabilities.ts
  init_define_APP_CONFIG();
  var getInitialCapabilities = () => {
    return {
      canUseBeacon: null,
      canUseLocalStorage: null,
      canUseSessionStorage: null,
      canUseMutationObserver: null,
      canUsePostMessage: null,
      canUseXDomain: null,
      canUseXhr: null,
      canUseXhrCors: null
    };
  };

  // ../client-script-core/src/config.ts
  init_define_APP_CONFIG();
  var config_default = define_APP_CONFIG_default;

  // ../client-script-core/src/features/repop/index.ts
  init_define_APP_CONFIG();
  var logTiny2 = __toESM(require_log_tiny());

  // ../client-script-core/src/api/request.ts
  init_define_APP_CONFIG();
  var Request = class {
    /**
     * Lookup a query string value by key name
     * @param {string} name the key name you want to lookup
     * @param {string} [url=window.location.href] the url you want to lookup against (defaults to window href)
     * @returns {string|null} the value from the query string or null if not found
     */
    static getQueryStringParameter(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, "\\$&");
      const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`, "i");
      const results = regex.exec(url);
      if (!results) {
        return null;
      }
      if (!results[2]) {
        return null;
      }
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
  };

  // ../client-script-core/src/features/repop/RepopManager.ts
  init_define_APP_CONFIG();
  var logTiny = __toESM(require_log_tiny());

  // ../client-script-core/src/features/repop/helper.ts
  init_define_APP_CONFIG();
  function parseRepopParameter(repopParam) {
    if (repopParam.length === 0) {
      return [];
    }
    const items = [];
    const pairs = repopParam.split("&");
    const itemMap = {};
    pairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      if (!key || !value) {
        return;
      }
      const urlMatch = key.match(/^item(\d+)Url$/);
      if (urlMatch) {
        const index = parseInt(urlMatch[1], 10);
        if (!itemMap[index]) {
          itemMap[index] = {};
        }
        itemMap[index].url = decodeURIComponent(value);
      }
      const qtyMatch = key.match(/^item(\d+)Qty$/);
      if (qtyMatch) {
        const index = parseInt(qtyMatch[1], 10);
        if (!itemMap[index]) {
          itemMap[index] = {};
        }
        itemMap[index].qty = parseInt(value, 10);
      }
      const sizeMatch = key.match(/^item(\d+)Size$/);
      if (sizeMatch) {
        const index = parseInt(sizeMatch[1], 10);
        if (!itemMap[index]) {
          itemMap[index] = {};
        }
        itemMap[index].size = decodeURIComponent(value);
      }
      const colourMatch = key.match(/^item(\d+)Colour$/);
      if (colourMatch) {
        const index = parseInt(colourMatch[1], 10);
        if (!itemMap[index]) {
          itemMap[index] = {};
        }
        itemMap[index].colour = decodeURIComponent(value);
      }
    });
    Object.keys(itemMap).forEach((key) => {
      const index = parseInt(key, 10);
      const item = itemMap[index];
      if (item.url) {
        items.push({
          url: item.url,
          index,
          quantity: item.qty || 1,
          // Will be 1 if not provided
          size: item.size,
          // Include size if provided
          colour: item.colour
          // Include colour if provided
        });
      }
    });
    return items;
  }
  function isRepopImplementationValid(imp) {
    if (!imp.getRepopMainCartItemSelector || imp.getRepopMainCartItemSelector().length === 0 || !imp.getRepopMainCartURL || imp.getRepopMainCartURL().length === 0 || !imp.getRepopHomepageURL || imp.getRepopHomepageURL().length === 0 || !imp.getRepopSelectors || imp.getRepopSelectors(1).length === 0 || !imp.getRepopMainCartDeleteItemSelectors || imp.getRepopMainCartDeleteItemSelectors().length === 0) {
      return false;
    }
    let isValid = true;
    imp.getRepopSelectors(1).map((element) => {
      if (element.length === 0) {
        isValid = false;
      }
    });
    if (!isValid) {
      return false;
    }
    imp.getRepopMainCartDeleteItemSelectors().map((element) => {
      if (element.length === 0) {
        isValid = false;
      }
    });
    if (!isValid) {
      return false;
    }
    return isValid;
  }

  // ../client-script-core/src/features/repop/RepopManager.ts
  function checkDocReadyState(iframeDoc) {
    const readyState = iframeDoc.readyState;
    const hasBody = iframeDoc.body !== null;
    const hasDocumentElement = iframeDoc.documentElement !== null;
    if (readyState === "loading" || !hasBody || !hasDocumentElement) {
      logTiny.logInfo(`[REPOP] Iframe document is not ready - waiting before checking again...`);
      return false;
    }
    return true;
  }
  function getIframeDocument(iframe) {
    var _a;
    const iframeDoc = iframe.contentDocument || ((_a = iframe.contentWindow) == null ? void 0 : _a.document);
    if (!iframeDoc) {
      logTiny.logWarning("[REPOP] Cannot access cart iframe document - may be cross-origin");
      return null;
    }
    return iframeDoc;
  }
  var RepopManager = class {
    constructor(implementation2, repopParam) {
      this.items = [];
      this.totalItems = 0;
      this.successfulItems = 0;
      this.implementation = implementation2;
      this.repopParam = repopParam;
    }
    /**
     * Main entry point - starts the repopulation process
     * @returns {void}
     */
    process() {
      return __async(this, null, function* () {
        logTiny.logInfo("[REPOP] Starting repopulation process...");
        try {
          this.items = parseRepopParameter(this.repopParam);
          if (this.items.length === 0) {
            logTiny.logWarning("[REPOP] No valid items found in repop parameter");
            return;
          }
          const successfulCartClear = yield this.clearCart();
          if (successfulCartClear) {
            try {
              logTiny.logInfo("[REPOP] Cart cleared successfully, proceeding with repop process");
              yield this.processAllItems();
              logTiny.logInfo("[REPOP] Repopulation process completed");
            } catch (error) {
              logTiny.logError("[REPOP] Error processing items:", error);
              throw error;
            }
          } else {
            logTiny.logInfo("[REPOP] Unsuccessful cart clear");
            this.onUnsuccessfulCartClear(this.implementation);
          }
        } catch (error) {
          logTiny.logError("[REPOP] Error in repop process:", error);
          throw error;
        }
      });
    }
    /**
     * Handle an unsuccessful cart clear by redirecting to the maincart page
     * @param implementation {Implementation} The implementation to help determine the maincart URL
     * @returns {void}
     */
    onUnsuccessfulCartClear(implementation2) {
      const redirectUrl = implementation2.getRepopMainCartURL();
      if (redirectUrl) {
        logTiny.logInfo("[REPOP] Navigating to redirect URL due to unsuccessful cart clear:", redirectUrl);
        window.location.href = redirectUrl;
      }
    }
    /**
     * Clear the cart before repopulating items
     * @returns {Promise<boolean>} Promise that resolves & returns if the cart clearing was successful
     */
    clearCart() {
      return new promises_default((resolve) => {
        const checkCartSelector = this.implementation.getRepopMainCartItemSelector();
        if (!checkCartSelector || checkCartSelector.length === 0) {
          logTiny.logInfo("[REPOP] No cart item selector provided");
          return resolve(false);
        }
        const cartUrl = this.implementation.getRepopMainCartURL();
        const deleteCartIFrame = this.createInvisibleFrame(cartUrl);
        deleteCartIFrame.onload = () => {
          logTiny.logInfo("[REPOP] Cart page iframe loaded, waiting for cart items to appear...");
          const maxAttempts = 10;
          const pollInterval = 250;
          let attemptCount = 0;
          const checkForItems = () => {
            var _a;
            attemptCount++;
            try {
              const iframeDoc = deleteCartIFrame.contentDocument || ((_a = deleteCartIFrame.contentWindow) == null ? void 0 : _a.document);
              if (!iframeDoc) {
                logTiny.logWarning("[REPOP] Cannot access iframe document");
                this.removeIframe(deleteCartIFrame);
                return resolve(false);
              }
              const cartItems = iframeDoc.querySelectorAll(checkCartSelector);
              const itemCount = cartItems.length;
              if (itemCount > 0) {
                logTiny.logInfo("[REPOP] Found ", itemCount, " cart items using selector: ", checkCartSelector, " attempt ", attemptCount);
                this.clearCartItems(deleteCartIFrame).then((successful) => {
                  this.removeIframe(deleteCartIFrame);
                  resolve(successful);
                });
              } else if (attemptCount >= maxAttempts) {
                logTiny.logInfo("[REPOP] No items found in cart after ", attemptCount, " attempts");
                this.removeIframe(deleteCartIFrame);
                resolve(true);
              } else {
                setTimeout(checkForItems, pollInterval);
              }
            } catch (error) {
              logTiny.logError("[REPOP] Error checking for cart items:", error);
              this.removeIframe(deleteCartIFrame);
              resolve(false);
            }
          };
          setTimeout(checkForItems, 100);
        };
        deleteCartIFrame.onerror = () => {
          logTiny.logError("[REPOP] Error loading cart page iframe");
          this.removeIframe(deleteCartIFrame);
          resolve(false);
        };
        setTimeout(() => {
          logTiny.logWarning("[REPOP] Cart clearing timeout 30 seconds - continuing anyway");
          this.removeIframe(deleteCartIFrame);
          resolve(false);
        }, 3e4);
      });
    }
    /**
     * Loop that repeatedly checks for remove item selectors (in priority order) and clicks them until cart is empty
     * @param iframe {HTMLIFrameElement} The iframe containing the cart page
     * @returns {Promise<boolean>} Promise that resolves when cart is empty
     */
    clearCartItems(iframe) {
      return new promises_default((resolve) => {
        let previousElement = null;
        const checkAndRemove = () => {
          try {
            let iframeDoc = getIframeDocument(iframe);
            if (!iframeDoc) {
              return resolve(false);
            }
            const selectors2 = this.implementation.getRepopMainCartDeleteItemSelectors();
            let foundElement = null;
            for (let i = 0; i < selectors2.length; i++) {
              iframeDoc = getIframeDocument(iframe);
              if (!iframeDoc) {
                return resolve(false);
              }
              const isReady = checkDocReadyState(iframeDoc);
              if (!isReady) {
                setTimeout(() => {
                  checkAndRemove();
                }, 250);
                return;
              }
              const selector = selectors2[i];
              const elements = iframeDoc.querySelectorAll(selector);
              if (elements.length > 0) {
                foundElement = elements[0];
                logTiny.logInfo("[REPOP] Found ", elements.length, " items using selector ", selector);
                break;
              }
            }
            if (!foundElement) {
              logTiny.logInfo("[REPOP] No more items found in cart - clearing complete");
              return resolve(true);
            }
            if (previousElement === foundElement) {
              logTiny.logWarning("[REPOP] Attempted to click the same element twice in a row - skipping click but continuing");
            } else {
              this.clickElement(foundElement, iframeDoc);
              logTiny.logInfo("[REPOP] Clicked remove item button, waiting for cart to update...");
            }
            previousElement = foundElement;
            setTimeout(() => {
              checkAndRemove();
            }, 250);
          } catch (error) {
            logTiny.logError("[REPOP] Error in cart clearing loop:", error);
            resolve(false);
          }
        };
        checkAndRemove();
      });
    }
    /**
     * Create an invisible iframe that we can use to click stuff during the repop process
     * We will auto-append an SC_SCRIPT=REPOP param to turn off the script within these iframes
     * so we don't create extra impressions
     * @param cartUrl {string} The URL of the page to navigate to
     * @returns {HTMLIFrameElement} The created iframe element
     */
    createInvisibleFrame(cartUrl) {
      logTiny.logInfo("[REPOP] Creating iframe with URL: ", cartUrl);
      const separator = cartUrl.indexOf("?") !== -1 ? "&" : "?";
      const iframeSrc = `${cartUrl}${separator}SC_SCRIPT=REPOP`;
      const doc = browserDocument();
      const iframe = createElement(doc, "iframe", {
        style: `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
        max-width: 1200px;
        max-height: 800px;
        border: 3px solid #dc3545;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 1000000;
        background: white;
        opacity: 0;
      `,
        src: iframeSrc
      });
      const body = doc.body;
      if (body) {
        body.appendChild(iframe);
        logTiny.logInfo("[REPOP] Iframe appended to DOM");
      }
      return iframe;
    }
    /**
     * Remove an iframe from the DOM
     * @param iframe {HTMLIFrameElement} The iframe to remove
     */
    removeIframe(iframe) {
      logTiny.logInfo("[REPOP] Trying to remove iframe");
      try {
        if (iframe && iframe.parentNode) {
          logTiny.logInfo("[REPOP] Removing iframe from DOM");
          iframe.parentNode.removeChild(iframe);
        }
      } catch (error) {
        logTiny.logError("[REPOP] Error removing iframe:", error);
      }
    }
    /**
     * Attempt to click an element on the page
     * @param element {HTMLElement} The target element to click
     * @param iFrame {Document} The target iframe to try and click inside
     * @returns {void}
     */
    clickElement(element, iFrame) {
      if (element.click) {
        element.click();
      } else if (element.dispatchEvent) {
        const clickEvent = iFrame.createEvent("MouseEvents");
        clickEvent.initEvent("click", true, true);
        element.dispatchEvent(clickEvent);
      }
    }
    /**
     * Process all items by creating iframes for each one
     */
    processAllItems() {
      return __async(this, null, function* () {
        return new promises_default((resolve) => {
          const promises = this.items.map((item) => this.processItem(item));
          promises_default.all(promises).then((processedItems) => {
            logTiny.logInfo("[REPOP] All repop items processed");
            const processReturnValue = (value) => {
              this.totalItems++;
              if (value === true) {
                this.successfulItems++;
              }
            };
            processedItems.forEach(processReturnValue);
            logTiny.logInfo("[REPOP] Successfully processed ", this.successfulItems, "/", this.totalItems, " items");
            this.onAllItemsComplete(this.successfulItems > 0);
            return resolve();
          }).catch((error) => {
            logTiny.logError("[REPOP] Error processing repop items:", error);
            this.onAllItemsComplete(true);
            return resolve();
          });
        });
      });
    }
    /**
     * Process a single item by creating an invisible iframe and clicking elements
     * @param item {RepopItem} The item to process
     * @returns {Promise<boolean>} Promise that resolves when the item is processed
     */
    processItem(item) {
      return new promises_default((resolve) => {
        const quantity = item.quantity || 1;
        logTiny.logInfo("[REPOP] Processing item", "URL:", item.url, "Quantity:", quantity, "Size:", item.size || "none", "Colour:", item.colour || "none");
        const selectors2 = this.implementation.getRepopSelectors(quantity, item.size, item.colour);
        if (!selectors2 || selectors2.length === 0) {
          logTiny.logWarning("[REPOP] No selectors provided for item ", item.index);
          return resolve(false);
        }
        const iframe = this.createInvisibleFrame(item.url);
        iframe.onload = () => {
          logTiny.logInfo("[REPOP] Iframe for item ", item.index, " loaded, waiting 1 second before accessing document...");
          setTimeout(() => {
            try {
              logTiny.logInfo("[REPOP] Iframe created for item ", item.index, " starting to click elements...");
              this.clickElementsInIframe(iframe, selectors2).then((success) => {
                logTiny.logInfo("[REPOP] Processed item ", item.index);
                resolve(success);
              }).catch((error) => {
                logTiny.logError("[REPOP] Error processing item ", item.index, error);
                resolve(false);
              });
            } catch (error) {
              logTiny.logError("[REPOP] Error accessing iframe for item ", item.index, error);
              resolve(false);
            }
          }, 1e3);
        };
        iframe.onerror = () => {
          logTiny.logError("[REPOP] Error loading iframe for item ", item.index);
          resolve(false);
        };
        setTimeout(() => {
          logTiny.logWarning("[REPOP] Timeout processing item ", item.index);
          resolve(false);
        }, 3e4);
      });
    }
    /**
     * Click elements in the iframe document using the provided selectors
     * @param iframeDoc {Document} The iframe's document
     * @param selectors {Array<string>} Array of CSS selectors to click
     * @returns {Promise<boolean>} Promise that resolves when all clicks are complete
     */
    clickElementsInIframe(iframe, selectors2) {
      return new promises_default((resolve) => {
        try {
          let clickIndex = 0;
          const nextSelector = () => {
            if (clickIndex >= selectors2.length) {
              return resolve(true);
            }
            const selector = selectors2[clickIndex];
            const isLastSelector = clickIndex === selectors2.length - 1;
            const maxAttempts = 10;
            const pollInterval = 250;
            let attemptCount = 0;
            const tryFindAndClick = () => {
              attemptCount++;
              try {
                const iframeDoc = getIframeDocument(iframe);
                if (!iframeDoc) {
                  return resolve(false);
                }
                const isReady = checkDocReadyState(iframeDoc);
                if (!isReady) {
                  setTimeout(() => {
                    tryFindAndClick();
                  }, 250);
                  return;
                }
                const elements = iframeDoc.querySelectorAll(selector);
                if (elements.length === 0) {
                  if (attemptCount >= maxAttempts) {
                    logTiny.logWarning("[REPOP] No elements found for selector: ", selector, " after ", attemptCount, "attempts - cannot safely continue");
                    return resolve(false);
                  } else {
                    logTiny.logInfo("[REPOP] No elements found for selector: ", selector, " - attempt ", attemptCount, "/", maxAttempts, ", retrying...");
                    setTimeout(tryFindAndClick, pollInterval);
                    return;
                  }
                }
                const element = elements[0];
                this.clickElement(element, iframeDoc);
                logTiny.logInfo("[REPOP] Clicked element with selector: ", selector, " - attempt ", attemptCount);
                if (isLastSelector) {
                  logTiny.logInfo("[REPOP] Final selector clicked - waiting for cart page to finish processing");
                  clickIndex++;
                  setTimeout(nextSelector, 2500);
                } else {
                  clickIndex++;
                  setTimeout(nextSelector, 250);
                }
              } catch (error) {
                logTiny.logError("[REPOP] Error finding element with selector: ", selector, " - attempt ", attemptCount, error);
                if (attemptCount >= maxAttempts) {
                  return resolve(false);
                } else {
                  setTimeout(tryFindAndClick, pollInterval);
                }
              }
            };
            return tryFindAndClick();
          };
          nextSelector();
        } catch (error) {
          logTiny.logError("[REPOP] Error clicking elements in iframe:", error);
          resolve(false);
        }
      });
    }
    /**
     * Called when all items have been processed
     * Hides the holding screen and redirects to either the home page or the cart page
     * depending on if at least one item was successfully added to the cart
     */
    onAllItemsComplete(cartRedirect) {
      let redirectUrl = this.implementation.getRepopMainCartURL();
      if (!cartRedirect) {
        logTiny.logInfo(`[REPOP] No items successfully added to cart - redirecting to homepage instead`);
        redirectUrl = this.implementation.getRepopHomepageURL();
      }
      if (redirectUrl) {
        logTiny.logInfo("[REPOP] Redirecting to ", redirectUrl);
        window.location.href = redirectUrl;
      } else {
        logTiny.logWarning("[REPOP] No redirect URL provided, staying on current page");
      }
    }
  };

  // ../client-script-core/src/features/repop/index.ts
  function repop_default(featureInterface, implementation2, browserCapabilities2) {
    return __async(this, null, function* () {
      logTiny2.logInfo("[REPOP] Checking for repop parameter in URL...");
      const repopParam = Request.getQueryStringParameter("SC_REPOP");
      const repopManager = new RepopManager(implementation2, repopParam);
      const wdw = window;
      if (typeof window !== "undefined" && wdw.__repopTestMode) {
        wdw.__repopManager = repopManager;
        if (typeof wdw.__repopTestSpySetup === "function") {
          wdw.__repopTestSpySetup(repopManager);
        }
      }
      if (!repopParam) {
        logTiny2.logInfo("[REPOP] No repop parameter found, skipping repop feature");
        return;
      }
      const repopFunctionsPresent = isRepopImplementationValid(implementation2);
      if (!repopFunctionsPresent) {
        logTiny2.logWarning(
          "[REPOP] Repop feature enabled but not all required functions have valid implementations"
        );
        return;
      }
      logTiny2.logInfo("[REPOP] Repop parameter found:", repopParam);
      try {
        yield repopManager.process();
      } catch (error) {
        logTiny2.logError(error);
      }
    });
  }

  // ../client-script-core/src/main.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/domPoller.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/mutationObserver.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/api/page.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/api/strings.ts
  init_define_APP_CONFIG();
  var Strings = class {
    /**
     * gets the first values that matches the provided regex
     * @param {string} src the string to get the value of
     * @param {string} regex the regex to match against
     * @returns {string|null} the first value that matches, or null if none matched
     */
    static firstMatch(src, regex) {
      if (!src) {
        return null;
      }
      const matches = src.match(regex);
      if (!matches || matches.length === 0) {
        return null;
      }
      return matches[0];
    }
    /**
     * extract a substring from between two other substrings
     * @param {string} src the string to test against
     * @param {string} start the first string to match against
     * @param {boolean} end the last string to match against
     * @returns {string} the string between the start and end strings
     */
    static between(src, start, end) {
      let startIndex = src.indexOf(start);
      const endIndex = src.indexOf(end);
      if (startIndex < 0 || endIndex < 0 || startIndex >= endIndex) {
        return null;
      }
      startIndex += start.length;
      return src.substring(startIndex, endIndex);
    }
    /**
     * tests to see if one string includes another
     * @param {string} stringToTest the string to test against
     * @param {string} stringToTestFor the string you want to look for in the stringToTest
     * @param {boolean} caseInsensitive ignore case when testing
     * @returns {bool} true if the stringToTestFor is in the stringToTest else false
     */
    static includes(stringToTest, stringToTestFor, caseInsensitive = false) {
      if (!stringToTest || !stringToTestFor) {
        return false;
      }
      if (caseInsensitive) {
        return stringToTest.toUpperCase().indexOf(stringToTestFor.toUpperCase()) > -1;
      }
      return stringToTest.indexOf(stringToTestFor) > -1;
    }
    static clean(str) {
      if (!str) {
        return str;
      }
      return str.replace(/[\n\r]/g, " ").replace(/\s{2,10}/g, " ").trim();
    }
    /**
     * Removes the protocol from the url.
     *
     * For example:
     * https://www.example.org -> www.example.org
     * @param {string} url the url from which the protocol is to be removed
     * @returns {string} the url with the protocol removed if present
     */
    static stripProtocol(url) {
      const protocolRemovalRegex = /^https?:\/\//;
      if (!url) {
        return null;
      }
      return url.replace(protocolRemovalRegex, "");
    }
    /**
    * Capitalizes the first letter of each word.
    *
    * For example:
    * standard room -> Standard Room
    * @param {string} str the un capitalized string
    * @returns {string} the capitalized string
    */
    static capitalizeString(str) {
      if (!str) {
        return null;
      }
      return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }
    /**
     * Check if the string ends with the specified string
     * @param {string} stringToTest the string to check
     * @param {string} stringToTestFor the value contained within the string
     * @param {number} position Optional. If provided starts the match from the length of the string minus the second argument.If omitted, the default value is the length of the string.
     * @param {boolean} caseInsensitive perform case insensetive check
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
     */
    static endsWith(stringToTest, stringToTestFor, position, caseInsensitive = false) {
      if (!stringToTest) {
        return false;
      }
      const subjectString = caseInsensitive ? stringToTest.toUpperCase() : stringToTest;
      const searchString = caseInsensitive ? stringToTestFor.toUpperCase() : stringToTestFor;
      if (subjectString.endsWith) {
        return subjectString.endsWith(searchString, position || subjectString.length);
      }
      if (typeof position !== "number" || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      const lastIndex = subjectString.lastIndexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    }
  };
  Strings.regexList = {
    EMAIL: new RegExp(/^\s*(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/),
    NUMBER: new RegExp(/[\d]+(?:[.]?[\d]+)*/),
    PRICE: new RegExp(/[\d]+(?:[,.]?[\d]+)*/)
  };

  // ../client-script-core/src/api/page.ts
  var Page = class _Page {
    /**
    * gets all page elements that match the provided selector
    * @param {string|Array<string>} selector the css selector or selectors to get the elements by
    * @param {HTMLElement} container the parent element to select elements from
    * @returns {Array<HTMLElement>} an array of matching elements
    */
    static querySelectorAll(selector, container = browserDocument()) {
      if (typeof selector === "string") {
        return nodelistToArray(container.querySelectorAll(selector));
      }
      let results = [];
      for (let i = 0; i < selector.length; i += 1) {
        const subSelector = selector[i];
        results = results.concat(nodelistToArray(container.querySelectorAll(subSelector)));
      }
      results = results.filter((item) => {
        return item !== null && item !== void 0;
      });
      return results;
    }
    /**
     * gets the first page element that matches the provided selector. Selectors are CSS selectors much the same as jQuery
     * @see {@link https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors}
     * @param {string|Array<string>} selector the css selector to get the element by
     * @param {HTMLElement} container the parent element to select elements from
     * @returns {object|undefined} the element or undefined if not found
     */
    static querySelector(selector, container = browserDocument()) {
      if (typeof selector === "string") {
        return container.querySelector(selector);
      }
      for (let i = 0; i < selector.length; i += 1) {
        const el = container.querySelector(selector[i]);
        if (el) {
          return el;
        }
      }
      return void 0;
    }
    /**
     * gets the value from a named attribute on the provided page element
     * @param {string} attributeName the name of the attribute to get the value for
     * @param {Element} element the element you want to get the value for
     * @returns {string|undefined} the element's attribute value or undefined
     */
    static getAttribute(attributeName, element, clean = true) {
      if (!element) {
        return void 0;
      }
      const value = element.getAttribute(attributeName);
      if (value) {
        if (clean) {
          return Strings.clean(value);
        }
        return value;
      }
      return void 0;
    }
    /**
    * Returns true if the element would be selected by the specified selector string; otherwise, returns false.
    * @param {element}
    * @param {string} selectorString is a string representing the selector to test.
    * @returns {bool} the return value true or false.
    */
    static matches(element, selectorString) {
      const proto = Element.prototype;
      const matches = proto.matches || proto.webkitMatchesSelector || proto.msMatchesSelector || proto.mozMatchesSelector || proto.oMatchesSelector;
      if (matches) {
        return matches.call(element, selectorString);
      }
      return false;
    }
    /**
    * Returns true if the element would be selected by any of the specified selector strings in a provided array; otherwise, returns false.
    * @param {element}
    * @param {Array<string>} selectorStringArray is a string array representing the selectors to test.
    * @returns {bool} the return value true or false.
    */
    static matchesSome(element, selectorStringArray) {
      if (selectorStringArray && Array.isArray(selectorStringArray) && selectorStringArray.length > 0) {
        return selectorStringArray.some((selectorString) => this.matches(element, selectorString));
      }
      return false;
    }
    /**
     * Returns the closes element which matches the specified selector, uses native selector method if available
     * @param element {element} the base element
     * @param selector {string} the selector to search for
     */
    static closest(element, selector) {
      if (element.closest) {
        return element.closest(selector);
      }
      for (; element && element !== document; element = element.parentNode) {
        if (this.matches(element, selector)) {
          return element;
        }
      }
      return null;
    }
    /**
     * gets the value from a provided page element
     * @param {HTMLElement} element the element to get the value from
     * @returns {string|undefined} the element's value or undefined
     */
    static valueOf(element, clean = true) {
      if (!element) {
        return void 0;
      }
      const elType = _Page.getAttribute("type", element);
      if (elType === "checkbox" || elType === "radio") {
        return (!!element.checked).toString();
      }
      const value = element.value;
      if (value) {
        if (clean) {
          return Strings.clean(value);
        }
        return value;
      }
      if (element.tagName !== "SELECT" && element.childNodes && element.childNodes.length > 0) {
        const textNodes = nodelistToArray(element.childNodes).filter((childNode) => {
          return childNode.nodeType === 3 && !!Strings.clean(childNode.nodeValue);
        });
        if (textNodes.length === 0) {
          return void 0;
        }
        const nodeValue = textNodes[0].nodeValue;
        if (nodeValue) {
          if (clean) {
            return Strings.clean(nodeValue);
          }
          return nodeValue;
        }
      }
      return void 0;
    }
    /**
     * Check if an input has been checked
     * @param {HTMLInputElement} element the input element
     * @returns {boolean} true if the input box has been checked, else false (defaults to false if the input is not available or has no checked attribute)
     */
    static isChecked(element) {
      if (!element) {
        return false;
      }
      return !!element.checked;
    }
    static isFocused(element, document2 = browserDocument()) {
      if (!element) {
        return false;
      }
      return document2.activeElement === element;
    }
    /**
     * gets the current page location
     * @returns {Location} the browser's location object
     */
    static location() {
      return location();
    }
    /**
     * gets the current browser window object
     * @returns {Window}  the browser window of the current document
     */
    static window() {
      return browserWindow();
    }
    /**
     * gets the document the script is in
     * @returns {Document}  the browser's location object
     */
    static document() {
      return browserDocument();
    }
    /**
     * gets the topmost document we can access
     * @returns {Document}  the topmost browser document we can access
     */
    static topDocument() {
      return topDocument();
    }
    /**
     * gets a reference to the top level element in a frame
     * @param {HTMLElement} element the iframe element
     * @return {HTMLElement | undefined} the root element inside the frame
     */
    static frameContent(element) {
      if (!element) {
        return void 0;
      }
      const castIframe = element;
      if (castIframe.contentDocument || castIframe.contentWindow && castIframe.contentWindow.document) {
        const iFrameDocument = castIframe.contentDocument || castIframe.contentWindow.document;
        if (iFrameDocument && iFrameDocument.documentElement) {
          return iFrameDocument.documentElement;
        }
      }
      return void 0;
    }
    /**
     * Wrapper around the DomContentLoaded event to make it cross browser compatible
     * this function will call your callback when the dom is interactive.
     *
     * If called after the dom is initialised, your promise will resolve immediately
     * */
    static waitForDom() {
      return waitForDom();
    }
  };

  // ../client-script-core/src/mutationObserver.ts
  var import_log_tiny = __toESM(require_log_tiny());
  var debouncedMutationEvent;
  var debouncedOnRebindEvents;
  function debounce(callback, wait, context = this) {
    let timeout = null;
    let callbackArgs = null;
    const later = () => callback.apply(context, callbackArgs);
    return function() {
      callbackArgs = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  var sendMutationEvent = (records, featureInterface, delay, rtmTrigger) => {
    let shouldSend = true;
    for (const record of records) {
      if (record.addedNodes.length) {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains("sc-rtm-injected")) {
              shouldSend = false;
            }
          }
        });
      }
    }
    if (!shouldSend) {
      import_log_tiny.default.logInfo("Not sending mutation event as one of the added nodes is a rtm-triggered element");
      return;
    }
    window.setTimeout(() => {
      if (rtmTrigger) {
        const rtmListener = featureInterface.getRtmListener();
        if (rtmListener) {
          rtmListener.triggerUntriggeredRTMs();
        }
      }
      featureInterface.scrapeState({}, [{
        clientSideOnly: true,
        rebindEvents: true,
        name: "DOMMUTATION"
      }]);
    }, delay || 0);
  };
  var observers = [];
  function canUseMutationObserver(browserCapabilities2) {
    if (browserCapabilities2.canUseMutationObserver === null) {
      browserCapabilities2.canUseMutationObserver = !!window.MutationObserver;
    }
    return browserCapabilities2.canUseMutationObserver;
  }
  function setupMutationObserver(featureInterface, watchers, bannedSelectors2, debounceTimeout) {
    if (!debouncedMutationEvent) {
      debouncedMutationEvent = sendMutationEvent;
      if (debounceTimeout > 0) {
        debouncedMutationEvent = debounce(sendMutationEvent, debounceTimeout);
      }
    }
    watchers.forEach((mutationRequest) => {
      const observer = new MutationObserver((records) => {
        debouncedMutationEvent(records, featureInterface, mutationRequest.delay, mutationRequest.rtmTrigger);
      });
      const context = mutationRequest.context || document;
      const els = context.querySelectorAll(mutationRequest.selector);
      if (!els || els.length < 1) {
        return;
      }
      for (let i = 0; i < els.length; i++) {
        if (!mutationRequest.options || mutationRequest.options.attributes !== true || Object.keys(mutationRequest.options).length > 1) {
          bannedSelectors2.forEach((bannedSelector) => {
            if (Page.matches(els[i], bannedSelector)) {
              throw new Error(`${mutationRequest.selector} MATCHES THE BANNED WATCH ELEMENT: ${bannedSelector}.`);
            }
          });
        }
        observer.observe(els[i], mutationRequest.options || { childList: true, subtree: true, characterData: true });
        observers.push(observer);
      }
    });
  }
  function onRebindEvents(featureInterface, watchers, bannedSelectors2, debounceTimeout) {
    observers.forEach((observer) => {
      observer.disconnect();
    });
    observers = [];
    setupMutationObserver(featureInterface, watchers, bannedSelectors2, debounceTimeout);
  }
  function init(featureInterface, watchers, bannedSelectors2, debounceTimeout = 250) {
    setupMutationObserver(featureInterface, watchers, bannedSelectors2, debounceTimeout);
    if (!debouncedOnRebindEvents) {
      debouncedOnRebindEvents = () => onRebindEvents(featureInterface, watchers, bannedSelectors2, debounceTimeout);
      if (debounceTimeout > 0) {
        debouncedOnRebindEvents = debounce(debouncedOnRebindEvents, debounceTimeout);
      }
    }
    featureInterface.eventBus.onRebindEvents(debouncedOnRebindEvents);
  }

  // ../client-script-core/src/domPoller.ts
  var DEFAULT_INTERVAL = 1e3;
  var bannedSelectors = [
    "head",
    "html"
  ];
  var getInnerHTMLlength = (el) => {
    return (el && el.innerHTML ? el.innerHTML.length : 0) || 0;
  };
  var getAttributesString = (el) => {
    if (!el || !el.attributes) {
      return "";
    }
    let result = "";
    for (let i = 0; i < el.attributes.length; i += 1) {
      result += `${el.attributes[i]};`;
    }
    return result;
  };
  var ElementPoller = class {
    /**
     * Element polling class to observe changes in elements
     * @param watchConf {Object} the config for the element to watch (must have a selector)
     * @param featureInterface {Object} the feature inrerface to trigger events on
     * @constructor
     */
    constructor(watchConf, featureInterface, debounceTimeout = 250) {
      if (!watchConf || !watchConf.selector) {
        throw new Error("Can not create a dom poller without a selector");
      }
      this.featureInterface = featureInterface;
      this.selector = watchConf.selector;
      this.context = watchConf.context || document;
      this.options = watchConf.options || {};
      this.delay = debounceTimeout + watchConf.delay || 0;
      this.contentLength = this.getLengthToCompare();
    }
    /**
     * Set up our interval to observe the element with the interval supplied in the config or our default interval
     * @param [interval=1000] the interval time (defaults to the our default interval time if not supplied)
     */
    setupInterval(interval = DEFAULT_INTERVAL) {
      window.setInterval(() => this.intervalCallback(), interval);
    }
    getLengthToCompare() {
      const el = this.getElement();
      if (this.options.attributes) {
        return getAttributesString(el).length;
      }
      return getInnerHTMLlength(el);
    }
    /**
     * Get the element we want to look for from the dom
     * @returns {Element|null} the element or null if not found
     */
    getElement() {
      return this.context.querySelector(this.selector);
    }
    /**
     * Callback function for the interval to check the element's new length
     * against the length we have stored for it
     */
    intervalCallback() {
      const length = this.getLengthToCompare();
      if (length === this.contentLength) {
        return;
      }
      setTimeout(() => {
        this.featureInterface.scrapeState({}, [{
          clientSideOnly: true,
          rebindEvents: true,
          data: {
            newLength: length,
            originalLength: this.contentLength
          },
          name: "MUTATION:LENGTH_CHANGED"
        }]);
      }, this.delay);
      this.contentLength = length;
    }
  };
  function init2(featureInterface, browserCapabilities2, debounceTimeout = 250) {
    if (!featureInterface.triggers || !Array.isArray(featureInterface.triggers.watch) || featureInterface.triggers.watch.length < 1) {
      return;
    }
    const runnableWatchers = featureInterface.triggers.watch.filter((watcher) => {
      if (watcher.shouldRun) {
        return watcher.shouldRun();
      }
      return true;
    });
    if (runnableWatchers) {
      runnableWatchers.forEach((triggerConfig) => {
        if (!triggerConfig || !triggerConfig.options) {
          return;
        }
        if (triggerConfig.options.attributes && triggerConfig.options.subtree) {
          throw new Error("Because we need to support IE9/10, combining attributes and subtree on a watcher is not supported. Either use multiple watchers or remove one of the options");
        }
      });
    }
    if (canUseMutationObserver(browserCapabilities2)) {
      return init(featureInterface, runnableWatchers, bannedSelectors, debounceTimeout);
    }
    runnableWatchers.forEach((watchConf) => {
      const poller = new ElementPoller(watchConf, featureInterface, debounceTimeout);
      poller.setupInterval();
    });
  }

  // ../client-script-core/src/legacy-sessions/index.ts
  init_define_APP_CONFIG();
  var logTiny5 = __toESM(require_log_tiny());

  // ../client-script-core/src/message_channel/channels/postmessage/index.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/uuid.ts
  init_define_APP_CONFIG();
  var v4 = (a) => {
    return a ? (
      // a random number from 0 to 15
      (a ^ // unless b is 8,
      Math.random() * 16 >> a / 4).toString(16)
    ) : `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(
      // replacing
      /[018]/g,
      // zeroes, ones, and eights with
      v4
      // random hex digits
    );
  };

  // ../client-script-core/src/message_channel/channels/postmessage/frame_store.ts
  init_define_APP_CONFIG();
  var import_object_assign = __toESM(require_object_assign());
  var logTiny4 = __toESM(require_log_tiny());
  var messageListenerChannelCallbacks = [];
  var framesNotCreated = {};
  var framesNotReady = {};
  var postMessageStore = {};
  var frameTimeouts = {};
  var urlToGuidMapping = {};
  var postMessageToFrame = (frameSource, payload) => {
    frameSource.postMessage(payload, "*");
  };
  var handleFrameReady = (message, messageData) => {
    if (messageData.messageType !== "FRAME_READY") {
      return false;
    }
    const postMessageClosure = (payload) => {
      return postMessageToFrame(message.source, payload);
    };
    const isConnectedClosure = () => {
      return !!message.source;
    };
    const receivedFrameGuid = messageData.frameGuid;
    const onReadyData = framesNotReady[receivedFrameGuid];
    if (onReadyData) {
      clearTimeout(frameTimeouts[receivedFrameGuid]);
      delete frameTimeouts[receivedFrameGuid];
      const clonedData = (0, import_object_assign.default)({}, onReadyData);
      postMessageStore[receivedFrameGuid] = {
        isConnected: isConnectedClosure,
        postMessage: postMessageClosure
      };
      delete framesNotReady[receivedFrameGuid];
      clonedData.onReadyCallbacks.forEach((callback) => {
        callback(null, postMessageClosure);
      });
    }
    return true;
  };
  var registerForMessageCallbacks = (channelGuid, callback) => {
    messageListenerChannelCallbacks.push({
      callback,
      channelGuid
    });
  };
  var initIframe = (url, callback) => {
    if (true) {
      const createIframeInfo = (createUrl, createCallback) => {
        const frameGuid = v4();
        urlToGuidMapping[createUrl] = frameGuid;
        let urlWithId;
        if (createUrl.indexOf("?") > -1) {
          urlWithId = `${createUrl}&sc_frame_id=${frameGuid}`;
        } else {
          urlWithId = `${createUrl}?sc_frame_id=${frameGuid}`;
        }
        return {
          frameGuid,
          frameUrl: createUrl,
          frameUrlWithGuid: urlWithId,
          iFrameElement: null,
          onReadyCallbacks: [createCallback]
        };
      };
      const awaitIframeReady = (notReadyCollection, frameTimeoutCollection, notReadyframeInfo) => {
        const timeoutFunction = () => {
          const localFramesNotReady = notReadyCollection;
          const frameUrl = notReadyframeInfo.frameUrl;
          const frameTimeoutGuid = notReadyframeInfo.frameGuid;
          const clonedAwaitingReadyCallbacks = localFramesNotReady[frameTimeoutGuid].onReadyCallbacks.slice(0);
          clonedAwaitingReadyCallbacks.forEach((onReadyCallback) => {
            onReadyCallback({
              frameUrl,
              name: "POSTFRAME_UNAVAILABLE"
            }, null);
          });
          delete localFramesNotReady[frameTimeoutGuid];
        };
        frameTimeoutCollection[notReadyframeInfo.frameGuid] = setTimeout(timeoutFunction, 7500);
        setTimeout(() => {
          try {
            notReadyframeInfo.frameInDocument.setAttribute("src", notReadyframeInfo.frameUrlWithGuid);
          } catch (e) {
            logTiny4.logError(e);
          }
        }, 0);
      };
      const createIFrameInDocument = (createFrameInfo) => {
        const frameElement = browserDocument().createElement("iframe");
        frameElement.setAttribute("target", "_self");
        frameElement.setAttribute("title", `SaleCycle Frame ${createFrameInfo.frameGuid.substring(0, 8)}`);
        frameElement.style.display = "none";
        frameElement.style.height = "0px";
        frameElement.style.width = "0px";
        createFrameInfo.iFrameElement = frameElement;
        createFrameInfo.frameInDocument = browserDocument().head.appendChild(createFrameInfo.iFrameElement);
        framesNotReady[createFrameInfo.frameGuid] = createFrameInfo;
        awaitIframeReady(framesNotReady, frameTimeouts, createFrameInfo);
      };
      const createUncreatedFrames = () => {
        for (const prop in framesNotCreated) {
          if ({}.hasOwnProperty.call(framesNotCreated, prop) && !!framesNotCreated[prop]) {
            createIFrameInDocument(framesNotCreated[prop]);
          }
        }
        framesNotCreated = {};
      };
      const frameInfo = createIframeInfo(url, callback);
      framesNotCreated[frameInfo.frameGuid] = frameInfo;
      waitForDom().then(() => {
        createUncreatedFrames();
      });
      return;
    } else {
      throw new Error("Attempted to create iframe when iframe usage has been excluded");
    }
  };
  var getPostMessageReference = (url, callback) => {
    const frameGuid = urlToGuidMapping[url];
    if (frameGuid) {
      const existingMessageWindow = postMessageStore[frameGuid];
      if (existingMessageWindow) {
        if (existingMessageWindow.isConnected()) {
          return callback(null, existingMessageWindow.postMessage);
        } else {
          delete urlToGuidMapping[url];
          delete postMessageStore[frameGuid];
        }
      }
      if (framesNotCreated[frameGuid]) {
        return framesNotCreated[frameGuid].onReadyCallbacks.push(callback);
      }
      if (framesNotReady[frameGuid]) {
        return framesNotReady[frameGuid].onReadyCallbacks.push(callback);
      }
    }
    initIframe(url, callback);
  };
  var getHost = (href) => {
    const temp = browserDocument().createElement("a");
    temp.href = href;
    return temp.host;
  };
  var handleFrameError = (message, messageData) => {
    if (messageData && messageData.error && !messageData.frameId) {
      throw new Error(messageData.error);
    }
    const frameId = messageData.frameId;
    if (frameTimeouts[frameId]) {
      clearTimeout(frameTimeouts[frameId]);
    }
    framesNotReady[frameId].onReadyCallbacks.forEach((callback) => callback(messageData.error));
  };
  on("message", (message) => {
    if (browserWindow() === message.source) {
      return;
    }
    const origin = getHost(message.origin || message.originalEvent && message.originalEvent.origin);
    let urlFromMapping = false;
    for (const key in urlToGuidMapping) {
      if (urlToGuidMapping[key] && getHost(key) === origin) {
        urlFromMapping = true;
        break;
      }
    }
    if (!urlFromMapping && origin !== getHost(config_default.remoteStateStoreUrl)) {
      return;
    }
    let messageData;
    try {
      messageData = SafeJson.parse(message.data);
    } catch (ex) {
      logTiny4.logError(ex);
      return;
    }
    if (messageData && messageData.error) {
      return handleFrameError(message, messageData);
    }
    if (handleFrameReady(message, messageData)) {
      return;
    }
    messageListenerChannelCallbacks.forEach((channelInfo) => {
      if (messageData.channelGuid && messageData.channelGuid === channelInfo.channelGuid) {
        channelInfo.callback(messageData.err, messageData.ticket);
      }
    });
  });

  // ../client-script-core/src/message_channel/channels/postmessage/index.ts
  var win = browserWindow();
  var PostMessageChannel = class _PostMessageChannel {
    /**
     * Check if this browser is capable of supporting this message channel
     * @param browserCapabilitiesState {Object} the current browser's known capabilities
     * @returns {boolean} true if supported else false
     */
    // tslint:disable-next-line:function-name
    static canUsePostMessage(browserCapabilitiesState) {
      if (browserCapabilitiesState.canUsePostMessage === null) {
        browserCapabilitiesState.canUsePostMessage = !!win.postMessage;
      }
      return browserCapabilitiesState.canUsePostMessage;
    }
    /**
     * Get a post message channel
     * @param browserCapabilities
     * @returns {IChannel|null}
     */
    // tslint:disable-next-line:function-name
    static getChannel(browserCapabilities2) {
      if (!_PostMessageChannel.canUsePostMessage(browserCapabilities2)) {
        return null;
      }
      return new _PostMessageChannel();
    }
    /* tslint:enable:variable-name */
    constructor() {
      this.ChannelGuid = v4();
      this.TicketQueue = {};
      this.RegisteredForMessages = false;
    }
    /**
     * Send a message via the channel
     * @param url {string} the url to send the message to
     * @param payload {Object} the JSON stinifyable object to send
     */
    sendMessage(url, payload) {
      this.listenForMessages();
      return new promises_default((resolve, reject) => {
        getPostMessageReference(url, (err, postMessageClosure) => {
          if (err) {
            return reject(err);
          }
          const ticketGuid = v4();
          const channelTicket = {
            channelGuid: this.ChannelGuid,
            ticket: {
              payload,
              ticketGuid
            }
          };
          const stringifiedTicket = SafeJson.stringify(channelTicket);
          this.TicketQueue[ticketGuid] = (e, result) => {
            return e ? reject(e) : resolve(result);
          };
          postMessageClosure(stringifiedTicket, "*");
        });
      });
    }
    /**
     * Register on the frame store for messages
     * Calls the onTicketReceived method when we get a message
     */
    listenForMessages() {
      if (!this.RegisteredForMessages) {
        this.RegisteredForMessages = true;
        registerForMessageCallbacks(this.ChannelGuid, (err, ticket) => this.onTicketReceived(err, ticket));
      }
    }
    /**
     * Handle messages coming back from the frame store. Here we delete
     * the message out of the queue
     * @param err {Object|null} the error that occurred or null if no error
     * @param ticket {Object} the ticket that was sent
     */
    onTicketReceived(err, ticket = {}) {
      const ticketCallback = this.TicketQueue[ticket.ticketGuid];
      if (ticketCallback) {
        ticketCallback(err, ticket.payload);
        delete this.TicketQueue[ticket.ticketGuid];
      }
    }
  };

  // ../client-script-core/src/objects/clean_object.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/objects/is_object.ts
  init_define_APP_CONFIG();
  function isObject(obj) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    return !Array.isArray(obj);
  }

  // ../client-script-core/src/objects/clean_object.ts
  function cleanObject(obj) {
    const result = {};
    for (const prop in obj) {
      if (typeof obj[prop] === "boolean") {
        result[prop] = obj[prop];
      }
      if ({}.hasOwnProperty.call(obj, prop) && !!obj[prop]) {
        if (!isObject(obj[prop])) {
          result[prop] = obj[prop];
        } else if (prop === "tagBag" || prop === "keywords") {
          result[prop] = obj[prop];
        } else {
          const subObject = cleanObject(obj[prop]);
          if (subObject !== void 0) {
            result[prop] = cleanObject(obj[prop]);
          }
        }
      }
    }
    if (SafeJson.stringify(result) === "{}") {
      return void 0;
    }
    return result;
  }

  // ../client-script-core/src/legacy-sessions/index.ts
  var retrieveLegacyState = (browserCapabilities2, v1Id, v2Id, buildConfig) => {
    if (true) {
      const remapCustomer = (customer) => {
        if (!customer) {
          return null;
        }
        if (!customer.p) {
          customer.p = {};
        }
        const mapped = {
          firstName: customer.f || void 0,
          lastName: customer.l || void 0,
          phone: {
            landline: customer.p.l || void 0,
            mobile: customer.p.m || void 0
          }
        };
        if (!mapped.phone.landline && !mapped.phone.mobile) {
          delete mapped.phone;
        }
        if (!mapped.phone && !mapped.firstName && !mapped.lastName) {
          return;
        }
        return mapped;
      };
      const endpoint = v2Id ? buildConfig.v2LegacyUrl : buildConfig.v1LegacyUrl;
      const frame = PostMessageChannel.getChannel(browserCapabilities2);
      const collectSessionId = buildConfig.collectLegacyStateId;
      if (!frame) {
        return {};
      }
      const retrievalType = "GET_LEGACY_SESSION";
      return frame.sendMessage(endpoint, {
        messageType: retrievalType,
        v1Id,
        v2Id
      }).then((result) => {
        if (!result) {
          return {};
        }
        const parsed = SafeJson.parse(unescape(result));
        if (!parsed.s) {
          parsed.s = {};
        }
        const remapped = {
          sessionId: parsed.s.i
        };
        const mappedCustomer = remapCustomer(parsed.c);
        if (mappedCustomer) {
          remapped.customer = mappedCustomer;
        }
        const mappedEmail = parsed.c ? parsed.c.e : void 0;
        if (mappedEmail && mappedEmail !== "") {
          remapped.email = mappedEmail;
        }
        if (!collectSessionId || !parsed.d) {
          delete remapped.sessionId;
        } else {
          const now = (/* @__PURE__ */ new Date()).getTime();
          const then = Number(parsed.d);
          if (now - then > 18e5) {
            delete remapped.sessionId;
          }
        }
        return cleanObject(remapped);
      });
    }
    return {};
  };
  var getLegacyStateFromFrame = (replicatedStore, browserCapabilities2, v1Id, v2Id, buildConfig) => {
    if (true) {
      const KEY_FIRST_RUN = "sc-leg";
      const KEY_FIRST_RUN_NO_ID = "sc-leg-noid";
      const setFirstRun = (firstRunStore, firstRunV1Id, firstRunCollectSessionId) => {
        if (!firstRunStore) {
          return promises_default.reject("STORE_UNAVAILABLE");
        }
        return firstRunStore.setValue(`${firstRunCollectSessionId ? KEY_FIRST_RUN : KEY_FIRST_RUN_NO_ID}-${firstRunV1Id}`, "1");
      };
      const isFirstRun = (firstRunStore, firstRunV1Id, firstRunCollectSessionId) => {
        if (!firstRunStore) {
          return promises_default.reject("STORE_UNAVAILABLE");
        }
        return firstRunStore.getValue(`${firstRunCollectSessionId ? KEY_FIRST_RUN : KEY_FIRST_RUN_NO_ID}-${firstRunV1Id}`).then((value) => {
          return value !== 1 && value !== "1";
        });
      };
      const cleanupOldCookies = () => {
        document.cookie.split(";").map((cookieName) => Strings.clean(cookieName.split("=")[0])).filter((cookieName) => cookieName.match(/^__sc\d{4,}/)).forEach((cookieName) => {
          const date = /* @__PURE__ */ new Date();
          date.setTime(date.getTime() + -10 * 24 * 60 * 60 * 1e3);
          const expires = `${cookieName}=; expires=${date.toUTCString()}; path=/`;
          document.cookie = expires;
        });
      };
      const collectSessionId = buildConfig.collectLegacyStateId;
      if (!buildConfig.collectLegacyState) {
        return promises_default.resolve();
      }
      return isFirstRun(replicatedStore, v1Id, collectSessionId).then((isFirstRunResult) => {
        if (!isFirstRunResult) {
          return promises_default.resolve();
        }
        return setFirstRun(replicatedStore, v1Id, collectSessionId).then(() => {
          return retrieveLegacyState(browserCapabilities2, v1Id, v2Id, buildConfig);
        }).then((legacyState2) => {
          if (buildConfig.removeOldCookies) {
            try {
              cleanupOldCookies();
            } catch (ex) {
            }
          }
          return legacyState2;
        }).catch((err) => {
          logTiny5.logWarning(err);
          promises_default.resolve();
        });
      });
    }
    return promises_default.resolve();
  };
  function getLegacyState(replicatedStore, browserCapabilities2, v1Id, v2Id, buildConfig) {
    if (true) {
      return getLegacyStateFromFrame(replicatedStore, browserCapabilities2, v1Id, v2Id, buildConfig);
    }
    return promises_default.resolve({});
  }

  // ../client-script-core/src/main.ts
  var logTiny17 = __toESM(require_log_tiny());

  // ../client-script-core/src/do_not_track.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/storage/localstorage/index.ts
  init_define_APP_CONFIG();
  var lsCache = __toESM(require_lscache());
  var lzw = __toESM(require_lz_string());

  // ../client-script-core/src/storage/baseStorage.ts
  init_define_APP_CONFIG();
  var BaseStorage = class {
    /**
     * Removes properties on objects stored
     */
    removeByPath(name, paths) {
      return promises_default.all([
        this.getValue(name),
        this.getValue(`${name}-cacheexpiration`)
      ]).then((values) => {
        const persistedState = values[0];
        const currentExpiration = values[1];
        if (typeof persistedState !== "object") {
          return;
        }
        paths.forEach((pathString) => {
          const path = pathString.split(".");
          let locationRef = persistedState;
          if (path.length > 1) {
            for (let i = 0; i < path.length - 1; i++) {
              locationRef = persistedState[path[i]];
            }
          }
          delete locationRef[path.pop()];
        });
        this.setValue(name, persistedState);
        return currentExpiration;
      });
    }
  };

  // ../client-script-core/src/storage/localstorage/index.ts
  var KEY_COMPRESSED = "#::";
  var win2 = browserWindow();
  var LocalStorage = class extends BaseStorage {
    constructor() {
      super();
      lsCache.flushExpired();
    }
    get Name() {
      return "LocalStorage";
    }
    /**
     * Get a value for the specified name
     * @param key
     * @param noPrefix {boolean} use the raw value (don't prefix with ls cache)
     * @returns {Object}
     */
    getValue(name, noPrefix) {
      let value;
      if (noPrefix) {
        try {
          return promises_default.resolve(win2.localStorage.getItem(name));
        } catch (ex) {
          return promises_default.reject(ex);
        }
      } else {
        value = lsCache.get(`scls::${name}`);
      }
      if (!value || typeof value === "object") {
        return promises_default.resolve(null);
      }
      if (value.indexOf && value.indexOf(KEY_COMPRESSED) === 0) {
        value = lzw.decompressFromUTF16(value.substring(KEY_COMPRESSED.length));
      }
      try {
        if (typeof value === "string" && (value.charAt(0) === "{" || value.charAt(0) === "[")) {
          value = SafeJson.parse(value);
        }
      } catch (ex) {
      }
      return promises_default.resolve(value);
    }
    /**
     * Adds the specified key and value into local storage
     * will expire in 2 hours by default and cull by expiry if we are running out of space
     * @param {string} key
     * @param {Object} value
     * @param {number} [expiresInMinutes=120]
     * @returns {boolean}
     */
    setValue(name, value, expiresInMinutes) {
      if (typeof value === "object") {
        value = SafeJson.stringify(value);
      }
      let compressed = lzw.compressToUTF16(value);
      if (compressed.length > value.length) {
        compressed = `${value}`;
      } else {
        compressed = `${KEY_COMPRESSED}${compressed}`;
      }
      lsCache.set(`scls::${name}`, compressed, expiresInMinutes);
      return promises_default.resolve(true);
    }
    /**
     * Removed the specified key from local storage or remove a specified item from storage
     * @param {string} name The key to be deleted
     */
    removeValue(name, paths) {
      if (paths) {
        this.removeByPath(name, paths).then((currentExpiration) => {
          lsCache.set(`scls::${name}-cacheexpiration`, currentExpiration);
        });
      } else {
        lsCache.remove(`scls::${name}`);
      }
      return promises_default.resolve(true);
    }
  };
  var canUseLocalStorage = (browserCapabilitiesState) => {
    if (browserCapabilitiesState.canUseLocalStorage !== null && browserCapabilitiesState.canUseLocalStorage !== void 0) {
      return browserCapabilitiesState.canUseLocalStorage;
    }
    browserCapabilitiesState.canUseLocalStorage = lsCache.supported();
    return browserCapabilitiesState.canUseLocalStorage;
  };
  var getStore = (browserCapabilities2) => {
    if (!canUseLocalStorage(browserCapabilities2)) {
      return null;
    }
    return new LocalStorage();
  };

  // ../client-script-core/src/do_not_track.ts
  var logTiny6 = __toESM(require_log_tiny());
  var cachedStore;
  var browserCapabilities = getInitialCapabilities();
  var KEY_DNT = "sc_dnt";
  var getStore2 = () => {
    if (cachedStore !== void 0) {
      return promises_default.resolve(cachedStore);
    }
    cachedStore = getStore(browserCapabilities);
    return new promises_default((resolve, reject) => {
      return cachedStore ? resolve(cachedStore) : reject("LOCAL_STORE_UNAVAILABLE");
    });
  };
  function canTrack() {
    return getStore2().then((store) => store.getValue(KEY_DNT)).then((result) => result !== "1").catch(() => {
      return true;
    });
  }
  function setDNT() {
    return getStore2().then((store) => store.setValue(KEY_DNT, "1", 10)).catch((err) => logTiny6.logError(err));
  }

  // ../client-script-core/src/error_trace.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/message_channel/messageQueue.ts
  init_define_APP_CONFIG();
  var logTiny9 = __toESM(require_log_tiny());

  // ../client-script-core/src/message_channel/channels/beacon/index.ts
  init_define_APP_CONFIG();
  var logTiny7 = __toESM(require_log_tiny());
  var win3 = browserWindow();
  var BeaconChannel = class _BeaconChannel {
    // tslint:disable-next-line:function-name
    static canUseBeacon(browserCapabilitiesState) {
      if (browserCapabilitiesState.canUseBeacon === null) {
        browserCapabilitiesState.canUseBeacon = !!(win3.navigator && win3.sc_noBeacon !== true && win3.navigator.sendBeacon);
      }
      const ua = win3.navigator.userAgent;
      const firefoxMatches = ua.match(/firefox\/\d+/i);
      if (Array.isArray(firefoxMatches) && browserCapabilitiesState.canUseBeacon) {
        try {
          const version = parseFloat(firefoxMatches[0].substring(8).trim());
          browserCapabilitiesState.canUseBeacon = version >= 53;
        } catch (ex) {
          browserCapabilitiesState.canUseBeacon = false;
        }
      }
      const iOS = !!ua.match(/iP(ad|od|hone)/i);
      const webkit = !!ua.match(/WebKit/i);
      const iOSSafari = iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/FxiOS/i) && !ua.match(/OPT/i) && !ua.match(/EdgiOS/i);
      const iOSVersion = ua.match(/OS (\d+)_(\d+)_?(\d+)?/);
      if (iOS && !iOSSafari && Array.isArray(iOSVersion) && browserCapabilitiesState.canUseBeacon) {
        try {
          const checkiOSVersion = parseFloat(iOSVersion[1].trim());
          browserCapabilitiesState.canUseBeacon = !(checkiOSVersion > 11);
        } catch (ex) {
          browserCapabilitiesState.canUseBeacon = false;
        }
      }
      return !!config_default.useBeacon && browserCapabilitiesState.canUseBeacon;
    }
    // tslint:disable-next-line:function-name
    static getChannel(browserCapabilities2) {
      if (!_BeaconChannel.canUseBeacon(browserCapabilities2)) {
        return null;
      }
      logTiny7.logInfo("Using Beacon message channel");
      return new _BeaconChannel();
    }
    /**
     * Send a message via the beacon API.
     * NOTE callback is called with (null, true) if successful - we don't get a response from the server
     * @param url {String} the url to POST to
     * @param payload {Object} JSON.stringify able object to send back
     * @returns {*}
     */
    sendMessage(url, payload) {
      const result = win3.navigator.sendBeacon(url, win3.escape(SafeJson.stringify(payload)));
      if (!result) {
        return promises_default.reject("Failed to send beacon");
      }
      return promises_default.resolve(result);
    }
  };

  // ../client-script-core/src/message_channel/channels/xhr/index.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/message_channel/channels/xhr/xhr_post_base.ts
  init_define_APP_CONFIG();
  var logTiny8 = __toESM(require_log_tiny());
  var win4 = browserWindow();
  var initializeXMLHttpRequest = (url, methodType, withCredentials = false) => {
    const xhr = new XMLHttpRequest();
    if (withCredentials) {
      xhr.withCredentials = true;
    }
    xhr.open(methodType, url, true);
    xhr.setRequestHeader("Accept", "application/json; q=0.9, text/plain; q=0.5");
    return xhr;
  };
  var logValidationError = (responseText) => {
    try {
      const objResponse = SafeJson.parse(responseText);
      if (objResponse.errors) {
        const errors = objResponse.errors.split("\n\n");
        objResponse.message = errors[0];
        objResponse.errors = SafeJson.parse(errors[1]);
      }
      logTiny8.logError("Impression Validation error:", objResponse);
    } catch (ex) {
      logTiny8.logError("Impression Validation error:", responseText);
    }
  };
  var sendXhr = (xhr, methodType, payload, timeout = 5e3) => {
    return new promises_default((resolve, reject) => {
      const xhrTimeout = setTimeout(() => {
        xhr.abort();
        reject("xhr timeout", {
          response: null,
          status: xhr.status
        });
      }, timeout);
      xhr.onerror = (err) => {
        logTiny8.logError(err);
        clearTimeout(xhrTimeout);
        reject(err);
      };
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
          clearTimeout(xhrTimeout);
          try {
            if (xhr.responseText && xhr.status !== 204) {
              try {
                const jsonResp = SafeJson.parse(xhr.responseText);
                resolve(jsonResp);
              } catch (ex) {
                reject(ex, xhr.responseText);
              }
            } else {
              resolve(null);
            }
          } catch (e) {
            reject(e);
          }
        } else if (xhr.readyState === 4 && xhr.status >= 400) {
          if (xhr.status === 406) {
            logValidationError(xhr.responseText);
          }
          clearTimeout(xhrTimeout);
          reject(xhr.responseText || "error");
        }
      };
      try {
        if (methodType === "POST") {
          const encodedPayload = win4.escape(SafeJson.stringify(payload));
          xhr.setRequestHeader("Content-Type", "text/plain; charset=UTF-8");
          xhr.send(encodedPayload);
        } else {
          xhr.send(null);
        }
      } catch (err) {
        reject(err);
      }
    });
  };

  // ../client-script-core/src/message_channel/channels/xhr/index.ts
  var XhrChannel = class _XhrChannel {
    // tslint:disable-next-line:function-name
    static canUseXhrCors(browserCapabilitiesState) {
      if (browserCapabilitiesState.canUseXhrCors === null) {
        browserCapabilitiesState.canUseXhrCors = window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest();
      }
      return browserCapabilitiesState.canUseXhrCors;
    }
    /**
     * Get a xhr post cors channel, works on ie8+
     * @param browserCapabilities
     * @returns {XhrChannel|null}
     */
    // tslint:disable-next-line:function-name
    static getChannel(browserCapabilities2) {
      if (!_XhrChannel.canUseXhrCors(browserCapabilities2)) {
        return null;
      }
      return new _XhrChannel();
    }
    // tslint:disable-next-line:no-reserved-keywords
    get(url, payload, timeout) {
      const xhr = initializeXMLHttpRequest(url, "GET");
      return sendXhr(xhr, "GET", payload, timeout);
    }
    sendMessage(url, payload) {
      const xhr = initializeXMLHttpRequest(url, "POST");
      return sendXhr(xhr, "POST", payload);
    }
  };

  // ../client-script-core/src/message_channel/messageQueue.ts
  var MessageQueue = class {
    constructor() {
      this.bHasSentImpressions = false;
      const browserCaps3 = getInitialCapabilities();
      const beaconChannel = BeaconChannel.getChannel(browserCaps3);
      this.xhrChannel = XhrChannel.getChannel(browserCaps3);
      this.primaryChannel = beaconChannel || this.xhrChannel;
      this.impressionsQueue = [];
      this.otherMessagesQueue = [];
      if (!this.primaryChannel) {
        logTiny9.logError("Could not get message channel");
      }
    }
    sendError(url, message) {
      return this.primaryChannel.sendMessage(url, message);
    }
    // tslint:disable-next-line:ban-types
    sendOtherMessage(url, message, messageType, callback) {
      this.otherMessagesQueue.push({
        callback,
        url,
        message,
        type: messageType
      });
      this.processQueues();
    }
    sendImpression(impression) {
      this.impressionsQueue.push(impression);
      this.processQueues();
    }
    processQueues() {
      const result = this.processImpressionsQueue();
      if (result) {
        setTimeout(() => {
          this.processOtherMessages();
        }, 250);
      } else {
        this.processOtherMessages();
      }
    }
    processImpressionsQueue() {
      if (this.impressionsQueue.length < 1) {
        return false;
      }
      while (this.impressionsQueue.length > 0) {
        const impression = this.impressionsQueue.shift();
        let url = config_default.stateEndpointUrl;
        if (impression.ids && impression.ids.message) {
          url = `${url}?msgId=${impression.ids.message}`;
        }
        this.primaryChannel.sendMessage(url, impression);
      }
      this.bHasSentImpressions = true;
      return true;
    }
    processOtherMessages() {
      if (!this.bHasSentImpressions) {
        return;
      }
      while (this.otherMessagesQueue.length > 0) {
        const request = this.otherMessagesQueue.shift();
        if (!request.callback) {
          request.callback = () => {
          };
        }
        if (request.type === 0 /* GET */) {
          this.xhrChannel.get(request.url, request.message).then((result) => request.callback(null, result)).catch((err) => request.callback(err));
        } else {
          this.xhrChannel.sendMessage(request.url, request.message).then((result) => request.callback(null, result)).catch((err) => request.callback(err));
        }
      }
    }
  };
  var messageQueue_default = new MessageQueue();

  // ../client-script-core/src/error_trace.ts
  var logTiny10 = __toESM(require_log_tiny());
  var URL_ENDPOINT = config_default.errorEndpointUrl;
  var sendMessage = (name, data) => {
    try {
      messageQueue_default.sendError(URL_ENDPOINT, {
        data,
        name
      }).catch((e) => logTiny10.logError(e));
    } catch (ex) {
      logTiny10.logError(ex);
    }
  };
  var stringifyError = (err) => {
    if (typeof err === "string") {
      return err;
    }
    if (Object && Object.getOwnPropertyNames && typeof err === "object") {
      return SafeJson.stringify(err, Object.getOwnPropertyNames(err), 2);
    }
    return `${err.message}: ${SafeJson.stringify(err, null, 2)}`;
  };
  function sendError(ex, clientConfig) {
    if (ex.message === "LOCAL_STORE_UNAVAILABLE") {
      return sendLocalUnavailableError();
    }
    if (ex.message === "SESSION_STORE_UNAVAILABLE") {
      return sendSessionUnavailableError();
    }
    if (ex === "FRAME_STORAGE_UNAVAILABLE") {
      setDNT();
      return sendUnavailableError();
    }
    const name = typeof ex === "string" ? ex : ex.name || "SCRIPTERROR";
    if (typeof ex === "object") {
      ex.buildId = clientConfig.buildId;
      ex.clientName = clientConfig.clientName;
      ex.v1ClientId = clientConfig.v1ClientId;
      ex.v2ClientId = clientConfig.v2ClientId;
      ex = stringifyError(ex);
    }
    sendMessage(name, ex);
  }
  function sendLocalUnavailableError() {
    sendMessage("LOCAL_STORE_UNAVAILABLE");
  }
  function sendSessionUnavailableError() {
    sendMessage("SESSION_STORE_UNAVAILABLE");
  }
  function sendUnavailableError() {
    sendMessage("FRAME_STORAGE_UNAVAILABLE");
  }

  // ../client-script-core/src/featureInterface.ts
  init_define_APP_CONFIG();
  var logTiny15 = __toESM(require_log_tiny());

  // ../client-script-core/src/id_generator.ts
  init_define_APP_CONFIG();
  var generateLegacyGuid = () => {
    const r = (a) => {
      return a ? Math.floor((1 + Math.random()) * 65536).toString(16).substring(1) : Math.floor(Math.random() * 1e15).toString(16).substr(0, 12);
    };
    return `${(/* @__PURE__ */ new Date()).getTime().toString(36)}-${r(true)}-${r(true)}-${r(true)}-${r(false)}`.toString().toUpperCase();
  };
  var generateMachineId = () => {
    return `${(/* @__PURE__ */ new Date()).getTime().toString()}${Math.floor((1 + Math.random()) * 16777216).toString().substr(0, 6)}`;
  };
  var generateGuid = () => {
    return v4();
  };
  var getOrGenerateIdWithStore = (name, store, newId, expiresInMinutes, forceSave) => {
    return store.getValue(name).then((value) => {
      if (value && value.length === newId.length) {
        if (forceSave) {
          return store.setValue(name, value, expiresInMinutes, true).then(() => {
            return value;
          });
        }
        return value;
      }
      return store.setValue(name, newId, expiresInMinutes, true).then(() => {
        return newId;
      });
    });
  };
  var getGeneratedDyanmicIdsWithStore = (store, sessionStore2, legacySession, forceSave = false) => {
    return promises_default.all([
      getOrGenerateIdWithStore("machine_id", store, legacySession.machineId || generateMachineId(), 5256e3, forceSave),
      getOrGenerateIdWithStore("machine_guid", store, generateGuid(), 5256e3, forceSave)
    ]).then((results) => {
      return {
        machineGuid: results[1],
        machineId: results[0]
      };
    });
  };
  var setSessionIdWithStore = (sessionId, sharedClientApiKey, expiresInMinutes, store) => {
    return store.setValue(`session_id_${sharedClientApiKey}`, sessionId, expiresInMinutes, true).then(() => sessionId);
  };
  var createSessionIdWithStore = (sharedClientApiKey, expiresInMinutes, store, legacySession) => {
    const sessionId = legacySession.sessionId || generateLegacyGuid();
    return setSessionIdWithStore(sessionId, sharedClientApiKey, expiresInMinutes, store);
  };
  var getIdGenerator = (legacySession, store, sessionStore2, sessionExpiryMinutes = 30) => {
    const internalStore = store;
    if (!legacySession) {
      legacySession = {};
    }
    return {
      clearSessionId(sharedClientApiKey) {
        return internalStore.removeValue(`session_id_${sharedClientApiKey}`);
      },
      createSessionId(sharedClientApiKey) {
        return createSessionIdWithStore(sharedClientApiKey, sessionExpiryMinutes, internalStore, legacySession).then((sessionId) => {
          return getGeneratedDyanmicIdsWithStore(internalStore, sessionStore2, legacySession, true).then(() => {
            return sessionId;
          });
        });
      },
      getGeneratedDynamicIds() {
        return getGeneratedDyanmicIdsWithStore(internalStore, sessionStore2, legacySession);
      },
      getSessionId(sharedClientApiKey) {
        return internalStore.getValue(`session_id_${sharedClientApiKey}`, sessionExpiryMinutes);
      },
      getTabId() {
        return getOrGenerateIdWithStore("tab_id", sessionStore2, generateGuid(), 0, true);
      },
      setSessionId(sessionId, sharedClientApiKey) {
        return setSessionIdWithStore(sessionId, sharedClientApiKey, sessionExpiryMinutes, internalStore);
      }
    };
  };

  // ../client-script-core/src/impression_payload_generator.ts
  init_define_APP_CONFIG();
  var import_object_assign2 = __toESM(require_object_assign());
  var packageImpressionPayload = (messageTypes, dynamicIds, clientId, v2ClientId, apiKey, scrapedState, diffState2, extraState, clientName, config) => {
    const currentDate = /* @__PURE__ */ new Date();
    const message = {
      events: messageTypes,
      ids: {
        apiKey,
        machineGuid: dynamicIds.machineGuid,
        machineId: dynamicIds.machineId,
        message: v4(),
        tabId: dynamicIds.tabId
      },
      meta: {
        buildId: config.buildId,
        client: clientName,
        schema: 1
      }
    };
    if (config.setAsTestImpression) {
      message.meta.testing = true;
    }
    if (clientId) {
      message.ids.v1ClientId = clientId;
    }
    if (v2ClientId) {
      message.ids.v2ClientId = v2ClientId;
    }
    const internalScrapedState = scrapedState || {};
    if (internalScrapedState.sessionId) {
      message.ids.session = internalScrapedState.sessionId;
    }
    message.meta = (0, import_object_assign2.default)({}, message.meta, internalScrapedState.meta);
    const requiredFields = {};
    requiredFields.device = internalScrapedState.device || {};
    requiredFields.device.time = {
      offset: currentDate.getTimezoneOffset(),
      utc: currentDate.getTime()
    };
    if (typeof requiredFields.device.time.offset === "string") {
      const parsedOffset = parseInt(requiredFields.device.time.offset, 10);
      if (!isNaN(parsedOffset)) {
        requiredFields.device.time.offset = parsedOffset;
      } else {
        requiredFields.device.time.offset = 0;
      }
    }
    if (internalScrapedState.page) {
      requiredFields.page = internalScrapedState.page;
    }
    if (internalScrapedState.locale) {
      requiredFields.locale = internalScrapedState.locale;
    }
    if (internalScrapedState.currency) {
      requiredFields.currency = internalScrapedState.currency;
    }
    if (Array.isArray(internalScrapedState.errors)) {
      requiredFields.errors = internalScrapedState.errors.map((error) => {
        const errorSubset = error;
        if (errorSubset.error && errorSubset.error.stack) {
          errorSubset.error = {
            message: errorSubset.error.message,
            stack: errorSubset.error.stack
          };
        }
        return errorSubset;
      });
    }
    const mergedState = (0, import_object_assign2.default)({}, extraState, diffState2, requiredFields, message);
    delete mergedState.sessionId;
    return mergedState;
  };

  // ../client-script-core/src/storage/remote.ts
  init_define_APP_CONFIG();
  var logTiny11 = __toESM(require_log_tiny());
  var getValueViaChannel = (receiverUrl, channel, name) => {
    const storagePayload = {
      commandType: "GET",
      messageType: "STORE",
      payload: {
        name
      }
    };
    return channel.sendMessage(receiverUrl, storagePayload);
  };
  var setValueViaChannel = (receiverUrl, channel, name, value, expiresInMinutes) => {
    const storagePayload = {
      commandType: "SET",
      messageType: "STORE",
      payload: {
        expiresInMinutes,
        name,
        value
      }
    };
    return channel.sendMessage(receiverUrl, storagePayload).then(() => {
      return true;
    }).catch((ex) => {
      logTiny11.logError(ex);
      return false;
    });
  };
  var removeValueViaChannel = (receiverUrl, channel, name, paths) => {
    const storagePayload = {
      commandType: "REMOVE",
      messageType: "STORE",
      payload: {
        name,
        paths
      }
    };
    return channel.sendMessage(receiverUrl, storagePayload).then(() => {
      return true;
    }).catch((ex) => {
      logTiny11.logError(ex);
      return false;
    });
  };
  var getStore3 = (browserCapabilities2, receiverUrl, channel) => {
    if (!channel) {
      logTiny11.logWarning("REMOTE STORE: no valid channel given");
      return null;
    }
    if (!receiverUrl) {
      logTiny11.logWarning("REMOTE STORE: no valid receiver url given");
      return null;
    }
    return {
      getValue(name) {
        return getValueViaChannel(receiverUrl, channel, name);
      },
      get Name() {
        return "Remote store";
      },
      removeValue(name, paths) {
        return removeValueViaChannel(receiverUrl, channel, name, paths);
      },
      setValue(name, value, expiresInMinutes = 1036800) {
        return setValueViaChannel(receiverUrl, channel, name, value, expiresInMinutes).then(() => {
          return true;
        }).catch(() => {
          return false;
        });
      }
    };
  };

  // ../client-script-core/src/storage/replicated.ts
  init_define_APP_CONFIG();
  var logTiny12 = __toESM(require_log_tiny());
  var ReplicationStore = class {
    constructor(stores) {
      this.stores = Array.isArray(stores) ? stores.filter((store) => !!store) : [];
    }
    get length() {
      return this.stores.length;
    }
    get Name() {
      return "ReplicationStore";
    }
    /**
     * Entry point for getting a value from a replication store
     */
    getValue(name, expiresInMinutes) {
      const store = this.stores[0];
      return this.checkStore(store, name, this.stores, 0, expiresInMinutes);
    }
    /**
     * Entry point for setting a value in storage in the replication store.
     */
    setValue(name, value, expiresInMinutes, plainText = false) {
      return promises_default.all(this.stores.map((store) => store.setValue(name, value, expiresInMinutes, plainText))).then((results) => {
        return results.filter((e) => e === true).length > 0;
      });
    }
    /**
     * Entry point for removing a value from a replication store
     */
    removeValue(name, paths) {
      return promises_default.all(this.stores.map((store) => store.removeValue(name, paths))).then((results) => {
        return results.filter((e) => e === true).length > 0;
      });
    }
    /**
    * Checks a given store for the value.
    * If result can be found returns result
    * If no result is found moves to next store
    */
    checkStore(store, name, stores, depth, expiresInMinutes) {
      if (depth >= stores.length) {
        return promises_default.resolve(null);
      }
      return store.getValue(name).then((val) => {
        if (val) {
          if (depth > 0) {
            const promises = [];
            for (let i = depth; i >= 0; i -= 1) {
              promises.push(store.setValue(name, val, expiresInMinutes));
            }
            return promises_default.all(promises).then(() => {
              return val;
            });
          }
          return val;
        }
        return this.checkStore(stores[depth + 1], name, stores, depth + 1, expiresInMinutes);
      });
    }
  };
  var getStore4 = (stores) => {
    if (!stores) {
      logTiny12.logWarning("REPLICATION STORE: no stores passed");
      return null;
    }
    const repStore = new ReplicationStore(stores);
    if (repStore.length === 0) {
      logTiny12.logWarning("REPLICATION STORE: no valid stores given");
      return null;
    }
    return repStore;
  };

  // ../client-script-core/src/storage/local.ts
  init_define_APP_CONFIG();
  var bestStore;
  var wrappedStore;
  function getStore5(browserCapabilities2) {
    if (wrappedStore) {
      return wrappedStore;
    }
    if (!bestStore) {
      const localStorageStore = getStore(browserCapabilities2);
      bestStore = localStorageStore;
    }
    if (!bestStore) {
      return null;
    }
    wrappedStore = {
      getValue(name) {
        return bestStore.getValue(name);
      },
      get Name() {
        return bestStore.Name;
      },
      removeValue(name, paths) {
        return bestStore.removeValue(name, paths);
      },
      setValue(name, value, expiresInMinutes, plainText) {
        let expiry = expiresInMinutes;
        if (!expiry || expiry > 1440) {
          expiry = 1440;
        }
        return bestStore.setValue(name, value, expiry, plainText);
      }
    };
    return wrappedStore;
  }

  // ../client-script-core/src/storage/session.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/storage/sessionstorage/index.ts
  init_define_APP_CONFIG();
  var lzw2 = __toESM(require_lz_string());
  var KEY_COMPRESSED2 = "#::";
  var win5 = browserWindow();
  var sStorage = win5.sessionStorage;
  var SessionStorage = class extends BaseStorage {
    get Name() {
      return "SessionStorage";
    }
    /**
     * Get a value for the specified name
     * @param key
     * @param noPrefix {boolean} use the raw value (don't prefix with ls cache)
     * @returns {Object}
     */
    getValue(name, noPrefix) {
      let value;
      if (noPrefix) {
        try {
          return promises_default.resolve(sStorage.getItem(name));
        } catch (ex) {
          return promises_default.reject(ex);
        }
      } else {
        value = sStorage.getItem(`scss::${name}`);
      }
      if (!value || typeof value === "object") {
        return promises_default.resolve(null);
      }
      if (value.indexOf && value.indexOf(KEY_COMPRESSED2) === 0) {
        value = lzw2.decompressFromUTF16(value.substring(KEY_COMPRESSED2.length));
      }
      try {
        if (typeof value === "string" && (value.charAt(0) === "{" || value.charAt(0) === "[")) {
          value = SafeJson.parse(value);
        }
      } catch (ex) {
      }
      return promises_default.resolve(value);
    }
    /**
     * Adds the specified key and value into session storage
     * @param {string} key
     * @param {Object} value
     * @returns {boolean}
     */
    setValue(name, value) {
      if (typeof value === "object") {
        value = SafeJson.stringify(value);
      }
      let compressed = lzw2.compressToUTF16(value);
      if (compressed.length > value.length) {
        compressed = `${value}`;
      } else {
        compressed = `${KEY_COMPRESSED2}${compressed}`;
      }
      sStorage.setItem(`scss::${name}`, compressed);
      return promises_default.resolve(true);
    }
    /**
     * Removed the specified key from session storage or remove a specified item from storage
     * @param {string} name The key to be deleted
     */
    removeValue(name, paths) {
      if (paths) {
        this.removeByPath(name, paths);
      } else {
        sStorage.removeItem(`scss::${name}`);
      }
      return promises_default.resolve(true);
    }
  };
  var canUseSessionStorage = (browserCapabilitiesState) => {
    if (browserCapabilitiesState.canUseSessionStorage !== null && browserCapabilitiesState.canUseSessionStorage !== void 0) {
      return browserCapabilitiesState.canUseSessionStorage;
    }
    browserCapabilitiesState.canUseSessionStorage = !!sStorage;
    return browserCapabilitiesState.canUseSessionStorage;
  };
  var getStore6 = (browserCapabilities2) => {
    if (!canUseSessionStorage(browserCapabilities2)) {
      return null;
    }
    return new SessionStorage();
  };

  // ../client-script-core/src/storage/session.ts
  var sessionStore;
  var wrappedStore2;
  function getStore7(browserCapabilities2) {
    if (!sessionStore) {
      const sesionStorageStore = getStore6(browserCapabilities2);
      sessionStore = sesionStorageStore;
    }
    if (!sessionStore) {
      return null;
    }
    wrappedStore2 = {
      getValue(name) {
        return sessionStore.getValue(name);
      },
      get Name() {
        return sessionStore.Name;
      },
      removeValue(name, paths) {
        return sessionStore.removeValue(name, paths);
      },
      setValue(name, value) {
        return sessionStore.setValue(name, value);
      }
    };
    return wrappedStore2;
  }

  // ../client-script-core/src/state_tracker/index.ts
  init_define_APP_CONFIG();
  var logTiny14 = __toESM(require_log_tiny());
  var import_object_assign5 = __toESM(require_object_assign());

  // ../client-script-core/src/state_tracker/event_bus.ts
  var event_bus_exports = {};
  __export(event_bus_exports, {
    fireEvents: () => fireEvents,
    firePostScrapeProcessing: () => firePostScrapeProcessing,
    fireStateChange: () => fireStateChange,
    flushSubscribers: () => flushSubscribers,
    onEvents: () => onEvents,
    onPostScrapeProcessing: () => onPostScrapeProcessing,
    onRebindEvents: () => onRebindEvents2,
    onStateChange: () => onStateChange
  });
  init_define_APP_CONFIG();
  var stateChangeSubscribers = [];
  var eventsSubscribers = [];
  var postScrapeProcessingSubscribers = [];
  var rebindEventSubscribers = [];
  var fireCallbacks = (arrListeners, diff, mergedState, scrapedState, eventList, eventTargets) => {
    const listenerFuncs = [];
    arrListeners.forEach((subscriber) => {
      listenerFuncs.push(subscriber(diff, mergedState, scrapedState, eventList, eventTargets));
    });
    if (Array.isArray(eventList) && rebindEventSubscribers.length > 0 && eventList.some((event) => event.rebindEvents)) {
      rebindEventSubscribers.forEach(((fn) => fn()));
    }
    return promises_default.all(listenerFuncs);
  };
  function fireEvents(diff, mergedState, scrapedState, eventList) {
    return fireCallbacks(eventsSubscribers, diff, mergedState, scrapedState, eventList);
  }
  function firePostScrapeProcessing(diff, mergedState, scrapedState, eventList, eventTargets) {
    return fireCallbacks(postScrapeProcessingSubscribers, diff, mergedState, scrapedState, eventList, eventTargets);
  }
  function fireStateChange(diff, mergedState, scrapedState) {
    return fireCallbacks(stateChangeSubscribers, diff, mergedState, scrapedState);
  }
  function onEvents(fn) {
    eventsSubscribers.push(fn);
  }
  function onPostScrapeProcessing(fn) {
    postScrapeProcessingSubscribers.push(fn);
  }
  function onStateChange(fn) {
    stateChangeSubscribers.push(fn);
  }
  function onRebindEvents2(fn) {
    rebindEventSubscribers.push(fn);
  }
  function flushSubscribers() {
    postScrapeProcessingSubscribers = [];
  }

  // ../client-script-core/src/waitForAllAsync.ts
  init_define_APP_CONFIG();
  var series = (fns) => {
    const runSeriesFunction = (seriesFns, seriesResults, errCallback, resultsCallback) => {
      if (!seriesFns.length) {
        return resultsCallback(seriesResults);
      }
      const fn = seriesFns.shift();
      fn((err, result) => {
        if (!err && result) {
          seriesResults.push(result);
        }
        runSeriesFunction(seriesFns, seriesResults, errCallback, resultsCallback);
      });
    };
    const results = [];
    return (callback, errback) => {
      runSeriesFunction(fns, results, errback, callback);
    };
  };

  // ../client-script-core/src/state_tracker/scrape_functions.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/ponyfills/array_includes.ts
  init_define_APP_CONFIG();
  var array_includes_default = (arr, value) => {
    if (arr.indexOf) {
      return arr.indexOf(value) > -1;
    }
    const len = arr.length;
    for (let i = 0; i < len; i += 1) {
      if (arr[i].key === void 0) {
        if (arr[i] === value) {
          return true;
        }
      } else if (arr[i].key === value) {
        return true;
      }
    }
    return false;
  };

  // ../client-script-core/src/state_tracker/scrape_functions.ts
  var extractScrapers = (scraperContainer) => {
    const validScrapers = {};
    for (const subStateName in scraperContainer) {
      if ({}.hasOwnProperty.call(scraperContainer, subStateName)) {
        let structuredScraper;
        if (scraperContainer[subStateName]) {
          if (scraperContainer[subStateName] instanceof Function) {
            structuredScraper = {
              state: scraperContainer[subStateName]
            };
          } else if (typeof scraperContainer[subStateName] === "object" && scraperContainer[subStateName].state) {
            structuredScraper = scraperContainer[subStateName];
          }
        }
        if (structuredScraper) {
          structuredScraper.promisedState = (domEvents, ...args) => {
            let timeoutRef;
            const timeoutPromise = new promises_default((resolve, reject) => {
              timeoutRef = window.setTimeout(() => {
                clearTimeout(timeoutRef);
                reject("timeout");
              }, 5e3);
            });
            return new promises_default((resolve, reject) => {
              const scrapePromise = promises_default.resolve().then(() => structuredScraper.state(domEvents, ...args)).then((state) => {
                clearTimeout(timeoutRef);
                return {
                  name: subStateName,
                  state
                };
              }).then((markedState) => {
                if (isObject(markedState.state)) {
                  if (subStateName !== "tagBag") {
                    markedState.state = cleanObject(markedState.state);
                  }
                }
                return markedState;
              });
              return promises_default.race([scrapePromise, timeoutPromise]).then((result) => {
                return resolve(result);
              }).catch((ex) => {
                reject({
                  error: stringifyError(ex),
                  name: subStateName
                });
              });
            });
          };
          validScrapers[subStateName] = structuredScraper;
        }
      }
    }
    return validScrapers;
  };
  var getScrapeFunctions = (scraperContainer) => {
    const stateScrapingFunctions = extractScrapers(scraperContainer);
    return {
      postScrape(clientConfig, diff, api, events, mergedState, scrapedState, eventTargets) {
        if (array_includes_default(events, "SESSIONID_CHANGED")) {
          events.push("SESSION_START");
        }
        return promises_default.resolve().then(() => {
          if (clientConfig.isUserRegistered) {
            return clientConfig.isUserRegistered(diff, eventTargets);
          }
          return false;
        }).then((isUserRegistered) => {
          if (isUserRegistered) {
            events.push("USER_REGISTERED");
          }
        }).then(() => {
          if (clientConfig.isPurchaseComplete) {
            return clientConfig.isPurchaseComplete(diff, eventTargets);
          }
          return false;
        }).then((isPurchaseComplete) => {
          if (isPurchaseComplete) {
            events.push("PURCHASE_COMPLETE");
            events.push("SESSION_COMPLETE");
          }
          return false;
        });
      },
      subStates: stateScrapingFunctions
    };
  };

  // ../client-script-core/src/state_tracker/scraper/index.ts
  init_define_APP_CONFIG();
  var import_object_assign4 = __toESM(require_object_assign());
  var logTiny13 = __toESM(require_log_tiny());

  // ../client-script-core/src/state_tracker/scraper/diff.ts
  init_define_APP_CONFIG();
  var import_object_assign3 = __toESM(require_object_assign());
  var excludeStateFromDiff = ["device"];
  var isEqual = (objA, objB) => {
    return SafeJson.stringify(objA) === SafeJson.stringify(objB);
  };
  var checkSubState = (existingSubStateRef, newSubState) => {
    if (newSubState === void 0) {
      return {
        changed: false
      };
    }
    if (!isEqual(existingSubStateRef, newSubState)) {
      const clonedExistingState = (0, import_object_assign3.default)({}, existingSubStateRef);
      return {
        changed: true,
        newState: newSubState,
        oldState: clonedExistingState
      };
    }
    return {
      changed: false
    };
  };
  var findChangedSubstates = (existingState, newState) => {
    let stateChanged = false;
    const alteredState = {};
    for (const subStateName in newState) {
      if ({}.hasOwnProperty.call(newState, subStateName) && !array_includes_default(excludeStateFromDiff, subStateName)) {
        const stateCheckResult = checkSubState(existingState[subStateName], newState[subStateName]);
        if (stateCheckResult.changed) {
          alteredState[subStateName] = stateCheckResult.newState;
          stateChanged = true;
        }
      }
    }
    if (stateChanged) {
      return alteredState;
    }
    return null;
  };
  var diffState = (existingState, newState) => {
    if (!newState) {
      return null;
    }
    return findChangedSubstates(existingState, newState);
  };

  // ../client-script-core/src/state_tracker/scraper/cleaning.ts
  init_define_APP_CONFIG();
  var doesObjectHaveValues = (obj) => {
    for (const prop in obj) {
      if ({}.hasOwnProperty.call(obj, prop)) {
        const value = obj[prop];
        if (value) {
          return true;
        }
      }
    }
    return false;
  };
  function cleanArray(arrToClean, bAllowEmptyString) {
    return arrToClean.map((v) => stripNulls(v, bAllowEmptyString)).filter((v) => {
      return v !== null && v !== void 0;
    });
  }
  function stripNulls(obj, bAllowEmptyString = false) {
    const clone = {};
    if (obj === null || obj === void 0) {
      return obj;
    }
    if (typeof obj === "string") {
      if (bAllowEmptyString) {
        return obj;
      }
      return obj.trim().length > 0 ? obj : void 0;
    }
    if (typeof obj !== "object") {
      return obj;
    }
    if (Array.isArray(obj)) {
      obj = cleanArray(obj, bAllowEmptyString);
      return obj.length > 0 ? obj : null;
    }
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (key === "tagBag") {
        clone[key] = value;
        return;
      } else if (key === "keywords") {
        clone[key] = cleanArray(value, false);
        return;
      }
      if (typeof value === "string") {
        if (value.trim().length > 0 || bAllowEmptyString) {
          clone[key] = value;
        }
        return;
      }
      if (typeof value !== "object") {
        if (value !== null && value !== void 0) {
          clone[key] = value;
        }
        return;
      }
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return;
        }
        const tmp = cleanArray(value, bAllowEmptyString);
        if (tmp && tmp.length > 0) {
          clone[key] = tmp;
        }
        return;
      }
      const temp = stripNulls(value, bAllowEmptyString);
      if (temp) {
        clone[key] = temp;
      }
    });
    return Object.keys(clone).length > 0 ? clone : null;
  }
  function filterEmptyValues(val) {
    if (val === null || val === void 0) {
      return null;
    }
    if (val === "") {
      return null;
    }
    if (typeof val === "object" && !doesObjectHaveValues(val)) {
      return null;
    }
    return val;
  }

  // ../client-script-core/src/state_tracker/scraper/index.ts
  var scrapeState = (wrappedPromiseScrapingFunctions, eventTargets, callback) => {
    logTiny13.logInfo("found scraping functions");
    logTiny13.logObj(wrappedPromiseScrapingFunctions);
    const scrapedState = {};
    const scrapingPromises = [];
    for (const subStateName in wrappedPromiseScrapingFunctions) {
      if ({}.hasOwnProperty.call(wrappedPromiseScrapingFunctions, subStateName)) {
        if (wrappedPromiseScrapingFunctions[subStateName].promisedState) {
          scrapingPromises.push(wrappedPromiseScrapingFunctions[subStateName].promisedState(eventTargets));
        }
      }
    }
    if (!scrapingPromises.length) {
      return promises_default.resolve(callback(null));
    }
    return promises_default.all(scrapingPromises).then((results) => {
      results.forEach((result) => {
        let filteredState;
        if (result.name === "tagBag") {
          filteredState = stripNulls(result.state, true);
        } else {
          result.state = stripNulls(result.state, false);
          filteredState = filterEmptyValues(result.state);
        }
        if (filteredState === false || filteredState) {
          scrapedState[result.name] = filteredState;
        }
      });
      return callback(null, scrapedState);
    }).catch((err) => {
      return callback(err, null);
    });
  };
  var scrapeAndDiffState = (internalScrapingFunctions, customScrapingPromises, prescrapedState, stateToCompareAgainst, startingState, legacyState2, eventTargets, callback) => {
    const cleanedPrescrapeState = filterEmptyValues(stripNulls(prescrapedState, false));
    scrapeState(internalScrapingFunctions, eventTargets, (internalErr, internalScrapedState) => {
      if (internalErr) {
        return callback(internalErr, null);
      }
      logTiny13.logInfo("internal state");
      logTiny13.logObj(internalScrapedState);
      scrapeState(customScrapingPromises, eventTargets, (err, customScrapedState) => {
        if ((!startingState || !startingState.basket) && customScrapedState && customScrapedState.basket && (!customScrapedState.basket.items || customScrapedState.basket.items.length === 0)) {
          delete customScrapedState.basket;
        }
        const mergedState = (0, import_object_assign4.default)({}, startingState, legacyState2, customScrapedState || {}, cleanedPrescrapeState || {}, internalScrapedState);
        if (legacyState2 && legacyState2.customer && customScrapedState && customScrapedState.customer) {
          if (legacyState2.customer.phone && customScrapedState.customer.phone) {
            customScrapedState.customer.phone = (0, import_object_assign4.default)(legacyState2.customer.phone, customScrapedState.customer.phone);
          }
          mergedState.customer = (0, import_object_assign4.default)(legacyState2.customer, customScrapedState.customer);
        }
        if (err) {
          return callback(
            err,
            {
              diff: diffState(stateToCompareAgainst, internalScrapedState),
              scrapedState: internalScrapedState
            }
          );
        }
        logTiny13.logInfo("custom state");
        logTiny13.logObj(customScrapedState);
        return callback(null, {
          diff: diffState(stateToCompareAgainst, mergedState),
          scrapedState: mergedState
        });
      });
    });
  };
  var init3 = (internalScrapingPromises, customScrapingPromises) => {
    const boundDiffScrape = (stateToCompareAgainst, startingState, legacyState2, prescrapedState, eventTargets = [], callback) => {
      scrapeAndDiffState(internalScrapingPromises, customScrapingPromises, prescrapedState, stateToCompareAgainst, startingState, legacyState2, eventTargets, callback);
    };
    return {
      scrapeAndCompareState(stateToCompareAgainst, existingState, legacyState2, prescrapedState, onStateScrapedAndDiffedCallback, eventTargets = []) {
        boundDiffScrape(stateToCompareAgainst, existingState, legacyState2, prescrapedState, eventTargets, (err, scrapeAndDiffResult) => {
          if (!scrapeAndDiffResult) {
            scrapeAndDiffResult = {
              scrapedState: {}
            };
          }
          if (err) {
            if (onStateScrapedAndDiffedCallback) {
              onStateScrapedAndDiffedCallback(err, scrapeAndDiffResult.diff, {}, scrapeAndDiffResult.scrapedState);
            }
            return;
          }
          if (scrapeAndDiffResult.diff) {
            const mergedState = (0, import_object_assign4.default)({}, stateToCompareAgainst, scrapeAndDiffResult.diff);
            logTiny13.logInfo("state changed");
            logTiny13.logInfo("existing state");
            logTiny13.logObj(existingState);
            logTiny13.logInfo("diff");
            logTiny13.logObj(scrapeAndDiffResult.diff);
            logTiny13.logInfo("merged state");
            logTiny13.logObj(mergedState);
            if (onStateScrapedAndDiffedCallback) {
              return onStateScrapedAndDiffedCallback(err, scrapeAndDiffResult.diff, mergedState, scrapeAndDiffResult.scrapedState);
            }
          }
          if (onStateScrapedAndDiffedCallback) {
            onStateScrapedAndDiffedCallback(err, null, (0, import_object_assign4.default)({}, stateToCompareAgainst), scrapeAndDiffResult.scrapedState);
          }
        });
      }
    };
  };

  // ../client-script-core/src/state_tracker/triggerScraper.ts
  init_define_APP_CONFIG();

  // ../client-script-core/interfaces/impressions/Trigger.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/state_tracker/triggerScraper.ts
  function getOSRTriggerType(event) {
    if (!event.data) {
      return;
    }
    switch (event.data.eventType) {
      case "TRIGGER:MOUSE_OUT":
        return { type: "MouseOut" /* MouseOut */ };
      case "TRIGGER:IDLE_TIME":
        return { type: "IdleTime" /* IdleTime */ };
      case "TRIGGER:PAGE_VISIBILITY":
        return { type: "PageVisibility" /* PageVisibility */ };
      default:
    }
  }
  function getTriggerEvent(event) {
    if (event.domEvent) {
      return {
        eventType: event.domEvent.type,
        scriptSelector: event.selector,
        type: "DomEvent" /* DomEvent */
      };
    }
    switch (event.name) {
      case "DOMMUTATION":
        return { type: "DomMutation" /* DomMutation */ };
      case "URL_CHANGE":
        return { type: "UrlChange" /* UrlChange */ };
      case "TRIGGER:MOUSE_OUT":
        return { type: "MouseOut" /* MouseOut */ };
      case "TRIGGER:IDLE_TIME":
        return { type: "IdleTime" /* IdleTime */ };
      case "TRIGGER:PAGE_VISIBILITY":
        return { type: "PageVisibility" /* PageVisibility */ };
      case "EVENT:OSR_SAVE":
      case "EVENT:OSR_CONTINUE":
      case "EVENT:OSR_CLOSE":
      case "EVENT:OSR__STATE_CHANGE":
        return { type: "OSREvent" /* OSREvent */ };
      case "EVENT:RTM_SUBMIT":
      case "EVENT:RTM_CANCEL_CLOSE":
      case "EVENT:RTM_CONSENT_OPT_IN":
      case "EVENT:RTM_CONSENT_OPT_OUT":
        return { type: "RTMEvent" /* RTMEvent */ };
      // todo -> add a getOSRTriggerType call based on an RTM_SHOWN (we'll need this for reporting cause of trigger)
      case "EVENT:OSR_SHOWN":
        return getOSRTriggerType(event);
      default:
    }
  }
  function triggerScraper(events, eventTargets) {
    if (!Array.isArray(events)) {
      return null;
    }
    const triggerEvents = events.filter((event) => {
      return event.name;
    });
    if (triggerEvents && triggerEvents.length > 0) {
      for (let i = 0; i < triggerEvents.length; i++) {
        const trigger = getTriggerEvent(triggerEvents[i]);
        if (trigger) {
          return trigger;
        }
      }
    }
    if (events.some((et) => et === "PAGE_VIEW")) {
      return {
        type: "PageLoad" /* PageLoad */
      };
    }
    return null;
  }

  // ../client-script-core/src/state_tracker/index.ts
  var storedState = {};
  var legacyState = {};
  var isScraping = false;
  var scrapeWaitingArgs = [];
  var clearState = () => {
    storedState = {};
  };
  var fireEvents2 = (events) => {
    return fireEvents(null, storedState, storedState, events);
  };
  var forceSetState = (startingState) => {
    storedState = (0, import_object_assign5.default)({}, startingState);
  };
  var handleScrapingResult = (err, wrappedPromiseScrapingFunctions, clientConfig, api, diff, mergedState, scrapedState, existingEvents = [], eventTargets) => {
    const events = existingEvents.slice(0);
    const changeFunctions = [];
    if (diff) {
      for (const substateName in diff) {
        if ({}.hasOwnProperty.call(diff, substateName)) {
          if (wrappedPromiseScrapingFunctions.subStates[substateName] && wrappedPromiseScrapingFunctions.subStates[substateName].onChange) {
            wrappedPromiseScrapingFunctions.subStates[substateName].onChange(clientConfig, events, scrapedState);
          }
        }
        events.push(`${substateName.toUpperCase()}_CHANGED`);
      }
      events.push("STATE_CHANGED");
      changeFunctions.push((callback) => {
        fireStateChange(diff, mergedState, scrapedState).then((result) => {
          callback(null, result);
        }).catch((postErr) => {
          callback(postErr);
        });
      });
    }
    return promises_default.resolve().then(() => {
      if (wrappedPromiseScrapingFunctions.postScrape) {
        return wrappedPromiseScrapingFunctions.postScrape(clientConfig, diff, api, events, mergedState, scrapedState, eventTargets);
      }
    }).then(() => {
      const triggerScrapeResult = triggerScraper(events, eventTargets);
      if (triggerScrapeResult) {
        diff = (0, import_object_assign5.default)(diff || {}, { trigger: triggerScrapeResult });
        scrapedState = (0, import_object_assign5.default)(scrapedState || {}, { trigger: triggerScrapeResult });
        mergedState = (0, import_object_assign5.default)(mergedState || {}, { trigger: triggerScrapeResult });
      }
    }).then(() => {
      if (err) {
        let message = err.error;
        if (typeof err.error === "object") {
          message = JSON.stringify(err.error);
        }
        scrapedState.errors = [
          {
            error: message,
            errorType: `SCRAPE: ${err.name}`
          }
        ];
        events.push("ERROR");
      }
      if (events.length > 0) {
        changeFunctions.push((callback) => {
          fireEvents(diff, mergedState, scrapedState, events).then((result) => {
            callback(null, result);
          }).catch((postErr) => {
            callback(postErr);
          });
        });
      }
      changeFunctions.push((callback) => {
        firePostScrapeProcessing(diff, mergedState, scrapedState, events, eventTargets).then((result) => {
          callback(null, result);
        }).catch((postErr) => {
          callback(postErr);
        });
      });
      return new promises_default((resolve, reject) => {
        series(changeFunctions)(
          () => {
            resolve({
              diff,
              mergedState,
              scrapedState
            });
          },
          (errs) => {
            reject(errs);
          }
        );
      });
    });
  };
  function scrapeState2(scraper, callback, startingState, startingEvents, api, prescrapedState) {
    if (isScraping) {
      scrapeWaitingArgs = Array.from(arguments);
      return promises_default.resolve();
    }
    scrapeWaitingArgs = null;
    isScraping = true;
    const timeoutId = window.setTimeout(() => {
      isScraping = false;
    }, 1e3);
    const eventTargets = startingEvents ? startingEvents.filter((event) => {
      if (!event.domEvent || !event.targetElement) {
        return false;
      }
      const targetElement = event.targetElement;
      if (targetElement instanceof HTMLElement) {
        return true;
      }
      return targetElement.parentElement && (targetElement.hidden !== void 0 && targetElement.hidden !== null);
    }).map((event) => event.targetElement) : [];
    logTiny14.groupStart("state scrape");
    return new promises_default((resolve, reject) => {
      scraper.scrapeAndCompareState(storedState, startingState, legacyState, prescrapedState, (err, diff, mergedState, scrapedState) => {
        legacyState = false;
        return resolve({
          err,
          diff,
          mergedState,
          scrapedState
        });
      }, eventTargets);
    }).then((comparisonResult) => {
      logTiny14.groupEnd();
      if (comparisonResult.err) {
        logTiny14.logError("state scraping error", comparisonResult.err);
      }
      storedState = comparisonResult.mergedState;
      return callback(comparisonResult.err, comparisonResult.diff, comparisonResult.mergedState, comparisonResult.scrapedState, startingEvents, eventTargets);
    }).then((comparisonResult) => {
      return new promises_default((resolve, reject) => {
        setTimeout(() => {
          isScraping = false;
          window.clearTimeout(timeoutId);
          if (scrapeWaitingArgs) {
            return resolve(scrapeState2.apply(comparisonResult.scrapedState, scrapeWaitingArgs));
          }
          resolve(comparisonResult);
        }, 100);
      });
    });
  }
  var init4 = (startingState, legState, clientConfig, api, extraScrapers) => {
    storedState = (0, import_object_assign5.default)({}, startingState);
    legacyState = (0, import_object_assign5.default)({}, legState);
    const wrappedInternalScrapers = getScrapeFunctions(extraScrapers);
    const wrappedCustomScrapers = getScrapeFunctions(clientConfig.scrapers());
    const scraper = init3(wrappedInternalScrapers.subStates, wrappedCustomScrapers.subStates);
    const boundHandleScrapeStateResult = (err, diff, mergedState, scrapedState, existingEvents = [], eventTargets) => {
      const wrappedPostScrapers = getScrapeFunctions({
        consent: clientConfig.getConsent ? clientConfig.getConsent.bind(clientConfig) : null
      });
      return promises_default.all(Object.keys(wrappedPostScrapers.subStates).map((key) => {
        const fn = wrappedPostScrapers.subStates[key];
        if (!fn) {
          return;
        }
        return fn.promisedState(scrapedState, eventTargets);
      }).filter((fn) => !!fn)).then((postScrapeResult) => {
        if (Array.isArray(postScrapeResult)) {
          postScrapeResult.forEach((scrapeResult) => {
            if (scrapeResult && scrapeResult.state) {
              if (!diff) {
                diff = {};
              }
              if (!mergedState) {
                mergedState = {};
              }
              if (!scrapedState) {
                scrapedState = {};
              }
              diff[scrapeResult.name] = scrapeResult.state;
              mergedState[scrapeResult.name] = scrapeResult.state;
              scrapedState[scrapeResult.name] = scrapeResult.state;
            }
          });
        }
      }).then(() => {
        return handleScrapingResult(
          err,
          (0, import_object_assign5.default)({}, wrappedInternalScrapers, wrappedCustomScrapers),
          clientConfig,
          api,
          diff,
          mergedState,
          scrapedState,
          existingEvents,
          eventTargets
        );
      });
    };
    const boundScrapeState = (ss, se, prescrapedState) => {
      scrapeState2(scraper, boundHandleScrapeStateResult, ss, se, api, prescrapedState);
    };
    return {
      clearState,
      eventBus: event_bus_exports,
      fireEvents: fireEvents2,
      forceSetState,
      scrapeState: boundScrapeState
    };
  };

  // ../client-script-core/src/api/index.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/api/fluent/index.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/api/fluent/collection.ts
  init_define_APP_CONFIG();
  var FluentCollection = class _FluentCollection {
    /**
    * Create a fluent collection
    * @param {values[]} values - the values to use as a base of the collection
    */
    constructor(values, valueType) {
      this.myValues = values;
      this.ValueType = valueType;
    }
    /**
    * Convert from a FluentCollection to a normal collection
    * @return {Array} - the underlying collection.
    */
    done() {
      if (this.isEmpty()) {
        return [];
      }
      const underlyingValues = [];
      this.myValues.forEach((value) => {
        if (value) {
          let val;
          if (value.done) {
            val = value.done();
          } else {
            val = value;
          }
          if (val) {
            underlyingValues.push(val);
          }
        }
      });
      return underlyingValues;
    }
    forEach(func) {
      if (this.isEmpty() || !func) {
        return this;
      }
      this.myValues.forEach(func);
      return this;
    }
    /**
     * Get the length of the collection
     * @returns {number} the length of the collection
     */
    length() {
      return this.isEmpty() ? 0 : this.myValues.length;
    }
    /**
     * get the underlying collection
     * @returns the underlying collection
     */
    values() {
      return this.myValues;
    }
    /**
    * Check of the collection exists and there are elements in it
    * @returns {boolean} true if elements exist else false
    */
    exists() {
      return this.myValues && this.myValues.length > 0;
    }
    /**
     * get the array element at [index]
     * @returns the element
     */
    getAt(index) {
      if (index >= 0 && index < this.myValues.length) {
        return this.myValues[index];
      }
      if (this.ValueType) {
        return new this.ValueType();
      }
      return null;
    }
    /**
     * Returns the first element of the collection.
     * Convenience method for getAt(0).
     * @returns the first element
     */
    first() {
      return this.getAt(0);
    }
    /**
     * Returns the last element of the collection.
     * Convenience method for getAt(length() - 1).
     * @returns the last element
     */
    last() {
      const length = this.length();
      if (length > 0) {
        return this.getAt(length - 1);
      } else {
        return this.getAt(0);
      }
    }
    /**
     * Check to see if this collection is empty
     * @returns {boolean} true if empty else false if we have items
     */
    isEmpty() {
      return Array.isArray(this.myValues) ? this.myValues.length < 1 : true;
    }
    /**
    * create a new fluent collection by mapping each element in the collection using the provided function
    * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map}
    * @param {function} func - The mapping function to use.
    * @return {FluentCollection<U>} - the mapped FluentCollection.
    */
    map(func) {
      if (this.isEmpty() || !func) {
        return new _FluentCollection([], this.ValueType);
      }
      return new _FluentCollection(this.myValues.map(func), this.ValueType);
    }
    /**
    * create a new fluent collection by filtering each element in the collection using the provided function
    * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter}
    * @param {function} func - The filtering function to use.
    * @return {FluentCollection<T>} - the filter FluentCollection.
    */
    filter(func) {
      if (this.isEmpty() || !func) {
        return this;
      }
      return new _FluentCollection(this.myValues.filter(func), this.ValueType);
    }
    /**
    * find the first element that matches the supplied filtering function;
    * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter}
    * @param {function} func - The filtering function to use.
    * @return {T | FluentValue<null>} - the value.
    */
    find(func) {
      if (this.isEmpty() || !func) {
        if (this.ValueType) {
          return new this.ValueType();
        }
        return void 0;
      }
      const resultArr = this.myValues.filter(func);
      const result = resultArr ? resultArr[0] : null;
      if (result === null || result === void 0) {
        if (this.ValueType) {
          return new this.ValueType();
        }
        return void 0;
      }
      return result;
    }
  };

  // ../client-script-core/src/api/fluent/element.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/api/fluent/value.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/api/prices.ts
  init_define_APP_CONFIG();
  var Prices = class {
    /**
     * converts a price string to a number based decimal
     * can deal with most seperator types
     * @param {string} src the string to convert
     * @return {number | null} the string as a decimal
     */
    static priceStringToDecimal(src) {
      if (!src) {
        return null;
      }
      let seperatorIndex = src.lastIndexOf(".");
      const commaSeperatorIndex = src.lastIndexOf(",");
      if (commaSeperatorIndex > seperatorIndex) {
        seperatorIndex = commaSeperatorIndex;
      }
      if (seperatorIndex !== -1) {
        const charactersAfterSeperator = src.length - 1 - seperatorIndex;
        if (charactersAfterSeperator > 2) {
          seperatorIndex = -1;
        }
      }
      let decimalPrice = src;
      if (seperatorIndex > -1) {
        const preSeperator = src.substr(0, seperatorIndex).replace(".", "").replace(",", "");
        const postSeperator = src.substr(seperatorIndex + 1);
        decimalPrice = `${preSeperator}.${postSeperator}`;
      } else {
        decimalPrice = src.replace(".", "").replace(",", "");
      }
      const parsedPrice = parseFloat(decimalPrice);
      if (!isNaN(parsedPrice)) {
        return parsedPrice;
      } else {
        return null;
      }
    }
    /**
     * converts a decimal number to a string with 2 decimal points
     * e.g 2 -> "2.00"
     * can deal with most seperator types
     * @param {number} src the number to convert
     * @return {string | null} the number as a 2 decimal point string
     */
    static priceToFixed(src) {
      if (src === null || src === void 0) {
        return null;
      }
      return src.toFixed(2);
    }
  };

  // ../client-script-core/src/api/fluent/value.ts
  var FluentValue = class _FluentValue {
    /**
    * Create a fluent value
    * @param {T} value - any raw type
    */
    constructor(val) {
      this.val = val;
    }
    /**
    * Convert from a FluentValue to a normal value
    * @return {T} - the underlying value.
    */
    done() {
      if (this.val !== null && this.val !== void 0) {
        return this.val;
      }
      return null;
    }
    /**
    * true if the value is not null or undefined
    */
    exists() {
      return this.val !== void 0 && this.val !== null;
    }
    /**
     * extract a substring from between two other substrings
     * @param startString {string} the first string to match against
     * @param endString {string} the last string to match against
     * @return {FluentValue<string>}
     */
    between(startString, endString) {
      if (this.val && typeof this.val === "string") {
        return new _FluentValue(Strings.between(this.val, startString, endString));
      }
      return new _FluentValue(null);
    }
    /**
    * If we can turn this into an int then do it
    * @return {FluentValue<number>}
    */
    toInt() {
      if (this.val !== null && this.val !== void 0) {
        const i = parseInt(this.val.toString(), 10);
        if (!isNaN(i)) {
          return new _FluentValue(i);
        }
      }
      return new _FluentValue(null);
    }
    /**
    * If we can turn this into a boolean then do it
    * @return {FluentValue<number>}
    */
    toBoolean() {
      if (typeof this.val === "boolean") {
        return new _FluentValue(this.val);
      }
      if (typeof this.val === "string") {
        switch (this.val.toLowerCase()) {
          case "true":
          case "1":
          case "on":
          case "yes":
          case "y":
            return new _FluentValue(true);
          case "false":
          case "0":
          case "off":
          case "no":
          case "n":
            return new _FluentValue(false);
          default:
            return new _FluentValue(null);
        }
      }
      return new _FluentValue(null);
    }
    /**
    * If we can turn this into an float then do it
    * @return {FluentValue<number>}
    */
    toFloat() {
      if (this.val !== null && this.val !== void 0) {
        const i = parseFloat(this.val.toString());
        if (!isNaN(i)) {
          return new _FluentValue(i);
        }
      }
      return new _FluentValue(null);
    }
    /**
    * If we can turn this into an float then do it
    * @return {FluentValue<number>}
    */
    priceToFloat() {
      const filteredVal = this.firstMatch(Strings.regexList.PRICE);
      return new _FluentValue(Prices.priceStringToDecimal(filteredVal.done()));
    }
    floatToFixedString() {
      if (this.val && typeof this.val === "number") {
        return new _FluentValue(Prices.priceToFixed(this.val));
      }
      return new _FluentValue(null);
    }
    /**
    * If the value includes the passed string then keep it, otherwise discard it
    * @return boolean
    */
    includes(stringToTestFor, caseInsensitive = false) {
      if (this.val && typeof this.val === "string") {
        return Strings.includes(this.val, stringToTestFor, caseInsensitive);
      }
      return false;
    }
    /**
     * Check the value for all the strings in the test array
     * @return boolean
     */
    includesAll(stringsToTestFor, caseInsensitive = false) {
      if (!Array.isArray(stringsToTestFor) || !this.val || typeof this.val !== "string") {
        return false;
      }
      for (let i = 0; i < stringsToTestFor.length; i++) {
        if (!Strings.includes(this.val, stringsToTestFor[i], caseInsensitive)) {
          return false;
        }
      }
      return true;
    }
    /**
     * Check the value for any the strings in the test array
     * @return boolean
     */
    includesSome(stringsToTestFor, caseInsensitive = false) {
      if (!Array.isArray(stringsToTestFor) || !this.val || typeof this.val !== "string") {
        return false;
      }
      for (let i = 0; i < stringsToTestFor.length; i++) {
        if (Strings.includes(this.val, stringsToTestFor[i], caseInsensitive)) {
          return true;
        }
      }
      return false;
    }
    /**
    * set the value to the first match that matches the regex
    * @param {RegExp} regex - the regular expression to match
    * @return {FluentValue<string>}
    */
    firstMatch(regex) {
      if (this.val && typeof this.val === "string") {
        return new _FluentValue(Strings.firstMatch(this.val, regex));
      }
      return new _FluentValue(null);
    }
    /**
    * remove carriage returns and other garbage characters
    * @return {FluentValue<T>}
    */
    clean() {
      if (this.val && typeof this.val === "string") {
        return new _FluentValue(Strings.clean(this.val));
      }
      return new _FluentValue(null);
    }
    /**
    * gives back a FluentCollection of FluentValues that contains all matches
    * @param {RegExp} regex - the regular expression to match
    * @return {FluentCollection<FluentValue<string>>}
    */
    allMatches(regex) {
      const wrappedValues = [];
      if (this.val && typeof this.val === "string") {
        const underlyingValues = this.val.match(regex);
        if (Array.isArray(underlyingValues)) {
          underlyingValues.forEach((underlyingValue) => {
            wrappedValues.push(new _FluentValue(underlyingValue));
          });
        }
      }
      return new FluentCollection(wrappedValues, _FluentValue);
    }
    /**
     * as the native string replace function, replaces the first argument with the second
     * @param pattern {RegExp | string} the string to replace
     * @param replacement {string} the string to replace matches with
     * @returns {FluentValue<string>} the replaced string
     */
    replace(pattern, replacement) {
      if (this.val && typeof this.val === "string") {
        if (typeof pattern === "string") {
          return new _FluentValue(this.val.replace(pattern, replacement));
        }
        return new _FluentValue(this.val.replace(pattern, replacement));
      }
      return new _FluentValue(null);
    }
    /**
     * as the native string method, converts the string to lower case
     * @returns {FluentValue<string>}
     */
    toLowerCase() {
      if (this.val && typeof this.val === "string") {
        return new _FluentValue(this.val.toLowerCase());
      }
      return new _FluentValue(null);
    }
    /**
     * as the native string method, converts the string to upper case
     * @returns {FluentValue<string>}
     */
    toUpperCase() {
      if (this.val && typeof this.val === "string") {
        return new _FluentValue(this.val.toUpperCase());
      }
      return new _FluentValue(null);
    }
    /**
     * As the native string method, split a string into a FluentCollection based on the separator
     * @param separator {string|Regex} string or regular expression to split by
     * @param limit {number} Optional value to limit the number of results
     * @returns {FluentCollection}
     */
    split(separator, limit) {
      if (this.val === null || this.val === void 0) {
        return new FluentCollection([], _FluentValue);
      }
      if (this.val && typeof this.val === "string") {
        let temp;
        if (typeof separator === "string") {
          temp = this.val.split(separator, limit);
        } else if (separator instanceof RegExp) {
          temp = this.val.split(separator, limit);
        }
        const mapped = temp.map((value) => {
          return new _FluentValue(value);
        });
        return new FluentCollection(mapped, _FluentValue);
      }
      return new FluentCollection([this], _FluentValue);
    }
    /**
     * if the value is a string strip the protocol prefix (http:// or https://) if any from the start
     * @returns {FluentValue<string>} string without protocol or null if value was not string
     */
    stripProtocol() {
      if (this.val && typeof this.val === "string") {
        return new _FluentValue(Strings.stripProtocol(this.val));
      }
      return new _FluentValue(null);
    }
  };

  // ../client-script-core/src/api/fluent/element.ts
  var FluentElement = class _FluentElement {
    /**
    * Create a fluent element
    * @param {HTMLElement} elem - The HTMLElement to create the fluent element from
    */
    constructor(elem) {
      this.elem = elem;
    }
    /**
    * Returns the closest parent element with the given selector
    * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    * @param {string} selector - The selector for the element to find
    * @return {boolean}
    */
    closest(selector) {
      if (!this.elem) {
        return this;
      }
      return new _FluentElement(Page.closest(this.elem, selector));
    }
    /**
    * Convert from a FluentElement to a normal dom element
    * @return {HTMLElement} An html element.
    */
    done() {
      return this.elem || null;
    }
    /**
    * Find a single FluentElement matching the css selector.
    * @see {@link https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors}
    * @param {string|Array<string>} selector - The css selector.
    * @return {FluentElement} the fluent html element.
    */
    querySelector(selector) {
      if (!this.elem) {
        return this;
      }
      return new _FluentElement(Page.querySelector(selector, this.elem));
    }
    /**
    * Finds all FluentElements matching the css selector.
    * @see {@link https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors}
    * @param {string|Array<string>} selector - The css selector.
    * @return {FluentElement[]} the fluent html elements.
    */
    querySelectorAll(selector) {
      if (!this.elem) {
        return new FluentCollection([], _FluentElement);
      }
      const underlyingElements = Page.querySelectorAll(selector, this.elem);
      const wrappedPageElements = [];
      underlyingElements.forEach((underlyingElement) => {
        wrappedPageElements.push(new _FluentElement(underlyingElement));
      });
      return new FluentCollection(wrappedPageElements, _FluentElement);
    }
    /**
    * Gets the value of an attribute on the FluentElement
    * @param {string} name - The name of the attribute to get.
    * @return {FluentValue<string>} the fluent value of the attribute.
    */
    getAttribute(name, clean = true) {
      if (!this.elem) {
        return new FluentValue(void 0);
      }
      return new FluentValue(Page.getAttribute(name, this.elem, clean));
    }
    /**
    * Returns true if the element would be selected by the specified selector string; otherwise, returns false.
    * @param {string} selector - The name of the attribute to get.
    * @return {boolean}
    */
    matches(selector) {
      if (!this.elem) {
        return false;
      }
      return Page.matches(this.elem, selector);
    }
    /**
    * Check of the element exists
    * @returns {boolean} true if element exists else false
    */
    exists() {
      return !!this.elem;
    }
    /**
     * Checked if the input element has been checked
     * @returns {boolean} true if the element has been checked, else false. (Returns false if the element does not exist or has no checked attribute)
     */
    isChecked() {
      return Page.isChecked(this.elem);
    }
    focus() {
      return this.elem.focus();
    }
    isFocused() {
      return Page.isFocused(this.elem);
    }
    /**
     * Get the inner text of the element
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
     * @returns {FluentValue} the fluent value of the text content
     */
    textContent(clean = true) {
      if (!this.elem) {
        return new FluentValue(void 0);
      }
      const val = new FluentValue(this.elem.textContent || this.elem.innerText);
      if (clean) {
        return val.clean();
      }
      return val;
    }
    /**
    * Gets the value of the FluentElement
    * @return {FluentValue<string>} the fluent value of this FluentElement.
    */
    value(clean = true) {
      if (!this.elem) {
        return new FluentValue(null);
      }
      const val = Page.valueOf(this.elem, clean);
      if (typeof val === "string") {
        return new FluentValue(val);
      }
      return new FluentValue(null);
    }
    /**
    * Shortcut for a very common operation
    * equivilent to querySelector(selector).value().
    * @see {@link https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors}
    * @param {string | string[]} selector - The css selector or array of selectors.
    * @return {FluentValue} the fluent string value of the selector.
    */
    getStringValue(selector) {
      let elemSelector = selector;
      if (typeof selector === "string") {
        elemSelector = [selector];
      }
      const result = this.querySelectorAll(elemSelector).find((element) => {
        return element.value().exists();
      });
      return result ? result.value() : new FluentValue(null);
    }
    /**
    * Shortcut for a very common operation
    * equivilent to querySelector(selector).textContent().
    * @see {@link https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors}
    * @param {string | string[]} selector - The css selector or array of selectors.
    * @return {FluentValue} the fluent string value of the selector.
    */
    getTextContent(selector, clean) {
      let elemSelector = selector;
      if (typeof selector === "string") {
        elemSelector = [selector];
      }
      const result = this.querySelectorAll(elemSelector).find((element) => {
        return element.textContent(clean).exists();
      });
      return result ? result.textContent(clean) : new FluentValue(null);
    }
    /**
     * innerHTML set shortcut
     * equivalent to querySelector(selector).innerHTML = 'my html'.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML}
     * @param {string} html - The html to be set.
     * @return {FluentElement} the fluent element for the selector.
     */
    setInnerHTML(html) {
      if (!this.elem) {
        return this;
      }
      this.elem.innerHTML = html;
      return new _FluentElement(this.elem);
    }
    /**
     * textContent set shortcut
     * equivalent to querySelector(selector).textContent = 'hello world'.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML}
     * @param {string} test - The text to be set.
     * @return {FluentElement} the fluent element for the selector.
     */
    setTextContent(txt) {
      if (!this.elem) {
        return this;
      }
      this.elem.textContent = txt;
      return new _FluentElement(this.elem);
    }
    /**
     * innerHTML get shortcut
     * equivalent to querySelector(selector).innerHTML.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML}
     * @return {FluentValue} the fluent string value of the selector.
     */
    getInnerHTML() {
      if (!this.elem) {
        return new FluentValue(null);
      }
      const innerHTML = this.elem.innerHTML;
      return new FluentValue(innerHTML);
    }
    /**
     * gets a reference to the top level element in a frame
     * @return {FluentElement} the root element inside the frame
     */
    getFrameContent() {
      return new _FluentElement(Page.frameContent(this.elem));
    }
  };

  // ../client-script-core/src/api/fluent/request.ts
  init_define_APP_CONFIG();
  var FluentRequest = class {
    /**
    * Create a fluent element
    * @param {window} window - The main window element
    */
    constructor(window2) {
      this.window = window2;
    }
    /**
    * get a value from the querystring
    * @param {string} key - the key to retreive the value for
    * @return {FluentValue}
    */
    queryStringParameter(key) {
      return new FluentValue(Request.getQueryStringParameter(key, this.window.location.href));
    }
    /**
    * get the url for the current page
    * @return {FluentValue}
    */
    url() {
      return new FluentValue(this.window.location.href);
    }
  };

  // ../client-script-core/src/api/fluent/index.ts
  var FluentInstance = class {
    constructor(window2) {
      this.window = window2;
      this.doc = window2.document;
      this.request = new FluentRequest(this.window);
    }
    /**
    * get the FluentElement representing the window.document
    * @return {FluentElement}
    */
    document() {
      return new FluentElement(this.doc);
    }
    /**
    * create a FluentElement from a Document
    * @return {FluentElement}
    */
    fromDocument(context) {
      return new FluentElement(context.querySelector("html"));
    }
    /**
    * create a FluentElement from an HtmlElement
    * @return {FluentElement}
    */
    fromElement(element) {
      return new FluentElement(element);
    }
    /**
    * create a FluentValue from a value
    * @return {FluentValue<T>}
    */
    fromValue(value) {
      return new FluentValue(value);
    }
    /**
    * create a FluentCollection from an array
    * @return {FluentCollection<T>}
    */
    fromCollection(values, valueType = null) {
      return new FluentCollection(values, valueType);
    }
    /**
    * Shortcut for a very common operation
    * If given a string equivilent to querySelector(selector).value().trim().
    * If given an array equivilent to querySelectorFirst(selector).value().trim().
    * @see {@link https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors}
    * @param {string | string[]} selector - The css selector or array of selectors.
    * @return {FluentValue<string>} the fluent string value of the selector.
    */
    getStringValue(selector) {
      return new FluentElement(this.doc).getStringValue(selector);
    }
    /**
     * Shortcut for a very common operation
     * If given a string equivalent to querySelector(selector).textContent().
     * @see {@link https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors}
     * @param {string | string[]} selector - The css selector or array of selectors.
     * @return {FluentValue<string>} the fluent string value of the selector.
     */
    getTextContent(selector, clean) {
      return new FluentElement(this.doc).getTextContent(selector, clean);
    }
    /**
    * Find a single FluentElement matching the css selector.
    * @see {@link https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors}
    * @param {string | Array<string>} selector - The css selector.
    * @return {FluentElement} the fluent html element.
    */
    querySelector(selector) {
      return new FluentElement(this.doc).querySelector(selector);
    }
    /**
    * Finds all FluentElements matching the css selector.
    * @see {@link https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors}
    * @param {string | Array<string>} selector - The css selector.
    * @return {FluentElement[]} the fluent html elements.
    */
    querySelectorAll(selector) {
      return new FluentElement(this.doc).querySelectorAll(selector);
    }
  };
  function init5(window2) {
    return new FluentInstance(window2);
  }

  // ../client-script-core/src/api/objects.ts
  init_define_APP_CONFIG();
  var import_object_assign6 = __toESM(require_object_assign());
  var _Objects = class _Objects {
    /**
     * Safely parse string as JSON
     * @returns {any} the JSON object, or null
     */
    static parseJSON(val) {
      if (val && typeof val === "string") {
        try {
          return SafeJson.parse(val);
        } catch (ex) {
          return null;
        }
      }
      return null;
    }
    /**
     * Safely convert a json object to a sting
     * @returns {string|null} the string representing the json object, or null
     */
    static stringifyJSON(val, replacer, space) {
      if (val) {
        try {
          return SafeJson.stringify(val, replacer, space);
        } catch (ex) {
          return null;
        }
      }
      return null;
    }
    /**
     * Deep clone an object to create a whole new object
     * @param {any} objToClone the object to clone
     * @returns {any|null} the cloned object
     */
    static deepClone(objToClone) {
      return _Objects.parseJSON(_Objects.stringifyJSON(objToClone));
    }
  };
  _Objects.assign = import_object_assign6.default;
  var Objects = _Objects;

  // ../client-script-core/src/api/collection.ts
  init_define_APP_CONFIG();
  var Collection = class {
    static find(values, func) {
      if (!Array.isArray(values)) {
        return null;
      }
      const resultArr = values.filter(func);
      return resultArr ? resultArr[0] : null;
    }
    /**
     * deduplicates the array passed in
     * @param {array} values an array of items
     * @returns {T[]} an array without duplicates
     */
    static dedupe(values) {
      if (!Array.isArray(values)) {
        return null;
      }
      return values.filter((item, pos, self2) => {
        return self2.indexOf(item) === pos;
      });
    }
  };

  // ../client-script-core/src/api/device.ts
  init_define_APP_CONFIG();
  var Device = class {
    /**
     * Does the current user agent indicate if the device is a mobile.
     * @returns {boolean} the value from the query string or null if not found
     */
    static isMobile() {
      return !!Strings.firstMatch(userAgent(), /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/);
    }
  };

  // ../client-script-core/src/api/storage.ts
  init_define_APP_CONFIG();
  var Storage = class {
    /**
     * Create storage api with the best store available
     */
    constructor(replicatedStore) {
      this.replicatedStore = replicatedStore;
    }
    /**
     * Does the specified key exist in local storage
     * @param {string} key the key to check for
     * @returns {Promise<boolean>} true if the key exists, else false
     */
    exists(name) {
      return this.replicatedStore.getValue(name).then((value) => {
        return value !== null && value !== void 0;
      });
    }
    /**
     * Get a value for the specified name
     * @param {string} key the key to get
     * @returns {Promise<any>} the value for the key stored
     */
    getValue(name) {
      let timeoutRef;
      const timeoutPromise = new promises_default((resolve, reject) => {
        timeoutRef = window.setTimeout(() => {
          reject("storage.get:timeout");
        }, 4e3);
      });
      const getValue = () => {
        return this.replicatedStore.getValue(name).then((value) => {
          if (timeoutRef) {
            clearTimeout(timeoutRef);
          }
          return value;
        });
      };
      return promises_default.race([getValue(), timeoutPromise]);
    }
    /**
     * Adds the specified key and value into storage
     * will expire in 2 hours by default and cull by expiry if we are running out of space
     * @param {string} key the key to store the value against
     * @param {any} value the value to store
     * @param {number} [expiresInMinutes=120] the expiry time (defaults to 120 seconds)
     * @returns {Promise<boolean>} true if storage succeeded, else false
     */
    setValue(name, value, expiresInMinutes) {
      let timeoutRef;
      const timeoutPromise = new promises_default((resolve, reject) => {
        timeoutRef = window.setTimeout(() => {
          reject("storage.set:timeout");
        }, 4e3);
      });
      const setValue = () => {
        return this.replicatedStore.setValue(name, value, expiresInMinutes).then((result) => {
          if (timeoutRef) {
            clearTimeout(timeoutRef);
          }
          return result;
        });
      };
      return promises_default.race([setValue(), timeoutPromise]);
    }
    /**
     * Removed the specified key from storage
     * @param {string} name The key to be deleted
     * @returns {Promise<boolean>} true if deleted successfully, else false
     */
    removeValue(name, paths) {
      return this.replicatedStore.removeValue(name, paths);
    }
  };

  // ../client-script-core/src/api/index.ts
  var logging = __toESM(require_log_tiny());
  var browserCaps = getInitialCapabilities();
  var Api = class {
    constructor(window2, replicatedStore) {
      this.logging = logging;
      this.objects = Objects;
      this.page = Page;
      this.request = Request;
      this.strings = Strings;
      this.collection = Collection;
      this.device = Device;
      this.messageChannel = XhrChannel.getChannel(browserCaps);
      this.prices = Prices;
      this.fluent = init5(window2);
      this.storage = new Storage(replicatedStore);
    }
  };
  function init6(window2, replicatedStore) {
    return new Api(window2, replicatedStore);
  }

  // ../client-script-core/src/featureInterface.ts
  var import_object_assign7 = __toESM(require_object_assign());

  // ../client-script-core/src/triggers/triggerScrape.ts
  init_define_APP_CONFIG();
  var triggerScrape_default = (featureInterface) => {
    const callback = (rebindEvents) => {
      const options = [{
        clientSideOnly: true,
        name: "TRIGGER:MANUAL_SCRAPE",
        rebindEvents
      }];
      if (rebindEvents) {
        setTimeout(() => {
          featureInterface.scrapeState({}, options);
        }, 250);
        return;
      }
      featureInterface.scrapeState({}, options);
    };
    return callback;
  };

  // ../client-script-core/src/triggers/dom.ts
  init_define_APP_CONFIG();
  var arrBoundEvents = [];
  function getBoundEvents() {
    return arrBoundEvents.map((item) => ({
      eventType: item.name,
      selector: item.selector
    }));
  }
  function bindEvents(api, event, elementSelectors, callback, parentElement) {
    if (!Array.isArray(elementSelectors)) {
      elementSelectors = [elementSelectors];
    }
    elementSelectors.forEach((selectorConfig) => {
      let selector;
      let rebind = false;
      let delay = 250;
      if (typeof selectorConfig === "string") {
        selector = selectorConfig;
      } else {
        selector = selectorConfig.selector;
        rebind = selectorConfig.rebind || false;
        if (selectorConfig.delay && selectorConfig.delay > 250) {
          delay = selectorConfig.delay;
        }
      }
      let elems;
      if (parentElement) {
        elems = api.page.querySelectorAll(selector, parentElement);
      } else {
        elems = api.page.querySelectorAll(selector);
      }
      if (!Array.isArray(elems)) {
        return;
      }
      elems.forEach((element) => {
        const bAlreadyBound = arrBoundEvents.some((item) => {
          return item.name === event && item.el === element;
        });
        if (bAlreadyBound) {
          return;
        }
        try {
          const boundCB = (cbEvent) => callback(element, rebind, delay, cbEvent, selector);
          arrBoundEvents.push({
            selector,
            name: event,
            el: element
          });
          on(event, boundCB, element);
        } catch (ex) {
          throw ex;
        }
      });
    });
  }
  var watch = (triggers, api, onchangeCallback) => {
    for (const evt in triggers.events) {
      if ({}.hasOwnProperty.call(triggers.events, evt)) {
        bindEvents(api, evt, triggers.events[evt], onchangeCallback);
      }
    }
    if (triggers.iFrames) {
      triggers.iFrames.forEach((iFrameEvent) => {
        if (iFrameEvent.iframeSelector && iFrameEvent.events) {
          const iFrameElements = api.page.querySelectorAll(iFrameEvent.iframeSelector);
          iFrameElements.forEach((iFrameElement) => {
            const iFrameDocument = api.page.frameContent(iFrameElement);
            if (iFrameDocument) {
              for (const evt in iFrameEvent.events) {
                if ({}.hasOwnProperty.call(iFrameEvent.events, evt)) {
                  bindEvents(api, evt, iFrameEvent.events[evt], onchangeCallback, iFrameDocument);
                }
              }
            }
          });
        }
      });
    }
  };
  function initScraperTriggers(featureInterface) {
    if (!featureInterface.triggers || !featureInterface.triggers.events) {
      return;
    }
    const callback = (target, rebindEvents, delay, event, selector) => {
      const options = [{
        domEvent: event,
        targetElement: target,
        clientSideOnly: true,
        name: "TRIGGER:DOM_CHANGE",
        rebindEvents,
        selector
      }];
      if (rebindEvents) {
        setTimeout(() => {
          featureInterface.scrapeState({}, options);
        }, delay);
        return;
      }
      featureInterface.scrapeState({}, options);
    };
    watch(featureInterface.triggers, featureInterface.api, callback);
    featureInterface.eventBus.onRebindEvents(() => {
      watch(featureInterface.triggers, featureInterface.api, callback);
    });
  }

  // ../client-script-core/src/cookieManager.ts
  init_define_APP_CONFIG();
  var COOKIE_NAMES = {
    MACHINE_GUID: "_sc_machine_guid",
    MACHINE_ID: "_sc_machine_id",
    SESSION_ID: "_sc_session_id"
  };
  var retrieveOrSetIds = (store, clientInformation, cookieManagerUrl) => __async(null, null, function* () {
    const url = `${cookieManagerUrl}?siteid=${clientInformation.sharedApiKey}`;
    const xhr = initializeXMLHttpRequest(url, "POST", true);
    const storedIds = yield promises_default.all([
      store.getValue("machine_id"),
      store.getValue("machine_guid"),
      store.getValue(`session_id_${clientInformation.sharedApiKey}`)
    ]);
    const body = yield sendXhr(xhr, "POST", {
      _sc_machine_id: storedIds[0] || void 0,
      _sc_machine_guid: storedIds[1] || void 0,
      _sc_session_id: storedIds[2] || void 0
    });
    const ids = {
      machineIds: {
        machineGuid: body[COOKIE_NAMES.MACHINE_GUID].value,
        machineId: body[COOKIE_NAMES.MACHINE_ID].value
      },
      sessionId: body[COOKIE_NAMES.SESSION_ID].value
    };
    store.setValue("machine_id", ids.machineIds.machineId, 5256e3, true);
    store.setValue("machine_guid", ids.machineIds.machineGuid, 5256e3, true);
    store.setValue(
      `session_id_${clientInformation.sharedApiKey}`,
      ids.sessionId,
      clientInformation.sessionExpiryInMinutes || 30,
      true
    );
    return ids;
  });

  // ../client-script-core/src/utils/removeUnneededRTMValuesForV1.ts
  init_define_APP_CONFIG();
  var ImpressionAlterer = class _ImpressionAlterer {
    /**
    * Transorms an impression before sending it to impressions-salecycle-com for validation.
    *
    * @param impression The impression being sent
    * @returns The updated impression with the necessary parameters being transformed.
    */
    static transform(impression) {
      impression = _ImpressionAlterer.removeUnneededRTMValuesForV1(impression);
      impression = _ImpressionAlterer.addPiiToConsent(impression);
      return impression;
    }
    /**
    * Removes unneeded RTM values from the V1 objects. In some instances there will be more fields
    * scraped than is needed for V1. The scraped values are needed in state in order for RTM to access
    * the fields, but V1's validation will fail as the fields aren't recognised. We transform the impression at this
    * point in order to send an impression that satisfies both RTM and V1.
    *
    * @param impression The impression being sent
    * @returns The updated impression with any RTM values removed for V1.
    * @deprecated This will be no longer needed once V1 has been decommissioned or the validation has been updated to account for the new fields
    */
    static removeUnneededRTMValuesForV1(impression) {
      const customerFieldsToRemove = [
        "ukResident",
        "acceptTCs",
        "nearestStore",
        "source",
        "b2b",
        "ageOver18",
        "nearestStore",
        "occupation",
        "customFields",
        "country"
      ];
      if (!impression.customer) {
        return impression;
      }
      for (const field of customerFieldsToRemove) {
        if (impression.customer[field]) {
          delete impression.customer[field];
        }
      }
      return impression;
    }
    /**
    * Adds value to consent, either email if present or phone number as a fallback.
    * We need to alter the consent object in order to satisfy validation issues in our backend services.
    * We need to do it at this point as we're not always guarantee that we are scraping the email inside the rtm helper.
    * This will ensure that the value is always populated.
    * @param impression The impression being sent
    * @returns The updated impression with consent value if related Pii is present.
    */
    static addPiiToConsent(impression) {
      var _a;
      const { consent, email, phone, events } = impression;
      if (consent && consent.length && !consent[0].value) {
        const piiValue = (_a = email == null ? void 0 : email.value) != null ? _a : phone == null ? void 0 : phone.mobile;
        consent[0].value = piiValue;
        if (events) {
          events.forEach((event) => {
            const scrapeEvent = event;
            if (scrapeEvent.name === "EVENT:RTM_SUBMIT" && scrapeEvent.data.consent) {
              scrapeEvent.data.consent[0].value = piiValue;
            }
          });
        }
      }
      return impression;
    }
  };

  // ../client-script-core/src/featureInterface.ts
  var FeatureInterface = class {
    // RtmListener instance, stored when rtm feature is initialized
    // tslint:disable-next-line:variable-name no-shadowed-variable
    constructor(browserCapabilities2, window2, config, Implementation2) {
      this.config = config;
      this.browserCapabilities = browserCapabilities2;
      this.stores = this.getStores(config);
      this.api = init6(window2, this.stores.replicated);
      this.implementationInstance = new Implementation2(this.api);
    }
    getImplementationInstance() {
      return this.implementationInstance;
    }
    /**
     * Store the RtmListener instance when the rtm feature is initialized
     * @param rtmListener - The RtmListener instance
     */
    setRtmListener(rtmListener) {
      this.rtmListener = rtmListener;
    }
    /**
     * Get the RtmListener instance if it exists
     * @returns The RtmListener instance or undefined
     */
    getRtmListener() {
      return this.rtmListener;
    }
    /**
     * Create a tracker object to monitor events and state changes
     * @returns {{eventBus, clearState, forceSetState, scrapeState, fireEvents}}
     */
    createTracker(legacySession) {
      const tracker = init4(this.storedState, legacySession, this.implementationInstance, this.api, this.getExtraScrapers());
      tracker.eventBus.onEvents((diffState2, mergedState, scrapedState, events) => this.onEvents(diffState2, mergedState, scrapedState, events));
      tracker.eventBus.onPostScrapeProcessing((diff, mergedState, scrapedState, events, eventTargets) => this.onPostScrapeProcessing(diff, mergedState, scrapedState, events, eventTargets));
      tracker.eventBus.onStateChange((diffState2, mergedState) => this.onStateChange(diffState2, mergedState));
      this.tracker = tracker;
      return tracker;
    }
    /**
     * Callback for when an event is triggered on the state tracker event bus
     * @param diffState {Object} a diff of the changes between the current and previous state
     * @param mergedState {Object} the merged state (old state + new state}
     * @param scrapedState {Object} the state we just scraped after the event was triggered
     * @param events {Array} an array of events that occurred
     * @param callback {function} callback for when we're done
     */
    onEvents(diffState2, mergedState, scrapedState, events) {
      if (!scrapedState || !scrapedState.sessionId) {
        return;
      }
      let extraState = {};
      if (array_includes_default(events, "PAGE_VIEW")) {
        this.ignoreFutureScrapes = false;
        ["product"].forEach((substateName) => {
          if ((!diffState2 || !diffState2[substateName]) && scrapedState[substateName]) {
            extraState[substateName] = scrapedState[substateName];
          }
        });
        ["basket", "sendOverride"].forEach((substateName) => {
          if (mergedState[substateName]) {
            extraState[substateName] = mergedState[substateName];
          }
        });
      }
      if (array_includes_default(events, "BASKET_CHANGED")) {
        ["sendOverride"].forEach((substateName) => {
          if (mergedState[substateName] && extraState[substateName] == null) {
            extraState[substateName] = mergedState[substateName];
          }
        });
      }
      if (array_includes_default(events, "SESSION_START") && this.stores.local.Name === "LocalStorage") {
        if (mergedState.sessionId) {
          this.dynamicIds.sessionId = mergedState.sessionId;
        }
      }
      if (this.ignoreFutureScrapes) {
        return;
      }
      const filteredEvents = [];
      events.forEach((event) => {
        if (!event.clientSideOnly) {
          filteredEvents.push(event);
        }
      });
      if (filteredEvents.length === 0) {
        return this.tracker.eventBus.firePostScrapeProcessing(diffState2, mergedState, scrapedState, events);
      }
      let generatedMessage;
      new promises_default((resolve, reject) => {
        if (array_includes_default(events, "SESSIONID_CHANGED")) {
          this.recoverPreviousSessionData().then((recoveredData) => {
            extraState = (0, import_object_assign7.default)({}, extraState, recoveredData);
            return resolve();
          });
        } else {
          return resolve();
        }
      }).then(() => {
        generatedMessage = packageImpressionPayload(
          filteredEvents,
          this.dynamicIds.machineIds,
          this.clientInformation.v1ClientId,
          this.clientInformation.v2ClientId,
          this.clientInformation.apiKey,
          scrapedState,
          diffState2,
          extraState,
          this.clientInformation.name,
          this.config
        );
        logTiny15.logInfo("sending message");
        logTiny15.logObj(generatedMessage);
        if (array_includes_default(events, "SESSION_COMPLETE")) {
          this.ignoreFutureScrapes = true;
        }
        if (!(array_includes_default(events, "SESSION_START") && array_includes_default(events, "SESSION_COMPLETE"))) {
          return this.messageQueue.sendImpression(ImpressionAlterer.transform(generatedMessage));
        }
        logTiny15.logWarning("Events array contains SESSION_START and SESSION_COMPLETE, not sending message");
        return null;
      }).then((result) => {
        if (result) {
          if (result.forwardedImpressions) {
            logTiny15.logInfo("forwarded impressions");
            logTiny15.logObj(result.forwardedImpressions);
          } else {
            logTiny15.logInfo("impression response");
            logTiny15.logObj(result);
          }
        }
      }).catch((ex) => {
        sendError(ex, {
          v1ClientId: this.clientInformation.v1ClientId,
          v2ClientId: this.clientInformation.v2ClientId
        });
      });
    }
    manageIds() {
      return __async(this, null, function* () {
        var _a, _b;
        const tabId = yield this.idGenerator.getTabId();
        if (!!((_b = (_a = this.implementationInstance) == null ? void 0 : _a.cookieManagerUrl) == null ? void 0 : _b.call(_a))) {
          const previousSessionId = yield this.idGenerator.getSessionId(this.clientInformation.sharedApiKey);
          const cookieGeneratedIds = yield retrieveOrSetIds(
            this.stores.replicated,
            this.clientInformation,
            this.implementationInstance.cookieManagerUrl()
          );
          return __spreadProps(__spreadValues({}, cookieGeneratedIds), {
            machineIds: __spreadProps(__spreadValues({}, cookieGeneratedIds.machineIds), {
              tabId
            }),
            hasSessionIdChanged: cookieGeneratedIds.sessionId !== previousSessionId
          });
        }
        const dynamicIds = yield this.getDynamicIds();
        return __spreadProps(__spreadValues({}, dynamicIds), {
          machineIds: __spreadProps(__spreadValues({}, dynamicIds.machineIds), {
            tabId
          })
        });
      });
    }
    init(legacySession) {
      this.idGenerator = getIdGenerator(legacySession, this.stores.replicated, this.stores.session, this.clientInformation.sessionExpiryInMinutes);
      return this.manageIds().then((dynamicIds) => {
        this.currentSessionId = legacySession && legacySession.sessionId ? void 0 : dynamicIds.sessionId;
        this.dynamicIds = dynamicIds;
        this.messageQueue = messageQueue_default;
        return this.getStoredState();
      }).then((state) => {
        this.storedState = state;
        if (legacySession) {
          if (legacySession.sessionId) {
            this.storedState.sessionId = legacySession.sessionId;
          }
        }
        this.createTracker(legacySession);
        return this;
      });
    }
    /**
     * Get the parts of the feature interface we want to expose to the outside world
     * @returns {*}
     */
    getPublicInterface() {
      const that = this;
      const publicInterface = {
        api: this.api,
        clientInformation: this.clientInformation,
        config: this.config,
        get dynamicIds() {
          return that.dynamicIds;
        },
        eventBus: this.tracker.eventBus,
        fireEvents: this.tracker.fireEvents,
        getStoredState: () => {
          return this.getStoredState();
        },
        messageQueue: this.messageQueue,
        scrapeState: this.tracker.scrapeState,
        stores: this.stores,
        setRtmListener: that.setRtmListener.bind(that),
        getRtmListener: that.getRtmListener.bind(that)
      };
      if (this.implementationInstance.triggers) {
        const callback = triggerScrape_default(publicInterface);
        publicInterface.triggers = this.implementationInstance.triggers(callback);
      }
      return publicInterface;
    }
    /**
     * Get the details about the client we need to be able to send/store data
     * @param clientConfig {Object} the client config as defined by the implementors
     * @returns {{apiKey: string, v1Id: number|undefined, v2Id: number|undefined, sharedApiKey: string, stateId: string, sessionExpiryInMinutes: (undefined|number)}}
     */
    setupClientInformation() {
      return promises_default.resolve().then(() => {
        return this.implementationInstance.client();
      }).then((clientInfo) => {
        if (!clientInfo || !clientInfo.apiKey) {
          return null;
        }
        const clientInformation = {
          apiKey: clientInfo.apiKey,
          name: this.config.clientName,
          sessionExpiryInMinutes: this.implementationInstance.sessionExpiryInMinutes ? this.implementationInstance.sessionExpiryInMinutes() : 30,
          sharedApiKey: clientInfo.sharedApiKey || clientInfo.apiKey,
          stateId: `state_${clientInfo.apiKey}`,
          v1ClientId: clientInfo.v1Id,
          v2ClientId: clientInfo.v2Id,
          cookieDomain: clientInfo.cookieDomain,
          dontPersistCustomerAcrossSessions: clientInfo.dontPersistCustomerAcrossSessions
        };
        this.clientInformation = clientInformation;
        return clientInformation;
      });
    }
    /**
     * Get local and replicated stores for storing user data such as session ID/basket data
     * @param config {Object} webpack config with the replicated store url in
     * @returns {{local: Object, replicated: Object}} object with local and replicated stores
     */
    getStores(config) {
      const localStore = getStore5(this.browserCapabilities);
      const sessionStore2 = getStore7(this.browserCapabilities);
      if (!localStore) {
        throw new Error("LOCAL_STORE_UNAVAILABLE");
      }
      if (!sessionStore2) {
        throw new Error("SESSION_STORE_UNAVAILABLE");
      }
      const channelsForReplication = [localStore];
      if (true) {
        const remoteStore = getStore3(
          this.browserCapabilities,
          config.remoteStateStoreUrl,
          PostMessageChannel.getChannel(this.browserCapabilities)
        );
        channelsForReplication.push(remoteStore);
      }
      const replicatedStore = getStore4(channelsForReplication);
      return {
        local: localStore,
        replicated: replicatedStore,
        session: sessionStore2
      };
    }
    /**
     * Get the existing stored state from local storage (or create a new state if we don't have one
     */
    getStoredState() {
      if (!this.stores || !this.stores.local) {
        return promises_default.reject("LOCAL_STORE_UNAVAILABLE");
      }
      return this.stores.local.getValue(this.clientInformation.stateId).then((storedState2) => {
        if (storedState2 && storedState2.sessionId === this.currentSessionId) {
          return storedState2;
        }
        return (0, import_object_assign7.default)({}, {
          sessionId: this.currentSessionId
        });
      });
    }
    /**
     * Get (or generate) dynamic Ids for this session (this is the session and machine IDs/tab ID)
     */
    getDynamicIds() {
      return promises_default.all([
        this.idGenerator.getGeneratedDynamicIds(),
        this.idGenerator.getSessionId(this.clientInformation.sharedApiKey)
      ]).then((results) => {
        const dynamicIds = results[0];
        if (dynamicIds) {
          if (dynamicIds.machineId) {
            dynamicIds.machineId = dynamicIds.machineId.toString();
          }
          if (dynamicIds.tabId) {
            dynamicIds.tabId = dynamicIds.tabId.toString();
          }
        }
        return {
          machineIds: dynamicIds,
          sessionId: results[1]
        };
      });
    }
    /**
     * Get the extra scrapers we add to the set of scrapers the implementation guys defined. At the moment
     * this just gets the session ID
     * @returns {Object} an object of extra scrapers
     */
    getExtraScrapers() {
      const that = this;
      return {
        boundEvents() {
          return getBoundEvents();
        },
        device: () => {
          return {
            screen: screenInfo(),
            userAgent: userAgent()
          };
        },
        page: () => {
          return {
            title: pageTitle(),
            url: location().href,
            referrer: referrer()
          };
        },
        sessionId: {
          onChange(implementationInstance, events) {
            events.push("SESSIONID_CHANGED");
          },
          state() {
            return new promises_default((resolve) => {
              return that.idGenerator.getSessionId(that.clientInformation.sharedApiKey).then((existingSessionId) => {
                if (existingSessionId) {
                  return resolve(existingSessionId);
                }
                return that.idGenerator.createSessionId(that.clientInformation.sharedApiKey).then((createdSessionId) => {
                  logTiny15.logInfo(`new session id ${createdSessionId}`);
                  return resolve(createdSessionId);
                });
              });
            }).then((sessionId) => {
              that.currentSessionId = sessionId;
              that.idGenerator.setSessionId(sessionId, that.clientInformation.sharedApiKey).catch((ex) => {
                sendError(ex, {
                  v1ClientId: that.clientInformation.v1ClientId,
                  v2ClientId: that.clientInformation.v2ClientId
                });
              });
              return sessionId;
            });
          }
        },
        thirdPartyUserId() {
          return that.api.request.getQueryStringParameter("sc_thrdid") || null;
        },
        source() {
          return {
            name: that.api.request.getQueryStringParameter("scSrc"),
            id: that.api.request.getQueryStringParameter("scSrcId")
          };
        },
        previousBasket() {
          that.getStoredState().then((s) => {
            return s.basket;
          });
        }
      };
    }
    /**
     * when state changes we want to write it away so that will be our new starting state
     * @param diffState {Object} a diff of the changes between the current and previous state
     * @param mergedState {Object} the merged state (old state + new state}
     * @param scrapedState {Object} the state we just scraped after the event was triggered
     */
    onStateChange(diffState2, mergedState) {
      return this.stores.local.setValue(this.clientInformation.stateId, mergedState).then(() => {
        if (!this.clientInformation.dontPersistCustomerAcrossSessions && diffState2 && (diffState2.email || diffState2.thirdPartyUserId || diffState2.customer)) {
          const stateKey = `${this.clientInformation.sharedApiKey}-persisted`;
          return this.stores.replicated.getValue(stateKey).then((persistedState) => {
            if (!persistedState || persistedState === "null") {
              persistedState = {};
            }
            if (diffState2.email) {
              if (typeof diffState2.email === "string") {
                persistedState.email = {
                  value: diffState2.email,
                  source: "PersistedStorage" /* PersistedStorage */,
                  isEncrypted: diffState2.isEncrypted || false
                };
              } else {
                persistedState.email = (0, import_object_assign7.default)({}, diffState2.email, { source: "PersistedStorage" /* PersistedStorage */ }, { isEncrypted: diffState2.isEncrypted || false });
              }
            }
            if (diffState2.phone) {
              persistedState.phone = (0, import_object_assign7.default)({}, diffState2.phone, { source: "PersistedStorage" /* PersistedStorage */ });
            }
            if (diffState2.customer && diffState2.customer.phone) {
              persistedState.phone = (0, import_object_assign7.default)({}, diffState2.customer.phone, { source: "PersistedStorage" /* PersistedStorage */ });
              if (persistedState.customer && persistedState.customer.phone) {
                delete persistedState.customer.phone;
              }
            }
            if (diffState2.thirdPartyUserId) {
              persistedState.thirdPartyUserId = diffState2.thirdPartyUserId;
            }
            if (diffState2.customer) {
              if (!persistedState.customer) {
                persistedState.customer = {};
              }
              if (mergedState.customer.salutation) {
                persistedState.customer.salutation = mergedState.customer.salutation;
              }
              if (mergedState.customer.firstName) {
                persistedState.customer.firstName = mergedState.customer.firstName;
              }
              if (mergedState.customer.lastName) {
                persistedState.customer.lastName = mergedState.customer.lastName;
              }
              if (mergedState.customer.phone) {
                persistedState.customer.phone = mergedState.customer.phone;
                persistedState.phone = persistedState.customer.phone;
              }
            }
            return persistedState;
          }).then((persistedState) => {
            return this.stores.replicated.setValue(stateKey, persistedState);
          }).then(() => {
            return promises_default.resolve();
          });
        }
        return promises_default.resolve();
      });
    }
    /**
     * Callack after we have finished processing a scrape
     * @param diff {Object} a diff of the changes between the current and previous state
     * @param mergedState {Object} the merged state (old state + new state}
     * @param scrapedState {Object} the state we just scraped after the event was triggered
     * @param events {Array} an array of events that occurred
     * @param callback {function} callback for when we're done
     */
    onPostScrapeProcessing(diff, mergedState, scrapedState, events, eventTargets) {
      if (array_includes_default(events, "SESSION_COMPLETE")) {
        return this.idGenerator.clearSessionId(this.clientInformation.sharedApiKey).then(() => {
          this.currentSessionId = null;
          this.tracker.forceSetState();
          return this.stores.local.removeValue(this.clientInformation.stateId);
        }).catch((err) => logTiny15.logError(err));
      }
      return promises_default.resolve();
    }
    /**
     * Recover items from the previous session that we would like to carry over
     * e.g. email address and third party ID
     * @returns {Promise<{email?: string, thirdPartyUserId?: string}>}
     */
    recoverPreviousSessionData() {
      const replicatedStore = this.stores.replicated;
      const sharedApiKey = this.clientInformation.sharedApiKey;
      if (this.clientInformation.dontPersistCustomerAcrossSessions) {
        return promises_default.resolve({});
      }
      return replicatedStore.getValue(`${sharedApiKey}-persisted`).then((persistedState) => {
        if (typeof persistedState === "string") {
          try {
            persistedState = JSON.parse(persistedState);
          } catch (ex) {
            return {};
          }
        }
        return persistedState || {};
      });
    }
  };

  // ../client-script-core/src/features/browse_tracking.ts
  init_define_APP_CONFIG();
  var browse_tracking_default = () => {
    return {
      events: ["PAGE_VIEW"]
    };
  };

  // ../client-script-core/src/triggers/dynamic_url.ts
  init_define_APP_CONFIG();
  var logTiny16 = __toESM(require_log_tiny());
  var createSyntheticEvent = (type) => {
    if (typeof window !== "undefined" && typeof window.Event === "function") {
      return new window.Event(type);
    }
    if (typeof document !== "undefined" && typeof document.createEvent === "function") {
      const event = document.createEvent("Event");
      event.initEvent(type, false, false);
      return event;
    }
    return { type };
  };
  var dynamic_url_default = (featureInterface, pageEvents) => {
    if (!featureInterface || !featureInterface.triggers || !featureInterface.triggers.urlChange || !featureInterface.triggers.urlChange.enabled) {
      return;
    }
    let lastUrl = document.URL;
    let pageChangedFn = (prevUrl, currentUrl, event) => {
      return prevUrl !== currentUrl;
    };
    if (featureInterface.triggers.urlChange.pageChanged) {
      pageChangedFn = featureInterface.triggers.urlChange.pageChanged;
    }
    const urlChangeCallback = (event) => {
      const prevUrl = lastUrl;
      const newUrl = document.URL;
      lastUrl = newUrl;
      if (pageChangedFn(prevUrl, newUrl, event)) {
        logTiny16.logInfo("url change: firing page scrape event");
        const events = [
          {
            clientSideOnly: true,
            rebindEvents: true,
            name: "URL_CHANGE"
          }
        ].concat(pageEvents);
        featureInterface.scrapeState({}, events);
        const rtmListener = featureInterface.getRtmListener();
        if (rtmListener) {
          logTiny16.logInfo("url change: re-triggering RTMs");
          rtmListener.triggerUntriggeredRTMs();
        }
      }
    };
    if (window.history.pushState) {
      const originalPushState = window.history.pushState;
      window.history.pushState = (state, title, url) => {
        const result = originalPushState.call(window.history, state, title, url);
        urlChangeCallback(createSyntheticEvent("pushstate"));
        return result;
      };
      const originalReplaceState = window.history.replaceState;
      if (typeof originalReplaceState === "function") {
        window.history.replaceState = (state, title, url) => {
          const result = originalReplaceState.call(window.history, state, title, url);
          urlChangeCallback(createSyntheticEvent("replacestate"));
          return result;
        };
      }
      window.addEventListener("hashchange", (event) => {
        urlChangeCallback(event);
      });
    } else {
      let currentUrl = window.location.href;
      window.setInterval(() => {
        if (currentUrl !== window.location.href) {
          currentUrl = window.location.href;
          urlChangeCallback(createSyntheticEvent("urlpoll"));
        }
      }, 1500);
    }
    window.addEventListener("popstate", (event) => {
      urlChangeCallback(event);
    });
  };

  // ../client-script-core/src/triggers/page_visibility.ts
  init_define_APP_CONFIG();
  var setUplistener = (callback) => {
    document.addEventListener("visibilitychange", () => {
      callback(document.visibilityState.toLowerCase() === "visible");
    });
  };
  var page_visibility_default = (featureInterface) => {
    if (!featureInterface.triggers || !featureInterface.triggers.pageVisibility || !featureInterface.triggers.pageVisibility.enabled) {
      return;
    }
    if (!document.visibilityState || !document.addEventListener) {
      return;
    }
    setUplistener((isVisible) => {
      featureInterface.fireEvents([{
        clientSideOnly: true,
        data: {
          visible: isVisible
        },
        name: "TRIGGER:PAGE_VISIBILITY"
      }]);
    });
  };

  // ../client-script-core/src/main.ts
  var canWeRun = (implementation2) => {
    if (!implementation2) {
      throw new Error("No implementation has been supplied");
    }
    if (browserIsSpider()) {
      logTiny17.logWarning("browser is spider");
      return promises_default.resolve(false);
    }
    if (!browserIsSupported()) {
      logTiny17.logWarning("unsupported browser");
      return promises_default.resolve(false);
    }
    return canTrack();
  };
  var logError12 = (err, config) => {
    logTiny17.groupEnd();
    logTiny17.logError(err.stack ? err.stack : err);
    sendError(err, config);
  };
  var run = (browserCapabilities2, win6, implementation2, config, features2) => {
    const featureInterface = new FeatureInterface(browserCapabilities2, win6, config, implementation2);
    featureInterface.setupClientInformation().then((clientInformation) => {
      if (!clientInformation) {
        return logTiny17.logWarning("No client ID found - exiting");
      }
      return promises_default.resolve().then(() => {
        if (true) {
          getLegacyState(
            featureInterface.stores.replicated,
            browserCapabilities2,
            featureInterface.clientInformation.v1ClientId,
            featureInterface.clientInformation.v2ClientId,
            config
          );
        }
        return promises_default.resolve({});
      }).then((legacySession) => featureInterface.init(legacySession)).then((fi) => {
        return waitForDom().then(() => fi.getPublicInterface());
      }).then((publicFeatureInterface) => {
        var _a;
        if (features2 && features2.length > 0) {
          features2.forEach((feature) => feature(publicFeatureInterface, featureInterface.getImplementationInstance(), browserCapabilities2));
        }
        initScraperTriggers(publicFeatureInterface);
        page_visibility_default(publicFeatureInterface);
        init2(publicFeatureInterface, browserCapabilities2);
        const oneOffEvents = browse_tracking_default().events;
        if ((_a = publicFeatureInterface.dynamicIds) == null ? void 0 : _a.hasSessionIdChanged) {
          oneOffEvents.push("SESSIONID_CHANGED");
        }
        logTiny17.logInfo("firing initial scrape");
        publicFeatureInterface.scrapeState({}, oneOffEvents);
        dynamic_url_default(publicFeatureInterface, oneOffEvents);
        if (document.readyState !== "complete") {
          const loadTimeout = setTimeout(() => {
            publicFeatureInterface.scrapeState({}, [{
              clientSideOnly: true,
              name: "TRIGGER:CONTENT_LOADED_TIMEOUT",
              rebindEvents: true
            }]);
          }, 5e3);
          waitForOnLoad().then(() => {
            clearTimeout(loadTimeout);
            publicFeatureInterface.scrapeState({}, [{
              clientSideOnly: true,
              name: "TRIGGER:CONTENT_LOADED",
              rebindEvents: true
            }]);
          });
        }
      }).catch((e) => {
        config.v1ClientId = featureInterface.clientInformation.v1ClientId;
        config.v2ClientId = featureInterface.clientInformation.v2ClientId;
        logError12(e, config);
      });
    });
  };
  var runAndTrapErrors = (browserCapabilities2, win6, implementation2, config, features2) => {
    try {
      canWeRun(implementation2).then((result) => {
        if (!result) {
          return;
        }
        return run(browserCapabilities2, win6, implementation2, config, features2);
      }).catch((e) => logError12(e, config));
    } catch (e) {
      logError12(e, config);
    }
  };

  // ../client-script-core/src/index.ts
  var explicitRepopTurnOffScript = (features2) => {
    const currentUrl = browserWindow().location.href;
    const param = "SC_SCRIPT=REPOP";
    const match = currentUrl.includes(param);
    if (match) {
      const hasRepopFeature = features2 && features2.includes(repop_default);
      const isInIframe = browserWindow().self !== browserWindow().top;
      return hasRepopFeature && isInIframe;
    }
    return false;
  };
  var browserCaps2 = getInitialCapabilities();
  var runOnce = () => {
    const browserWindow2 = browserWindow();
    if (browserWindow2.__sc_tracker) {
      return false;
    }
    browserWindow2.__sc_tracker = true;
    return true;
  };
  var runCollector = (implementation2, features2, testHooks) => {
    if (!runOnce()) {
      return;
    }
    if (explicitRepopTurnOffScript(features2)) {
      logTiny18.logInfo("[REPOP] Explicit no-script setup detected - exiting script early");
      return;
    }
    logTiny18.logInfo("initial run");
    runAndTrapErrors(browserCaps2, browserWindow(), implementation2, config_default, features2);
  };

  // ../client-script-core/features/rtm.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/features/rtm/index.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/features/rtm/RtmListener.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/features/rtm/ManagersMap.ts
  init_define_APP_CONFIG();
  var ManagersMap = class {
    constructor() {
      this.entries = {};
    }
    getRtmManagerValues() {
      return Object.keys(this.entries).map((k) => this.entries[k]);
    }
    set(key, item) {
      this.entries[key.trim()] = item;
    }
    get(key) {
      return this.entries[key.trim()];
    }
  };

  // ../client-script-core/src/features/rtm/RtmManager.ts
  init_define_APP_CONFIG();
  var logTiny22 = __toESM(require_log_tiny());

  // ../client-script-core/src/features/rtm/state/OnsiteMessageState.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/features/rtm/state/OnsiteTemplateState.ts
  init_define_APP_CONFIG();
  var OnsiteTemplateState = class {
    constructor(language) {
      this.TemplateStatus = /* @__PURE__ */ new Map();
      this.setTemplateStatusActive(language);
    }
    setTemplateStatusActive(language) {
      this.TemplateStatus.set(language, true);
    }
    isActiveTemplate(language) {
      const status = this.TemplateStatus.get(language);
      if (!status) {
        return false;
      }
      return status;
    }
    hasLanguage(language) {
      return this.TemplateStatus.has(language);
    }
    disableAll() {
      this.TemplateStatus.forEach((value, key) => {
        this.TemplateStatus.set(key, false);
      });
    }
  };

  // ../client-script-core/src/features/rtm/state/OnsiteMessageState.ts
  var OnsiteMessagesState = class {
    constructor() {
      this.onsiteTemplateState = /* @__PURE__ */ new Map();
    }
    setTemplateStatusActive(templateId, language) {
      const templateState = this.onsiteTemplateState.get(templateId);
      if (!templateState) {
        this.onsiteTemplateState.set(templateId, new OnsiteTemplateState(language));
        return;
      }
      templateState.disableAll();
      templateState.setTemplateStatusActive(language);
    }
    isActiveTemplate(templateId, language) {
      const onsiteMessageState = this.onsiteTemplateState.get(templateId);
      if (!onsiteMessageState) {
        return false;
      }
      return onsiteMessageState.isActiveTemplate(language);
    }
    hasLanguageTemplateAlreadySetup(templateId, language) {
      if (!templateId || !language) {
        return false;
      }
      const messageState = this.onsiteTemplateState.get(templateId);
      if (!messageState) {
        return false;
      }
      return messageState.hasLanguage(language);
    }
  };

  // ../client-script-core/src/features/rtm/helpers/RtmHelper.ts
  init_define_APP_CONFIG();

  // ../client-script-core/interfaces/impressions/Consent.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/features/rtm/helpers/customScrapers/DataAcquisitionScraper.ts
  init_define_APP_CONFIG();
  var DataAcquisitionScraper = class _DataAcquisitionScraper {
    constructor(fluentContent, api, attr) {
      this.fluentContent = fluentContent;
      this.api = api;
      this.attr = attr;
      this.values = /* @__PURE__ */ new Map();
    }
    validateType(el, val, type) {
      switch (type) {
        case "number":
          return this.api.strings.regexList.NUMBER.test(val);
        case "email":
          return this.api.strings.regexList.EMAIL.test(val);
        case "check":
          return el.checked;
        case "string":
          return true;
        default:
          return false;
      }
    }
    /**
     * Sets the data attribute which will be targeted and used when scraping
     * data.
     *
     * @param fluentContent
     * @param attr The HTML attribute to target
     * @returns The scraper
     */
    static setDataAttribute(fluentContent, api, attr) {
      return new _DataAcquisitionScraper(fluentContent, api, attr);
    }
    /**
     * Tries to scrape a list of targets.
     *
     * @param targets - List of targets to scrape
     * @returns {this} The scraper
     */
    scrape(targets) {
      var _a;
      for (const target of targets) {
        const el = this.fluentContent.querySelectorAll(`[${this.attr}="${target.name}"]`);
        if (!el.exists()) {
          continue;
        }
        const found = el.done();
        for (const element of found) {
          const elementType = (_a = element.type) != null ? _a : element.tagName.toLowerCase();
          if (!this.validateType(element, element.value, target.type[elementType])) {
            continue;
          }
          this.values.set(target.name, this.extractValue(element));
        }
      }
      return this;
    }
    /**
     * Tries to scrape a list of targets.
     *
     * @param mapper - A callback function that allows you to map the found values to a custom value of TResult.
     * @returns {Map<string, string | boolean>} A map of values that have been successfully scraped, where the key is the target attribute, and the value the result of the scrape.
     */
    map(mapper) {
      return mapper(this.values);
    }
    /**
     * Extracts values based on the input type.
     *
     * @param el - An HTMLInputElement being scraped by the script.
     * @returns { string | boolean } Either a string or a boolean depending on the type of the input.
     */
    extractValue(el) {
      switch (el.type) {
        case "check":
          return el.checked;
        default:
          return el.value;
      }
    }
  };

  // ../client-script-core/src/features/rtm/helpers/customScrapers/mapRtmScrapedState.ts
  init_define_APP_CONFIG();
  var dataAcquisitionTargets = [
    // Customer details
    { name: "firstName", type: { text: "string", textarea: "string" } },
    { name: "lastName", type: { text: "string", textarea: "string" } },
    { name: "salutation", type: { text: "string", radio: "check", "select-one": "string" } },
    { name: "dob", type: { date: "string", text: "string", "select-one": "string" } },
    { name: "gender", type: { radio: "check", "select-one": "string" } },
    { name: "country", type: { text: "string", "select-one": "string" } },
    { name: "age18Plus", type: { checkbox: "check" } },
    { name: "ukResident", type: { checkbox: "check" } },
    // Mobile details
    { name: "mobile", type: { number: "number", tel: "number" } },
    { name: "landline", type: { number: "number", tel: "number" } },
    // Others
    { name: "acceptedTAndC", type: { checkbox: "check" } },
    { name: "optIn", type: { checkbox: "check" } },
    { name: "optOut", type: { checkbox: "check" } },
    { name: "b2b", type: { checkbox: "check" } },
    { name: "nearestStore", type: { text: "string", radio: "check", checkbox: "check", "select-one": "string" } },
    { name: "customOne", type: { text: "string", textarea: "string", radio: "check", checkbox: "check", number: "number", tel: "number", "select-one": "string" } },
    { name: "customTwo", type: { text: "string", textarea: "string", radio: "check", checkbox: "check", number: "number", tel: "number", "select-one": "string" } },
    { name: "customThree", type: { text: "string", textarea: "string", radio: "check", checkbox: "check", number: "number", tel: "number", "select-one": "string" } },
    { name: "customFour", type: { text: "string", textarea: "string", radio: "check", checkbox: "check", number: "number", tel: "number", "select-one": "string" } },
    { name: "customFive", type: { text: "string", textarea: "string", radio: "check", checkbox: "check", number: "number", tel: "number", "select-one": "string" } },
    { name: "customSix", type: { text: "string", textarea: "string", radio: "check", checkbox: "check", number: "number", tel: "number", "select-one": "string" } },
    { name: "customSeven", type: { text: "string", textarea: "string", radio: "check", checkbox: "check", number: "number", tel: "number", "select-one": "string" } },
    { name: "customEight", type: { text: "string", textarea: "string", radio: "check", checkbox: "check", number: "number", tel: "number", "select-one": "string" } },
    { name: "customNine", type: { text: "string", textarea: "string", radio: "check", checkbox: "check", number: "number", tel: "number", "select-one": "string" } },
    { name: "customTen", type: { text: "string", textarea: "string", radio: "check", checkbox: "check", number: "number", tel: "number", "select-one": "string" } }
  ];
  var mapToRtmScrapedState = (scrapedElements) => {
    const state = {};
    const customer = {
      firstName: scrapedElements.get("firstName"),
      lastName: scrapedElements.get("lastName"),
      dob: scrapedElements.get("dob"),
      gender: scrapedElements.get("gender"),
      country: scrapedElements.get("country"),
      ageOver18: scrapedElements.get("age18Plus"),
      ukResident: scrapedElements.get("ukResident"),
      acceptTCs: scrapedElements.get("acceptedTAndC"),
      b2b: scrapedElements.get("b2b"),
      nearestStore: scrapedElements.get("nearestStore"),
      occupation: scrapedElements.get("occupation")
    };
    const customerKeys = Object.keys(customer).filter((k) => customer[k]);
    if (customerKeys.length) {
      state.customer = {};
      state.customer.source = "SalecycleRtm" /* SaleCycleRtm */;
      customerKeys.forEach((key) => {
        state.customer[key] = customer[key];
      });
    }
    const phone = { landline: scrapedElements.get("landline"), mobile: scrapedElements.get("mobile") };
    if (phone.landline || phone.mobile) {
      if (!state.customer) {
        state.customer = {};
      }
      state.customer.phone = { source: "SalecycleRtm" /* SaleCycleRtm */ };
      if (phone.landline) {
        state.customer.phone.landline = phone.landline;
      }
      if (phone.mobile) {
        state.customer.phone.mobile = phone.mobile;
      }
    }
    const customFields = {
      customOne: scrapedElements.get("customOne"),
      customTwo: scrapedElements.get("customTwo"),
      customThree: scrapedElements.get("customThree"),
      customFour: scrapedElements.get("customFour"),
      customFive: scrapedElements.get("customFive"),
      customSix: scrapedElements.get("customSix"),
      customSeven: scrapedElements.get("customSeven"),
      customEight: scrapedElements.get("customEight"),
      customNine: scrapedElements.get("customNine"),
      customTen: scrapedElements.get("customTen")
    };
    const customFieldsKeys = Object.keys(customFields).filter((k) => customFields[k]);
    if (customFieldsKeys.length) {
      if (!state.customer) {
        state.customer = {};
      }
      state.customer.customFields = {};
      for (const key in customFields) {
        if (customFields[key]) {
          state.customer.customFields[key] = customFields[key];
        }
      }
    }
    return state;
  };

  // ../client-script-core/src/features/rtm/helpers/RtmHelper.ts
  var RtmHelper = class {
    constructor(api) {
      this.alwaysDisplay = false;
      this.api = api;
      this._sentState = false;
    }
    get sentState() {
      return this._sentState;
    }
    set sentState(sentState) {
      this._sentState = sentState;
    }
    onBeforeClose(_) {
    }
    onBeforeSubmit(event) {
    }
    onAfterSubmit() {
    }
    onContinue(event) {
    }
    onAfterContinue() {
    }
    onBeforeContinue() {
    }
    onBeforeRedirect() {
    }
    onRedirect(_) {
    }
    onRender(content) {
      this.elContent = content;
      this.fluentContent = this.api.fluent.fromElement(content);
      this.elContent.focus({
        preventScroll: true
      });
    }
    escapeClose() {
      const closer = this.api.fluent.querySelector('[data-sc-action="close"]');
      if (!closer.exists()) {
        return;
      }
      closer.done().click();
    }
    // handleTabNavigation gets all focusable elements within the RTM, gets the currently
    // focused element and finds the next focusable element. If there is no next, it places
    // focus back to the first element, keeping focus constrained to the RTM
    handleTabNavigation(e) {
      const tabbableElements = this.fluentContent.querySelectorAll("a, button, input, textarea, select, [tabindex]");
      const focusedElement = this.fluentContent.querySelector("*:focus");
      if (!focusedElement.exists()) {
        return;
      }
      let focusedIndex = -1;
      tabbableElements.forEach((el, i) => {
        if (el.isFocused()) {
          focusedIndex = i;
        }
      });
      const direction = e.shiftKey ? -1 : 1;
      const nextIndex = focusedIndex + direction;
      if (nextIndex > tabbableElements.length() - 1) {
        e.preventDefault();
        tabbableElements.getAt(0).focus();
        return;
      }
      if (nextIndex < 0) {
        e.preventDefault();
        tabbableElements.getAt(tabbableElements.length() - 1).focus();
        return;
      }
    }
    enterSubmit(e) {
      const focused = this.fluentContent.querySelector("input:focus");
      if (!focused.exists()) {
        return;
      }
      if (["submit", "button"].includes(focused.done().getAttribute("type"))) {
        return;
      }
      e.preventDefault();
      const sendSC = this.fluentContent.querySelector('[data-sc-action="submit"]');
      if (sendSC.exists()) {
        sendSC.done().click();
        return;
      }
    }
    onAfterShow() {
    }
    onChange(event) {
    }
    onSubmit(event) {
      const state = this.scrapeState();
      if (state) {
        return state;
      }
    }
    shouldRTMDisplay() {
      return true;
    }
    scrapeState() {
      const state = {};
      const consent = this.scrapeConsent();
      if (consent) {
        state.consent = consent;
      }
      const scrapedData = DataAcquisitionScraper.setDataAttribute(this.fluentContent, this.api, "data-sc-data-type").scrape(dataAcquisitionTargets).map(mapToRtmScrapedState);
      return __spreadValues(__spreadValues({}, state), scrapedData);
    }
    scrapeConsent() {
      const elConsent = this.fluentContent.querySelector('[data-sc-data-type="consent"]');
      if (!elConsent.exists()) {
        return;
      }
      const consentType = elConsent.getAttribute("data-sc-consent-type").toUpperCase().done();
      if (consentType !== "OPT_IN" && consentType !== "OPT_OUT") {
        throw new Error(`Data attribute "data-sc-consent-type" must be either "OPT_IN" or "OPT_OUT" but got value ${consentType}`);
      }
      if (!elConsent.isChecked) {
        return null;
      }
      if (elConsent.isChecked()) {
        return [{
          consentType: consentType === "OPT_IN" ? "OptIn" /* OptIn */ : "OptOut" /* OptOut */,
          dataType: "Email" /* Email */
        }];
      } else {
        return [{
          consentType: consentType === "OPT_IN" ? "InvalidateOptIn" /* InvalidateOptIn */ : "InvalidateOptOut" /* InvalidateOptOut */,
          dataType: "Email" /* Email */
        }];
      }
    }
  };

  // ../client-script-core/src/features/rtm/triggers.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/triggers/idle_tracking.ts
  init_define_APP_CONFIG();
  var arrResetEvents = ["mousemove", "keydown", "mousedown", "touchstart"];
  var EVENT_NAME = "TRIGGER:IDLE_TIME";
  var IdleTracker = class {
    constructor(featureInterface, trackerConfig) {
      /**
       * This will setup the event listener for visibility change
       */
      this.setUplistener = (callback) => {
        document.addEventListener("visibilitychange", () => {
          callback(document.visibilityState.toLowerCase() === "visible");
        });
      };
      this.idleTime = 0;
      this.interval = -1;
      this.config = trackerConfig;
      this.frequency = trackerConfig.frequency ? trackerConfig.frequency : 1;
      this.featureInterface = featureInterface;
    }
    /**
     * Begin tracking the idle time by setting up event listeners which will cause the idle time to be reset
     * and starting a timer to track idle time
     */
    startTracking(restart = false) {
      if ((this.interval !== -1 || document.visibilityState !== "visible") && !restart) {
        return;
      }
      this.listenToResetEvents();
      this.startInterval();
    }
    /**
     * Begin tracking page visibility state by setting up an event listener which will clear or restart the idle time interval
     */
    checkVisibility() {
      this.setUplistener((isVisible) => {
        if (!isVisible) {
          clearInterval(this.interval);
          return;
        }
        this.startTracking(true);
      });
    }
    /**
     * Listen for events which will reset the idle time - these events are defined at
     * the top of the file for ease of use. When an event is fired the idle time is reset to 0
     * @private
     */
    listenToResetEvents() {
      const events = this.config.resetEvents ? arrResetEvents.concat(this.config.resetEvents) : arrResetEvents;
      events.forEach((strEvent) => {
        on(strEvent, () => {
          this.idleTime = 0;
        });
      });
    }
    /**
     * Create an interval to start tracking the idle time if it's not already running
     * @private
     */
    startInterval() {
      this.interval = window.setInterval(() => {
        this.idleTime += 1;
        if (this.idleTime % this.frequency === 0) {
          this.featureInterface.fireEvents([
            {
              clientSideOnly: true,
              data: {
                duration: this.idleTime
              },
              name: EVENT_NAME
            }
          ]);
        }
      }, 1e3);
    }
  };
  var idle_tracking_default = (featureInterface) => {
    const config = featureInterface.triggers ? featureInterface.triggers.idleTracking : null;
    const tracker = new IdleTracker(featureInterface, config || {});
    tracker.startTracking();
    tracker.checkVisibility();
    return tracker;
  };

  // ../client-script-core/src/triggers/mouse_out.ts
  init_define_APP_CONFIG();
  var MouseOutTrigger = class {
    constructor(callback) {
      this.callback = callback;
      this.window = topWindow();
      this.document = topDocument();
      this.attachMouseOutIntent();
    }
    /**
     * attach the mouse out intent to the document
     * @param callback {function} the callback function for when we have a mouse out triggered
     */
    attachMouseOutIntent() {
      on("mouseout", (e = this.window.event) => {
        if (!this.isValidMouseOut(e)) {
          return;
        }
        const result = this.getMouseOutArea(e.clientX, e.clientY);
        this.callback(result);
      }, this.document);
    }
    /**
     *Get the mouse out area as per the mouse event.
     * @param {Integer} x - ClientX being passed
     * @param {Integer} y - ClientY being passed
     * @return {String} areaName - Returns the areaName from the mouse event
     */
    getMouseOutArea(x, y) {
      const viewport = this.getViewPortDimensions();
      const halfWidth = viewport.width / 2;
      const halfHeight = viewport.height / 2;
      const xAxis = x > halfWidth ? "Right" : "Left";
      const yAxis = y > halfHeight ? "Bottom" : "Top";
      if (x < 20 || x >= viewport.width - 20) {
        return `${xAxis}${yAxis}`;
      }
      return `${yAxis}${xAxis}`;
    }
    /**
     * Get the view port dimensions, to calculate the mouse out IntentAreas
     * @returns {{width: (Number), height: (Number)}} the viewport area
     */
    getViewPortDimensions() {
      if (this.window.innerHeight && this.window.innerWidth) {
        return {
          height: this.window.innerHeight,
          width: this.window.innerWidth
        };
      }
      if (this.document.documentElement && this.document.documentElement.clientHeight && this.document.documentElement.clientWidth) {
        return {
          height: this.document.documentElement.clientHeight,
          width: this.document.documentElement.clientWidth
        };
      }
      if (this.document.body) {
        return {
          height: this.document.body.clientHeight,
          width: this.document.body.clientWidth
        };
      }
      return {
        height: null,
        width: null
      };
    }
    /**
     * Check we have a valid mouse out event. This is cross browser, first we try and check IE & FF, then chrome
     * @param e {event} the event which occurec
     * @returns {boolean} true if valid, else false
     */
    isValidMouseOut(e) {
      try {
        if (e.fromElement || e.originalTarget) {
          const fromNodeType = e.fromElement ? e.fromElement.nodeName : e.originalTarget.nodeName;
          if (fromNodeType === "SELECT" || fromNodeType === "INPUT") {
            return false;
          }
        }
        const frm = e.relatedTarget || e.toElement;
        const x = e.clientX;
        const y = e.clientY;
        const viewport = this.getViewPortDimensions();
        const tolerance = 20;
        const isHTML = !frm || frm.nodeName === "HTML";
        if (x <= tolerance || x >= viewport.width - tolerance || (y <= tolerance || y >= viewport.height - tolerance)) {
          return isHTML;
        }
        return false;
      } catch (ex) {
        return false;
      }
    }
  };
  var mouse_out_default = (featureInterface) => {
    return new MouseOutTrigger((mouseOutArea) => {
      featureInterface.fireEvents([{
        clientSideOnly: true,
        data: {
          area: mouseOutArea
        },
        name: "TRIGGER:MOUSE_OUT"
      }]);
    });
  };

  // ../client-script-core/src/features/rtm/triggers.ts
  var logTiny19 = __toESM(require_log_tiny());
  var meetsExitIntentCriteria = (exitAreas, e) => {
    return exitAreas && exitAreas.indexOf(e.data.area) !== -1;
  };
  var exceedsIdleTimeInterval = (requiredTimeout, event) => {
    if (void 0 === requiredTimeout || requiredTimeout < 0) {
      return false;
    }
    return event.data.duration * 1e3 >= requiredTimeout;
  };
  var hasExitFrameTrigger = (message) => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = message == null ? void 0 : message.config) == null ? void 0 : _a.triggers) == null ? void 0 : _b.exitFrame) == null ? void 0 : _c.length) > 0;
  };
  var hasIdleTimeTrigger = (message) => {
    var _a, _b;
    return ((_b = (_a = message == null ? void 0 : message.config) == null ? void 0 : _a.triggers) == null ? void 0 : _b.inactivity) > 0;
  };
  var hasOnClickTrigger = (message) => {
    var _a, _b, _c;
    return !!((_c = (_b = (_a = message == null ? void 0 : message.config) == null ? void 0 : _a.triggers) == null ? void 0 : _b.onClick) == null ? void 0 : _c.selector);
  };
  var setupClickTriggers = (model) => {
    const triggerConfig = model.message.config.triggers || {};
    const onClickTrigger = triggerConfig.onClick;
    if (!onClickTrigger || !onClickTrigger.selector) {
      return;
    }
    const clickCallback = (_target, _rebindEvents, _delay, _event, selector) => {
      const overrideFreqCaps = onClickTrigger.overrideFreqCaps !== false;
      if (overrideFreqCaps) {
        model.resetDisplayState();
      }
      if (!model.rtmHelper.shouldRTMDisplay()) {
        logTiny19.logInfo("RTM should not be shown, cancelling display for click trigger", model.message.config.ids.mscTemplateId);
        return;
      }
      model.displayRTM(model.message);
      model.sendRTMShownEvent();
    };
    bindEvents(model.featureInterface.api, "click", onClickTrigger.selector, clickCallback);
  };
  var setupRtmTriggers = (model) => {
    if (hasIdleTimeTrigger(model.message) && !model.isVisible) {
      idle_tracking_default(model.featureInterface);
    }
    if (hasExitFrameTrigger(model.message) && !model.isVisible) {
      mouse_out_default(model.featureInterface);
    }
    if (hasOnClickTrigger(model.message)) {
      setupClickTriggers(model);
    }
    const onTriggerEventListener = (eventList) => {
      var _a;
      let shouldHandlePageChange = false;
      const display = (event) => {
        if (!model.rtmHelper.shouldRTMDisplay()) {
          logTiny19.logInfo("RTM should not be shown, cancelling display for template", model.message.config.ids.mscTemplateId);
          return;
        }
        model.displayRTM(model.message);
        model.replaceMessageTriggerWithEventsTrigger(event);
        model.sendRTMShownEvent();
      };
      const triggerConfig = model.message.config.triggers || {};
      if (!eventList) {
        return;
      }
      eventList.forEach((event) => {
        var _a2;
        switch ((_a2 = event.name) != null ? _a2 : event) {
          case "TRIGGER:MOUSE_OUT":
            if (!meetsExitIntentCriteria(triggerConfig.exitFrame, event)) {
              break;
            }
            display(event.data.area);
            break;
          case "TRIGGER:IDLE_TIME":
            if (!exceedsIdleTimeInterval(triggerConfig.inactivity, event)) {
              break;
            }
            display(event.data.duration);
            break;
          case "EMAIL_CHANGED":
            if (model.message.config.rtmType === "CONSENTOPTIN" /* CONCENT_OPT_IN */ || model.message.config.rtmType === "CONSENTOPTOUT" /* CONCENT_OPT_OUT */) {
              model.resetMpsState();
            }
            break;
          case "PAGE_CHANGED":
          case "URL_CHANGE": {
            shouldHandlePageChange = true;
            break;
          }
          default:
        }
      });
      if (shouldHandlePageChange) {
        try {
          model.resetMessageState(true);
          const message = model.message;
          const triggers = (_a = message == null ? void 0 : message.config) == null ? void 0 : _a.triggers;
          const attemptDisplay = (remainingAttempts = 10) => {
            if (!message || !(triggers == null ? void 0 : triggers.onLoad)) {
              return;
            }
            if (!model.rtmHelper.shouldRTMDisplay()) {
              return;
            }
            const displayConfig = message.display;
            if ((displayConfig == null ? void 0 : displayConfig.type) === "inline" && displayConfig.selector && !model.featureInterface.api.page.querySelector(displayConfig.selector) && remainingAttempts > 0) {
              window.setTimeout(() => attemptDisplay(remainingAttempts - 1), 100);
              return;
            }
            model.displayRTM(message);
            model.sendRTMShownEvent();
          };
          setupRtmTriggers(model);
          attemptDisplay();
        } catch (e) {
          logTiny19.logError(e);
        }
        return;
      }
    };
    if (hasExitFrameTrigger(model.message) || hasIdleTimeTrigger(model.message) || hasOnClickTrigger(model.message)) {
      model.featureInterface.eventBus.onPostScrapeProcessing((_, __, ___, eventList) => onTriggerEventListener(eventList));
    }
  };

  // ../client-script-core/src/features/rtm/helpers/RtmHelperEac.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/utils/errors/ValidationError.ts
  init_define_APP_CONFIG();
  var ValidationError = class extends Error {
    constructor(msg, elem) {
      super(msg);
      this.message = msg;
      this.type = "ValidationError";
      this.el = elem || ".validation-sc";
    }
    get elem() {
      return this.el;
    }
  };

  // ../client-script-core/src/features/rtm/helpers/RtmHelperEac.ts
  var RtmHelperEac = class extends RtmHelper {
    onChange(event) {
      const email = this.scrapeEmail();
      if (email) {
        return {
          email: {
            value: email,
            source: "SalecycleRtm" /* SaleCycleRtm */
          }
        };
      }
    }
    onSubmit(event) {
      const state = {};
      const emailInput = this.fluentContent.querySelector('input[data-sc-data-type="email"]');
      if (emailInput.exists()) {
        const email = this.scrapeEmail();
        if (!email) {
          throw new ValidationError("Please enter a valid email address", ".validation-sc");
        }
        state.email = {
          value: email,
          source: "SalecycleRtm" /* SaleCycleRtm */
        };
      }
      const scrapedData = DataAcquisitionScraper.setDataAttribute(this.fluentContent, this.api, "data-sc-data-type").scrape(dataAcquisitionTargets).map(mapToRtmScrapedState);
      const consent = this.scrapeConsent();
      if (consent && state.email) {
        state.consent = [
          __spreadProps(__spreadValues({}, consent[0]), {
            value: state.email.value,
            source: "SalecycleRtm" /* SaleCycleRtm */
          })
        ];
      }
      this.onAfterSubmit();
      return __spreadValues(__spreadValues({}, state), scrapedData);
    }
    scrapeEmail() {
      const elEmail = this.fluentContent.getStringValue('input[data-sc-data-type="email"]');
      if (!elEmail.exists()) {
        return;
      }
      const email = elEmail.done();
      if (!email) {
        return;
      }
      if (!this.api.strings.regexList.EMAIL.test(email)) {
        return;
      }
      return email;
    }
    scrapeConsent() {
      const elConsent = this.fluentContent.querySelector('[data-sc-data-type="consent"]');
      if (!elConsent.exists()) {
        return;
      }
      const consentType = elConsent.getAttribute("data-sc-consent-type").toUpperCase().done();
      if (consentType !== "OPT_IN" && consentType !== "OPT_OUT") {
        throw new Error(`Data attribute "data-sc-consent-type" must be either "OPT_IN" or "OPT_OUT" but got value ${consentType}`);
      }
      const isReversedCheckedToggleOption = this.fluentContent.querySelector('[data-sc-consent-option-toggle="flip"]').exists();
      const consentEvaluationLogic = isReversedCheckedToggleOption ? elConsent.isChecked() : !elConsent.isChecked();
      if (!elConsent.isChecked || consentEvaluationLogic) {
        return null;
      }
      return [{
        consentType: consentType === "OPT_IN" ? "OptIn" /* OptIn */ : "OptOut" /* OptOut */,
        dataType: "Email" /* Email */
      }];
    }
  };

  // ../client-script-core/src/features/rtm/validation/display.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/features/osr/osrHelpers/basketHelpers.ts
  init_define_APP_CONFIG();
  function getStoredBasket(featureInterface) {
    return featureInterface.getStoredState().then((storedState2 = {}) => {
      if (storedState2.basket) {
        return storedState2.basket;
      }
      return null;
    });
  }
  function getStoredBasketItems(featureInterface) {
    return getStoredBasket(featureInterface).then((basket) => {
      if (basket && Array.isArray(basket.items)) {
        return basket.items;
      }
      return [];
    });
  }

  // ../client-script-core/src/features/rtm/validation/display.ts
  var import_log_tiny2 = __toESM(require_log_tiny());
  function validateBeforeDisplayOrReporting(featureInterface, hasBeenDisplayed, onsiteMessageState, message, isReportable) {
    return __async(this, null, function* () {
      switch (message == null ? void 0 : message.config.rtmType) {
        case "SMB":
        case "EAC":
        case "DOT":
          return validate(
            featureInterface,
            message,
            hasBeenDisplayed,
            onsiteMessageState,
            isReportable
          );
        default:
          return {
            isValid: !hasBeenDisplayed
          };
      }
    });
  }
  function validate(featureInterface, message, hasDisplayed, onsiteMessageState, isReportable) {
    return __async(this, null, function* () {
      const res = { isValid: false };
      if ((message == null ? void 0 : message.config.rtmType) === "SMB") {
        const basketItems = yield getStoredBasketItems(featureInterface);
        if (!basketItems.length) {
          import_log_tiny2.default.logInfo(
            "cancelling message display, basket not populated",
            message == null ? void 0 : message.config.ids.mscTemplateId
          );
          return res;
        }
      }
      switch (true) {
        case hasDisplayed:
          import_log_tiny2.default.logInfo(`Template "${message.config.ids.mscTemplateId}" already displayed, cancelling display`);
          break;
        case !onsiteMessageState.isActiveTemplate(
          message == null ? void 0 : message.config.ids.mscTemplateId,
          message == null ? void 0 : message.config.language
        ):
          import_log_tiny2.default.logInfo(
            "cancelling message display, rtm template language is not active",
            message == null ? void 0 : message.config.ids.mscTemplateId,
            message == null ? void 0 : message.config.language
          );
          break;
        case (message == null ? void 0 : message.config.controlGroup):
          import_log_tiny2.default.logInfo(
            "cancelling message display, visitor has fallen into control group"
          );
          res.isValid = isReportable;
          res.isControlGroup = message == null ? void 0 : message.config.controlGroup;
          break;
        default:
          res.isValid = true;
          break;
      }
      return res;
    });
  }

  // ../client-script-core/src/features/rtm/eventHandlers.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/features/rtm/rtmEventStrategies/RtmEventStrategyFactory.ts
  init_define_APP_CONFIG();

  // ../client-script-core/src/features/rtm/rtmEventStrategies/RtmEventStrategy.ts
  init_define_APP_CONFIG();
  var RtmEventStrategy = class {
    scrapeState(state, scrapeEvents, featureInterface) {
      featureInterface.scrapeState({}, scrapeEvents, state);
    }
  };

  // ../client-script-core/src/features/rtm/rtmEventStrategies/RtmEmailChangedEventStrategy.ts
  init_define_APP_CONFIG();
  var RtmEmailChangedEventStrategy = class extends RtmEventStrategy {
    scrapeState(state, scrapeEvents, featureInterface) {
      if (!state) {
        return;
      }
      featureInterface.getStoredState().then((storedState2) => {
        if (state && storedState2 && storedState2.email && state.email === storedState2.email.value) {
          return;
        }
        featureInterface.scrapeState(
          {},
          scrapeEvents
          /*, state */
        );
      });
    }
  };

  // ../client-script-core/src/features/rtm/rtmEventStrategies/RtmEventStrategyFactory.ts
  var getRtmEventStrategy = (eventName) => {
    switch (eventName) {
      case "RTM_EMAIL_CHANGED":
        return new RtmEmailChangedEventStrategy();
      default:
        return new RtmEventStrategy();
    }
  };

  // ../client-script-core/src/features/rtm/eventHandlers.ts
  var actionHandlers = {
    close: {
      eventName: "RTM_CANCEL_CLOSE",
      shouldClose: true,
      beforeHandler(helperClass, event) {
        return helperClass.onBeforeClose(event);
      }
    },
    "consent-opt-in": {
      eventName: "RTM_CONSENT_OPT_IN",
      shouldClose: true,
      allowExtraState: true
    },
    "consent-opt-out": {
      eventName: "RTM_CONSENT_OPT_OUT",
      shouldClose: true,
      allowExtraState: true
    },
    submit: {
      eventName: "RTM_SUBMIT",
      allowExtraState: true,
      beforeHandler(helperClass, event) {
        return helperClass.onBeforeSubmit(event);
      },
      scrapeHandler(helperClass, event) {
        return helperClass.onSubmit(event);
      },
      setSentState(helperClass, value) {
        helperClass.sentState = value;
      },
      afterHandler(helperClass, event) {
        return helperClass.onAfterSubmit();
      }
    },
    "email-input": {
      eventName: "RTM_EMAIL_CHANGED",
      scrapeHandler(helperClass, event) {
        return helperClass.onChange(event);
      }
    },
    continue: {
      eventName: "RTM_CONTINUE",
      shouldClose: true,
      allowExtraState: true,
      beforeHandler(helperClass, event) {
        helperClass.onBeforeClose(event);
        helperClass.onBeforeContinue();
      },
      afterHandler(helperClass, event) {
        helperClass.onContinue(event);
        helperClass.onAfterContinue();
      }
    },
    redirect: {
      eventName: "RTM_REDIRECT",
      shouldClose: false,
      allowExtraState: true,
      beforeHandler(helperClass, event) {
        helperClass.onBeforeRedirect();
      },
      afterHandler(helperClass, event) {
        const eventTarget = event.target;
        helperClass.onRedirect(eventTarget.getAttribute("data-sc-redirect"));
      }
    }
  };
  function getActionHandler(eventType) {
    const handler = actionHandlers[eventType.toLowerCase()];
    if (!handler) {
      throw new Error(`Could not find handler for ${eventType} action`);
    }
    return handler;
  }
  function createEventsFromState(state, message) {
    if (!state || !Array.isArray(state.consent) || state.consent.length === 0) {
      return;
    }
    const consentTypeMapping = {
      OptIn: "OPT_IN",
      OptOut: "OPT_OUT",
      InvalidateOptIn: "INVALIDATE_OPT_IN",
      InvalidateOptOut: "INVALIDATE_OPT_OUT"
    };
    return state.consent.reduce((events, { consentType }) => {
      const eventSuffix = consentTypeMapping[consentType];
      if (eventSuffix) {
        events.push({
          data: {
            eventType: `RTM_CONSENT_${eventSuffix}`,
            rtmType: message.type,
            rtmIds: message.config.ids
          },
          name: `EVENT:RTM_CONSENT_${eventSuffix}`
        });
      }
      return events;
    }, []);
  }
  function handleMpsRtmScrape(eventName, featureInterface, message, helperClass, handler, event) {
    let scrapeEvents = [{
      data: {
        eventType: eventName,
        rtmType: message.type,
        language: message.config.language,
        rtmIds: message.config.ids
      },
      name: `EVENT:${eventName}`
    }];
    let state;
    if (handler.scrapeHandler) {
      try {
        state = handler.scrapeHandler(helperClass, event);
        if (state && state.consent) {
          const createdEvents = createEventsFromState(state, message);
          if (Array.isArray(createdEvents) && createdEvents.length > 0) {
            scrapeEvents = createdEvents;
          }
        }
      } catch (ex) {
        sendError(ex, featureInterface.clientInformation);
      }
    }
    featureInterface.scrapeState(
      {},
      scrapeEvents
      /*, state */
    );
  }
  function handleMscRtmScrape(eventName, featureInterface, message, helperClass, handler, event) {
    var _a;
    let state;
    if (handler.scrapeHandler) {
      try {
        state = handler.scrapeHandler(helperClass, event);
      } catch (error) {
        if (error && error.type && error.type === "ValidationError") {
          const validationMessage = (_a = message.template.validationMessage) != null ? _a : error.message;
          throw new ValidationError(validationMessage, error.elem);
        }
      }
    }
    const scrapeEvents = [{
      data: {
        eventType: eventName,
        rtmType: message.config.rtmType,
        rtmIds: message.config.ids,
        language: message.config.language,
        rtmState: state
      },
      name: `EVENT:${eventName}`
    }];
    const eventStrategy = getRtmEventStrategy(eventName);
    eventStrategy.scrapeState(state, scrapeEvents, featureInterface);
  }
  function eventHandler(featureInterface, holdingDiv, message, helperClass, handler, hideOverlay, targetElement, event) {
    if (event.target !== targetElement || message.config.controlGroup) {
      return false;
    }
    event.stopPropagation();
    if (handler.beforeHandler) {
      if (handler.beforeHandler(helperClass, event) === false) {
        return false;
      }
    }
    if (helperClass.sentState && !handler.allowExtraState) {
      hideOverlay();
      return false;
    }
    const eventName = handler.eventName;
    const eventTarget = event.target || document.createElement("a");
    if (!eventName) {
      return true;
    }
    const scrapeHandler = message.config.rtmType === "EAC" || message.config.rtmType === "SMB" || message.config.rtmType === "DOT" ? handleMscRtmScrape : handleMpsRtmScrape;
    try {
      scrapeHandler(eventName, featureInterface, message, helperClass, handler, event);
    } catch (ex) {
      if (ex && ex.type && ex.type === "ValidationError") {
        const validationElem = featureInterface.api.fluent.querySelector(ex.el);
        validationElem.setInnerHTML(ex.message);
        return false;
      }
      sendError(ex, featureInterface.clientInformation);
    }
    if (handler.setSentState) {
      handler.setSentState(helperClass, true);
    }
    if (handler.afterHandler) {
      handler.afterHandler(helperClass, event);
    }
    if (handler.shouldClose || eventTarget.getAttribute("data-sc-close") === "true") {
      hideOverlay();
    }
    return true;
  }
  function handleTransition(featureInterface, holdingDiv, message, helperClass, hideOverlay, targetElement, event) {
    const eventTarget = event.target;
    if (!eventTarget) {
      return;
    }
    const action = eventTarget.getAttribute("data-sc-action");
    if (action) {
      const result = eventHandler(featureInterface, holdingDiv, message, helperClass, getActionHandler(action), hideOverlay, targetElement, event);
      if (!result) {
        return;
      }
    }
    const transitionTo = eventTarget.getAttribute("data-sc-transition-to");
    if (!transitionTo) {
      return;
    }
    const parentSection = Page.closest(eventTarget, "section");
    const nextSection = Page.querySelector(`[data-sc-slide="${transitionTo}"]`, holdingDiv);
    if (!parentSection || !nextSection) {
      throw new Error(`Could not find parent <section> element or section with attribute [data-sc-slide="${transitionTo}"]`);
    }
    let hideElClassName = " sc-hidden";
    let showElClassName = "";
    const animationDecoratedEl = Page.closest(eventTarget, "section[data-sc-animation]");
    if (animationDecoratedEl) {
      const animation = animationDecoratedEl.getAttribute("data-sc-animation");
      if (animation === "show-hide") {
        hideElClassName = " sc-hidden hide-sc";
        showElClassName = "show-sc";
      }
    }
    parentSection.className += hideElClassName;
    nextSection.className = nextSection.className.replace("sc-hidden", showElClassName).replace("hide-sc", showElClassName).trim();
  }
  function setupEventHandlers(featureInterface, holdingDiv, message, helperClass, hideOverlay) {
    const dataAttributes = nodelistToArray(holdingDiv == null ? void 0 : holdingDiv.querySelectorAll("[data-sc-action]"));
    if (!dataAttributes || dataAttributes.length < 1) {
      return;
    }
    dataAttributes.forEach((element) => {
      const attrValue = element.getAttribute("data-sc-action");
      const hasTransition = !!element.getAttribute("data-sc-transition-on");
      if (hasTransition) {
        return;
      }
      const boundHandler = eventHandler.bind(eventHandler, featureInterface, holdingDiv, message, helperClass, getActionHandler(attrValue), hideOverlay, element);
      if (attrValue === "email-input") {
        element.addEventListener("focusout", boundHandler, true);
      } else {
        element.addEventListener("click", boundHandler, true);
        element.addEventListener("touchStart", boundHandler, true);
      }
    });
    const dataTransitions = nodelistToArray(holdingDiv.querySelectorAll("[data-sc-transition-on]"));
    if (!dataTransitions || dataTransitions.length < 1) {
      return;
    }
    dataTransitions.forEach((element) => {
      const attrValue = element.getAttribute("data-sc-transition-on");
      const boundHandler = handleTransition.bind(handleTransition, featureInterface, holdingDiv, message, helperClass, hideOverlay, element);
      element.addEventListener(attrValue, boundHandler, true);
    });
  }

  // ../client-script-core/src/features/rtm/RtmCountdown.ts
  init_define_APP_CONFIG();
  var import_log_tiny3 = __toESM(require_log_tiny());
  function calculateCountdownParts(timeRemaining, hasDays, hasHours, hasMinutes, hasSeconds) {
    const days = Math.floor(timeRemaining / (1e3 * 60 * 60 * 24));
    const hours = Math.floor(timeRemaining % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
    const minutes = Math.floor(timeRemaining % (1e3 * 60 * 60) / (1e3 * 60));
    const seconds = Math.floor(timeRemaining % (1e3 * 60) / 1e3);
    let d = 0;
    let h = 0;
    let m = 0;
    let s = 0;
    if (hasDays) {
      d = days;
    }
    if (hasHours) {
      if (hasDays) {
        h = hours;
      } else {
        h = days * 24 + hours;
      }
    }
    if (hasMinutes) {
      if (hasHours || hasDays) {
        m = minutes;
      } else {
        m = days * 24 * 60 + hours * 60 + minutes;
      }
    }
    if (hasSeconds) {
      if (hasMinutes || hasHours || hasDays) {
        s = seconds;
      } else {
        s = Math.floor(timeRemaining / 1e3);
      }
    }
    return { days: d, hours: h, minutes: m, seconds: s };
  }
  var RTMHelperCDT = class extends RtmHelper {
    constructor(api) {
      super(api);
      const end = api.fluent.querySelector("[data-sc-countdown-end]");
      if (!end) {
        return;
      }
      const endValue = end.getAttribute("data-sc-countdown-end").done();
      try {
        this.endDate = new Date(endValue);
      } catch (e) {
        import_log_tiny3.default.logWarning("Invalid date format for RTM countdown:", endValue);
      }
    }
    onRender() {
      if (!this.endDate) {
        import_log_tiny3.default.logWarning("No date found");
        return;
      }
      const api = this.api;
      const endTime = this.endDate.getTime();
      const daysElement = api.fluent.querySelector("[data-sc-countdown=days]");
      const hoursElement = api.fluent.querySelector("[data-sc-countdown=hours]");
      const minutesElement = api.fluent.querySelector("[data-sc-countdown=minutes]");
      const secondsElement = api.fluent.querySelector("[data-sc-countdown=seconds]");
      if (isNaN(endTime)) {
        import_log_tiny3.default.logWarning("Invalid date format for RTM countdown:", this.endDate);
        return;
      }
      if (!daysElement && !hoursElement && !minutesElement && !secondsElement) {
        import_log_tiny3.default.logWarning("No elements found for RTM countdown");
        return;
      }
      const updateTimer = () => {
        const now = (/* @__PURE__ */ new Date()).getTime();
        const timeRemaining = endTime - now;
        if (timeRemaining <= 0) {
          window.clearInterval(intervalId);
          return;
        }
        const parts = calculateCountdownParts(
          timeRemaining,
          !!daysElement.done(),
          !!hoursElement.done(),
          !!minutesElement.done(),
          !!secondsElement.done()
        );
        if (!!daysElement) {
          daysElement.setInnerHTML(parts.days.toString());
        }
        if (!!hoursElement) {
          hoursElement.setInnerHTML(parts.hours.toString());
        }
        if (!!minutesElement) {
          minutesElement.setInnerHTML(parts.minutes.toString());
        }
        if (!!secondsElement) {
          secondsElement.setInnerHTML(parts.seconds.toString());
        }
      };
      updateTimer();
      const intervalId = window.setInterval(updateTimer, 1e3);
    }
  };

  // ../client-script-core/src/features/rtm/RtmManager.ts
  var RtmManager = class {
    constructor(featureInterface, implementation2) {
      this.featureInterface = featureInterface;
      this.implementation = implementation2;
      this.isVisible = false;
      this.hasBeenDisplayed = false;
      this.controlGroupHit = false;
      this.onsiteMessageState = new OnsiteMessagesState();
      this.api = featureInterface.api;
      this.elBody = this.api.page.querySelector("body");
    }
    configure(message) {
      this.message = message;
      if (this.isEACorSMB() && this.onsiteMessageState.hasLanguageTemplateAlreadySetup(
        this.message.config.ids.mscTemplateId,
        this.message.config.language
      )) {
        this.onsiteMessageState.setTemplateStatusActive(
          this.message.config.ids.mscTemplateId,
          this.message.config.language
        );
        logTiny22.logInfo(
          `cancelling message setup. RTM message already setup for type: ${this.message.config.rtmType}`,
          this.message.config.ids.mscTemplateId,
          this.message.config.language
        );
        return;
      }
      const displayConfig = message.display;
      if (document.visibilityState && document.visibilityState !== "visible") {
        return;
      }
      if (!displayConfig) {
        throw new Error(`RTM message has no display config for type: ${this.message.config.rtmType}`);
      }
      this.helperClass = this.getRtmHelperForHandlingMessage();
      if (displayConfig.pageScrollable === false) {
        this.elBody.className += " sc-rtm-open";
      }
      if (this.isEACorSMB()) {
        logTiny22.logInfo(
          `pushing onsite message of type ${this.message.config.rtmType} into the onsiteMessageState list`,
          this.message.config.ids.mscTemplateId,
          this.message.config.language
        );
        this.onsiteMessageState.setTemplateStatusActive(
          this.message.config.ids.mscTemplateId,
          this.message.config.language
        );
      }
      if (this.message.config.triggers.onLoad && !this.isVisible) {
        if (!this.helperClass.shouldRTMDisplay()) {
          logTiny22.logInfo(
            `cancelling the rtm setup for type: ${this.message.config.rtmType}`,
            this.message.config.ids.mscTemplateId
          );
          return;
        }
        this.display();
        this.sendShownEvent();
      } else if (this.isVisible) {
        if (!this.helperClass.shouldRTMDisplay()) {
          logTiny22.logInfo(
            `cancelling the rtm setup for type: ${this.message.config.rtmType}`,
            this.message.config.ids.mscTemplateId
          );
          return;
        }
        this.display();
        this.sendContentReplacedEvent();
      }
      setupRtmTriggers({
        message: this.message,
        isVisible: this.isVisible,
        featureInterface: this.featureInterface,
        displayRTM: this.display.bind(this),
        sendRTMShownEvent: this.sendShownEvent.bind(this),
        rtmHelper: this.helperClass,
        resetMessageState: this.resetMessageState.bind(this),
        resetMpsState: this.resetMpsState.bind(this),
        resetDisplayState: this.resetDisplayState.bind(this),
        replaceMessageTriggerWithEventsTrigger: this.replaceMessageTriggerWithEventsTrigger.bind(this)
      });
    }
    getRtmHelperForHandlingMessage() {
      let Helper;
      if (this.implementation.getRtmTemplateHelper) {
        Helper = this.implementation.getRtmTemplateHelper({
          mscTemplateId: this.message.config.ids.mscTemplateId,
          rtmType: this.message.config.rtmType
        });
      } else if (this.isEACorSMB()) {
        Helper = RtmHelperEac;
      }
      if (!Helper) {
        Helper = RtmHelper;
      }
      return new Helper(this.api);
    }
    isEACorSMB() {
      return this.message.config.rtmType === "EAC" || this.message.config.rtmType === "SMB" || this.message.config.rtmType === "DOT";
    }
    hideOverlay() {
      if (this.elContentHolder) {
        this.elContentHolder.innerHTML = "";
      }
      if (this.elOverlay) {
        this.elOverlay.className += " sc-hide";
      }
      this.isVisible = false;
      this.removeKeydownEventListener();
    }
    hideInjected(holdingDiv) {
      if (holdingDiv) {
        holdingDiv.remove();
      }
      this.isVisible = false;
    }
    displayOverlay() {
      const displayConfig = this.message.display;
      if (displayConfig.backdrop) {
        this.renderBackgroundOverlay(this.message);
      }
      const elHolder = this.elContentHolder || this.api.page.document().createElement("div");
      elHolder.className = "rtm-content";
      elHolder.setAttribute("tabindex", "-1");
      elHolder.innerHTML = decodeURIComponent(this.message.template.html);
      if (displayConfig.backdrop) {
        this.api.page.querySelector(".rtm-overlay").appendChild(elHolder);
      } else {
        this.elBody.appendChild(elHolder);
      }
      this.elContentHolder = elHolder;
    }
    displayInline() {
      const displayConfig = this.message.display;
      const element = this.api.page.querySelector(displayConfig.selector);
      if (!element) {
        logTiny22.logInfo(`Couldn't find element with selector ${displayConfig.selector}`);
        throw new Error(
          `Couldn't find element with selector ${displayConfig.selector}`
        );
      }
      const className = "sc-rtm-injected";
      const holdingDiv = this.api.page.document().createElement("div");
      holdingDiv.className = className;
      holdingDiv.innerHTML = decodeURIComponent(this.message.template.html);
      const insertedDiv = element.querySelector(
        `.${className}`
      );
      const insertedParentDiv = element.parentElement && element.parentElement.querySelector(`.${className}`);
      if (insertedDiv) {
        this.hideInjected(insertedDiv);
      } else if (insertedParentDiv) {
        this.hideInjected(insertedParentDiv);
      }
      element.insertAdjacentElement(displayConfig.insert, holdingDiv);
      this.elContentHolder = holdingDiv;
    }
    display() {
      validateBeforeDisplayOrReporting(
        this.featureInterface,
        this.helperClass.alwaysDisplay ? false : this.hasBeenDisplayed,
        this.onsiteMessageState,
        this.message
      ).then(({ isValid }) => {
        if (isValid) {
          this.renderCss();
          this.renderHTML();
          this.initCountdown();
          this.helperClass.onRender(this.elContentHolder);
          this.addKeydownEventListener();
        }
      });
    }
    addKeydownEventListener() {
      on("keydown", this.handleKeydown.bind(this), this.elContentHolder);
    }
    removeKeydownEventListener() {
      off("keydown", this.handleKeydown.bind(this), this.elContentHolder);
    }
    handleKeydown(e) {
      switch (e.key) {
        case "Tab":
          if (this.message.display.type === "inline") {
            return;
          }
          this.helperClass.handleTabNavigation(e);
          break;
        case "Escape":
          this.helperClass.escapeClose();
          break;
        case "Enter":
          this.helperClass.enterSubmit(e);
          break;
      }
    }
    initCountdown() {
      return new RTMHelperCDT(this.api).onRender();
    }
    renderBackgroundOverlay(message) {
      if (!this.elBody) {
        throw new Error("Could not find body tag to render RTM into");
      }
      if (this.elOverlay) {
        return;
      }
      const elOverlay = this.api.page.document().createElement("div");
      elOverlay.className = "rtm-overlay";
      if (!message.config.triggers.onLoad) {
        elOverlay.className += " sc-hide";
      }
      this.elBody.appendChild(elOverlay);
      this.elOverlay = elOverlay;
    }
    renderHTML() {
      const displayConfig = this.message.display;
      if (displayConfig.type === "overlay") {
        this.displayOverlay();
      } else if (displayConfig.type === "inline") {
        this.displayInline();
      } else {
        throw new Error(`Unknown RTM type ${displayConfig.type}`);
      }
    }
    renderCss() {
      let css = this.message.template.defaultCSS || " ";
      css += this.message.template.stylesheet || "";
      css = css.trim();
      if (css) {
        const elStyle = this.api.page.document().createElement("style");
        elStyle.innerHTML = decodeURIComponent(css);
        this.api.page.querySelector("head").appendChild(elStyle);
      }
    }
    sendContentReplacedEvent() {
      validateBeforeDisplayOrReporting(
        this.featureInterface,
        this.hasBeenDisplayed,
        this.onsiteMessageState,
        this.message
      ).then(({ isValid }) => {
        if (isValid) {
          const eventType = "RTM_CONTENT_REPLACED";
          const scrapeEvents = [this.getEventBase(eventType)];
          this.featureInterface.scrapeState({}, scrapeEvents);
          setupEventHandlers(
            this.featureInterface,
            this.elContentHolder,
            this.message,
            this.helperClass,
            this.hideOverlay.bind(this)
          );
        }
      });
    }
    sendShownEvent() {
      this.selectValidationStrategy(
        this.featureInterface,
        this.helperClass.alwaysDisplay ? false : this.hasBeenDisplayed,
        this.onsiteMessageState,
        this.message
      ).then(({ isValid }) => {
        if (isValid) {
          const eventType = "RTM_SHOWN";
          const scrapeEvents = [this.getEventBase(eventType)];
          this.featureInterface.scrapeState({}, scrapeEvents);
          setupEventHandlers(
            this.featureInterface,
            this.elContentHolder,
            this.message,
            this.helperClass,
            this.hideOverlay.bind(this)
          );
          if (this.elOverlay) {
            this.elOverlay.className = this.elOverlay.className.replace("sc-hide", "").trim();
          }
          this.helperClass.onAfterShow();
          this.isVisible = true;
          try {
            this.setMessageAsDisplayed();
          } catch (e) {
            logTiny22.logError(e);
          }
        } else {
          logTiny22.logInfo(
            `Validation failed in sendShownEvent for type: ${this.message.config.rtmType}`,
            this.message.config.ids.mscTemplateId
          );
        }
      }).catch((error) => {
        logTiny22.logError(`Error in sendShownEvent for type: ${this.message.config.rtmType}`, error);
      });
    }
    setMessageAsDisplayed() {
      this.hasBeenDisplayed = true;
    }
    selectValidationStrategy(featureInterface, hasBeenDisplayed, onsiteMessageState, message) {
      return __async(this, null, function* () {
        switch (message.config.rtmType) {
          case "SMB":
          case "EAC":
          case "DOT":
            return this.checkControlGroupHitAndValidate(
              featureInterface,
              hasBeenDisplayed,
              onsiteMessageState,
              message
            );
          default:
            return validateBeforeDisplayOrReporting(
              featureInterface,
              hasBeenDisplayed,
              onsiteMessageState,
              message
            );
        }
      });
    }
    checkControlGroupHitAndValidate(featureInterface, hasBeenDisplayed, onsiteMessageState, message) {
      return __async(this, null, function* () {
        if (!this.controlGroupHit) {
          const validation = yield validateBeforeDisplayOrReporting(
            featureInterface,
            hasBeenDisplayed,
            onsiteMessageState,
            message,
            !this.controlGroupHit
          );
          if (validation.isControlGroup) {
            this.controlGroupHit = validation.isControlGroup;
          }
          return validation;
        }
        return { isValid: false };
      });
    }
    getEventBase(eventType) {
      var _a;
      return {
        data: {
          controlGroup: this.message.config.controlGroup,
          embed: this.message.config.embed,
          eventType,
          rtmType: this.message.config.rtmType,
          rtmIds: this.message.config.ids,
          language: (_a = this.message.config.language) != null ? _a : "",
          rtmTrigger: this.getSingleTrigger(this.message.config.triggers),
          offsiteRtmCampaign: this.message.config.offsiteRtmCampaign
        },
        name: `EVENT:${eventType}`
      };
    }
    getSingleTrigger(triggers) {
      switch (true) {
        case triggers.onLoad:
          return "OnLoad";
        case !!triggers.onClick:
          return `On click: ${triggers.onClick.selector}`;
        case !!triggers.exitFrame:
          return `Exit frame: ${triggers.exitFrame[0]}`;
        case !!triggers.inactivity:
          return `${triggers.inactivity}s inactivity`;
        default:
          return "";
      }
    }
    resetMessageState(keepMessage = false) {
      const existingMessage = this.message;
      const wasDisplayed = keepMessage ? this.hasBeenDisplayed : false;
      this.onsiteMessageState = new OnsiteMessagesState();
      this.elBody = this.api.page.querySelector("body");
      this.isVisible = false;
      this.hasBeenDisplayed = wasDisplayed;
      this.controlGroupHit = false;
      this.message = keepMessage ? existingMessage : void 0;
      if (keepMessage && existingMessage) {
        this.helperClass = this.getRtmHelperForHandlingMessage();
        if (this.isEACorSMB()) {
          this.onsiteMessageState.setTemplateStatusActive(
            existingMessage.config.ids.mscTemplateId,
            existingMessage.config.language
          );
        }
      }
      flushSubscribers();
    }
    resetMpsState() {
      this.onsiteMessageState = new OnsiteMessagesState();
      this.elBody = this.api.page.querySelector("body");
      this.isVisible = false;
      this.hasBeenDisplayed = false;
    }
    /**
     * Resets only the display state flags to allow RTM to be displayed again.
     * This preserves onsiteMessageState which is needed for EAC/SMB/DOT validation.
     * Used for click triggers with overrideFreqCaps=true that should fire multiple times per session.
     */
    resetDisplayState() {
      this.isVisible = false;
      this.hasBeenDisplayed = false;
    }
    /**
     * Attempts to display the RTM if it hasn't been displayed yet.
     */
    attemptDisplayIfNotShown() {
      if (this.hasBeenDisplayed && !this.helperClass.alwaysDisplay || !this.message) {
        return;
      }
      const triggers = this.message.config.triggers || {};
      if (!triggers.onLoad) {
        return;
      }
      if (!this.helperClass || !this.helperClass.shouldRTMDisplay()) {
        return;
      }
      try {
        this.display();
        this.sendShownEvent();
      } catch (error) {
        logTiny22.logError("failed to display RTM", error);
      }
    }
    /**
     * Replaces the message's trigger with the event's trigger.
     * @param trigger
     */
    replaceMessageTriggerWithEventsTrigger(trigger) {
      let exactTrigger;
      switch (typeof trigger) {
        case "string":
          exactTrigger = { exitFrame: [trigger] };
          break;
        case "number":
          exactTrigger = { inactivity: trigger };
          break;
        case "boolean":
          exactTrigger = { onLoad: trigger };
          break;
        default:
          return;
      }
      this.message = __spreadProps(__spreadValues({}, this.message), {
        config: __spreadProps(__spreadValues({}, this.message.config), { triggers: exactTrigger })
      });
    }
  };

  // ../client-script-core/src/features/rtm/SocketManager.ts
  init_define_APP_CONFIG();
  var logTiny23 = __toESM(require_log_tiny());
  var SocketManager = class {
    constructor(featureInterface) {
      this.featureInterface = featureInterface;
      this.subscribers = [];
      this.createSocket();
    }
    /**
     * Subscribe to message on the channel
     * @param callback Function, called when we get a message from the server
     */
    subscribe(callback) {
      this.subscribers.push(callback);
    }
    onClose(event) {
      logTiny23.logWarning("Socket closed");
      this.testHooks.rtmSocketEvent("DISCONNECTED");
      if (this.retryInterval !== void 0) {
        return;
      }
      this.retryInterval = window.setInterval(() => {
        if (this.isSocketReady()) {
          clearInterval(this.retryInterval);
          delete this.retryInterval;
          return;
        }
        this.createSocket(true);
      }, 2500);
    }
    onError(event) {
      logTiny23.logError("Socket error", event);
    }
    onOpen(event) {
      this.testHooks.rtmSocketEvent("CONNECTED");
      logTiny23.logInfo("socket it open by workspaces");
    }
    /**
     * On messages call all our subscribers
     * @param event
     */
    onMessage(event) {
      try {
        const msg = JSON.parse(event.data);
        this.testHooks.rtmSocketEvent("MESSAGE", msg);
        this.subscribers.forEach((cb) => {
          cb(msg);
        });
      } catch (ex) {
        sendError(ex, this.featureInterface.clientInformation);
        logTiny23.logError("Socket message from server", event.data);
        this.testHooks.rtmSocketEvent("MESSAGE_ERROR", {
          event: event.data,
          error: ex
        });
      }
    }
    createSocket(force) {
      if (this.isSocketReady() || this.retryInterval && !force) {
        return;
      }
      if (this.socket) {
        this.socket.close();
      }
      const apiKey = this.featureInterface.clientInformation.apiKey;
      const machineGuid = this.featureInterface.dynamicIds.machineIds.machineGuid;
      const tabId = this.featureInterface.dynamicIds.machineIds.tabId;
      this.socket = new WebSocket(`${config_default.rtmWebSocketUrl}?siteID=${apiKey}&machineGUID=${machineGuid}&tabID=${tabId}`);
      this.socket.addEventListener("message", this.onMessage.bind(this));
      this.socket.addEventListener("open", this.onOpen.bind(this));
      this.socket.addEventListener("close", this.onClose.bind(this));
      this.socket.addEventListener("error", this.onError.bind(this));
    }
    isSocketReady() {
      return !!this.socket && this.socket.readyState === WebSocket.OPEN;
    }
    /**
     * we define this as a getter down here, incase cuckoo is loaded late, we still want to send messages
     * rather than have to reload the page.
     *
     * If the test hooks don't exist - then just mock it out, saves checking if the property exists
     */
    get testHooks() {
      return window.sc_testHooks || {
        rtmSocketEvent(eventName, data) {
        }
      };
    }
  };

  // ../client-script-core/src/features/rtm/RtmListener.ts
  var RtmListener = class {
    constructor(featureInterface, implementation2, _) {
      this.managers = new ManagersMap();
      this.featureInterface = featureInterface;
      this.implementation = implementation2;
      this.socket = new SocketManager(featureInterface);
      this.socket.subscribe(this.onSocketMessage.bind(this));
    }
    /**
     * Triggers any RTM that has not been displayed yet.
     * Useful for watchers where the element doesn't exist on the page yet
     */
    triggerUntriggeredRTMs() {
      const managers = this.managers.getRtmManagerValues();
      for (const manager of managers) {
        manager.attemptDisplayIfNotShown();
      }
    }
    /**
     * Listens for messages being sent from the websocket and
     * configures an RTM manager per type of message per MSC template.
     *
     * @param message - The message being received from the web socket.
     */
    onSocketMessage(message) {
      let manager;
      let isSameCampaignWithDiffTemplate = false;
      let templateHasBeenDisplayed = false;
      manager = this.managers.get(message.config.rtmType + message.config.ids.mscTemplateId);
      for (const rtmManager of this.managers.getRtmManagerValues()) {
        if (rtmManager.message && rtmManager.message.config && rtmManager.message.config.ids && rtmManager.message.config.ids.campaignId === message.config.ids.campaignId) {
          if (rtmManager.hasBeenDisplayed) {
            templateHasBeenDisplayed = true;
            break;
          } else if (rtmManager.message.config.ids.mscTemplateId !== message.config.ids.mscTemplateId) {
            isSameCampaignWithDiffTemplate = true;
            rtmManager.resetMessageState();
            rtmManager.resetMpsState();
            break;
          }
        }
      }
      if (!manager && !templateHasBeenDisplayed || isSameCampaignWithDiffTemplate) {
        manager = new RtmManager(this.featureInterface, this.implementation);
        this.managers.set(message.config.rtmType + message.config.ids.mscTemplateId, manager);
      }
      if (manager) {
        manager.configure(message);
      }
    }
  };

  // ../client-script-core/src/features/rtm/index.ts
  function rtm_default(featureInterface, implementation2, browserCapabilities2) {
    const listener = new RtmListener(featureInterface, implementation2, browserCapabilities2);
    featureInterface.setRtmListener(listener);
    return listener;
  }

  // ../client-script-core/features/rtm.ts
  var rtm_default2 = rtm_default;

  // implementations/ikeauae/entry.ts
  var features = [rtm_default2];
  var implementation = Implementation;
  var webpackEntryPoint = (testHooks) => {
    runCollector(Implementation, features, testHooks);
  };
  webpackEntryPoint();
})();
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=bundle.js.map

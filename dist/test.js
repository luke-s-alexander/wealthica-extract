var test =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(3);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var regeneratorRuntime = __webpack_require__(1);

var addon, addonOptions;

$(function () {

  // Parse Assets (Institutions response) JSON object into CSV string
  var parseAssetsCustomToCsvFile = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(jsonData) {
      var cashCsv, keys, columnDelimiter, lineDelimiter, csvColumnHeader, csvStr, shared, sortedCsvStr;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(jsonData.length == 0)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return', '');

            case 3:
              ;
              // Call the getInstitutions API for cash balances and set the function response to variable cashCsv
              _context.next = 6;
              return addon.api.getInstitutions(getQueryFromOptions(addonOptions)).then(function (response) {
                return parseCashCustomToCsvFile(response);
              }).catch(function (err) {
                console.log(err);
              });

            case 6:
              cashCsv = _context.sent;

              // Create array of column headers
              keys = ['score', 'category', 'class', 'symbol', 'alias', 'institution', 'account', 'account_type', 'account_currency',
              //'quantity',         -- Removed to simplify export file
              //'book_value',       -- Removed to simplify export file
              'market_value'
              //,'gain_percent',    -- Removed to simplify export file
              //'gain_amount'       -- Removed to simplify export file
              ];
              // Set formats

              columnDelimiter = ',';
              lineDelimiter = '\n';
              // Build header

              csvColumnHeader = keys.join(columnDelimiter);
              csvStr = csvColumnHeader + lineDelimiter;
              shared = [];
              // Loop through position results

              jsonData.forEach(function (item) {
                // Retrieve a score for the item, to be used when sorting
                var score = assignSortScore(item);
                // Don't print any data at the position level, but capture shared data
                shared = [score, item.category, item.class, item.security.symbol, item.security.aliases[0]];
                // Loop through investments for each position
                item.investments.forEach(function (element) {
                  var investment = element.investment;

                  // Only capture row data if market_value is not zero
                  if (element.market_value) {
                    // split field investment into account, account_type and account_currency
                    var parsedInvestment = investment.split(":");
                    var investment_data = [element.institution, parsedInvestment,
                    // parsedInvestment[0], // -- Removed (type portion) to simplify export file
                    // parsedInvestment[1],    -- Removed (currency portion) to simplify export file
                    // element.quantity,    -- Removed to simplify export file
                    // element.book_value,  -- Removed to simplify export file
                    element.market_value
                    // , 
                    // element.gain_percent,-- Removed to simplify export file
                    // element.gain_amount  -- Removed to simplify export file
                    ];
                    // Add investment data to shared position data
                    investment_data = shared.concat(investment_data);
                    // Loop through investment data and create csv row      	  
                    investment_data.forEach(function (entry, index) {
                      if (index > 0 && index < investment_data.length) {
                        csvStr += columnDelimiter;
                      };
                      csvStr += entry;
                    });
                    csvStr += lineDelimiter;
                  };
                });
              });
              csvStr = csvStr.concat(cashCsv);
              sortedCsvStr = sortCsv(csvStr);
              return _context.abrupt('return', encodeURIComponent(sortedCsvStr));

            case 19:
              _context.prev = 19;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);

            case 22:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 19]]);
    }));

    return function parseAssetsCustomToCsvFile(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // Parse JSON object into CSV string
  var exportAssetsCustomToCsvFile = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(jsonData) {
      var csvStr, dataUri, today, date, time, exportFileDefaultName, linkElement;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return parseAssetsCustomToCsvFile(jsonData);

            case 2:
              csvStr = _context2.sent;
              dataUri = 'data:text/csv;charset=utf-8,' + csvStr;
              today = new Date();
              date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
              time = today.getHours().toString() + today.getMinutes() + today.getSeconds();
              exportFileDefaultName = 'positions_' + date + time + '.csv';
              linkElement = document.createElement('a');

              linkElement.setAttribute('href', dataUri);
              linkElement.setAttribute('download', exportFileDefaultName);
              linkElement.click();

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function exportAssetsCustomToCsvFile(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  addon = new Addon();

  addon.on('init', function (options) {
    // Dashboard is ready and is signaling to the add-on that it should
    // render using the passed in options (filters, language, etc.)
    addonOptions = options;
    $('button').removeAttr('disabled');
    showAddonData(addonOptions.data, true);
  }).on('update', function (options) {
    // Filters have been updated and Dashboard is passing in updated options
    addonOptions = _.extend(addonOptions, options);
    showAddonData(addonOptions.data);
  });

  $('#addTransaction').on('click', function () {
    $(this).attr('disabled', 'disabled');

    addon.addTransaction({
      description: "New transaction from Example Add-on"
    }).then(function (transaction) {
      $('#result').html('New transaction:<br><code>' + JSON.stringify(transaction) + '</code>');
    }).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#addTransaction').removeAttr('disabled');
    });
  });

  $('#getAssetsCustom').on('click', function () {
    $(this).attr('disabled', 'disabled');
    addon.api.getPositions(getQueryFromOptions(addonOptions)).then(function (response) {
      $('#result').html('List Positions Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
      exportAssetsCustomToCsvFile(response);
    }).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#getAssetsCustom').removeAttr('disabled');
    });
  });

  $('#listTransactions').on('click', function () {
    $(this).attr('disabled', 'disabled');
    addon.api.getTransactions(getQueryFromOptions(addonOptions)).then(function (response) {
      $('#result').html('List Transactions Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
    }).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#getTransactions').removeAttr('disabled');
    });
  });

  $('#getTransactions').on('click', function () {
    $(this).attr('disabled', 'disabled');

    addon.api.getTransactions(getQueryFromOptions(addonOptions)).then(function (response) {
      $('#result').html('List Transactions Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
      exportTransactionsToCsvFile(response);
    }).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#getTransactions').removeAttr('disabled');
    });
  });

  $('#getPositions').on('click', function () {
    $(this).attr('disabled', 'disabled');

    addon.api.getPositions(getQueryFromOptions(addonOptions)).then(function (response) {
      $('#result').html('List Positions Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
      exportPositionsToCsvFile(response);
    }).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#getPositions').removeAttr('disabled');
    });
  });

  $('#getInstitutions').on('click', function () {
    $(this).attr('disabled', 'disabled');

    addon.api.getInstitutions(getQueryFromOptions(addonOptions)).then(function (response) {
      $('#result').html('List Institutions Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
      exportInstitutionsToCsvFile(response);
    }).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#getInstitutions').removeAttr('disabled');
    });
  });

  $('#getAssets').on('click', function () {
    $(this).attr('disabled', 'disabled');

    addon.api.getAssets(getQueryFromOptions(addonOptions)).then(function (response) {
      $('#result').html('List Assets Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
    }).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#getAssets').removeAttr('disabled');
    });
  });

  $('#saveData').on('click', function () {
    $(this).attr('disabled', 'disabled');
    var newData = $('#data').val();

    // Try parsing textarea value to a JSON object before passing to addon.saveData(data)
    try {
      newData = JSON.parse(newData);
    } catch (e) {
      $('#result').html('Error:<br><code>Data must be JSON</code>');
      $('#saveData').removeAttr('disabled');
      return;
    }

    addon.saveData(newData).catch(function (err) {
      $('#result').html('Error:<br><code>' + err + '</code>');
    }).finally(function () {
      $('#saveData').removeAttr('disabled');
    });
  });

  addon.on('postMessage', function (origin, message) {
    console.log(arguments);
  });

  addon.on('gotMessage', function (origin, message) {
    console.log(arguments);
  });

  // Show addon data in result box and optionally update the text input.
  function showAddonData(data, updateInput) {
    $('#result').html('Addon data:<br><code>' + JSON.stringify(data, null, 2) + '</code>');
    if (updateInput && data) {
      $('#data').val(JSON.stringify(data));
    }
  }

  // Compose a query object from the addon options to pass to the API calls.
  function getQueryFromOptions(options) {
    return {
      from: options.dateRangeFilter && options.dateRangeFilter[0],
      to: options.dateRangeFilter && options.dateRangeFilter[1],
      groups: options.groupsFilter,
      institutions: options.institutionsFilter,
      investments: options.investmentsFilter === 'all' ? null : options.investmentsFilter
    };
  }
  // Parse Cash into CSV string
  function parseCashCustomToCsvFile(jsonData) {
    if (jsonData.length == 0) {
      return '';
    };
    // Create array of column headers
    var keys = ['score', 'category', 'class', 'symbol', 'alias', 'account', 'account_type', 'account_currency',
    // 'quantity',         -- Removed to simplify export file
    // 'book_value',       -- Removed to simplify export file
    'market_value'];
    // Set formats
    var columnDelimiter = ',';
    var lineDelimiter = '\n';
    // Build header
    var csvColumnHeader = keys.join(columnDelimiter);
    // Don't set column headers (assume it's set by parent function)
    var csvStr = "";
    var shared = [];
    // Capture institutions from filters to be used when generating rows
    var addonOptionsInstitutions = getQueryFromOptions(addonOptions).institutions;
    // Create array for institutions from filters
    var parsedInstitutions = [];
    // If filters are applied, create array of institutions
    if (addonOptionsInstitutions) {
      var parsedInstitutions = addonOptionsInstitutions.split(",");
    };
    // Loop through position results
    jsonData.forEach(function (item) {
      // Retrieve a score for the item, to be used when sorting
      var score = assignSortScore(item);
      // Only capture information for rows where institutions are in filter
      if (!addonOptionsInstitutions || parsedInstitutions.indexOf(item.id) != -1) {
        // Create shared column data for cash
        shared = [score, 'Cash', 'cash', 'Cash', null, item.id // Capture ID of institution for sorting
        ];
        // Loop through investments for each position
        item.investments.forEach(function (element) {
          // Only capture data for elements where cash balance >0
          // Filter out credit cards and locs (handled differently below)
          if (element.cash && (element.type !== "credit" || element.type !== "loc")) {
            var investment_data = [element.id, element.type, element.currency,
            // null,             -- Removed to simplify export file 
            // element.cash,     -- Removed to simplify export file
            element.cash];
            // Add investment data to shared position data
            investment_data = shared.concat(investment_data);
            // Loop through investment data and create csv row
            if (investment_data[9] != 0) {
              investment_data.forEach(function (entry, index) {
                if (index > 0 && index < investment_data.length) {
                  csvStr += columnDelimiter;
                };
                csvStr += entry;
              });
              csvStr += lineDelimiter;
            };
          }
          // Take value from currency_value field for credit and loc assets
          else if (element.currency_value && (element.type == "credit" || element.type == "loc")) {
              var investment_data = [element.id, element.type, element.currency,
              // null,             -- Removed to simplify export file 
              // element.cash,     -- Removed to simplify export file
              element.currency_value];
              // Add investment data to shared position data
              investment_data = shared.concat(investment_data);
              // Loop through investment data and create csv row
              if (investment_data[9] != 0) {
                investment_data.forEach(function (entry, index) {
                  if (index > 0 && index < investment_data.length) {
                    csvStr += columnDelimiter;
                  };
                  csvStr += entry;
                });
                csvStr += lineDelimiter;
              };
            };
        });
      };
    });
    return csvStr;
  };;

  // Parse Positions JSON object into CSV string
  function parsePositionsToCsvFile(jsonData) {
    if (jsonData.length == 0) {
      return '';
    }
    // Create array of column headers
    var keys = ['category', 'class', 'symbol', 'alias', 'account', 'account_type', 'account_currency', 'quantity', 'book_value', 'market_value', 'gain_percent', 'gain_amount'];
    // Set formats
    var columnDelimiter = ',';
    var lineDelimiter = '\n';
    // Build header
    var csvColumnHeader = keys.join(columnDelimiter);
    var csvStr = csvColumnHeader + lineDelimiter;
    var shared = [];
    // Loop through position results
    jsonData.forEach(function (item) {
      // Don't print any data at the position level, but capture shared data
      shared = [item.category, item.class, item.security.symbol, item.security.aliases[0]];
      // Loop through investments for each position
      item.investments.forEach(function (element) {
        // Only export cash positions that are non zero
        if (element.market_value) {
          var investment = element.investment;
          // split field investment into account, account_type and account_currency
          var parsedInvestment = investment.split(":");

          var investment_data = [parsedInvestment, element.quantity, element.book_value, element.market_value, element.gain_percent, element.gain_amount];
          // Add investment data to shared position data
          investment_data = shared.concat(investment_data);
          // Loop through investment data and create csv row
          investment_data.forEach(function (entry, index) {
            if (index > 0 && index < investment_data.length) {
              csvStr += columnDelimiter;
            };
            csvStr += entry;
          });
          csvStr += lineDelimiter;
        };
      });
    });
    var cashCsv = addon.api.getInstitutions(getQueryFromOptions(addonOptions)).then(function (response) {
      var csv = parseInstitutionsToCsvFile(response);
      return csv;
    }).catch(function (err) {
      // catch errors in console
      console.log(err);
    });
    // Add Institutions (cash) csv to the positions csv:
    csvStr = csvStr.concat(cashCsv);
    // return encodeURIComponent(csvStr.concat(cashCsv));
    return encodeURIComponent(csvStr);
  };

  // Parse Institutions Cash into CSV string
  function parseInstitutionsToCsvFile(jsonData) {
    if (jsonData.length == 0) {
      return '';
    }
    // Create array of column headers
    var keys = ['category', 'class', 'symbol', 'alias', 'account', 'account_type', 'account_currency', 'quantity', 'book_value', 'market_value', 'gain_percent', 'gain_amount'];
    // Set formats
    var columnDelimiter = ',';
    var lineDelimiter = '\n';
    // Build header
    var csvColumnHeader = keys.join(columnDelimiter);
    var csvStr = csvColumnHeader + lineDelimiter;
    var shared = [];
    // Loop through position results
    jsonData.forEach(function (item) {
      // Don't print any data at the position level, but capture shared data
      shared = ['Cash', null, 'Cash', null];
      // Loop through investments for each position
      item.investments.forEach(function (element) {

        var investment_data = [element.id, element.type, element.currency, null, null, element.cash, null, null];
        // Add investment data to shared position data
        investment_data = shared.concat(investment_data);
        // Loop through investment data and create csv row
        if (investment_data[9] != 0) {
          investment_data.forEach(function (entry, index) {
            if (index > 0 && index < investment_data.length) {
              csvStr += columnDelimiter;
            }
            csvStr += entry;
          });
          csvStr += lineDelimiter;
        };
      });
    });
    return encodeURIComponent(csvStr);
  };

  // Parse Transactions JSON object into CSV string
  function parseTransactionsToCsvFile(jsonData) {
    if (jsonData.length == 0) {
      return '';
    }
    // Create array of column headers
    var keys = ['account', 'account_type', 'account_currency', 'type', 'date', 'quantity', 'currency_amount', 'fee', 'symbol', 'name'];
    // Set formats
    var columnDelimiter = ',';
    var lineDelimiter = '\n';
    // Build header
    var csvColumnHeader = keys.join(columnDelimiter);
    var csvStr = csvColumnHeader + lineDelimiter;
    var row = [];
    // Loop through transaction results
    jsonData.forEach(function (item) {
      // Create row from transaction data
      var investment = item.investment;
      // split field investment into account, account_type and account_currency
      var parsedInvestment = investment.split(":");

      row = [parsedInvestment, item.type, item.date, item.quantity, item.currency_amount, item.fee];
      // Check to see if transaction references a security
      if (_typeof(item.security) === "object") {
        // Add security data if available
        row = row.concat([item.security.symbol, item.security.name]);
      } else {
        // Add null placeholders if no security data
        row.push(null, null);
      };
      // Loop through row data and create csv row
      row.forEach(function (entry, index) {
        if (index > 0 && index < row.length) {
          csvStr += columnDelimiter;
        }
        csvStr += entry;
      });
      csvStr += lineDelimiter;
    });
    return encodeURIComponent(csvStr);
  };
  // Parse Institutions JSON object into CSV string
  function exportCashCustomToCsvFile(jsonData) {
    var csvStr = parseCashCustomToCsvFile(jsonData);
    var dataUri = 'data:text/csv;charset=utf-8,' + csvStr;
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours().toString() + today.getMinutes() + today.getSeconds();

    var exportFileDefaultName = 'cash_' + date + time + '.csv';

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };;
  // Parse JSON object into CSV string
  function exportTransactionsToCsvFile(jsonData) {
    var csvStr = parseTransactionsToCsvFile(jsonData);
    var dataUri = 'data:text/csv;charset=utf-8,' + csvStr;
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours().toString() + today.getMinutes() + today.getSeconds();

    var exportFileDefaultName = 'transactions_' + date + time + '.csv';

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Parse JSON object into CSV string
  function exportPositionsToCsvFile(jsonData) {
    var csvStr = parsePositionsToCsvFile(jsonData);
    var dataUri = 'data:text/csv;charset=utf-8,' + csvStr;
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours().toString() + today.getMinutes() + today.getSeconds();

    var exportFileDefaultName = 'positions_' + date + time + '.csv';

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Parse Institutions JSON object into CSV string
  function exportInstitutionsToCsvFile(jsonData) {
    var csvStr = parseInstitutionsToCsvFile(jsonData);
    var dataUri = 'data:text/csv;charset=utf-8,' + csvStr;
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours().toString() + today.getMinutes() + today.getSeconds();

    var exportFileDefaultName = 'cash_' + date + time + '.csv';

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  function sortCsv(csvStr) {
    // Capture the keys from header row
    var csvRowsArray = csvStr.split('\n');
    var keys = csvRowsArray[0].split(',');

    // Build an array of rows as objects 
    var objectRowsArray = [];
    csvRowsArray.forEach(function (element, index) {
      // Skip header row (index=0) and blank rows
      if (index > 0 && csvRowsArray[index] != '') {
        // Create array for row
        var row = csvRowsArray[index].split(',');
        // Create object to be populated with data from row array
        var rowObject = {};
        // Create object properties from keys and populate with row array data
        keys.forEach(function (key, index) {
          rowObject[key] = row[index];
        });
        // Index=0 is skipped (it is header row)
        objectRowsArray[index - 1] = rowObject;
      };
    });
    // Sorting parameters passed to dynmaicSortMultiple are hard-coded for now:
    var sortedObjectArray = objectRowsArray.sort(dynamicSortMultiple("-score", "institution", "account", "-class", "symbol"));
    // Delete institution and score row after using them for sorting
    sortedObjectArray = deleteFromObjectArray(sortedObjectArray, 'institution', 'score');
    // sortedObjectArray = deleteFromObjectArray(sortedObjectArray);
    return objectArrayToCsv(sortedObjectArray);
  };

  function dynamicSortMultiple() {
    /*
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    var props = arguments;
    return function (obj1, obj2) {
      var i = 0,
          result = 0,
          numberOfProperties = props.length;
      /* try getting a different result from 0 (equal)
       * as long as we have extra properties to compare
       */
      while (result === 0 && i < numberOfProperties) {
        result = dynamicSort(props[i])(obj1, obj2);
        i++;
      }
      return result;
    };
  };

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  /**
   * Returns comma separated table as a string. 
   *
   * @param {object} objectRowArray is the array of objects to be converted.
   * @return {string} csvStr is the CSV string returned.
   */
  function objectArrayToCsv(objectRowsArray) {
    // Set formats
    var columnDelimiter = ',';
    var lineDelimiter = '\n';
    var csvStr = "";

    // Create header row
    var firstRowObject = objectRowsArray[0];
    Object.keys(firstRowObject).forEach(function (value, index) {
      if (index > 0 && index < Object.keys(firstRowObject).length) {
        csvStr += columnDelimiter;
      };
      csvStr += value;
    });
    csvStr += lineDelimiter;

    // For each object in the array
    objectRowsArray.forEach(function (entry, index) {
      // loop through object properties, add to csvStr with separator
      Object.values(entry).forEach(function (value, index) {
        // Do not add column delimiter before first column
        if (index > 0 && index < Object.keys(entry).length) {
          csvStr += columnDelimiter;
        };
        // Add value to row string 
        csvStr += value;
      });
      // Add row delimiter to row string
      csvStr += lineDelimiter;
    });
    return csvStr;
  };

  /**
   * Returns array of objects with the specified keys removed form each object. 
   *
   * @param {object} arguments contains the array of objects to be modified as 
   * the first argument followed by any number of columns/keys to be removed.
   * @return {array} objectArray is the array of objects, each with
   * property keyPart deleted.
   */
  function deleteFromObjectArray() {
    var _arguments = arguments;

    var props = arguments; // Capture args and assign to variable
    var array = arguments[0]; // First arg is the array to be modified

    for (var i = 1; i < arguments.length; i++) {
      // Loop through keys passed in arguments
      array.forEach(function (entry) {
        // Loop through array of objects
        for (var k in entry) {
          // Loop through the object
          if (~k.indexOf(_arguments[i])) {
            // If the current key contains the string we're looking for
            delete entry[k]; // Delete obj[key];
          };
        };
      });
    };
    return array;
  };

  /**
   * Assigns a score (for sorting) to entries in an getInstitution or a getPosition
   * response if they have a registered account.
   *
   * @param {object} institution is the institution/position to be assigned a score. 
   * @return {number} score is the score given to the institution/position.
   */
  function assignSortScore(institution) {

    var score = 0;
    institution.investments.forEach(function (entry) {
      // Loop through investments
      if (entry.hasOwnProperty('investment')) {
        // Check if investment from positions response
        var parsedInvestment = entry.investment.split(":");
        if (!score && parsedInvestment[1] == "tfsa" | parsedInvestment[1] == "rrsp" | parsedInvestment[1] == "dpsp") {
          score += 1; // Assign a score to position investments that have a registered account
        };
      } else if (!score && entry.type == "tfsa" | entry.type == "rrsp" | entry.type == "dpsp") {
        score += 1; // Assign a score to institution investments that have a registered account
      };
    });
    return score;
  };
});
/**
* NOTES for sorting groups for investments:
** Create sorting groups for Investments (investment.type in ('tfsa', 'rrsp', 'dpsp'))
** Send sorting groups data to sorting function (i.e. as column?)
** Create function to remove unused columns after sorting.
*/

/***/ })
/******/ ]);
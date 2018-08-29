(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["formulaParser"] = factory();
	else
		root["formulaParser"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _errors;

exports['default'] = error;
exports.isValidStrict = isValidStrict;
var ERROR = exports.ERROR = 'ERROR';
var ERROR_DIV_ZERO = exports.ERROR_DIV_ZERO = 'DIV/0';
var ERROR_NAME = exports.ERROR_NAME = 'NAME';
var ERROR_NOT_AVAILABLE = exports.ERROR_NOT_AVAILABLE = 'N/A';
var ERROR_NULL = exports.ERROR_NULL = 'NULL';
var ERROR_NUM = exports.ERROR_NUM = 'NUM';
var ERROR_REF = exports.ERROR_REF = 'REF';
var ERROR_VALUE = exports.ERROR_VALUE = 'VALUE';
var ERROR_MEMBER_UNEXIST = exports.ERROR_MEMBER_UNEXIST = 'M/U';

var errors = (_errors = {}, _errors[ERROR] = '#ERROR!', _errors[ERROR_DIV_ZERO] = '#DIV/0!', _errors[ERROR_NAME] = '#NAME?', _errors[ERROR_NOT_AVAILABLE] = '#N/A', _errors[ERROR_NULL] = '#NULL!', _errors[ERROR_NUM] = '#NUM!', _errors[ERROR_REF] = '#REF!', _errors[ERROR_VALUE] = '#VALUE!', _errors[ERROR_MEMBER_UNEXIST] = '#M/U', _errors);

/**
 * Return error type based on provided error id.
 *
 * @param {String} type Error type.
 * @returns {String|null} Returns error id.
 */
function error(type) {
  var result = void 0;

  type = (type + '').replace(/#|!|\?/g, '');

  if (errors[type]) {
    result = errors[type];
  }

  return result ? result : null;
}

/**
 * Check if error type is strict valid with knows errors.
 *
 * @param {String} Error type.
 * @return {Boolean}
 */
function isValidStrict(type) {
  var valid = false;

  for (var i in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, i) && errors[i] === type) {
      valid = true;
      break;
    }
  }

  return valid;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.toNumber = toNumber;
exports.invertNumber = invertNumber;
/**
 * Convert value into number.
 *
 * @param {String|Number} number
 * @returns {*}
 */
function toNumber(number) {
  var result = void 0;

  if (typeof number === 'number') {
    result = number;
  } else if (typeof number === 'string') {
    result = number.indexOf('.') > -1 ? parseFloat(number) : parseInt(number, 10);
  }

  return result;
}

/**
 * Invert provided number.
 *
 * @param {Number} number
 * @returns {Number} Returns inverted number.
 */
function invertNumber(number) {
  return -1 * toNumber(number);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.toBoolean = toBoolean;
/* eslint-disable import/prefer-default-export */
/**
 * Convert value into boolean.
 *
 * @param {String|Boolean|Number|Any} boolean
 * @returns {*}
 */
function toBoolean(boolean) {
  var result = void 0;

  if (typeof boolean === 'boolean') {
    result = boolean;
  } else if (typeof boolean === 'string') {
    result = boolean !== '' && boolean !== '0';
  } else if (typeof boolean === 'number') {
    result = boolean !== 0;
  } else {
    result = !!boolean;
  }

  return result;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.error = exports.Parser = exports.ERROR_VALUE = exports.ERROR_REF = exports.ERROR_NUM = exports.ERROR_NULL = exports.ERROR_NOT_AVAILABLE = exports.ERROR_NAME = exports.ERROR_DIV_ZERO = exports.ERROR = undefined;

var _parser = __webpack_require__(4);

var _parser2 = _interopRequireDefault(_parser);

var _error = __webpack_require__(0);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.ERROR = _error.ERROR;
exports.ERROR_DIV_ZERO = _error.ERROR_DIV_ZERO;
exports.ERROR_NAME = _error.ERROR_NAME;
exports.ERROR_NOT_AVAILABLE = _error.ERROR_NOT_AVAILABLE;
exports.ERROR_NULL = _error.ERROR_NULL;
exports.ERROR_NUM = _error.ERROR_NUM;
exports.ERROR_REF = _error.ERROR_REF;
exports.ERROR_VALUE = _error.ERROR_VALUE;
exports.Parser = _parser2['default'];
exports.error = _error2['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tinyEmitter = __webpack_require__(5);

var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

var _evaluateByOperator = __webpack_require__(6);

var _evaluateByOperator2 = _interopRequireDefault(_evaluateByOperator);

var _grammarParser = __webpack_require__(22);

var _string = __webpack_require__(25);

var _number = __webpack_require__(1);

var _error = __webpack_require__(0);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class Parser
 */
var Parser = function (_Emitter) {
  _inherits(Parser, _Emitter);

  function Parser() {
    _classCallCheck(this, Parser);

    var _this = _possibleConstructorReturn(this, _Emitter.call(this));

    _this.parser = new _grammarParser.Parser();
    _this.parser.yy = {
      toNumber: _number.toNumber,
      trimEdges: _string.trimEdges,
      invertNumber: _number.invertNumber,
      throwError: function throwError(errorName) {
        return _this._throwError(errorName);
      },
      callVariable: function callVariable(variable) {
        return _this._callVariable(variable);
      },
      evaluateByOperator: _evaluateByOperator2['default'],
      callFunction: function callFunction(name, params) {
        return _this._callFunction(name, params);
      }
    };
    _this.variables = Object.create(null);
    _this.functions = Object.create(null);

    _this.setVariable('TRUE', true).setVariable('FALSE', false).setVariable('NULL', null);
    return _this;
  }

  /**
   * Parse formula expression.
   *
   * @param {String} expression to parse.
   * @return {*} Returns an object with tow properties `error` and `result`.
   */


  Parser.prototype.parse = function parse(expression) {
    var result = null;
    var error = null;

    try {
      if (expression === '') {
        result = '';
      } else {
        result = this.parser.parse(expression);
      }
    } catch (ex) {
      var message = (0, _error2['default'])(ex.message);

      if (message) {
        error = message;
      } else {
        error = (0, _error2['default'])(_error.ERROR);
      }
    }

    if (result instanceof Error) {
      error = (0, _error2['default'])(result.message) || (0, _error2['default'])(_error.ERROR);
      result = null;
    }

    return {
      error: error,
      result: result
    };
  };

  /**
   * Set predefined variable name which can be visible while parsing formula expression.
   *
   * @param {String} name Variable name.
   * @param {*} value Variable value.
   * @returns {Parser}
   */


  Parser.prototype.setVariable = function setVariable(name, value) {
    this.variables[name] = value;

    return this;
  };

  /**
   * Get variable name.
   *
   * @param {String} name Variable name.
   * @returns {*}
   */


  Parser.prototype.getVariable = function getVariable(name) {
    return this.variables[name];
  };

  /**
   * Retrieve variable value by its name.
   *
   * @param name Variable name.
   * @returns {*}
   * @private
   */


  Parser.prototype._callVariable = function _callVariable(name) {
    var value = this.getVariable(name);

    this.emit('callVariable', name, function (newValue) {
      if (newValue !== void 0) {
        value = newValue;
      }
    });

    if (value === void 0) {
      throw Error(_error.ERROR_NAME);
    }

    return value;
  };

  /**
   * Set custom function which can be visible while parsing formula expression.
   *
   * @param {String} name Custom function name.
   * @param {Function} fn Custom function.
   * @returns {Parser}
   */


  Parser.prototype.setFunction = function setFunction(name, fn) {
    this.functions[name] = fn;

    return this;
  };

  /**
   * Get custom function.
   *
   * @param {String} name Custom function name.
   * @returns {*}
   */


  Parser.prototype.getFunction = function getFunction(name) {
    return this.functions[name];
  };

  /**
   * Call function with provided params.
   *
   * @param name Function name.
   * @param params Function params.
   * @returns {*}
   * @private
   */


  Parser.prototype._callFunction = function _callFunction(name) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var fn = this.getFunction(name);
    var value = void 0;

    if (fn) {
      value = fn(params);
    }

    this.emit('callFunction', name, params, function (newValue) {
      if (newValue !== void 0) {
        value = newValue;
      }
    });

    return value === void 0 ? (0, _evaluateByOperator2['default'])(name, params) : value;
  };

  /**
   * Try to throw error by its name.
   *
   * @param {String} errorName Error name.
   * @returns {String}
   * @private
   */


  Parser.prototype._throwError = function _throwError(errorName) {
    if ((0, _error.isValidStrict)(errorName)) {
      throw Error(errorName);
    }

    throw Error(_error.ERROR);
  };

  return Parser;
}(_tinyEmitter2['default']);

exports['default'] = Parser;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = evaluateByOperator;
exports.registerOperation = registerOperation;

var _and = __webpack_require__(7);

var _and2 = _interopRequireDefault(_and);

var _add = __webpack_require__(8);

var _add2 = _interopRequireDefault(_add);

var _ampersand = __webpack_require__(9);

var _ampersand2 = _interopRequireDefault(_ampersand);

var _divide = __webpack_require__(10);

var _divide2 = _interopRequireDefault(_divide);

var _modulo = __webpack_require__(11);

var _modulo2 = _interopRequireDefault(_modulo);

var _equal = __webpack_require__(12);

var _equal2 = _interopRequireDefault(_equal);

var _greaterThan = __webpack_require__(13);

var _greaterThan2 = _interopRequireDefault(_greaterThan);

var _greaterThanOrEqual = __webpack_require__(14);

var _greaterThanOrEqual2 = _interopRequireDefault(_greaterThanOrEqual);

var _lessThan = __webpack_require__(15);

var _lessThan2 = _interopRequireDefault(_lessThan);

var _lessThanOrEqual = __webpack_require__(16);

var _lessThanOrEqual2 = _interopRequireDefault(_lessThanOrEqual);

var _minus = __webpack_require__(17);

var _minus2 = _interopRequireDefault(_minus);

var _multiply = __webpack_require__(18);

var _multiply2 = _interopRequireDefault(_multiply);

var _notEqual = __webpack_require__(19);

var _notEqual2 = _interopRequireDefault(_notEqual);

var _or = __webpack_require__(20);

var _or2 = _interopRequireDefault(_or);

var _power = __webpack_require__(21);

var _power2 = _interopRequireDefault(_power);

var _error = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable import/no-named-as-default-member */
var availableOperators = Object.create(null);

/**
 * Evaluate values by operator id.git
 *
 * @param {String} operator Operator id.
 * @param {Array} [params=[]] Arguments to evaluate.
 * @returns {*}
 */
function evaluateByOperator(operator) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  operator = operator.toUpperCase();

  if (!availableOperators[operator]) {
    throw Error(_error.ERROR_NAME);
  }

  return availableOperators[operator].apply(availableOperators, params);
}

/**
 * Register operator.
 *
 * @param {String|Array} symbol Symbol to register.
 * @param {Function} func Logic to register for this symbol.
 */
function registerOperation(symbol, func) {
  if (!Array.isArray(symbol)) {
    symbol = [symbol.toUpperCase()];
  }
  symbol.forEach(function (s) {
    if (func.isFactory) {
      availableOperators[s] = func(s);
    } else {
      availableOperators[s] = func;
    }
  });
}

registerOperation(_and2['default'].SYMBOL, _and2['default']);
registerOperation(_add2['default'].SYMBOL, _add2['default']);
registerOperation(_ampersand2['default'].SYMBOL, _ampersand2['default']);
registerOperation(_divide2['default'].SYMBOL, _divide2['default']);
registerOperation(_modulo2['default'].SYMBOL, _modulo2['default']);
registerOperation(_equal2['default'].SYMBOL, _equal2['default']);
registerOperation(_power2['default'].SYMBOL, _power2['default']);
registerOperation(_greaterThan2['default'].SYMBOL, _greaterThan2['default']);
registerOperation(_greaterThanOrEqual2['default'].SYMBOL, _greaterThanOrEqual2['default']);
registerOperation(_lessThan2['default'].SYMBOL, _lessThan2['default']);
registerOperation(_lessThanOrEqual2['default'].SYMBOL, _lessThanOrEqual2['default']);
registerOperation(_multiply2['default'].SYMBOL, _multiply2['default']);
registerOperation(_notEqual2['default'].SYMBOL, _notEqual2['default']);
registerOperation(_or2['default'].SYMBOL, _or2['default']);
registerOperation(_minus2['default'].SYMBOL, _minus2['default']);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SYMBOL = undefined;
exports['default'] = func;

var _boolean = __webpack_require__(2);

var SYMBOL = exports.SYMBOL = '&&';

function func(first) {
  if (!(0, _boolean.toBoolean)(first)) return false; // eslint-disable-line curly

  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < rest.length; ++i) {
    if (!(0, _boolean.toBoolean)(rest[i])) return false; // eslint-disable-line curly
  }
  return true;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SYMBOL = undefined;
exports['default'] = func;

var _number = __webpack_require__(1);

var _error = __webpack_require__(0);

var SYMBOL = exports.SYMBOL = '+';

function func(first) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var result = rest.reduce(function (acc, value) {
    return acc + (0, _number.toNumber)(value);
  }, (0, _number.toNumber)(first));

  if (isNaN(result)) {
    throw Error(_error.ERROR_VALUE);
  }

  return result;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = func;
var SYMBOL = exports.SYMBOL = '&';

function func() {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (acc, value) {
    return acc + value.toString();
  }, '');
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SYMBOL = undefined;
exports['default'] = func;

var _number = __webpack_require__(1);

var _error = __webpack_require__(0);

var SYMBOL = exports.SYMBOL = '/';

function func(first) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var result = rest.reduce(function (acc, value) {
    return acc / (0, _number.toNumber)(value);
  }, (0, _number.toNumber)(first));

  if (result === Infinity) {
    throw Error(_error.ERROR_DIV_ZERO);
  }
  if (isNaN(result)) {
    throw Error(_error.ERROR_VALUE);
  }

  return result;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SYMBOL = undefined;
exports['default'] = func;

var _number = __webpack_require__(1);

var _error = __webpack_require__(0);

var SYMBOL = exports.SYMBOL = '%';

function func(first) {
  if (isNaN(first)) {
    throw Error(_error.ERROR_VALUE);
  }

  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var result = rest.reduce(function (acc, value) {
    return acc % (0, _number.toNumber)(value);
  }, (0, _number.toNumber)(first));

  if (isNaN(result)) {
    throw Error(_error.ERROR_DIV_ZERO);
  }

  return result;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = func;
var SYMBOL = exports.SYMBOL = '=';

function func(exp1, exp2) {
  return exp1 === exp2;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = func;
var SYMBOL = exports.SYMBOL = '>';

function func(exp1, exp2) {
  return exp1 > exp2;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = func;
var SYMBOL = exports.SYMBOL = '>=';

function func(exp1, exp2) {
  return exp1 >= exp2;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = func;
var SYMBOL = exports.SYMBOL = '<';

function func(exp1, exp2) {
  return exp1 < exp2;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = func;
var SYMBOL = exports.SYMBOL = '<=';

function func(exp1, exp2) {
  return exp1 <= exp2;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SYMBOL = undefined;
exports['default'] = func;

var _number = __webpack_require__(1);

var _error = __webpack_require__(0);

var SYMBOL = exports.SYMBOL = '-';

function func(first) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var result = rest.reduce(function (acc, value) {
    return acc - (0, _number.toNumber)(value);
  }, (0, _number.toNumber)(first));

  if (isNaN(result)) {
    throw Error(_error.ERROR_VALUE);
  }

  return result;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SYMBOL = undefined;
exports['default'] = func;

var _number = __webpack_require__(1);

var _error = __webpack_require__(0);

var SYMBOL = exports.SYMBOL = '*';

function func(first) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var result = rest.reduce(function (acc, value) {
    return acc * (0, _number.toNumber)(value);
  }, (0, _number.toNumber)(first));

  if (isNaN(result)) {
    throw Error(_error.ERROR_VALUE);
  }

  return result;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = func;
var SYMBOL = exports.SYMBOL = '<>';

function func(exp1, exp2) {
  return exp1 !== exp2;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SYMBOL = undefined;
exports['default'] = func;

var _boolean = __webpack_require__(2);

var SYMBOL = exports.SYMBOL = '||';

function func(first) {
  if ((0, _boolean.toBoolean)(first)) return true; // eslint-disable-line curly

  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < rest.length; ++i) {
    if ((0, _boolean.toBoolean)(rest[i])) return true; // eslint-disable-line curly
  }
  return false;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SYMBOL = undefined;
exports['default'] = func;

var _number = __webpack_require__(1);

var _error = __webpack_require__(0);

var SYMBOL = exports.SYMBOL = '^';

function func(exp1, exp2) {
  var result = Math.pow((0, _number.toNumber)(exp1), (0, _number.toNumber)(exp2));

  if (isNaN(result)) {
    throw Error(_error.ERROR_VALUE);
  }

  return result;
}

func.SYMBOL = SYMBOL;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, process) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammarParser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,8],$V2=[1,6],$V3=[1,7],$V4=[1,9],$V5=[1,11],$V6=[1,12],$V7=[1,13],$V8=[1,15],$V9=[1,16],$Va=[1,17],$Vb=[1,18],$Vc=[1,19],$Vd=[1,20],$Ve=[1,21],$Vf=[1,22],$Vg=[1,23],$Vh=[1,24],$Vi=[1,25],$Vj=[1,26],$Vk=[1,27],$Vl=[1,28],$Vm=[1,29],$Vn=[1,30],$Vo=[5,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,30,31],$Vp=[5,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,30,31,33],$Vq=[5,10,11,13,14,15,16,17,18,19,20,21,22,30,31],$Vr=[5,10,13,14,15,16,17,18,19,30,31],$Vs=[5,10,13,14,15,16,17,18,19,20,21,30,31],$Vt=[5,10,11,13,14,15,16,17,18,19,20,21,22,23,24,30,31],$Vu=[13,30,31];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"expression":4,"EOF":5,"variableSequence":6,"number":7,"STRING":8,"&":9,"=":10,"+":11,"(":12,")":13,"||":14,"&&":15,"<=":16,">=":17,"<>":18,"NOT":19,">":20,"<":21,"-":22,"*":23,"/":24,"%":25,"^":26,"FUNCTION":27,"expseq":28,"ARRAY":29,";":30,",":31,"VARIABLE":32,"DECIMAL":33,"NUMBER":34,"ERROR":35,"$accept":0,"$end":1},
terminals_: {5:"EOF",8:"STRING",9:"&",10:"=",11:"+",12:"(",13:")",14:"||",15:"&&",16:"<=",17:">=",18:"<>",19:"NOT",20:">",21:"<",22:"-",23:"*",24:"/",25:"%",26:"^",27:"FUNCTION",29:"ARRAY",30:";",31:",",32:"VARIABLE",33:"DECIMAL",34:"NUMBER",35:"ERROR"},
productions_: [0,[3,2],[4,1],[4,1],[4,1],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,2],[4,2],[4,3],[4,4],[4,1],[4,2],[28,1],[28,1],[28,3],[28,3],[6,1],[6,3],[7,1],[7,3],[2,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

      return $$[$0-1];
    
break;
case 2:

      this.$ = yy.callVariable($$[$0][0]);
      for(var i = 1; i < $$[$0].length; ++i) {
        if (undefined === this.$[$$[$0][i]]) {
          yy.throwError('#M/U');
        }
        this.$ = this.$[$$[$0][i]];
      }
    
break;
case 3:

      this.$ = yy.toNumber($$[$0]);
    
break;
case 4:

      this.$ = yy.trimEdges($$[$0]);
    
break;
case 5:

      this.$ = yy.evaluateByOperator('&', [$$[$0-2], $$[$0]]);
    
break;
case 6:

      this.$ = yy.evaluateByOperator('=', [$$[$0-2], $$[$0]]);
    
break;
case 7:

      this.$ = yy.evaluateByOperator('+', [$$[$0-2], $$[$0]]);
    
break;
case 8:

      this.$ = $$[$0-1];
    
break;
case 9:

      this.$ = yy.evaluateByOperator('||', [$$[$0-2], $$[$0]]);
    
break;
case 10:

      this.$ = yy.evaluateByOperator('&&', [$$[$0-2], $$[$0]]);
    
break;
case 11:

      this.$ = yy.evaluateByOperator('<=', [$$[$0-2], $$[$0]]);
    
break;
case 12:

      this.$ = yy.evaluateByOperator('>=', [$$[$0-2], $$[$0]]);
    
break;
case 13:

      this.$ = yy.evaluateByOperator('<>', [$$[$0-2], $$[$0]]);
    
break;
case 14:

      this.$ = yy.evaluateByOperator('NOT', [$$[$0-2], $$[$0]]);
    
break;
case 15:

      this.$ = yy.evaluateByOperator('>', [$$[$0-2], $$[$0]]);
    
break;
case 16:

      this.$ = yy.evaluateByOperator('<', [$$[$0-2], $$[$0]]);
    
break;
case 17:

      this.$ = yy.evaluateByOperator('-', [$$[$0-2], $$[$0]]);
    
break;
case 18:

      this.$ = yy.evaluateByOperator('*', [$$[$0-2], $$[$0]]);
    
break;
case 19:

      this.$ = yy.evaluateByOperator('/', [$$[$0-2], $$[$0]]);
    
break;
case 20:

      this.$ = yy.evaluateByOperator('%', [$$[$0-2], $$[$0]]);
    
break;
case 21:

      this.$ = yy.evaluateByOperator('^', [$$[$0-2], $$[$0]]);
    
break;
case 22:

      var n1 = yy.invertNumber($$[$0]);

      this.$ = n1;

      if (isNaN(this.$)) {
          this.$ = 0;
      }
    
break;
case 23:

      var n1 = yy.toNumber($$[$0]);

      this.$ = n1;

      if (isNaN(this.$)) {
          this.$ = 0;
      }
    
break;
case 24:

      var n1 = yy.toNumber($$[$0-1]);

      this.$ = $$[$0-1] * 0.01;

      if (isNaN(this.$)) {
          this.$ = 0;
      }
    
break;
case 25:

      this.$ = yy.callFunction($$[$0-2]);
    
break;
case 26:

      this.$ = yy.callFunction($$[$0-3], $$[$0-1]);
    
break;
case 29: case 33:

      this.$ = [$$[$0]];
    
break;
case 30:

      var result = [];
      var arr = eval("[" + yytext + "]");

      arr.forEach(function(item) {
        result.push(item);
      });

      this.$ = result;
    
break;
case 31: case 32:

      $$[$0-2].push($$[$0]);
      this.$ = $$[$0-2];
    
break;
case 34:

      this.$ = (Array.isArray($$[$0-2]) ? $$[$0-2] : [$$[$0-2]]);
      this.$.push($$[$0]);
    
break;
case 35:

      this.$ = $$[$0];
    
break;
case 36:

      this.$ = ($$[$0-2] + '.' + $$[$0]) * 1;
    
break;
case 37:

      this.$ = yy.throwError($$[$0]);
    
break;
}
},
table: [{2:10,3:1,4:2,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{1:[3]},{5:[1,14],9:$V8,10:$V9,11:$Va,14:$Vb,15:$Vc,16:$Vd,17:$Ve,18:$Vf,19:$Vg,20:$Vh,21:$Vi,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn},o($Vo,[2,2],{33:[1,31]}),o($Vo,[2,3]),o($Vo,[2,4]),{2:10,4:32,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:33,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:34,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{12:[1,35]},o($Vo,[2,27],{2:36,35:$V7}),o($Vp,[2,33]),o($Vo,[2,35],{33:[1,37]}),o([5,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,30,31,35],[2,37]),{1:[2,1]},{2:10,4:38,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:39,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:40,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:41,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:42,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:43,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:44,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:45,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:46,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:47,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:48,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:49,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:50,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:51,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},o($Vo,[2,24],{6:3,7:4,2:10,4:52,8:$V0,12:$V2,27:$V4,32:$V5,34:$V6,35:$V7}),{2:10,4:53,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{32:[1,54]},{9:$V8,10:$V9,11:$Va,13:[1,55],14:$Vb,15:$Vc,16:$Vd,17:$Ve,18:$Vf,19:$Vg,20:$Vh,21:$Vi,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn},o($Vq,[2,22],{9:$V8,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o($Vq,[2,23],{9:$V8,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),{2:10,4:58,6:3,7:4,8:$V0,11:$V1,12:$V2,13:[1,56],22:$V3,27:$V4,28:57,29:[1,59],32:$V5,34:$V6,35:$V7},o($Vo,[2,28]),{34:[1,60]},o([5,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,26,30,31],[2,5],{25:$Vm}),o([5,10,13,30,31],[2,6],{9:$V8,11:$Va,14:$Vb,15:$Vc,16:$Vd,17:$Ve,18:$Vf,19:$Vg,20:$Vh,21:$Vi,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o($Vq,[2,7],{9:$V8,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o([5,10,13,14,30,31],[2,9],{9:$V8,11:$Va,15:$Vc,16:$Vd,17:$Ve,18:$Vf,19:$Vg,20:$Vh,21:$Vi,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o([5,10,13,14,15,30,31],[2,10],{9:$V8,11:$Va,16:$Vd,17:$Ve,18:$Vf,19:$Vg,20:$Vh,21:$Vi,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o($Vr,[2,11],{9:$V8,11:$Va,20:$Vh,21:$Vi,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o($Vr,[2,12],{9:$V8,11:$Va,20:$Vh,21:$Vi,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o($Vr,[2,13],{9:$V8,11:$Va,20:$Vh,21:$Vi,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o($Vr,[2,14],{9:$V8,11:$Va,20:$Vh,21:$Vi,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o($Vs,[2,15],{9:$V8,11:$Va,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o($Vs,[2,16],{9:$V8,11:$Va,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o($Vq,[2,17],{9:$V8,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o($Vt,[2,18],{9:$V8,25:$Vm,26:$Vn}),o($Vt,[2,19],{9:$V8,25:$Vm,26:$Vn}),o($Vo,[2,20]),o([5,10,11,13,14,15,16,17,18,19,20,21,22,23,24,26,30,31],[2,21],{9:$V8,25:$Vm}),o($Vp,[2,34]),o($Vo,[2,8]),o($Vo,[2,25]),{13:[1,61],30:[1,62],31:[1,63]},o($Vu,[2,29],{9:$V8,10:$V9,11:$Va,14:$Vb,15:$Vc,16:$Vd,17:$Ve,18:$Vf,19:$Vg,20:$Vh,21:$Vi,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o($Vu,[2,30]),o($Vo,[2,36]),o($Vo,[2,26]),{2:10,4:64,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},{2:10,4:65,6:3,7:4,8:$V0,11:$V1,12:$V2,22:$V3,27:$V4,32:$V5,34:$V6,35:$V7},o($Vu,[2,31],{9:$V8,10:$V9,11:$Va,14:$Vb,15:$Vc,16:$Vd,17:$Ve,18:$Vf,19:$Vg,20:$Vh,21:$Vi,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn}),o($Vu,[2,32],{9:$V8,10:$V9,11:$Va,14:$Vb,15:$Vc,16:$Vd,17:$Ve,18:$Vf,19:$Vg,20:$Vh,21:$Vi,22:$Vj,23:$Vk,24:$Vl,25:$Vm,26:$Vn})],
defaultActions: {14:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 8;
break;
case 2:return 8;
break;
case 3:return 27;
break;
case 4:return 35;
break;
case 5:return 27;
break;
case 6:return 32;
break;
case 7:return 32;
break;
case 8:return 34;
break;
case 9:return 29;
break;
case 10:return 15;
break;
case 11:return 9;
break;
case 12:return 14;
break;
case 13:return ' ';
break;
case 14:return 33;
break;
case 15:return ':';
break;
case 16:return 30;
break;
case 17:return 31;
break;
case 18:return 23;
break;
case 19:return 24;
break;
case 20:return 22;
break;
case 21:return 11;
break;
case 22:return 26;
break;
case 23:return 12;
break;
case 24:return 13;
break;
case 25:return 17;
break;
case 26:return 16;
break;
case 27:return 18;
break;
case 28:return 20;
break;
case 29:return 21;
break;
case 30:return 19;
break;
case 31:return '"';
break;
case 32:return "'";
break;
case 33:return "!";
break;
case 34:return 10;
break;
case 35:return 25;
break;
case 36:return '#';
break;
case 37:return 5;
break;
}
},
rules: [/^(?:\s+)/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:[A-Za-z]{1,}[A-Za-z_0-9\.]+(?=[(]))/,/^(?:#[A-Z0-9\/]+(!|\?)?)/,/^(?:[A-Za-z\.]+(?=[(]))/,/^(?:[A-Za-z]{1,}[A-Za-z_0-9]+)/,/^(?:[A-Za-z_]+)/,/^(?:[0-9]+)/,/^(?:\[(.*)?\])/,/^(?:&&)/,/^(?:&)/,/^(?:\|\|)/,/^(?: )/,/^(?:[.])/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:>=)/,/^(?:<=)/,/^(?:<>)/,/^(?:>)/,/^(?:<)/,/^(?:NOT\b)/,/^(?:")/,/^(?:')/,/^(?:!)/,/^(?:=)/,/^(?:%)/,/^(?:[#])/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = grammarParser;
exports.Parser = grammarParser.Parser;
exports.parse = function () { return grammarParser.parse.apply(grammarParser, arguments); };
if (typeof module !== 'undefined' && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module), __webpack_require__(24)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.trimEdges = trimEdges;
/* eslint-disable import/prefer-default-export */
/**
 * Trim value by cutting character starting from the beginning and ending at the same time.
 *
 * @param {String} string String to trimming.
 * @param {Number} [margin=1] Number of character to cut.
 * @returns {String}
 */
function trimEdges(string) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  string = string.substring(margin, string.length - margin);

  return string;
}

/***/ })
/******/ ]);
});
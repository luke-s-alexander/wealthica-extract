var main =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var addon, addonOptions;

$(function () {

  // Parse Assets (Institutions response) JSON object into CSV string
  var parseAssetsCustomToCsvFile = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(jsonData) {
      var cashCsv, keys, columnDelimiter, lineDelimiter, csvColumnHeader, csvStr, shared;
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

              console.log(cashCsv);
              // Create array of column headers
              keys = ['category', 'class', 'symbol', 'alias', 'account', 'account_type',
              //'account_currency', -- Removed to simplify export file
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
                // Don't print any data at the position level, but capture shared data
                shared = [item.category, item.class, item.security.symbol, item.security.aliases[0]];
                // Loop through investments for each position
                item.investments.forEach(function (element) {
                  var investment = element.investment;
                  var parsedInvestment = investment.split(":");

                  var investment_data = [parsedInvestment[0], // -- Removed (currency portion) to simplify export file
                  parsedInvestment[1], // -- Removed (currency portion) to simplify export file
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
                    }
                    csvStr += entry;
                  });
                  csvStr += lineDelimiter;
                });
              });
              csvStr = csvStr.concat(cashCsv);
              return _context.abrupt('return', encodeURIComponent(csvStr));

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

              console.log(csvStr);
              dataUri = 'data:text/csv;charset=utf-8,' + csvStr;
              today = new Date();
              date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
              time = today.getHours().toString() + today.getMinutes() + today.getSeconds();
              exportFileDefaultName = 'positions_' + date + time + '.csv';
              linkElement = document.createElement('a');

              linkElement.setAttribute('href', dataUri);
              linkElement.setAttribute('download', exportFileDefaultName);
              linkElement.click();

            case 13:
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
    }
    // Create array of column headers
    var keys = ['category', 'class', 'symbol', 'alias', 'account', 'account_type',
    // 'account_currency', -- Removed to simplify export file
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
    // Loop through position results
    jsonData.forEach(function (item) {
      // Don't print any data at the position level, but capture shared data
      shared = ['Cash', 'cash', 'Cash', null];
      // Loop through investments for each position
      item.investments.forEach(function (element) {

        var investment_data = [element.id, element.type,
        // element.currency, -- Removed to simplify export file
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
            }
            csvStr += entry;
          });
          csvStr += lineDelimiter;
        };
      });
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
        var investment = element.investment;
        var parsedInvestment = investment.split(":");

        var investment_data = [parsedInvestment, element.quantity, element.book_value, element.market_value, element.gain_percent, element.gain_amount];
        // Add investment data to shared position data
        investment_data = shared.concat(investment_data);
        // Loop through investment data and create csv row
        investment_data.forEach(function (entry, index) {
          if (index > 0 && index < investment_data.length) {
            csvStr += columnDelimiter;
          }
          csvStr += entry;
        });
        csvStr += lineDelimiter;
      });
    });
    // Add cash balances

    // Copied directly from the getInstitutions button above, for reference:
    // addon.api.getInstitutions(getQueryFromOptions(addonOptions)).then(function (response) {
    //   $('#result').html('List Institutions Result:<br><code>' + JSON.stringify(response, null, 2) + '</code>');
    //   exportInstitutionsToCsvFile(response);
    // }).catch(function (err) {
    //    $('#result').html('Error:<br><code>' + err + '</code>'); 
    // }).finally(function () {
    //   $('#getInstitutions').removeAttr('disabled');
    // });

    // Actual function for case balances:
    // Call the getInstitutions API for cash balances and set the function response to variable cashCsv
    var cashCsv = addon.api.getInstitutions(getQueryFromOptions(addonOptions)).then(function (response) {
      // call the parse Institutions fn to get csv string back (not file):
      var csv = parseInstitutionsToCsvFile(response);
      // function returns the new csv file from parse Institutions
      // Check that csv is correct - Confirmed
      // console.log(csv);
      return csv;
    }).catch(function (err) {
      // catch errors in console
      console.log(err);
    });

    console.log(JSON.stringify(cashCsv));
    // var cashCsv = parseInstitutionsToCsvFile(cashJSON);
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
});

/***/ })
/******/ ]);